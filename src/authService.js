import { applicationConstants } from './constants/appConstants';

import store from './store/reduxStore';

import { loginActionTypes } from './constants/actionTypes';
import dateUtil from './utils/dateUtil';
class Auth {

    isAuthenticated() {
        const state = store.getState();
        const isAuthenticated = state.loginReducer.isAuthenticated;
        const isExpired = this.isAccessTokenExpired();

        if (isAuthenticated && !isExpired) {
            return true;
        }
        const isTokenInSession =
            localStorage.getItem(applicationConstants.Authentication.ACCESS_TOKEN) !==
                null ? true : false;

        return (isTokenInSession && !isExpired);
    }

    handleAuthentication(authResult) {
        if (authResult && authResult.accessToken && authResult.refreshToken) {
            //dispatch an action to save the updated tokens
            store.dispatch({
                type:loginActionTypes.TOKEN_STORAGE,
                data:authResult
            });
        //  store.dispatch('userInfo/set', responseData.result);
            this.setSession(authResult);
        }
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        // const accessTokenExpires = JSON.stringify((authResult.accessTokenExpires * 1000) + new Date().getTime());
        // const refreshTokenExpires = JSON.stringify((authResult.refreshTokenExpires * 1000) + new Date().getTime());   
        const accessTokenExpires = dateUtil.getLocalTime(authResult.accessTokenExpires);
        const refreshTokenExpires = dateUtil.getLocalTime(authResult.refreshTokenExpires);
        // const refreshTokenExpires=authResult.refreshTokenExpires * 1000;

        localStorage.setItem(applicationConstants.Authentication.ACCESS_TOKEN, authResult.accessToken);
        localStorage.setItem(applicationConstants.Authentication.REFRESH_TOKEN, authResult.refreshToken);
        localStorage.setItem(applicationConstants.Authentication.ACCESS_TOKEN_EXPIRES_AT,accessTokenExpires);
        localStorage.setItem(applicationConstants.Authentication.REFRESH_TOKEN_EXPIRES_AT, refreshTokenExpires);        
    }

    logout() {
        // Clear access  token and ID token from local storage
        localStorage.removeItem(applicationConstants.Authentication.ACCESS_TOKEN);
        localStorage.removeItem(applicationConstants.Authentication.ACCESS_TOKEN_EXPIRES_AT);
        localStorage.removeItem(applicationConstants.Authentication.REFRESH_TOKEN);
        localStorage.removeItem(applicationConstants.Authentication.REFRESH_TOKEN_EXPIRES_AT);
    }

    isAccessTokenExpired() {
        // Check whether the current time is past the
        // access token's  expiry time
        const accessTokenExpires = JSON.parse(localStorage.getItem(applicationConstants.Authentication.ACCESS_TOKEN_EXPIRES_AT));
        return new Date().getTime() > accessTokenExpires;
    }

    isRefreshTokenExpired(){
         // Check whether the current time is past the
        // access token's  expiry time
        const refreshTokenExpires = JSON.parse(localStorage.getItem(applicationConstants.Authentication.REFRESH_TOKEN_EXPIRES_AT));

        return new Date().getTime() > refreshTokenExpires;
        // return refreshTokenExpires+1>refreshTokenExpires;
    }

    getAccessToken() {
        const state = store.getState();
        let access_token = state.loginReducer.authData[applicationConstants.Authentication.ACCESS_TOKEN];
        if (!access_token) {
            access_token = localStorage.getItem(applicationConstants.Authentication.ACCESS_TOKEN);
        }
        if (!access_token) {
            return '';
        }
        return access_token;
    }

    getRefreshToken() {
        const state = store.getState();
        let refresh_token = state.loginReducer.authData[applicationConstants.Authentication.REFRESH_TOKEN];
        if (!refresh_token) {
            refresh_token = localStorage.getItem(applicationConstants.Authentication.REFRESH_TOKEN);
        }
        if (!refresh_token) {
            return '';
        }
        return refresh_token;
    }

    parseJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };

    getUserDetails(){
        const state = store.getState();
        const userDetails = state.loginReducer.userDetails;
        return userDetails;
    }

    redirectToLogin(){
        // alert("authentication failed");
        store.dispatch(loginActionTypes.AUTHENTICATE_LOGIN_FAILED);
        this.props.history.push('/');
    }

    handleUserData(userData){
        localStorage.setItem(applicationConstants.Authentication.USER_NAME, userData.unique_name);
        localStorage.setItem(applicationConstants.Authentication.DEFAULT_COMPANY_CODE, userData.ccode);
        localStorage.setItem(applicationConstants.Authentication.DISPLAY_NAME,userData.sub);
    }

}

const auth = new Auth();

export default auth;
