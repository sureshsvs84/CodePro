const initialState = {    
    showModal: false
};
export const ModalReducer = (state = initialState, action) => {
    const { type } = action;
   
    switch (type) {
        case 'SHOW_MODAL_POPUP':
                state = {
                    showModal:!state.showModal
                };
                return state;
        case 'HIDE_MODAL_POPUP':
                state = {
                    showModal:!state.showModal
                };
                return state;
            
        default:
            return state;
    }
};