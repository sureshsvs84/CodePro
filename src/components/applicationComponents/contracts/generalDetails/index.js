import GeneralDetails from './generalDetails';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FetchCountry } from '../../../viewComponents/company/companyAction';
import { UpdateInteractionMode } from '../../../../actions/contracts/contractAction';
import { FetchCompanyOffices } from '../../../../actions/contracts/generalDetailsAction';
import { IfCRMYes, IfCRMNo, IfCRMSelect, CustomerShowModal, CustomerHideModal, FetchData, FetchCurrency, FetchCustomerList } from '../../../../components/viewComponents/contracts/contractAction';

const mapStateToProps = (state) => {

  return {
    CustomerCodeInCRM: state.ContractReducer.CustomerCodeInCRM,
    isShowModal: state.ContractReducer.isShowModal,
    countryMasterData: state.CompanyReducer.countryMasterData,
    contractTypeData: state.ContractReducer.contractTypeData,
    currencyData: state.ContractReducer.currencyData,
    customerList: state.ContractReducer.customerList,
    selectedCompany: state.appLayoutReducer.selectedCompany,

    //new structure
    companyOffices:state.RootContractReducer.GeneralDetailReducer.companyOffices

  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        IfCRMYes,
        IfCRMNo,
        IfCRMSelect,
        CustomerShowModal,
        CustomerHideModal,
        FetchCountry,
        FetchData,
        FetchCurrency,
        FetchCustomerList,
        UpdateInteractionMode,
        FetchCompanyOffices
      },
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GeneralDetails));