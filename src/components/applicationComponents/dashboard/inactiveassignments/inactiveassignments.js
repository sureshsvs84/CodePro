import React,{ Component } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import { headerData } from './inactiveHeader';
import PropTypes from 'proptypes';

class Inactiveassignments extends Component{
            componentDidMount() {
                const companyName = this.props.selectedCompany;
                this.props.actions.FetchInActiveAssignments(companyName);                 
            }
            render(){   
                this.props.inactiveAssignmentData && this.props.inactiveAssignmentData.map(inactiveAssignment => {                   
                        
                        const technicalSpecialists = [];
                        if(Array.isArray(inactiveAssignment.techSpecialists) && inactiveAssignment.techSpecialists.length>0){
                            inactiveAssignment.techSpecialists.map((iterated)=>{                        
                                technicalSpecialists.push(iterated.fullName);
                            });
                            inactiveAssignment.techSpecialists = (technicalSpecialists).join(',');
                        }
                });
                // const rowData = this.props.inactiveAssignmentData && (this.props.inactiveAssignmentData).filter(result=>{
                // const lastVisitDate = new Date(result.lastVisitDate);
                // const differDate = Math.ceil((new Date() - lastVisitDate)/(1000 * 3600 * 24));
                //     if(differDate>90){                     
                //         return result;
                //     }
                // }); 
                return(
                    <ReactGrid gridRowData={this.props.inactiveAssignmentData} gridColData={headerData} />
                );
            } 
}

Inactiveassignments.prototypes = {
    headData:PropTypes.array.isrequired,
    inactiveAssignmentData:PropTypes.array.isrequired
};
Inactiveassignments.defaultprops ={
    headData:[],
    inactiveAssignmentData:null
};

export default Inactiveassignments;