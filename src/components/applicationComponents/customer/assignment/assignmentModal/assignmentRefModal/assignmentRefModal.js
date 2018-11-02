import React from 'react';

const assignmentRefModal = (props) => {
    return (
        <div id="assignmentReferenceType" className="modal">
            <form onSubmit={props.formSubmit} id="addAssignmentReferenceType" className="col s12">
                <div className="modal-content">
                    <h6>Add Assignment Reference Type</h6>
                    <div className="row">
                        <div className="col s6">
                            <label htmlFor="assignmentReferenceType" className="customLabel">Assignment Reference Type:</label>
                            <select id="assignmentReferenceType" name="assignmentRefType" className="browser-default" onChange={props.selectChange}>
                                <option value="">Select Assignment Reference</option>
                                {props.assignmentRefTypes.map((result) => {
                                    if (result.name === props.editedAssignmentRef.assignmentRefType) {
                                        return <option value={result.name} selected>{result.name}</option>;
                                    }
                                    else {
                                        return <option value={result.name}>{result.name}</option>;
                                    }
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" id="cancelAssignmentReference" onClick={props.clearAssignmentRef} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                    {!props.showButton ?
                        <button type="submit"
                            className="btn-small">
                            SUBMIT
                    </button>
                        :
                        <button type="submit"
                            className="btn-small">
                            SUBMIT
                    </button>
                    }
                </div>
            </form>
        </div>
    );
};

export default assignmentRefModal;