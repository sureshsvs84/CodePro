import React,{ Component,Fragment } from 'react';
//convert the component in stateless component
const customModal = (props) =>{
    const { modalData }=props;
    const { buttons,isOpen, title, modalClassName,message } = modalData;
    return (
        <Fragment>
        <div className={isOpen?"modal show customModal":"hide"}>
         <div id="confirmation_Modal" className={modalClassName}>
            <div className="modal-content">
                <h5 className="bold">{title}</h5>
                <p>{message}</p>
            </div>
            <div className="modal-footer">
            {
                buttons.length>0?buttons.map((value,key)=>(
                    <button key={key} className={value.className} onClick={value.onClickHandler}>{value.buttonName}</button>
                )):''
            }
            </div>
        </div>
        </div>
        {isOpen && <div className="customModalOverlay"></div> }
      </Fragment>
    );
};

export default customModal;