import React from 'react';
import SecondReactGrid from '../../../../baseComponents/reactAgGridTwo';

const accountReference = (props) => {
    return (
        <div className="customCard">
            <SecondReactGrid gridRowData={props.accountReference} gridColData={props.headerData.CustomerAccountRefrencesHeader} onRef={props.onRef}/>
            <div className="right-align mr-3 mt-1">
                <a href="#accountReference" onClick={props.clearAccountRef} className="btn-small modal-trigger">Add</a>
                <a href="#confirmation_Modal" onClick={props.deleteAccountRef} className="btn-small ml-2 modal-trigger">Delete</a>
            </div>
        </div>
    );
};

export default accountReference;