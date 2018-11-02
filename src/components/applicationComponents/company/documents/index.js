import Documents from './documents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchMasterCompanyDocumentTypes,DownloadDocumentData,PasteDocumentUploadData, UploadDocumentData, AddDocumentDetails, CopyDocumentDetails, DeleteCompanyDocumentDetails, UpdateDocumentDetails, ShowButtonHandler,DispalyDocumentDetails } from '../../../viewComponents/company/companyAction';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';
const mapStateToProps = (state) => {
    return {
        DocumentsData: state.CompanyReducer.companyDetail.CompanyDocuments,
        masterDocumentTypesData: state.CompanyReducer.masterDocumentTypeData,
        gridProps: state.CompanyReducer.gridProps,
        copiedDocumentDetails: state.CompanyReducer.copyDocumentDetails,
        editCompanyDocumentDetails: state.CompanyReducer.editCompanyDocumentDetails,
        showButton: state.CompanyReducer.showButton,
        loggedInUser: state.appLayoutReducer.loginUser,
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {               
                FetchMasterCompanyDocumentTypes,
                AddDocumentDetails,
                CopyDocumentDetails,
                DeleteCompanyDocumentDetails,
                UpdateDocumentDetails,
                ShowButtonHandler,
                DisplayModal,
                HideModal,
                UploadDocumentData,
                DispalyDocumentDetails,
                DownloadDocumentData,
                PasteDocumentUploadData
                
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Documents);