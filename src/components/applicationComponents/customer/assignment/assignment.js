import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';

import HeaderData from './headerData.json';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import SecondReactGrid from '../../../baseComponents/reactAgGridTwo';
import AssignmentRefModal from './assignmentModal/assignmentRefModal';
import AccountRefModal from './assignmentModal/accountRefModal';
import AccountReference from './accountReference';
import AssignmentReference from './assignmentReference';

import { modalTitleConstant, modalMessageConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';

class Assignment extends Component {

    constructor(props) {
        super(props);
        this.updatedData = {};
        this.selectedAssignmentReferenceType = '';
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
        this.props.actions.FetchAssignmentRefTypes();

        const tab = document.querySelectorAll('.tabs');
        const tabInstances = MaterializeComponent.Tabs.init(tab);
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);

        const datePicker = document.querySelectorAll('.datepicker');
        const datePickerInstances = MaterializeComponent.Datepicker.init(datePicker);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
    }

    inputChangeHandler = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }

    selectChangeHandler = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }

    clearAssignmentReference = () => {
        document.getElementById("addAssignmentReferenceType").reset();
        this.props.actions.ShowButtonHandler();
    }

    clearAccountReference = () => {
        document.getElementById("addAccountReference").reset();
        this.props.actions.ShowButtonHandler();
    }

    confirmationRejectHandler = () => {
        // this.setState({ isOpen: false })
        this.props.actions.HideModal();
    }

    deleteAssignmentReference = () => {
        const selectedData = this.child.getSelectedRows(); 

        if (selectedData.length > 0) {
            this.child.removeSelectedRows(selectedData);
            this.props.actions.DeleteAssignmentReference(selectedData);
            //this.setState({isOpen:false})
            this.props.actions.HideModal();
        }  
    }

    assignmentReferenceDeleteHandler = () => {
        const selectedData = this.child.getSelectedRows(); 
        if (selectedData.length === 0) {
            MaterializeComponent.toast({
                html: 'Select Any one Assignment Reference to Delete',
                classes: 'warningToast'
            });
        }
        else {
            const confirmationObject = {
                title: modalTitleConstant.ASSIGNMENT_REFERENCE_DELETE_TITLE,
                message: modalMessageConstant.ASSIGNMENT_REFERENCE_DELETE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteAssignmentReference,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };
            // this.confirmationModalData = confirmationObject;
            // this.setState({ isOpen: true })
            this.props.actions.DisplayModal(confirmationObject);
        }
    }

    accountReferenceDeleteHandler = () => {
        const selectedData = this.secondChild.getSelectedRows();
        if (selectedData.length === 0) {
            MaterializeComponent.toast({
                html: 'Select Any one Account Reference to Delete',
                classes: 'warningToast'
            });
        }
        else {
            const confirmationObject = {
                title: modalTitleConstant.ACCOUNT_REFERENCE_DELETE_TITLE,
                message: modalMessageConstant.ACCOUNT_REFERENCE_DELETE_MESSAGE,
                modalClassName: "warningToast",
                type: "confirm",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteAccountReference,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };
            // this.confirmationModalData = confirmationObject;
            // this.setState({ isOpen: true })
            this.props.actions.DisplayModal(confirmationObject);
        }
    }

    deleteAccountReference = () => {
        const selectedData = this.secondChild.getSelectedRows();

        if (selectedData.length > 0) {
            this.secondChild.removeSelectedRows(selectedData);
            this.props.actions.DeleteAccountReference(selectedData);
            // this.setState({isOpen:false})
            this.props.actions.HideModal();
        }  

    }

    assignmentRefSubmitHandler = (e) => {
        e.preventDefault();
        let alreadySelected = false;
        if (this.props.showButton === true) {
            const selectedAssignmentRefType = this.props.editedAssignmentReference.assignmentRefType;
            if (this.updatedData.assignmentRefType === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Assignment Reference Type',
                    classes: 'warningToast'
                });
            }
            else {
                if (this.props.customerAssignmentData) {
                    this.props.customerAssignmentData.map(result => {
                        if (result.assignmentRefType === this.updatedData.assignmentRefType && result.assignmentRefType !== selectedAssignmentRefType) {
                            if (result.recordStatus !== 'D') {
                                alreadySelected = true;
                            }
                            else {
                                this.updatedData = result;
                            }
                        }
                    });
                }

                if (alreadySelected === true) {
                    MaterializeComponent.toast({
                        html: 'Assginment Reference Type Already Selected',
                        classes: 'warningToast'
                    });
                }
                else {
                    if (this.props.editedAssignmentReference.recordStatus !== "N" && this.updatedData.recordStatus !== 'D') {
                        this.updatedData["recordStatus"] = "M";
                        this.updatedData["modifiedBy"] = this.props.loginUser;
                        this.props.actions.UpdateAssignmentReference(this.updatedData);
                    }
                    else if(this.props.editedAssignmentReference.recordStatus==="N") {
                        this.props.actions.UpdateAssignmentReference(this.updatedData);
                    }
                    else{
                        const editAssignmentArray = [ this.props.editedAssignmentReference ];
                        this.props.actions.DeleteAssignmentReference(editAssignmentArray);
                        this.updatedData["recordStatus"] = null;
                        this.props.actions.UpdateAssignmentReference(this.updatedData);
                    }

                    this.updatedData = {};
                    document.getElementById("addAssignmentReferenceType").reset();
                    document.getElementById("cancelAssignmentReference").click();
                }
            }
        }
        if (this.props.showButton === false) {
            if (this.updatedData.assignmentRefType === undefined || this.updatedData.assignmentRefType === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Assignment Reference Type',
                    classes: 'warningToast'
                });
            }
            else {
                this.updatedData["recordStatus"] = "N";
                this.updatedData["modifiedBy"] = this.props.loginUser;
                if (this.props.customerAssignmentData) {
                    this.props.customerAssignmentData.map(result => {
                        if (result.assignmentRefType === this.updatedData.assignmentRefType) {
                            if (result.recordStatus !== 'D') {
                                alreadySelected = true;
                            }
                            else {
                                this.updatedData = result;
                                this.updatedData["recordStatus"] = null;
                            }
                        }
                    });
                }

                if (alreadySelected === true) {
                    MaterializeComponent.toast({
                        html: 'Assignment Referece Type Already Selected',
                        classes: 'warningToast'
                    });
                }
                else {
                    if (this.updatedData.recordStatus === "N") {
                        this.updatedData["customerAssignmentReferenceId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                        this.props.actions.AddAssignmentReference(this.updatedData);
                    }
                    else {
                        this.props.actions.UpdateAssignmentReference(this.updatedData);
                    }
                    this.updatedData = {};
                    document.getElementById("addAssignmentReferenceType").reset();
                    document.getElementById("cancelAssignmentReference").click();
                }
            }
        }
    }

    accountRefSubmitHandler = (e) => {
        e.preventDefault();
        let alreadySelected = false;
        if (this.props.showButton === true) {
            const selectedCompanyCode = this.props.editedAccountReference.companyCode;
            if (this.updatedData.companyCode === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Company',
                    classes: 'warningToast'
                });
            }
            else {

                if (this.props.customerAccountData) {
                    this.props.customerAccountData.map(result => {
                        if (result.companyCode === this.updatedData.companyCode && result.companyCode !== selectedCompanyCode) {
                            if (result.recordStatus !== 'D') {
                                alreadySelected = true;
                            }
                        }
                    });
                }

                if (alreadySelected === true) {
                    MaterializeComponent.toast({
                        html: 'Company Already Selected',
                        classes: 'warningToast'
                    });
                }
                else {
                    if (this.props.editedAccountReference.recordStatus !== "N") {
                        this.updatedData["recordStatus"] = "M";
                    }
                    this.updatedData["modifiedBy"] = this.props.loginUser;
                    const selectedOption = document.getElementById("companyName").options;
                    this.updatedData["companyName"] = selectedOption[selectedOption.selectedIndex].text;
                    this.props.actions.UpdateAccountReference(this.updatedData);
                    this.updatedData = {};
                    document.getElementById("addAccountReference").reset();
                    document.getElementById("cancelAccountReference").click();
                }
            }
        }
        if (this.props.showButton === false) {
            if (this.updatedData.companyCode === undefined || this.updatedData.companyCode === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one company',
                    classes: 'warningToast'
                });
            }
            else {

                if (this.props.customerAccountData) {
                    this.props.customerAccountData.map(result => {
                        if (result.companyCode === this.updatedData.companyCode) {
                            if (result.recordStatus !== 'D') {
                                alreadySelected = true;
                            }
                        }
                    });
                }

                if (alreadySelected === true) {
                    MaterializeComponent.toast({
                        html: 'Company Already Selected',
                        classes: 'warningToast'
                    });
                }
                else {

                    this.updatedData["recordStatus"] = "N";
                    this.updatedData["modifiedBy"] = this.props.loginUser;
                    const selectedOption = document.getElementById("companyName").options;
                    this.updatedData["companyName"] = selectedOption[selectedOption.selectedIndex].text;
                    this.updatedData["customerCompanyAccountReferenceId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                    this.props.actions.AddAccountReference(this.updatedData);
                    this.updatedData = {};
                    document.getElementById("addAccountReference").reset();
                    document.getElementById("cancelAccountReference").click();
                }

            }
        }
    }

    render() {
        const { showButton } = this.props;
        const { editedAccountReference, customerAssignmentData, customerAccountData, assignmentReferenceTypes, companyData, editedAssignmentReference } = this.props;
        let customerAssignmentReference = [];
        let customerAccountReference = [];
        if (customerAssignmentData) {
            customerAssignmentReference = customerAssignmentData.filter(note => note.recordStatus != "D");
        }
        if (customerAccountData) {
            customerAccountReference = customerAccountData.filter(note => note.recordStatus != "D");
        }
        // const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        return (
            <Fragment>
                {/* <CustomModal modalData={modelData} /> */}
                <div className="customerBlock">
                    <AssignmentRefModal formSubmit={this.assignmentRefSubmitHandler}
                        assignmentRefTypes={assignmentReferenceTypes}
                        editedAssignmentRef={editedAssignmentReference}
                        clearAssignmentRef={this.clearAssignmentReference}
                        selectChange={this.selectChangeHandler}
                        showButton={showButton} />
                    <AccountRefModal formSubmit={this.accountRefSubmitHandler}
                        selectChange={this.selectChangeHandler}
                        companyData={companyData}
                        editedAccountRef={editedAccountReference}
                        inputChange={this.inputChangeHandler}
                        clearAccountRef={this.clearAccountReference}
                        showButton={showButton} />

                    <div className="genralDetailContainer customCard">
                        <p className="pl-3 pr-3"><span className="bold">Assignment Reference Type</span></p>
                        <AssignmentReference assignmentReference={customerAssignmentReference}
                            headerData={HeaderData}
                            clearAssignmentRef={this.clearAssignmentReference}
                            deleteAssignmentRef={this.assignmentReferenceDeleteHandler}
                            onRef={ref => { this.child = ref; }} />

                        <p className="pl-3 pr-3"><span className="bold">Account References </span></p>
                        <AccountReference accountReference={customerAccountReference}
                            headerData={HeaderData}
                            clearAccountRef={this.clearAccountReference}
                            deleteAccountRef={this.accountReferenceDeleteHandler}
                            onRef={ref => { this.secondChild = ref; }} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Assignment;