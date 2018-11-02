import FileToBeOpen from './fileToBeOpen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DownloadDocumentData, DownloadUploadedDocumentData } from '../../../../viewComponents/customer/customerAction';

const mapStateToProps = (state) => {
    return {
        displayDocuments: state.CustomerReducer.displayDocuments
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