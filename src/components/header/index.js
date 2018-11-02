import AppHeader from './header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '../appLayout/appLayoutActions';
import { handleLogOut } from '../viewComponents/login/loginAction';
import { AboutShowModal, AboutHideModal } from './headerAction';
import { ClearDashboardReducer } from '../viewComponents/dashboard/dahboardActions';
import { bindActionCreators } from 'redux';
import { applicationConstants } from '../../constants/appConstants';

const mapStateToProps = (state) => {
    return {
        selectedCompany:state.appLayoutReducer.selectedCompany,
        loginUser:localStorage.getItem(applicationConstants.Authentication.DISPLAY_NAME),
        showModal:state.headerReducer.showModal
    };
}; 
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            logOut,
            handleLogOut,
            ClearDashboardReducer,
            AboutShowModal,
            AboutHideModal
        }, 
        dispatch
      ),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AppHeader));