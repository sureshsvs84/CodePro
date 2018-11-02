import React,{ Component,Fragment } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import { HeaderData } from './headerData.js';
import PropTypes from 'proptypes';
import MaterializeComponent from 'materialize-css';
import LabelwithValue from '../../../baseComponents/customLabelwithValue';
import CustomInput from '../../../baseComponents/inputControlls';
import { getlocalizeData } from '../../../../utils/commonUtils';
import { modalMessageConstant, modalTitleConstant } from '../../../../constants/modalConstants';
const localConstant = getlocalizeData();

class DocumentAproval extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChangeModule:false
        };
    }
    componentDidMount(){
        const elems = document.querySelectorAll('.modal');
        const instances = MaterializeComponent.Modal.init(elems, { dismissible: false });
        this.props.actions.FetchDocumentApproval();
    }
    changeModule = () => {
        this.setState({
            isChangeModule:true
        });
    }
    cancelApprove = () => {
        this.setState({
            isChangeModule:false
        });
    }
  
    render(){   
        const rowData = this.props.documentApprovalGridData;
        const headData = HeaderData;
           
        return(
            <Fragment>
                {/* Reject Modal */}
                <div id="RejectDocument" className="modal popup-position">
                    <form className="col s12">
                        <div className="modal-content pb-0">
                            <div className="row mb-0">
                                <h6>{localConstant.modalConstant.REJECT_DOCUMENT}</h6>
                                <p> {modalMessageConstant.DOCUMENT_APPROVAL_DELETE_MESSAGE}</p>
                            </div>
                        </div>
                        <div className="modal-footer col s12">
                            <button type="reset"  className="modal-close waves-effect waves-teal btn-small ml-2">{localConstant.commonConstants.CLOSE}</button>
                        </div>
                    </form>
                </div>
                {/* Aprove Modal */}
                <div id="approveDocument" className="modal popup-position">
                    <form className="col s12">
                        <div className="modal-content pb-0">
                            <div className="row mb-0">
                                <h6>{localConstant.modalConstant.APPROVE_DOCUMENT}</h6>
                                <div className="col s12 m6">
                                    <LabelwithValue
                                    colSize="s12 line-h-2"
                                    label ={localConstant.modalConstant.FILE_NAME}
                                    value="sample.jpg" />
                                     <LabelwithValue
                                    colSize="s12 line-h-2"
                                    label={localConstant.modalConstant.SIZE}
                                    value="sample.jpg" />
                                     <LabelwithValue
                                    colSize="s12 line-h-2"
                                    label={localConstant.modalConstant.DOCUMENT_TYPE}
                                    value="sample.jpg" />
                                     <LabelwithValue
                                    colSize="s12 line-h-2"
                                    label={localConstant.modalConstant.CUSTOMER}
                                    value="sample.jpg" />
                                    {
                                        this.state.isChangeModule ?
                                        <Fragment>
                                            <LabelwithValue
                                            colSize="s12"
                                            label={localConstant.modalConstant.UPLOADED_BY}
                                            value="sample.jpg" />
                                            <LabelwithValue
                                            colSize="s12"
                                            label={localConstant.modalConstant.UPLOADED_DATE}
                                            value="sample.jpg" />
                                            <LabelwithValue
                                            colSize="s12"
                                            label={localConstant.modalConstant.ENTITY}
                                            value="sample.jpg" />
                                        </Fragment>:null
                                    }
                                </div>
                                <div className="col s12 m6 leftBorder">   
                                    {
                                        !this.state.isChangeModule ?
                                        <Fragment>
                                             <LabelwithValue
                                                colSize="s11 line-h-2"
                                                label={localConstant.modalConstant.MODULE}
                                                value="sample.jpg" />
                                                <span className="link" onClick={this.changeModule}><i class="zmdi zmdi-edit"></i></span>
                                                <LabelwithValue
                                                colSize="s12 line-h-2"
                                                label={localConstant.modalConstant.UPLOADED_BY}
                                                value="sample.jpg" />
                                                <LabelwithValue
                                                colSize="s12 line-h-2"
                                                label={localConstant.modalConstant.UPLOADED_DATE}
                                                value="sample.jpg" />
                                                <LabelwithValue
                                                colSize="s12 line-h-2"
                                                label={localConstant.modalConstant.ENTITY}
                                                value="sample.jpg" />
                                        </Fragment>:null
                                    }  
                                    {
                                        this.state.isChangeModule ?
                                       <Fragment>
                                        <CustomInput
                                        hasLabel={true}
                                        label={localConstant.modalConstant.MODULE}
                                        labelClass="customLabel mandate"
                                        type='select'
                                        optionsList={[ { value: "option 1" },{ value: "option 2" } ]}
                                        optionName='value'
                                        optionValue="value"
                                        inputName='newPayrollPeriodName'
                                        colSize='m12 s12'
                                        inputClass="customInputs browser" />

                                         <CustomInput
                                        hasLabel={true}
                                        label={localConstant.modalConstant.CONTRACT_NUMBER}
                                        labelClass="customLabel mandate"
                                        type='select'
                                        optionsList={[ { value: "option 1" },{ value: "option 2" } ]}
                                        optionName='value'
                                        optionValue="value"
                                        inputName='newPayrollPeriodName'
                                        colSize='m12 s12'
                                        inputClass="customInputs browser" />

                                         <CustomInput
                                        hasLabel={true}
                                        label={localConstant.modalConstant.PROJECT_NUMBER}
                                        labelClass="customLabel mandate"
                                        type='select'
                                        optionsList={[ { value: "option 1" },{ value: "option 2" } ]}
                                        optionName='value'
                                        optionValue="value"
                                        inputName='newPayrollPeriodName'
                                        colSize='m12 s12'
                                        inputClass="customInputs browser" />

                                         <CustomInput
                                        hasLabel={true}
                                        label={localConstant.modalConstant.ASSIGNMENT_NUMBER}
                                        labelClass="customLabel mandate"
                                        type='select'
                                        optionsList={[ { value: "option 1" },{ value: "option 2" } ]}
                                        optionName='value'
                                        optionValue="value"
                                        inputName='newPayrollPeriodName'
                                        colSize='m12 s12'
                                        inputClass="customInputs browser" />

                                       </Fragment>:null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer col s12">
                            {
                                this.state.isChangeModule ?
                                <button type="button" onClick={this.cancelApprove} className="waves-effect waves-teal btn-small">{localConstant.commonConstants.CANCEL}</button>:
                                <button type="button" onClick={this.cancelApprove} className="modal-close waves-effect waves-teal btn-small">{localConstant.commonConstants.CANCEL}</button>                            
                            }
                            <button type="reset" onClick={this.cancelApprove} className="modal-close waves-effect waves-teal btn-small ml-2">{localConstant.commonConstants.APPROVE}</button>
                        </div>
                    </form>
                </div>
                <ReactGrid gridRowData={rowData} gridColData={headData} />
            </Fragment>
            
        );
    }
}
DocumentAproval.prototypes = {
    headData:PropTypes.array.isrequired,
    rowData:PropTypes.array.isrequired
};
DocumentAproval.defaultprops ={
    headData:[],
    rowData:[]
};
export default DocumentAproval;