import RateSchedule from './rateSchedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateChargeType,AddChargeType,UpdateRateSchedule,EditRateSchedule,AddRateSchedule,RateScheduleEditCheck,ChargeTypeEditCheck,RateScheduleModalState,ChargeTypeModalState,FetchRateSchedule } from '../../../../actions/contracts/rateScheduleAction';

const mapStateToProps = (state) => {
    return {
        isRateScheduleEdit:state.RootContractReducer.RateScheduleReducer.isRateScheduleEdit,
        isChargeTypeEdit:state.RootContractReducer.RateScheduleReducer.isChargeTypeEdit,
        isRateScheduleModalOpen:state.RootContractReducer.RateScheduleReducer.isRateScheduleOpen,
        isChargeTypeModalOpen:state.RootContractReducer.RateScheduleReducer.isChargeTypeOpen,
        rateSchedule:state.RootContractReducer.RateScheduleReducer.rateSchedule,
        chargeTypes:state.RootContractReducer.RateScheduleReducer.chargeTypes,
        currency:state.appLayoutReducer.currency,
        rateScheduleEditData: state.RootContractReducer.RateScheduleReducer.rateScheduleEditData,
        chargeTypeEditData: state.RootContractReducer.RateScheduleReducer.chargeTypeEditData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {          
                RateScheduleEditCheck,      
                ChargeTypeEditCheck,
                RateScheduleModalState,
                ChargeTypeModalState,
                FetchRateSchedule,
                AddRateSchedule,
                EditRateSchedule,
                UpdateRateSchedule,
                AddChargeType,
                UpdateChargeType
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RateSchedule);