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
        if (accessToken) {
            config.headers.Authorization = `Bearer $ {accessToken}`;
        }
        config.headers.Pragma ='no-cache';
        config.headers.client_code = applicationConstants.client_code;
        config.headers.client_aud_code = applicationConstants.client_aud_code;
        return config;
    },
    error => Promise.reject(error)
);

/**
 * Async - declares an asynchronous function (async function someName(){...}).

   - Automatically transforms a regular function into a Promise.
   - When called async functions resolve with whatever is returned in their body.
   - Async functions enable the use of await.

Await - pauses the execution of async functions. (var result = await someAsyncCall();).

   - When placed in front of a Promise call, await forces the rest of the code to wait until 
    that Promise finishes and returns a result.
   - Await works only with Promises, it does not work with callbacks.
   - Await can only be used inside async functions.
*/

/**
 * @param {*} url 
 * @param {*} config 
 */
export const ValidateLogin = async (url, config) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    delete axios.defaults.headers.common.Authorization;
    const response = await axios.post(url, config.data);
    return response;
};

/**
 * @param {*} url 
 * @param {*} config 
 */
export const PostData = async (url, config) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    const response = await axios.post(url, config.data);
    if (response && response.status === 200 && response.statusText === 'OK') {
        return response.data;
    }
    return response;
};

/**
 * @param {*} url 
 * @param {*} config 
 */
export const FetchData = async (url, config) => {
    const response = await axios.get(url, {
        params: config.data,
    });
    if (response && response.status === 200 && response.statusText === 'OK') {
        return response.data;
    }
    return response;
};

/**
 * @param {*} url 
 * @param {*} config 
 */
export const DeleteData = async (url, config) => {
    const response = await axios.delete('url', { params: config.data });
    if (response.status === 200 && response.statusText === 'OK') {
        return response.data;
    }
    return response;
};

/**
 * @param {*} url 
 * @param {*} config 
 */
export const CreateData = async (url, config) => {
    const response = await axios.put(url, config);
    if (response.status === 200 && response.statusText === 'OK') {
        return response.data;
    }
    return response;
};

const restFulApi = {
    CreateData,
    FetchData,
    PostData,
    DeleteData
};

//if required to perform all the curd operation import this, otherwise import individual 
export default restFulApi;

//generic method to make any type of Http(GET,POST,PUT,DELETE) call
export const GenericAsyncClient = async (url, config) => {
    const response = await axios(url, config);
    if (response.status === 200 && response.statusText === 'OK') {
        return response.data;
    }
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
            "Username": userData.unique_name
        };
        //make refresh token request
        return ValidateLogin(loginApiConfig.refreshToken, { data: data })
            .then((responseData) => {
                authService.handleAuthentication(responseData.data.result);
                axios.defaults.headers.common['Authorization'] = `Bearer ${ responseData.data.result.accessToken }`;
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