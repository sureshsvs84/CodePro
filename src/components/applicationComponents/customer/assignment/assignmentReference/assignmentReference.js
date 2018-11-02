import React from 'react';
import ReactGrid from '../../../../baseComponents/reactAgGrid';

const assignmentReference = (props) => {
    return (
        <div className="customCard">
            <ReactGrid gridRowData={props.assignmentReference} gridColData={props.headerData.CustomerAssignmentHeader} onRef={props.onRef}/>
            <div className="right-align mr-3 mt-1">
                <a href="#assignmentReferenceType" onClick={props.clearAssignmentRef} className="btn-small modal-trigger">Add</a>
                <a href="#confirmation_Modal" onClick={props.deleteAssignmentRef} className="btn-small ml-2 modal-trigger">Delete</a></div>
        </div>
    );
};

export default assignmentReference;