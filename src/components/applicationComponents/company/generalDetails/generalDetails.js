import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import PropTypes from 'proptypes';
import Modal from '../../../baseComponents/modal';
import { HeaderData } from './headerData.js';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import CardPanel from '../../../baseComponents/cardPanel';
import LabelwithValue from '../../../baseComponents/customLabelwithValue';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';
import captalize from '../../../../utils/captalize';
import { isEmptyReturnDefault } from '../../../../utils/commonUtils';
import moment from 'moment';

const localConstant = getlocalizeData();
const GeneralDetail = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.companyDetails.generalDetails.GENERAL_DETAILS} colSize="s12">
        <div className="row m-0 mb-2">
            <LabelwithValue
                colSize="s3"
                label={localConstant.companyDetails.generalDetails.CODE}
                value={props.companyDetail.companyCode} />
            <LabelwithValue
                colSize="s5"
                label={localConstant.companyDetails.generalDetails.NAME}
                value={props.companyDetail.companyName} />
            <LabelwithValue
                colSize="s4"
                label={localConstant.companyDetails.generalDetails.OPERATING_COUNTRY}
                value={props.companyDetail.operatingCountry} />
            <LabelwithValue
                colSize="s3"
                label={localConstant.companyDetails.generalDetails.COGNOS_NO}
                value={props.companyDetail.cognosNumber} />
            <LabelwithValue
                colSize="s3"
                label={localConstant.companyDetails.generalDetails.NATIVE_CURRENCY}
                value={props.companyDetail.currency} />
            <LabelwithValue
                colSize="s2"
                label={localConstant.companyDetails.generalDetails.FULL_USE}
                value={props.companyDetail.isFullUse === true ? "Yes" : "No"} />
            <LabelwithValue
                colSize="s2"
                label={localConstant.companyDetails.generalDetails.ACTIVE}
                value={props.companyDetail.isActive === true ? "Yes" : "No"} />
            <LabelwithValue
                colSize="s2"
                label={localConstant.companyDetails.generalDetails.USER_ICTMS}
                value={props.companyDetail.isUseIctms === true ? "Yes" : "No"} />
        </div>
    </CardPanel>
);
const TaxDetails = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.companyDetails.generalDetails.TAXDETAILS} colSize="s12">
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.companyDetails.generalDetails.VAT_TAX_REGISTRATION_NO}
                type='select'
                colSize='s3'
                className="browser-default"
                name="euVatPrefix"
                optionsList={props.vatTaxNo}
                optionName='value'
                optionValue="value"
                defaultValue={props.taxRegistrationNo.euVatPrefix && (props.taxRegistrationNo.euVatPrefix).trim()}
                onSelectChange={props.onBlur}
            />
            <CustomInput
                hasLabel={false}
                label={localConstant.companyDetails.generalDetails.VAT_TAX_REGISTRATION_NO}
                divClassName="m4 mt-4"
                type='text'
                name="vatTaxRegNo"
                defaultValue={props.taxRegistrationNo.vatTaxRegNo}
                colSize='s4'
                inputClass="customInputs"
                maxLength="60"
                onValueBlur={props.onBlur}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.REVERSE_CHARGES_DISCLAIMER}
                divClassName="m5"
                type='text'
                name='reverseChargeDisclaimer'
                colSize='s5'
                inputClass="customInputs"
                maxLength="4000"
                defaultValue={props.invoiceDefaultData.reverseChargeDisclaimer}
                onValueBlur={props.onBlur}
            />
        </div>
    </CardPanel>
);

const InvoiceDetails = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.companyDetails.generalDetails.INVOICIING_DEFAULTS} colSize="s12">
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INVOICE_DESCRIPTION}
                type='text'
                name='invoiceDescriptionText'
                colSize='s4'
                inputClass="customInputs"
                maxLength="4000"
                defaultValue={props.invoiceDefaultData.invoiceDescriptionText}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INVOICE_DRAFT_TEXT}
                type='text'
                name='invoiceDraftText'
                colSize='s4'
                inputClass="customInputs"
                maxLength="4000"
                defaultValue={props.invoiceDefaultData.invoiceDraftText}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.LOGO}
                type='text'
                name='invoiceLogoName'
                colSize='s4'
                maxLength="4000"
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.invoiceLogoName}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INTER_COMPNY_TEXT}
                type='text'
                name="invoiceInterCompText"
                colSize='s4'
                maxLength="4000"
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.invoiceInterCompText}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INTERCO_DRAFT_TEXT}
                type='text'
                name='invoiceInterCompDraftText'
                colSize='s4'
                maxLength="4000"
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.invoiceInterCompDraftText}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INTER_COMPANY_DESCRIPTION}
                type='text'
                name='invoiceInterCompDescription'
                colSize='s4'
                maxLength="4000"
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.invoiceInterCompDescription}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INVOICE_SUMMARY_PAGE}
                divClassName="s6"
                type='textarea'
                name='invoiceSummarryText'
                maxLength="4000"
                colSize='s12'
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.invoiceSummarryText}
                onValueBlur={props.onBlur}
            />

            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.INVOICE_HEADER}
                divClassName="s12"
                type='textarea'
                name='invoiceHeader'
                maxLength="4000"
                colSize='s12'
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.invoiceHeader}
                onValueBlur={props.onBlur}
            />
        </div>
    </CardPanel>);
const Extranet = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.companyDetails.generalDetails.EXTRANET} colSize="s12">
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                label={localConstant.companyDetails.generalDetails.TECHNICAL_SPECIALIST}
                divClassName="s12"
                type='textarea'
                required={true}
                name='customerExtranetComment'
                colSize='s12'
                maxLength="4000"
                inputClass="customInputs"
                defaultValue={props.invoiceDefaultData.customerExtranetComment}
                onValueBlur={props.onBlur}
            />
        </div>
    </CardPanel>
);
const InvoiceRemittanceTextPopup = (props) => (
    <div>
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.IDENTIFIER}
                labelClass="mandate"
                divClassName="s6"
                type='text'
                maxLength="50"
                required={true}
                name='msgIdentifier'
                colSize='s6'
                inputClass="customInputs"
                defaultValue={props.selectedRow.msgIdentifier}
                onValueChange={props.onChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.INVOICE_REMITTANCE_TEXT}
                labelClass="mandate"
                divClassName="s6"
                type='text'
                maxLength="4000"
                required={true}
                name='msgText'
                colSize='s6'
                inputClass="customInputs"
                defaultValue={props.selectedRow.msgText}
                onValueChange={props.onChange}
            />
        </div>
        <div className="row mb-0">
            <CustomInput
                type='switch'
                switchLabel={localConstant.modalConstant.DEFAULT}
                isSwitchLabel={true}
                switchName="isDefaultMsg"
                id="isDefaultMsg"
                colSize="s3"
                onChangeToggle={props.onSwitchChange}
            />
            <CustomInput
                type='switch'
                switchLabel={localConstant.modalConstant.NOT_USED}
                isSwitchLabel={true}
                switchName="isActive"
                id="isActive"
                colSize="s3"
                onChangeToggle={props.onSwitchChange}
            />
        </div>
    </div>
);

const InvoiceFooterTextPopup = (props) => (
    <div>
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.IDENTIFIER}
                labelClass="mandate"
                divClassName="s6"
                type='text'
                maxLength="50"
                required={true}
                name='msgIdentifier'
                colSize='s6'
                inputClass="customInputs"
                defaultValue={props.selectedRow.msgIdentifier}
                onValueChange={props.onChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.INVOICE_FOOTER_TEXT}
                labelClass="mandate"
                divClassName="s6"
                type='text'
                required={true}
                name='msgText'
                maxLength="4000"
                colSize='s6'
                inputClass="customInputs"
                defaultValue={props.selectedRow.msgText}
                onValueChange={props.onChange}
            />
        </div>
        <div className="row mb-0">
            <CustomInput
                type='switch'
                switchLabel={localConstant.modalConstant.DEFAULT}
                isSwitchLabel={true}
                switchName="isDefaultMsg"
                id="isDefaultMsgFooter"
                colSize="s3"
                onChangeToggle={props.onSwitchChange}
            />
        </div>
    </div>
);

class GeneralDetails extends Component {
    constructor(props) {
        super(props);
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
        this.isDuplicateRecord = false;
        this.defaultMsg = {};
    }

    componentDidMount() {
        const tab = document.querySelectorAll('.tabs');
        const tabInstances = MaterializeComponent.Tabs.init(tab);
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);
        const datePicker = document.querySelectorAll('.datepicker');
        const datePickerInstances = MaterializeComponent.Datepicker.init(datePicker);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false, "preventScrolling": true });
    };

    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }

    switchHandlerChange = (e) => {
        this.updatedData[e.target.name] = document.getElementById(e.target.name).checked ? true : false;
    }

    invoiceDetailsHandlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
        this.updatedData["recordStatus"] = "M";
        this.props.actions.AddUpdateInvoiceDefaults(this.updatedData);
        this.updatedData = {};
    }

    companyInfoHandlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
        this.updatedData["recordStatus"] = "M";
        if (this.updatedData.reverseChargeDisclaimer) {
            this.props.actions.AddUpdateInvoiceDefaults(this.updatedData);
        }
        else {
            this.props.actions.AddUpdateCompanyInfo(this.updatedData);
        }
        this.updatedData = {};
    }

    invoiceRemittanceSubmitHandler = (e) => {
        e.preventDefault();
        let isAlreadyExist = false;
        let enteredWord = "";
        if (this.props.showButton === true) {
            if (this.updatedData.msgIdentifier) {
                enteredWord = captalize.captalizeWord(this.updatedData.msgIdentifier);
                if (this.props.InvoicingDetails.invoiceRemittances) {
                    isAlreadyExist = this.props.InvoicingDetails.invoiceRemittances.map(remittance => {
                        if (remittance.msgIdentifier !== null && remittance.msgIdentifier.toUpperCase() === enteredWord.toUpperCase() && remittance.recordStatus !== "D") {
                            return !isAlreadyExist;
                        }
                        else {
                            return isAlreadyExist;
                        }
                    });
                }
            }
            else {
                if (this.props.InvoicingDetails.invoiceRemittances) {
                    isAlreadyExist = this.props.InvoicingDetails.invoiceRemittances.map(remittance => {
                        if (remittance.msgIdentifier !== null && remittance.msgIdentifier === this.props.editInvoiceRemittance.msgIdentifier && remittance.recordStatus !== "D") {
                            return isAlreadyExist;
                        }
                    });
                }
            }

            if (isAlreadyExist.includes(true)) {
                MaterializeComponent.toast({
                    html: 'Identifier already exist',
                    classes: 'warningToast'
                });
            }
            else {
                if (this.props.editInvoiceRemittance.recordStatus !== "N") {
                    this.updatedData["recordStatus"] = "M";
                }
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData["oldIdentifier"] = this.props.editInvoiceRemittance.msgIdentifier;
                if (this.props.InvoicingDetails.invoiceRemittances) {
                    this.props.InvoicingDetails.invoiceRemittances.map(remittance => {
                        if (remittance.isDefaultMsg === true && this.updatedData.isDefaultMsg === true && remittance.recordStatus !== "D") {
                            this.defaultMsg = remittance;
                            this.isDuplicateRecord = true;
                        }
                    });
                };

                if (this.isDuplicateRecord === true) {
                    const confirmationObject = {
                        title: modalTitleConstant.CONFIRMATION,
                        message: modalMessageConstant.INVOICE_REMITTANCE_CHECK_MESSAGE,
                        type: "confirm",
                        modalClassName: "warningToast",
                        buttons: [
                            {
                                buttonName: "Yes",
                                onClickHandler: this.changeRemittanceDefaultMsg,
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
                    this.props.actions.UpdateInvoiceRemittance(this.updatedData);
                    this.updatedData = {};
                    this.clearData();
                    document.getElementById("cancelInvoiceRemittanceSubmit").click();
                }
            }
        }
        if (this.props.showButton === false) {
            enteredWord = captalize.captalizeWord(this.updatedData.msgIdentifier);
            if (this.props.InvoicingDetails.invoiceRemittances) {
                isAlreadyExist = this.props.InvoicingDetails.invoiceRemittances.map(remittance => {
                    if (remittance.msgIdentifier !== null && remittance.msgIdentifier.toUpperCase() === enteredWord.toUpperCase() && remittance.recordStatus !== "D") {
                        return !isAlreadyExist;
                    }
                    else {
                        return isAlreadyExist;
                    }
                });
            }
            if (isAlreadyExist.includes(true)) {
                MaterializeComponent.toast({
                    html: 'Identifier already exist',
                    classes: 'warningToast'
                });
            }
            else {
                this.updatedData["recordStatus"] = "N";
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData["id"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                this.updatedData["isDefaultMsg"] = document.getElementById("isDefaultMsg").checked;
                this.updatedData["isActive"] = document.getElementById("isActive").checked;
                this.updatedData["msgType"] = "InvoiceRemittanceText";
                if (this.props.InvoicingDetails.invoiceRemittances) {
                    this.props.InvoicingDetails.invoiceRemittances.map(remittance => {
                        if (remittance.isDefaultMsg === true && this.updatedData.isDefaultMsg === true && remittance.recordStatus !== "D") {
                            this.defaultMsg = remittance;
                            this.isDuplicateRecord = true;
                        }
                    });
                };

                if (this.isDuplicateRecord === true) {
                    const confirmationObject = {
                        title: modalTitleConstant.CONFIRMATION,
                        message: modalMessageConstant.INVOICE_DEFAULT_CHECK_MESSAGE,
                        type: "confirm",
                        modalClassName: "warningToast",
                        buttons: [
                            {
                                buttonName: "Yes",
                                onClickHandler: this.changeRemittanceDefaultMsg,
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
                    this.props.actions.AddInvoiceRemittance(this.updatedData);
                    this.updatedData = {};
                    this.clearData();
                    document.getElementById("cancelInvoiceRemittanceSubmit").click();
                }
            }
        }
    }

    invoiceRemittanceDeleteClickHandler = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.INOVICE_REMITTANCE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [
                    {
                        buttonName: "Yes",
                        onClickHandler: this.deleteInvoiceRemittance,
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

    deleteInvoiceRemittance = () => {
        const selectedData = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedData);
        this.props.actions.DeleteInvoiceRemittance(selectedData);
        this.props.actions.HideModal();
    }

    changeRemittanceDefaultMsg = () => {
        this.defaultMsg.isDefaultMsg = false;
        this.defaultMsg["oldIdentifier"] = this.defaultMsg.msgIdentifier;
        this.defaultMsg.modifiedBy = this.props.loggedInUser;
        if (this.defaultMsg.recordStatus !== "N") {
            this.defaultMsg.recordStatus = "M";
        }
        if (this.props.showButton === false) {
            this.props.actions.UpdateInvoiceRemittance(this.defaultMsg);
            this.props.actions.AddInvoiceRemittance(this.updatedData);
        }
        else {
            this.props.actions.UpdateInvoiceRemittance(this.defaultMsg);
            this.props.actions.UpdateInvoiceRemittance(this.updatedData);
        }
        this.defaultMsg = {};
        this.updatedData = {};
        this.isDuplicateRecord = false;
        this.clearData();
        this.props.actions.HideModal();
        document.getElementById("cancelInvoiceRemittanceSubmit").click();
    }

    invoiceFooterSubmitHandler = (e) => {
        e.preventDefault();
        let isAlreadyExist = false;
        let enteredWord = "";
        if (this.props.showButton === true) {
            if (this.updatedData.msgIdentifier) {
                enteredWord = captalize.captalizeWord(this.updatedData.msgIdentifier);
                if (this.props.InvoicingDetails.invoiceFooters) {
                    isAlreadyExist = this.props.InvoicingDetails.invoiceFooters.map(footer => {
                        if (footer.msgIdentifier !== null && footer.msgIdentifier.toUpperCase() === enteredWord.toUpperCase() && footer.recordStatus !== "D") {
                            return !isAlreadyExist;
                        }
                        else {
                            return isAlreadyExist;
                        }
                    });
                }
            }
            else {
                if (this.props.InvoicingDetails.invoiceFooters) {
                    isAlreadyExist = this.props.InvoicingDetails.invoiceFooters.map(footer => {
                        if (footer.msgIdentifier !== null && footer.msgIdentifier === this.props.editInvoiceRemittance.msgIdentifier && footer.recordStatus !== "D") {
                            return isAlreadyExist;
                        }
                    });
                }
            }

            if (isAlreadyExist.includes(true)) {
                MaterializeComponent.toast({
                    html: 'Identifier already exist',
                    classes: 'warningToast'
                });
            }
            else {
                if (this.props.editInvoiceFooter.recordStatus !== "N") {
                    this.updatedData["recordStatus"] = "M";
                }
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData["oldIdentifier"] = this.props.editInvoiceFooter.msgIdentifier;
                this.updatedData["isDefaultMsg"] = document.getElementById("isDefaultMsgFooter").checked;
                if (this.props.InvoicingDetails.invoiceFooters) {
                    this.props.InvoicingDetails.invoiceFooters.map(footer => {
                        if (footer.isDefaultMsg === true && this.updatedData.isDefaultMsg === true && footer.recordStatus !== "D") {
                            this.defaultMsg = footer;
                            this.isDuplicateRecord = true;
                        }
                    });
                };

                if (this.isDuplicateRecord === true) {
                    const confirmationObject = {
                        title: modalTitleConstant.CONFIRMATION,
                        message: modalMessageConstant.INVOICE_DEFAULT_CHECK_MESSAGE,
                        type: "confirm",
                        modalClassName: "warningToast",
                        buttons: [
                            {
                                buttonName: "Yes",
                                onClickHandler: this.changeDefaultMsg,
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
                    this.props.actions.UpdateInvoiceFooter(this.updatedData);
                    this.updatedData = {};
                    this.clearData();
                    document.getElementById("cancelInvoiceFooterSubmit").click();
                }
            }
        }
        if (this.props.showButton === false) {
            enteredWord = captalize.captalizeWord(this.updatedData.msgIdentifier);
            if (this.props.InvoicingDetails.invoiceFooters) {
                isAlreadyExist = this.props.InvoicingDetails.invoiceFooters.map(footer => {
                    if (footer.msgIdentifier !== null && footer.msgIdentifier.toUpperCase() === enteredWord.toUpperCase() && footer.recordStatus !== "D") {
                        return !isAlreadyExist;
                    }
                    else {
                        return isAlreadyExist;
                    }
                });
            }
            if (isAlreadyExist.includes(true)) {
                MaterializeComponent.toast({
                    html: 'Identifier already exist',
                    classes: 'warningToast'
                });
            }
            else {
                this.updatedData["recordStatus"] = "N";
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData["id"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                this.updatedData["isDefaultMsg"] = document.getElementById("isDefaultMsgFooter").checked;
                this.updatedData["msgType"] = "InvoiceFooterText";
                if (this.props.InvoicingDetails.invoiceFooters) {
                    this.props.InvoicingDetails.invoiceFooters.map(footer => {
                        if (footer.isDefaultMsg === true && this.updatedData.isDefaultMsg === true && footer.recordStatus !== "D") {
                            this.defaultMsg = footer;
                            this.isDuplicateRecord = true;
                        }
                    });
                };

                if (this.isDuplicateRecord === true) {
                    const confirmationObject = {
                        title: modalTitleConstant.CONFIRMATION,
                        message: modalMessageConstant.INVOICE_DEFAULT_CHECK_MESSAGE,
                        type: "confirm",
                        modalClassName: "warningToast",
                        buttons: [
                            {
                                buttonName: "Yes",
                                onClickHandler: this.changeDefaultMsg,
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
                    this.props.actions.AddInvoiceFooter(this.updatedData);
                    this.updatedData = {};
                    this.clearData();
                    document.getElementById("cancelInvoiceFooterSubmit").click();
                }
            }
        }
    }

    invoiceFooterDeleteClickHandler = () => {
        const selectedRecords = this.secondChild.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.INOVICE_FOOTER_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [
                    {
                        buttonName: "Yes",
                        onClickHandler: this.deleteInvoiceFooter,
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

    deleteInvoiceFooter = () => {
        const selectedData = this.secondChild.getSelectedRows();
        this.child.removeSelectedRows(selectedData);
        this.props.actions.DeleteInvoiceFooter(selectedData);
        this.props.actions.HideModal();
    }

    changeDefaultMsg = () => {
        this.defaultMsg.isDefaultMsg = false;
        this.defaultMsg["oldIdentifier"] = this.defaultMsg.msgIdentifier;
        this.defaultMsg.modifiedBy = this.props.loggedInUser;
        if (this.defaultMsg.recordStatus !== "N") {
            this.defaultMsg.recordStatus = "M";
        }
        if (this.props.showButton === false) {
            this.props.actions.UpdateInvoiceFooter(this.defaultMsg);
            this.props.actions.AddInvoiceFooter(this.updatedData);
        }
        else {
            this.props.actions.UpdateInvoiceFooter(this.defaultMsg);
            this.props.actions.UpdateInvoiceFooter(this.updatedData);
        }
        this.defaultMsg = {};
        this.updatedData = {};
        this.isDuplicateRecord = false;
        this.clearData();
        this.props.actions.HideModal();
        document.getElementById("cancelInvoiceFooterSubmit").click();
    }
    
    clearData = () => {
        document.getElementById("remittanceTextPopup").reset();
        document.getElementById("invoiceFooterTextPopup").reset();
        this.props.actions.ShowButtonHandler();
    }

    confirmationRejectHandler = () => {
        this.isDuplicateRecord = false;
        this.props.actions.HideModal();
    }

    render() {
        const { InvoicingDetails, companyDetail, editInvoiceRemittance, companyVatPrefixMasterData, editInvoiceFooter, showButton } = this.props;
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        const InvoiceRemittancerowData = InvoicingDetails ? InvoicingDetails.invoiceRemittances.filter(x => x.recordStatus != 'D') : [];
        const InvoiceFooterrowData = InvoicingDetails ? InvoicingDetails.invoiceFooters.filter(x => x.recordStatus != 'D') : [];
        editInvoiceRemittance.isDefaultMsg && (document.getElementById("isDefaultMsg").checked = (editInvoiceRemittance.isDefaultMsg === true ? true : false));
        editInvoiceRemittance.isActive && (document.getElementById("isActive").checked = (editInvoiceRemittance.isActive === true ? true : false));
        editInvoiceFooter.isDefaultMsg && (document.getElementById("isDefaultMsgFooter").checked = (editInvoiceFooter.isDefaultMsg === true ? true : false));
        let customerGeneralData = [];
        let invoiceDefault = [];
        if (companyDetail) {
            customerGeneralData = companyDetail;
        }
        if (InvoicingDetails) {
            invoiceDefault = InvoicingDetails;
        }
        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                <div className="customerBlock">
                    <div id="addInvoiceRemittance" className="modal popup-position">
                        <form id="remittanceTextPopup" onSubmit={this.invoiceRemittanceSubmitHandler}>
                            <div className="modal-content">
                                <h6>Add Invoice Remittance Text</h6>
                                <InvoiceRemittanceTextPopup onChange={this.handlerChange} showButton={showButton} selectedRow={editInvoiceRemittance} onSwitchChange={this.switchHandlerChange} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="cancelInvoiceRemittanceSubmit" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                                {!showButton ?
                                    <button type="submit" className="btn-small">SUBMIT</button> :
                                    <button type="submit" className="btn-small">SUBMIT</button>}
                            </div>
                        </form>
                    </div>
                    <div id="addInvoiceFooter" className="modal popup-position">
                        <form id="invoiceFooterTextPopup" onSubmit={this.invoiceFooterSubmitHandler}>
                            <div className="modal-content">
                                <h6>Add Invoice Footer Text</h6>
                                <InvoiceFooterTextPopup onChange={this.handlerChange} showButton={showButton} selectedRow={editInvoiceFooter} onSwitchChange={this.switchHandlerChange} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="cancelInvoiceFooterSubmit" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                                {!showButton ?
                                    <button type="submit" className="btn-small">SUBMIT</button> :
                                    <button type="submit" className="btn-small">SUBMIT</button>}
                            </div>
                        </form>
                    </div>
                    <div className="genralDetailContainer customCard">
                        <GeneralDetail companyDetail={customerGeneralData} />
                        <TaxDetails vatTaxNo={companyVatPrefixMasterData} onBlur={this.companyInfoHandlerChange} taxRegistrationNo={customerGeneralData} invoiceDefaultData={invoiceDefault} />
                        <CardPanel className="white lighten-4 black-text pt-3" title={"Invoicing Defaults"} colSize="s12">
                            <div className="row mb-0">
                                <label className="ml-4 mr-4 customLabel bold">Invoice Remittance Text</label>
                                <ReactGrid gridRowData={InvoiceRemittancerowData} gridColData={HeaderData.RemittanceTextHeader} onRef={ref => { this.child = ref; }} />
                                <div className="right-align mt-2 mr-2">
                                    <a onClick={this.clearData} href="#addInvoiceRemittance" className="btn-small modal-trigger">Add</a>
                                    <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.invoiceRemittanceDeleteClickHandler}>Delete</a>
                                </div>
                            </div>
                        </CardPanel>
                        <CardPanel className="white lighten-4 black-text pt-3" colSize="s12">
                            <div className="row mb-0">
                                <label className="ml-4 mr-4 customLabel">Invoice Footer Text</label>
                                <ReactGrid gridRowData={InvoiceFooterrowData} gridColData={HeaderData.InvoiceFooterTextHeader} onRef={ref => { this.secondChild = ref; }} />
                                <div className="right-align mt-2 mr-2">
                                    <a onClick={this.clearData} href="#addInvoiceFooter" className="btn-small modal-trigger">Add</a>
                                    <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.invoiceFooterDeleteClickHandler}>Delete</a>
                                </div>
                            </div>
                        </CardPanel>
                        <InvoiceDetails invoiceDefaultData={invoiceDefault} onBlur={this.invoiceDetailsHandlerChange} />
                        <Extranet invoiceDefaultData={invoiceDefault} onBlur={this.invoiceDetailsHandlerChange} />
                        {/* <AllComponent/>  //FOR Example  */}
                    </div>
                </div>
                {/* <Modal modalClass="baseModal" buttons={[ { name:'Cancel', action:this.clearData,showbtn:true }, { name:'Submit', action:this.invoiceRemittanceSubmitHandler,showbtn:!showButton }, { name:'Update', action:this.invoiceRemittanceSubmitHandler,showbtn:showButton } ]} isShowModal={this.props.showModal}>
                    <InvoiceRemittanceTextPopup onChange={this.handlerChange} showButton={showButton} selectedRow={editInvoiceRemittance} onSwitchChange={this.switchHandlerChange} />
                </Modal>

                 <Modal modalClass="baseModal" buttons={[ { name:'Cancel', action:this.clearData,showbtn:true }, { name:'Submit', action:this.invoiceFooterSubmitHandler,showbtn:!showButton }, { name:'Update', action:this.invoiceFooterSubmitHandler,showbtn:showButton } ]} isShowModal={this.props.showModal}>
                    <InvoiceFooterTextPopup onChange={this.handlerChange} showButton={showButton} selectedRow={editInvoiceFooter} onSwitchChange={this.switchHandlerChange} />
                </Modal> */}
            </Fragment>
        );
    }
}

GeneralDetails.propTypes = {
    InvoiceRemittanceDetails: PropTypes.array.isRequired,
    InvoiceFooterText: PropTypes.array.isRequired
};

GeneralDetails.defaultprops = {
    InvoiceRemittanceDetails: [],
    InvoiceFooterText: []
};

export default GeneralDetails;
