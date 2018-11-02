import DocumentAproval from './documentAproval';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchDocumentApproval } from '../../../viewComponents/dashboard/dahboardActions';
const mapStateToProps = (state) => {
    return {
        documentApprovalGridData:state.dashboardReducer.documentApproval,
    };
}; 
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            FetchDocumentApproval,
           
        }, 
        dispatch
      ),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(DocumentAproval);