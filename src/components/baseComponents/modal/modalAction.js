const actions = {
    showModalPopup: () => {
        return {
            type: 'SHOW_MODAL_POPUP'            
        };
    },
    hideModalPopup: () => {
        return {
            type: 'HIDE_MODAL_POPUP'            
        };
    },
};
export const showModalPopup =()=>(dispatch)=> {
    return dispatch(actions.showModalPopup());
};
export const hideModalPopup =()=>(dispatch)=> {
    return dispatch(actions.hideModalPopup());
};
