import { getlocalizeData } from '../../../../utils/commonUtils';
const localConstant = getlocalizeData();
export const headerData = {
    "columnDefs": [
        {
            "headerName": localConstant.gridHeader.VISIT_DATE,
            "field": "visitStartDate",
            "filter": "agDateColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "visitStartDate"
            }
        },
        {
            "headerName": localConstant.gridHeader.VISIT_CUSTOMER_CONTRACT,
            "field": "visitCustomerCode",
            "filter": "agTextColumnFilter",            
            "cellRenderer":"HyperLink",
            "cellRendererParams": {
            "dataToRender":"visitCustomerCode"
            },
            "valueGetter": (params) => {
                return params.data.visitContractNumber+'/'+params.data.visitProjectNumber+'/'+params.data.visitAssignmentNumber+'/'+params.data.visitNumber;
                
              }
        },
        {
            "headerName":localConstant.gridHeader.REPORT_NUMBER,
            "field": "visitReportNumber",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName":localConstant.gridHeader.CUSTOMER_NAME,
            "field": "visitCustomerName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.PROJECT_NAME,
            "field": "visitCustomerProjectName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.SUPPLIER_PO_NUMBER,
            "field": "visitSupplierPONumber",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.TECHNICAL_SPECIALIST,
            "field": "techSpecialists",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.STATUS,
            "field": "visitStatus",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName":localConstant.gridHeader.CONTRACT_COORDINATOR,
            "field": "visitContractCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.OPERATING_COORDINATOR,
            "field": "visitOperatingCompanyCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.ASSIGNMENT_CREATE_DATE,
            "field": "visitAssignmentCreatedDate",
            "filter": "agDateColumnFilter",
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "visitAssignmentCreatedDate"
            }
        },
        {
            "headerName": localConstant.gridHeader.CONTRACT_HOLDER_COMPANY,
            "field": "visitContractCompany",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.OPERATING_COMPANY,
            "field": "visitOperatingCompany",
            "filter": "agDateColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.NOTIFICATION_REF,
            "field": "visitNotificationReference",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.END_DATE,
            "field": "visitEndDate",
            "filter": "agDateColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "visitEndDate"
            }
        },
        {
            "headerName": localConstant.gridHeader.ASSIGNMENT_REF,
            "field": "visitAssignmentReference",
            "filter": "agTextColumnFilter"
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