import axios from 'axios';
import { configuration } from '../../appConfig';
import authService from '../../authService';
import { applicationConstants } from '../../constants/appConstants';
import { loginApiConfig } from '../../apiConfig/apiConfig';

// `baseURL` will be prepended to `url` unless `url` is absolute.
axios.defaults.baseURL = configuration.apiBaseUrl;

axios.interceptors.request.use(
  config => {
    const accessToken = authService.getAccessToken();
    if(accessToken){
      config.headers.Authorization  = `Bearer ${ accessToken }`;
    }
    config.headers.Pragma ='no-cache';
    config.headers.client_code  = applicationConstants.client_code;
    config.headers.client_aud_code  = applicationConstants.client_aud_code;
    return config;
  },
  error => Promise.reject(error)
);

export const processApiRequest = (URL,requestOptions) =>{    
    return axios(URL,requestOptions)
            .then(request=>request)
            .catch(error=>error);
};

/**
 * @param {*} url 
 * @param {*} config 
 */
export const TokenRenew = async (url, config) => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  delete axios.defaults.headers.common.Authorization;
  const response = await axios.post(url, config.data);
  return response;
};

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      //get refresh token
      const refreshToken = authService.getRefreshToken();
      const userData = authService.getUserDetails();
        const data = {
          "Token": refreshToken,
          "Username":userData.unique_name
      };
      //make refresh token request
      return TokenRenew(loginApiConfig.refreshToken, { data:data })
        .then((responseData) => {
          authService.handleAuthentication(responseData.data.result);
          axios.defaults.headers.common['Authorization'] =`Bearer ${ responseData.data.result.accessToken }`;
          originalRequest.headers['Authorization'] = `Bearer ${ responseData.data.result.accessToken }`;
          //retry failed request
          return axios(originalRequest);
        }).catch(function (error) {
          // auth service redirect to login page by showing appropriate message
          authService.redirectToLogin();
        });
    }
  
    return Promise.reject(error);
  });