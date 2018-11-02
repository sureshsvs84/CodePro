import { processApiRequest } from '../../../services/api/defaultServiceApi';
import { companyAPIConfig, masterData } from '../../../apiConfig/apiConfig';
import { companyActionTypes } from '../../../constants/actionTypes';
import MaterializeComponent from 'materialize-css';
import { SuccessAlert, FailureAlert, WarningAlert, ValidationAlert } from '../customer/alertAction';
import { SetLoader,RemoveLoader } from '../customer/customerAction';

const actions = {
    showHidePanel: (payload) => ({
        type: companyActionTypes.SHOW_HIDE_PANEL,
        data: payload
    }),
    FetchCompanyDataList: (payload) => ({
        type: companyActionTypes.FETCH_COMPANY_DATALIST,
        data: payload
    }),

    GetSelectedCompanyCode: (payload) => ({
        type: companyActionTypes.SELECTED_COMPANY_CODE,
        data: payload
    }),

    ClearSearchData: () => ({
        type: companyActionTypes.CLEAR_SEARCH_DATA
    }),

    AddCompanyOffice: (payload) => ({
        type: companyActionTypes.ADD_COMPANY_OFFICE,
        data: payload
    }),
    UpdateCompanyOffice: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_OFFICE,
        data: payload
    }),
    DeleteCompanyOffices: (payload) => ({
        type: companyActionTypes.DELETE_COMPANY_OFFICES,
        data: payload
    }),
    EditCompanyOffice: (payload) => ({
        type: companyActionTypes.EDIT_COMPANY_OFFICE,
        data: payload
    }),
    FetchCompanyExpectedMargin: (payload) => ({
        type: companyActionTypes.FETCH_COMPANY_EXPECTED_MARGIN,
        data: payload
    }),
    AddExpectedMargin: (payload) => ({
        type: companyActionTypes.ADD_EXPECTED_MARGIN,
        data: payload
    }),
    DeleteExpectedMargin: (payload) => ({
        type: companyActionTypes.DELETE_EXPECTED_MARGIN,
        data: payload
    }),
    EditExpectedMargin: (payload) => ({
        type: companyActionTypes.EDIT_EXPECTED_MARGIN,
        data: payload
    }),
    UpdateExpectedMargin: (payload) => ({
        type: companyActionTypes.UPDATE_EXPECTED_MARGIN,
        data: payload
    }),
    FetchState: (payload) => ({
        type: companyActionTypes.STATE,
        data: payload
    }),
    FetchCountry: (payload) => ({
        type: companyActionTypes.COUNTRY,
        data: payload
    }),
    FetchCity: (payload) => ({
        type: companyActionTypes.CITY,
        data: payload
    }),
    FetchBusinessUnit: (payload) => ({
        type: companyActionTypes.BUSINESS_UNIT,
        data: payload
    }),
    FetchTaxData: (payload) => ({
        type: companyActionTypes.TAX,
        data: payload
    }),
    FetchSalutation: (payload) => ({
        type: companyActionTypes.SALUTATION,
        data: payload
    }),
    FetchVatPrefix: (payload) => ({
        type: companyActionTypes.VAT_PREFIX,
        data: payload
    }),
    CompanyFetchVatPrefix: (payload) => ({
        type: companyActionTypes.COMPANY_VAT_PREFIX,
        data: payload
    }),
    ShowButtonHandler: () => ({
        type: companyActionTypes.SHOWBUTTON
    }),
    FetchMasterCompanyDocumentTypes: (payload) => ({
        type: companyActionTypes.FETCH_DOCUMENT_TYPES,
        data: payload
    }),
    CopyDocumentDetails: (payload) => ({
        type: companyActionTypes.COPY_DOCUMENTS_DETAILS,
        data: payload
    }),

    AddDocumentDetails: (payload) => ({
        type: companyActionTypes.ADD_COMPANY_DOCUMENTS_DETAILS,
        data: payload
    }),

    DeleteCompanyDocumentDetails: (payload) => ({
        type: companyActionTypes.DELETE_DOCUMENTS_DETAILS,
        data: payload
    }),
    EditCompanyDocumentDetails: (payload) => ({
        type: companyActionTypes.EDIT_DOCUMENTS_DETAILS,
        data: payload
    }),

    UpdateDocumentDetails: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_DOCUMENTS_DETAILS,
        data: payload
    }),

    FetchCompanyContract: (payload) => ({
        type: companyActionTypes.FETCH_COMPANY_CONTRACT,
        data: payload
    }),
    DownloadDocumentData: (payload) => ({
        data: payload
    }),
    DispalyDocumentDetails: (payload) => ({
        type: companyActionTypes.DISPLAY_COMPANY_DOCUMENTS,
        data: payload
    }),
    DownloadUploadedDocumentData: (payload) => ({
        data: payload
    }),
    PasteDocumentUploadData: (payload) => ({
        data: payload
    }),
    //General Details Actions
    FetchCompanyDetails: (payload) => ({
        type: companyActionTypes.FETCH_COMPANY_DETAILS,
        data: payload
    }),
    AddInvoiceRemittance: (payload) => ({
        type: companyActionTypes.ADD_INVOICE_REMITTANCE,
        data: payload
    }),
    EditInvoiceRemittance: (payload) => ({
        type: companyActionTypes.EDIT_INVOICE_REMITTANCE,
        data: payload
    }),
    UpdateInvoiceRemittance: (payload) => ({
        type: companyActionTypes.UPDATE_INVOICE_REMITTANCE,
        data: payload
    }),
    DeleteInvoiceRemittance: (payload) => ({
        type: companyActionTypes.DELETE_INVOICE_REMITTANCE,
        data: payload
    }),
    AddInvoiceFooter: (payload) => ({
        type: companyActionTypes.ADD_INVOICE_FOOTER,
        data: payload
    }),
    EditInvoiceFooter: (payload) => ({
        type: companyActionTypes.EDIT_INVOICE_FOOTER,
        data: payload
    }),
    UpdateInvoiceFooter: (payload) => ({
        type: companyActionTypes.UPDATE_INVOICE_FOOTER,
        data: payload
    }),
    DeleteInvoiceFooter: (payload) => ({
        type: companyActionTypes.DELETE_INVOICE_FOOTER,
        data: payload
    }),
    // FetchCompanyDocuments: (payload) => ({
    //     type: companyActionTypes.FETCH_COMPANY_DOCUMENTS,
    //     data: payload
    // }),
    UploadDocumentData: (payload) => ({
        data: payload
    }),
    //Company Divisions
    FetchCompanyDivision: (payload) => ({
        type: companyActionTypes.FETCH_COMPANY_DIVISION,
        data: payload
    }),
    FetchDivisionCostCenter: (payload) => ({
        type: companyActionTypes.FETCH_DIVISION_COST_CENTER,
        data: payload
    }),
    AddCompanyDivision: (payload) => ({
        type: companyActionTypes.ADD_NEW_DIVISION,
        data: payload
    }),
    AddCompanyDivisionCostcentre: (payload) => ({
        type: companyActionTypes.ADD_NEW_DIVISION_COST_CENTRE,
        data: payload
    }),
    EditCompanyDivisionCostcentre: (payload) => ({
        type: companyActionTypes.EDIT_COMPANY_DIVISION_COST_CENTER,
        data: payload
    }),
    UpdateCompanyDivisionCostcentre: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_DIVISION_COST_CENTER,
        data: payload
    }),
    UpdateCompanyDivision: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_DIVISION,
        data: payload
    }),
    DeleteCompanyDivision: (payload) => ({
        type: companyActionTypes.DELETE_COMPANY_DIVISION,
        data: payload
    }),
    UpdateCompanyDivisionButton: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_DIVISION_BUTTON,
        data: payload
    }),
    UpdateCostCentreButton: (payload) => ({
        type: companyActionTypes.UPDATE_COST_CENTRE_BUTTON,
        data: payload
    }),
    DeleteCompanyDivisionCostCentre: (payload) => ({
        type: companyActionTypes.DELETE_DIVISION_COST_CENTRE,
        data: payload
    }),
    //Notes
    // FetchCompanyNotes: (payload) => ({
    //     type: companyActionTypes.FETCH_COMPANY_NOTE,
    //     data: payload
    // }),
    AddCompanyNotesDetails: (payload) => ({
        type: companyActionTypes.ADD_COMPANY_NOTE,
        data: payload
    }),
    // UpdateCompanyNotesDetails: (payload) => ({
    //     type: companyActionTypes.UPDATE_COMPANY_NOTE,
    //     data: payload
    // }),
    // DeleteCompanyNotesDetails: (payload) => ({
    //     type: companyActionTypes.DELETE_COMPANY_NOTE,
    //     data: payload
    // }),
    // EditCompanyNotesDetails: (payload) => ({
    //     type: companyActionTypes.EDIT_COMPANY_NOTE,
    //     data: payload
    // }),

    //Payroll
    FetchPayrollData: (payload) => ({
        type: companyActionTypes.FETCH_PAYROLL_DATA,
        data: payload
    }),
    FetchPayrollPeriodName: (payload) => ({
        type: companyActionTypes.FETCH_PAYROLL_PERIOD_NAME,
        data: payload
    }),
    AddNewPayroll: (payload) => ({
        type: companyActionTypes.ADD_NEW_PAYROLL,
        data: payload
    }),
    AddNewPayrollPeriodName: (payload) => ({
        type: companyActionTypes.ADD_NEW_PAYROLL_PERIOD_NAME,
        data: payload
    }),
    FetchCostSaleReference: (payload) => ({
        type: companyActionTypes.FETCH_COST_SALE_REFERENCE,
        data: payload
    }),
    EditPayrollType: (payload) => ({
        type: companyActionTypes.EDIT_COMPANY_PAYROLL,
        data: payload
    }),
    DeletePayrollType: (payload) => ({
        type: companyActionTypes.DELETE_PAYROLL_TYPE,
        data: payload
    }),
    PayrollPopupClear: (payload) => ({
        type: companyActionTypes.PAYROLL_POPUP_CLEAR,
        data: payload
    }),
    UpdateCompanyPayrollButton: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_PAYROLL_BUTTON,
        data: payload
    }),
    UpdateCompanyPayroll: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_PAYROLL,
        data: payload
    }),
    AddNewPeriodName: (payload) => ({
        type: companyActionTypes.ADD_NEWPAYROLL_PERIOD_NAME,
        data: payload
    }),
    EditPayrollPeriodName: (payload) => ({
        type: companyActionTypes.EDIT_PAYROLL_PERIOD_NAME,
        data: payload
    }),
    UpdatePayrollPeriodName: (payload) => ({
        type: companyActionTypes.UPADTE_PAYROLL_PERIOD_NAME,
        data: payload
    }),
    DeletePayrollPeriodName: (payload) => ({
        type: companyActionTypes.DELETE_PAYROLL_PERIOD_NAME,
        data: payload
    }),
    UpdateOverrideCostSaleReference: (payload) => ({
        type: companyActionTypes.UPDATE_OVERRIDE_COST_SALE_REFERENCE,
        data: payload
    }),
    TogglePayrollPeriodNameButton: (payload) => ({
        type: companyActionTypes.TOGGLE_SUBMIT_BUTTON,
        data: payload
    }),
    //Update the email template in editor
    UpdateEmailTemplate: (payload) => ({
        type: companyActionTypes.UPDATE_EMAIL_TEMPLATE,
        data: payload
    }),
    UpdateEmailTemplateType: (payload) => ({
        type: companyActionTypes.UPDATE_EMAIL_TEMPLATE_TYPE,
        data: payload
    }),
    UpdateCompanyEmailTemplate: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_EMAIL_TEMPLATE,
        data: payload
    }),
    FetchPlaceholders: (payload) => ({
        type: companyActionTypes.FETCH_PLACEHOLDERS,
        data: payload
    }),
    //Company Taxes
    AddCompanyTaxes: (payload) => ({
        type: companyActionTypes.ADD_COMPANY_TAXES,
        data: payload
    }),
    EditCompanyTaxes: (payload) => ({
        type: companyActionTypes.EDIT_COMPANY_TAXES,
        data: payload
    }),
    UpdateCompanyTaxes: (payload) => ({
        type: companyActionTypes.UPDATE_COMPANY_TAXES,
        data: payload
    }),
    DeleteCompanyTaxes: (payload) => ({
        type: companyActionTypes.DELETE_COMPANY_TAXES,
        data: payload
    }),
    //POST ACTION
    SaveCompanyDetails: (payload) => ({
        type: companyActionTypes.SAVE_COMPANY_DETAILS,
        data: payload
    }),
    CompanyUpdatedAction: (payload) => ({
        type: companyActionTypes.COMPANY_UPDATED,
        data: payload
    }),
    AddUpdateInvoiceDefaults: (payload) => ({
        type: companyActionTypes.ADD_UPDATE_INVOICE_DEFAULTS,
        data: payload
    }),
    AddUpdateCompanyInfo: (payload) => ({
        type: companyActionTypes.ADD_UPDATE_COMPANY_INFO,
        data: payload
    }),
    ClearStateCityData: () => ({
        type: companyActionTypes.CLEAR_STATE_CITY_DATA
    }),
    ClearCompanyDetails:()=>({
        type: companyActionTypes.CLEAR_COMPANY_DETAILS,
    })
};

export const ApiRequest = (dispatch, response) => {
    if (response.status === 200) {
        dispatch(actions.FetchCompanyOffice(response.data.result));

    } else {
        MaterializeComponent.toast({
            html: 'FetchCompanyOffice API went wrong',
            classes: 'dangerToast'
        });
    }
};
export const showHidePanel = () => (dispatch) => {
    dispatch(actions.showHidePanel());
};

export const FetchCompanyDataList = (data) => (dispatch) => {
    let apiUrl = companyAPIConfig.companyBaseURL + companyAPIConfig.companyDetails + '?';
    if (data.companyCode !== undefined) {
        apiUrl += "companyCode=" + data.companyCode + '&';
    }
    if (data.companyName !== undefined) {
        apiUrl += "companyName=" + data.companyName + '&';
    }
    if (data.operatingCountry !== undefined) {
        apiUrl += "operatingCountry=" + data.operatingCountry + '&';
    }
    apiUrl = apiUrl.slice(0, -1);
    processApiRequest(apiUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCompanyDataList(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'Fetch Company List Something went wrong.',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        alert("error", error);
    });

};
export const GetSelectedCompanyCode = (data) => (dispatch, getstate) => {
    dispatch(actions.GetSelectedCompanyCode(data));
};

export const ClearSearchData = () => (dispatch) => {
    dispatch(actions.ClearSearchData());
};

export const AddExpectedMargin = (data) => (dispatch) => {
    dispatch(actions.AddExpectedMargin(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DeleteExpectedMargin = (data) => (dispatch) => {
    dispatch(actions.DeleteExpectedMargin(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
// before editing storing the actual data 
export const EditExpectedMargin = (data) => (dispatch) => {
    dispatch(actions.EditExpectedMargin(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const AddCompanyOffice = (data) => (dispatch) => {
    dispatch(actions.AddCompanyOffice(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const UpdateCompanyOffice = (data) => (dispatch) => {
    dispatch(actions.UpdateCompanyOffice(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const DeleteCompanyOffices = (data) => (dispatch) => {
    dispatch(actions.DeleteCompanyOffices(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
// before editing storing the actual data 
export const EditCompanyOffice = (data) => (dispatch) => {
    dispatch(FetchState(data.country));
    dispatch(FetchCity(data.state));
    dispatch(actions.EditCompanyOffice(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const FetchState = (data) => (dispatch) => {
    const stateMasterData = masterData.baseUrl + masterData.state + "?country=" + data;
    processApiRequest(stateMasterData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchState(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchState went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: error + 'went wrong',
            classes: 'dangerToast'
        });
    });
};

export const FetchCity = (data) => (dispatch) => {
    const cityMasterData = masterData.baseUrl + masterData.city + "?state=" + data;
    processApiRequest(cityMasterData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCity(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchCity went wrong',
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

export const FetchBusinessUnit = (data) => (dispatch) => {
    const businessUnitData = masterData.baseUrl + masterData.businessUnit;
    processApiRequest(businessUnitData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchBusinessUnit(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchBusinessUnit went wrong',
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
export const FetchSalutation = (data) => (dispatch) => {
    const salutationMasterData = masterData.baseUrl + masterData.salutation;
    processApiRequest(salutationMasterData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchSalutation(response.data.result));

        } else {
            MaterializeComponent.toast({
                html: 'FetchSalutation went wrong',
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
export const FetchTaxData = () => (dispatch) => {
    const taxData = masterData.baseUrl + masterData.tax;
    processApiRequest(taxData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchTaxData(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'FetchVatPrefix went wrong',
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
export const FetchVatPrefix = (data) => (dispatch) => {
    const vatPrefixMasterData = masterData.baseUrl + masterData.prefix;
    processApiRequest(vatPrefixMasterData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchVatPrefix(response.data.result));
        } else {
            MaterializeComponent.toast({
                html: 'FetchVatPrefix went wrong',
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

export const CompanyFetchVatPrefix = (data) => (dispatch) => {
    const vatPrefixMasterData = masterData.baseUrl + masterData.prefix;
    processApiRequest(vatPrefixMasterData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            const euvatPrefixes = response.data.result.map(x => {
                return {
                    name: x,
                    value: x
                };
            });
            dispatch(actions.CompanyFetchVatPrefix(euvatPrefixes));

        } else {
            MaterializeComponent.toast({
                html: 'FetchVatPrefix went wrong',
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

export const FetchCountry = () => (dispatch) => {
    const countryMasterData = masterData.baseUrl + masterData.country;
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

export const ShowButtonHandler = () => (dispatch) => {
    dispatch(actions.ShowButtonHandler());
};
//documentTypes Master data
export const FetchMasterCompanyDocumentTypes = () => (dispatch, getstate) => {
    const documentTypesMasterDataUrl = masterData.baseUrl + masterData.documentType + "?moduleName=company";
    // getstate().CompanyReducer.gridProps.api.showLoadingOverlay();
    processApiRequest(documentTypesMasterDataUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchMasterCompanyDocumentTypes(response.data.result));
            // getstate().CompanyReducer.gridProps.api.hideOverlay();

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
export const UploadDocumentData = (data) => (dispatch, getstate) => {
    const companyCode = getstate().CompanyReducer.selectedCompanyCode;
    const documentUploadIdUrl = companyAPIConfig.docBaseUrl + "documents/CO/" + companyCode;
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
export const AddDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.AddDocumentDetails(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const UpdateDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.UpdateDocumentDetails(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DispalyDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.DispalyDocumentDetails(data));
};
export const DownloadDocumentData = (data) => (dispatch, getstate) => {    
    const companyCode = getstate().CompanyReducer.selectedCompanyCode;
    const downloadDocumentDataUrl = companyAPIConfig.docBaseUrl + "documents/CO/" + companyCode + '/' + data;
    window.open(downloadDocumentDataUrl, "_blank");
};

export const DownloadUploadedDocumentData = (data) => (dispatch, getstate) => {
    const companyCode = getstate().CompanyReducer.selectedCompanyCode;
    const downloadDocumentDataUrl = companyAPIConfig.docBaseUrl + "documents/CO/" + companyCode + '/' + data + '/temp';
    window.open(downloadDocumentDataUrl, "_blank");
};
export const PasteDocumentUploadData = (data) => (dispatch, getstate) => {
    const companyCode = getstate().CompanyReducer.selectedCompanyCode;
    const pasteDocumentUploadIdUrl = companyAPIConfig.docBaseUrl + "documents/CO/" + companyCode + "/Copy";
    return processApiRequest(pasteDocumentUploadIdUrl, {
        method: "POST",
        data:data
    }).then(response => {
        if (response.status === 200) {
            return response.data.result;
        }
    }).catch(error => {
        alert("error", error);
    });
};

export const UpdateExpectedMargin = (data) => (dispatch) => {
    dispatch(actions.UpdateExpectedMargin(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DeleteCompanyDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.DeleteCompanyDocumentDetails(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const CopyDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.CopyDocumentDetails(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const EditCompanyDocumentDetails = (data) => (dispatch) => {
    dispatch(actions.EditCompanyDocumentDetails(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
// export const FetchCompanyDocuments = () => (dispatch, getstate) => {

//     //TO-DO:
//     //Write the logic for getting the data using API
//     const companyName = getstate().CompanyReducer.selectedCompany;
//     const documentDataUrl = companyAPIConfig.companyBaseURL + companyAPIConfig.companyDetails + '/' + companyName + companyAPIConfig.companyDetail;

//     processApiRequest(documentDataUrl, {
//         method: "GET"
//     }).then(response => {
//         if (response.status === 200) {
//             dispatch(actions.FetchCompanyDocuments(response.data));

//         } else {
//             MaterializeComponent.toast({
//                 html: 'Fetch Document Types Something went wrong',
//                 classes: 'dangerToast'
//             });
//         }
//     }).catch(error => {
//         alert("error", error);
//     });
// };

//contracts
export const FetchCompanyContract = () => (dispatch, getstate) => {
    const companyCode = getstate().CompanyReducer.selectedCompanyCode;
    const companyContractData = companyAPIConfig.companyBaseURL + companyAPIConfig.companyContractDetail + '=' + companyCode;
    processApiRequest(companyContractData, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCompanyContract(response.data.result));

        } else {
            alert("Company Contract API Went Wrong");
        }
    }).catch(error => {
        alert("error", error);
    });

};

function SetDefaultCompanyDetailProperty(data) {
    if (data !== undefined && data !== null) {
        if (data.CompanyOffices !== undefined && data.CompanyOffices === null)
            data.CompanyOffices = [];

        if (data.CompanyDivisions !== undefined && data.CompanyDivisions === null)
            data.CompanyDivisions = [];

        if (data.CompanyDivisionCostCenters !== undefined && data.CompanyDivisionCostCenters === null)
            data.CompanyDivisionCostCenters = [];

        if (data.CompanyDocuments !== undefined && data.CompanyDocuments === null)
            data.CompanyDocuments = [];

        //if (data.CompanyEmailTemplates !== undefined && data.CompanyEmailTemplates === null)
        //    data.CompanyEmailTemplates = {};

        if (data.CompanyExpectedMargins !== undefined && data.CompanyExpectedMargins === null)
            data.CompanyExpectedMargins = [];

        //if (data.CompanyInvoiceInfo !== undefined && data.CompanyInvoiceInfo === null)
        //    data.CompanyInvoiceInfo = {};

        if (data.CompanyNotes !== undefined && data.CompanyNotes === null)
            data.CompanyNotes = [];

        if (data.CompanyPayrolls !== undefined && data.CompanyPayrolls === null)
            data.CompanyPayrolls = [];

        if (data.CompanyPayrollPeriods !== undefined && data.CompanyPayrollPeriods === null)
            data.CompanyPayrollPeriods = [];

        if (data.CompanyQualifications !== undefined && data.CompanyQualifications === null)
            data.CompanyQualifications = [];

        if (data.CompanyTaxes !== undefined && data.CompanyTaxes === null)
            data.CompanyTaxes = [];
    }

    return data;
}

//General Details
export const FetchCompanyDetails = () => (dispatch, getstate) => {
    const selectedCompanyCode = getstate().CompanyReducer.selectedCompanyCode;
    const companyDetailUrl = companyAPIConfig.companyBaseURL + companyAPIConfig.companyDetails + "/" + selectedCompanyCode + companyAPIConfig.companyDetail;
    
    dispatch(SetLoader());
    
    processApiRequest(companyDetailUrl, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCompanyDetails(SetDefaultCompanyDetailProperty(response.data)));
            dispatch(RemoveLoader());
            /**
             * toggle company updated value to false after company fetch done
             */
            dispatch(actions.CompanyUpdatedAction(false));
        }
        else {
            MaterializeComponent.toast({
                html: 'company details api went wrong',
                classes: 'dangerToast'
            });
        }
    }).catch(error => {
        MaterializeComponent.toast({
            html: 'something went wrong' + error,
            classes: 'dangerToast'
        });
    });
};
export const AddInvoiceRemittance = (data) => (dispatch) => {
    dispatch(actions.AddInvoiceRemittance(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const EditInvoiceRemittance = (data) => (dispatch) => {
    dispatch(actions.EditInvoiceRemittance(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const UpdateInvoiceRemittance = (data) => (dispatch) => {
    dispatch(actions.UpdateInvoiceRemittance(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DeleteInvoiceRemittance = (data) => (dispatch) => {
    dispatch(actions.DeleteInvoiceRemittance(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const AddInvoiceFooter = (data) => (dispatch) => {
    dispatch(actions.AddInvoiceFooter(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const EditInvoiceFooter = (data) => (dispatch) => {
    dispatch(actions.EditInvoiceFooter(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const UpdateInvoiceFooter = (data) => (dispatch) => {
    dispatch(actions.UpdateInvoiceFooter(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DeleteInvoiceFooter = (data) => (dispatch) => {
    dispatch(actions.DeleteInvoiceFooter(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const FetchCompanyDivision = () => (dispatch, getstate) => {
    const state = getstate();
    const companyDivision = state.CompanyReducer.companyDetail.CompanyDivisions;
    dispatch(actions.FetchCompanyDivision(companyDivision));
};
export const FetchDivisionCostCenter = () => (dispatch, getstate) => {
    const state = getstate();
    const divisionCostCentreData = state.CompanyReducer.companyDetail.CompanyDivisionCostCenters;
    // const CompanyDivisionURL = companyAPIConfig.companyBaseURL + companyAPIConfig.companyDetails +'/'+state.appLayoutReducer.selectedCompany+ companyAPIConfig.detail;
    dispatch(actions.FetchDivisionCostCenter(divisionCostCentreData));
};
export const AddNewDivision = (payload) => (dispatch, getstate) => {
    dispatch(actions.AddCompanyDivision(payload));
    dispatch(actions.CompanyUpdatedAction(true));
    // dispatch(actions.UpdateAllDivision(payload.allDivisionDataToUpdate));

};

export const AddNewDivisionCostCentre = (payload) => (dispatch, getstate) => {
    dispatch(actions.AddCompanyDivisionCostcentre(payload));
    dispatch(actions.CompanyUpdatedAction(true));

};

export const EditCompanyDivisionCostcentre = (data) => (dispatch) => {
    dispatch(actions.UpdateCostCentreButton(true));
    dispatch(actions.EditCompanyDivisionCostcentre(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const UpdateCompanyDivisionCostcentre = (data) => (dispatch, getstate) => {
    const state = getstate();
    const updatedDivisionCostCentre = state.CompanyReducer.companyDetail.CompanyDivisionCostCenters.map((iteratedValue) => {
        if (iteratedValue.division === data.oldDataCostcentre.division && iteratedValue.costCenterCode === data.oldDataCostcentre.costCenterCode && iteratedValue.costCenterName === data.oldDataCostcentre.costCenterName) {
            return iteratedValue = Object.assign({}, iteratedValue, data.data);
        } else {
            return iteratedValue;
        }
    });
    dispatch(actions.UpdateCompanyDivisionCostcentre(updatedDivisionCostCentre));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const UpdateCompanyDivision = (data) => (dispatch, getstate) => {
    const state = getstate();
    const updatedDivision = state.CompanyReducer.companyDetail.CompanyDivisions.map((iteratedValue) => {
        if (iteratedValue.divisionName === data.oldDivisionName) {
            return iteratedValue = Object.assign({}, iteratedValue, data.data);
        } else {
            return iteratedValue;
        }
    });
    dispatch(actions.UpdateCompanyDivision(updatedDivision));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DeleteCompanyDivision = (data) => (dispatch, getstate) => {
    const state = getstate();
    const newState = state.CompanyReducer.companyDetail.CompanyDivisions;
    newState.map((iteratedValue, index) => {
        if (iteratedValue.divisionName === data) {
            if (iteratedValue.recordStatus !== "N") {
                newState[index].recordStatus = "D";
            }
            else {
                newState.splice(index, 1);
            }
        }
    });

    dispatch(actions.DeleteCompanyDivision(newState));
    dispatch(actions.CompanyUpdatedAction(true));

};
export const UpdateCompanyDivisionButton = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateCompanyDivisionButton(data));
};
export const UpdateCostCentreButton = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateCostCentreButton(data));
};
export const DeleteCompanyDivisionCostCentre = (data) => (dispatch, getstate) => {
    const state = getstate();
    const newState = state.CompanyReducer.companyDetail.CompanyDivisionCostCenters;
    data.map(row => {
        newState.map((iteratedValue, index) => {
            if (iteratedValue.costCenterCode === row.costCenterCode && iteratedValue.costCenterName === row.costCenterName) {
                if (row.recordStatus !== "N") {
                    newState[index].recordStatus = "D";
                }
                else {
                    newState.splice(index, 1);
                }
            }
        });
    });
    dispatch(actions.DeleteCompanyDivisionCostCentre(newState));
    dispatch(actions.CompanyUpdatedAction(true));
};

// export const FetchCompanyNotes = () => (dispatch, getstate) => {

//     const companyName = getstate().appLayoutReducer.selectedCompany;
//     const CompanyNoteURL = companyAPIConfig.companyBaseURL + companyAPIConfig.companyDetails + '/' + companyName + companyAPIConfig.companyDetail;

//     processApiRequest(CompanyNoteURL, {
//         method: "GET"
//     }).then(response => {
//         if (response.status === 200) {
//             dispatch(actions.FetchCompanyNotes(response.data));
//         } else {
//             MaterializeComponent.toast({
//                 html: 'FetchCompanyNotes API went wrong',
//                 classes: 'dangerToast'
//             });
//         }
//     }).catch(error => {
//         MaterializeComponent.toast({
//             html: error + 'API went wrong',
//             classes: 'dangerToast'
//         });
//     });
// };
export const AddCompanyNotesDetails = (data) => (dispatch) => {
    dispatch(actions.AddCompanyNotesDetails(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
// export const UpdateCompanyNotesDetails = (data) => (dispatch) => {
//     dispatch(actions.UpdateCompanyNotesDetails(data));
//     dispatch(actions.CompanyUpdatedAction(true));
// };
// export const DeleteCompanyNotesDetails = (data) => (dispatch) => {
//     dispatch(actions.DeleteCompanyNotesDetails(data));
//     dispatch(actions.CompanyUpdatedAction(true));
// };
// export const EditCompanyNotesDetails = (data) => (dispatch) => {
//     dispatch(actions.EditCompanyNotesDetails(data));
//     dispatch(actions.CompanyUpdatedAction(true));
// };

//Payroll Actions
export const FetchPayrollData = () => (dispatch, getstate) => {
    const state = getstate();
    const payrollData = state.CompanyReducer.companyDetail.CompanyPayrolls;
    dispatch(actions.FetchPayrollData(payrollData));
};

export const FetchPayrollPeriodName = () => (dispatch, getstate) => {
    const state = getstate();
    const payrollPeriodNames = state.CompanyReducer.companyDetail.CompanyPayrollPeriods;
    dispatch(actions.FetchPayrollPeriodName(payrollPeriodNames));
};

export const AddNewPayroll = (payload) => (dispatch, getstate) => {
    dispatch(actions.AddNewPayroll(payload));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const AddNewPayrollPeriodName = (payload) => (dispatch, getstate) => {
    dispatch(actions.AddNewPayrollPeriodName(payload));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const FetchCostSaleReference = () => async (dispatch, getstate) => {
    const state = getstate();
    const CompanySaleReferenceURL = companyAPIConfig.companyBaseURL + companyAPIConfig.costSaleReference;

    processApiRequest(CompanySaleReferenceURL, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            dispatch(actions.FetchCostSaleReference(response.data.result));;
        } else {
            MaterializeComponent.toast({
                html: 'FetchCostSaleReference API went wrong',
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
/**
 * Delete Payroll Type Action
 */
export const DeletePayrollType = (payload) => (dispatch, getstate) => {
    const state = getstate();
    const newState = state.CompanyReducer.companyDetail.CompanyPayrolls;
    newState.map((iteratedValue, index) => {
        if (iteratedValue.payrollType === payload) {
            if (iteratedValue.recordStatus !== "N") {
                newState[index].recordStatus = "D";
            }
            else {
                newState.splice(index, 1);
            }
        }
    });
    dispatch(actions.DeletePayrollType(newState));
    dispatch(actions.CompanyUpdatedAction(true));
};

/**
 * Payroll popup clear Action
 */
export const PayrollPopupClear = (payload) => (dispatch, getstate) => {
    dispatch(actions.PayrollPopupClear());
};

/**
 * Company Payroll Button Update Action
 */
export const UpdateCompanyPayrollButton = (data) => (dispatch, getstate) => {
    dispatch(actions.UpdateCompanyPayrollButton(data));
};

/**
 * Update Payroll Action
 */
export const UpdateCompanyPayroll = (data) => (dispatch, getstate) => {
    const state = getstate();
    const updatedPayroll = state.CompanyReducer.companyDetail.CompanyPayrolls.map((iteratedValue) => {
        if (iteratedValue.payrollType === data.oldPayrollName) {
            return iteratedValue = Object.assign({}, iteratedValue, data.data);
        } else {
            return iteratedValue;
        }
    });
    dispatch(actions.UpdateCompanyPayroll(updatedPayroll));
    dispatch(actions.CompanyUpdatedAction(true));
};
//Add New Payroll Period Names
export const AddNewPeriodName = (payload) => (dispatch, getstate) => {
    dispatch(actions.AddNewPeriodName(payload));
};

export const EditPayrollPeriodName = (payload) => (dispatch, getstate) => {
    dispatch(actions.TogglePayrollPeriodNameButton(false));
    dispatch(actions.EditPayrollPeriodName(payload));
};

export const UpdatePayrollPeriodName = (payload) => (dispatch, getstate) => {
    const state = getstate();
    const updatedPayrollPeriodName = state.CompanyReducer.companyDetail.CompanyPayrollPeriods.map((iteratedValue) => {
        if (iteratedValue.periodName === payload.oldPayrollNameData.periodName && iteratedValue.payrollType === payload.oldPayrollNameData.payrollType) {
            return iteratedValue = Object.assign({}, iteratedValue, payload.data);
        } else {
            return iteratedValue;
        }
    });

    dispatch(actions.UpdatePayrollPeriodName(updatedPayrollPeriodName));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const DeletePayrollPeriodName = (payload) => (dispatch, getstate) => {
    const state = getstate();
    const newState = state.CompanyReducer.companyDetail.CompanyPayrollPeriods;
    payload.map(row => {
        newState.map((iteratedValue, index) => {
            if (iteratedValue.periodName === row.periodName && iteratedValue.payrollType === row.payrollType) {
                if (row.recordStatus !== "N") {
                    newState[index].recordStatus = "D";
                }
                else {
                    newState.splice(index, 1);
                }
            }
        });
    });
    dispatch(actions.DeletePayrollPeriodName(newState));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const UpdateOverrideCostSaleReference = (payload) => (dispatch, getstate) => {
    dispatch(actions.UpdateOverrideCostSaleReference(payload));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const TogglePayrollPeriodNameButton = (payload) => (dispatch, getstate) => {
    dispatch(actions.TogglePayrollPeriodNameButton(payload));
};
// Email Template Actions
export const UpdateEmailTemplate = (data) => (dispatch) => {
    dispatch(actions.UpdateEmailTemplate(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const UpdateEmailTemplateType = (data) => (dispatch) => {
    dispatch(actions.UpdateEmailTemplateType(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const UpdateCompanyEmailTemplate = (data) => (dispatch) => {
    dispatch(actions.UpdateCompanyEmailTemplate(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const FetchPlaceholders = (data) => (dispatch) => {
    const FetchPlaceholdersApi = companyAPIConfig.companyBaseURL + companyAPIConfig.companyPlaceholder+"?ModuleName="+data;
    processApiRequest(FetchPlaceholdersApi, {
        method: "GET"
    }).then(response => {
        if (response.status === 200) {
            const data=response.data.result.sort((a,b)=>{
                return a.displayName<b.displayName?-1:1;
            });
            dispatch(actions.FetchPlaceholders(data));
        } else {
            MaterializeComponent.toast({
                html: 'FetchPlaceholders API went wrong',
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
export const AddCompanyTaxes = (data) => (dispatch) => {
    dispatch(actions.AddCompanyTaxes(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const EditCompanyTaxes = (data) => (dispatch) => {
    dispatch(actions.EditCompanyTaxes(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const UpdateCompanyTaxes = (data) => (dispatch) => {
    dispatch(actions.UpdateCompanyTaxes(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const DeleteCompanyTaxes = (data) => (dispatch) => {
    dispatch(actions.DeleteCompanyTaxes(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const AddUpdateInvoiceDefaults = (data) => (dispatch) => {
    dispatch(actions.AddUpdateInvoiceDefaults(data));
    dispatch(actions.CompanyUpdatedAction(true));
};
export const AddUpdateCompanyInfo = (data) => (dispatch) => {
    dispatch(actions.AddUpdateCompanyInfo(data));
    dispatch(actions.CompanyUpdatedAction(true));
};

export const ClearStateCityData =() => (dispatch) => {
    dispatch(actions.ClearStateCityData());
};

/**
 * Action to clear company details
 */
export const ClearCompanyDetails = () => (dispatch) => {
    dispatch(actions.ClearCompanyDetails());
};

//POST COMPANY DATA
export const SaveCompanyDetails = () => (dispatch, getstate) => {    
    dispatch(SetLoader());
    // const companyDataToPost = [];
    const companyData = SetDefaultCompanyDetailProperty(getstate().CompanyReducer.companyDetail);

    companyData.CompanyInfo["recordStatus"] = "M";

    if (companyData.CompanyOffices) {
        companyData.CompanyOffices.map(row => {
            if (row.recordStatus === "N") {
                row.documentId = 0;
            }
        });
    }
    if (companyData.CompanyDivisions) {
        companyData.CompanyDivisions.map(row => {
            if (row.recordStatus === "N") {
                row.companyDivisionId = 0;
            }
        });
    }

    if(companyData.CompanyPayrolls){
        companyData.CompanyPayrolls.map(row=>{
            if(row.recordStatus === "N") {
                row.companyPayrollId = 0;
            }
        });
    }

    if(companyData.CompanyPayrollPeriods){
        companyData.CompanyPayrollPeriods.map(row=>{
            if(row.recordStatus==="N"){
                row.companyPayrollPeriodId=0;
            }
        });
    }

    if (companyData.CompanyExpectedMargins) {
        companyData.CompanyExpectedMargins.map(row => {
            if (row.recordStatus === "N") {
                row.companyExpectedMarginId = 0;
            }
        });
    }
    if (companyData.CompanyNotes) {
        companyData.CompanyNotes.map(row => {
            if (row.recordStatus === "N") {
                row.companyNoteId = 0;
            }
        });
    }
    if (companyData.CompanyDocuments) {
        companyData.CompanyDocuments.map(row => {
            if (row.recordStatus === "N") {
                row.companyDocumentId = 0;
            }
        });
    }
    if (companyData.CompanyTaxes) {
        companyData.CompanyTaxes.map(row => {
            if (row.recordStatus === "N") {
                row.companyTaxId = 0;
            }
        });
    }

    //companyDataToPost.push(companyData);
    const postCompanyUrl = companyAPIConfig.companyBaseURL + companyAPIConfig.companyDetails + companyAPIConfig.companyDetail;

    processApiRequest(postCompanyUrl, {
        method: "PUT",
        data: companyData, //data: companyDataToPost
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Acces-Control-Allow-Origin": "*"
        }
    }).then(response => {
        if (response.status === 200) {
            if (response.data.code == 1) {
                dispatch(SuccessAlert(response.data, "Company"));
                dispatch(FetchCompanyDetails());
            }
            else if (response.data.code == 11) {
                if (response.data.validationMessages.length > 0) {
                    response.data.validationMessages.map(result => {
                        if (result.messages.length > 0) {
                            result.messages.map(valMessage => {
                                dispatch(ValidationAlert(valMessage.message, "Company"));
                            });
                        }
                        else {
                            dispatch(ValidationAlert("Something went wrong", "Company"));
                        }
                    });
                }
                else if (response.data.messages.length > 0) {
                    response.data.messages.map(result => {
                        if (result.message.length > 0) {
                            dispatch(ValidationAlert(result.message, "Company"));
                        }
                    });
                }
                else {
                    dispatch(ValidationAlert("Something went wrong", "Company"));
                }
            }
            else {
                dispatch(FailureAlert(response.data, "Company"));
            }
        }
        dispatch(RemoveLoader());
    }).catch(error => {
        alert("error", error);
    });
};