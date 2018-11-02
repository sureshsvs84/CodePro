import MaterializeComponent from 'materialize-css';
import { companyActionTypes, customerActionTypes, contractActionTypes } from '../../../constants/actionTypes';
import { customerAPIConfig, masterData, contractAPIConfig } from '../../../apiConfig/apiConfig';
import { processApiRequest } from '../../../services/api/defaultServiceApi';
const countryMasterData = masterData.baseUrl + masterData.country;

const actions = {
    AboutShowModal: () => ({
            type: contractActionTypes.SHOW_FIXED_MODAL            
    }),
    AboutHideModal: () => ({
            type: contractActionTypes.HIDE_FIXED_MODAL 
     }),
  
    FetchContractNotes:(payload)=>({
        type: contractActionTypes.FETCH_CONTRACT_NOTE,
        data: payload
    }),

    FetchContractFixedRate: (payload) => ({
        type: contractActionTypes.FETCH_CONTRACT_FIXEDRATE,
        data: payload
    }),
    AddFixedExchangeRate: (payload) => ({
        type: contractActionTypes.ADD_FIXED_EXHCHANGE_RATE,
        data: payload
    }), 
    EditFixedExchangeRate: (payload) => ({
        type: contractActionTypes.EDIT_FIXED_EXCHANGE_RATE,
        data: payload
    }),
    UpdateFixedExchangeRate: (payload) => ({
        type:  contractActionTypes.UPDATE_FIXED_EXCHANGE_RATE,
        data: payload
    }),
    DeleteFixedExchangeRate: (payload) => ({
        type: contractActionTypes.DELETE_FIXED_EXCHANGE_RATE,
        data: payload
    }),

    HideCheckBox: (payload) => ({
        type: 'HideCheckBox',
        data: payload
    }),
    FetchCurrency:(payload) =>({
            type: contractActionTypes.FETCH_CURRENCY,
            data:payload
    }),
    AddNewInvoiceDefault: (payload) => ({
        type: 'ADD_NEW_INVOICE_DEFAULT',
        data: payload
    }),
    DeleteInvoiceDefaultRow: (payload) => ({
        type: 'DELETE_INVOICE_DEFAULT',
        data: payload
    }),
    FetchCustomerContractContact: (payload) => ({
        type: 'SHOW_CUSTOMER_CONTACT',
        data: payload
    }),
    FetchSalesTax: (payload) => ({
        type: 'SHOW_SALES_TAX',
        data: payload
    }),
    FetchWitholdingTax: (payload) => ({
        type: 'SHOW_WITHOLDING_TAX',
        data: payload
    }),
    FetchInvoicePaymentTerms: (payload) => ({
        type: 'SHOW_INVOICE_PAYMENT_TERMS',
        data: payload
    }),
    FetchCustomerContractAddress: (payload) => ({
        type: 'SHOW_CUSTOMER_CONTRACT_ADDRESS',
        data: payload
    }),
    FetchInvoiceCurrency: (payload) => ({
        type: 'SHOW_INVOICE_CURRENCY',
        data: payload
    }),
    FetchInvoiceGrouping: (payload) => ({
        type: 'SHOW_INVOICE_GROUPING',
        data: payload
    }),
    FetchInvoiceRemittanceText: (payload) => ({
        type: 'SHOW_INVOICE_REMITTANCE_TEXT',
        data: payload
    }),
    FetchInvoiceFooter: (payload) => ({
        type: 'SHOW_INVOICE_FOOTER',
        data: payload
    }),
    FetchDefaultInvoiceReferences: (payload) => ({
        type: 'SHOW_DEFAULT_INVOICE_REFERENCES',
        data: payload
    }), 
    FetchDefaultInvoiceAttachmentTypes: (payload) => ({
        type: 'SHOW_DEFAULT_INVOICE_ATTACHMENT_TYPES',
        data: payload
    }),
    FetchReferenceType: (payload) => ({
        type: 'SHOW_REFERENCE_TYPE',
        data: payload
    }),
    
     // for general details 
    IfYes: () => {
        return {
            type: 'YES'
        };
    },
    IfNo: () => {
        return {
            type: 'NO'
        };
    },
    CustomerShowModal: () => {
        return {
            type: 'CUSTOMER_SHOW_MODAL'
        };
    },
    CustomerHideModal: () => {
        return {
            type: 'CUSTOMER_HIDE_MODAL'
        };
    },
    FetchCountry: (payload) => {
        return {
            type: companyActionTypes.COUNTRY,
            data: payload
        };
    },

    FetchData: (payload) => {
        return {
            type: 'FETCH_DATA',
            data: payload
        };
    },
    // for general details 
    IfCRMYes: () => ({
        type: 'CRM_YES'
    }),
    IfCRMNo: () => ({
        type: 'CRM_NO'
    }),
    IfCRMSelect:()=>({
        type: 'CRM_SELECT'
    }),
    FetchCustomerList: (payload) => ({
        type: customerActionTypes.FETCH_CUSTOMER_LIST,
        data: payload
    }),
    FetchCustomerContract: (payload) => ({
        type: contractActionTypes.FETCH_CUSTOMER_CONTRACT,
        data: payload
    }),
    ClearSearchData: () => ({
        type: contractActionTypes.CLEAR_SEARCH_DATA
    }),
    GetSelectedCustomerName: (payload) => ({
        type: contractActionTypes.SELECTED_CUSTOMER_CODE,
        data: payload
    }),
    ShowHidePanel: () => ({
        type: contractActionTypes.SHOW_HIDE_PANEL
    }),
    OnSubmitCustomerName: (payload) => ({
        type: contractActionTypes.SELECTED_CUSTOMER_NAME,
        data: payload
    })

};
export const ShowHidePanel = () => (dispatch) => {
    dispatch(actions.ShowHidePanel());
};
export const OnSubmitCustomerName = (data) => (dispatch) => {
    dispatch(actions.OnSubmitCustomerName(data));
};
export const AboutShowModal = () => (dispatch) => {
    return dispatch(actions.AboutShowModal());
};
export const AboutHideModal = () => (dispatch) => {
    return dispatch(actions.AboutHideModal());
};

export const AddFixedExchangeRate = (data) => (dispatch) => {
    dispatch(actions.AddFixedExchangeRate(data));
};
export const EditFixedExchangeRate = (data) => (dispatch) => {
    dispatch(actions.EditFixedExchangeRate(data));
};
export const UpdateFixedExchangeRate =(data)=>(dispatch)=> {
   
     dispatch(actions.UpdateFixedExchangeRate(data));
};
export const DeleteFixedExchangeRate = (data) => (dispatch) => {
    dispatch(actions.DeleteFixedExchangeRate(data));
};

export const FetchContractFixedRate = () => (dispatch, getstate) => {
    dispatch(actions.FetchContractFixedRate(null));
    const URL = "http://192.168.50.161:85/api/contracts/70S002/exchangerates";
    processApiRequest(URL, {
        method: "GET"
    }).then(response => {

        if (response.status === 200) {

            dispatch(actions.FetchContractFixedRate(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchContractFixedRate API went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error + 'API went wrong',
            classes: 'dangerToast'
        });
    });
};
export const FetchContractNotes = () => (dispatch, getstate) => {
    const ContractNoteURL = "http://192.168.50.161:85/api/contracts/SH0548417427/notes";
    processApiRequest(ContractNoteURL, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchContractNotes(response.data));
        } else {
            MaterializeComponent.toast({
                html: 'FetchContrctNotes API went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error + 'API went wrong',
            classes: 'dangerToast'
        });
    });
};
export const FetchCurrency = () => (dispatch) => {

    const currencyData = "http://192.168.50.161:85/api/master/currencies";
    processApiRequest(currencyData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCurrency(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'FetchCurrency went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const HideCheckBox = (data) => (dispatch) => {
    dispatch(actions.HideCheckBox(data));
};

export const FetchCustomerContractContact = () => (dispatch, getstate) => {
    const selectedCustomer = getstate().ContractReducer.selectedCustomerCode;
    const customerContractContact = "http://192.168.50.161:85/api/customers/" + selectedCustomer + "/contacts";
    processApiRequest(customerContractContact, {
        method: "GET",
        headers: { 'Content-Type': 'text/plain' }
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCustomerContractContact(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchCustomerContractContact went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const AddNewInvoiceDefault = (data) => (dispatch) => {

    dispatch(actions.AddNewInvoiceDefault(data));
};
export const DeleteInvoiceDefaultRow = (data) => (dispatch) => {
    dispatch(actions.DeleteInvoiceDefaultRow(data));    
};
export const FetchSalesTax = () => (dispatch) => {
    const salesTax = "http://192.168.50.161:85/api/master/taxes?type=s";
    processApiRequest(salesTax, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchSalesTax(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchSalesTax went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchWitholdingTax = () => (dispatch) => {
    const witholdingTax = "http://192.168.50.161:85/api/master/taxes?type=w";
    processApiRequest(witholdingTax, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {

            dispatch(actions.FetchWitholdingTax(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchWitholdingTax went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};

export const FetchInvoicePaymentTerms = () => (dispatch) => {
    const invoicePaymentTerms = "http://192.168.50.161:85/api/master/invoice/paymentterms";
    processApiRequest(invoicePaymentTerms, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
      
            dispatch(actions.FetchInvoicePaymentTerms(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchInvoicePaymentTerms went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchCustomerContractAddress = () => (dispatch, getstate) => {
    const selectedCustomer = getstate().ContractReducer.selectedCustomerCode;
    const customerContractAddress = "http://192.168.50.161:85/api/customers/" + selectedCustomer + "/addresses";
    processApiRequest(customerContractAddress, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
   
            dispatch(actions.FetchCustomerContractAddress(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchCustomerContractAddress went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchInvoiceCurrency = () => (dispatch) => {
    const invoiceCurrency = "http://192.168.50.161:85/api/master/currencies";
    processApiRequest(invoiceCurrency, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
           
            dispatch(actions.FetchInvoiceCurrency(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchInvoiceCurrency went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchInvoiceGrouping = () => (dispatch) => {
    const invoiceGrouping = "https://demo3135799.mockable.io/invoiceGrouping";
    processApiRequest(invoiceGrouping, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            
            dispatch(actions.FetchInvoiceGrouping(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchInvoiceGrouping went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchInvoiceFooter = () => (dispatch, getstate) => {
    const selectedCompany = getstate().appLayoutReducer.selectedCompany;
    const invoiceFooter = "http://192.168.50.161:85/api/companies/" + selectedCompany + "/invoicedetail";
    processApiRequest(invoiceFooter, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            
            dispatch(actions.FetchInvoiceFooter(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchInvoiceFooter went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchDefaultInvoiceReferences = () => (dispatch, ) => {
 
    const defaultInvoicesRefernces = "http://192.168.50.161:85/api/contracts/A098519059/referencetypes";
    processApiRequest(defaultInvoicesRefernces, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
          
            dispatch(actions.FetchDefaultInvoiceReferences(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchDefaultInvoiceReferences went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchInvoiceRemittanceText = () => (dispatch, getstate) => {
    const selectedCompany = getstate().appLayoutReducer.selectedCompany;
    const invoiceRemittanceText = "http://192.168.50.161:85/api/companies/" + selectedCompany + "/invoicedetail";
    processApiRequest(invoiceRemittanceText, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            
            dispatch(actions.FetchInvoiceRemittanceText(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchInvoiceRemittanceText went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchReferenceType = () => (dispatch, ) => {
    const referenceType = "http://demo9752012.mockable.io/referenceType";
    processApiRequest(referenceType, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
        
            dispatch(actions.FetchReferenceType(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchReferenceType went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
// general details actions

export const IfCRMYes = () => (dispatch) => {
    return dispatch(actions.IfCRMYes());
};
export const IfCRMNo = () => (dispatch) => {
    return dispatch(actions.IfCRMNo());
};
export const IfCRMSelect = () => (dispatch) => {
    return dispatch(actions.IfCRMSelect());
};
export const CustomerShowModal = () => (dispatch) => {
    return dispatch(actions.CustomerShowModal());
};
export const CustomerHideModal = () => (dispatch) => {
    return dispatch(actions.CustomerHideModal());
};

export const FetchCountry = () => (dispatch) => {
    processApiRequest(countryMasterData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCountry(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'FetchCountry went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchCustomerList = (data) => (dispatch) => {
    let apiUrl = customerAPIConfig.custBaseUrl + customerAPIConfig.customerDetails + '?';
    if (data.customerName !== undefined) {
        apiUrl += "customerName=" + data.customerName + '&';
    }
    if (data.operatingCountry !== undefined) {
        apiUrl += "operatingCountry=" + data.operatingCountry + '&';
    }
    apiUrl = apiUrl.slice(0, -1);
    processApiRequest(apiUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCustomerList(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'Fetch Customer List Something went wrong.',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        alert("error", error);
    });
};
export const FetchData = () => (dispatch) => {
    const contractTypeData = "https://demo9752012.mockable.io/contractGeneralDetailsContract";
    processApiRequest(contractTypeData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchData(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'FetchData went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchDefaultInvoiceAttachmentTypes = () => (dispatch) => {  
    const defaultInvoicesAttachment = "http://192.168.50.161:85/api/contracts/A098519059/invoice/attachments";
    processApiRequest(defaultInvoicesAttachment, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
           
            dispatch(actions.FetchDefaultInvoiceAttachmentTypes(response.data.result));   
           
        } else {
            MaterializeComponent.toast({
                html: 'FetchDefaultInvoiceAttachmentTypes went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error,
            classes: 'dangerToast'
        });
    });
};
export const FetchCustomerContract = (data) => (dispatch,getstate) => {
    let apiUrl = contractAPIConfig.contBaseUrl + contractAPIConfig.api + contractAPIConfig.contracts + '?';
    const contractCustomerName = getstate().ContractReducer.contractCustomerName;
    if (contractCustomerName !== undefined) {
        apiUrl += "contractCustomerName=" + contractCustomerName + '&';
    }
    if (data.contractStatus !== undefined) {
        if (data.contractStatus === "Close")
            apiUrl += "contractStatus=" + data.contractStatus.slice(0, -4) + '&';
        else
            apiUrl += "contractStatus=" + data.contractStatus.slice(0, -3) + '&';
    }
    if (data.contractNumber !== undefined) {
        apiUrl += "contractNumber=" + data.contractNumber + '&';
    }
    if (data.customerContractNumber !== undefined) {
        apiUrl += "customerContractNumber=" + data.customerContractNumber + '&';
    }
    apiUrl = apiUrl.slice(0, -1);
    processApiRequest(apiUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCustomerContract(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'Fetch Customer List went wrong.',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        alert("error", error);
    });
};

export const ClearSearchData = () => (dispatch) => {
    dispatch(actions.ClearSearchData());
};

export const GetSelectedCustomerName = (data) => (dispatch, getstate) => {
    dispatch(actions.GetSelectedCustomerName(data));
};
