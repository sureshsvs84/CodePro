import { contractActionTypes } from '../../constants/actionTypes';
import { getlocalizeData } from '../../utils/commonUtils';
import _ from 'lodash';

const localConstant = getlocalizeData();
const initialState = {
    masterDocumentTypeData:[],
    contractDetail:[],
    isbtnDisable:true,
    editContractDocumentDetails:{},
    showButton:false,
    displayDocuments:[],
    copyDocumentDetails:{},
    ContractDocuments:[],
    selectedContractNumber:null
};
export const DocumentReducer = (state = initialState, action) => {
    const { type, data } = action;
    let editedRow = {}, index = -1, newState = {};
    switch (type) {
        case contractActionTypes.SELECTED_CONTRACT_NUMBER:
            state = {
                ...state,
                selectedContractNumber: data,
                isbtnDisable:true,
            };
            return state;
        case contractActionTypes.FETCH_DOCUMENT_TYPES: //Document Type Master Data            
            state = {
                ...state,
                masterDocumentTypeData: data,
                
            };
            return state;
        case contractActionTypes.DISPLAY_CONTRACT_DOCUMENTS:
            state = {
                ...state,
                displayDocuments: data
            };
         return state;
        case contractActionTypes.ADD_CONTRACT_DOCUMENTS_DETAILS:  //Documents Add   
            if (state.ContractDocuments == null) {
                state = {
                    ...state,
                    ContractDocuments: [],                   
                    isbtnDisable:false,
                };
            }
            newState = Object.assign([], state.ContractDocuments);
            data.map(document => {
                return newState.push(document);
            });
            state = {
                ...state,
                ContractDocuments: newState,
                isbtnDisable:false,
                copyDocumentDetails: {},
                editContractDocumentDetails: {}
            };

            return state;
        case contractActionTypes.FETCH_CONTRACT_DOCUMENTS://Fetch Documents
            state = {
                ...state,
                ContractDocuments: data
            };
            return state;
        case contractActionTypes.COPY_DOCUMENTS_DETAILS: //Documents Copy        

            state = {
                ...state,
                copyDocumentDetails: data,
                isbtnDisable:false,
            };
            return state;
        case contractActionTypes.EDIT_DOCUMENTS_DETAILS: //Edit Document
            
           state = {
                ...state,
                editContractDocumentDetails: data,
                showButton: true,
              };
            return state;
            case contractActionTypes.UPDATE_CONTRACT_DOCUMENTS_DETAILS:  //Document Update
            
            editedRow = Object.assign({}, state.editContractDocumentDetails, data);
            index = state.ContractDocuments.findIndex(document => document.contractDocumentId === editedRow.contractDocumentId);
            newState = Object.assign([], state.ContractDocuments);
            newState[index] = editedRow;
            if (index >= 0)
                state = {
                    ...state,
                        ContractDocuments: newState,
                    isbtnDisable:false,
                };
            return state;        
       
        case contractActionTypes.DELETE_CONTRACT_DOCUMENTS_DETAILS: //Documents Delete 
            
            newState = Object.assign([], state.ContractDocuments);
            data.map(row => {
                newState.map(document => {
                    if (document.contractDocumentId === row.contractDocumentId) {
                        index = newState.findIndex(value => (value.contractDocumentId === row.contractDocumentId));

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
                ContractDocuments: newState,
                copyDocumentDetails:[],
                isbtnDisable:false,
            };
            return state;
        case contractActionTypes.SHOWBUTTON:
            state = {
                ...state,
                showButton: false,
                editContractDocumentDetails: {},
                
            };
            return state;
        default:return state;
    }
};
