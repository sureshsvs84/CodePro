import { contractActionTypes } from '../../constants/actionTypes';
const initialState = {
    isRateScheduleEdit:false,
    isChargeTypeEdit:false,
    isRateScheduleOpen:false,
    isChargeTypeOpen:false,
    rateSchedule:[],
    chargeTypes:[],
    rateScheduleEditData:{},
    chargeTypeEditData:{},
};

export const RateScheduleReducer = (state = initialState, actions) => {
    const { type, data } = actions;
    switch (type) {
        case contractActionTypes.commonActionTypes.SET_CONTRACT_DATA:
            state={
                ...state,
                rateSchedule:data.rateSchedule
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.IS_RATESCHEDULE_EDIT:
            state = {
                ...state,
                isRateScheduleEdit:data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.IS_CHARGETYPE_EDIT:
            state={
                ...state,
                isChargeTypeEdit: data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.IS_RATESCHEDULE_OPEN:
            if(data === false){
                state={
                    ...state,
                    rateScheduleEditData:{}
                };
            }
            state={
                ...state,
                isRateScheduleOpen: data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.IS_CHARGETYPE_OPEN:
            if(data === false){
                state={
                    ...state,
                    chargeTypeEditData:{}
                };
            }
            state={
                ...state,
                isChargeTypeOpen: data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.FETCH_RATE_SCHEDULE:
            state={
                ...state,
                rateSchedule: data
            };  
            return state;
        case contractActionTypes.rateScheduleActionTypes.ADD_RATE_SCHEDULE:
            state={
                ...state,
                rateSchedule:[ ...state.rateSchedule,data ]
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.EDIT_RATE_SCHEDULE:
            state={
                ...state,
                rateScheduleEditData:data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.UPDATE_RATE_SCHEDULE:
            state={
                ...state,
                rateSchedule:data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.DELETE_RATE_SCHEDULE:
            return state;
        case contractActionTypes.rateScheduleActionTypes.ADD_CHARGE_TYPE:
            state = {
                ...state,
                chargeTypes:[ ...state.chargeTypes,data ]
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.EDIT_CHARGE_TYPE:
            state = {
                ...state,
                chargeTypeEditData:data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.UPDATE_CHARGE_TYPE:
            state = {
                ...state,
                chargeTypes:data
            };
            return state;
        case contractActionTypes.rateScheduleActionTypes.DELETE_CHARGE_TYPE:
            return state;
        default:
            return state;
    }
};