import CompanyDetails from './companyDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCompanyDetails, FetchCountry, CompanyFetchVatPrefix,FetchTaxData,SaveCompanyDetails  } from '../../company/companyAction';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';
import { FetchDivisionName,FetchExportPrefixes } from '../../../appLayout/appLayoutActions';

const mapStateToProps = (state) => {
    return {
        companyDetail: state.CompanyReducer.companyDetail.CompanyInfo,
        isbtnDisable:state.CompanyReducer.isbtnDisable,
        loader: state.CustomerReducer.Loader,
        companyUpdatedStatus:state.CompanyReducer.companyUpdated,
        isOpen:state.CustomModalReducer.isOpen,
        selectedCompany: state.CompanyReducer.selectedCompanyCode   // D-55
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchCompanyDetails,
                FetchCountry,
                CompanyFetchVatPrefix,
                SaveCompanyDetails,
                DisplayModal,
                HideModal,
                FetchTaxData,
                FetchDivisionName,
                FetchExportPrefixes
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);