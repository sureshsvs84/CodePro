import React, { Component } from 'react';
import AppLayout from '../../src/components/appLayout/appLayout';
import AppLogin from '../components/viewComponents/login';
import '../assets/externalLibrary/material-design-iconic-font/css/material-design-iconic-font.min.css';
import { AppMainRoutes,AppDashBoardRoutes } from '../routes/routesConfig'; 
import '../assets/css/index.css';
import authService from '../authService';

import { modalTitleConstant, modalMessageConstant } from '../constants/modalConstants';
class App extends Component {
  constructor(props) {
    super(props);
    if (window.performance) {
      if(authService.isAuthenticated()){  // D-55
        const { pathname = "" } = this.props.location;
        if (performance.navigation.type == 1 && pathname.indexOf(AppMainRoutes.dashboard) === -1) {
          this.props.history.push(AppDashBoardRoutes.assignments);
        } 
      }
      else{ // D-55
        this.props.history.push(AppMainRoutes.login);
      }
    }

    //On refresh give the confirmation 
    //D-73
    window.onbeforeunload=()=>{
      if(this.props.history.location.pathname!=AppMainRoutes.login){
        return "Do you want to leave the page?";
      }
    };

    this.props.history.listen((location, action) => {

      //check if refresh token expires redirect to login page
      if(authService.isRefreshTokenExpired()){
        
        // this.props.actions.handleLogOut(); // Commented for D-55

         //To avoid looping of check, implemented if condition to check the route is in login.
        if(this.props.history.location.pathname!=AppMainRoutes.login){  // D-55
          this.props.actions.handleLogOut().then(res=>{
            this.props.history.push(AppMainRoutes.login);
          });
        }
      }

      //check if access token expires make a call to renew access token
      if(authService.isAccessTokenExpired()){
        this.props.actions.RefreshToken();
      }
        // console.log(action, location.pathname, location.state) 
    });
  }

  confirmRedirection = () => {

    const confirmationObject = {
      title: modalTitleConstant.CONFIRMATION,
      message: modalMessageConstant.REFRESH_MESSAGE,
      modalClassName: "warningToast",
      type: "confirm",
      buttons: [ {
        buttonName: "Yes",
        onClickHandler: this.cancelRefresh,
        className: "modal-close m-1 btn-small"
      },
      {
        buttonName: "No",
        onClickHandler: this.continueRefresh,
        className: "modal-close m-1 btn-small"
      } ]
    };
    this.props.actions.DisplayModal(confirmationObject);
  }

  cancelRefresh = () => {
    this.props.actions.HideModal();
  }

  continueRefresh = () => {
    this.props.history.push(AppDashBoardRoutes.assignments);
    this.props.actions.HideModal();
  }
  render() {
    const loginStatus =this.props.loginStatus; 
    return (    
      loginStatus ? <AppLayout />:<AppLogin />    
    );
  }
}

export default App;
