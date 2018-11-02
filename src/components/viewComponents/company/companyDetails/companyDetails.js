import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import Menu from '../../../baseComponents/menu';

import CustModal from '../../../baseComponents/customModal';
import { companyTabDetails } from '../companyTabDetails';
import { CompanyRoutes } from '../../../../routes/mainRoutes';
import SaveBar from '../../../applicationComponents/saveBar';
import { modalTitleConstant,modalMessageConstant } from '../../../../constants/modalConstants';
import { AppMainRoutes } from '../../../../routes/routesConfig';  // D-55

class CompanyDetails extends Component {   
    constructor(props) {
        super(props);
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

    componentDidMount(){
        //const CustModal = document.querySelectorAll('.modal');
        //const custModalInstances = MaterializeComponent.Modal.init(CustModal, { "dismissible": false });
        if(this.props.selectedCompany){ // D-55
            this.props.actions.FetchCompanyDetails();
            this.props.actions.FetchCountry();        
            this.props.actions.CompanyFetchVatPrefix();
            // this.props.actions.FetchCurrency();
            this.props.actions.FetchTaxData();
            this.props.actions.FetchDivisionName();
            this.props.actions.FetchExportPrefixes();
        }
        else{
            this.props.history.push(AppMainRoutes.company);
        }   // D-55
    }
    confirmationRejectHandler = () => {       
        this.props.actions.HideModal();
    }
    cancelCompanyChanges = () =>{  
        this.props.actions.FetchCompanyDetails();      
        this.props.actions.HideModal();
    }
    
    companySaveHandler = () => {
        if(this.props.companyUpdatedStatus){
            this.props.actions.SaveCompanyDetails();
        }
    };
    companyCancelHandler = () => {        
        //if(this.props.companyUpdatedStatus){
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.COMPANY_CANCEL_MESSAGE,
                modalClassName: "warningToast",
                type: "confirm",
                buttons: [ {
                    buttonName: "Yes",
                    onClickHandler: this.cancelCompanyChanges,
                    className: "modal-close m-1 btn-small"
                },
                {
                    buttonName: "No",
                    onClickHandler: this.confirmationRejectHandler,
                    className: "modal-close m-1 btn-small"
                } ]
            };           
            this.props.actions.DisplayModal(confirmationObject);
       // }
    };    

    render() {
        const { companyDetail } = this.props;
        const modelData = { ...this.confirmationModalData,isOpen:this.state.isOpen };
        let companyDetailData = [];
        if(companyDetail){
            companyDetailData = companyDetail;
        }
        return (
            <Fragment>
                <div className={!this.props.loader ? 'loaderOverlay' : 'hide'}>
                    <div className={!this.props.loader ? 'loaders middelContainer' : 'hide'}><div></div><div></div><div></div></div>
                </div>
                <SaveBar codeLabel="Company Code:"
                    codeValue={companyDetailData.companyCode}
                    currentMenu="Company:"
                    currentSubMenu="Edit / View Company"
                    saveClick={this.companySaveHandler}
                    cancelClick={this.companyCancelHandler} isbtnDisable={this.props.isbtnDisable}/>
                <div className="row">
                    <div className='col s2 pr-0'>
                        <Menu menulist={companyTabDetails} menuClass="verticalMenu" name='tabHeader' url='tabBodyComponent'></Menu>
                    </div>
                    <div className='col s10 pl-0'>
                        <CompanyRoutes />
                    </div>
                </div>
                {/* <CustModal modalData={modelData} isOpen={this.props.isOpen}></CustModal> */}
               
            </Fragment>
        );
    }
}

export default CompanyDetails;