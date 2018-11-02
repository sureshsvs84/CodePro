import React, { Component } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import { HeaderData } from './timeSheetHeader';
import PropTypes from 'proptypes';

class Timesheet extends Component {
    componentDidMount() {
        this.props.actions.FetchTimesheetPendingAproval();
    }

    render() {
        const headData = HeaderData;
        this.props.timeSheetPendingAproval && this.props.timeSheetPendingAproval.map(timesheet => {
            
                const technicalSpecialists = [];
                if(Array.isArray(timesheet.techSpecialists) && timesheet.techSpecialists.length>0){
                    timesheet.techSpecialists.map((iterated)=>{                        
                        technicalSpecialists.push(iterated.fullName);
                    });
                    timesheet.techSpecialists = (technicalSpecialists).join(',');
                }
        });
               
        return (
            <ReactGrid gridRowData={this.props.timeSheetPendingAproval} gridColData={headData} />
        );
    }
}
Timesheet.prototypes = {
    headData:PropTypes.array.isrequired,
    timeSheetPendingAproval:PropTypes.array.isrequired
};
Timesheet.defaultprops ={
    headData:[],
    timeSheetPendingAproval:null
};
export default Timesheet;