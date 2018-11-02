import { contractActionTypes } from '../../constants/actionTypes';
const initialState = {
    contractDetail:{},
    interactionMode:"#create"
};

export const ContractReducer = (state = initialState, actions) => {
    const { type, data } = actions;
    switch (type) {
        case contractActionTypes.commonActionTypes.UPDATE_INTERACTION_MODE:    
            state = {
                ...state,
                interactionMode:data,
            };
            return state;
        default:
            return state;
    };
};
