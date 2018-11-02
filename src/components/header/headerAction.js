const actions = {
    AboutShowModal: () => {
        return {
            type: 'ABOUT_SHOW_MODAL'            
        };
    },
    AboutHideModal: () => {
        return {
            type: 'ABOUT_HIDE_MODAL'            
        };
    },
};
export const AboutShowModal =()=>(dispatch)=> {
    return dispatch(actions.AboutShowModal());
};
export const AboutHideModal =()=>(dispatch)=> {
    return dispatch(actions.AboutHideModal());
};
