import React,{ Component,Fragment } from 'react';
import CompanyList from '../companyList';
import MaterializeComponent from 'materialize-css';
import { withRouter } from 'react-router-dom';
import Modal from '../baseComponents/modal';
import AboutEvolution from '../aboutEvolution';
import { getlocalizeData } from '../../utils/commonUtils';
const localConstant = getlocalizeData();
class AppHeader extends Component{
    componentDidMount(){
        const dropdown = document.querySelectorAll('.dropdown-trigger');
        const dropdownInstance = MaterializeComponent.Dropdown.init(dropdown,{ coverTrigger:false });
        const toolTip = document.querySelectorAll('.tooltipped');
        const instancestollTip = MaterializeComponent.Tooltip.init(toolTip);
        const custModal = document.querySelectorAll('.modal');
        const custModalInstances = MaterializeComponent.Modal.init(custModal, { "dismissible": false });
    }
    logOutUser = () =>{
        //To-DO: Need to redirect in handleLogout response
        this.props.history.push('/');
        this.props.actions.handleLogOut();
        this.props.actions.ClearDashboardReducer();
    }
    about=()=>{        
        this.props.actions.AboutShowModal();
    }
    onhandleClickOk=()=>{
        alert('Ok');
    }
    onhandleClickCancel=(e) =>{
        e.preventDefault();
        this.props.actions.AboutHideModal();
    }
    render(){  
          return(             
            <Fragment>
                <ul id="userActions" className="dropdown-content">
                    <li><a className="link" onClick={this.logOutUser}>{localConstant.login.LOG_OUT}</a></li>
                </ul>
                <nav className='customNav'>
                    <div className="nav-wrapper">                    
                    <a href="#" data-target="slide-out" className="menuIcon sidenav-trigger link"><i className="zmdi zmdi-menu"></i></a>
                    <ul className="right navMenus mt-1">
                        <li className='hide-on-med-and-down'>
                            <a className="bold link modal-trigger" onClick={this.about}>{localConstant.header.ABOUT_EVOLUTION}</a>
                        </li>
                        <li className='hide-on-med-and-down'>
                            <a className="bold" href="#!">{localConstant.header.COMPANY}:</a>
                        </li>
                        <li className='hide-on-med-and-down pt-2'>                         
                            <CompanyList selectedCompany={this.props.selectedCompany} />
                        </li>
                        <li className="tooltipped p-relative" data-position="bottom" data-tooltip="Notifications"><a href="#!"><i className="zmdi zmdi-notifications"></i><span className="badge notificationbadge">0</span></a></li>
                        <li className='hide-on-med-and-down userAccountBtn'>
                            <a href="#!" className="white-text dropdown-trigger left" data-target="userActions">
                                <i className="zmdi zmdi-account-circle left"></i>
                                {this.props.loginUser}<i className="zmdi zmdi-chevron-down right">
                                </i>
                            </a>
                        </li>
                    </ul>
                    </div>
                </nav>
                <Modal modalClass="aboutModal" buttons={[ { name:'Cancel', action:this.onhandleClickCancel, showbtn:true } ]} isShowModal={this.props.showModal}>
                    <AboutEvolution/>
                </Modal>
            </Fragment>
        );
    }
}

export default withRouter(AppHeader);