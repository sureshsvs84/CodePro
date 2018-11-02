import FileToBeOpen from './fileToBeOpen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DownloadDocumentData, DownloadUploadedDocumentData } from '../../../../../actions/contracts/documents';

const mapStateToProps = (state) => {
    return {
        displayDocuments: state.DocumentReducer.displayDocuments
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