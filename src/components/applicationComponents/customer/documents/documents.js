import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import HeaderData from './headerData.json';
import MaterializeComponent from 'materialize-css';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import dateUtil from '../../../../utils/dateUtil';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';
import { configuration } from '../../../../appConfig';
import Documents from '../../../documents';

class CustomerDocuments extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.filesToDisplay = [];
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
        //this.props.actions.FetchDocumentsDetails();
        this.props.actions.FetchMasterDocumentTypes();

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
        this.updatedData[e.target.name] = document.getElementById(e.target.name).checked ? "Yes" : "No";
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
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                if (this.props.editDocumentDetails.recordStatus !== "N") {
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
                    let filesObj = {};
                    const customerVisibleStatus = document.getElementById("visibleToCustomer").checked ? "Yes" : "No";
                    const visibleToTSStatus = document.getElementById("visibleToTS").checked ? "Yes" : "No";
                    documentFile.map(document => {
                        if (parseInt(document.size / 1024) > configuration.fileLimit) {
                            failureFiles.push(document.name);
                        }
                        else {
                            filesToBeUpload.push(document);
                        }
                    });
                    if (failureFiles.length > 0) {
                        MaterializeComponent.toast({
                            html: failureFiles.toString() + " " + 'File limit exceded, please insert the file <= 10MB',
                            classes: 'dangerToast'
                        });
                    }
                    else {
                        if (filesToBeUpload.length > 0) {
                            const formData = new FormData();
                            filesToBeUpload.map((file) => {
                                formData.append("files", file);
                                // formData.append("sourceId", this.props.selectedCustomerCode),
                                // formData.append("sourceType", "C")
                            });
                            this.props.actions.UploadDocumentData(formData)
                                .then(response => {
                                    if (response) {
                                        filesToBeUpload.map((document, i) => {
                                            this.updatedData = {
                                                name: document.name,
                                                documentType: docType,
                                                documentSize: parseInt(document.size / 1024),
                                                uploadedOn: date,
                                                visibleToCustomer: customerVisibleStatus,
                                                visibleToTS: visibleToTSStatus,
                                                recordStatus: "N",
                                                documentId: Math.floor(Math.random() * (Math.pow(10, 5))),
                                                uploadDataId: response[i],
                                                modifiedBy: this.props.loggedInUser
                                            };
                                            filesObj[response[i]] = document;
                                            this.filesToDisplay.push(filesObj);
                                            newlyCreatedRecords.push(this.updatedData);
                                            this.updatedData = {};
                                            filesObj = {};
                                        });
                                    }
                                    if (newlyCreatedRecords.length > 0) {
                                        this.props.actions.AddDocumentDetails(newlyCreatedRecords);
                                        this.props.actions.DisplayDocuments(this.filesToDisplay);
                                        this.updatedData = {};
                                        this.clearData();
                                    }
                                });
                            document.getElementById("cancelDocumentSubmit").click();
                        }
                    }
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
                                visibleToCustomer: record.visibleToCustomer,
                                visibleToTS: record.visibleToTS,
                                recordStatus: "N",
                                documentId: Math.floor(Math.random() * (Math.pow(10, 5))),
                                uploadDataId: response[i],
                                modifiedBy: this.props.loggedInUser
                            };
                            records.push(this.updatedData);
                        });
                        this.props.actions.AddDocumentDetails(records);
                        this.updatedData = {};
                    }
                    else {
                        MaterializeComponent.toast({
                            html: 'Unable to copy & paste the record',
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
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.DOCUMENT_DELETE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteRecord,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };
            // this.confirmationModalData =confirmationObject;
            // this.setState({isOpen:true})
            this.props.actions.DisplayModal(confirmationObject);
        }
        else {
            MaterializeComponent.toast({
                html: 'Select Any one Row to delete',
                classes: 'warningToast'
            });
        }
    }

    // downloadRecord = () => {    
    //     var selectedRecords = this.child.getSelectedRows();
    //     if (selectedRecords.length > 0) {
    //         if (selectedRecords.length == 1) {
    //            this.props.actions.DownloadDocumentData(selectedRecords[0].uploadDataId)
    //            .then(response => {
    //                alert("Hello")
    //            })
    //         }
    //         else {
    //             MaterializeComponent.toast({
    //                 html: 'Multiple records selected, Select only one record to download',
    //                 classes: 'warningToast'
    //             })
    //         }
    //     }
    //     else {
    //         MaterializeComponent.toast({
    //             html: 'Please select a record to download',
    //             classes: 'warningToast'
    //         })
    //     }
    // }

    deleteRecord = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            this.child.removeSelectedRows(selectedRecords);
            this.props.actions.DeleteDocumentDetails(selectedRecords);
            // this.setState({isOpen:false})
            this.props.actions.HideModal();
        }
    }

    confirmationRejectHandler = () => {
        // this.setState({isOpen:false})
        this.props.actions.HideModal();
    }

    render() {
        const { masterDocumentTypesData, showButton, editDocumentDetails, DocumentsData } = this.props;
        let customerDocumentsData = [];
        if (DocumentsData) {
            customerDocumentsData = DocumentsData.filter(document => document.recordStatus !== 'D');
        }
        this.props.editDocumentDetails.visibleToCustomer && (document.getElementById("visibleToCustomer").checked = (editDocumentDetails.visibleToCustomer === "Yes" ? true : false));
        this.props.editDocumentDetails.visibleToTS && (document.getElementById("visibleToTS").checked = (editDocumentDetails.visibleToTS === "Yes" ? true : false));
        // const modelData = {...this.confirmationModalData,isOpen:this.state.isOpen};
        return (
            <Fragment>
                {/* <CustomModal modalData={modelData}/>  */}
                <div className="customerBlock">
                    <div id="uploadDocuments" className="modal">
                        <form onSubmit={this.documentSubmitHandler} id="Documents">
                            <div className="modal-content">
                                <h6>Documents</h6>
                                <div className="row">
                                    <div className="col s6">
                                        <label className="customLabel">File Type:</label>
                                        <select className="customInputs browser-default" onChange={this.handlerChange} defaultValue={editDocumentDetails.documentType} id="documentType" name="documentType">
                                            <option value="">Select File Type</option>
                                            {masterDocumentTypesData ?
                                                masterDocumentTypesData.map((data, i) => {
                                                    if (data.name === editDocumentDetails.documentType)
                                                        return <option key={i} value={data.name} selected>{data.name}</option>;
                                                    else
                                                        return <option key={i} value={data.name}>{data.name}</option>;
                                                }) : (MaterializeComponent.toast({
                                                    html: 'masterDocumentTypesData api is down..., Try after sometime',
                                                    classes: 'warningToast'
                                                }))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    {showButton ?
                                        <div className="col s12">
                                            <label className="customLabel">Document Name</label>
                                            <input type="text" id="documentName" name="name" defaultValue={editDocumentDetails.name} onChange={this.handlerChange} className="customInputs browser-default validate" disabled />
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
                                    <div className="col s3 switch">
                                        <label>
                                            Customer Visible
                                        <input type="checkbox" id="visibleToCustomer" onBlur={this.switchHandlerChange} name="visibleToCustomer" />
                                            <span className="lever"></span>
                                        </label>
                                    </div>
                                    <div className="col s3 switch">
                                        <label>
                                            Specialist Visible
                                        <input type="checkbox" id="visibleToTS" onBlur={this.switchHandlerChange} name="visibleToTS" />
                                            <span className="lever"></span>
                                        </label>
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
                    <Documents DocumentsData={customerDocumentsData}
                        headerData={HeaderData}
                        Id="uploadDocuments" // Id of the popup div
                        copyRecord={this.copyRecord}
                        pasteRecord={this.pasteRecord}
                        documentDeleteClickHandler={this.documentDeleteClickHandler}
                        onRef={ref => { this.child = ref; }} />
                </div>
            </Fragment>
        );
    }
}

CustomerDocuments.propTypes = {
    DocumentsData: PropTypes.array.isRequired,
    masterDocumentTypesData: PropTypes.array.isRequired
};

CustomerDocuments.defaultprops = {
    DocumentsData: [],
    masterDocumentTypesData: []
};

export default CustomerDocuments;