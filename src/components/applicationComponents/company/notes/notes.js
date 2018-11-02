import React, { Component,Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { HeaderData } from './headerData.js';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import dateUtil from '../../../../utils/dateUtil';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
//import CompanyNotes from '../../../notes/notes';
import CustomModal from '../../../baseComponents/customModal';
class Notes extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.state={
            isOpen:false
        };
        this.confirmationModalData = {
                title: "",
                message:"",
                type: "",
                modalClassName:"",
                buttons: []
        };
    }
    componentDidMount() {
        const tab = document.querySelectorAll('.tabs');
        const tabInstances = MaterializeComponent.Tabs.init(tab);
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
        //this.props.actions.FetchCompanyNotes();
    }
    notesSubmitHandler = (e) => {
        
        e.preventDefault();
        let date = new Date();
        date = dateUtil.postDateFormat(date, '-');
        // if (this.props.showButton === true) {
        //     if (this.props.editRecord.recordStatus !== "N") {
        //         this.updatedData["recordStatus"] = "M";
        //     }
        //     this.updatedData["createdOn"] = date;
        //     this.updatedData["modifiedBy"] = this.props.loggedInUser;
        //     this.props.actions.UpdateCompanyNotesDetails(this.updatedData);
        //     this.updatedData = {};
        //     this.clearData();
        //     document.getElementById("Note").value = "";
        //     document.getElementById("cancelNotesSubmit").click();
        // }
        if (this.props.showButton === false) {
            this.updatedData["recordStatus"] = "N";
            this.updatedData["createdBy"] = this.props.loggedInUser;
            this.updatedData["modifiedBy"] = this.props.loggedInUser;
            this.updatedData["createdOn"] = date;
            this.updatedData["companyNoteId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
            this.props.actions.AddCompanyNotesDetails(this.updatedData);
            this.updatedData = {};
            this.clearData();
            document.getElementById("Note").value = "";
            document.getElementById("cancelNotesSubmit").click();
        }
    }
    clearData = () => {
        document.getElementById("Notes").reset();
        document.getElementById("Note").value = "";
        this.props.actions.ShowButtonHandler();
    }
    // notesDeleteClickHandler = () => {
    //     const selectedRecords = this.child.getSelectedRows();
    //     if (selectedRecords.length > 0)
    //     {
    //         const confirmationObject = {
    //             title: modalTitleConstant.CONFIRMATION,
    //             message: modalMessageConstant.NOTES_DELETE_MESSAGE,
    //             type: "confirm",
    //             modalClassName: "warningToast",
    //             buttons: [ {
    //                 buttonName: "Yes",
    //                 onClickHandler: this.deleteSelected,
    //                 className: "modal-close m-1 btn-small"
    //             },
    //             {
    //                 buttonName: "No",
    //                 onClickHandler: this.confirmationRejectHandler,
    //                 className: "modal-close m-1 btn-small"
    //             } ]
    //         } ;          
    //         this.props.actions.DisplayModal(confirmationObject);
    //     }
    //     else {
    //         MaterializeComponent.toast({
    //             html: 'Select Any one Row to delete',
    //             classes: 'warningToast'
    //         });
    //     }
    // }
    // deleteSelected = () => {
    //     const selectedRecords = this.child.getSelectedRows();
    //     this.child.removeSelectedRows(selectedRecords);
    //     this.props.actions.DeleteCompanyNotesDetails(selectedRecords);        
    //     this.props.actions.HideModal();
    // }
    // confirmationRejectHandler = () =>{        
    //     this.props.actions.HideModal();
    // }
    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }
    render() {
        
        const { showButton, 
            //editRecord, 
            companyNotesData } = this.props;
        let companyNoteDatails = [];
        if (companyNotesData) {
            companyNoteDatails = companyNotesData.filter(note => note.recordStatus !== "D");
        }
        const modelData = { ...this.confirmationModalData,isOpen:this.state.isOpen };
        //this.props.editRecord.notes && (document.getElementById("Note").value = editRecord.notes);      
        
        return (
            <Fragment>
                 <CustomModal modalData={modelData}/> 
                <div className="customCard">
                    <div id="addNotes" className="modal">
                        <form id="Notes" onSubmit={this.notesSubmitHandler}>
                            <div className="modal-content">
                                <div className="row">
                                    <div className="col s12">
                                        <label htmlFor="Notes" className="customLabel">Notes:</label>
                                        <textarea rows="5" id="Note" maxLength="4000" name="notes" onChange={this.handlerChange} className="browser-default" required />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" id="cancelNotesSubmit" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                                    {!showButton ?
                                        <button type="submit" className="btn-small">SUBMIT</button> :
                                        <button type="submit" className="btn-small">SUBMIT</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <p className="pl-3 pr-3"><b> Notes</b></p>
                    <div className="customCard">
                        <ReactGrid gridRowData={companyNoteDatails} gridColData={HeaderData} onRef={ref => { this.child = ref; }}/>
                    </div>
                    <div className="right-align mr-3 mt-1">
                        <a onClick={this.clearData} href="#addNotes" className="btn-small modal-trigger">Add</a>
                        {/* <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.notesDeleteClickHandler}>Delete</a> */}
                    </div>
                </div>
            </Fragment>
            
        );
    }
}

export default Notes;