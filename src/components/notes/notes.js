import React, { Fragment } from 'react';
import ReactGrid from '../baseComponents/reactAgGrid';
// import CustomModal from '../baseComponents/customModal';
const commonNotes = (props) => {
    return (
        <Fragment>
            {/* <CustomModal modalData={props.modelData}/>  */}
            <div className="customCard">
                <div id="addNotes" className="modal">
                    <form id="Notes" onSubmit={props.notesSubmitHandler}>
                        <div className="modal-content">
                            <div className="row">
                                <div className="col s12">
                                    <label htmlFor="Notes" className="customLabel">Notes:</label>
                                    <textarea rows="5" id="Note" maxLength="4000" name="note" onChange={props.handlerChange} className="browser-default" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="cancelNotesSubmit" onClick={props.clearData} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                                {!props.showButton ?
                                    <button type="submit" className="btn-small">SUBMIT</button> :
                                    <button type="submit" className="btn-small">UPDATE</button>}
                            </div>
                        </div>
                    </form>
                </div>
                <p className="pl-3 pr-3"><b>Notes</b></p>
                <div className="customCard">
                    <ReactGrid gridRowData={props.NoteData}
                        gridColData={props.headerData}
                        onRef={ref => { props.onRef; }} />
                </div>
                <div className="right-align mr-3 mt-1">
                    <a onClick={props.clearData} href="#addNotes" className="btn-small modal-trigger">Add</a>
                    {/* <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={props.notesDeleteClickHandler}>Delete</a> */}
                </div>
            </div>
        </Fragment>
    );
};
export default commonNotes;