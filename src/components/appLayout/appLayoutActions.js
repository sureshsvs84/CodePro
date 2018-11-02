import { processApiRequest } from '../../services/api/defaultServiceApi';
import { appLayoutActionTypes } from '../../constants/actionTypes';
import { companyAPIConfig,masterData } from '../../apiConfig/apiConfig';
import MaterializeComponent from 'materialize-css';
import {
    ToggleAllCoordinator,
    Dashboardrefresh
} from '../viewComponents/dashboard/dahboardActions';

const actions = {
    FetchCompanyList: (payload) => {
        return {
            type: appLayoutActionTypes.FETCH_COMPANY_LIST,
            data: payload
        };
    },
    UpdateSelectedCompany: (payload) => {
        return {
            type: appLayoutActionTypes.UPADTE_SELECTED_COMPANY,
            data: payload
        };
    },
    AuthenticateUser: (payload) => {
        return {
            type: appLayoutActionTypes.AUTHENTICATE_USER,
            data: true
        };
    },
    logOut: (payload) => {
        return {
            type: appLayoutActionTypes.LOG_OUT_USER,
            data: payload
        };
    },
    FetchCurrency: (payload) => {
        return {
            type: appLayoutActionTypes.FETCH_CURRENCY,
            data: payload
        };
    },
    FetchDivisionName:(payload)=>{
        return{
            type: appLayoutActionTypes.FETCH_DIVISION_NAME,
            data: payload
        };
    },
    FetchPayrolls: (payload) => {
        return {
            type: appLayoutActionTypes.FETCH_PAYROLLS,
            data: payload
        };
    },
    FetchExportPrefixes: (payload) =>{
        return {
            type: appLayoutActionTypes.FETCH_EXPORT_PREFIXES,
            data: payload
        };
    }

};

export const FetchCompanyList =(requestData)=>(dispatch,getstate)=>{
    const url=companyAPIConfig.companyBaseURL+companyAPIConfig.companyDetails; 
    processApiRequest(url,{ method:'get' })
        .then(response=>{
            if(response.status===200){
                dispatch(actions.FetchCompanyList(response.data.result));
            }
            else{
                MaterializeComponent.toast({ html: 'Company API went wrong',classes:'dangerToast' });
            }
        }).catch(error=>{
            // alert("error",error);
            MaterializeComponent.toast({
                html: error+' Company API went wrong ',
                classes: 'dangerToast'
            });
        });
};

export const UpdateSelectedCompany =(selectedCompany)=>(dispatch,getstate)=>{
    const state = getstate();
    const data = {
        allCoOrdinator: state.dashboardReducer.allCoOrdinator,
        futureDays:state.dashboardReducer.futureDays
    };
    dispatch(actions.UpdateSelectedCompany(selectedCompany));
    dispatch(ToggleAllCoordinator(data));

};

export const loginStatus =()=>(dispatch,getstate)=>{
        dispatch(actions.AuthenticateUser());
};
export const logOut =(data)=>(dispatch,getstate)=>{
    dispatch(actions.logOut(data));
};

export const FetchCurrency = (data) => (dispatch,getstate) => {
    // TODO: Change the api config from company to master
    const url=companyAPIConfig.companyBaseURL+companyAPIConfig.currencies; 
    processApiRequest(url,{ method:'get' })
        .then(response=>{
            if(response.status===200){
                dispatch(actions.FetchCurrency(response.data.result));
            }
            else{
                MaterializeComponent.toast({ html: 'Currency API went wrong',classes:'dangerToast' });
            }
        }).catch(error=>{
            // alert("error",error);
            MaterializeComponent.toast({
                html: error+' Company API went wrong ',
                classes: 'dangerToast'
            });
        });
};

/**
 * Division master data action
 */

export const FetchDivisionName = (data) => (dispatch,getstate) =>{
    const url= masterData.baseUrl+masterData.divisionName;

    processApiRequest(url,{ method:'get' })
        .then(response=>{
            if(response.status===200){
                dispatch(actions.FetchDivisionName(response.data.result));
            }
            else{
                MaterializeComponent.toast({ html: 'Division Name API went wrong',classes:'dangerToast' });
            }
        }).catch(error=>{
            // alert("error",error);
            MaterializeComponent.toast({
                html: error+' Division API went wrong ',
                classes: 'dangerToast'
            });
        });
};
export const FetchPayrolls = (data) => (dispatch,getstate) => {
    const url=companyAPIConfig.companyBaseURL+masterData.payrolls; 
    processApiRequest(url,{ method:'get' })
        .then(response=>{
            if(response.status===200){
                dispatch(actions.FetchPayrolls(response.data.result));
            }
            else{
                MaterializeComponent.toast({ html: 'Payroll API went wrong',classes:'dangerToast' });
            }
        }).catch(error=>{
            // alert("error",error);
            MaterializeComponent.toast({
                html: error+' Payroll API went wrong ',
                classes: 'dangerToast'
            });
        });
};

/**
 * Export Prefix Master Data Action
 */
export const FetchExportPrefixes = (data) =>(dispatch,getstate)=>{
    const url= masterData.baseUrl+masterData.exportPrefixes;

    processApiRequest(url,{ method:'get' })
        .then(response=>{
            if(response.status===200){
                dispatch(actions.FetchExportPrefixes(response.data.result));
            }
            else{
                MaterializeComponent.toast({ html: 'Export Prefix API went wrong',classes:'dangerToast' });
            }
        }).catch(error=>{
            // alert("error",error);
            MaterializeComponent.toast({
                html: error+' Export Prefix went wrong ',
                classes: 'dangerToast'
            });
        });
};