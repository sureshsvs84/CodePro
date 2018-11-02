import Notes from './notes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddNotesDetails,
    // UpdateNotesDetails, DeleteNotesDetails, 
    // EditNotesDetails, 
    ShowButtonHandler } from '../../../viewComponents/customer/customerAction';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        notesData: state.CustomerReducer.customerDetail.Notes,        
        showButton: state.CustomerReducer.showButton,
        //editRecord: state.CustomerReducer.editedNoteData,
        loggedInUser: state.appLayoutReducer.loginUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {                
                AddNotesDetails,
                //UpdateNotesDetails,
                //DeleteNotesDetails,
                //EditNotesDetails,
                ShowButtonHandler,
                DisplayModal,
                HideModal
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);