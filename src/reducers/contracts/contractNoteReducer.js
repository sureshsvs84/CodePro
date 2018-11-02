import { contractActionTypes } from '../../constants/actionTypes';
import _ from 'lodash';
const initialState = {
    ContractNotes:[],
    showbutton:false,
    isbtnDisable:true,
    selectedContractNumber:null
};
export const ContractNoteReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case contractActionTypes.FETCH_CONTRACT_NOTES:
        
            state = {
                ...state,
                ContractNotes:data,
            };
            return state;
        case contractActionTypes.SELECTED_CONTRACT_NUMBER:
        state = {
            ...state,
            selectedContractNumber: data,
            isbtnDisable:true,
        };
        return state;
        case contractActionTypes.ADD_CONTRACT_NOTE:  //Notes Add
            
            if (state.ContractNotes == null) {
                state = {
                    ...state,
                    ContractNotes: [],
                    isbtnDisable:false
                };
            }
            state = {
                ...state,
                ContractNotes: [ ...state.ContractNotes, data ],
                isbtnDisable:false,
            };
            return state;
        default:return state;
    }
};