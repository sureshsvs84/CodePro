import { companyActionTypes } from '../../constants/actionTypes';
const initialState = {
    companyOffices:[]
};

export const GeneralDetailReducer = (state = initialState, actions) => {
    const { type, data } = actions;
    switch (type) {
        case companyActionTypes.FETCH_COMPANY_OFFICES:    
            state = {
                ...state,
                companyOffices:data,
            };
            return state;
        default:
            return state;
    };
};
