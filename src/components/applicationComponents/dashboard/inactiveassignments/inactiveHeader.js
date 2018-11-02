import { getlocalizeData } from '../../../../utils/commonUtils';
const localConstant = getlocalizeData();
export const headerData = {
    "columnDefs": [
        {
            "headerName": "Contract No",
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
            "headerName": "Project No",
            "field": "assignmentProjectNumber",
            "filter": "agNumberColumnFilter",
            "width":130,           
            "cellRenderer": "HyperLink",
            "cellRendererParams": {
                "dataToRender": "assignmentProjectNumber"
            }
        },
        {
            "headerName": "Customer Project Name",
            "field": "assignmentProjectName",
            "filter": "agTextColumnFilter"
            // "valueGetter": function aPlusBValueGetter(params) {
            //     return params.data.projectNumber +'and'+ params.data.projectName;
            //   }
        },
        {
            "headerName": "Assignment No",
            "field": "assignmentNumber",
            "filter": "agNumberColumnFilter",           
            "cellRenderer": "HyperLink",
            "cellRendererParams": {
                "dataToRender": "assignmentNumber"
            }
        },
        {
            "headerName": "Assignment Ref",
            "field": "assignmentReference",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Customer",
            "field": "assignmentCustomerName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Contract Coordinator",
            "field": "assignmentContractHoldingCompanyCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Operating Coordinator",
            "field": "assignmentOperatingCompanyCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Technical Specialist(s)",
            "field": "techSpecialists",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Supplier PO Number",
            "field": "assignmentSupplierPurchaseOrderNumber",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Main Supplier",
            "field": "assignmentSupplierName",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Assignment Created Date",
            "field": "assignmentCreatedDate",
            "filter": "agDateColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "assignmentCreatedDate"
            }
        },
        {
            "headerName": "Contract Holder Company",
            "field": "assignmentContractHoldingCompany",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Assignment Status",
            "field": "assignmentStatus",
            "filter": "agTextColumnFilter",
            "valueGetter": (params) => {
                if(params.data.status == "P"){
                    return "In Progress";
                }else if(params.data.status == "C"){
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