import { contractActionTypes } from '../../constants/actionTypes';
import { getlocalizeData } from '../../utils/commonUtils';
import _ from 'lodash';

const initialState = {
    ContractProjects:[]
};
export const ProjectReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case contractActionTypes.FETCH_CONTRACT_DOCUMENTS:
        state = {
            ...state,
            ContractProjects: data
        };
        return state;
        default:
        return state;
    }
};