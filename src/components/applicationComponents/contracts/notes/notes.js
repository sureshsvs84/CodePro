import React, { Component, 
    //Fragment
 } from 'react';
import MaterializeComponent from 'materialize-css';
import { HeaderData } from './headerData.js';
import dateUtil from '../../../../utils/dateUtil';
//import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import ContractNotes from '../../../notes/notes';
//import CustomModal from '../../../baseComponents/customModal';
class Notes extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.state = {
            isOpen: false
        };
        this.confirmationModalData = {
            title: "",
            message: "",
            type: "",
            modalClassName: "",
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
        this.props.actions.FetchContractNotes();
        //this.props.actions.GetSelectedContractNumber();
    }
    notesSubmitHandler = (e) => {
        
        e.preventDefault();
        let date = new Date();
        date = dateUtil.postDateFormat(date, '-');
            this.updatedData["recordStatus"] = "N";
            this.updatedData["createdBy"] = this.props.loggedInUser;
            this.updatedData["modifiedBy"] = this.props.loggedInUser;
            this.updatedData["createdOn"] = date;
            this.updatedData["notes"]=document.getElementById("Note").value;
            this.updatedData["contractNoteId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
            this.props.actions.AddContractNotesDetails(this.updatedData);
            this.updatedData = {};
            this.clearData();
            document.getElementById("Note").value = "";
            document.getElementById("cancelNotesSubmit").click();
    }
    clearData = () => {
        document.getElementById("Notes").reset();
        document.getElementById("Note").value = "";
        this.props.actions.ShowButtonHandler();
    }
    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }
    render() {
        
        const {  ContractsNotesData } = this.props;
        return (
            <ContractNotes NoteData={ContractsNotesData}
            headerData={HeaderData}
            Id="addNotes" // Id of the popup div
            clearData={this.clearData}
            showButton={this.showButton}
            notesSubmitHandler={this.notesSubmitHandler}
            modelData={this.modelData}
            onRef={ref => { this.child = ref; }} />
        );
    }
}

export default Notes;