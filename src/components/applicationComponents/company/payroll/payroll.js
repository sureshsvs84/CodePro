import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import CardPanel from '../../../baseComponents/cardPanel';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
import dateUtil from '../../../../utils/dateUtil';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import {
    payrollHeaderData,
    sellReferrenceHeaderData
} from './headerData';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import ReactGridTwo from '../../../baseComponents/reactAgGridTwo';
import MaterializeComponent from 'materialize-css';
import CustomModal from '../../../baseComponents/customModal';
import moment from 'moment';

const localConstant = getlocalizeData();

class Payroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedPayrollName: "Select",
            ExportPrefix: '',
            PayrollCurrency: 'Select',
            selectedPayrollData: {},
            isPayrollEditMode: false,
            payrollStartDate:moment(),
            payrollEndDate:moment(),
            inValidStartDate:false,
            inValidEndDate:false

        };
        this.confirmationModalData = {
            title: "",
            message: "",
            type: "",
            modalClassName: "",
            buttons: []
        };

    }
    handlePayrollStartDateChange = (date) => {
        this.setState({
            payrollStartDate: date
        });
    }
    handleStartDateBlur = (e) =>{
        if (e.target !== undefined) {
            const isValid = dateUtil.isValidDate(e.target.value);
            if(!isValid){
                MaterializeComponent.toast({
                    html: localConstant.companyDetails.payroll.VALID_START_DATE_WARNING,
                    classes: 'warningToast'
                });             
                this.setState({ inValidStartDate:true });
            }else{
                this.setState({ inValidStartDate:false });
            }
        }

    }
    handlePayrollEndDateChange = (date) => {
        this.setState({
            payrollEndDate: date
        });
    }
    handleEndDateBlur = (e) =>{
        if (e.target !== undefined){
            const isValid = dateUtil.isValidDate(e.target.value);
            if(!isValid){
                MaterializeComponent.toast({
                    html: localConstant.companyDetails.payroll.VALID_END_DATE_WARNING,
                    classes: 'warningToast'
                });             
                this.setState({ inValidEndDate:true });
            }else{
                this.setState({ inValidEndDate:false });
            }
        }
    }
    componentDidMount() {
        const elems = document.querySelectorAll('.modal');
        const instances = MaterializeComponent.Modal.init(elems, { dismissible: false });
        this.props.actions.FetchPayrollData();
        this.props.actions.FetchCurrency();
        this.props.actions.FetchCostSaleReference();
        this.props.actions.FetchPayrolls();
    };
    componentWillReceiveProps(nextProps) {
        if(nextProps.showButton){
            this.setState({ 
                payrollStartDate:moment(),
                payrollEndDate:moment()
            });
            document.getElementById('payrollPeriodNameStatus').checked = true;
        }else{
            this.setState({ 
                payrollStartDate:moment(nextProps.editedPairollPeriodName.startDate),
                payrollEndDate:moment(nextProps.editedPairollPeriodName.endDate)
            });
            document.getElementById('payrollPeriodNameStatus').checked = nextProps.editedPairollPeriodName.isActive;
        }
      }

    loadParollPeriodNames = (e) => {
        this.props.actions.FetchPayrollPeriodName();
        this.setState({ SelectedPayrollName: e.target.value });
        if (e.target.value === 'select' || e.target.value === 'Select' || e.target.value === "") {
            this.setState({ 
                ExportPrefix: '',
                PayrollCurrency:'',
                selectedPayrollData:{}, 
            });
        } else {
            const currentPayroll = this.props.PayrollData && this.props.PayrollData.filter((iteratedValue) => {
                if (iteratedValue.payrollType === e.target.value) {
                    return iteratedValue;
                }
            });
            this.setState({
                ExportPrefix: currentPayroll[0].ExportPrefix,
                PayrollCurrency:currentPayroll[0].currency,
                selectedPayrollData: currentPayroll[0]
            });
        }
    };
    addNewPayroll = (e) => {
        e.preventDefault();
        this.props.actions.UpdateCompanyPayrollButton(false);
        const payrollName = document.getElementById('newPayrollName').value;
        const exportPrefix = document.getElementById('payrollNewExportPrefix').value;
        const payrollCurrency = document.getElementById('payrollNewCurrency').value;
        if (payrollName === "") {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.SELECT_PAYROLL_NAME,
                classes: 'warningToast'
            });
            return false;
        }
        if (exportPrefix === "") {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.SELECT_EXPORT_PREFIX,
                classes: 'warningToast'
            });
            return false;
        }
        if (payrollCurrency === "") {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.SELECT_PAYROLL_CURRENCY,
                classes: 'warningToast'
            });
            return false;
        }
        const isDuplicate = this.props.PayrollData && this.props.PayrollData.find((itertedValue) => {
            if ((itertedValue.payrollType).toUpperCase() === payrollName.toUpperCase()) {
                return true;
            }
        });
        if (isDuplicate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_EXISTS,
                classes: 'warningToast'
            });
            return false;
        }
        const data = {
            "companyCode": this.props.selectedCompanyCode,
            "payrollType": payrollName,
            "currency": payrollCurrency,
            "exportPrefix":exportPrefix,
            "updateCount": null,
            "recordStatus": "N",
            "lastModification": null,
            "modifiedBy": null
        };
        this.props.actions.AddNewPayroll(data);
        document.getElementById('createPayrollModalClose').click();
    };

    /**
     * Payroll Type Edit Handler
     */
    payrollEditHandler = () => {
        this.props.actions.UpdateCompanyPayrollButton(true);
        this.setState({ isPayrollEditMode: true });
        const oldPayroll = this.state.SelectedPayrollName;
        this.props.PayrollData && this.props.PayrollData.map((iteratedValue) => {
            if (iteratedValue.payrollType === this.state.SelectedPayrollName) {
                document.getElementById("newPayrollName").value = iteratedValue.payrollType;
                document.getElementById("payrollNewExportPrefix").value = iteratedValue.exportPrefix;
                document.getElementById("payrollNewCurrency").value = iteratedValue.currency;
            }
        });

        if (oldPayroll === "select" || oldPayroll === "Select") {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.SELECT_PAYROLL_TO_UPDATE,
                classes: 'warningToast'
            });
            return false;
        }
    }

    /**
     * Payroll Type Delete Handler
     */
    payrollDeleteHandler = () => {

        const isChilExists = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((itertedValue) => {
            if (itertedValue.recordStatus === "D" && itertedValue.payrollType === this.state.SelectedPayrollName) {
                return false;
            } else if (itertedValue.recordStatus !== "D" && itertedValue.payrollType === this.state.SelectedPayrollName) {
                return true;
            }
        });
        if (isChilExists) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.SELECTED_PAYROLL_ASSOCIATED_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        const confirmationObject = {
            title: modalTitleConstant.CONFIRMATION,
            message: modalMessageConstant.PAYROLL_MESSAGE,
            type: "confirm",
            modalClassName: "warningToast",
            buttons: [
                {
                    buttonName: localConstant.commonConstants.YES,
                    onClickHandler: this.deleteSelectedPayroll,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: localConstant.commonConstants.NO,
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                }
            ]
        };
        this.props.actions.DisplayModal(confirmationObject);
    }

    /**
     * Delete Payroll after confirmation
     */
    deleteSelectedPayroll = () => {
        this.setState({ SelectedPayrollName: "Select" });
        this.props.actions.DeletePayrollType(this.state.selectedPayrollData.payrollType);
        this.props.actions.HideModal();
        this.setState({ selectedPayrollData: {} });
        document.getElementById('loadedPayroll').value = "";
    }

    /**
     * popup clear handler
     */
    clearPayrollPopup = () => {
        this.props.actions.PayrollPopupClear();
    }

    /**
     * Create Payroll Handler
     */
    handleCreatePayroll = () => {
        this.props.actions.UpdateCompanyPayrollButton(false);
        this.setState({ isPayrollEditMode: false });
        document.getElementById("newPayrollName").defaultValue = '';
        document.getElementById("payrollNewExportPrefix").defaultValue = '';
    }

    /**
     * Company Payroll Edit Handler
     */
    editCompanyPayroll = (e) => {
        e.preventDefault();
        document.getElementById("newPayrollName").defaultValue = this.state.selectedPayrollData.payrollType;
        document.getElementById("payrollNewExportPrefix").defaultValue = this.state.selectedPayrollData.exportPrefix;
        document.getElementById("payrollNewCurrency").defaultValue = this.state.selectedPayrollData.currency;

        const updatedPayrollName = document.getElementById("newPayrollName").value;
        const updatedExportPrefix = document.getElementById("payrollNewExportPrefix").value;
        const updatedPayrollCurrency = document.getElementById("payrollNewCurrency").value;
        const isDuplicate = this.props.PayrollData.find((itertedValue) => {
            if (itertedValue.ExportPrefix === updatedExportPrefix && (itertedValue.payrollType).toUpperCase() === updatedPayrollName.toUpperCase()) {
                return true;
            } else if ((itertedValue.payrollType).toUpperCase() === updatedPayrollName.toUpperCase() && itertedValue.ExportPrefix !== updatedExportPrefix) {
                return false;
            }
        });
        if (isDuplicate) {
            MaterializeComponent.toast({
                html: 'No Changes Found',
                classes: 'warningToast'
            });
            return false;
        }

        if (updatedPayrollName === '' || updatedExportPrefix === '' || updatedPayrollCurrency === '') {
            MaterializeComponent.toast({
                html: 'Please Fill Mandatory Fields',
                classes: 'warningToast'
            });
            return false;
        }
        this.setState({
            SelectedPayrollName: updatedPayrollName,
            ExportPrefix: updatedExportPrefix,
            PayrollCurrency: updatedPayrollCurrency
        });
        let UpdatedCompanyPayroll;
        if (this.state.selectedPayrollData.recordStatus !== "N") {
            UpdatedCompanyPayroll = {
                "oldPayrollName": this.state.selectedPayrollData.payrollType,
                data: {
                    "companyCode": this.props.selectedCompanyCode,
                    "payrollType": updatedPayrollName,
                    "exportPrefix":updatedExportPrefix,
                    "periodStatus":"N",
                    "currency": updatedPayrollCurrency,
                    "recordStatus": "M",
                    "modifiedBy": this.props.loginUser
                }

            };
        } else {
            UpdatedCompanyPayroll = {
                "oldPayrollName": this.state.selectedPayrollData.payrollType,
                data: {
                    "companyCode": this.props.selectedCompanyCode,
                    "payrollType": updatedPayrollName,
                    "exportPrefix":updatedExportPrefix,
                    "periodStatus":"N",
                    "currency": updatedPayrollCurrency,
                    "recordStatus": "N",
                    "modifiedBy": this.props.loginUser
                }

            };
        }
        this.props.actions.UpdateCompanyPayroll(UpdatedCompanyPayroll);
        this.setState({ selectedPayrollData:UpdatedCompanyPayroll.data });
        document.getElementById('createPayrollModalClose').click();
    }

    /**
     * Form Reset Handler
     */
    formReset = () => {
        document.getElementById("newPayrollName").defaultValue = '';
        document.getElementById("payrollNewExportPrefix").defaultValue = '';
        document.getElementById("payrollNewCurrency").value = '';
    };

    handleNewPayrollPeriodName = () => {
        document.getElementById('newPayrollPeriodName').value = '';
        // document.getElementById('newPayrollPeriodEndDate').value = '';
        // document.getElementById('newPayrollPeriodStartDate').value = '';
        document.getElementById("payrollPeriodNameStatus").checked = true;
        this.props.actions.TogglePayrollPeriodNameButton(true);
    }
    //Add new payroll period name
    addNewPayrollPeriodName = (e) => {
        e.preventDefault();
        const NewPayrollPeriodName = document.getElementById('newPayrollPeriodName').value;
        const NewPayrollPeriodStartDate = this.state.payrollStartDate;
        const NewPayrollPeriodEndDate = this.state.payrollEndDate;
        const NewPayrollPeriodHidden = document.getElementById('payrollPeriodNameStatus').checked;
        const currentPayrollType = this.state.SelectedPayrollName;
        if (NewPayrollPeriodName === "" || NewPayrollPeriodStartDate === "" || NewPayrollPeriodEndDate === "") {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.FILL_MANDATE_FEILD_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        if(this.state.inValidStartDate){
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.VALID_START_DATE_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        if(this.state.inValidEndDate){
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.VALID_END_DATE_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        if (NewPayrollPeriodStartDate > NewPayrollPeriodEndDate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.START_DATE_LESS_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        const isDuplicate = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.periodName === NewPayrollPeriodName && iteratedValue.payrollType === currentPayrollType && iteratedValue.recordStatus !== "D") {
                return true;
            }
        });

        const PayrollStartDateDuplicate = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodStartDate >= iteratedValue.startDate && NewPayrollPeriodStartDate <= iteratedValue.endDate && iteratedValue.recordStatus !== "D") {
                return true;
            }
        });

        const PayrollEndDateDuplicate = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodEndDate >= iteratedValue.startDate && NewPayrollPeriodEndDate <= iteratedValue.endDate && iteratedValue.recordStatus !== "D") {
                return true;
            }
        });

        const PayrollDateOverlap = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodStartDate < iteratedValue.startDate && NewPayrollPeriodEndDate > iteratedValue.endDate && iteratedValue.recordStatus !== "D") {
                return true;
            }
        });

        if (PayrollStartDateDuplicate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_START_DATE_OVERLAPP,
                classes: 'warningToast'
            });
            return false;
        }

        if (PayrollEndDateDuplicate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_ENDDATE_OVERLAP,
                classes: 'warningToast'
            });
            return false;
        }
        if (PayrollDateOverlap) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_DATE_OVERLAP,
                classes: 'warningToast'
            });
            return false;
        }
        if (isDuplicate) {
            MaterializeComponent.toast({
                html: 'Payroll Period Name Already Exits',
                classes: 'warningToast'
            });
            return false;
        }
        const data = {
            "companyCode": this.props.selectedCompanyCode,
            "payrollType": this.state.SelectedPayrollName,
            "periodName": NewPayrollPeriodName,
            "startDate": NewPayrollPeriodStartDate.format(),
            "endDate": NewPayrollPeriodEndDate.format(),
            "isActive": NewPayrollPeriodHidden,
            "recordStatus": "N",
            "periodStatus":"N",
            "modifiedBy": this.props.loginUser
        };
        this.props.actions.AddNewPayrollPeriodName(data);
        this.props.actions.FetchPayrollPeriodName(this.state.SelectedPayrollName);
        document.getElementById('createPayrollPeriodModalClose').click();
        this.props.actions.TogglePayrollPeriodNameButton(false);
    }

    //Edit Payroll Period Name

    UpdatePayrollPeriodName = (e) => {
        e.preventDefault();
        const NewPayrollPeriodName = document.getElementById('newPayrollPeriodName').value;
        // const NewPayrollPeriodStartDate = document.getElementById('newPayrollPeriodStartDate').value;
        // const NewPayrollPeriodEndDate = document.getElementById('newPayrollPeriodEndDate').value;
        const NewPayrollPeriodStartDate = this.state.payrollStartDate;
        const NewPayrollPeriodEndDate = this.state.payrollEndDate;

        const NewPayrollPeriodHidden = document.getElementById('payrollPeriodNameStatus').checked;
        const currentPayrollType = this.state.SelectedPayrollName;
        if (NewPayrollPeriodName === "" || NewPayrollPeriodStartDate === "" || NewPayrollPeriodEndDate === "") {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.FILL_MANDATE_FEILD_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        if(this.state.inValidStartDate){
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.VALID_START_DATE_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        if(this.state.inValidEndDate){
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.VALID_END_DATE_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        if (NewPayrollPeriodStartDate > NewPayrollPeriodEndDate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.START_DATE_LESS_WARNING,
                classes: 'warningToast'
            });
            return false;
        }
        const isDuplicateName = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((itertedValue) => {
            if ((this.props.editedPairollPeriodName.periodName).toUpperCase() !== NewPayrollPeriodName.toUpperCase() && (itertedValue.periodName).toUpperCase() === NewPayrollPeriodName.toUpperCase() && itertedValue.payrollType === currentPayrollType) {
                return true;
            }
        });

        const PayrollStartDateDuplicate = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodStartDate >= iteratedValue.startDate && NewPayrollPeriodStartDate <= iteratedValue.endDate && iteratedValue.companyPayrollPeriodId !== this.props.editedPairollPeriodName.companyPayrollPeriodId) {
                return true;
            }
        });

        const PayrollEndDateDuplicate = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.companyPayrollPeriodId !== this.props.editedPairollPeriodName.companyPayrollPeriodId && iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodEndDate >= iteratedValue.startDate && NewPayrollPeriodEndDate <= iteratedValue.endDate) {
                return true;
            }
        });
        const PayrollDateOverlap = this.props.PayrollPeriodName && this.props.PayrollPeriodName.find((iteratedValue) => {
            if (iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodStartDate < iteratedValue.startDate && NewPayrollPeriodEndDate > iteratedValue.endDate && iteratedValue.recordStatus !== "D") {
                return true;
            }
        });
        if (PayrollStartDateDuplicate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_START_DATE_OVERLAPP,
                classes: 'warningToast'
            });
            return false;
        }

        if (PayrollEndDateDuplicate) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_ENDDATE_OVERLAP,
                classes: 'warningToast'
            });
            return false;
        }
        if (PayrollDateOverlap) {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.PAYROLL_DATE_OVERLAP,
                classes: 'warningToast'
            });
            return false;
        }
        if (isDuplicateName) {
            MaterializeComponent.toast({
                html: 'Record Exists',
                classes: 'warningToast'
            });
            return false;
        }
        let updatedData;
        if (this.props.editedPairollPeriodName.recordStatus !== "N") {
            updatedData = {
                oldPayrollNameData: this.props.editedPairollPeriodName,
                data: {
                    "companyCode": this.props.selectedCompanyCode,
                    "payrollType": this.state.SelectedPayrollName,
                    "periodName": NewPayrollPeriodName,
                    "startDate": NewPayrollPeriodStartDate.format(),
                    "endDate": NewPayrollPeriodEndDate.format(),
                    "isActive": NewPayrollPeriodHidden,
                    "recordStatus": "M",
                    "modifiedBy": this.props.loginUser
                }
            };
        } else {
            updatedData = {
                oldPayrollNameData: this.props.editedPairollPeriodName,
                data: {
                    "companyCode": this.props.selectedCompanyCode,
                    "payrollType": this.state.SelectedPayrollName,
                    "periodName": NewPayrollPeriodName,
                    "startDate": NewPayrollPeriodStartDate,
                    "endDate": NewPayrollPeriodEndDate,
                    "isActive": NewPayrollPeriodHidden,
                    "recordStatus": "N",
                    "modifiedBy": this.props.loginUser
                }
            };
        }
        this.props.actions.UpdatePayrollPeriodName(updatedData);
        document.getElementById('createPayrollPeriodModalClose').click();
    }
    //Delete Payroll Period Name
    deletePayrollPeriodName = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.PAYROLL_PERIOD_NAME_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [
                    {
                        buttonName: localConstant.commonConstants.YES,
                        onClickHandler: this.deleteSelectedPayrollPeriodName,
                        className: "modal-close m-1 btn-small"
                    },
                    {
                        buttonName: localConstant.commonConstants.NO,
                        onClickHandler: this.confirmationRejectHandler,
                        className: "modal-close m-1 btn-small"
                    }
                ]
            };
            this.props.actions.DisplayModal(confirmationObject);
        }
        else {
            MaterializeComponent.toast({
                html: localConstant.companyDetails.payroll.SELECT_ONE_RECORD_TO_DELETE,
                classes: 'warningToast'
            });
        }
    }
    deleteSelectedPayrollPeriodName = () => {
        const selectedRecords = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedRecords);
        this.props.actions.DeletePayrollPeriodName(selectedRecords);
        this.props.actions.HideModal();
        this.forceUpdate();
    }

    confirmationRejectHandler = () => {
        this.props.actions.HideModal();
    }

    //handleOverrideCostSaleReference
    handleOverrideCostSaleReference = (e) => {
        this.props.actions.UpdateOverrideCostSaleReference(e.target.checked);
    }
    render() {
        const currencyArray = [];
        this.props.currency && this.props.currency.map((iteratedValue) => {
            currencyArray.push({ value: iteratedValue.code });
        });
        const masterDivisionData = [];
        this.props.masterPayrolls && this.props.masterPayrolls.map((iteratedValue) => {
            masterDivisionData.push({ value: iteratedValue.name });
        });
        const payrollArray = [];
        const payrollNames = this.props.PayrollData && this.props.PayrollData.filter((iteratedValue, i) => {
            return iteratedValue.recordStatus != "D";
        });
        payrollNames && payrollNames.map((iteratedPayroll) => {
            payrollArray.push({ value: iteratedPayroll.payrollType });
        });

        let payrollPeriodNames = [];
        payrollPeriodNames = this.props.PayrollPeriodName && this.props.PayrollPeriodName.filter((iteratedValues) => {
            return iteratedValues.payrollType === this.state.SelectedPayrollName && iteratedValues.recordStatus !== "D";
        });

        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };

        //createPayrollPopup modal
        return (
            <Fragment>
                {/* New Payroll Period Pop Up */}
                <CustomModal modalData={modelData} />
                <div id="createPayrollPeriod" className="modal popup-position">
                    <form className="col s12">
                        <div className="modal-content pb-0">
                            <div className="row mb-0">
                                <h6>{localConstant.companyDetails.payroll.ADD_PAYROLL_PERIOD_NAME}</h6>
                                <CustomInput
                                    hasLabel={true}
                                    label={localConstant.companyDetails.payroll.PAYROLL_PERIOD_NAME}
                                    labelClass="customLabel mandate"
                                    type='text'
                                    inputName='newPayrollPeriodName'
                                    htmlFor="newPayrollPeriodName"
                                    colSize='m3 s12'
                                    inputClass="customInputs browser"
                                    required={true}
                                    defaultValue={this.props.editedPairollPeriodName.periodName}
                                />

                                <CustomInput
                                    hasLabel={true}
                                    isNonEditDateField={false}
                                    label={localConstant.companyDetails.payroll.START_DATE}
                                    labelClass="customLabel mandate"
                                    htmlFor="newPayrollPeriodStartDate"
                                    colSize='m3 s12'
                                    dateFormat="DD-MM-YYYY"
                                    onDatePickBlur={this.handleStartDateBlur}
                                    type='date'
                                    selectedDate={this.state.payrollStartDate}
                                    onDateChange={this.handlePayrollStartDateChange}
                                    shouldCloseOnSelect = {true}

                                />
                                <CustomInput
                                    hasLabel={true}
                                    isNonEditDateField={false}
                                    labelClass="customLabel mandate"
                                    htmlFor="newPayrollPeriodEndDate"
                                    label={localConstant.companyDetails.payroll.END_DATE}
                                    onDatePickBlur={this.handleEndDateBlur}
                                    colSize='m3 s12'
                                    dateFormat="DD-MM-YYYY"
                                    type='date'
                                    selectedDate={this.state.payrollEndDate}
                                    onDateChange={this.handlePayrollEndDateChange}
                                    shouldCloseOnSelect = {true}

                                />
                                <CustomInput
                                    type='switch'
                                    switchLabel={localConstant.companyDetails.payroll.HIDDEN}
                                    isSwitchLabel={true}
                                    checkedStatus={this.props.editedPairollPeriodName && this.props.editedPairollPeriodName.isActive}
                                    //isSwitchLabel={this.props.editedPairollPeriodName.isActive}
                                    switchName="hidden"
                                    id="payrollPeriodNameStatus"
                                    colSize='m3 s12'
                                />
                            </div>
                        </div>
                        <div className="modal-footer col s12">
                            <button type="reset" id="createPayrollPeriodModalClose" className="modal-close waves-effect waves-teal btn-small">{localConstant.commonConstants.CANCEL}</button>
                            {
                                this.props.showButton ?
                                    <button onClick={this.addNewPayrollPeriodName} className="waves-effect waves-teal btn-small ml-2">{localConstant.commonConstants.SUBMIT}</button> :
                                    <button onClick={this.UpdatePayrollPeriodName} className="waves-effect waves-teal btn-small ml-2">{localConstant.commonConstants.SUBMIT}</button>
                            }
                        </div>
                    </form>
                </div>
                {/* New Payroll */}
                <div id="createPayrollPopup" className="modal popup-position">
                    <form className="col s12" id="payrollTypeForm">
                        <div className="modal-content pb-0">
                            <div className="row mb-0">
                                <h6>{localConstant.companyDetails.payroll.CREATE_PAYROLL}</h6>

                                <CustomInput
                                    hasLabel={true}
                                    label={localConstant.companyDetails.payroll.PAYROLL_NAME}
                                    labelClass="customLabel mandate"
                                    type='text'
                                    inputName='newPayrollName'
                                    htmlFor="newPayrollName"
                                    colSize='m3 s12'
                                    inputClass="customInputs browser"
                                    required={true}
                                />
                                <CustomInput
                                    hasLabel={true}
                                    label={localConstant.companyDetails.payroll.EXPORT_PREFIX}
                                    labelClass="customLabel mandate"
                                    type='text'
                                    inputName='payrollNewExportPrefix'
                                    htmlFor="payrollNewExportPrefix"
                                    colSize='m3 s12'
                                    inputClass="customInputs browser"
                                    required={true}
                                />
                                {/* <CustomInput
                                    hasLabel={true}
                                    divClassName='col'
                                    labelClass="customLabel mandate"
                                    required={true}
                                    label={localConstant.companyDetails.payroll.PAYROLL_NAME}
                                    type='select'
                                    colSize='s12 m4'
                                    className="browser-default customInputs"
                                    optionsList={masterDivisionData}
                                    optionName='value'
                                    optionValue="value"
                                    id="newPayrollName"
                                    disabled={this.state.isPayrollEditMode}
                                /> */}
                                {/* <CustomInput
                                    hasLabel={true}
                                    divClassName='col'
                                    labelClass="customLabel mandate"
                                    required={true}
                                    label={localConstant.companyDetails.payroll.EXPORT_PREFIX}
                                    type='select'
                                    colSize='s12 m4'
                                    className="browser-default customInputs"
                                    optionsList={this.props.exportPrefixes?this.props.exportPrefixes:[]}
                                    optionName='name'
                                    optionValue="name"
                                    id="payrollNewExportPrefix"
                                /> */}
                                <CustomInput
                                    hasLabel={true}
                                    divClassName='col'
                                    labelClass="customLabel mandate"
                                    required={true}
                                    label={localConstant.companyDetails.payroll.CURRENCY}
                                    type='select'
                                    colSize='s12 m4'
                                    className="browser-default customInputs"
                                    optionsList={currencyArray}
                                    optionName='value'
                                    optionValue="value"
                                    id="payrollNewCurrency"
                                />
                            </div>
                        </div>
                        <div className="modal-footer col s12">
                            {this.props.isEditCompanyPayroll ?
                                <button onClick={this.editCompanyPayroll} className="waves-effect waves-teal btn-small mr-2">{localConstant.commonConstants.SUBMIT}</button> :
                                <button onClick={this.addNewPayroll} className="waves-effect waves-teal btn-small mr-2">{localConstant.commonConstants.SUBMIT}</button>
                            }
                            <button type="reset" onClick={this.formReset} id="createPayrollModalClose" className="modal-close waves-effect waves-teal btn-small">{localConstant.commonConstants.CANCEL}</button>

                        </div>
                    </form>
                </div>
                <div className="customCard">
                    <p className="bold">{localConstant.companyDetails.payroll.PAYROLL}</p>
                    <div className="row">
                        {/* <a className="right danger-txt mr-4">*{localConstant.validationMessage.ALL_FIELDS_ARE_MANDATORY} </a> */}

                        <CustomInput
                            hasLabel={true}
                            divClassName='col'
                            label={localConstant.companyDetails.payroll.PAYROLL_NAME}
                            type='select'
                            colSize='s6 m4'
                            className="browser-default customInputs"
                            optionsList={payrollArray}
                            optionName='value'
                            optionValue="value"
                            id="loadedPayroll"
                            onSelectChange={(e) => this.loadParollPeriodNames(e)}
                        />
                        <div className="col s12 m3">
                            <a href="#createPayrollPopup" onClick={this.handleCreatePayroll} className="modal-trigger link customCreateDiv">+{localConstant.companyDetails.payroll.ASSIGN_PAYROLL + " | "}</a>
                            <a href="#createPayrollPopup" onClick={this.payrollEditHandler} disabled={this.state.SelectedPayrollName === "select" || this.state.SelectedPayrollName === "Select" || this.state.SelectedPayrollName === "" ? true : false} className="link editTxtColor modal-trigger customCreateDiv">{localConstant.companyDetails.common.EDIT + " | "}</a>
                            <a className="link danger-txt modal-trigger customCreateDiv" href="#confirmation_Modal" onClick={this.payrollDeleteHandler} disabled={this.state.SelectedPayrollName === "select" || this.state.SelectedPayrollName === "Select" || this.state.SelectedPayrollName === "" ? true : false}>{localConstant.companyDetails.common.DELTE}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s5 labelPrimaryColor">
                            <span>
                                <span class="bold">{localConstant.companyDetails.payroll.EXPORT_PREFIX} :</span> {this.state.selectedPayrollData.exportPrefix} |
                            </span>
                            <span>
                                <span class="bold">{localConstant.companyDetails.payroll.CURRENCY} : </span>{this.state.selectedPayrollData.currency}
                            </span>
                        </div>
                    </div>
                    <CardPanel className="white lighten-4 black-text" title={localConstant.companyDetails.payroll.PAYROLL_PERIOD_NAME} colSize="s12">
                        <ReactGrid gridRowData={payrollPeriodNames} gridColData={payrollHeaderData} onRef={ref => { this.child = ref; }} />
                    </CardPanel>

                    <div className="col s4 left-align">
                        <label>
                            <input type="checkbox" className="filled-in" onClick={this.handleOverrideCostSaleReference} defaultChecked={this.props.isCOSEmailOverrideAllow ? true:false} />
                            <span className="labelPrimaryColor">{localConstant.companyDetails.payroll.OVERRIDE_COST_OF_SALES_EMAIL}</span>
                        </label>
                    </div>
                    <div className="right-align mr-3 add-text">
                        <a href="#createPayrollPeriod" onClick={this.handleNewPayrollPeriodName} className="modal-trigger btn-small" disabled={this.state.SelectedPayrollName === 'Select'|| this.state.SelectedPayrollName === '' ? true : false}>

                            {localConstant.commonConstants.ADD}
                        </a>
                        <a href="#confirmation_Modal" onClick={this.deletePayrollPeriodName} className="modal-trigger btn-small ml-2" disabled={this.state.SelectedPayrollName === 'Select'|| this.state.SelectedPayrollName === ''  ? true : false}>{localConstant.commonConstants.DELETE}</a>
                    </div>

                    <CardPanel className="white lighten-4 black-text" title={localConstant.companyDetails.payroll.COST_OF_SALE_REFERENCES} colSize="s12">
                        <ReactGridTwo gridRowData={this.props.CostOfSaleReference} gridColData={sellReferrenceHeaderData} />
                    </CardPanel>
                </div>
            </Fragment>
        );
    }
}
Payroll.propTypes = {
    gridRowData: PropTypes.array.isRequired,
    headerData: PropTypes.array.isRequired
};

Payroll.defaultprops = {
    gridRowData: [],
    headerData: []
};
export default Payroll;