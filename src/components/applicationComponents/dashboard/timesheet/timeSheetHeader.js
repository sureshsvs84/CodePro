export const HeaderData = {
    "columnDefs": [
        {
            "headerName": "Timesheet Date",
            "field": "timesheetStartDate",
            "filter": "agDateColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "timesheetStartDate"
            }
        },
        {
            "headerName": "Customer/Contract/Project/Assignment/Timesheet",
            "field": "contractNumber",
            "filter": "agTextColumnFilter",
            "cellRenderer": "HyperLink",
            "cellRendererParams": {
            "dataToRender":"contractNumber"
            },
            "valueGetter": (params) => {
                return params.data.timesheetContractNumber+'/'+params.data.timesheetProjectNumber+'/'+params.data.timesheetAssignmentNumber+'/'+params.data.timesheetNumber;
                
              }
        },
        {
            "headerName": "Customer Name",
            "field": "timesheetContractCompany",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Project Name",
            "field": "customerProjectName",
            "filter": "agNumberColumnFilter"
        },
        {
            "headerName": "Technical Specialist(s)",
            "field": "techSpecialists",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Status",
            "field": "timesheetStatus",
            "filter": "agTextColumnFilter",
            "valueGetter": (params) => {
                  if (params.data.timesheetStatus === "A")
                        return "Approved By Contract Holder";
                    if (params.data.timesheetStatus === "C")
                         return "Awaiting Approval";
                    if (params.data.timesheetStatus === "J")
                        return "Rejected By Operator";
                    if (params.data.timesheetStatus === "O")
                        return "Approved By Operator";
                    if (params.data.timesheetStatus === "N")
                        return " Not Submitted";
                    if (params.data.timesheetStatus == "R")
                        return "Rejected By Contract Holder";
                
              }
        },
        {
            "headerName": "Contract Coordinator",
            "field": "contractCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Operating Coordinator",
            "field": "operatingCoordinator",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Assignment Created Date",
            "field": "timesheetStartDate",
            "filter": "agDateColumnFilter",          
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "timesheetStartDate"
            }
        },
        {
            "headerName": "Timesheet Description",
            "field": "timesheetDescription",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Operating Company",
            "field": "operatingCompany",
            "filter": "agTextColumnFilter"
        },
        {
            "headerName": "Assignment Reference",
            "field": "timesheetReference1",
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