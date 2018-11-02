import GeneralDetails from './generalDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {    
    ShowButtonHandler,
    AddInvoiceRemittance,
    UpdateInvoiceRemittance,
    DeleteInvoiceRemittance,
    AddInvoiceFooter,
    UpdateInvoiceFooter,
    DeleteInvoiceFooter,
    AddUpdateInvoiceDefaults,
    AddUpdateCompanyInfo
} from '../../../viewComponents/company/companyAction';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';
import { showModalPopup,hideModalPopup } from'../../../baseComponents/modal/modalAction';

const mapStateToProps = (state) => {    
    return {
        companyDetail: state.CompanyReducer.companyDetail.CompanyInfo,
        // InvoiceRemittance: state.CompanyReducer.companyDetail.CompanyInvoiceInfo.invoiceRemittances,
        // InvoiceFooter: state.CompanyReducer.companyDetail.CompanyInvoiceInfo.invoiceFooters,
        InvoicingDetails: state.CompanyReducer.companyDetail.CompanyInvoiceInfo,
        editInvoiceRemittance: state.CompanyReducer.editInvoiceRemittance,
        editInvoiceFooter: state.CompanyReducer.editInvoiceFooter,
        loggedInUser: state.appLayoutReducer.loginUser,
        showButton: state.CompanyReducer.showButton,
        companyVatPrefixMasterData: state.CompanyReducer.companyVatPrefixMasterData,
        showModal:state.ModalReducer.showModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                //FetchCompanyDetails,
                //FetchInvoiceRemittance,
                AddInvoiceRemittance,
                UpdateInvoiceRemittance,
                DeleteInvoiceRemittance,
                //FetchInvoiceFooter,
                AddInvoiceFooter,
                UpdateInvoiceFooter,
                DeleteInvoiceFooter,
                ShowButtonHandler,
                DisplayModal,
                HideModal,
                showModalPopup,
                hideModalPopup,
                AddUpdateInvoiceDefaults,
                AddUpdateCompanyInfo
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralDetails);