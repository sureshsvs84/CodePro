import React, { Component,Fragment } from 'react';
import CardPanel from '../../../baseComponents/cardPanel';
import CustomInput from '../../../baseComponents/inputControlls';
import LabelwithValue from '../../../baseComponents/customLabelwithValue';
import { getlocalizeData } from '../../../../utils/commonUtils';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
import MaterializeComponent from 'materialize-css';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import { headData } from './headerData';
import CustomModal from '../../../baseComponents/customModal';

const localConstant = getlocalizeData();

class DivisionCostCenterMargin extends Component {
    constructor(props){
        super(props);
        this.state={
            SelectedDivisionName:"select",
            DivisionAcReference:"",
            isOpen:false,
            selectedDivisionData:{}
        };
        this.confirmationModalData = {
            title: "",
            message:"",
            type: "",
            modalClassName:"",
            buttons: []
    };

    }
   componentDidMount(){
        const elems = document.querySelectorAll('.modal');
        const instances = MaterializeComponent.Modal.init(elems,{ dismissible:false });
        this.props.actions.FetchCompanyDivision();
   }
    loadCostCenter = (e) =>{
        this.props.actions.FetchDivisionCostCenter();    
        this.setState({ SelectedDivisionName:e.target.value });
        if(e.target.value === 'select' || e.target.value === 'Select' || e.target.value === ""){
            this.setState({ DivisionAcReference:'' });
        }else{
            const currentDivsion = this.props.companyDivision && this.props.companyDivision.filter((iteratedValue)=>{
                if(iteratedValue.divisionName === e.target.value){
                    return iteratedValue;
                }
            });        
            this.setState({ 
                DivisionAcReference:currentDivsion[0].divisionAcReference,
                selectedDivisionData:currentDivsion[0]
            });
        }
    }
    handleCreateDivision = () => {        
        this.props.actions.UpdateCompanyDivisionButton(false);
        document.getElementById("newDivisionName").defaultValue = '';
        document.getElementById("newInputReference").defaultValue = '';
    }
    handleEditDivision = (e) => {        
        this.props.actions.UpdateCompanyDivisionButton(true);
        const oldDivision = this.state.SelectedDivisionName;
        this.props.companyDivision && this.props.companyDivision.map((iteratedValue)=>{
            if (iteratedValue.divisionName === this.state.selectedDivisionData.divisionName){
                document.getElementById("newDivisionName").value = iteratedValue.divisionName;
                document.getElementById("newInputReference").value = iteratedValue.divisionAcReference;
            }
        }); 

        if(oldDivision === "select" || oldDivision === "Select"){
            MaterializeComponent.toast({
                html: 'Select Division To Update',
                classes: 'warningToast'
            });
            return false;
        }
        
    }
    handleNewDivisionCostCentre = () => {
        this.props.actions.UpdateCostCentreButton(false);
        document.getElementById('newCostCentreName').value = '';
        document.getElementById('newCostCentreCode').value = '';
    }
    addNewDivision = (e) =>{
        e.preventDefault();
        this.props.actions.UpdateCompanyDivisionButton(false);
        const divisionName = document.getElementById('newDivisionName').value;
        const divisionReference = document.getElementById('newInputReference').value;
        if(divisionName ==="" || divisionName === "Select" || divisionName === "select"){
            MaterializeComponent.toast({
                html: 'Please Enter Division Name',
                classes: 'warningToast'
            });
            return false;
        }
        const isDuplicate = this.props.companyDivision && this.props.companyDivision.find((itertedValue)=>{
            if((itertedValue.divisionName).toUpperCase() === divisionName.toUpperCase() && itertedValue.recordStatus !== "D"){
                return true;
            }
        });
        if(isDuplicate){
            MaterializeComponent.toast({
                html: 'Division Already Assigned',
                classes: 'warningToast'
            });
            return false;
        }
        const data = {
            "companyCode": this.props.selectedCompanyCode,
            "divisionName": divisionName,
            "divisionAcReference": divisionReference,
            "recordStatus": "N",
            "modifiedBy": this.props.loginUser
        };
        this.props.actions.AddNewDivision(data);
        // this.loadCostCenter(document.getElementById('newDivisionName'));
        document.getElementById('divisionModalClose').click();
        
    }
    //To add new cost centre
    addNewCostCentre = (e) =>{        
        e.preventDefault(); 
        // this.props.actions.UpdateCostCentreButton(false);
        const divisionCostCentreName = document.getElementById('newCostCentreName').value;
        const divisionCostCentreCode = document.getElementById('newCostCentreCode').value;
        if(divisionCostCentreName ===""){
            MaterializeComponent.toast({
                html: 'Please Fill The Division Cost Centre Name',
                classes: 'warningToast'
            });
            return false;
        }else if(divisionCostCentreCode ===""){
            MaterializeComponent.toast({
                html: 'Please Fill The Division Cost Centre Code',
                classes: 'warningToast'
            });
            return false;
        }
        const isDuplicate = this.props.companyDivisionCostCenter.find((itertedValue)=>{
            if((itertedValue.costCenterName).toUpperCase() === divisionCostCentreName.toUpperCase() && itertedValue.division === this.state.SelectedDivisionName && itertedValue.recordStatus !== "D"){
                return true;
            }
        });
        if(isDuplicate){
            MaterializeComponent.toast({
                html: 'Division Cost Centre Name Already Exists',
                classes: 'warningToast'
            });
            return false;
        }
        const isDuplicateCode = this.props.companyDivisionCostCenter.find((itertedValue)=>{
            if((itertedValue.costCenterCode).toUpperCase() === divisionCostCentreCode.toUpperCase() && itertedValue.division === this.state.SelectedDivisionName && itertedValue.recordStatus !== "D"){
                return true;
            }
        });
        if(isDuplicateCode){
            MaterializeComponent.toast({
                html: 'Division Cost Centre Code Already Exists',
                classes: 'warningToast'
            });
            return false;
        }

        const data = {
                "companyDivisionCostCenterId": Math.floor(Math.random() * (Math.pow(10, 5))),
                "companyCode": this.props.selectedCompanyCode,
                "division": this.state.SelectedDivisionName,
                "costCenterCode": divisionCostCentreCode,
                "costCenterName": divisionCostCentreName,
                "recordStatus": "N" ,
                "modifiedBy": this.props.loginUser
            };
        this.props.actions.AddNewDivisionCostCentre(data);
        this.props.actions.FetchDivisionCostCenter(this.state.SelectedDivisionName);
        document.getElementById('costCentreModalClose').click();
        
    };
    //To update Cost centre
    UpdateDivisionCostCentre = (e) => {
        e.preventDefault();
        const divisionCostCentreName = document.getElementById('newCostCentreName').value;
        const divisionCostCentreCode = document.getElementById('newCostCentreCode').value;
        const currentDivision = this.state.SelectedDivisionName;
        if(divisionCostCentreName ===""){
            MaterializeComponent.toast({
                html: 'Please Fill The Division Cost Centre Name',
                classes: 'warningToast'
            });
            return false;
        }else if(divisionCostCentreCode ===""){
            MaterializeComponent.toast({
                html: 'Please Fill The Division Cost Centre Code',
                classes: 'warningToast'
            });
            return false;
        }

        const isDuplicateName = this.props.companyDivisionCostCenter && this.props.companyDivisionCostCenter.find((itertedValue)=>{
            if((itertedValue.costCenterName).toUpperCase() === divisionCostCentreName.toUpperCase() && itertedValue.division === currentDivision && itertedValue.companyDivisionCostCenterId !== this.props.editedDivisionCostCentre.companyDivisionCostCenterId){
                return true;
            }
        });
        const isDuplicateCostCentreCode = this.props.companyDivisionCostCenter && this.props.companyDivisionCostCenter.find((iteratedValue) =>{
            if(iteratedValue.division === currentDivision && iteratedValue.costCenterCode === divisionCostCentreCode && iteratedValue.companyDivisionCostCenterId !== this.props.editedDivisionCostCentre.companyDivisionCostCenterId){
                return true;
            }
        });
        // const isDuplicateCostCentreCode = this.props.companyDivisionCostCenter && this.props.companyDivisionCostCenter.find((iteratedValue) =>{
        //     if(iteratedValue.payrollType === currentPayrollType && NewPayrollPeriodStartDate >= iteratedValue.startDate && NewPayrollPeriodStartDate <= iteratedValue.endDate && iteratedValue.companyPayrollPeriodId !== this.props.editedPairollPeriodName.companyPayrollPeriodId){
        //         return true;
        //     }
        // });

        if(isDuplicateCostCentreCode){
            MaterializeComponent.toast({
                html: 'Division Cost Center Code Exists',
                classes: 'warningToast'
            });
            return false;
        }

        if(isDuplicateName){
            MaterializeComponent.toast({
                html: 'Division Cost Center Name Exists',
                classes: 'warningToast'
            });
            return false;
        }

        // const isDuplicateName = this.props.companyDivisionCostCenter.find((itertedValue)=>{
        //     if((this.props.EditCompanyDivisionCostcentre.costCenterName).toUpperCase() !== divisionCostCentreName.toUpperCase() && (itertedValue.costCenterName).toUpperCase() === divisionCostCentreName.toUpperCase() && itertedValue.costCenterCode === divisionCostCentreCode && itertedValue.division === this.state.SelectedDivisionName){
        //         return true;
        //     }else if((itertedValue.costCenterName).toUpperCase() === divisionCostCentreName.toUpperCase() && itertedValue.costCenterCode !== divisionCostCentreCode && itertedValue.division === this.state.SelectedDivisionName){
        //         this.props.companyDivisionCostCenter.find((itertedCodeValue)=>{
        //             if(itertedCodeValue.costCenterCode === divisionCostCentreCode){
        //                 return true;
        //             }else{
        //                 return false;
        //             }
        //         });
        //     }else if((itertedValue.costCenterName).toUpperCase() !== divisionCostCentreName.toUpperCase() && itertedValue.costCenterCode === divisionCostCentreCode && itertedValue.division === this.state.SelectedDivisionName){
        //         this.props.companyDivisionCostCenter.find((itertedNameValue)=>{
        //             if(itertedNameValue.costCenterName === divisionCostCentreName){
        //                 return true;
        //             }else{
        //                 return false;
        //             }
        //         });
        //     }

        // });
        // if(isDuplicateName){
        //     MaterializeComponent.toast({
        //         html: 'Record Exists',
        //         classes: 'warningToast'
        //     });
        //     return false;
        // }

        let updatedData;
        if(this.props.editedDivisionCostCentre.recordStatus !== "N"){
            updatedData = {
                oldDataCostcentre:this.props.editedDivisionCostCentre,
                data:{
                    "companyCode": this.props.selectedCompanyCode,
                    "division": this.state.SelectedDivisionName,
                    "costCenterCode": divisionCostCentreCode,
                    "costCenterName": divisionCostCentreName,
                    "recordStatus": "M",                    
                    "modifiedBy": this.props.loginUser
                }
            };
        }else{
            updatedData = {
                oldDataCostcentre:this.props.editedDivisionCostCentre,
                data:{
                    "companyCode": this.props.selectedCompanyCode,
                    "division": this.state.SelectedDivisionName,
                    "costCenterCode": divisionCostCentreCode,
                    "costCenterName": divisionCostCentreName,
                    "recordStatus": "N",                    
                    "modifiedBy": this.props.loginUser
                }
            };
        }
        this.props.actions.UpdateCompanyDivisionCostcentre(updatedData);
        document.getElementById('costCentreModalClose').click();
    }
    deleteDivisionCostCentre = () =>{
        const selectedRecords = this.child.getSelectedRows();
        if (selectedRecords.length > 0)
        {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.DIVISION_COST_CENTRE_MESSAGE,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.deleteSelectedDivisionCostCentre,
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
    deleteSelectedDivisionCostCentre = () => {
        const selectedRecords = this.child.getSelectedRows();
        this.child.removeSelectedRows(selectedRecords); 
        this.props.actions.DeleteCompanyDivisionCostCentre(selectedRecords);      
        this.props.actions.HideModal();
        this.forceUpdate();
    }

    confirmationRejectHandler = () =>{        
        this.props.actions.HideModal();
    }
    editCompanyDivision = (e) =>{
        e.preventDefault();
        document.getElementById("newDivisionName").defaultValue = this.state.selectedDivisionData.divisionName;
        document.getElementById("newInputReference").defaultValue = this.state.selectedDivisionData.divisionAcReference;

        const divisionName = document.getElementById("newDivisionName").value;
        const updatedDivisionName = divisionName;
        const updatedReference = document.getElementById("newInputReference").value;

        const isDuplicate = this.props.companyDivision.find((itertedValue)=>{
            if(itertedValue.divisionAcReference === updatedReference && (itertedValue.divisionName).toUpperCase() === updatedDivisionName.toUpperCase()){
                return true;
            }else if((itertedValue.divisionName).toUpperCase() === updatedDivisionName.toUpperCase() && itertedValue.divisionAcReference !== updatedReference){
                return false;
            }

        });
        if(isDuplicate){
            MaterializeComponent.toast({
                html: 'No Changes Found',
                classes: 'warningToast'
            });
            return false;
        }

        if(updatedDivisionName === ''){
            MaterializeComponent.toast({
                html: 'Please Enter Division Name',
                classes: 'warningToast'
            });
            return false;
        }
        this.setState({ 
            SelectedDivisionName:updatedDivisionName,
            DivisionAcReference:updatedReference 
        });
        let UpdatedCompanyDivisions;
        if(this.state.selectedDivisionData.recordStatus !== "N"){
            UpdatedCompanyDivisions = {
                "oldDivisionName": this.state.selectedDivisionData.divisionName,
                data:{
                    "companyCode": this.props.selectedCompanyCode,
                    "divisionName": updatedDivisionName,
                    "divisionAcReference": updatedReference,
                    "recordStatus": "M"
                }

            };
        }else{
            UpdatedCompanyDivisions = {
                "oldDivisionName": this.state.selectedDivisionData.divisionName,
                data:{
                    "companyCode": this.props.selectedCompanyCode,
                    "divisionName": updatedDivisionName,
                    "divisionAcReference": updatedReference,
                    "recordStatus": "N"
                }

            };
        }
        
        this.props.actions.UpdateCompanyDivision(UpdatedCompanyDivisions);
        document.getElementById('divisionModalClose').click();

    }
    deleteDivision = () => {
        const isChilExists = this.props.companyDivisionCostCenter.find((itertedValue)=>{
            if(itertedValue.recordStatus === "D" && itertedValue.division === this.state.SelectedDivisionName){
                return false;
            }else if(itertedValue.recordStatus !== "D" && itertedValue.division === this.state.SelectedDivisionName){
                return true;
            }
        });
        if(isChilExists){
            MaterializeComponent.toast({
                html: 'Selected Division Has Cost Center associated with it',
                classes: 'warningToast'
            });
            return false;
        }
        const confirmationObject = {
            title: modalTitleConstant.CONFIRMATION,
            message: modalMessageConstant.DIVISION_MESSAGE,
            type: "confirm",
            modalClassName: "warningToast",
            buttons: [ {
                buttonName: "Yes",
                onClickHandler: this.deleteSelectedDivision,
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
    deleteSelectedDivision = () => {
        this.setState({ SelectedDivisionName:"Select",DivisionAcReference:"" });
        this.props.actions.DeleteCompanyDivision(this.state.selectedDivisionData.divisionName); 
        // this.props.actions.FetchDivisionCostCenter();     
        this.props.actions.HideModal();
        document.getElementById('loadedDivision').value ="";
    }
    formReset = () => {
        document.getElementById("newDivisionName").defaultValue = '';
        document.getElementById("newInputReference").defaultValue = '';
    };
    render() {
        const companyDivision = [];
        const companyUpdatedDivision = this.props.companyDivision && this.props.companyDivision.filter((iteratedDivision) => {
           return iteratedDivision.recordStatus !== "D";
        });
        companyUpdatedDivision && companyUpdatedDivision.map((iteratedDivision) => {
            companyDivision.push({ value: iteratedDivision.divisionName });
        });

        const divisionNameArray = [];
        this.props.divisionNames && this.props.divisionNames.map((iteratedValue)=>{
            divisionNameArray.push({ iteratedValue });
        });

        let companyDivisionCostCentre = [];
        companyDivisionCostCentre = this.props.companyDivisionCostCenter && this.props.companyDivisionCostCenter.filter((iteratedValues)=>{
            return iteratedValues.division === this.state.SelectedDivisionName && iteratedValues.recordStatus!== "D";
        });
        const modelData = { ...this.confirmationModalData,isOpen:this.state.isOpen };
        return (      
            <Fragment>
                {/* Add cost center modal */}
                <CustomModal modalData={modelData}/> 
                <div id="createCostcenter" className="modal popup-position">
                    <form id="createCostcenterPopup" className="col s12">
                        <div className="modal-content">
                            <h6>{localConstant.validationMessage.ADD_COST_CENTRE}</h6>                                           
                            <CustomInput
                                hasLabel={true}
                                label={localConstant.companyDetails.division.COST_CENTER_CODE}
                                labelClass="customLabel mandate"
                                divClassName="m6 s12"
                                type='text'
                                inputName='newCostCentreCode'
                                htmlFor="newCostCentreCode"
                                colSize='m6'
                                inputClass="customInputs"
                                required={true}
                                defaultValue={this.props.editedDivisionCostCentre.costCenterCode}
                            />
                            <CustomInput
                                hasLabel={true}
                                type='text'
                                label={localConstant.companyDetails.division.COST_CENTER_NAME}
                                labelClass="customLabel mandate"
                                divClassName="m6 s12"
                                name='newCostCentreName'
                                htmlFor="newCostCentreName"
                                colSize='m6'
                                inputClass="customInputs"
                                required={true}
                                defaultValue={this.props.editedDivisionCostCentre.costCenterName}
                            />                            
                           
                        </div>
                        <div className="modal-footer">
                            <button type="reset" id="costCentreModalClose" className="modal-close waves-effect waves-teal btn-small">Cancel</button>
                            {this.props.isEditCompanyDivisionCostCenterUpdate ?
                                <button onClick={this.UpdateDivisionCostCentre } type="submit" className="waves-effect waves-teal btn-small ml-2">Submit</button>:
                                <button onClick={this.addNewCostCentre} type="submit" className="waves-effect waves-teal btn-small ml-2">Submit</button>
                            }   
                        </div>
                </form>
            </div>
                <div id="create-division" className="modal popup-position">
                    <form id="createDivisionPopup" className="col s12">
                        <div className="modal-content">
                            <h6>{localConstant.validationMessage.CREATE_DIVISION}</h6>
                                {/* <CustomInput
                                    hasLabel={true}
                                    divClassName='col'                                        
                                    labelClass="customLabel mandate"
                                    required={true}
                                    label={localConstant.companyDetails.division.DIVISION}
                                    type='select'
                                    colSize='s6'
                                    disabled={this.props.isEditCompanyDivision?true:false}
                                    className={"browser-default customInputs disable"}
                                    optionsList={this.props.divisionNames?this.props.divisionNames:[]}
                                    optionName='name'
                                    optionValue="name"
                                    id="newDivisionName"
                                /> */}
                            <CustomInput
                                hasLabel={true}
                                label={localConstant.companyDetails.division.DIVISION}
                                divClassName="m6 s12"
                                labelClass="customLabel mandate"
                                type='text'
                                inputName='Division'
                                htmlFor="newDivisionName"
                                colSize='m6'
                                inputClass="customInputs"
                                maxLength="200"
                                required={true}
                            />
                            <CustomInput
                                hasLabel={true}
                                label={localConstant.companyDetails.division.INPUT_REFERENCE}
                                divClassName="m6 s12"
                                type='text'
                                inputName='InputReference'
                                htmlFor="newInputReference"
                                colSize='m6'
                                inputClass="customInputs"
                                required={true}

                            />
                        </div>
                        <div className="modal-footer">
                        {this.props.isEditCompanyDivision?
                        <button onClick={this.editCompanyDivision} className="waves-effect waves-teal btn-small mr-2">Submit</button>:
                        <button onClick={this.addNewDivision} className="waves-effect waves-teal btn-small mr-2">Submit</button>
                        }
                            <button type="reset" onClick={this.formReset} id="divisionModalClose" className="modal-close waves-effect waves-teal btn-small">CANCEL</button>
                            {/* <a onClick={this.updateRow} className="modal-close waves-effect waves-teal btn-flat">UPDATE</a>} */}
                        </div>
                </form>
            </div>
            <div className="genralDetailContainer customCard">
            <div className="row">
                <h6 className="bold left-align col s12 m6">{localConstant.companyDetails.division.DIVISION_COST_CENTER_MARGIN}</h6>
                {/* <div className="right-align danger-txt col s12 m6 pt-2 pr-4">*{localConstant.validationMessage.ALL_FIELDS_ARE_MANDATORY}</div> */}
            </div>
                    <div className="row">
                        <CustomInput
                            hasLabel={true}
                            divClassName='col loadedDivision'
                            label='Division'
                            type='select'
                            colSize='s12 m4'
                            className="browser-default customInputs"
                            optionsList={companyDivision}
                            optionName='value'
                            optionValue="value"
                            id="loadedDivision"
                            onSelectChange={(e)=>this.loadCostCenter(e)}                                                     
                        />
                        <div className="col s12 m3">
                            <a href="#create-division" onClick={this.handleCreateDivision} className="modal-trigger link customCreateDiv">+{localConstant.companyDetails.division.ASSIGN_DIVISION + " | "}</a>
                            <a href="#create-division" onClick={this.handleEditDivision} disabled={ this.state.SelectedDivisionName === "select" || this.state.SelectedDivisionName === "Select" || this.state.SelectedDivisionName === ""?true:false } className="link editTxtColor modal-trigger customCreateDiv">{localConstant.companyDetails.common.EDIT + " | "}</a>
                            <a className="link danger-txt modal-trigger customCreateDiv" href="#confirmation_Modal" onClick={this.deleteDivision} disabled={ this.state.SelectedDivisionName === "select" || this.state.SelectedDivisionName === "Select" || this.state.SelectedDivisionName === ""?true:false }>{localConstant.companyDetails.common.DELTE}</a>
                        </div>
                    </div>
                    <div className="row mb-0">
                        <LabelwithValue
                            colSize="s3"
                            label="Account Referrence :"
                            value={this.state.DivisionAcReference} />
                        <div className="pt-3 pl-3 pr-3 pb-0">
                            <CardPanel className="white lighten-4 black-text" colSize="s12">
                                <ReactGrid gridRowData={companyDivisionCostCentre} gridColData={headData} onRef={ref => { this.child = ref; }}/>
                            </CardPanel>
                        </div>
                    </div>

                    <div className="right-align mr-3 mb-2">
                        <a href="#createCostcenter" onClick={this.handleNewDivisionCostCentre} className="modal-trigger btn-small" disabled={ this.state.SelectedDivisionName === "select" || this.state.SelectedDivisionName === "Select" || this.state.SelectedDivisionName === ""?true:false }>{localConstant.companyDetails.division.ADD_COST_CENTRE}</a>
                        <a href="#confirmation_Modal" onClick={this.deleteDivisionCostCentre} className="ml-2 btn-small modal-trigger" disabled={ this.state.SelectedDivisionName === "select" || this.state.SelectedDivisionName === "Select" || this.state.SelectedDivisionName === ""?true:false }>{localConstant.companyDetails.common.DELTE}</a>    
                    </div>
            </div>
            </Fragment>

        );
    }
}

export default DivisionCostCenterMargin;