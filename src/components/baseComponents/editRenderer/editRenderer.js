import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
    EditDocumentDetails,
    // EditNotesDetails,
    EditAssignmentReference,
    EditAccountReference,
    EditAddressReference,
    EditContactReference,    
} from "../../viewComponents/customer/customerAction";
import { SelectedDocumentToApprove,RejectDocument } from '../../viewComponents/dashboard/dahboardActions';
import {
    EditCompanyDocumentDetails,
    EditCompanyOffice,
    EditInvoiceFooter,
    EditInvoiceRemittance,
    //EditCompanyNotesDetails,
    EditExpectedMargin,
    EditCompanyDivisionCostcentre,
    EditPayrollPeriodName,
    EditCompanyTaxes
} from '../../viewComponents/company/companyAction';
import{ EditFixedExchangeRate } from '../../viewComponents/contracts/contractAction';
import { ChargeTypeModalState,ChargeTypeEditCheck } from '../../../actions/contracts/rateScheduleAction';
import { EditContractDocumentDetails } from '../../../actions/contracts/documents';
class EditRenderer extends Component {
    selectedRowHandler = () => {              
        if (this.props.action === "EditContactReference") {
            document.getElementById("addressId").setAttribute("disabled", "disabled");
        }
        this.props[this.props.action](this.props.data);
        if(this.props.popupAction){
            this.props[this.props.popupAction](true);
        }
        if(this.props.buttonAction){
            this.props[this.props.buttonAction](true);
        }
    }

    render() {
        return (
            <a className="waves-effect waves-light modal-trigger" onClick={this.selectedRowHandler} href={"#" + this.props.popupId}>{this.props.label?this.props.label:"Edit"}</a>
        );
    }
}

export default connect(null, {
    EditDocumentDetails,
    EditCompanyDocumentDetails,
    // EditNotesDetails,
    EditAssignmentReference,
    EditAccountReference,
    EditAddressReference,
    EditContactReference,
    EditCompanyOffice,
    EditExpectedMargin,
    //EditCompanyNotesDetails,
    EditInvoiceFooter,
    EditInvoiceRemittance,
    EditCompanyDivisionCostcentre,
    EditPayrollPeriodName,
    EditCompanyTaxes,
    EditContractDocumentDetails,
    SelectedDocumentToApprove,
    EditFixedExchangeRate,
    ChargeTypeEditCheck,
    ChargeTypeModalState,
    RejectDocument,
})(EditRenderer);
