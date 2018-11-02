import Project from './project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchContractProjects } from '../../../../actions/contracts/project';
const mapStateToProps = (state) => {
    return {
        contractprojectDetail:state.ProjectReducer.ContractProjects
    };
};
    const mapDispatchToProps = dispatch => {
        return {
            actions: bindActionCreators(
                {
                    FetchContractProjects
                },
                dispatch
            ),
        };
    };
export default connect(mapStateToProps, mapDispatchToProps)(Project);
