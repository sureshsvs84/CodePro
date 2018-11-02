import DivisionCostCenterMargin from './divisionCostCenterMargin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    FetchCompanyDivision,
    FetchDivisionCostCenter,
    AddNewDivision,
    AddNewDivisionCostCentre,
    UpdateCompanyDivisionCostcentre,
    UpdateCompanyDivision,
    DeleteCompanyDivision,
    UpdateCompanyDivisionButton,
    DeleteCompanyDivisionCostCentre,
    UpdateCostCentreButton
} from '../../../viewComponents/company/companyAction';
import {
    DisplayModal,
    HideModal
} from '../../../baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        companyDivision: state.CompanyReducer.companyDetail.CompanyDivisions,
        companyDivisionCostCenter: state.CompanyReducer.companyDetail.CompanyDivisionCostCenters === null ? [] : state.CompanyReducer.companyDetail.CompanyDivisionCostCenters,
        editedDivisionCostCentre: state.CompanyReducer.editCompanyDivisionCostCenter,
        selectedCompanyCode: state.CompanyReducer.selectedCompanyCode,
        loginUser: state.appLayoutReducer.loginUser,
        EditCompanyDivisionCostcentre: state.CompanyReducer.EditCompanyDivisionCostcentre,
        isEditCompanyDivisionCostCenterUpdate: state.CompanyReducer.isEditCompanyDivisionCostCenterUpdate,
        isEditCompanyDivision: state.CompanyReducer.isEditCompanyDivision,
        divisionNames: state.appLayoutReducer.divisionName,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchCompanyDivision,
                FetchDivisionCostCenter,
                AddNewDivision,
                AddNewDivisionCostCentre,
                UpdateCompanyDivisionCostcentre,
                UpdateCompanyDivision,
                DeleteCompanyDivision,
                UpdateCompanyDivisionButton,
                UpdateCostCentreButton,
                DeleteCompanyDivisionCostCentre,
                DisplayModal,
                HideModal
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DivisionCostCenterMargin);