import React, { Component } from 'react';
import MaterializeComponent from 'materialize-css';
import CustomerContracts from '../../../contracts';
import { HeaderData } from './headerData.js';
class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleChangeStatus: "",
            rowData: []
        };
    }
    componentDidMount() {
        const tab = document.querySelectorAll('.tabs');
        const tabInstances = MaterializeComponent.Tabs.init(tab);
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);
        const datePicker = document.querySelectorAll('.datepicker');
        const datePickerInstances = MaterializeComponent.Datepicker.init(datePicker);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });

        this.props.actions.FetchCustomerContract();
    }
    handleChangeStatus = (e) => {
        const selectValue = e.target.value;
        const { customerContractDetail } = this.props;

        if (selectValue === 'All') {
            this.props.actions.FetchFilteredContract(customerContractDetail);
        }
        if (selectValue === 'Open') {
            const res = customerContractDetail.filter(result => result.contractStatus === "O");
            this.props.actions.FetchFilteredContract(res);
        }
        if (selectValue === 'Closed') {
            const res = customerContractDetail.filter(result => result.contractStatus === "C");
            this.props.actions.FetchFilteredContract(res);
        }
    }
    render() {
        const headData = HeaderData.ContractHeader;
        const { filterdContractDetails } = this.props;
        const rowData = filterdContractDetails;
        return (
            <CustomerContracts ContractDetail={rowData}
            headData={headData}
            handleChangeStatus={this.handleChangeStatus}/>
        );
    }
}
export default Contracts;