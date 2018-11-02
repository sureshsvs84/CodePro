import React, { Component } from 'react';
import MaterializeComponent from 'materialize-css';
import expectedMarginHeader from './headerData.json';
import CustomInput from '../../../baseComponents/inputControlls';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import CustomModal from '../../../baseComponents/customModal';

class ExpectedMarginByBusinessUnit extends Component {
    constructor(props) {
        super(props);
        this.updatedExpectedMarginData = {};
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
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
        // this.props.actions.FetchCompanyExpectedMargin();
        this.props.actions.FetchBusinessUnit();
    }
    clearData = () => {
        document.getElementById("addExpectedMargin").reset();
        this.props.actions.ShowButtonHandler();
    }
    companyMarginDeleteClickHandler = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.COMPANY_EXPECTED_MARGIN_DELETE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteSelected,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };
            this.props.actions.DisplayModal(confirmationObject);
        }
        else {
            MaterializeComponent.toast({
                html: 'Select atleast one row for delete.',
                classes: 'warningToast'
            });
        }
    }

    deleteSelected = () => {
        const selectedRecords = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedRecords);
        this.props.actions.DeleteExpectedMargin(selectedRecords);
        this.props.actions.HideModal();
    }
    handleExpectedMarginChange = (e) => {
        this.updatedExpectedMarginData[e.target.name] = e.target.value;
    }
    expectedMarginSubmitHandler = (e) => {
        e.preventDefault();
        let alreadySelected = false;
        if (this.props.showButton === true) {
            const selectedBusinessUnitType = this.props.editExpectedMarginDetails.marginType;
            if (this.updatedExpectedMarginData.marginType === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Business Unit',
                    classes: 'warningToast'
                });
            }

            else {

                if (this.props.expextedMarginDetail) {
                    this.props.expextedMarginDetail.map(result => {
                        if (result.marginType === this.updatedExpectedMarginData.marginType && result.marginType !== selectedBusinessUnitType) {
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
                        html: 'Business Unit Already Selected',
                        classes: 'warningToast'
                    });
                }
                else {

                    if (this.props.editExpectedMarginDetails.recordStatus !== "N") {
                        this.updatedExpectedMarginData["recordStatus"] = "M";
                    }
                    this.updatedExpectedMarginData["modifiedBy"] = this.props.loggedInUser;
                    this.props.actions.UpdateExpectedMargin(this.updatedExpectedMarginData);
                    this.updatedExpectedMarginData = {};

                    document.getElementById("addExpectedMargin").value = "";
                    document.getElementById("addExpectedMargin").reset();
                    this.clearData();
                    document.getElementById("cancelExpectedMarginDetail").click();
                }

            }
        }
        if (this.props.showButton === false) {
            if (this.updatedExpectedMarginData.marginType === undefined || this.updatedExpectedMarginData.marginType === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Business Unit',
                    classes: 'warningToast'
                });
            }
            else {

                if (this.props.expextedMarginDetail) {
                    this.props.expextedMarginDetail.map(result => {
                        if (result.marginType === this.updatedExpectedMarginData.marginType) {
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
                        html: 'Business Unit Already Selected',
                        classes: 'warningToast'
                    });
                }

                else {
                    this.updatedExpectedMarginData["recordStatus"] = "N";
                    this.updatedExpectedMarginData["modifiedBy"] = this.props.loggedInUser;
                    this.updatedExpectedMarginData["companyExpectedMarginId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                    this.props.actions.AddExpectedMargin(this.updatedExpectedMarginData);
                    this.updatedExpectedMarginData = {};

                    document.getElementById("addExpectedMargin").reset();
                    this.clearData();
                    document.getElementById("cancelExpectedMarginDetail").click();
                }
            }
        }
    }
    confirmationRejectHandler = () => {
        this.props.actions.HideModal();
    }
  
    render() {
        const headData = expectedMarginHeader;
        const { expextedMarginDetail, editExpectedMarginDetails, buisnessUnitMasterData } = this.props;
        const { showButton } = this.props;
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };

        let companyExpectedMarginData = [];
        if (expextedMarginDetail) {
            companyExpectedMarginData = expextedMarginDetail.filter(margin => margin.recordStatus !== "D");
        }
      
        return (
            <div className="customerBlock">
                <CustomModal modalData={modelData} />
                <div id="add-expected-margin" className="modal popup-position">
                    <form onSubmit={this.expectedMarginSubmitHandler} id="addExpectedMargin" className="col s12">
                        <div className="modal-content">
                            <h6>Add/Edit Expected Margin</h6>
                            <div className="row">
                                <CustomInput
                                    hasLabel={true}
                                    divClassName='col'
                                    label='Business Unit'
                                    type='select'
                                    colSize='s6'
                                    name="marginType"
                                    labelClass='mandate'
                                    required={true}
                                    className="browser-default"
                                    optionsList={buisnessUnitMasterData}
                                    optionName="name"
                                    optionValue="name"
                                    onSelectChange={this.handleExpectedMarginChange}
                                    defaultValue={editExpectedMarginDetails.marginType}
                                    id="bussiness"
                                />
                                <CustomInput
                                    hasLabel={true}
                                    label='Minimum Expected Margin %'
                                    labelClass="customLabel mandate"
                                    divClassName="s6 numerInput"
                                    type='number'
                                    required={true}
                                    name='minimumMargin'
                                    colSize='s6'
                                    step={0.01}
                                    inputClass="customInputs"
                                    maxLength={18}
                                    defaultValue={editExpectedMarginDetails.minimumMargin}
                                    onValueChange={this.handleExpectedMarginChange}                                   
                                />

                            </div>

                        </div>
                        <div className="modal-footer">
                            <button id="cancelExpectedMarginDetail" type="button" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat">CANCEL</button>
                            {!showButton ? <button type="submit" className="btn-small">Submit</button>
                                :
                                <button type="submit" className="btn-small">SUBMIT</button>}
                        </div>
                    </form>
                </div>

                <div className="customCard">
                    <p><span className='bold'>Expected Margin</span></p>
                    <div className="customCard">
                        <ReactGrid gridRowData={companyExpectedMarginData} gridColData={headData} onRef={ref => { this.child = ref; }} />
                    </div>
                    <div className="right-align">
                        <a onClick={this.clearData} href="#add-expected-margin" className="btn-small modal-trigger">Add</a>
                        <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.companyMarginDeleteClickHandler}>Delete</a>
                    </div>
                </div>
            </div>
        );
    }
}

// ExpectedMarginByBusinessUnit.propTypes = {
//     rowData: PropTypes.array.isRequired,
//     headData: PropTypes.array.isRequired
// }

// ExpectedMarginByBusinessUnit.defaultprops = {
//     rowData: [],
//     headData: []
// }
export default ExpectedMarginByBusinessUnit;