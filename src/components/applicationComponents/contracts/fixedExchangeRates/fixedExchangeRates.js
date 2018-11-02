import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import { HeaderData } from './headerData.js';
import PropTypes from 'proptypes';
import CardPanel from '../../../baseComponents/cardPanel';
import LabelwithValue from '../../../baseComponents/customLabelwithValue';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
import Modal from '../../../baseComponents/modal';
import { withRouter } from 'react-router-dom';
//import moment from 'moment';
import dateUtil from '../../../../utils/dateUtil';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';

const localConstant = getlocalizeData();

const FixedExchangeModal = (props) => (

    <div>
        <LabelwithValue colSize="s12" label="Add Fixed Exchange Rates" divClassName='col loadedDivision' />
        <CustomInput hasLabel={true} type='select'
            divClassName='col loadedDivision'
            label="From Currency" colSize='s3'
            optionsList={props.CurrencyData}
            optionName='code'
            optionValue="code"
            labelClass="mandate"
            name="fromCurrency"
            defaultValue={props.selectedRow.fromCurrency}
            className="browser-default customInputs"
            onSelectChange={props.onChange}           

        />
        <CustomInput
            hasLabel={true}
            divClassName='col loadedDivision'
            type='select'
            label="To Currency"
            colSize='s3'
            name="toCurrency"
            labelClass="mandate"
            className="browser-default customInputs"
            required={true}
           defaultValue={props.selectedRow.toCurrency}
            optionsList={props.CurrencyData}
            optionName="code"
            optionValue="code"
            onSelectChange={props.onChange}
        />
        <CustomInput
            hasLabel={true}
            isNonEditDateField={false}
            divClassName='col loadedDivision'
            type='date'
            label="Effective Date"
            colSize='s3'
            htmlFor="EffectiveDate"
            name="effectiveFrom"
            defaultValue={props.selectedRow.effectiveFrom}
            onDatePickBlur={props.handleStartDateBlur}
            labelClass=" customLabel mandate"
            dateFormat="DD-MM-YYYY"
            required={true}
            selectedDate={props.fixedDate}
            onDateChange={props.DateVariable}
            shouldCloseOnSelect={true}
        />
        <CustomInput
            hasLabel={true}
            label="Exchange Rate"
            labelClass="  mandate"
            divClassName="s3"
            type='number'
            name="exchangeRate"
            required={true}
            colSize='s3'
           defaultValue={props.selectedRow.exchangeRate}
            inputClass="customInputs"
            onValueChange={props.onChange}
        />
    </div>
);

class FixedExchangeRates extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.state = {
            isOpen: false,
            checkboxHideButon: false,
            FixedExchangeDate: '',
            inValidStartDate: false,

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
        //this.props.actions.HideCheckBox();
        //  this.props.actions.EditFixedExchangeRate();
        // this.props.actions.FetchContractFixedRate();
        this.props.actions.FetchCurrency();
    }
    componentWillMount(){
        // this.props.actions.FetchContractFixedRate();
    }
    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;

    }
    about = () => {
        this.props.actions.AboutShowModal();
        this.updatedData = {};
    }
    handleFixedExchangeDateChange = (date) => {

        this.setState({
            FixedExchangeDate: date
        });
    }
    handleStartDateBlur = (e) => {
        if (e.target !== undefined) {
            const isValid = dateUtil.isValidDate(e.target.value);
            if (!isValid) {
                MaterializeComponent.toast({
                    html: 'Please Enter Valid Start Date',
                    classes: 'warningToast'
                });
                this.setState({ inValidStartDate: true });
            } else {
                this.setState({ inValidStartDate: false });
            }
        }
    }
    onCheckboxClick = (e) => {
        if (e.target.checked === true) {
            this.props.actions.FetchContractFixedRate();
            // this.props.actions.HideCheckBox();
        }
        else {
            // this.props.actions.FetchContractFixedRate();
            this.props.actions.HideCheckBox();
        }
        this.setState({ checkboxHideButon: e.target.checked });

    }

    onClearData = () => {
        document.getElementById("fixedExform").reset();
        this.props.actions.AboutHideModal();
    }
    deleteSelected = () => {
        const selectedData = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedData);
        this.props.actions.DeleteFixedExchangeRate(selectedData);
        this.props.actions.HideModal();
    }
    FixedExchangeSubmitHandler = (e) => {
        // let alreadySelected = false;
        e.preventDefault();
        const NewFixedExchangeDate = this.state.FixedExchangeDate;
        if (this.props.enableButton === true) {

            if (this.updatedData.fromCurrency === undefined || this.updatedData.fromCurrency === "") {
                MaterializeComponent.toast({
                    html: 'Select From Currency',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedData.toCurrency === undefined || this.updatedData.toCurrency === "") {
                MaterializeComponent.toast({
                    html: 'Select  ToCurrency',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedData.fromCurrency === this.updatedData.toCurrency) {
                MaterializeComponent.toast({
                    html: 'Both currencies cannot be same',
                    classes: 'warningToast'
                });
            }

            else {
        
                this.updatedData["recordStatus"] = "N";
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData['effectiveFrom']=NewFixedExchangeDate.format();
                //this.updatedData["contractId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                this.props.actions.AddFixedExchangeRate(this.updatedData);

                this.updatedData = {};
                this.onClearData();
            }

        }
        if (this.props.enableButton === false) {

            if (this.props.editFixedExchangeDetails.recordStatus !== "N") {
                this.updatedData["recordStatus"] = "M";
            
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData["contractNumber"] = this.updatedData.contractNumber;
                this.updatedData['effectiveFrom']=NewFixedExchangeDate;
                this.props.actions.UpdateFixedExchangeRate(this.updatedData);
                this.updatedData = {};
                this.onClearData();
        }
            else{
                this.updatedData["recordStatus"] = "M";
                this.updatedData["modifiedBy"] = this.props.loggedInUser;
                this.updatedData['effectiveFrom']=NewFixedExchangeDate;
                this.props.actions.UpdateFixedExchangeRate(this.updatedData);
                this.updatedData = {};
                this.onClearData();
            }
        }
    }
    FixedExchangeDeleteClickHandler = () => {
        const selectedRecords = this.child.getSelectedRows();

        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.FIXED_EXCHANGE_RATE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteSelected,
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
        else {
            MaterializeComponent.toast({
                html: 'Select Any one Row to delete',
                classes: 'warningToast'
            });
        }
    }
    confirmationRejectHandler = () => {
        this.props.actions.HideModal();

    }

    render() {
       let FixedExchangeDetails=[];
        const {  showButton, enableButton, editFixedExchangeDetails, currencyData } = this.props;
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        
           FixedExchangeDetails = this.props.ContractFixedRate && this.props.ContractFixedRate.filter(rate => rate.recordStatus !== "D");
        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                {<Modal id="modalid" modalClass="detailModal" buttons={[ { name: '', action: this.about }, { name: '', action: this.expectedFixedExchangeSubmitHandler } ]} isShowModal={showButton}>
                    <form id="fixedExform" onSubmit={this.FixedExchangeSubmitHandler}>
                        <FixedExchangeModal handleStartDateBlur = {this.handleStartDateBlur} fixedDate={this.state.FixedExchangeDate} DateVariable={this.handleFixedExchangeDateChange} selectedRow={editFixedExchangeDetails} CurrencyData={currencyData} datevaraiable={this.state.datevaraiable} onChange={this.handlerChange} FormSubmit={this.FixedExchangeSubmitHandler} interactionMode = {this.props.interactionMode}/>
                            
                        <div className="modal-footer mt-4">
                            <button id="cancelFixedExchangeDetail" type="button" onClick={this.about} className="modal-close waves-effect waves-teal btn-flat">{localConstant.commonConstants.CANCEL}</button>
                            {enableButton ? <button type="submit" className="btn-small">{localConstant.commonConstants.SUBMIT}</button>
                                :
                                <button type="submit" className="btn-small ">{localConstant.commonConstants.UPDATE}</button>}</div>
                    </form>
                </Modal>
                }
                <div className="genralDetailContainer customCard">

                    <CardPanel className="white lighten-4 black-text" title={localConstant.contract.FIXED_EXCHANGES_RATES} colSize="s12">
                        <CustomInput hasLabel={false}
                            type='checkbox'
                            divclassName='black-text'
                            checkBoxArray={[ { label: "Use Contract Exchange Rates", value: '' } ]}
                            colSize='s3'
                            value='value'
                            name="label"
                            onCheckboxChange={this.onCheckboxClick}                         
                            disabled ={this.props.interactionMode}
                        />
                        <ReactGrid gridRowData={FixedExchangeDetails} gridColData={HeaderData.ContractFixedExchangeRatesHeader} onRef={ref => { this.child = ref; }} />
                    </CardPanel>
                    <div className="right-align mt-2">
                        <a onClick={this.about} href="#fixedExform" disabled={this.state.checkboxHideButon === true ? false : true} className="btn-small modal-trigger">{localConstant.commonConstants.ADD}</a>
                        <a href="#confirmation_Modal" disabled={this.state.checkboxHideButon === true ? false : true} onClick={this.FixedExchangeDeleteClickHandler} className="btn-small ml-2 modal-trigger">{localConstant.commonConstants.DELETE}</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

FixedExchangeRates.propTypes = {
    FixedExchangeRateDetails: PropTypes.array.isRequired
};

FixedExchangeRates.defaultprops = {
    FixedExchangeRateDetails: []
};
export default withRouter(FixedExchangeRates);