import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import { GetSelectedCustomerCode } from '../customerAction';

class CustomerAnchor extends Component {     
    selectedRowHandler = () => {                
            this.props.GetSelectedCustomerCode(this.props.data.customerCode);
    }

    render() {
        const redirectionURL = "/generalDetails";
        return (
            <Link to={{ pathname:this.props.match.url+redirectionURL }} onClick={this.selectedRowHandler}  className="link">{this.props.data.customerCode}</Link>
        );
    }
}

export default connect(null, { GetSelectedCustomerCode })(withRouter(CustomerAnchor));