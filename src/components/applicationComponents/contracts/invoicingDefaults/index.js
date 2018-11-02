import InvoicingDefaults from './invoicingDefaults';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DisplayModal, HideModal } from '../../../baseComponents/customModal/customModalAction';
import {
    FetchInvoicingDefaults,
    FetchDefaultInvoiceReferences,
    FetchDefaultInvoiceAttachmentTypes,
    FetchReferenceType,
    FetchDocumentTypeMasterData,
    InvoiceAttachmentTypesModalState,
    InvoiceAttachmentTypesEditCheck,
    InvoiceReferenceModalState,
    InvoiceReferenceEditCheck,
    AddNewInvoiceDefault,
    DeleteInvoiceDefault,
    AddAttachmentTypes,
    DeleteAttachmentTypes,
} from '../../../../actions/contracts/invoicingDefaultsAction';

const mapStateToProps = (state) => {
    return {
        customerContractContact: state.ContractInvoicingDefaults.customerContractContact,
        salesTax: state.ContractInvoicingDefaults.salesTax,
        withHoldingTax: state.ContractInvoicingDefaults.withHoldingTax,
        invoicePaymentTerms: state.ContractInvoicingDefaults.invoicePaymentTerms,
        customerContractAddress: state.ContractInvoicingDefaults.customerContractAddress,
        invoiceCurrency: state.ContractInvoicingDefaults.invoiceCurrency,
        invoiceGrouping: state.ContractInvoicingDefaults.invoiceGrouping,
        invoiceRemittanceText: state.ContractInvoicingDefaults.invoiceRemittanceText,
        invoiceFooter: state.ContractInvoicingDefaults.invoiceFooter,
        defaultInvoiceRefernces: state.ContractInvoicingDefaults.defaultInvoiceRefernces === null ? [] : state.ContractInvoicingDefaults.defaultInvoiceRefernces,
        defaultInvoiceAttachmentTypes: state.ContractInvoicingDefaults.defaultInvoiceAttachmentTypes === null ? [] : state.ContractInvoicingDefaults.defaultInvoiceAttachmentTypes,
        referenceType: state.ContractInvoicingDefaults.referenceType,
        showButton: state.ContractInvoicingDefaults.showButton,
        loggedInUser: state.appLayoutReducer.loginUser,
        selectedCustomerCode: state.ContractInvoicingDefaults.selectedCustomerCode,
        isInvoiceReferenceModalOpen: state.ContractInvoicingDefaults.isInvoiceReferenceModalOpen,
        isInvoiceReferenceEdit: state.ContractInvoicingDefaults.isInvoiceReferenceEdit,
        isInvoiceAttachmentTypesModalOpen: state.ContractInvoicingDefaults.isInvoiceAttachmentTypesModalOpen,
        isInvoiceAttachmentTypesEdit: state.ContractInvoicingDefaults.isInvoiceAttachmentTypesEdit,
        contractDocumentTypeMasterData: state.ContractInvoicingDefaults.contractDocumentTypeMasterData,
        //interactionMode:state.RootContractReducer.ContractReducer.interactionMode,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchInvoicingDefaults,
                FetchDefaultInvoiceReferences,
                FetchDefaultInvoiceAttachmentTypes,
                FetchReferenceType,
                FetchDocumentTypeMasterData,
                InvoiceReferenceModalState,
                InvoiceReferenceEditCheck,
                InvoiceAttachmentTypesModalState,
                InvoiceAttachmentTypesEditCheck,
                AddNewInvoiceDefault,
                DeleteInvoiceDefault,
                AddAttachmentTypes,
                DeleteAttachmentTypes,
                DisplayModal,
                HideModal,
                              
            },
            dispatch
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(InvoicingDefaults);