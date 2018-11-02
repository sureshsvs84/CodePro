import React, { Component, Fragment } from 'react';
// import VerticalTab from '../../baseComponents/verticalTab';
// import contractTabDetails from './tabDetail.json';
//import { ContractsSearchRoutes } from '../../../routes/mainRoutes';
import ContractList from '../../../components/viewComponents/contracts/contractList';

class Contract extends Component {

    render() {
        return (
            <Fragment >
                <ContractList />
            </Fragment>
        );
    }
}

export default Contract;