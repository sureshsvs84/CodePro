import ExpectedMarginByBusinessUnit from './expectedMarginByBusinessUnit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCompanyExpectedMargin,ShowButtonHandler,AddExpectedMargin,DeleteExpectedMargin,EditExpectedMargin,UpdateExpectedMargin,FetchBusinessUnit } from '../../../viewComponents/company/companyAction';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';
const mapStateToProps = (state) => {
    return {
        expextedMarginDetail: state.CompanyReducer.companyDetail.CompanyExpectedMargins == null ? [] : state.CompanyReducer.companyDetail.CompanyExpectedMargins,
        editExpectedMarginDetails: state.CompanyReducer.editExpectedMarginDetails,
        showButton: state.CompanyReducer.showButton,
        buisnessUnitMasterData: state.CompanyReducer.buisnessUnitMasterData,
        loggedInUser: state.appLayoutReducer.loginUser,
        gridProps: state.CompanyReducer.gridProps,
    
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                // FetchCompanyExpectedMargin,
                ShowButtonHandler,
                AddExpectedMargin,
                DeleteExpectedMargin,
                EditExpectedMargin,
                UpdateExpectedMargin,
                FetchBusinessUnit,
                DisplayModal,
                HideModal
                     
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpectedMarginByBusinessUnit);