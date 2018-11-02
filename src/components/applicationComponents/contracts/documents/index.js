import Documents from './documents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchMasterContractDocumentTypes,PasteContractDocumentUploadData,DeleteContractDocumentDetails,FetchContractDocuments,UploadDocumentData, AddDocumentDetails, CopyDocumentDetails, UpdateDocumentDetails, ShowButtonHandler,DispalyDocumentDetails } from '../../../../actions/contracts/documents';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';
const mapStateToProps = (state) => {
    return {
        DocumentsData: state.DocumentReducer.ContractDocuments,
        masterContractDocumentTypesData: state.DocumentReducer.masterDocumentTypeData,
        copiedDocumentDetails: state.DocumentReducer.copyDocumentDetails,
        editContractDocumentDetails: state.DocumentReducer.editContractDocumentDetails,
        showButton: state.DocumentReducer.showButton,
        loggedInUser: state.appLayoutReducer.loginUser,
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {              
                FetchMasterContractDocumentTypes,
                FetchContractDocuments,
                AddDocumentDetails,
                CopyDocumentDetails,
                UpdateDocumentDetails,
                ShowButtonHandler,
                DisplayModal,
                HideModal,
                UploadDocumentData,
                DispalyDocumentDetails,
                DeleteContractDocumentDetails,
                PasteContractDocumentUploadData
                
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Documents);