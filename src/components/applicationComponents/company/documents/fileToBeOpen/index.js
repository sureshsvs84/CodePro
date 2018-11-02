import FileToBeOpen from './fileToBeOpen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DownloadDocumentData, DownloadUploadedDocumentData } from '../../../../viewComponents/company/companyAction';

const mapStateToProps = (state) => {
    return {
        displayDocuments: state.CompanyReducer.displayDocuments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                DownloadDocumentData,
                DownloadUploadedDocumentData
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileToBeOpen);