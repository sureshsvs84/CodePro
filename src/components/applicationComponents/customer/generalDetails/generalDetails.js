import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { apiConfig } from '../../../../apiConfig/apiConfig';
import HeaderData from './headerData.json';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import SecondReactGrid from '../../../baseComponents/reactAgGridTwo';

import { modalTitleConstant, modalMessageConstant } from '../../../../constants/modalConstants';
import CustomModal from '../../../baseComponents/customModal';

class GeneralDetails extends Component {
    constructor(props) {
        super(props);
        this.updatedCustomerAddressData = {};
        this.updatedCustomerContactData = {};
        this.hasContacts = false;
        this.hasActiveContacts = false;
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
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);

        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
    }
    handleChange = (e) => {
        this.updatedCustomerAddressData[e.target.name] = e.target.value;
        if (e.target.name === "Country") {
            document.getElementById("state").value = "";
            document.getElementById("city").value = "";
            this.updatedCustomerAddressData["County"]="";
            this.updatedCustomerAddressData["City"]="";
        }
        if (e.target.name === "County") {
            document.getElementById("city").value = "";
            this.updatedCustomerAddressData["City"]="";
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
    handleContactChange = (e) => {
        this.updatedCustomerContactData[e.target.name] = e.target.value;
    }
    handleModalChange = (e) => {
        this.updatedCustomerContactData[e.target.name] = e.target.value;
    }

    contactSubmitHandler = (e) => {
        e.preventDefault();
        if (this.props.showButton === true) {
            if (this.props.editedContactReference.RecordStatus !== "N") {
                this.updatedCustomerContactData["RecordStatus"] = "M";
                this.updatedCustomerContactData["modifiedBy"] = this.props.loggedInUser;
            }
            this.props.actions.UpdateContactReference(this.updatedCustomerContactData);
            this.updatedCustomerContactData = {};
            document.getElementById("addCustomerContact").reset();
            document.getElementById("cancelContactDetail").click();
        }
        else {
            this.updatedCustomerContactData["RecordStatus"] = "N";
            this.updatedCustomerContactData["CustomerAddressId"] = document.getElementById("addressId").value;
            const selectedOption = document.getElementById("addressId").options;
            this.updatedCustomerContactData["contactAddress"] = selectedOption[selectedOption.selectedIndex].text;
            this.updatedCustomerContactData["ContactId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
            this.updatedCustomerContactData["modifiedBy"] = this.props.loggedInUser;
            this.props.actions.AddCustomerContact(this.updatedCustomerContactData);
            this.updatedCustomerContactData = {};
            document.getElementById("addCustomerContact").reset();
            document.getElementById("cancelContactDetail").click();
        }
    }

    addressSubmitHandler = (e) => {
        e.preventDefault();
        if (this.props.showButton === true) {
            if (this.updatedCustomerAddressData.Country === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Country',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedCustomerAddressData.County === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one State',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedCustomerAddressData.City === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one City',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedCustomerAddressData.Country !== "" && this.updatedCustomerAddressData.County !== "" && this.updatedCustomerAddressData.City !== "") {
                if (this.props.editedAddressReference.RecordStatus !== "N") {
                    this.updatedCustomerAddressData["RecordStatus"] = "M";
                    this.updatedCustomerAddressData["modifiedBy"] = this.props.loggedInUser;
                }
                this.props.actions.UpdateAddressReference(this.updatedCustomerAddressData);
                this.updatedCustomerAddressData = {};
                document.getElementById("addCustomerAddress").reset();
                document.getElementById("cancelAddressDetail").click();

            }
        }

        if (this.props.showButton === false) {
            if (this.updatedCustomerAddressData.Country === undefined || this.updatedCustomerAddressData.Country === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one Country',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedCustomerAddressData.County === undefined || this.updatedCustomerAddressData.County === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one State',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedCustomerAddressData.City === undefined || this.updatedCustomerAddressData.City === "") {
                MaterializeComponent.toast({
                    html: 'Select Any one City',
                    classes: 'warningToast'
                });
            }
            else if (this.updatedCustomerAddressData.Country !== "" && this.updatedCustomerAddressData.County !== "" && this.updatedCustomerAddressData.City !== "") {
                this.updatedCustomerAddressData["recordStatus"] = "N";
                this.updatedCustomerAddressData["Contacts"] = [];
                this.updatedCustomerAddressData["AddressId"] = Math.floor(Math.random() * (Math.pow(10, 5)));
                this.updatedCustomerAddressData["modifiedBy"] = this.props.loggedInUser;
                this.props.actions.AddCustomerAddress(this.updatedCustomerAddressData);
                this.updatedCustomerAddressData = {};
                document.getElementById("addCustomerAddress").reset();
                document.getElementById("cancelAddressDetail").click();
            }
        }
    }

    clearData = () => {
        document.getElementById("addCustomerAddress").reset();
        document.getElementById("addCustomerContact").reset();
        document.getElementById("addressId").removeAttribute("disabled");
        document.getElementById("OtherDetails").value="";
        this.props.actions.ShowButtonHandler();
    }

    addressDeleteClickHandler = () => {
        const selectedData = this.child.getSelectedRows(); 
        this.hasContacts = false;
        this.hasActiveContacts = false;
        
        if (selectedData.length === 0) {
            MaterializeComponent.toast({
                html: 'Select any one Address',
                classes: 'warningToast'
            });
        }
        else {
            selectedData.map(result => {
                if (result.Contacts.length > 0) {
                    this.hasContacts = true;
                    result.Contacts.map(contact => {
                        if (contact.RecordStatus !== 'D') {
                            this.hasActiveContacts = true;
                        }
                    });
                }
            });
            if (this.hasContacts && this.hasActiveContacts) {
                MaterializeComponent.toast({
                    html: 'Seleted Address has Contacts',
                    classes: 'warningToast'
                });
            }
            else {

                const confirmationObject = {
                    title: modalTitleConstant.CONFIRMATION,
                    message: modalMessageConstant.ADDRESS_DELETE_MESSAGE,
                    modalClassName: "warningToast",
                    type: "confirm",
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
                // this.confirmationModalData =confirmationObject;
                // this.setState({isOpen:true})
                this.props.actions.DisplayModal(confirmationObject);
            }
        }
    }

    contactDeleteClickHandler = () => {
        const selectedData = this.secondChild.getSelectedRows();        
        if (selectedData.length === 0) {
            MaterializeComponent.toast({
                html: 'Select any one Contact',
                classes: 'warningToast'
            });
        }
        else {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.CONTACT_DELETE_MESSAGE,
                modalClassName: "warningToast",
                type: "confirm",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteContactHandler,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };
            // this.confirmationModalData =confirmationObject;
            // this.setState({isOpen:true})
            this.props.actions.DisplayModal(confirmationObject);
        }
    }

    deleteSelected = () => {
        const selectedData = this.child.getSelectedRows(); 
        if (selectedData.length > 0) {
            this.child.removeSelectedRows(selectedData);
            this.props.actions.DeleteCustomerAddress(selectedData);
            //this.setState({isOpen:false})
            this.props.actions.HideModal();
        }        
    }
    deleteContactHandler = () => {
        const selectedData = this.secondChild.getSelectedRows();
        if (selectedData.length > 0) {
            this.secondChild.removeSelectedRows(selectedData);
            this.props.actions.DeleteCustomerContact(selectedData);
            // this.setState({isOpen:false})
            this.props.actions.HideModal();
        }                    
    }
    confirmationRejectHandler = () =>{
        // this.setState({isOpen:false})
        this.props.actions.HideModal();
    }

    render() {        
        const {
            customerData,
            customerAddressData,
            customerContactData,
            editedAddressReference,
            editedContactReference
        } = this.props;
        const stateMasterData = this.props.stateMasterData;
        const countryMasterData = this.props.countryMasterData;
        const cityMasterData = this.props.cityMasterData;
        const salutationMasterData = this.props.salutationMasterData;
        const vatPrefixMasterData = this.props.vatPrefixMasterData;
        const { showButton } = this.props;

        let customerGeneralAddressData = [];
        let customerGeneralData = [];
        const customerGeneralContactData = [];
        if (customerAddressData) {
            customerGeneralAddressData = customerAddressData.filter(address => address.RecordStatus !== "D");
        }
        if (customerData) {
            customerGeneralData = customerData;
        }
        if (customerContactData) {
            customerContactData.map(data => {
                               // console.log(data);
                const { Contacts } = data;

                if (Contacts !== undefined && Contacts.length != null && Contacts.length > 0) {

                    Contacts.map(contact => {
                        if (contact.RecordStatus !== 'D') {
                            contact.contactAddress = data.Address;
                            customerGeneralContactData.push(contact);
                        }
                    });
                }
            });
        }

        this.props.editedContactReference.OtherDetail && (document.getElementById("OtherDetails").value=editedContactReference.OtherDetail);

        const modelData = { ...this.confirmationModalData,isOpen:this.state.isOpen };

        return (
            <Fragment>
                {/* <CustomModal modalData={modelData}/>  */}
                <div className="customerBlock">
                    <div id="add-address" className="modal">
                        <form  id="addCustomerAddress" className="col s12">
                            <div className="modal-content">
                                <div className="row">
                                    <div className="col s3">
                                        <label className="customLabel mandate">Country</label>
                                        <select className="customInputs browser-default" id="country" name="Country" onChange={this.handleChange}>
                                            <option value="">Select Country</option>
                                            {countryMasterData.map((data, i) => {
                                                if (data.name === editedAddressReference.Country) {
                                                    return <option key={i} value={data.name} selected="true">{data.name}</option>;
                                                }
                                                else {
                                                    return <option key={i} value={data.name}>{data.name}</option>;
                                                }
                                            })}
                                        </select>
                                    </div>
                                    <div className="col s3">
                                        <label className="customLabel mandate">State / Country Province</label>
                                        <select className="customInputs browser-default" id="state" name="County" onChange={this.handleChange}>
                                            <option value="">Select State </option>
                                            {stateMasterData.map((data, i) => {
                                                if (data.name === editedAddressReference.County) {
                                                    return <option key={i} value={data.name} selected="true">{data.name}</option>;
                                                }
                                                else {
                                                    return <option key={i} value={data.name}>{data.name}</option>;
                                                }
                                            })}
                                        </select>
                                    </div>
                                    <div className="col s3">
                                        <label className="customLabel mandate">City</label>
                                        <select className="customInputs browser-default" id="city" name="City" onChange={this.handleChange}>
                                            <option value="">Select City</option>
                                            {cityMasterData.map((data, i) => {
                                                if (data.name === editedAddressReference.City) {
                                                    return <option key={i} value={data.name} selected="true">{data.name}</option>;
                                                }
                                                else {
                                                    return <option key={i} value={data.name}>{data.name}</option>;
                                                }
                                            })}
                                        </select>
                                    </div>
                                    <div className="col s3">
                                        <label htmlFor="pin-code"  className="customLabel mandate">Postal code</label>
                                        <input className="customInputs browser-default validate"  maxLength="15" placeholder="Postal code" defaultValue={editedAddressReference.PostalCode} name="PostalCode" type="text" onChange={this.handleChange} id="pin-code" required />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col s4">
                                        <label htmlFor="full-address"  className="customLabel mandate">Full Address</label>
                                        <input className="customInputs browser-default validate"  maxLength="500" placeholder="Full Address" defaultValue={editedAddressReference.Address} name="Address" type="text" onChange={this.handleChange} id="full-address" required />
                                    </div>
                                    <div className="col s4">
                                        <label className="customLabel">EU/VAT prefix</label>
                                        <select className="customInputs browser-default" id="vatPrefix" defaultValue ={editedAddressReference.EUVatPrefix} name="EUVatPrefix" onChange={this.handleChange}>
                                            <option value="">Select Prefix</option>
                                            {vatPrefixMasterData.map((data, i) => {
                                                if (data === editedAddressReference.EUVatPrefix) {
                                                    return <option key={i} value={data} selected="true">{data}</option>;
                                                }
                                                else {
                                                    return <option key={i} value={data}>{data}</option>;
                                                }
                                            })}
                                        </select>
                                    </div>
                                    <div className="col s4">
                                        <label htmlFor="registration-number" className="customLabel">VAT Tax Registration No</label>
                                        <input className="customInputs browser-default" placeholder="VAT Tax Registration No"  maxLength="60" name="VatTaxRegNumber" defaultValue={editedAddressReference.VatTaxRegNumber} type="text" onChange={this.handleChange} id="registration-number" />
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="cancelAddressDetail" type="button" onClick={this.clearData} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                                {!showButton ? <button type="submit" className="btn-small">SUBMIT</button>
                                    :
                                    <button type="submit" className="btn-small">SUBMIT</button>}
                            </div>
                        </form>
                    </div>

                    {/*contact modal         */}
                    <div id="add-contact" className="modal">
                        <form onSubmit={this.contactSubmitHandler} id="addCustomerContact" className="col s12">
                            <div className="modal-content">
                                <h6>Add New Contacts</h6>
                                <div className="row">
                                    <div className="col s6">
                                        <label htmlFor="addressId" className="customLabel mandate">Address:</label>
                                        <select className="customInputs browser-default" id="addressId" value={editedAddressReference.ContactPersonName} name="CustomerAddressId" onChange={this.handleModalChange} >

                                            {
                                                customerGeneralAddressData.map((data, i) => {

                                                    if (data.AddressId == editedContactReference.CustomerAddressId) {
                                                        return <option key={i} value={data.AddressId} selected="true">{data.Address}</option>;
                                                    }
                                                    else {
                                                        return <option key={i} value={data.AddressId}>{data.Address}</option>;
                                                    }
                                                })}
                                            }

                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s3">
                                        <label className="customLabel">Salutation</label>
                                        <select className="customInputs browser-default" id="country" defaultValue={editedContactReference.Salutation} name="Salutation" onChange={this.handleContactChange}>
                                            <option value="">Select Salutation</option>
                                            {salutationMasterData.map((data, i) => {
                                                if (data.name === editedContactReference.name) {
                                                    return <option key={i} value={data.name} selected="true">{data.name}</option>;
                                                }
                                                else {
                                                    return <option key={i} value={data.name}>{data.name}</option>;
                                                }
                                            })}
                                        </select>
                                    </div>
                                    <div className="col s6">
                                        <label htmlFor="ContactPerson" className="customLabel mandate">Contact Name</label>
                                        <input placeholder="Contact Name" type="text" maxLength="100" className=" browser-default customInputs validate" defaultValue={editedContactReference.ContactPersonName} onChange={this.handleContactChange} name="ContactPersonName" id="ContactPerson" required />
                                    </div>
                                    <div className="col s3">
                                        <label htmlFor="Position" className="customLabel">Position</label>
                                        <input placeholder="Position" type="text" maxLength="100" className="browser-default customInputs" defaultValue={editedContactReference.Position} onChange={this.handleContactChange} name="Position" id="Position" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s4">
                                        <label htmlFor="LandLine" className="customLabel mandate">Telephone No</label>
                                        <input placeholder="Telephone No" type="text" maxLength="20" className="browser-default customInputs validate" defaultValue={editedContactReference.Landline} onChange={this.handleContactChange} name="Landline" id="LandLine" required />

                                    </div>
                                    <div className="col s4">
                                        <label htmlFor="Fax" className="customLabel">Fax No</label>
                                        <input placeholder="Fax No" type="text" maxLength="20" className="browser-default customInputs" defaultValue={editedContactReference.Fax} onChange={this.handleContactChange} name="Fax" id="Fax" />

                                    </div>
                                    <div className="col s4">
                                        <label htmlFor="MobileNo" className="customLabel">Mobile No</label>
                                        <input placeholder="Mobile No" type="text" maxLength="20" className="browser-default customInputs" defaultValue={editedContactReference.Mobile} onChange={this.handleContactChange} name="Mobile" id="MobileNo" />
                                    </div>
                                    {/* <div className="input-field col s3">

                                            <input placeholder="Extranet" type="number" onChange={this.handleContactChange} name="defaultUse" id="" />
                                            <label htmlFor="full-address">Extranet</label>
                                        </div> */}
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <label htmlFor="Email" className="customLabel mandate">Email</label>
                                        <input placeholder="Email"  maxLength="60" className="browser-default customInputs" type="email" defaultValue={editedContactReference.Email} onChange={this.handleContactChange} name="Email" id="Email" required/>
                                    </div>
                                    <div className="col s6">
                                        <label htmlFor="OtherDetails" className="customLabel">Other Details</label>
                                        <textarea id="OtherDetails" placeholder="Other Details" maxLength="200" name="OtherDetail" onChange={this.handleContactChange} className="browser-default customInputs" />

                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="cancelContactDetail" onClick={this.clearData} type="button" className="modal-close waves-effect waves-teal btn-flat">CANCEL</button>
                                {!showButton ? <button type="submit" className="btn-small">SUBMIT</button>
                                    :
                                    <button type="submit" className="btn-small">SUBMIT</button>
                                }
                            </div>
                        </form>
                    </div>
                    <div className="genralDetailContainer customCard">
                        <p className="pl-3 pr-3"><span className="bold">Customer Details</span></p>
                        <div className="customCard">
                            <div className="row mb-0">
                                <div className="input-field col s4 pl-4">
                                    <span className="bold">Customer Name :</span> {customerGeneralData.customerName}
                                </div>
                                <div className="input-field col s3">
                                    <span className="bold">Customer Code:</span> {customerGeneralData.customerCode}
                                </div>
                                <div className="input-field col s3">
                                    <span className="bold">Parent Company Name:</span> {customerGeneralData.parentCompanyName}
                                </div>
                            </div>
                        </div>
                        <p className="pl-3 pr-3"><span className="bold">Address</span></p>
                        <div className="customCard">
                            <ReactGrid gridRowData={customerGeneralAddressData} gridColData={HeaderData.GeneralAddressHeader} onRef={ref => { this.child = ref; }} />
                            <div className="right-align mr-3 mt-1">
                                <a href="#add-address" className="btn-small  modal-trigger">Add</a>
                                <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.addressDeleteClickHandler}>Delete</a>
                            </div>
                        </div>
                        <p className="pl-3 pr-3"><span className="bold">Contact</span></p>
                        <div className="customCard">
                            <SecondReactGrid gridRowData={customerGeneralContactData} gridColData={HeaderData.GeneralContactHeader} onRef={ref => { this.secondChild = ref; }} />
                            <div className="right-align mr-3 mt-1">
                                <a onClick={this.clearData} href="#add-contact" className="btn-small  modal-trigger">Add</a>
                                <a href="#confirmation_Modal" className="btn-small ml-2 modal-trigger" onClick={this.contactDeleteClickHandler}>Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
   
}

export default GeneralDetails;
