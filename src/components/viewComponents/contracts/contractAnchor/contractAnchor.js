import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import { GetSelectedCustomerName } from '../contractAction';
class ContractAnchor extends Component {     
    selectedRowHandler = () => {                
            this.props.GetSelectedCustomerName(this.props.data.contractCustomerName);
    }

    render() {
        const redirectionURL = "/contractsDetails";
        return (
            <Link to={{ pathname:redirectionURL }} onClick={this.selectedRowHandler}  className="link">{this.props.data.contractCustomerName}</Link>
        );
    }
}

export default connect(null, { GetSelectedCustomerName })(withRouter(ContractAnchor));