import Contracts from './contracts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCustomerContract,FetchFilteredContract } from '../../../viewComponents/customer/customerAction';
const mapStateToProps = (state) => {
    return {
        customerContractDetail:state.CustomerReducer.contracts,
		filterdContractDetails:state.CustomerReducer.filteredContracts
    };
};
    const mapDispatchToProps = dispatch => {
        return {
            actions: bindActionCreators(
                {
                    FetchCustomerContract,
                    FetchFilteredContract
                },
                dispatch
            ),
        };
    };
export default connect(mapStateToProps, mapDispatchToProps)(Contracts);
