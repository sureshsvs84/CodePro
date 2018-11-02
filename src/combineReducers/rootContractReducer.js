import { combineReducers } from 'redux';
import { 
    RateScheduleReducer
 } from '../reducers/contracts/rateScheduleReducer';
 import {
    GeneralDetailReducer
 } from '../reducers/contracts/generalDetailsReducer';
 import {
    ContractReducer
 } from '../reducers/contracts/contractReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Need to get the combined reducer
 * our entire applications state (store) is just whatever gets returned from all your reducers
 * */
export default combineReducers({
    RateScheduleReducer,
    ContractReducer,
    GeneralDetailReducer
});