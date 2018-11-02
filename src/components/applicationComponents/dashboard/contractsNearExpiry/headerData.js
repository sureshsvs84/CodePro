import { getlocalizeData } from '../../../../utils/commonUtils';
const localConstant = getlocalizeData();
export const headerData = {
    "columnDefs": [
        {
            "headerName":  localConstant.gridHeader.CONTRACT_NO,
            "field": "contractNumber",
            "filter": "agTextColumnFilter",            
            "cellRenderer":   "HyperLink",
            "cellRendererParams":
            {
                "dataToRender":"contractNumber"
            },
            "width":140
        },
        {
            "headerName": localConstant.gridHeader.CUSTOMER_NAME,
            "field": "contractCustomerName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.CUSTOMER_CONTRACT_NUMBER,
            "field": "customerContractNumber",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.START_DATE,
            "field": "contractStartDate",
            "filter": "agDateColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "contractStartDate"
            },
            "width": 130
        },
        {
            "headerName": localConstant.gridHeader.END_DATE,
            "field": "contractEndDate",
            "filter": "agDateColumnFilter" ,          
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "contractEndDate"
            },
            "width": 130
        },
        {
            "headerName": localConstant.gridHeader.CRM_REF,
            "field": "contractCRMReference",
            "filter": "agTextColumnFilter",
            "width": 130
        },
        {
            "headerName": localConstant.gridHeader.CONTRACT_STRUCTURE,
            "field": "contractStructure",
            "filter": "agTextColumnFilter",
            "width": 175
        },
        {
            "headerName":localConstant.gridHeader.CONTRACT_NEAR_EXPIRY,
            "field": "contractFutureDays",
            "filter": "agTextColumnFilter",
            "width": 175
        }
    ],
    "defaultColDef": {
        "width": 80
      },
    "enableFilter":true, 
    "enableSorting":true, 
    "pagination": true,
    "searchable":true,
    "gridActions":true,
    "gridTitlePanel":true,
    "gridHeight":59
};