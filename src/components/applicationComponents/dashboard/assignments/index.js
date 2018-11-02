import Assignments from './assignments';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchActiveAssignments } from '../../../viewComponents/dashboard/dahboardActions';
const mapStateToProps = (state) => {
    return {
        assignmentGridData:state.dashboardReducer.assignmentGridData,
        selectedCompany:state.appLayoutReducer.selectedCompany
    };
}; 
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            FetchActiveAssignments
        }, 
        dispatch
      ),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Assignments);