import ContractList from './contractList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { UpdateInteractionMode } from '../../../../actions/contracts/contractAction';
import { ShowHidePanel,   FetchCountry, FetchCustomerList, FetchCustomerContract, ClearSearchData, OnSubmitCustomerName, CustomerShowModal, CustomerHideModal } from '../contractAction';

const mapStateToProps = (state) => {
    return {
        isopen: state.ContractReducer.isopen,
        isShowModal: state.ContractReducer.isShowModal,
        countryMasterData: state.ContractReducer.countryMasterData,
        customerList: state.ContractReducer.customerList,
        customerContract: state.ContractReducer.customerContract,
        contractCustomerName: state.ContractReducer.contractCustomerName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                ShowHidePanel,
                CustomerShowModal,
                CustomerHideModal,
                FetchCountry,
                FetchCustomerList,
                FetchCustomerContract,
                ClearSearchData,
                OnSubmitCustomerName,
                UpdateInteractionMode
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContractList));