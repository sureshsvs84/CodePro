import Documents from './documents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchMasterDocumentTypes, AddDocumentDetails, CopyDocumentDetails, DeleteDocumentDetails, EditDocumentDetails, UpdateDocumentDetails, ShowButtonHandler, UploadDocumentData, DownloadDocumentData, DisplayDocuments, PasteDocumentUploadData } from '../../../viewComponents/customer/customerAction';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        DocumentsData: state.CustomerReducer.customerDetail.Documents,
        masterDocumentTypesData: state.CustomerReducer.masterDocumentTypeData,        
        copiedDocumentDetails: state.CustomerReducer.copyDocumentDetails,
        editDocumentDetails: state.CustomerReducer.editDocumentDetails,
        showButton: state.CustomerReducer.showButton,
        selectedCustomerCode: state.CustomerReducer.selectedCustomerCode,
        loggedInUser: state.appLayoutReducer.loginUser            
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchMasterDocumentTypes,
                AddDocumentDetails,
                CopyDocumentDetails,
                DeleteDocumentDetails,
                EditDocumentDetails,
                UpdateDocumentDetails,
                ShowButtonHandler,
                DisplayModal,
                HideModal,
                UploadDocumentData,
                DownloadDocumentData,
                DisplayDocuments,
                PasteDocumentUploadData
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Documents);