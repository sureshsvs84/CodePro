import ContractsNearExpiry from './contractsNearExpiry';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchContractsNearExpiry } from '../../../viewComponents/dashboard/dahboardActions';
const mapStateToProps = (state) => {
    return {
        contractsNearExpiry:state.dashboardReducer.contractsNearExpiry,
        selectedCompany:state.appLayoutReducer.selectedCompany
    };
}; 
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            FetchContractsNearExpiry
        }, 
        dispatch
      ),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(ContractsNearExpiry);