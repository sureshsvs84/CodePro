import CompanyList from './companyList';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCompanyList,UpdateSelectedCompany } from '../appLayout/appLayoutActions';
import { withRouter } from 'react-router-dom';
import {
    Dashboardrefresh,
    FetchDashboardCount
} from '../viewComponents/dashboard/dahboardActions';

const mapStateToProps = (state) => {
    return {
        companyList:state.appLayoutReducer.companyList,
        selectedCompany:state.appLayoutReducer.selectedCompany
    };
};

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
            FetchCompanyList,
            UpdateSelectedCompany,
            Dashboardrefresh,
            FetchDashboardCount
        }, 
        dispatch
      ),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CompanyList));