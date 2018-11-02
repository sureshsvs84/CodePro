import Modal from './modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showModalPopup, hideModalPopup } from './modalAction';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
         showModal:state.ModalReducer.showModal
    };
}; 
const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {          
            showModalPopup,
            hideModalPopup
        }, 
        dispatch
      ),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Modal));
