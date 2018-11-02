import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {    
    render() {   
        const { title, children, isButton, buttonName ,buttons,isShowModal,modalClass,modalId,formId,onSubmit } = this.props;    
        return (
            <Fragment>
                <div  id={modalId} className={isShowModal ? 'modal modelShow '+ modalClass: 'modal'}>
                <form id={formId}  onSubmit={onSubmit}>
                <div className="modal-content">
                <div className="row">
                {title && <h6>{title}</h6>}
                    {children}
                    </div>
                </div>
                <div className="modal-footer">
                   {buttons.map((button,i)=>{
                       return( 
                        button.showbtn && <button  id={button.btnID || null} key={i} className={button.btnClass} onClick={button.action}>{button.name}</button> 
                       );                    
                   })}
                </div>
                </form>
                </div>                
                { isShowModal && <div className="modalOverlay"></div> }
            </Fragment>
        );
   }
}
export default Modal;
Modal.propTypes = {
    modalClass: PropTypes.string,
    buttons:PropTypes.array
};
Modal.defaultProps = {
    modalClass: '',
    buttons:[]   
    
}; 