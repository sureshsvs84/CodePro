import VisitStatus from './visitStatus';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchVisitStatus } from '../../../viewComponents/dashboard/dahboardActions';
const mapStateToProps = (state) => {
    return {
        visitStatusGridData:state.dashboardReducer.visitStatusAprovalGrid,
        selectedCompany:state.appLayoutReducer.selectedCompany
    };
}; 
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            FetchVisitStatus
        }, 
        dispatch
      ),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(VisitStatus);