export const HeaderData = {
    "columnDefs": [
        {
            "headerName": "File Name",
            "field": "assignmentContractNumber",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Size",
            "field": "assignmentProjectNumber",
            "filter": "agNumberColumnFilter",
            "width":100
        },
        {
            "headerName": "Document Type",
            "field": "projectname",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Updated Date",
            "field": "assignmentCreatedDate",
            "filter": "agNumberColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "assignmentCreatedDate"
            },
            "width":150
        },
        {
            "headerName": "Uploaded By",
            "field": "assignmentProjectName",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Module",
            "field": "assignmentNumber",
            "filter": "agTextColumnFilter",
            "width":100
        },
        {
            "headerName": "Document Approval",
            "field": "contractcoordinator",
            "filter": "agTextColumnFilter",
            "width":100
        },        
        {
            "headerName": "",
            "field": "id",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "SelectedDocumentToApprove",
                "popupId": "approveDocument",
                "label":"Approve"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 80
        },        
        {
            "headerName": "",
            "field": "id",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "RejectDocument",
                "popupId": "RejectDocument",
                "label":"Reject"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 80
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
    "gridHeight":50
};