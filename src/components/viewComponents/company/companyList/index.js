import CompanyList from './companyList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCompanyDataList, ClearSearchData,FetchCountry,showHidePanel,ClearCompanyDetails } from '../companyAction';

const mapStateToProps = (state) => {
    return {       
        countryMasterData: state.CompanyReducer.countryMasterData,
        companyDataList: state.CompanyReducer.companyDataList,
        isopen: state.CompanyReducer.isopen,   
        isSearch: state.CompanyReducer.isSearch      
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {                
                FetchCountry,   
                FetchCompanyDataList,
                ClearSearchData,
                showHidePanel,
                ClearCompanyDetails       
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
