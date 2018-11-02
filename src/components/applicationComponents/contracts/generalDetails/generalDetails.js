import React, { Component, Fragment } from 'react';
import { getlocalizeData } from '../../../../utils/commonUtils';
import CardPanel from '../../../baseComponents/cardPanel';
import CustomInput from '../../../baseComponents/inputControlls';
import Modal from '../../../baseComponents/modal';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import { HeaderData } from './headerData.js';
import dateUtil from '../../../../utils/dateUtil';
import MaterializeComponent from 'materialize-css';
import moment from 'moment';
import CompanyList from '../../../companyList';

const localConstant = getlocalizeData();

const GeneralDetail = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.contract.GENERAL_DETAILS} colSize="s12">
        <div className="row mb-0">
            <div className="col s12 m3" disabled>
                <label class="customLabel ">{localConstant.contract.CONTRACT_HOLDER}</label>
                <CompanyList selectedCompany={props.selectedCompany} disabled={true}/>
            </div>
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.CUSTOMER_CONTRACT_NUMBER}
                type='text'
                colSize='s12 m3'
                inputClass="customInputs"
                labelClass="mandate"
                maxLength={40}
                disabled ={props.interactionMode}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.CONTRACT_NO}
                type='text'
                colSize='s12 m3'
                inputClass="customInputs"
                maxLength={12}
                disabled ={props.interactionMode}
            />
            <CustomInput
                    hasLabel={true}
                    divClassName='col'
                    label={localConstant.contract.CUSTOMER}
                    type='text'
                    colSize='s10 m2'
                    inputClass="customInputs"
                    labelClass="mandate"
                    disabled={true}
                    defaultValue={props.customerName}
                    maxLength={60}
                />
                <div className="col s2 m1 mt-4">
                    <button className="btn-small" onClick={props.onClickShowModal} disabled ={props.interactionMode === "#view"?true:false}>...</button>
                </div>
                <CustomInput
                    hasLabel={true}
                    divClassName='col'
                    label={localConstant.contract.CUSTOMER_CODE_CRM}
                    type='select'
                    colSize='s12 m3'
                    className="browser-default"
                    optionsList={props.CRM}
                    labelClass="mandate"
                    optionName='value'
                    optionValue="value"
                    onSelectChange={props.onClickCRM}
                    defaultValue="No"
                    interactionMode = {props.interactionMode}
                    disabled ={props.interactionMode}
                // disabled={true}
                />
                {props.CustomerCodeInCRM ?
                <Fragment>
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.contract.CRM_OPP_REF}
                        type='number'
                        colSize='s12 m3'
                        inputClass="customInputs"
                        maxLength={10}
                        max={9999999999}
                        required={true}
                        onValueBlur={props.onBlurValue}
                        disabled ={props.interactionMode}
                    />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.contract.CRM_CONFLICTS_OF_BID_REVIEW_COMMENTS}
                        type='textarea'
                        colSize='s12 m6'
                        inputClass="customInputs"
                        maxLength={50}
                        disabled ={props.interactionMode}
                    />
                </Fragment>
                :
                <CustomInput
                    hasLabel={true}
                    divClassName='col'
                    label={localConstant.contract.WHY}
                    type='text'
                    colSize='s12 m3'
                    inputClass="customInputs"
                    maxLength={50}
                    disabled ={props.interactionMode}
                />}
        </div>
        <div className="row mb-0">
                <CustomInput
                    hasLabel={true}
                    divClassName='col'
                    label={localConstant.contract.CONTRACT_TYPE}
                    type='select'
                    colSize='s12 m3'
                    className="browser-default"
                    optionName='value'
                    optionValue="value"
                    optionsList={props.contractTypeData}
                    onSelectChange = {props.changeContractType}
                    interactionMode = {props.interactionMode}
                    disabled ={props.interactionMode}
                />
                {
                    props.isParentContract ?
                    <Fragment>
                        <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Parent Company Office"
                        type='select'
                        colSize='s12 m3'
                        className="browser-default"
                        optionsList={props.countryMasterData}
                        labelClass="mandate"
                        optionName='officeName'
                        optionValue="officeName"
                        disabled ={props.interactionMode}
                    />
                    </Fragment>:null
                }
                {
                    props.isChildContract ?
                    <Fragment>
                        <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Parent Contract"
                        type='select'
                        colSize='s12 m3'
                        className="browser-default"
                        optionsList={props.countryMasterData}
                        labelClass="mandate"
                        optionName='officeName'
                        optionValue="officeName"
                        disabled ={props.interactionMode}
                    />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Parent Contract Discount"
                        type='text'
                        colSize='s12 m3'
                        inputClass="customInputs"
                        maxLength={50}
                        disabled ={props.interactionMode}
                    />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Parent Contract Holder"
                        type='select'
                        colSize='s12 m3'
                        className="browser-default"
                        optionsList={props.CRM}
                        labelClass="mandate"
                        optionName='value'
                        optionValue="value"
                        defaultValue="No"
                        disabled ={props.interactionMode}
                    />
                    </Fragment>:null
                }
                 {
                    props.isFrameworkContract ?
                    <Fragment>
                        <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Framework Contract Office"
                        type='select'
                        colSize='s12 m3'
                        className="browser-default"
                        optionsList={props.countryMasterData}
                        labelClass="mandate"
                        optionName='officeName'
                        optionValue="officeName"
                        defaultValue="No"
                        disabled ={props.interactionMode}
                    />
                    </Fragment>:null
                }
                {
                    props.isRelatedFrameworkContract ?
                    <Fragment>
                        <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Framework Contract"
                        type='select'
                        colSize='s12 m3'
                        className="browser-default"
                        optionsList={props.CRM}
                        labelClass="mandate"
                        optionName='value'
                        optionValue="value"
                        defaultValue="No"
                        disabled ={props.interactionMode}
                    />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label="Framework Contract Holder"
                        type='select'
                        colSize='s12 m3'
                        className="browser-default"
                        optionsList={props.CRM}
                        labelClass="mandate"
                        optionName='value'
                        optionValue="value"
                        defaultValue="No"
                        disabled ={props.interactionMode}
                    />
                    </Fragment>:null
                }
                </div>
    </CardPanel>
);
const BudgetMonetary = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.contract.BUDGET_MONETARY} colSize="s12">
        <div className="row mb-0 ">
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.VALUE}
                type='number'
                colSize='s2'
                inputClass="customInputs"
                labelClass="mandate"
                maxLength={16}
                max={99999999999999}
                // step=".01"
                required={true}
                disabled ={props.interactionMode}
                //onValueBlur={props.blurValue}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.CURRENCY}
                type='select'
                colSize='s2'
                className="browser-default"
                labelClass="mandate"
                optionsList={props.currencyData}
                optionName="code"
                optionValue="code"
                disabled ={props.interactionMode}
            />
            {/* <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.WARNING}
                type='text'
                colSize='s2'
                inputClass="customInputs"
                disabled={true}
                defaultValue='75'
            /> */}
            <div className="col s12 m3">
                <label>{localConstant.contract.WARNING}</label><span class="badge">{props.currencyWarningPercentage}%</span>
                <p class="range-field">
                    <input type="range" min="0" max="100" onInput={props.currencyWarningHandler} defaultValue="70" onChange={props.currencyWarningHandler} disabled/>
                </p>
            </div>
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.HOURS_UNIT}
                type='number'
                colSize='s2'
                inputClass="customInputs"
                labelClass="mandate"
                max={99999999999999}
                maxLength={16}
                required={true}
                onValueBlur={props.blurValue}
                disabled ={props.interactionMode}
            // step="0.00"
            />
            <div className="col s12 m3">
                <label>{localConstant.contract.WARNING}</label><span class="badge">{props.hoursWarningPercentage}%</span>
                <p class="range-field">
                    <input type="range" min="0" max="100" onInput={props.hoursWarningHandler} onChange={props.hoursWarningHandler} />
                </p>
            </div>
            <CustomInput
                hasLabel={true}
                divClassName='browser-defaults'
                label={localConstant.contract.INVOICED_TO_DATE_EXCEL}
                type='number'
                colSize='s12 m3'
                disabled ={props.interactionMode}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.UNINVOICED_TO_DATE_EXCEL}
                type='number'
                colSize='s3'
                isNonEditDateField={false}
                disabled ={props.interactionMode}
            />
             <CustomInput
                hasLabel={true}
                divClassName='col '
                label={localConstant.contract.REMAINING}
                type='text'
                colSize='s3'
                inputClass="customInputs"
                disabled ={props.interactionMode}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col s3'
                label={localConstant.contract.REMAINING}
                type='text'
                colSize='s3'
                inputClass="customInputs"
                disabled ={props.interactionMode}
            />
            {/* <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.INVOICED_TO_DATE}
                type='date'
                colSize='s3'
                selectedDate={props.invoicedToDate}
                onDateChange={props.fetchInvoicedToDate}
                onDatePickBlur={props.handleDateBlur}
                dateFormat="DD-MM-YYYY"
                shouldCloseOnSelect={true}
                isNonEditDateField={false}
            /> */}
        </div>
            {/* <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.WARNING}
                type='text'
                colSize='s3'
                inputClass="customInputs"
                readOnly={true}
                defaultValue='75'
            /> */}
            {/* <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.UNINVOICED_TO_DATE}
                type='date'
                colSize='s3'
                selectedDate={props.unInvoicedToDate}
                onDateChange={props.FetchUnInvoicedToDate}
                onDatePickBlur={props.handleDateBlur}
                dateFormat="DD-MM-YYYY"
                shouldCloseOnSelect={true}
                isNonEditDateField={false}
            /> */}
    </CardPanel>
);
const OtherDetails = (props) => (
    <CardPanel className="white lighten-4 black-text" title={localConstant.contract.OTHER_DETAILS} colSize="s12">
        <div className="row mb-0">

            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.START_DATE}
                colSize='s3'
                type="date"
                labelClass="mandate"
                isNonEditDateField={false}
                selectedDate={props.startDate}
                onDateChange={props.fetchStartDate}
                onDatePickBlur={props.handleDateBlur}
                dateFormat="DD-MM-YYYY"
                shouldCloseOnSelect={true}
                disabled ={props.interactionMode}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.END_DATE}
                colSize='s3'
                type="date"
                isNonEditDateField={false}
                selectedDate={props.endDate}
                onDateChange={props.fetchEndDate}
                onDatePickBlur={props.handleDateBlur}
                dateFormat="DD-MM-YYYY"
                shouldCloseOnSelect={true}
                disabled ={props.interactionMode}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.STATUS}
                type='select'
                colSize='s3'
                className="browser-default"
                labelClass="mandate"
                optionsList={props.status}
                optionName='value'
                optionValue='value'
                inputClass="customInputs"
                disabled ={props.interactionMode}
            />
        </div>
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                divClassName='col '
                label={localConstant.contract.CLIENT_REPORTING_REQUIREMENTS}
                type='textarea'
                colSize='s12 mt-4'
                inputClass="customInputs"
                maxLength='50'
                disabled ={props.interactionMode}
            />
        </div>
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                divClassName='col '
                label={localConstant.contract.ASSIGNMENT_INSTRUCTIONAL_OPERATIONAL_NOTES}
                type='textarea'
                colSize='s12'
                inputClass="customInputs"
                maxLength="40000"
                disabled ={props.interactionMode}
            />
        </div>
    </CardPanel>
);
const ButtonModal = (props) => (
    <Fragment >
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.NAME}
                type='text'
                optionName='name'
                optionValue="name"
                colSize='s6'
                name="customerName"
                inputClass="customInputs"
                //onValueChange={props.companyData}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.contract.COUNTRY}
                type='select'
                colSize='s6'
                inputClass="customInputs"
                optionName='name'
                optionValue="name"
                name="operatingCountry"
                optionsList={props.countryMasterData}
                onSelectChange={props.companyData}
            />
        </div>
    </Fragment>
);

class GeneralDetails extends Component {
    componentDidMount() {
        this.props.actions.FetchCountry();
        this.props.actions.FetchData();
        this.props.actions.FetchCurrency();
        this.props.actions.FetchCompanyOffices();
    }
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
            invoicedToDateExcelTax: '',
            unInvoicedToDateExcelTax: '',
            invoicedToDate: '',
            unInvoicedToDate: '',
            isParentContract:false,
            isChildContract:false,
            isFrameworkContract:false,
            isRelatedFrameworkContract:false,
            currencyWarningPercentage:70,
            hoursWarningPercentage:70
        };
        this.companyDataListInput = {};
        this.customerName = [];
    }
    fetchStartDate = (date) => {
        this.setState({
            startDate: date
        });
    }
    fetchEndDate = (date) => {
        this.setState({
            endDate: date
        });
    }
    fetchInvoicedToDateExcelTax = (date) => {
        this.setState({
            invoicedToDateExcelTax: date
        });
    }
    fetchUnInvoicedToDateExcelTax = (date) => {
        this.setState({
            unInvoicedToDateExcelTax: date
        });
    }
    fetchInvoicedToDate = (date) => {
        this.setState({
            invoicedToDate: date
        });
    }
    FetchUnInvoicedToDate = (date) => {
        this.setState({
            unInvoicedToDate: date
        });
    }
    handleDateBlur = (e) => {
        if (e.target !== undefined) {
            const isValid = dateUtil.isValidDate(e.target.value);
            if (!isValid) {
                MaterializeComponent.toast({
                    html: 'Please Enter Valid Date',
                    classes: 'warningToast'
                });
            }
        }

    }
    companyData = (e) => {
        this.companyDataListInput[e.target.name] = e.target.value;
        this.props.actions.FetchCustomerList(this.companyDataListInput);
    }
    onClickCRM = (e) => {
        if (e.target.value === "Yes") {
            this.props.actions.IfCRMYes();
        }
        else if (e.target.value === "No") {
            this.props.actions.IfCRMNo();
        }
        else {
            this.props.actions.IfCRMSelect();
        }
    }
    onClickShowModal = () => {
        this.props.actions.CustomerShowModal();
    }
    onClickHideModal = () => {
        this.props.actions.CustomerHideModal();
    }
    onSubmit = (data) => {
        this.customerName = [];
        const selectedRecords = this.child.getSelectedRows();
        selectedRecords.map((data) => {
            this.customerName.push(data.customerName);
        });
        this.props.actions.HideModal();
    }
    blurValue = (e) => {
        if (e.target.value > 99999999999999) {
            MaterializeComponent.toast({
                html: "please enter a valid 16 digit value",
                classes: 'dangerToast'
            });
        }
    }
    onBlurValue = (e) => {
        if (e.target.value > 9999999999) {
            MaterializeComponent.toast({
                html: "please enter a valid 10 digit value",
                classes: 'dangerToast'
            });
        }
    }
    //New Code
    /**
     * 
     */
    changeContractType = (e) => {
        switch(e.target.value){
            case "Parent Contract":this.setState({
                isParentContract:true,
                isChildContract:false,
                isFrameworkContract:false,
                isRelatedFrameworkContract:false
            });
            break;
            case "Child Contract":this.setState({
                isParentContract:false,
                isChildContract:true,
                isFrameworkContract:false,
                isRelatedFrameworkContract:false
            });
            break;
            case "Framework Contract":this.setState({
                isParentContract:false,
                isChildContract:false,
                isFrameworkContract:true,
                isRelatedFrameworkContract:false
            });
            break;
            case "Related Framework Contract":this.setState({
                isParentContract:false,
                isChildContract:false,
                isFrameworkContract:false,
                isRelatedFrameworkContract:true
            });
            break;
            default:
            return this.setState({
                isParentContract:false,
                isChildContract:false,
                isFrameworkContract:false,
                isRelatedFrameworkContract:false
            });
        }
    }
    
    currencyWarningHandler = (e) =>{
        this.setState({
            currencyWarningPercentage:e.target.value
        });
    }
    hoursWarningHandler = (e) =>{
        this.setState({
            hoursWarningPercentage:e.target.value
        });
    }
    render() {
        console.log(this.props);
        if(this.props.location.hash === "#create"){
            this.props.actions.UpdateInteractionMode("#create");
        }
        const statusValues = [
            { value: 'Open' },
            { value: 'Close' }
        ];
        const crmValues = [
            { value: 'Yes' },
            { value: 'No' }
        ];
        const { customerList } = this.props;
        const contractTypeData = [ { value:"Parent Contract" },{ value:"Child Contract" },{ value:"Framework Contract" },{ value:"Related Framework Contract" } ];
        return (
            <div className="genralDetailContainer customCard">
                <GeneralDetail contractTypeData={contractTypeData} onClickShowModal={this.onClickShowModal}
                    CustomerCodeInCRM={this.props.CustomerCodeInCRM}
                    CRM={crmValues} onClickCRM={this.onClickCRM}
                    customerName={this.customerName} onBlurValue={this.onBlurValue}
                    changeContractType = {this.changeContractType} 
                    isParentContract ={this.state.isParentContract}
                    isChildContract ={this.state.isChildContract}
                    isFrameworkContract ={this.state.isFrameworkContract}
                    isRelatedFrameworkContract ={this.state.isRelatedFrameworkContract}
                    selectedCompany = {this.props.selectedCompany}
                    countryMasterData = {this.props.companyOffices}
                    interactionMode = {this.props.interactionMode}
                    />

                <BudgetMonetary currencyData={this.props.currencyData} blurValue={this.blurValue}
                    invoicedToDateExcelTax={this.state.invoicedToDateExcelTax} fetchInvoicedToDateExcelTax={this.fetchInvoicedToDateExcelTax}
                    unInvoicedToDateExcelTax={this.state.unInvoicedToDateExcelTax} fetchUnInvoicedToDateExcelTax={this.fetchUnInvoicedToDateExcelTax}
                    invoicedToDate={this.state.invoicedToDate} fetchInvoicedToDate={this.fetchInvoicedToDate}
                    unInvoicedToDate={this.state.unInvoicedToDate} FetchUnInvoicedToDate={this.FetchUnInvoicedToDate}
                    handleDateBlur={this.handleDateBlur}
                    currencyWarningHandler = {this.currencyWarningHandler}
                    hoursWarningHandler ={this.hoursWarningHandler}
                    currencyWarningPercentage = {this.state.currencyWarningPercentage}
                    hoursWarningPercentage = {this.state.hoursWarningPercentage} 
                    interactionMode = {this.props.interactionMode} />

                <OtherDetails status={statusValues} startDate={this.state.startDate} fetchStartDate={this.fetchStartDate}
                    endDate={this.state.endDate} fetchEndDate={this.fetchEndDate} handleDateBlur={this.handleDateBlur}
                    interactionMode = {this.props.interactionMode} />

                <Modal buttons={[ { name: 'Cancel', action: this.onClickHideModal, showbtn: true,btnClass:"btn-small mr-1" }, { name: 'Submit', action: this.onSubmit, showbtn: true,btnClass:"btn-small" } ]}
                    isShowModal={this.props.isShowModal}>
                    <ButtonModal companyData={this.companyData} countryMasterData={this.props.companyOffices} />
                    <ReactGrid gridRowData={customerList} gridColData={HeaderData} onRef={ref => { this.child = ref; }} />
                </Modal>
            </div>
        );
    }
}
export default GeneralDetails;