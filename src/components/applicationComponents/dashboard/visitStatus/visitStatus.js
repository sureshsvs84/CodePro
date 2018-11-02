import React,{ Component } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import { headerData } from './visitStatusHeader';
import dateUtil from '../../../../utils/dateUtil';
import PropTypes from 'proptypes';

class VisitStatus extends Component{
    componentDidMount() {
      this.props.actions.FetchVisitStatus();
    }
    render(){   
        const headData = headerData;
        this.props.visitStatusGridData && this.props.visitStatusGridData.map(visit => {
            if (visit.visitStatus === "A")
                visit.visitStatus = "Approved By Contract Holder";
            if (visit.visitStatus === "C")
                visit.visitStatus = "Awaiting Approval";
            if (visit.visitStatus === "J")
                visit.visitStatus = "Rejected By Operator";
            if (visit.visitStatus === "O")
                visit.visitStatus = "Approved By Operator";
            if (visit.visitStatus === "Q")
                visit.visitStatus = "Confirmed - Awaiting Visit";
            if (visit.visitStatus === "R")
                visit.visitStatus = "Rejected By Contract Holder";
            if (visit.visitStatus === "T")
                visit.visitStatus = "Tentative -  Pending Approval";
            if (visit.visitStatus === "U")
                visit.visitStatus = "TBA - Date Unknown";
       
                const technicalSpecialists = [];
                if(Array.isArray(visit.techSpecialists) && visit.techSpecialists.length>0){
                    visit.techSpecialists.map((iterated)=>{                        
                        technicalSpecialists.push(iterated.fullName);
                    });
                    visit.techSpecialists = (technicalSpecialists).join(',');
                }

            }); 
        return(
            <ReactGrid gridRowData={this.props.visitStatusGridData} gridColData={headData} />
        );
    }
}
VisitStatus.prototypes = {
    headData:PropTypes.array.isrequired,
    visitStatusGridData:PropTypes.array.isrequired
};
VisitStatus.defaultprops ={
    headData:[],
    visitStatusGridData:null
};
export default VisitStatus;