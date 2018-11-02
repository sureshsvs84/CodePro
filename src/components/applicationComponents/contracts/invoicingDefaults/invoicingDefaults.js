import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import PropTypes from 'proptypes';
import { HeaderData } from './headerData.js';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import CardPanel from '../../../baseComponents/cardPanel';
import LabelwithValue from '../../../baseComponents/customLabelwithValue';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
import Modal from '../../../baseComponents/modal';
import CustomModal from '../../../baseComponents/customModal';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
const localConstant = getlocalizeData();

const InvoicingDefault = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.contract.INVOICING_DEFAULTS} colSize="s12">
        <div className="row mb-0">
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col '
                className="browser-default "
                colSize='s6'
                label={localConstant.contract.INVOICE_PAYMENT_TERMS}
                labelClass="mandate"
                inputClass="customInputs"
                optionValue='name'
                optionName="name"
                optionsList={props.invoicePaymentTerms}
                disabled = {props.interactionMode}
            />
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.SALES_TAX}
                labelClass="mandate"
                optionValue='name'
                optionName="name"
                optionsList={props.salesTax}
                disabled = {props.interactionMode}
            />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                name='contactPersonName'
                label={localConstant.contract.CUSTOMER_CONTRACT_CONTACT}
                labelClass="mandate"
                optionValue='contactPersonName'
                optionName="contactPersonName"
                optionsList={props.customerContractContact}
                disabled = {props.interactionMode}
            />
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.WITH_HOLDING_TAX}
                labelClass="mandate"
                optionValue='name'
                optionName="name"
                optionsList={props.withHoldingTax}
                disabled = {props.interactionMode}
            />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.CUSTOMER_CONTRACT_ADDRESS}
                labelClass="mandate"
                optionValue='address'
                optionName="address"
                optionsList={props.customerContractAddress}
                disabled = {props.interactionMode}
            />
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.INVOICE_CURRENCY}
                labelClass="mandate"
                optionValue='code'
                optionName="code"
                optionsList={props.invoiceCurrency}
                disabled = {props.interactionMode} />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.CUSTOMER_INVOICE_CONTACT}
                labelClass="mandate"
                optionValue='contactPersonName'
                optionName="contactPersonName"
                optionsList={props.customerContractContact}
                disabled = {props.interactionMode}
            />
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.INVOICE_GROUPING}
                labelClass="mandate"
                optionValue='name'
                optionName="name"
                optionsList={props.invoiceGrouping}
                disabled = {props.interactionMode}
            />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.INVOICE_ADDRESS}
                labelClass="mandate"
                optionValue='address'
                optionName="address"
                optionsList={props.customerContractAddress}
                disabled = {props.interactionMode}
            />
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.INVOICE_FOOTER}
                labelClass="mandate"
                name='msgText'
                optionValue='msgText'
                optionName="msgText"
                optionsList={props.invoiceFooter}
                disabled = {props.interactionMode}
            />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true}
                type='select'
                divClassName='col'
                className="browser-default"
                colSize='s6'
                label={localConstant.contract.INVOICE_REMITTANCE_TEXT}
                labelClass="mandate"
                name='msgText'
                optionValue='msgText'
                optionName="msgText"
                optionsList={props.invoiceRemittanceText}
                disabled = {props.interactionMode}
            />
        </div>
        <div className="row mt-3 ">
            <CustomInput hasLabel={false}
                placeholder="Invoice Instruction Notes"
                divClassName="col"
                type='textarea'
                inputName='InvoiceHeader'
                colSize='s12'
                inputClass="customInputs" 
                disabled = {props.interactionMode}
                />
        </div>
        <div className="row p4">
            <CustomInput hasLabel={true}
                placeholder="Invoice Free Text"
                label={localConstant.contract.ASSIGNMENT_INSTRUCTIONAL_OPERATIONAL_NOTES}
                divClassName="col"
                type='textarea'
                inputName='InvoiceHeader'
                colSize='s12'
                inputClass="customInputs"
                disabled = {props.interactionMode}
                />
        </div>
    </CardPanel>
);

const DefaultInvoiceReferences = (props) => (
    <div className="row">
        <div className="col s7">
            <p className="col pl-0 bold">{localConstant.contract.DEFAULT_INVOICE_REFERENCE}</p>
            <CardPanel className="white lighten-4 black-text" colSize="s12">
                <ReactGrid gridColData={HeaderData.ContractInvoicingDefaultHeader} gridRowData={props.defaultInvoiceRefernces} onRef={props.onInvoiceDelete} />
                <div className="right-align mt-2">
                    <a href="#" onClick={props.invoiceReferenceCreateHandler} className="btn-small">{localConstant.commonConstants.ADD}</a>
                    <a href="#confirmation_Modal" onClick={props.onInvoiceDefultDeleteClick} className="btn-small ml-2 modal-trigger">{localConstant.commonConstants.DELETE}</a>
                </div>
            </CardPanel>
        </div>
        <div className="mt-2 col s5">
            <p className="col mt-2 pl-0 bold">{localConstant.contract.DEFAULT_INVOICE_ATTACHMNET_TYPES}</p>
            <CardPanel className="white lighten-4 black-text" colSize="s12">
                <ReactGrid gridColData={HeaderData.ContractAttachmentTypesHeader} gridRowData={props.defaultInvoiceAttachmentTypes} onRef={props.onAttachmentDelete} />
                <div className="right-align mt-2">
                    <a href="#" onClick={props.invoiceAccountTypeCreateHandler} className="btn-small">{localConstant.commonConstants.ADD}</a>
                    <a href="#confirmation_Modal" onClick={props.onAttachmentTypeDeleteClick} className="btn-small ml-2 modal-trigger">{localConstant.commonConstants.DELETE}</a>
                </div>
            </CardPanel>
        </div>
    </div>
);
const InvoicingDefaultModal = (props) => (
    <div>
        <LabelwithValue colSize="s12" divClassName='col loadedDivision' />
        <div className="row">
            <CustomInput
                hasLabel={true}
                type='select'
                divClassName='col loadedDivision'
                label="Reference Type"
                colSize='s6'
                optionsList={props.referenceType}
                optionName='name'
                optionValue="name"
                labelClass="mandate"
                name="referenceType"
                className="browser-default customInputs"
                onSelectChange={props.handlerChange}
                interactionMode = {props.interactionMode}
            />
        </div>
        <div className="row">
            <CustomInput
                type='switch'
                colSize="s3"
                switchLabel="Assignment"
                isSwitchLabel={true}
                switchName="isVisibleToAssignment"
                id="isVisibleToAssignment"
                className="lever"
                onChangeToggle={props.handlerChange}
                checkedStatus={false}
                interactionMode = {props.interactionMode}
            />
            <CustomInput
                type='switch'
                colSize="s3"
                switchLabel="Visit"
                isSwitchLabel={true}
                switchName="isVisibleToVisit"
                id="isVisibleToVisit"
                className="lever"
                onChangeToggle={props.handlerChange}
                checkedStatus={false}
                interactionMode = {props.interactionMode}
            />
            <CustomInput
                type='switch'
                colSize="s3"
                switchLabel="Timesheet"
                isSwitchLabel={true}
                switchName="isVisibleToTimesheet"
                id="isVisibleToTimesheet"
                className="lever"
                onChangeToggle={props.handlerChange}
                checkedStatus={false}
                interactionMode = {props.interactionMode}
            />
        </div>
    </div>
);

const InvoiceAttachmentTypeModal = (props) => (
    <CustomInput
        hasLabel={true}
        type='select'
        divClassName='col'
        label="Attachment Type"
        colSize='s12'
        optionsList={props.documentType}
        optionName='name'
        optionValue="name"
        labelClass="mandate"
        name="documentType"
        className="browser-default customInputs"
        onSelectChange={props.handlerChange}
        interactionMode = {props.interactionMode}
    />
);

class InvoicingDefaults extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.state = {
            isOpen: false,
        };

        this.defaultInvoiceReferenceAddButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.createInvoiceReference,
                btnID: "createInvoiceReference",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelInvoiceReference,
                btnID: "cancelInvoiceReference",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];

        this.defaultInvoiceReferenceEditButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.editInvoiceReference,
                btnID: "editInvoiceReference",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelInvoiceReference,
                btnID: "cancelInvoiceReference",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];

        this.defaultInvoiceAttachmentTypesAddButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.createInvoiceAttachmentTypes,
                btnID: "createInvoiceAttachmentTypes",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelInvoiceAttachmentTypes,
                btnID: "cancelInvoiceAttachmentTypes",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];

        this.defaultInvoiceAttachmentTypesEditButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.editInvoiceAttachmentTypes,
                btnID: "editInvoiceAttachmentTypes",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelInvoiceAttachmentTypes,
                btnID: "cancelInvoiceAttachmentTypes",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];
    }

    componentDidMount() {
        this.props.actions.FetchInvoicingDefaults();
        this.props.actions.FetchDefaultInvoiceReferences();
        this.props.actions.FetchDefaultInvoiceAttachmentTypes();
        this.props.actions.FetchReferenceType();
        this.props.actions.FetchDocumentTypeMasterData();
    };

    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }

    /**
     * Invoice Reference OnClick Handler
     */
    InvoiceReferenceCreateHandler = () => {
        this.props.actions.InvoiceReferenceEditCheck(false);
        this.props.actions.InvoiceReferenceModalState(true);
    }

    /**
     * Create or Add the new Invoice Reference 
     */
    createInvoiceReference = (e) => {
        e.preventDefault();
        let isExist = false;
        if (this.updatedData.referenceType === undefined || this.updatedData.referenceType === "") {
            MaterializeComponent.toast({
                html: 'Select From Reference Type',
                classes: 'warningToast'
            });
        }
        else {
            if (this.updatedData.referenceType !== null || this.updatedData.referenceType !== undefined) {
                isExist = this.props.defaultInvoiceRefernces.map(invoice => {
                    if (invoice.referenceType === this.updatedData.referenceType) {
                        return !isExist;
                    }
                    else {
                        return isExist;
                    }
                });
            }
            if (isExist.includes(true)) {
                MaterializeComponent.toast({
                    html: 'Reference type already exist',
                    classes: 'warningToast'
                });
            }
            else {
                this.updatedData["recordStatus"] = "N";
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData["displayOrder"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                this.updatedData["isVisibleToTimesheet"] = this.updatedData.isVisibleToTimesheet === undefined ? "false" : "true";
                this.updatedData["isVisibleToAssignment"] = this.updatedData.isVisibleToAssignment === undefined ? "false" : "true";
                this.updatedData["isVisibleToVisit"] = this.updatedData.isVisibleToVisit === undefined ? "false" : "true";
                this.props.actions.AddNewInvoiceDefault(this.updatedData);
                this.updatedData = {};
                this.props.actions.InvoiceReferenceModalState(false);
            }
        }
    }

    /**
     * Edit the existing Invoice Reference
     */
    editInvoiceReference = (e) => {
        e.preventDefault();
    }

    /**
     * Closing the popup of Invoice Reference
     */
    cancelInvoiceReference = () => {
        this.props.actions.InvoiceReferenceModalState(false);
    }

    /**
     * Account Type OnClick Handler
     */
    InvoiceAccountTypeCreateHandler = () => {
        this.props.actions.InvoiceAttachmentTypesEditCheck(false);
        this.props.actions.InvoiceAttachmentTypesModalState(true);
    }

    /**
     * Create or Add the new Invoice Attachment Types
     */
    createInvoiceAttachmentTypes = (e) => {
        e.preventDefault();
        let isExist = false;
        if (this.updatedData.documentType === undefined || this.updatedData.documentType === "") {
            MaterializeComponent.toast({
                html: 'Select a document type',
                classes: 'warningToast'
            });
        }
        else {
            if (this.updatedData.documentType !== null || this.updatedData.documentType !== undefined) {
                isExist = this.props.defaultInvoiceAttachmentTypes.map(attchmentType => {
                    if (attchmentType.documentType === this.updatedData.documentType) {
                        return !isExist;
                    }
                    else {
                        return isExist;
                    }
                });
            }
            if (isExist.includes(true)) {
                MaterializeComponent.toast({
                    html: 'Attachment type already exist',
                    classes: 'warningToast'
                });
            }
            else {
                this.updatedData["recordStatus"] = "N";
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                //this.updatedData["displayOrder"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                this.updatedData["documentType"] = this.updatedData.documentType;
                this.props.actions.AddAttachmentTypes(this.updatedData);
                this.updatedData = {};
                this.props.actions.InvoiceAttachmentTypesModalState(false);
            }
        }
    }

    /**
     * Edit the existing Invoice Attachment Types
     */
    editInvoiceAttachmentTypes = (e) => {
        e.preventDefault();
    }

    /**
     * Closing the popup of Invoice Attachment Types
     */
    cancelInvoiceAttachmentTypes = (e) => {
        e.preventDefault();
        this.props.actions.InvoiceAttachmentTypesModalState(false);
    }    

    /**
     * OnClick handler for deleting the selected records of Invoice References
     */
    invoiceDefaultDeleteClickHandler = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.INVOICE_DEFAULT_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [
                    {
                        buttonName: "Yes",
                        onClickHandler: this.deleteSelected,
                        className: "modal-close m-1 btn-small"
                    },
                    {
                        buttonName: "No",
                        onClickHandler: this.confirmationRejectHandler,
                        className: "modal-close m-1 btn-small"
                    }
                ]
            };
            this.props.actions.DisplayModal(confirmationObject);
        }
        else {
            MaterializeComponent.toast({
                html: 'Select Any one Row to delete',
                classes: 'warningToast'
            });
        }
    }

    /**
     * Delete the selected records of Invoice References
     */
    deleteSelected = () => {
        const selectedData = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedData);
        this.props.actions.DeleteInvoiceDefault(selectedData);
        this.props.actions.HideModal();
    }

    /**
     * OnClick handler for deleting the selected records of Attachment Types
     */
    attachmentTypeDeleteClickHandler = () => {
        const selectedRecords = this.secondChild.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.ASSIGNMENT_TYPE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [
                    {
                        buttonName: "Yes",
                        onClickHandler: this.deleteSelectedAssignmentType,
                        className: "modal-close m-1 btn-small"
                    },
                    {
                        buttonName: "No",
                        onClickHandler: this.confirmationRejectHandler,
                        className: "modal-close m-1 btn-small"
                    }
                ]
            };
            this.props.actions.DisplayModal(confirmationObject);
        }
        else {
            MaterializeComponent.toast({
                html: 'Select Any one Row to delete',
                classes: 'warningToast'
            });
        }
    }

    /**
     * Delete the selected records of Attachment Types
     */
    deleteSelectedAssignmentType = () => {
        const selectedData = this.secondChild.getSelectedRows();
        this.child.removeSelectedRows(selectedData);
        this.props.actions.DeleteAttachmentTypes(selectedData);
        this.props.actions.HideModal();
    }

    confirmationRejectHandler = () => {
        this.props.actions.HideModal();
    }

    render() {
        const { defaultInvoiceRefernces, defaultInvoiceAttachmentTypes, contractDocumentTypeMasterData, invoiceRemittanceText, invoiceFooter, referenceType } = this.props;
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                <div className="genralDetailContainer customCard">
                    {this.props.isInvoiceReferenceModalOpen &&
                        <Modal title="Add Invoice Remittance" modalId="InvoicingDefaultModal" formId="invoicingDefaultModal" modalClass="popup-position" buttons={this.props.isInvoiceReferenceEdit ? this.defaultInvoiceReferenceEditButtons : this.defaultInvoiceReferenceAddButtons} isShowModal={this.props.isInvoiceReferenceModalOpen}>
                            <InvoicingDefaultModal referenceType={referenceType} switchHandlerChange={this.switchHandlerChange} handlerChange={this.handlerChange} />
                        </Modal>}
                    {this.props.isInvoiceAttachmentTypesModalOpen &&
                        <Modal title="Add Invoice Attachment Types" modalId="InvoiceAttachmentModal" formId="InvoiceAttachmentModal" modalClass="popup-position" buttons={this.props.isInvoiceAttachmentTypesEdit ? this.defaultInvoiceAttachmentTypesEditButtons : this.defaultInvoiceAttachmentTypesAddButtons} isShowModal={this.props.isInvoiceAttachmentTypesModalOpen}>
                            <InvoiceAttachmentTypeModal documentType={contractDocumentTypeMasterData} handlerChange={this.handlerChange} />
                        </Modal>}
                    <InvoicingDefault
                        customerContractContact={this.props.customerContractContact}
                        salesTax={this.props.salesTax}
                        withHoldingTax={this.props.withHoldingTax}
                        invoicePaymentTerms={this.props.invoicePaymentTerms}
                        customerContractAddress={this.props.customerContractAddress}
                        invoiceCurrency={this.props.invoiceCurrency}
                        invoiceGrouping={this.props.invoiceGrouping}
                        invoiceRemittanceText={invoiceRemittanceText && invoiceRemittanceText.invoiceRemittances}
                        invoiceFooter={invoiceFooter && invoiceFooter.invoiceFooters}
                        interactionMode = {this.props.interactionMode}
                    />
                    <DefaultInvoiceReferences defaultInvoiceRefernces={defaultInvoiceRefernces} defaultInvoiceAttachmentTypes={defaultInvoiceAttachmentTypes} invoiceReferenceCreateHandler={this.InvoiceReferenceCreateHandler} invoiceAccountTypeCreateHandler={this.InvoiceAccountTypeCreateHandler} onInvoiceDefultDeleteClick={this.invoiceDefaultDeleteClickHandler} onAttachmentTypeDeleteClick={this.attachmentTypeDeleteClickHandler} onInvoiceDelete={ref => { this.child = ref; }} onAttachmentDelete={ref => { this.secondChild = ref; }} />
                </div>
            </Fragment>
        );
    }
}

InvoicingDefaults.propTypes = {
    InvoicingDefaultsDetails: PropTypes.array.isRequired,
};

InvoicingDefaults.defaultprops = {
    InvoicingDefaultsDetails: [],
};

export default InvoicingDefaults;