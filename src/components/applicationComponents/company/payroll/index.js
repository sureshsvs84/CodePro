import Payroll from './payroll';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    FetchPayrollData,
    FetchPayrollPeriodName,
    AddNewPayroll,
    AddNewPayrollPeriodName,
    FetchCostSaleReference,
    PayrollPopupClear,
    DeletePayrollType,
    UpdateCompanyPayrollButton,
    UpdateCompanyPayroll,
    DeletePayrollPeriodName,
    UpdatePayrollPeriodName,
    TogglePayrollPeriodNameButton,
    UpdateOverrideCostSaleReference
} from '../../../viewComponents/company/companyAction';
import { FetchCurrency,FetchPayrolls } from '../../../appLayout/appLayoutActions';
import {
    DisplayModal,
    HideModal
} from '../../../baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        PayrollData: state.CompanyReducer.companyDetail.CompanyPayrolls == null ? [] : state.CompanyReducer.companyDetail.CompanyPayrolls,
        CostOfSaleReference: state.CompanyReducer.CostOfSaleReference,
        //PayrollPeriodName:state.CompanyReducer.companyDetail.CompanyPayrollPeriods,
        PayrollPeriodName: state.CompanyReducer.companyDetail.CompanyPayrollPeriods == null ? [] : state.CompanyReducer.companyDetail.CompanyPayrollPeriods,
        selectedCompanyCode: state.CompanyReducer.selectedCompanyCode,
        loginUser: state.appLayoutReducer.loginUser,
        isEditCompanyPayroll: state.CompanyReducer.isEditCompanyPayroll,
        currency: state.appLayoutReducer.currency,
        editedPairollPeriodName: state.CompanyReducer.editPayrollPeriodName,
        showButton: state.CompanyReducer.showButton,
        masterPayrolls: state.appLayoutReducer.payrolls,
        exportPrefixes: state.appLayoutReducer.exportPrefixes,
        isCOSEmailOverrideAllow: state.CompanyReducer.companyDetail !== undefined?state.CompanyReducer.companyDetail.CompanyInfo.isCOSEmailOverrideAllow:false
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchPayrollData,
                FetchPayrollPeriodName,
                AddNewPayroll,
                AddNewPayrollPeriodName,
                FetchCostSaleReference,
                PayrollPopupClear,
                DeletePayrollType,
                UpdateCompanyPayrollButton,
                DisplayModal,
                HideModal,
                UpdateCompanyPayroll,
                FetchCurrency,
                DeletePayrollPeriodName,
                UpdatePayrollPeriodName,
                TogglePayrollPeriodNameButton,
                UpdateOverrideCostSaleReference,
                FetchPayrolls
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payroll);