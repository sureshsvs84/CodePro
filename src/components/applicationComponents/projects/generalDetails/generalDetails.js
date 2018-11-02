import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { apiConfig } from '../../../../apiConfig/apiConfig';
import HeaderData from './headerData.json';
import ReactGrid from '../../../baseComponents/reactAgGrid';

class GeneralDetails extends Component {
    state ={
        isActive:false
    }
    isActiveToggle = (evnet) =>{
        this.setState({ isActive:!this.state.isActive });
       
    }   
    render() {
        const className = this.state.isActive ? 'show' : 'hide';
        const { customerGeneralData, customerGeneralAddressData, customerGeneralContactData } = this.props;
        const { showButton } = this.props;
        return (
            <Fragment>
                <div className="customerBlock">
                    <div className="genralDetailContainer customCard">
                        <p className="m-1  pl-3 pr-3 bold">General Details</p>
                        <div className="BadgeOutLine ml-4 pl-3">
                        <div className="row">
                        <div className="custom-Badge col s3">Customer name : A & P Tools</div>
                        <div className="custom-Badge col s3">Customer Code : A 093456</div>
                        <div className="custom-Badge col s3">Contact Number : 789543</div>
                        <div className="custom-Badge col s3">Project Number : 6253453</div>
                        </div>
                        </div>
                        <div className="customCard ml-4 mr-4 pl-3">
                            <div className="row">
                                <div className="custom-card col s6">
                                    <label className="customLabel">Customer Project Number </label>
                                    <input type="text" className="browser-default customInputs" name="customerProjectNumber" />

                                    <label className="customLabel">Customer Project Name </label>
                                    <input type="text" className="browser-default customInputs" name="customerProjectName" />

                                    <label className="customLabel">Workflow Type </label>
                                    <select className="customInputs browser-default" name="workflowType">
                                        <option value="select" >select</option>
                                        <option value="">Workflow Type option1</option>
                                        <option value="">Workflow Type option2</option>
                                    </select>

                                    <label className="customLabel">Indus Sector </label>
                                    <select className="customInputs browser-default" name="indusSector">
                                        <option value="select" >select</option>
                                        <option value="">Indus Sector option1</option>
                                        <option value="">Indus Sector option2</option>
                                    </select>

                                     <label>
                                                <input type="checkbox" className="filled-in " />
                                                <span>Client Extranet Summary Report</span>
                                            </label>
                                </div>

                                <div className=" custom-card col s6">
                                    <label className="customLabel">Cost Centre </label>
                                    <select className="customInputs browser-default" name="costCentre">
                                        <option value="select">select</option>
                                        <option value="">Cost Centre option1</option>
                                        <option value="">Cost Centre option2</option>
                                    </select>

                                    <label className="customLabel">Office </label>
                                    <select className="customInputs browser-default" name="office">
                                        <option value="select">select</option>
                                        <option value="">Office option1</option>
                                        <option value="">Office option2</option>
                                    </select>
                                  
                                            <label className="customLabel">Division</label><br />
                                            <select className="customInputs browser-default" name="division">
                                        <option value="select">select</option>
                                        <option value="">Division option1</option>
                                        <option value="">Division option2</option>
                                    </select>
                                        
                                            <label className="customLabel mr-2 ">Business Unit </label>
                                            <select className="customInputs browser-default" name="businessUnit">
                                        <option value="select">select</option>
                                        <option value="">Business Unit option1</option>
                                        <option value="">Business Unit option2</option>
                                    </select>
                                    <label>
                                                <input type="checkbox" className="filled-in " />
                                                <span>Project Is For New Facility</span>
                                            </label>
                                    </div>
                                </div>
                            </div>

                        <p className=" pl-4 pr-4 bold">Coordinator</p>
                        <div className="customCard ml-4 mr-4 pl-3">
                            <div className="row">
                                <div className="custom-card  col s6">
                                  
                                    <label className="customLabel">Coordinator </label>
                                    <select className="customInputs browser-default" name="coordinator">
                                        <option value="select" >select</option>
                                        <option value="">Coordinator option1</option>
                                        <option value="">Coordinator option2</option>
                                    </select>
                                </div>

                                <div className="custom-card  col s6 pt-2">
                                <br/>
                               
                                <label className="customLabel">
                                         <input type="checkbox" className="filled-in" onClick={this.isActiveToggle} />
                                         <span>Managed Services</span>
                                </label>
                               
                                <div className={className}>
                                <label className="customLabel">Types Of Service </label>
                                <select className="customInputs browser-default" name="customerProjectNumber">
                                        <option value="select" >select</option>
                                        <option value="">customer Project Number option1</option>
                                        <option value="">customer Project Number option2</option>
                                    </select>
                                    <label className="customLabel">Coordinator / Manager </label>
                                    <select className="customInputs browser-default" name="customerProjectName">
                                        <option value="select" >select</option>
                                        <option value="">customer Project Name option1</option>
                                        <option value="">customer Project Name option2</option>
                                    </select>
                                    </div>
                                   
                              </div>
                            </div>
                        </div>

                        <p className="pl-4 pr-4 bold">Budget Monitary</p>
                        <div className="BadgeOutLine ml-4 pl-3">
                        <div className="row">
                        <div className="custom-Badge col s3 pt-2">Currency USD : </div>
                        <div className="custom-Badge col s3"><div>Invoiced To Date Excl Tax : 200.00 USD</div><div>Uninvoiced To Date Excl Tax : 0.00</div></div>
                        <div className="custom-Badge col s3"><div>Invoiced To Date : 150.00 USD</div><div>Uninvoiced To Date : 0.00</div></div>
                        <div className="custom-Badge col s3"><div>Remaining Budget : 110.00 USD</div><div>Remaining Hours : 0.00</div></div>
                        </div>
                        </div>
                        <div className="customCard ml-4 mr-4 pl-3">
                            <div className="row">
                                <div className="custom-card ">
                                    <div className="col s4">
                                        <label className="customLabel zmdi zmdi-calendar"> Budget Value</label><br />
                                        <input type="text" className="datepicker ml-3 browser-default customInputs" name="budgetValue" />
                                    </div>
                                    <div className="col s2">
                                        <label className="customLabel "> Budget Warning % </label><br />
                                        <input type="text" className="browser-default customInputs" name="budgetWarning" />       
                                    </div>
                                    <div className="col s4">
                                        <label className="customLabel "> Hours Unit </label><br />
                                        <input type="text" className="browser-default customInputs" name="hoursUnit" />       
                                    </div>
                                    <div className="col s2">
                                        <label className="customLabel "> Hours Warning % </label><br />
                                        <input type="text" className="browser-default customInputs" name="hoursWarning" />       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </Fragment >
        );
    }
}

export default GeneralDetails;