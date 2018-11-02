import React, { Fragment, Component } from 'react';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import { HeaderData } from './headerData.js';
import PropTypes from 'proptypes';
import CardPanel from '../../../baseComponents/cardPanel';
import { getlocalizeData } from '../../../../utils/commonUtils';

const localConstant = getlocalizeData();
class Project extends Component {

    render() {
        const { contractprojectDetail } = this.props;
        return (
            <Fragment>
                <div className="customerBlock">
                    <div className="genralDetailContainer customCard">
                        <p className="pl-3 pr-3 bold">Projects</p>
                        <div className="customCard ">
                            <ReactGrid  gridColData={HeaderData} gridRowData={contractprojectDetail} />
                        </div>
                    </div >
                </div>
            </Fragment >
        );
    }
}

Project.propTypes = {
    ProjectDetails: PropTypes.array.isRequired,

};

Project.defaultprops = {
    ProjectDetails: [],

};

export default Project;