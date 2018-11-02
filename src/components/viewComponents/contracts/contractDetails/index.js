import ContractDetails from './contractDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { SaveCustomerDetails, FetchCustomerDetail, SetLoader } from '../customerAction';
// import { FetchCity, FetchCountry, FetchState, FetchSalutation, FetchVatPrefix } from '../../company/companyAction';
// import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';
// import { showHidePanel, AboutShowCustomer, AboutHideCustomer } from '../contractAction';

const mapStateToProps = (state) => {
    return {
        // cutomerSave: state.CustomerReducer.customerSave,
        // customerDetailData: state.CustomerReducer.customerDetail.Detail,
        // loader: state.CustomerReducer.Loader,
        // customerUpdatedStatus:state.CustomerReducer.customerUpdated,
        // isbtnDisable:state.CustomerReducer.isbtnDisable,
        isOpen:state.ContractReducer.isOpen
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractDetails);