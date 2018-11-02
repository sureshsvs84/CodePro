import App from './App';
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import authService from '../authService';
import { handleLogOut,RefreshToken } from '../components/viewComponents/login/loginAction';
import { bindActionCreators } from 'redux';
import { DisplayModal,HideModal } from '../components/baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginReducer.isAuthenticated ?
            state.loginReducer.isAuthenticated :
            authService.isAuthenticated()
    };
}; 

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            handleLogOut,
            RefreshToken,
            DisplayModal,
            HideModal
        }, 
        dispatch
      ),
    };
  };

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
