import Notes from './notes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchContractNotes,AddContractNotesDetails,ShowButtonHandler,GetSelectedContractNumber } from '../../../../actions/contracts/notes';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';
const mapStateToProps = (state) => {    
    return {
        ContractsNotesData: state.ContractNoteReducer.ContractNotes,
        showButton: state.ContractNoteReducer.showButton,
        loggedInUser: state.appLayoutReducer.loginUser,
        selectedContractNumber:state.ContractNoteReducer.selectedContractNumber
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {  
                FetchContractNotes, 
                ShowButtonHandler,
                GetSelectedContractNumber,
                DisplayModal,
                HideModal,
                AddContractNotesDetails
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
