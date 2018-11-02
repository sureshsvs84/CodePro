import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';

class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDashboard: true
        };
    }
    componentWillMount() {
        this.props.actions.FetchCompanyList();
    }
    updateSelectedCompany = (e) => {
        this.props.actions.UpdateSelectedCompany(e.target.value);
        this.props.actions.Dashboardrefresh(this.props.history.location.pathname);
        this.props.actions.FetchDashboardCount();
    }
    render() {
        let companyDetails = this.props.companyList;
        if (Array.isArray(companyDetails) && (this.props.companyList).length > 0) {
            companyDetails = (this.props.companyList).sort((a, b) => {
                return (a.companyName < b.companyName) ? -1 : (a.companyName > b.companyName) ? 1 : 0;
            });
        }

        this.props.history.listen((location, action) => {
            const isDashboard = (location.pathname).includes("dashboard");
            this.setState({ isDashboard: isDashboard });
        });

        return (
            <Fragment>
                <select className="browser-default" onChange={(e) => this.updateSelectedCompany(e)} disabled={this.state.isDashboard ? false : true}>
                    {Array.isArray(companyDetails) ? (
                        (companyDetails).map(
                            (iteratedAttraction, i) =>
                                <option className='attactions'
                                    value={iteratedAttraction.companyCode}
                                    selected={iteratedAttraction.companyCode === this.props.selectedCompany ? true : false}
                                    key={iteratedAttraction.companyCode}
                                    name={iteratedAttraction.companyName}>
                                    {iteratedAttraction.companyName}
                                </option>
                                
                        )) : (MaterializeComponent.toast({
                            html: 'CompanyDetails api is down..., Try after sometime',
                            classes: 'warningToast'
                        }))
                    }
                </select>
            </Fragment>
            );
    }
}

export default CompanyList;