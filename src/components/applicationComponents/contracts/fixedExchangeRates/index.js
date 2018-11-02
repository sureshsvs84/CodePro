import FixedExchangeRates from './fixedExchangeRates';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AboutShowModal, AboutHideModal, HideCheckBox, DeleteFixedExchangeRate, UpdateFixedExchangeRate,FetchContractFixedRate, FetchCurrency, EditFixedExchangeRate, AddFixedExchangeRate } from '../../../viewComponents/contracts/contractAction';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {

  return {
    enableButton: state.ContractReducer.enableButton,
    showButton: state.ContractReducer.showButton,
    ContractFixedRate: state.ContractReducer.ContractFixedRate,
    editFixedExchangeDetails: state.ContractReducer.editFixedExchangeDetails,
    currencyData: state.ContractReducer.currencyData,
    chechBoxHideButton: state.ContractReducer.chechBoxHideButton,
    loggedInUser: state.appLayoutReducer.loginUser

  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {

        AboutShowModal,
        AboutHideModal,
        FetchContractFixedRate,
        AddFixedExchangeRate,
        DeleteFixedExchangeRate,
        EditFixedExchangeRate,
        UpdateFixedExchangeRate,
        DisplayModal,
        HideModal,
        HideCheckBox,
        FetchCurrency,
      
      },
      dispatch

    )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FixedExchangeRates));
