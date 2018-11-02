import CompanyOffices from './companyOffices';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddCompanyOffice, UpdateCompanyOffice, DeleteCompanyOffices, FetchState, FetchCountry, FetchCity, ShowButtonHandler, ClearStateCityData } from '../../../viewComponents/company/companyAction';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        companyOfficeDetail: state.CompanyReducer.companyDetail.CompanyOffices == null ? [] : state.CompanyReducer.companyDetail.CompanyOffices,
        editRecord: state.CompanyReducer.editedcompanyOffice,        
        showButton: state.CompanyReducer.showButton,
        cityMasterData: state.CompanyReducer.cityMasterData,
        stateMasterData: state.CompanyReducer.stateMasterData,
        countryMasterData: state.CompanyReducer.countryMasterData,
        loggedInUser: state.appLayoutReducer.loginUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {                
                AddCompanyOffice,
                UpdateCompanyOffice,
                DeleteCompanyOffices,                
                FetchState,
                FetchCountry,
                FetchCity,
                ShowButtonHandler,
                DisplayModal,
                HideModal,
                ClearStateCityData
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyOffices);