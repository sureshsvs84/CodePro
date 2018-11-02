import { getlocalizeData } from '../../../../utils/commonUtils';
const localConstant = getlocalizeData();
export const HeaderData = {
    "columnDefs": [
        {
            "headerName": localConstant.gridHeader.CONTRACT_NO,
            "field": "assignmentContractNumber",
            "filter": "agTextColumnFilter",
            "width":150,  
            "tooltipField":"assignmentContractNumber",        
            "cellRenderer": "HyperLink",
            "cellRendererParams": {
                "dataToRender": "assignmentContractNumber"
            }
            
        },
        {
            "headerName": localConstant.gridHeader.PROJECT_NO,
            "field": "assignmentProjectNumber",
            "filter": "agNumberColumnFilter",
            "width":130,           
            "cellRenderer": "HyperLink",
            "cellRendererParams": {
                "dataToRender": "assignmentProjectNumber"
            }
        },
        {
            "headerName": localConstant.gridHeader.PROJECT_NAME,
            "field": "assignmentProjectName",
            "filter": "agTextColumnFilter"
            // "valueGetter": function aPlusBValueGetter(params) {
            //     return params.data.projectNumber +'and'+ params.data.projectName;
            //   }
        },
        {
            "headerName": localConstant.gridHeader.ASSIGNMENT_NO,
            "field": "assignmentNumber",
            "filter": "agNumberColumnFilter",           
            "cellRenderer": "HyperLink",
            "cellRendererParams": {
                "dataToRender": "assignmentNumber"
            }
        },
        {
            "headerName": localConstant.gridHeader.ASSIGNMENT_REF,
            "field": "assignmentReference",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.CUSTOMER,
            "field": "assignmentCustomerName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.CONTRACT_COORDINATOR,
            "field": "assignmentContractHoldingCompanyCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.OPERATING_COORDINATOR,
            "field": "assignmentOperatingCompanyCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.TECHNICAL_SPECIALIST,
            "field": "techSpecialists",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.SUPPLIER_PO_NUMBER,
            "field": "assignmentSupplierPurchaseOrderNumber",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName":localConstant.gridHeader.MATERIAL_DESCRIPTION,
            "field": "assignmentSupplierPoMaterial",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.MAIN_SUPPLIER,
            "field": "assignmentSupplierName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.ASSIGNMENT_CREATE_DATE,
            "field": "assignmentCreatedDate",
            "filter": "agDateColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "assignmentCreatedDate"
            }
        },
        {
            "headerName": localConstant.gridHeader.CONTRACT_HOLDER_COMPANY,
            "field": "assignmentContractHoldingCompany",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.OPERATING_COMPANY,
            "field": "assignmentOperatingCompany",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.PERCENTAGE_COMPLETE,
            "field": "assignmentPercentageCompleted",
            "filter": "agNumberColumnFilter"
        },
        {
            "headerName": localConstant.gridHeader.EXPECTED_COMPLETED_DATE,
            "field": "assignmentExpectedCompleteDate",
            "filter": "agDateColumnFilter",          
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "assignmentExpectedCompleteDate"
            }
        },
        {
            "headerName": localConstant.gridHeader.ASSIGNMENT_STATUS,
            "field": "assignmentStatus",
            "filter": "agTextColumnFilter",
            "valueGetter": (params) => {
                if(params.data.status === "P"){
                    return "In Progress";
                }else if(params.data.status === "C"){
                  return "Complete";              }
                
              }
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
    "gridHeight":59,
    "multiSortKey": "ctrl"
};