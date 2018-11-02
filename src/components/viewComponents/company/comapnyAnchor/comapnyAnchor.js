import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link,withRouter } from 'react-router-dom';
import { GetSelectedCompanyCode } from '../companyAction';

class CompanyAnchor extends Component {     
    selectedRowHandler = () => {                
            this.props.GetSelectedCompanyCode(this.props.data.companyCode);
    }

    render() {
        const redirectionURL = "/generalDetails";
        return (
            <Link to={{ pathname:this.props.match.url+redirectionURL }} onClick={this.selectedRowHandler}  className="link">{this.props.data.companyCode}</Link>
        );
    }
}

export default connect(null, { GetSelectedCompanyCode })(withRouter(CompanyAnchor));