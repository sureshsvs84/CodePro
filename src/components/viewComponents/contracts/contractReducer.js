import { companyActionTypes, contractActionTypes, customerActionTypes } from '../../../constants/actionTypes';

const initialState = {
    enableButton: false,
    showButton: false,
    ContractFixedRate: [],
    editFixedExchangeDetails: {},
    addFixedData: {},
    currencyData: [],
    example:{},
    chechBoxHideButton:true,
    customerContractContact: [],
    salesTax:[],
    withHoldingTax:[],
    invoicePaymentTerms:[],
    customerContractAddress:[],
    invoiceCurrency:[],
    invoiceGrouping:[],
    invoiceRemittanceText:{},
    invoiceFooter:[],
    defaultInvoiceRefernces:[],
    defaultInvoiceAttachmentTYpes:[],
    referenceType:[],
    selectedCustomerCode:"AB00007", 
    CustomerCodeInCRM: false,
    isShowModal: false,
    countryMasterData: [],
    contractTypeData: [],
    isopen: true,
    customerList: [],
    customerContract: [],
    selectedCustomerName: null,
    contractCustomerName: [],
    contractNotes: []
};

export const ContractReducer = (state = initialState, action) => {
    const { type, data } = action;
   let newState = {},index=-1;
    switch (type) {
        case contractActionTypes.SHOW_FIXED_MODAL:
            state = {
                showButton: !state.showButton,
                enableButton: true,
                ContractFixedRate: state.ContractFixedRate,
                editFixedExchangeDetails: {},
                currencyData: state.currencyData,
                invoiceRemittanceText: state.invoiceRemittanceText,
                invoiceFooter: state.invoiceFooter,
                defaultInvoiceRefernces:state.defaultInvoiceRefernces,
                referenceType:state.referenceType
            };
            return state;
        case contractActionTypes.HIDE_FIXED_MODAL:
            state = {
                showButton: !state.showButton,
                ContractFixedRate: state.ContractFixedRate,
               editFixedExchangeDetails: {},
              
                currencyData: state.currencyData,
                invoiceRemittanceText: state.invoiceRemittanceText,
                invoiceFooter: state.invoiceFooter,
                defaultInvoiceRefernces:state.defaultInvoiceRefernces,
                referenceType:state.referenceType,
                
            };
            return state;
            case contractActionTypes.FETCH_CONTRACT_FIXEDRATE:
            state = {
                ...state,
                ContractFixedRate: data,

            };
            return state;

        case contractActionTypes.FETCH_CURRENCY:
            state = {
                ...state,
                currencyData: data,

            };
            return state;

        case contractActionTypes.ADD_FIXED_EXHCHANGE_RATE:
 
            state = {
                ...state,
                ContractFixedRate: [ ...state.ContractFixedRate, data ]
            };
            return state;

        case contractActionTypes.EDIT_FIXED_EXCHANGE_RATE:
           
            state = {
                ...state,
               editFixedExchangeDetails: data,
                showButton: !state.showButton,
                enableButton: false
            };
            return state;
         case contractActionTypes.UPDATE_FIXED_EXCHANGE_RATE:
           
            const editRow = Object.assign({}, state.editFixedExchangeDetails,data);
            index = state.ContractFixedRate.findIndex(note => (note.contractNumber === editRow.contractNumber));
            newState = Object.assign([], state.ContractFixedRate);
            newState[index] = editRow;
            if (index >= 0)
                state = {
                    ...state,
                    ContractFixedRate: newState
                };
            return state;

         case contractActionTypes.DELETE_FIXED_EXCHANGE_RATE:
         newState = Object.assign([], state.ContractFixedRate);
      
         data.map(row => {
             newState.map(note => {
               
                if (note.contractNumber === row.contractNumber) {
                const index = newState.findIndex(value => (value.contractNumber === row.contractNumber));
               
                if (row.recordStatus !== "N") {
                    newState[index].recordStatus = "D";
                }
                else {
                    newState.splice(index, 1);
                }
            }

        });
    });
     state={
         ...state,
         ContractFixedRate:newState
     };
            return state;

        case 'HideCheckBox':
            state = {
                enableButton: true,
               ContractFixedRate: [],
               currencyData: state.currencyData,
            
            };
            return state;

        case 'SHOW_CUSTOMER_CONTACT':
            state = {
                ...state,
                customerContractContact: data,
            };
            return state;
        case 'ADD_NEW_INVOICE_DEFAULT':

            state = {
                ...state,
                defaultInvoiceRefernces: [ ...state.defaultInvoiceRefernces, data ]
            };
            return state; 
        
        case 'SHOW_SALES_TAX':
            state = {
                ...state,
                salesTax: data,
            };
            return state;
        case 'SHOW_WITHOLDING_TAX':
            state = {
                ...state,
                withHoldingTax: data,
            };
            return state;
        case 'SHOW_INVOICE_PAYMENT_TERMS':
            state = {
                ...state,
                invoicePaymentTerms: data,
            };
            return state;
        case 'SHOW_CUSTOMER_CONTRACT_ADDRESS':
            state = {
                ...state,
                customerContractAddress: data,
            };
            return state;
        case 'SHOW_INVOICE_CURRENCY':
            state = {
                ...state,
                invoiceCurrency: data,
            };
            return state;
        case 'SHOW_INVOICE_GROUPING':
            state = {
                ...state,
                invoiceGrouping: data,
            };
            return state;
        case 'SHOW_INVOICE_REMITTANCE_TEXT':
            state = {
                ...state,
                invoiceRemittanceText: data,
            };
            return state;
        case 'SHOW_INVOICE_FOOTER':
            state = {
                ...state,
                invoiceFooter: data,
            };
            return state;
        case 'SHOW_REFERENCE_TYPE':
            state = {
                ...state,
                referenceType: data,
            };
            return state;
        case 'SHOW_DEFAULT_INVOICE_ATTACHMENT_TYPES':
            state = {
                ...state,
                defaultInvoiceAttachmentTYpes: data,
            };
            return state;
        case 'SHOW_DEFAULT_INVOICE_REFERENCES':
            state = {
                ...state,
                defaultInvoiceRefernces: data,
            };
            
            return state;

        //  general details reducer
        case 'CRM_YES':
            state = {

                CustomerCodeInCRM: true,
                contractTypeData: state.contractTypeData,
                currencyData: state.currencyData,
                countryMasterData: state.countryMasterData
            };
            return state;

        case 'CRM_NO':
            state = {
                ...state,
                CustomerCodeInCRM: false,
                contractTypeData: state.contractTypeData,
                currencyData: state.currencyData,
                countryMasterData: state.countryMasterData
            };
            return state;
        case 'CRM_SELECT':
            state = {
                // ...state,
                CustomerCodeInCRM: state.CustomerCodeInCRM,
                contractTypeData: state.contractTypeData,
                currencyData: state.currencyData,
                countryMasterData: state.countryMasterData
            };
            return state;
        case companyActionTypes.COUNTRY:
            state = {
                ...state,
                countryMasterData: data
            };
            return state;
        case contractActionTypes.FETCH_CONTRACT_NOTE:
            state = {
                ...state,
                contractNotes: data
            };
            return state;
        case 'FETCH_DATA':
            state = {
                ...state,
                contractTypeData: data
            };
            return state;

        case customerActionTypes.FETCH_CUSTOMER_LIST:
            state = {
                ...state,
                customerList: data
            };
            return state;
        case contractActionTypes.SHOW_HIDE_PANEL:
            state = {
                isopen: !state.isopen,
                customerContract: state.customerContract
            };
            return state;
        case 'CUSTOMER_SHOW_MODAL':
            state = {
                isopen: state.isopen,
                isShowModal: !state.isShowModal,
                countryMasterData: state.countryMasterData,
                contractCustomerName: state.contractCustomerName
            };
            return state;
        case 'CUSTOMER_HIDE_MODAL':
            state = {
                isopen: state.isopen,
                isShowModal: !state.isShowModal,
                contractCustomerName: state.contractCustomerName
            };
            return state;
        case contractActionTypes.FETCH_CUSTOMER_CONTRACT:
            state = {
                ...state,
                isopen: !state.isopen,
                customerContract: data
            };
            return state;
        case contractActionTypes.CLEAR_SEARCH_DATA:
            state = {
                ...state,
                customerContract: []
            };
            return state;
        case contractActionTypes.SELECTED_CUSTOMER_CODE:
            state = {
                ...state,
                selectedCustomerName: data
            };
            return state;
        case contractActionTypes.SELECTED_CUSTOMER_NAME:
            state = {
                ...state,
                contractCustomerName:data  
            };
            return state;
        default:
            return state;
    }
};