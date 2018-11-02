import { modalActionTypes } from '../../../constants/actionTypes';

const initialState = {
    title: '',
    message: '',
    type: '',
    modalClassName:'',
    isOpen:false,
    buttons: [],
};

export const CustomModalReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case modalActionTypes.DISPLAY_MODAL:
            state={
                ...state,
                title:data.title,
                message:data.message,
                type:data.type,
                buttons:data.buttons,
                modalClassName:data.modalClassName,
                isOpen:true
            };
            return state;
        case modalActionTypes.HIDE_MODAL:
            state={
                ...state,
                isOpen:false
            };
            return state;
        case modalActionTypes.TOGGLE_MODAL_STATE:
            state={
                ...state,
                isOpen:data
            };
            return state;
        default:
            return state;
    }
};