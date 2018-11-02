import React, { Component, Fragment } from 'react';
import PropTypes from 'proptypes';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import { getlocalizeData } from '../../../../utils/commonUtils';
import CustomInput from '../../../baseComponents/inputControlls';
import CardPanel from '../../../baseComponents/cardPanel';
import { HeaderData } from './headerData';
import CustomModal from '../../../baseComponents/customModal';
import Modal from '../../../baseComponents/modal';

const localConstant = getlocalizeData();

const RateSchedulePopup = (props) => {
    return (
        <Fragment>
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.SCHEDULE_NAME}
                divClassName="m4"
                type='text'
                refProps='scheduleNameId'
                name="scheduleName"
                defaultValue={props.rateScheduleDefaultData.scheduleName}
                colSize='s4'
                inputClass="customInputs"
                maxLength="60"
                onValueChange={props.rateScheduleChange}
                
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.SCHEDULE_NAME_PRINTED_ON_INVOICE}
                divClassName="m4"
                type='text'
                refProps="scheduleNamePrintedOnInvoiceId"
                name="scheduleNameForInvoicePrint"
                defaultValue={props.rateScheduleDefaultData.scheduleNameForInvoicePrint}
                colSize='s4'
                inputClass="customInputs"
                maxLength="60"
                onValueChange={props.rateScheduleChange}
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                labelClass="customLabel mandate"
                required={true}
                name="chargeCurrency"
                label={localConstant.contract.rateSchedule.CURRENCY}
                type='select'
                colSize='s12 m4'
                defaultValue = {props.rateScheduleDefaultData.chargeCurrency}
                className="browser-default customInputs"
                optionsList={props.currency}
                optionName='code'
                optionValue="code"
                id="currencyId"
                onSelectChange={props.rateScheduleChange}
            />
        </Fragment>
    );
};

const ChargeTypePopup = (props) => {
    return (
        <Fragment>
            <CustomInput
                hasLabel={true}
                divClassName='col'
                labelClass="customLabel mandate"
                required={true}
                name="chargeType"
                label={localConstant.contract.rateSchedule.CHARGE_TYPE}
                type='select'
                colSize='s12 m3'
                className="browser-default customInputs"
                optionsList={[]}
                optionName='value'
                optionValue="value"
                id="chargeTypeId"
                onSelectChange={props.chargeTypeChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.STANDARD_VALUE}
                divClassName="m3"
                type='text'
                refProps="standardValueId"
                name="standardValue"
                defaultValue={props.standardValue}
                colSize='s12'
                inputClass="customInputs"
                maxLength="60"
                onValueChange={props.chargeTypeChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.CHARGE_VALUE}
                divClassName="m3"
                type='text'
                refProps="chargeValueId"
                name="chargeValue"
                defaultValue={props.chargeValue}
                colSize='s12'
                inputClass="customInputs"
                maxLength="60"
                onValueChange={props.chargeTypeChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.DISCOUNT_APPLIED}
                divClassName="m3"
                type='text'
                refProps="discountAppliedId"
                name="discountApplied"
                defaultValue={props.discountApplied}
                colSize='s12'
                inputClass="customInputs"
                maxLength="60"
                onValueChange={props.chargeTypeChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.PERCENTAGE}
                divClassName="m4"
                type='text'
                refProps="percentageId"
                name="percentage"
                defaultValue={props.percentage}
                colSize='s12'
                inputClass="customInputs"
                maxLength="60"
                onValueChange={props.chargeTypeChange}
            />
            <CustomInput
                hasLabel={true}
                isNonEditDateField={false}
                label={localConstant.contract.rateSchedule.EFFECTIVE_FROM}
                labelClass="customLabel mandate"
                htmlFor="effectiveFrom"
                colSize='m4 s12'
                dateFormat="DD-MM-YYYY"
                onDatePickBlur={this.handleEffectiveFromBlur}
                type='date'
                // selectedDate={this.state.effectiveFromDate}
                onDateChange={this.handleEffectiveFromDateChange}
                shouldCloseOnSelect={true}
            />
            <CustomInput
                hasLabel={true}
                isNonEditDateField={false}
                labelClass="customLabel mandate"
                htmlFor="effectiveTo"
                label={localConstant.contract.rateSchedule.EFFECTIVE_TO}
                onDatePickBlur={this.handleEffectiveToBlur}
                colSize='m4 s12'
                dateFormat="DD-MM-YYYY"
                type='date'
                // selectedDate={this.state.effectiveToDate}
                onDateChange={this.handleEffectiveToDateChange}
                shouldCloseOnSelect={true}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.contract.rateSchedule.DESCRIPTION}
                divClassName="m6"
                type='textarea'
                required={true}
                name='description'
                colSize='s12'
                maxLength="4000"
                inputClass="customInputs"
                defaultValue={props.description}
                onValueChange={props.chargeTypeChange}
            />
            
            <CustomInput
                type='switch'
                switchLabel={localConstant.contract.rateSchedule.HIDDEN}
                isSwitchLabel={true}
                checkedStatus={true}
                //isSwitchLabel={this.props.editedPairollPeriodName.isActive}
                switchName="isActive"
                id="chargeTypeStatus"
                colSize='m3 s12'
                onBlur={props.chargeTypeChange}
            />
            <label className="col s12 m3">
                <input id="descriptionPrintOnInvoice" name="isDescriptionPrintedOnInvoice" type="checkbox" className="filled-in" onClick={props.chargeTypeChange} defaultChecked={true} />
                <span className="labelPrimaryColor">{localConstant.contract.rateSchedule.DESCRIPTION_PRINT_ON_INVOICE}</span>
            </label>
        </Fragment>
    );
};

class RateSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedScheduleName: "",
            SelectedRateSchedule: {}
        };
        this.rateScheduleAddButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.createRateSchedule,
                btnID: "createRateSchedule",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelRateSchedule,
                btnID: "cancelCreateRateSchedule",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];
        this.chargeTypeAddButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.createChargeType,
                btnID: "createChargeType",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelChargeType,
                btnID: "cancelCreateChargeType",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];
        this.rateScheduleEditButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.updateRateSchedule,
                btnID: "editRateSchedule",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelRateSchedule,
                btnID: "cancelCreateRateSchedule",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];
        this.chargeTypeEditButtons = [
            {
                name: localConstant.commonConstants.SUBMIT,
                action: this.editChargeType,
                btnID: "editChargeType",
                btnClass: "waves-effect waves-teal btn-small mr-2",
                showbtn: true
            },
            {
                name: localConstant.commonConstants.CANCEL,
                action: this.cancelChargeType,
                btnID: "cancelCreateChargeType",
                btnClass: "modal-close waves-effect waves-teal btn-small",
                showbtn: true
            }
        ];
        this.updatedData = {};
    }

    componentDidMount = () =>{
        this.props.actions.FetchRateSchedule();
    }

    /**
     * Input Change Handler
     */
    inputChangeHandler = (e) =>{
        const value = e.target[ e.target.type === "checkbox" ? "checked" : "value" ];
        const name = e.target.name;
        const result={ value:value,name:name };
        return result;
    }

    /**
     * Form Input data Change Handler
     */
    formInputChangeHandler = (e) =>{
        const result=this.inputChangeHandler(e);
        this.updatedData[result.name]=result.value;
    }

    /**
     * Rate Schedule Onchange Handler
     */
    RateScheduleOnchangeHandler = (e) =>{
        debugger;
        this.setState({ SelectedScheduleName:e.target.value });
        const currentRateSchedule = this.props.rateSchedule && this.props.rateSchedule.filter(iteratedValue=>{
            if(iteratedValue.scheduleName == e.target.value){
                return iteratedValue;
            }
        }); 
        this.setState({ SelectedRateSchedule:currentRateSchedule });
    }

    /**
     * Rate Schedule Onclick Handler
     */
    RateScheduleCreateHandler = () => {
        this.props.actions.RateScheduleEditCheck(false);
        this.props.actions.RateScheduleModalState(true);
    }

    /**
     * Add New Rate Schedule Function
     */
    createRateSchedule = (e) => {
        e.preventDefault();
        if(this.updatedData && this.updatedData !== {})
        {
            this.updatedData["recordStatus"]="N";
            this.props.actions.AddRateSchedule(this.updatedData);
        }
        this.cancelRateSchedule();
    }

    /**
     * Cancel Add New Rate Schedule
     */
    cancelRateSchedule = () => {
        this.props.actions.RateScheduleModalState(false);
        this.updatedData={};
    }

    /**
     * Rate Schedule Edit Onclick Handler
     */
    RateScheduleEditHandler = () =>{
        // TODO: Store the selected rate schedule object in the store and trigger the modal
        const currentRateSchedule = this.props.rateSchedule && this.props.rateSchedule.filter(iteratedValue=>{
            if(iteratedValue.scheduleName == this.state.SelectedScheduleName){
                return iteratedValue;
            }
        }); 
        this.props.actions.EditRateSchedule(currentRateSchedule[0]);
        this.props.actions.RateScheduleEditCheck(true);
        this.props.actions.RateScheduleModalState(true);
    }

    /**
     * Update Rate Schedule with edited data in store
     */
    updateRateSchedule = (e) => {
        e.preventDefault();
        this.props.actions.UpdateRateSchedule(this.updatedData);
        this.cancelRateSchedule();
    }

    /**
     * Charge Rate Onclick Handler
     */
    chargeRateCreateHandler = () => {
        this.props.actions.ChargeTypeEditCheck(false);
        this.props.actions.ChargeTypeModalState(true);
    }

    /**
     * Add New Charge Type Function
     */
    createChargeType = (e) => {
        e.preventDefault();
        if(this.updatedData && this.updatedData !== {})
        {
            this.props.actions.AddChargeType(this.updatedData);
        }
        this.cancelChargeType();
    }

    /**
     * Cancel Add New Charge Type
     */
    cancelChargeType = () => {
        this.props.actions.ChargeTypeModalState(false);
        this.updatedData={};
    }

    /**
     * Charge Type Update Function
     */
    updateChargeType = () =>{
        e.preventDefault();
        this.props.actions.UpdateChargeType(this.updatedData);
        this.cancelChargeType();
    }

    render() {
        const { rateSchedule } = this.props;
        const { chargeTypes } = this.props;
        const modelData = {};
        // const rateScheduleModalData={ ...this.rateScheduleModalData,isShowModal:this.state.isOpen };
        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                { this.props.isRateScheduleModalOpen && 
                <Modal title="Rate Schedule" modalId="rateSchedulePopup" formId="rateScheduleForm" modalClass="popup-position" buttons={this.props.isRateScheduleEdit?this.rateScheduleEditButtons:this.rateScheduleAddButtons} isShowModal={this.props.isRateScheduleModalOpen}>
                    <RateSchedulePopup 
                        rateScheduleChange={(e)=>this.formInputChangeHandler(e)}  
                        currency={this.props.currency}
                        rateScheduleDefaultData={this.props.rateScheduleEditData}
                    />
                </Modal> }
                { this.props.isChargeTypeModalOpen && 
                <Modal title="Charge Type" modalId="chargeRatePopup" formId="chargeRateForm" modalClass="popup-position" buttons={this.props.isChargeTypeEdit?this.chargeTypeEditButtons:this.chargeTypeAddButtons} isShowModal={this.props.isChargeTypeModalOpen}>
                    <ChargeTypePopup chargeTypeChange={(e)=>this.formInputChangeHandler(e)}/>
                </Modal> }
                <div className="customCard">
                    <p className="bold" >{localConstant.contract.rateSchedule.RATE_SCHEDULES}</p>
                    <div className="row">
                        <CustomInput
                            hasLabel={true}
                            divClassName='col'
                            label={localConstant.contract.rateSchedule.SCHEDULE_NAME}
                            type='select'
                            colSize='s6 m4'
                            className="browser-default customInputs"
                            optionsList={rateSchedule}
                            optionName='scheduleName'
                            optionValue="scheduleName"
                            id="scheduleName"
                            onSelectChange={(e) => this.RateScheduleOnchangeHandler(e)}
                            disabled = {this.props.interactionMode}
                        />
                        <div className="col s12 m3">
                            <a href="#" onClick={this.RateScheduleCreateHandler} className="link customCreateDiv">+{localConstant.contract.common.CREATE + " | "}</a>
                            <a href="#" onClick={this.RateScheduleEditHandler} disabled={this.state.SelectedScheduleName === "select" || this.state.SelectedScheduleName === "Select" || this.state.SelectedScheduleName === "" ? true : false} className="link editTxtColor customCreateDiv">{localConstant.contract.common.EDIT + " | "}</a>
                            <a className="link danger-txt modal-trigger customCreateDiv" href="#confirmation_Modal" onClick={this.RateScheduleDeleteHandler} disabled={this.state.SelectedScheduleName === "select" || this.state.SelectedScheduleName === "Select" || this.state.SelectedScheduleName === "" ? true : false}>{localConstant.contract.common.DELETE}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s5 labelPrimaryColor">
                            <span class="bold">{localConstant.contract.rateSchedule.NAME_PRINTED_ON_INVOICE} :</span> {this.state.SelectedRateSchedule.invoiceScheduleName} |
                        <span class="bold">{localConstant.contract.rateSchedule.CURRENCY} : </span>{this.state.SelectedRateSchedule.currency}
                        </div>
                    </div>
                    <CardPanel className="white lighten-4 black-text" title={localConstant.contract.rateSchedule.CHARGE_RATES} colSize="s12">
                        <ReactGrid gridRowData={chargeTypes} gridColData={HeaderData} onRef={ref => { this.child = ref; }} />
                    </CardPanel>
                    <div className="right-align mr-3 add-text">
                        <a href="#" onClick={this.chargeRateCreateHandler} className="btn-small">{localConstant.commonConstants.ADD}</a>
                        <a href="#confirmation_Modal" onClick={this.chargeRateDeleteHandler} className="modal-trigger btn-small ml-2" disabled={this.state.SelectedScheduleName === 'Select' || this.state.SelectedScheduleName === '' ? true : false}>{localConstant.commonConstants.DELETE}</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

RateSchedule.propTypes = {
    rateSchedule: PropTypes.array.isRequired,
    SelectedScheduleName: PropTypes.string.isRequired,

};

RateSchedule.defaultprops = {
    rateSchedule: [],
    SelectedScheduleName:"",
};

export default RateSchedule;