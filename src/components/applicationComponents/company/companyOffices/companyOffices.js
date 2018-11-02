import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import HeaderData from './headerData.json';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';
import captalize from '../../../../utils/captalize';

const localConstant = getlocalizeData();
const CompanyOffice = (props) => (
    <div>
        <div className="row mb-0">
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.OFFICE_NAME}
                labelClass="customLabel mandate"
                divClassName="s4"
                type='text'
                required={true}
                maxLength="50"
                name='officeName'
                autocomplete="off"
                colSize='s4'
                inputClass="customInputs"
                defaultValue={props.selectedRow.officeName}
                onValueChange={props.onChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.ACCOUNT_REFERENCE}
                labelClass="customLabel mandate"
                divClassName="s4"
                maxLength="15"
                type='text'
                autocomplete="off"
                required={true}
                name='accountRef'
                colSize='s4'
                inputClass="customInputs"
                defaultValue={props.selectedRow.accountRef}
                onValueChange={props.onChange}
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.FULL_ADDRESS}
                labelClass="customLabel mandate"
                divClassName="s4"
                type='text'
                autocomplete="off"
                required={true}
                maxLength="200"
                name='fullAddress'
                colSize='s4'
                inputClass="customInputs"
                defaultValue={props.selectedRow.fullAddress}
                onValueChange={props.onChange}
            />
        </div>
        <div className="row mb-2">
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.modalConstant.COUNTRY}
                type='select'
                colSize='s3'
                name="country"
                labelClass='mandate'
                required={true}
                className="browser-default"
                optionsList={props.countryMasterData}
                optionName="name"
                optionValue="name"
                onSelectChange={props.onChange}
                defaultValue={props.selectedRow.country}
                id="country"
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.modalConstant.STATE_COUNTRY_PRO}
                type='select'
                colSize='s3'
                name='state'                                
                className="browser-default"
                optionsList={props.stateMasterData}
                optionName='name'
                optionValue='name'
                onSelectChange={props.onChange}
                defaultValue={props.selectedRow.state}
                id="state"
            />
            <CustomInput
                hasLabel={true}
                divClassName='col'
                label={localConstant.modalConstant.CITY}
                type='select'
                colSize='s3'
                name="city"
                className="browser-default"
                optionsList={props.cityMasterData}
                optionName='name'
                optionValue="name"
                onSelectChange={props.onChange}
                defaultValue={props.selectedRow.city}
                id="city"
            />
            <CustomInput
                hasLabel={true}
                label={localConstant.modalConstant.PINCODE}
                labelClass="customLabel mandate"
                divClassName="s3"
                type='text'
                autocomplete="off"
                required={true}
                name='postalCode'
                maxLength="15"
                colSize='s3'
                inputClass="customInputs"
                defaultValue={props.selectedRow.postalCode}
                onValueChange={props.onChange}
            />
        </div>
    </div>
);
class CompanyOffices extends Component {
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

    componentWillMount() {
        this.props.actions.FetchCountry();
    }

    componentDidMount() {
        const tab = document.querySelectorAll('.tabs');
        const tabInstances = MaterializeComponent.Tabs.init(tab);
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);

        const datePicker = document.querySelectorAll('.datepicker');
        const datePickerInstances = MaterializeComponent.Datepicker.init(datePicker);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
    }

    handlerChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
        if (e.target.name === "country") {
            document.getElementById("state").value = "";
            document.getElementById("city").value = "";
            this.props.actions.ClearStateCityData();
        }
        if (e.target.name === "county") {
            document.getElementById("city").value = "";
        }
        if (document.getElementById("country").value != "") {
            const selectedCountry = document.getElementById("country").value;
            this.props.actions.FetchState(selectedCountry);
        }
        if (document.getElementById("state").value != "") {
            const selectedState = document.getElementById("state").value;
            this.props.actions.FetchCity(selectedState);
        }
    }

    companyOfficesSubmitHandler = (e) => {
        e.preventDefault();
        let isAlreadyExist = false;
        let enteredWord = "";
        if (this.props.showButton === true) {
            if (document.getElementById("country").value === "") {
                MaterializeComponent.toast({
                    html: 'Select a country',
                    classes: 'warningToast'
                });
            }
            else if (document.getElementById("country").value !== "") {
                if (this.updatedData.officeName) {
                    enteredWord = captalize.captalizeWord(this.updatedData.officeName);
                    if (this.props.companyOfficeDetail) {
                        isAlreadyExist = this.props.companyOfficeDetail.map(detail => {
                            if (detail.officeName.toUpperCase() === enteredWord.toUpperCase() && detail.recordStatus !== "D") {
                                return !isAlreadyExist;
                            }
                            else {
                                return isAlreadyExist;
                            }
                        });
                    }
                }
                else {
                    if (this.props.companyOfficeDetail) {
                        isAlreadyExist = this.props.companyOfficeDetail.map(detail => {
                            if (detail.officeName === this.props.editRecord.officeName && detail.recordStatus !== "D") {
                                return isAlreadyExist;
                            }
                        });
                    }
                }

                if (isAlreadyExist.includes(true)) {
                    MaterializeComponent.toast({
                        html: 'Office name already exist',
                        classes: 'warningToast'
                    });
                }
                else {
                    if (this.props.editRecord.recordStatus !== "N") {
                        this.updatedData["recordStatus"] = "M";
                    }
                    if (document.getElementById("state").value === "") {
                        this.updatedData.state = "";
                    };
                    if (document.getElementById("city").value === "") {
                        this.updatedData.city = "";
                    };
                    this.updatedData["modifiedBy"] = this.props.loggedInUser;
                    this.props.actions.UpdateCompanyOffice(this.updatedData);
                    this.updatedData = {};
                    this.clearData();
                    document.getElementById("cancelCompanyOfficesSubmit").click();
                }
            }
        }
        if (this.props.showButton === false) {
            if (this.updatedData.country === undefined || this.updatedData.country === "") {
                MaterializeComponent.toast({
                    html: 'Select a country',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedData.country !== "") {
                enteredWord = captalize.captalizeWord(this.updatedData.officeName);
                if (this.props.companyOfficeDetail) {
                    isAlreadyExist = this.props.companyOfficeDetail.map(detail => {
                        if (detail.officeName.toUpperCase() == enteredWord.toUpperCase() && detail.recordStatus !== "D") {
                            return !isAlreadyExist;
                        }
                        else {
                            return isAlreadyExist;
                        }
                    });
                }
                if (isAlreadyExist.includes(true)) {
                    MaterializeComponent.toast({
                        html: 'Office name already exist',
                        classes: 'warningToast'
                    });
                }
                else {
                    this.updatedData["recordStatus"] = "N";
                    this.updatedData["modifiedBy"] = this.props.loggedInUser;
                    this.updatedData["addressId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                    this.props.actions.AddCompanyOffice(this.updatedData);
                    this.updatedData = {};
                    this.clearData();
                    document.getElementById("cancelCompanyOfficesSubmit").click();
                }
            }
        }
    }

    companyOfficeDeleteClickHandler = () => {
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.OFFICE_DELETE_MESSAGE,
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
                html: 'Select Any one Row to delete',
                classes: 'warningToast'
            });
        }
    }

    confirmationRejectHandler = () => {
        this.props.actions.HideModal();
    }

    clearData = () => {
        document.getElementById("addCompany").reset();
        this.props.actions.ShowButtonHandler();
        this.props.actions.ClearStateCityData();
        this.updatedData = {};
    }

    deleteSelected = () => {
        const selectedData = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedData);
        this.props.actions.DeleteCompanyOffices(selectedData);
        this.props.actions.HideModal();
    }

    render() {
        const selectedRow = this.props.editRecord;
        const headData = HeaderData;
        const rowData = this.props.companyOfficeDetail && this.props.companyOfficeDetail.filter(x => x.recordStatus != 'D');
        const { showButton, stateMasterData, countryMasterData, cityMasterData } = this.props;
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                <div className="customerBlock">
                    <div id="add-location" className="modal popup-position">
                        <form id="addCompany" onSubmit={this.companyOfficesSubmitHandler}>
                            <div className="modal-content">
                                <h6>Company Office</h6>
                                <CompanyOffice stateMasterData={stateMasterData} showButton={showButton} countryMasterData={countryMasterData} cityMasterData={cityMasterData} selectedRow={selectedRow} onChange={this.handlerChange} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="cancelCompanyOfficesSubmit" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                                {!showButton ?
                                    <button type="submit" className="btn-small">SUBMIT</button> :
                                    <button type="submit" className="btn-small">SUBMIT</button>}
                            </div>
                        </form>
                    </div>

                    <div className="customCard">
                        <p><span className='bold'>Company Offices</span></p>
                        <div className="customCard">
                            <ReactGrid gridRowData={rowData} gridColData={headData} onRef={ref => { this.child = ref; }} />
                        </div>
                        <div className="right-align">
                            <a onClick={this.clearData} href="#add-location" className="btn-small modal-trigger">Add</a>
                            <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.companyOfficeDeleteClickHandler}>Delete</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CompanyOffices;