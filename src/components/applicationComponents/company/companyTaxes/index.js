import CompanyTaxes from './companyTaxes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';
import { AddCompanyTaxes, UpdateCompanyTaxes, DeleteCompanyTaxes, ShowButtonHandler } from '../../../viewComponents/company/companyAction';

const mapStateToProps = (state) => {
    return {
        CompanyTaxes: state.CompanyReducer.companyDetail.CompanyTaxes == null ? [] : state.CompanyReducer.companyDetail.CompanyTaxes,        
        taxMasterData: state.CompanyReducer.taxMasterData,
        editCompanyTaxes: state.CompanyReducer.editCompanyTaxes,
        showButton: state.CompanyReducer.showButton,
        loggedInUser: state.appLayoutReducer.loginUser,
        selectedCompanyCode: state.CompanyReducer.selectedCompanyCode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                AddCompanyTaxes,
                UpdateCompanyTaxes,
                DeleteCompanyTaxes,
                ShowButtonHandler,
                DisplayModal,
                HideModal          
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyTaxes);