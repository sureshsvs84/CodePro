import Notes from './notes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddCompanyNotesDetails,
    //  UpdateCompanyNotesDetails,
    //   DeleteCompanyNotesDetails,
       ShowButtonHandler } from '../../../viewComponents/company/companyAction';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';
const mapStateToProps = (state) => {    
    return {
        companyNotesData: state.CompanyReducer.companyDetail.CompanyNotes,
        showButton: state.CompanyReducer.showButton,
        //editRecord: state.CompanyReducer.editedNoteData,
        loggedInUser: state.appLayoutReducer.loginUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {       
                AddCompanyNotesDetails,
                // UpdateCompanyNotesDetails,
                // DeleteCompanyNotesDetails,
                ShowButtonHandler,
                DisplayModal,
                HideModal
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
