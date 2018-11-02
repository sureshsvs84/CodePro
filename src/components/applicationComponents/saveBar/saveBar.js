import React,{ Fragment } from 'react';

const saveBar = (props) => {
    return (
        <Fragment>
        <div className="customCard row">
            <div className="col s2 left-align pl-0 pt-1">
                <strong className="bold">{props.currentMenu}: </strong> <span>{props.currentSubMenu}</span>
            </div>
            <div className="col s5 pt-1">
                <strong className="bold">{props.codeLabel}: </strong> <span>{props.codeValue}</span>
            </div>
            <div className="col s5 right-align mb-0 pr-0">
                <button className="btn-small mr-2 ml-2" onClick={props.saveClick} disabled={props.isbtnDisable}>Save</button>
                <button className="btn-small mr-0 ml-2 modal-trigger" onClick={props.cancelClick} disabled={props.isbtnDisable}>Cancel</button>
            </div>
        </div>
        </Fragment>
    );
};

export default saveBar;