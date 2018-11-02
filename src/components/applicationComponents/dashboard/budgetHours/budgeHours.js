import React,{ Component,Fragment } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import HeaderData from './headerData.json';
import PropTypes from 'proptypes';

class BudgeHours extends Component{
    render(){   
        let rowData;
        const headData = HeaderData;
        return(
            <ReactGrid gridRowData={rowData} gridColData={headData} />
        );
    }
}
BudgeHours.prototypes = {
    headData:PropTypes.array.isrequired,
    rowData:PropTypes.array.isrequired
};
BudgeHours.defaultprops ={
    headData:[],
    rowData:[]
};
export default BudgeHours;