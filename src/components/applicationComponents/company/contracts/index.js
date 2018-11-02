import Contracts from './contracts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCompanyContract } from '../../../viewComponents/company/companyAction';
import { FetchFilteredContract } from '../../../viewComponents/customer/customerAction';
const mapStateToProps = (state) => {
    return {
        companyContractDetail:state.CompanyReducer.contracts,
		filterdContractDetails:state.CompanyReducer.filteredContracts
    };
};
    const mapDispatchToProps = dispatch => {
        return {
            actions: bindActionCreators(
                {
                    FetchCompanyContract,
                    FetchFilteredContract
                },
                dispatch
            ),
        };
    };
export default connect(mapStateToProps, mapDispatchToProps)(Contracts);