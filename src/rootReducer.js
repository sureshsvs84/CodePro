import { combineReducers } from 'redux';
import { dashboardReducer } from './components/viewComponents/dashboard/dashboardReducer';
import { appLayoutReducer } from './components/appLayout/appLayoutReducers';
import { CompanyReducer } from './components/viewComponents/company/companyReducer';
import { CustomerReducer } from './components/viewComponents/customer/customerReducer';
import { ContractReducer } from './components/viewComponents/contracts/contractReducer';
import { CustomModalReducer } from './components/baseComponents/customModal/customModalReducer';
import { ModalReducer } from './components/baseComponents/modal/modalReducer';
import { loginReducer } from './components/viewComponents/login/loginReducer';
import { headerReducer } from './components/header/headerReducers';
// import { RateScheduleReducer } from './reducers/contracts/rateScheduleReducer';
import RootContractReducer from './combineReducers/rootContractReducer';
import { DocumentReducer } from './reducers/contracts/documentReducer';
import { ProjectReducer } from './reducers/contracts/projectReducer';
import { ContractNoteReducer } from './reducers/contracts/contractNoteReducer';
import { ContractInvoicingDefaults } from './reducers/contracts/invoicingDefaultsReducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Need to get the combined reducer
 * our entire applications state (store) is just whatever gets returned from all your reducers
 * */
export default combineReducers({
    appLayoutReducer,
    dashboardReducer,
    CompanyReducer,
    CustomerReducer,
    ContractReducer,
    CustomModalReducer,
    loginReducer,
    headerReducer,
    ModalReducer,
    // RateScheduleReducer
    RootContractReducer,
    DocumentReducer,
    ProjectReducer,
    ContractNoteReducer,
    ContractInvoicingDefaults,
});