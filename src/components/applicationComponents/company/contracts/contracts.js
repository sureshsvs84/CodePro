import React, { Component } from 'react';
import MaterializeComponent from 'materialize-css';
import { HeaderData } from './headerData.js';
import CompanyContracts from '../../../contracts';
class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: [],
            handleChangeStatus: "",
            StatusOptions: []
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

        this.props.actions.FetchCompanyContract();
    }
    handleChangeStatus = (e) => {
        const selectValue = e.target.value;
        const { companyContractDetail } = this.props;

        if (selectValue === 'All') {
            this.props.actions.FetchFilteredContract(companyContractDetail);
        }
        if (selectValue === 'Open') {
            const res = companyContractDetail.filter(result => result.contractStatus === "O");
            this.props.actions.FetchFilteredContract(res);
        }
        if (selectValue === 'Closed') {
            const res = companyContractDetail.filter(result => result.contractStatus === "C");
            this.props.actions.FetchFilteredContract(res);
        }
    }

    render() {
        const headData = HeaderData;
        const { filterdContractDetails } = this.props;
        const rowData = filterdContractDetails;
        return (
            <CompanyContracts ContractDetail={rowData}
            headData={headData}
            handleChangeStatus={this.handleChangeStatus}/>
        );

    }
}

export default Contracts;
