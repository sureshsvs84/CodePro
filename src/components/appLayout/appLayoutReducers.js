import { appLayoutActionTypes } from '../../constants/actionTypes';
import { configuration } from '../../appConfig';
import { applicationConstants } from '../../constants/appConstants';

const initialState ={
    companyList: [],
    selectedCompany:localStorage.getItem(applicationConstants.Authentication.DEFAULT_COMPANY_CODE),
    loginStatus:false,    
    loading:true,
    loginUser:localStorage.getItem(applicationConstants.Authentication.DISPLAY_NAME),
    loginPassWord:configuration.password,
    currency:[],
    divisionName:[],
    payrolls:[],
    exportPrefixes:[]
};

export const appLayoutReducer = (state = initialState, actions) =>{
    const { type, data } = actions;
    switch (type) {
        case appLayoutActionTypes.FETCH_COMPANY_LIST:
            state = {
                 ...state,
                 companyList: data  
            };
            return state;

            case appLayoutActionTypes.UPADTE_SELECTED_COMPANY:
            state = {
                 ...state,
                 selectedCompany: data  
            };
            return state;

            case appLayoutActionTypes.AUTHENTICATE_USER:
            state = {
                 ...state,
                 loginStatus: data  
            };
            return state;

            case appLayoutActionTypes.LOG_OUT_USER:
            state = {
                 ...state,
                 loginStatus: data  
            };
            return state;
            case appLayoutActionTypes.AUTHENTICATE_LOGIN_SUCCESS:
                state = {
                    ...state,
                    selectedCompany:data.ccode,
                    loginUser:data.sub,
                    loginStatus: true  
            };
            return state;
            case appLayoutActionTypes.FETCH_CURRENCY:
                state = {
                    ...state,
                    currency:data
                };
            return state;
            case appLayoutActionTypes.FETCH_DIVISION_NAME:
                state = {
                    ...state,
                    divisionName:data
                };
            case appLayoutActionTypes.FETCH_PAYROLLS:
                state = {
                    ...state,
                    payrolls:data
                };
            return state;
            case appLayoutActionTypes.FETCH_EXPORT_PREFIXES:
                state = {
                    ...state,
                    exportPrefixes:data
                };
        default:
            return state;   
    }

};