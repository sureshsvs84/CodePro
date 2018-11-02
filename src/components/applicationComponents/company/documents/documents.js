import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import { HeaderData } from './headerData.js';
import MaterializeComponent from 'materialize-css';
import dateUtil from '../../../../utils/dateUtil';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';
import CompanyDocument from '../../../documents/documents';
import { configuration } from '../../../../appConfig';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
const localConstant = getlocalizeData();
class CompanyDocuments extends Component {
    constructor(props) {
        super(props);
        this.filesToDisplay = [];
        this.updatedData = {};
        this.state = {
            isOpen: false
        };
        this.confirmationModalData = {
            title: "",
            message: "",
            type: "",
            modalClassName: "",
            buttons: []
        };
    }
    componentDidMount() {
        this.props.actions.FetchMasterCompanyDocumentTypes();
        const tab = document.querySelectorAll('.tabs');
        const tabInstances = MaterializeComponent.Tabs.init(tab);
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
        document.getElementById("Documents").reset();
    }
    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }
    switchHandlerChange = (e) => {
        this.updatedData[e.target.name] = document.getElementById(e.target.name).checked ? true : false;
    }
    documentSubmitHandler = (e) => {
        e.preventDefault();
        let date = new Date();
        date = dateUtil.postDateFormat(date, '-');
        if (this.props.showButton === true) {
            if (this.updatedData.documentType === "") {
                MaterializeComponent.toast({
                    html: 'Select a file type',
                    classes: 'warningToast'
                });
            }
            else {
                this.updatedData["uploadedOn"] = date;
                if (this.props.editCompanyDocumentDetails.recordStatus !== "N") {
                    this.updatedData["recordStatus"] = "M";
                }
                this.props.actions.UpdateDocumentDetails(this.updatedData);
                this.updatedData = {};
                this.clearData();
                document.getElementById("cancelDocumentSubmit").click();
            }

        }
        if (this.props.showButton === false) {
            if (this.updatedData.documentType === undefined || this.updatedData.documentType === "") {
                MaterializeComponent.toast({
                    html: 'Select a file type',
                    classes: 'warningToast'
                });
            }
            else {
                const docType = document.getElementById("documentType").value;
                const documentFile = Array.from(document.getElementById("uploadFiles").files);
                if (documentFile.length > 0) {
                    const newlyCreatedRecords = [];
                    const filesToBeUpload = [];
                    const failureFiles = [];
                    const filesObj = {};
                    const customerVisibleStatus = document.getElementById("isVisibleToCustomer").checked;
                    const visibleToTSStatus = document.getElementById("isVisibleToTS").checked;
                    documentFile.map(document => {
                        if (parseInt(document.size / 1024) > 10240) {
                            failureFiles.push(document.name);
                        }
                        else {
                            filesToBeUpload.push(document);
                        }
                        return document;
                    });
                    if (filesToBeUpload.length > 0) {
                        const formData = new FormData();
                        filesToBeUpload.map((file) => {
                            return formData.append("files", file);
                        });
                        this.props.actions.UploadDocumentData(formData)
                            .then(response => {
                                filesToBeUpload.map((document, i) => {
                                    this.updatedData = {
                                        name: document.name,
                                        documentType: docType,
                                        documentSize: parseInt(document.size / 1024),
                                        uploadedOn: date,
                                        isVisibleToCustomer: customerVisibleStatus,
                                        isVisibleToTS: visibleToTSStatus,
                                        recordStatus: "N",
                                        companyDocumentId: Math.floor(Math.random() * (Math.pow(10, 5))),
                                        uploadDataId: response[i],
                                        modifiedBy: this.props.loggedInUser
                                    };
                                    filesObj[response[i]] = document;
                                    this.filesToDisplay.push(filesObj);
                                    newlyCreatedRecords.push(this.updatedData);
                                    this.updatedData = {};
                                });
                                if (newlyCreatedRecords.length > 0) {
                                    this.props.actions.AddDocumentDetails(newlyCreatedRecords);
                                    this.props.actions.DispalyDocumentDetails(this.filesToDisplay);
                                    this.updatedData = {};
                                    this.clearData();
                                }
                            });
                        this.filesToDisplay.push(filesObj);
                    }
                    if (failureFiles.length > 0) {
                        MaterializeComponent.toast({
                            html: failureFiles.toString() + 'File limit exceded, please insert the file <= 10MB',
                            classes: 'warningToast'
                        });
                    }
                    document.getElementById("cancelDocumentSubmit").click();
                }
                else {
                    MaterializeComponent.toast({
                        html: 'No file selected. Please select a file',
                        classes: 'warningToast'
                    });
                }
            }
        }
    }
    clearData = () => {
        document.getElementById("Documents").reset();
        this.props.actions.ShowButtonHandler();
    }
    copyRecord = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            this.props.actions.CopyDocumentDetails(selectedRecords);
        }
        else {
            MaterializeComponent.toast({
                html: 'Select a record to copy',
                classes: 'warningToast'
            });
        }
    }
    pasteRecord = () => {
        const records = [];
        let recordToBeCopy = '';
        const recordToPaste = this.props.copiedDocumentDetails;
        if (recordToPaste.length > 0) {
            let date = new Date();
            date = dateUtil.postDateFormat(date, '-');
            recordToPaste.map(record => {
                if (recordToBeCopy.length <= 0)
                    recordToBeCopy = record.uploadDataId;
                else
                    recordToBeCopy = recordToBeCopy + ',' + record.uploadDataId;
            });

            this.props.actions.PasteDocumentUploadData({ Id: recordToBeCopy })
                .then(response => {
                    if (response) {
                        recordToPaste.map((record, i) => {
                            this.updatedData = {
                                name: record.name,
                                documentType: record.documentType,
                                documentSize: record.documentSize,
                                uploadedOn: date,
                                isVisibleToCustomer: record.isVisibleToCustomer,
                                isVisibleToTS: record.isVisibleToTS,
                                recordStatus: "N",
                                companyDocumentId: Math.floor(Math.random() * (Math.pow(10, 5))),
                                uploadDataId: response[i],
                                modifiedBy: this.props.loggedInUser
                            };

                            return records.push(this.updatedData);
                        });
                        this.props.actions.AddDocumentDetails(records);
                        this.updatedData = {};
                    }
                    else {
                        MaterializeComponent.toast({
                            html: 'Unable to copy & paste the records. Please try after sometime....',
                            classes: 'warningToast'
                        });
                    }
                });
        }
        else {
            MaterializeComponent.toast({
                html: 'Select a record to paste',
                classes: 'warningToast'
            });
        }
    }

    documentDeleteClickHandler = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length === 0) {
            MaterializeComponent.toast({
                html: 'Select any one document',
                classes: 'warningToast'
            });
        }
        else {

            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.DOCUMENT_DELETE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deletecompanyRecord,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };
            this.props.actions.DisplayModal(confirmationObject);
        }
    }

    deletecompanyRecord = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            this.child.removeSelectedRows(selectedRecords);
            this.props.actions.DeleteCompanyDocumentDetails(selectedRecords);
            this.props.actions.HideModal();
        }
    }
    confirmationRejectHandler = () => {
        this.props.actions.HideModal();
    }
    render() {

        const { masterDocumentTypesData, showButton, editCompanyDocumentDetails, DocumentsData } = this.props;
        let companyDocumentsData = [];
        if (DocumentsData) {
            companyDocumentsData = DocumentsData.filter(document => document.recordStatus !== 'D');
        }
        const data = companyDocumentsData;
        this.props.editCompanyDocumentDetails.isVisibleToCustomer && (document.getElementById("isVisibleToCustomer").checked = (editCompanyDocumentDetails.isVisibleToCustomer === true ? true : false));
        this.props.editCompanyDocumentDetails.isVisibleToTS && (document.getElementById("isVisibleToTS").checked = (editCompanyDocumentDetails.isVisibleToTS === true ? true : false));
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };

        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                <div className="customerBlock">
                    <div id="uploadDocuments" className="modal">
                        <form onSubmit={this.documentSubmitHandler} id="Documents">
                            <div className="modal-content">
                                <h6>Documents</h6>
                                <div className="row">
                                    <div className="col s6 mb-2">
                                        <CustomInput
                                            hasLabel={true}
                                            label={localConstant.companyDetails.Documents.SELECT_FILE_TYPE}
                                            divClassName='col s6 pl-0 '
                                            type='select'
                                            required={true}
                                            selected={true}
                                            className="customInputs browser-default"
                                            optionsList={masterDocumentTypesData}
                                            optionName='name'
                                            optionValue="name"
                                            onSelectChange={this.handlerChange}
                                            name="documentType"
                                            id="documentType"
                                            defaultValue={editCompanyDocumentDetails.documentType}
                                        />
                                    </div>
                                    {showButton ?
                                        <div className="col s12">
                                            <label className="customLabel">Document Name</label>
                                            <input type="text" id="documentName" name="name" defaultValue={editCompanyDocumentDetails.name} onChange={this.handlerChange} className="customInputs browser-default validate" disabled />
                                        </div> :
                                        <div className="col s12">
                                            <div className="file-field">
                                                <div className="btn">
                                                    <i className="zmdi zmdi-upload zmdi-hc-lg"></i>
                                                    <input id="uploadFiles" type="file" accept={configuration.allowedFileFormats} multiple required />
                                                </div>
                                                <div className="file-path-wrapper">
                                                    <input className="file-path validate"
                                                        placeholder="Upload multiple files" />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="row">
                                    <div className="col s4 m4">
                                        <CustomInput
                                            type='switch'
                                            switchLabel={localConstant.modalConstant.VISIBLE_TO_CUSTOMER}
                                            isSwitchLabel={true}
                                            switchName="isVisibleToCustomer"
                                            id="isVisibleToCustomer"
                                            className="lever"
                                            onChangeToggle={this.switchHandlerChange}
                                            defaultChecked={editCompanyDocumentDetails.isVisibleToCustomer}
                                        />
                                    </div>
                                    <div className="col s4 m4">
                                        <CustomInput
                                            type='switch'
                                            switchLabel={localConstant.modalConstant.VISIBLE_TO_TS}
                                            isSwitchLabel={true}
                                            switchName="isVisibleToTS"
                                            id="isVisibleToTS"
                                            onChangeToggle={this.switchHandlerChange}
                                            defaultChecked={editCompanyDocumentDetails.isVisibleToTS}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" id="cancelDocumentSubmit" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat">CANCEL</button>
                                    {!showButton ?
                                        <button type="submit" className="waves-effect waves-teal btn-small">SUBMIT</button> :
                                        <button type="submit" className="waves-effect waves-teal btn-small">SUBMIT</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <CompanyDocument DocumentsData={companyDocumentsData}
                        headerData={HeaderData}
                        Id="uploadDocuments" // Id of the popup div
                        copyRecord={this.copyRecord}
                        pasteRecord={this.pasteRecord}
                        documentSubmitHandler={this.documentSubmitHandler}
                        documentDeleteClickHandler={this.documentDeleteClickHandler}
                        onRef={ref => { this.child = ref; }} />
                </div>
            </Fragment>
        );
    }

}
CompanyDocuments.propTypes = {
    DocumentsData: PropTypes.array.isRequired,
    masterDocumentTypesData: PropTypes.array.isRequired,
    gridProps: PropTypes.array.isRequired
};

CompanyDocuments.defaultprops = {
    DocumentsData: [],
    masterDocumentTypesData: [],
    gridProps: {}
};

export default CompanyDocuments;