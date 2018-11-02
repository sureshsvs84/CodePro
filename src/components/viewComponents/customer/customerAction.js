import { customerActionTypes } from '../../../constants/actionTypes';
import { processApiRequest } from '../../../services/api/defaultServiceApi';
import { customerAPIConfig, apiConfig, masterData } from '../../../apiConfig/apiConfig';
import MaterializeComponent from 'materialize-css';
import { FetchCity, FetchState } from '../../viewComponents/company/companyAction';
import { SuccessAlert, FailureAlert, WarningAlert, ValidationAlert } from './alertAction';

const actions = {
    FetchCustomerDetail: (payload) => ({
        type: customerActionTypes.FETCH_CUSTOMER_DETAIL,
        data: payload
    }),

    // general details actions
    FetchCustomerList: (payload) => ({
        type: customerActionTypes.FETCH_CUSTOMER_LIST,
        data: payload
    }),

    AddCustomerAddress: (payload) => ({
        type: customerActionTypes.ADD_CUSTOMER_ADDRESS,
        data: payload
    }),
    AddCustomerContact: (payload) => ({
        type: customerActionTypes.ADD_CUSTOMER_CONTACT,
        data: payload
    }),
    DeleteCustomerAddress: (payload) => ({
        type: customerActionTypes.DELETE_CUSTOMER_ADDRESS,
        data: payload
    }),
    DeleteCustomerContact: (payload) => ({
        type: customerActionTypes.DELETE_CUSTOMER_CONTACT,
        data: payload
    }),
    EditAddressReference: (payload) => ({
        type: customerActionTypes.EDIT_ADDRESS_REFERENCE,
        data: payload
    }),
    EditContactReference: (payload) => ({
        type: customerActionTypes.EDIT_CONTACT_REFERENCE,
        data: payload
    }),
    UpdateAddressReference: (payload) => ({
        type: customerActionTypes.UPDATE_ADDRESS_REFERENCE,
        data: payload
    }),
    UpdateContactReference: (payload) => ({
        type: customerActionTypes.UPDATE_CONTACT_REFERENCE,
        data: payload
    }),

    //Assignment actions
    FetchAssignmentReference: (payload) => ({
        type: customerActionTypes.FETCH_ASSIGNMENT_REFERENCE,
        data: payload
    }),
    FetchAccountReference: (payload) => ({
        type: customerActionTypes.FETCH_ACCOUNT_REFERENCE,
        data: payload
    }),
    AddAssignmentReference: (payload) => ({
        type: customerActionTypes.ADD_ASSIGNMENT_REFERENCE,
        data: payload
    }),
    AddAccountReference: (payload) => ({
        type: customerActionTypes.ADD_ACCOUNT_REFERENCE,
        data: payload
    }),
    DeleteAssignmentReference: (payload) => ({
        type: customerActionTypes.DELETE_ASSIGNMENT_REFERENCE,
        data: payload
    }),
    DeleteAccountReference: (payload) => ({
        type: customerActionTypes.DELETE_ACCOUNT_REFERENCE,
        data: payload
    }),
    EditAssignmentReference: (payload) => ({
        type: customerActionTypes.EDIT_ASSIGNMENT_REFERENCE,
        data: payload
    }),
    EditAccountReference: (payload) => ({
        type: customerActionTypes.EDIT_ACCOUNT_REFERENCE,
        data: payload
    }),
    UpdateAssignmentReference: (payload) => ({
        type: customerActionTypes.UPDATE_ASSIGNMENT_REFERENCE,
        data: payload
    }),
    UpdateAccountReference: (payload) => ({
        type: customerActionTypes.UPDATE_ACCOUNT_REFERENCE,
        data: payload
    }),
    GetSelectedCustomerCode: (payload) => ({
        type: customerActionTypes.SELECTED_CUSTOMER_CODE,
        data: payload
    }),
    AddNotesDetails: (payload) => ({
        type: customerActionTypes.ADD_NOTES_DETAILS,
        data: payload
    }),
    // UpdateNotesDetails: (payload) => ({
    //     type: customerActionTypes.UPDATE_NOTES_DETAILS,
    //     data: payload
    // }),
    // DeleteNotesDetails: (payload) => ({
    //     type: customerActionTypes.DELETE_NOTES_DETAILS,
    //     data: payload
    // }),
    EditNotesDetails: (payload) => ({
        type: customerActionTypes.EDIT_NOTES_DETAILS,
        data: payload
    }),
    //contracts
    FetchCustomerContract: (payload) => ({
        type: customerActionTypes.FETCH_CUSTOMER_CONTRACT,
        data: payload
    }),
    FetchFilteredContract: (payload) => ({
        type: customerActionTypes.FETCH_FILTERED_CONTRACT,
        data: payload
    }),
    GetSelectedContractNumber: (payload) => ({
        type: customerActionTypes.SELECTED_CONTRACT_NUMBER,
        data: payload
    }),
    ShowButtonHandler: () => ({
        type: customerActionTypes.SHOWBUTTON
    }),
    FetchAssignmentRefTypes: (payload) => ({
        type: customerActionTypes.FETCH_ASSIGNMENT_REF_TYPES,
        data: payload
    }),
    FetchMasterDocumentTypes: (payload) => ({
        type: customerActionTypes.FETCH_DOCUMENT_TYPES,
        data: payload
    }),
    FetchMasterCompanyDocumentTypes: (payload) => ({
        type: customerActionTypes.FETCH_COMPANY_DOCUMENT_TYPES,
        data: payload
    }),
    AddDocumentDetails: (payload) => ({
        type: customerActionTypes.ADD_DOCUMENTS_DETAILS,
        data: payload
    }),
    CopyDocumentDetails: (payload) => ({
        type: customerActionTypes.COPY_DOCUMENTS_DETAILS,
        data: payload
    }),
    DeleteDocumentDetails: (payload) => ({
        type: customerActionTypes.DELETE_DOCUMENTS_DETAILS,
        data: payload
    }),
    UpdateDocumentDetails: (payload) => ({
        type: customerActionTypes.UPDATE_DOCUMENTS_DETAILS,
        data: payload
    }),
    EditDocumentDetails: (payload) => ({
        type: customerActionTypes.EDIT_DOCUMENTS_DETAILS,
        data: payload
    }),
    //POST ACTION
    SaveCustomerDetails: (payload) => ({
        type: customerActionTypes.SAVE_CUTOMER_DETAILS,
        data: payload
    }),
    SetLoader: (payload) => ({
        type: customerActionTypes.SET_LOADER,
        data: payload
    }),
    RemoveLoader: (payload) => ({
        type: customerActionTypes.REMOVE_LOADER,
        data: payload
    }),
    ClearSearchData: () => ({
        type: customerActionTypes.CLEAR_SEARCH_DATA
    }),
    CustomerUpdatedAction: (payload) => ({
        type: customerActionTypes.CUSTOMER_UPDATED,
        data: payload
    }),
    UploadDocumentData: (payload) => ({
        data: payload
    }),
    DownloadDocumentData: (payload) => ({
        data: payload
    }),
    DisplayDocuments: (payload) => ({
        type: customerActionTypes.DISPLAY_DOCUMENTS,
        data: payload
    }),
    DownloadUploadedDocumentData: (payload) => ({
        data: payload
    }),
    PasteDocumentUploadData: (payload) => ({
        data: payload
    }),
};

/**
 * Customer Updated Check 
 */

export const SetLoader = (data) => (dispatch, getstate) => {
    dispatch(actions.SetLoader(false));
};

export const RemoveLoader = (data) => (dispatch, getstate) => {
    dispatch(actions.RemoveLoader(true));
};

export const FetchCustomerDetail = (data) => (dispatch, getstate) => {
    const selectedCustomer = getstate().CustomerReducer.selectedCustomerCode;
    const apiUrl = customerAPIConfig.custBaseUrl + customerAPIConfig.customer + selectedCustomer + "/" + customerAPIConfig.customerDetail;

    dispatch(SetLoader());

    processApiRequest(apiUrl, {
        method: "GET",
        headers: { 'Content-Type': 'text/plain' }
    }).then(response => {
        if (response.status === 200) {            
            dispatch(actions.FetchCustomerDetail(response.data));
                dispatch(RemoveLoader());
            /**
             * toggle customer updated value to false after customer fetch done
             */
            dispatch(actions.CustomerUpdatedAction(false));
        } else {
            MaterializeComponent.toast({
                html: 'Fetch Customer Detail Something went wrong.',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        alert("error", error);
    });
};

//To-Do: Need to change the logic 
//for temporary purpose the logic is written.
export const FetchCustomerList = (data) => (dispatch, getstate) => {
    dispatch(actions.FetchCustomerList(null));    
    const searchData = data;    
    let apiUrl = customerAPIConfig.custBaseUrl + customerAPIConfig.customerDetails + '?';
    if (searchData.customerCode !== undefined) {
        apiUrl += "customerCode=" + searchData.customerCode + '&';
    }
    if (searchData.parentCompanyName !== undefined) {
        apiUrl += "parentCompanyName=" + searchData.parentCompanyName + '&';
    }
    if (searchData.customerName !== undefined) {
        apiUrl += "customerName=" + searchData.customerName + '&';
    }
    if (searchData.operatingCountry !== undefined) {
        apiUrl += "operatingCountry=" + searchData.operatingCountry + '&';
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
// operations
export const AddCustomerAddress = (data) => (dispatch) => {
    dispatch(actions.AddCustomerAddress(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const DeleteCustomerAddress = (data) => (dispatch) => {
    dispatch(actions.DeleteCustomerAddress(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const AddCustomerContact = (data) => (dispatch) => {
    dispatch(actions.AddCustomerContact(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const DeleteCustomerContact = (data) => (dispatch) => {
    dispatch(actions.DeleteCustomerContact(data));
    dispatch(actions.CustomerUpdatedAction(true));
};

//assignment
export const FetchAssignmentRefTypes = () => (dispatch, getstate) => {
    const assignmentRefTypesUrl = masterData.baseUrl + masterData.assignmentReference;
    processApiRequest(assignmentRefTypesUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchAssignmentRefTypes(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'Fetch Assignment Reference Something went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        alert("error", error);
    });
};

//documentTypes Master data
export const FetchMasterDocumentTypes = () => (dispatch, getstate) => {
    const documentTypesMasterDataUrl = masterData.baseUrl + masterData.documentType + "?moduleName=customer";

    processApiRequest(documentTypesMasterDataUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchMasterDocumentTypes(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'Fetch Document Types Something went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        alert("error", error);
    });
};
export const FetchMasterCompanyDocumentTypes = () => (dispatch, getstate) => {
    const documentTypesMasterDataUrl = masterData.baseUrl + masterData.documentType + "?moduleName=company";

    processApiRequest(documentTypesMasterDataUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchMasterCompanyDocumentTypes(response.data.result));
            'dangerToast';
        }
    }).catch(error => {
        alert("error", error);
    });
};

export const AddAssignmentReference = (data) => (dispatch, getstate) => {
    dispatch(actions.AddAssignmentReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const AddAccountReference = (data) => (dispatch, getstate) => {
    dispatch(actions.AddAccountReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};

export const EditAssignmentReference = (data) => (dispatch, getstate) => {
    dispatch(actions.EditAssignmentReference(data));
};
export const EditAccountReference = (data) => (dispatch, getstate) => {
    dispatch(actions.EditAccountReference(data));
};
export const EditAddressReference = (data) => (dispatch, getstate) => {
    dispatch(actions.EditAddressReference(data));
    dispatch(FetchState(data.Country));
    dispatch(FetchCity(data.County));
};
export const EditContactReference = (data) => (dispatch, getstate) => {
    dispatch(actions.EditContactReference(data));
};
export const UpdateAssignmentReference = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateAssignmentReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const UpdateAddressReference = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateAddressReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const UpdateContactReference = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateContactReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const UpdateAccountReference = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateAccountReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};

export const DeleteAssignmentReference = (data) => (dispatch, getstate) => {
    dispatch(actions.DeleteAssignmentReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const DeleteAccountReference = (data) => (dispatch, getstate) => {
    dispatch(actions.DeleteAccountReference(data));
    dispatch(actions.CustomerUpdatedAction(true));
};

export const GetSelectedCustomerCode = (data) => (dispatch, getstate) => {
    dispatch(actions.GetSelectedCustomerCode(data));
};
export const AddNotesDetails = (data) => (dispatch) => {
    dispatch(actions.AddNotesDetails(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
// export const UpdateNotesDetails = (data) => (dispatch) => {
//     dispatch(actions.UpdateNotesDetails(data));
//     dispatch(actions.CustomerUpdatedAction(true));
// };
// export const DeleteNotesDetails = (data) => (dispatch) => {
//     dispatch(actions.DeleteNotesDetails(data));
//     dispatch(actions.CustomerUpdatedAction(true));
// };
export const EditNotesDetails = (data) => (dispatch) => {
    dispatch(actions.EditNotesDetails(data));
};
export const AddDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.AddDocumentDetails(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const CopyDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.CopyDocumentDetails(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const DeleteDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.DeleteDocumentDetails(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const UpdateDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.UpdateDocumentDetails(data));
    dispatch(actions.CustomerUpdatedAction(true));
};
export const EditDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.EditDocumentDetails(data));
};
//contracts
export const FetchCustomerContract = () => (dispatch, getstate) => {
    const customerCode = getstate().CustomerReducer.selectedCustomerCode;
    const customerContractData = customerAPIConfig.custBaseUrl + customerAPIConfig.custContractDetail + '=' + customerCode;

    processApiRequest(customerContractData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            const filterdContract = response.data.result.filter(res => res.contractStatus === 'O');
            const data = { ...response.data, filterdContract };
            dispatch(actions.FetchCustomerContract(data));

        } else {
            alert("Customer API Went Wrong");
        }
    }).catch(error => {
        alert("error", error);
    });

};
export const FetchFilteredContract = (data) => (dispatch, getstate) => {
    dispatch(actions.FetchFilteredContract(data));
};
export const GetSelectedContractNumber = (data) => (dispatch, getstate) => {
    dispatch(actions.GetSelectedContractNumber(data));
};

export const ShowButtonHandler = () => (dispatch) => {
    dispatch(actions.ShowButtonHandler());
};

export const ClearSearchData = () => (dispatch) => {
    dispatch(actions.ClearSearchData());
};

export const UploadDocumentData = (data) => (dispatch, getstate) => {  
    const customerCode = getstate().CustomerReducer.selectedCustomerCode;

    const documentUploadIdUrl = customerAPIConfig.docBaseUrl + "documents/C/" + customerCode;
    return processApiRequest(documentUploadIdUrl, {
        method: "POST",
        headers: { 'Content-Type': 'multipart/form-data' },
        data: data
    }).then(response => {
        if (response.status === 200) {
            return response.data.result;
        }
    }).catch(error => {
        alert("error", error);
    });
};

export const PasteDocumentUploadData = (data) => (dispatch, getstate) => {    
    const customerCode = getstate().CustomerReducer.selectedCustomerCode;
    const pasteDocumentUploadIdUrl = customerAPIConfig.docBaseUrl + "documents/C/" + customerCode + "/Copy";
    return processApiRequest(pasteDocumentUploadIdUrl, {
        method: "POST",
        data: data
    }).then(response => {
        if (response.status === 200) {
            return response.data.result;
        }
    }).catch(error => {
        alert("error", error);
    });
};

export const DownloadDocumentData = (data) => (dispatch, getstate) => {
    const customerCode = getstate().CustomerReducer.selectedCustomerCode;
    const downloadDocumentDataUrl = customerAPIConfig.docBaseUrl + "documents/C/" + customerCode + '/' + data;
    window.open(downloadDocumentDataUrl, "_blank");
};

export const DownloadUploadedDocumentData = (data) => (dispatch, getstate) => {
    const customerCode = getstate().CustomerReducer.selectedCustomerCode;
    const downloadDocumentDataUrl = customerAPIConfig.docBaseUrl + "documents/C/" + customerCode + '/' + data + '/temp';
    window.open(downloadDocumentDataUrl, "_blank");
};

export const DisplayDocuments = (data) => (dispatch) => {
    dispatch(actions.DisplayDocuments(data));
};

//POST CUSTOMER DATA
export const SaveCustomerDetails = () => (dispatch, getstate) => {
    dispatch(SetLoader());
    const customerDataToPost = [];

    const customerData =  getstate().CustomerReducer.customerDetail;

    if (customerData.Documents) {
        customerData.Documents.map(row => {
            if (row.recordStatus === "N") {
                row.documentId = 0;
            }
        });
    }
    if (customerData.Notes) {
        customerData.Notes.map(row => {
            if (row.recordStatus === "N") {
                row.customerNoteId = 0;
            }
        });
    }
    if (customerData.AssignmentReferences) {
        customerData.AssignmentReferences.map(row => {
            if (row.recordStatus === "N") {
                row.customerAssignmentReferenceId = 0;
            }
        });
    }
    if (customerData.AccountReferences) {
        customerData.AccountReferences.map(row => {
            if (row.recordStatus === "N") {
                row.customerCompanyAccountReferenceId = 0;
            }
        });
    }
    if (customerData.Addresses) {
        customerData.Addresses.map(address => {
              if(address.Contacts !== null){
                address.Contacts.map(contact => {
                    if (contact.RecordStatus === "N") {
                        contact.ContactId = 0;
                    }
                });
              }
           
            if (address.RecordStatus === "N") {
                address.AddressId = 0;
            }
        });
    }
    customerDataToPost.push(customerData);
    const postCustomerUrl = customerAPIConfig.custBaseUrl + customerAPIConfig.customerDetails;
    processApiRequest(postCustomerUrl, {
        method: "PUT",
        data: customerDataToPost,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Acces-Control-Allow-Origin": "*"
        }
    }).then(response => {
        if (response.status === 200) {
            if (response.data.code == 1) {
                dispatch(SuccessAlert(response.data, "Customer"));
            }
            else if (response.data.code == 11) {
                if (response.data.validationMessages.length > 0) {
                    response.data.validationMessages.map(result => {
                        if (result.messages.length > 0) {
                            result.messages.map(valMessage => {
                                dispatch(ValidationAlert(valMessage.message, "Customer"));
                            });
                        }
                        else {
                            dispatch(ValidationAlert("Something went wrong", "Customer"));
                        }

                    });
                }
                else {
                    dispatch(ValidationAlert("Something went wrong", "Customer"));
                }

            }
            // else if (response.data.code == 61) {
            //     dispatch(SuccessAlert(response.data))
            // }
            // else if (response.data.code == 21) {
            //     dispatch(WarningAlert(response.data))
            // }
            // else if (response.data.code == 41) {
            //     dispatch(ValidationAlert(response.data))
            // }
            else {
                dispatch(FailureAlert(response.data));
            }
        }
        dispatch(FetchCustomerDetail());
    }).catch(error => {
        alert("error", error);
    });
    
};