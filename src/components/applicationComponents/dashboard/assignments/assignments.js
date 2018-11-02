import React,{ Component,Fragment } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import { HeaderData } from './activeAssignmentHeader.js';
import PropTypes from 'proptypes';
class Assignments extends Component{
    componentDidMount() {
        this.props.actions.FetchActiveAssignments();   
    }

    render(){   
        const headData = HeaderData;
        // const rowData = (this.props.assignmentGridData).filter(result=>{
        //     const lastVisitDate = new Date(result.lastVisitDate);
        //     const differDate = Math.ceil((new Date() - lastVisitDate)/(1000 * 3600 * 24));
        //         if(differDate<=90){                   
        //             return result;
        //         }
        //     });
        this.props.assignmentGridData && this.props.assignmentGridData.map(assignment => {    
                const technicalSpecialists = [];
                if(Array.isArray(assignment.techSpecialists) && assignment.techSpecialists.length>0){
                    assignment.techSpecialists.map((iterated)=>{                        
                        technicalSpecialists.push(iterated.fullName);
                    });
                    assignment.techSpecialists = (technicalSpecialists).join(',');
                }
            });
        // const rowData = this.props.assignmentGridData
        return(
            <ReactGrid gridRowData={this.props.assignmentGridData} gridColData={headData} />
        );
    }
}

Assignments.prototypes = {
    headData:PropTypes.array.isrequired,
    rowData:PropTypes.array.isrequired
};
Assignments.defaultprops ={
    headData:[],
    assignmentGridData:null
};

export default Assignments;