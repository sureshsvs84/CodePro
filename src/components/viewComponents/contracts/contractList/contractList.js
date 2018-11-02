import React, { Component, Fragment } from 'react';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import { HeaderData } from './contractListHeaderData.js';
import MaterializeComponent from 'materialize-css';
import { ContractHeaderData } from '../contractHeaderData.js';
import LabelwithValue from '../../../baseComponents/customLabelwithValue';
import CustomInput from '../../../baseComponents/inputControlls';
import Panel from '../../../baseComponents/panel';
import Modal from '../../../baseComponents/modal';
import { getlocalizeData, isEmpty } from '../../../../utils/commonUtils';
// import CustomerSearchModal from '../../../applicationComponents/customerSearchModal';

const localConstant = getlocalizeData();
const SearchFilter = (props) => (
    <form onSubmit={props.customerContractSearch} onReset={props.clearSearchData} >
        <div className="row mb-0">
            <div className="col s4 pl-0" >
                <CustomInput hasLabel={true} divClassName='col' label={localConstant.customer.CUSTOMER_NAME}
                    type='text' colSize='s11'  name='contractCustomerName' inputClass="customInputs" readOnly={true} defaultValue={props.customerName} />
                <button type="button" className="mt-4" onClick={props.selectCustomerName} >...</button>
            </div>
            <CustomInput hasLabel={true} divClassName='col' label={localConstant.contract.STATUS} type='select' defaultValue='Open' onSelectChange={props.updateChange}
                colSize='s4' className="browser-default" name='contractStatus' optionsList={props.status} optionName='value' inputClass="customInputs" />
            <CustomInput hasLabel={true} divClassName='col' label={localConstant.contract.CONTRACT_NO} onValueChange={props.updateChange}
                type='text' colSize='s4' inputClass="customInputs" name='contractNumber' />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true} divClassName='col' onSelectChange={props.updateChange} 
                label={localConstant.contract.SEARCH_DOCUMENTS} type='select' colSize='s4' className="browser-default" />
            <CustomInput hasLabel={true} divClassName='col' label={localConstant.contract.CUSTOMER_CONTRACT_NUMBER} onValueChange={props.updateChange}
                type='text' colSize='s4' inputClass="customInputs" name='customerContractNumber' />
            <CustomInput hasLabel={true} divClassName='col' label={localConstant.contract.CONTRACT_HOLDING_COMPANY} onSelectChange={props.updateChange}
                type='select' colSize='s4' className="browser-default" name='contractHoldingCompanyName' />
        </div>
        <div className="row mb-0">
            <CustomInput hasLabel={true} divClassName='col' label={localConstant.contract.SEARCH_TEXT} type='textarea' colSize='s4'
                className="browser-default" onValueChange={props.updateChange} />
            <button type="submit" className="mt-4 mr-4 modal-close waves-effect waves-green btn" >Search</button>
            <button type="reset"  className="mt-4 modal-close waves-effect waves-green btn">Reset</button>
        </div>
    </form>
);

const SearchCustomer = (props) => (
    <form>
        {/* <LabelwithValue label={localConstant.contract.SELECT_CUSTOMER} /> */}
        <div className="row mb-0">
            <CustomInput hasLabel={true} name='customerName' divClassName='col' label={localConstant.companyDetails.generalDetails.NAME} type='text'
                colSize='s6' inputClass="customInputs" onValueChange={props.searchCustomer} />
            <CustomInput hasLabel={true} name='operatingCountry' divClassName='col' label={localConstant.modalConstant.COUNTRY} type='select' colSize='s6'
                inputClass="customInputs" optionsList={props.countryMasterData} optionName='name' optionValue="name" 
                className="browser-default" onSelectChange={props.searchCustomer} />
        </div>
    </form>
);

class ContractList extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.updatedCustomerData = {};
        this.customerName = [];
    }
    // componentWillUnmount() {
    //     this.props.actions.ClearSearchData();
    //     // this.props.actions.OnSubmitCustomerName();
    // }
    componentDidMount() {
        this.props.actions.FetchCountry();
    }
    panelClick = (e) => {
        this.props.actions.ShowHidePanel();
    }
    selectCustomerName = () => {
        this.customerName = [];
        this.props.actions.CustomerShowModal();
    }
    searchCustomer = (e) => {
        e.preventDefault();
        this.updateCustomer(e);
        this.props.actions.FetchCustomerList(this.updatedCustomerData);
    }
    hideModal = (e) => {
        e.preventDefault(); 
        this.props.actions.CustomerHideModal();
    }
    getCustomerName = (e) => {
        e.preventDefault(); 
        const selectedCustomer = this.child.getSelectedRows();
        if (isEmpty(selectedCustomer)) {
            MaterializeComponent.toast({
                html: 'Select Customer Name',
                classes: 'warningToast'
            });
        }
        else {
            selectedCustomer.map(customer => {
                this.customerName.push(customer.customerName);
                this.props.actions.OnSubmitCustomerName(this.customerName);
            });
            this.props.actions.CustomerHideModal();
        }
    }
    updateCustomer = (e) => {
        this.updatedCustomerData[e.target.name] = e.target.value;
    }
    updateChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }
    customerContractSearch = (e) => {
        e.preventDefault(); 
        debugger;
        this.props.actions.FetchCustomerContract(this.updatedData);
        console.log(this.props);
        this.props.actions.UpdateInteractionMode(this.props.location.hash);
    }
    clearSearchData = () => {
        this.props.actions.ClearSearchData(this.updatedData);
    }

    render() {
        const statusValues = [
            { value: 'Open' },
            { value: 'Close' }
        ];
        return (
            <Fragment>
    
                <Modal buttons={[ { name: 'Cancel', action: this.hideModal, btnClass:'btn-small mr-1', showbtn: true }, { name: 'Submit', action: this.getCustomerName, btnClass:'btn-small', showbtn: true } ]}
                    isShowModal={this.props.isShowModal}>
                    <SearchCustomer countryMasterData={this.props.countryMasterData} searchCustomer={this.searchCustomer} />
                    <ReactGrid gridRowData={this.props.customerList} gridColData={HeaderData} onRef={ref => { this.child = ref; }} />
                </Modal>                

                {/* <CustomerSearchModal isShowModal={this.props.isShowModal} onValueChange={this.searchCustomer} optionsList={this.props.countryMasterData} onSelectChange={this.searchCustomer}
                    gridRowData={this.props.customerList} cancelAction={this.hideModal} submitAction={this.getCustomerName} /> */}
                <div className="companyPageContainer customCard">
                    <Panel colSize="s12" heading="Contract" subtitle="Edit/View Company" onpanelClick={this.panelClick} isopen={this.props.isopen} >
                        <SearchFilter status={statusValues} updateChange={this.updateChange} countryMasterData={this.props.countryMasterData}
                            customerName={this.customerName} selectCustomerName={this.selectCustomerName} customerContractSearch={this.customerContractSearch} clearSearchData={this.clearSearchData} > </SearchFilter>
                    </Panel>
                    <ReactGrid gridRowData={this.props.customerContract} gridColData={ContractHeaderData} />
                </div>
              
            </Fragment>
        );
    }
}

export default ContractList;
