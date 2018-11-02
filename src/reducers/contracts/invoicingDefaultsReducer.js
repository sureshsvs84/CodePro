import { contractActionTypes } from '../../constants/actionTypes';

const initialState = {
    customerContractContact: [],
    salesTax: [],
    withHoldingTax: [],
    invoicePaymentTerms: [],
    customerContractAddress: [],
    invoiceCurrency: [],
    invoiceGrouping: [],
    invoiceRemittanceText: {},
    invoiceFooter: [],
    defaultInvoiceRefernces: [],
    defaultInvoiceAttachmentTypes: [],
    referenceType: [],
    selectedCustomerCode: "AB00007",
    showButton: false,
    isInvoiceReferenceModalOpen: false,
    isInvoiceReferenceEdit: false,
    isInvoiceAttachmentTypesModalOpen: false,
    isInvoiceAttachmentTypesEdit: false,
    contractDocumentTypeMasterData: []

};

export const ContractInvoicingDefaults = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_CUSTOMER_CONTACT:
            state = {
                ...state,
                customerContractContact: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_SALES_TAX:
            state = {
                ...state,
                salesTax: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_WITHOLDING_TAX:
            state = {
                ...state,
                withHoldingTax: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_INVOICE_PAYMENT_TERMS:
            state = {
                ...state,
                invoicePaymentTerms: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_CUSTOMER_CONTRACT_ADDRESS:
            state = {
                ...state,
                customerContractAddress: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_INVOICE_CURRENCY:
            state = {
                ...state,
                invoiceCurrency: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_INVOICE_GROUPING:
            state = {
                ...state,
                invoiceGrouping: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_INVOICE_REMITTANCE_TEXT:
            state = {
                ...state,
                invoiceRemittanceText: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_INVOICE_FOOTER:
            state = {
                ...state,
                invoiceFooter: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_DEFAULT_INVOICE_REFERENCES:
            state = {
                ...state,
                defaultInvoiceRefernces: data,
            };
            return state;        
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_REFERENCE_TYPE:
            state = {
                ...state,
                referenceType: data,
            };
            return state;        
        case contractActionTypes.invoiceDefaultActionTypes.ADD_NEW_INVOICE_DEFAULT:
            state = {
                ...state,
                defaultInvoiceRefernces: [ ...state.defaultInvoiceRefernces, data ]
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.DELETE_INVOICE_DEFAULT:
            let newState = Object.assign([], state.defaultInvoiceRefernces);
            data.map(row => {
                newState.map(defaultInvoice => {
                    if (defaultInvoice.displayOrder === row.displayOrder) {
                        const index = newState.findIndex(value => (value.displayOrder === row.displayOrder));
                        if (row.recordStatus !== "N") {
                            newState[index].recordStatus = "D";
                        }
                        else {
                            newState.splice(index, 1);
                        }
                    }
                });
            });
            state = {
                ...state,
                defaultInvoiceRefernces: newState,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.SHOW_DEFAULT_INVOICE_ATTACHMENT_TYPES:
            state = {
                ...state,
                defaultInvoiceAttachmentTypes: data,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.ADD_ATTACHMENT_TYPES:
            state = {
                ...state,
                defaultInvoiceAttachmentTypes: [ ...state.defaultInvoiceAttachmentTypes, data ]
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.DELETE_ATTACHMENT_TYPES:
            newState = Object.assign([], state.defaultInvoiceAttachmentTypes);
            data.map(row => {
                newState.map(attachment => {
                    if (attachment.documentType === row.documentType) {
                        const index = newState.findIndex(value => (value.documentType === row.documentType));
                        if (row.recordStatus !== "N") {
                            newState[index].recordStatus = "D";
                        }
                        else {
                            newState.splice(index, 1);
                        }
                    }
                });
            });
            state = {
                ...state,
                defaultInvoiceAttachmentTypes: newState,
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.IS_INVOICE_REFERENCE_MODAL_OPEN:
            state = {
                ...state,
                isInvoiceReferenceModalOpen: data
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.IS_INVOICE_REFERENCE_EDIT:
            state = {
                ...state,
                isInvoiceReferenceEdit: data
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.CONTRACT_DOCUMENT_TYPE_MASTER:
            state = {
                ...state,
                contractDocumentTypeMasterData: data
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.IS_INVOICE_ATTACHMENT_TYPES_MODAL_OPEN:
            state = {
                ...state,
                isInvoiceAttachmentTypesModalOpen: data
            };
            return state;
        case contractActionTypes.invoiceDefaultActionTypes.IS_INVOICE_ATTACHMENT_TYPES_EDIT:
            state = {
                ...state,
                isInvoiceAttachmentTypesEdit: data
            };
            return state;

        default:
            return state;
    }
};