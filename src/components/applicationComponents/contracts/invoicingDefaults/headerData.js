export const HeaderData = {    
    "ContractInvoicingDefaultHeader": {
        "columnDefs": [
            {
                "checkboxSelection": true,
                "headerCheckboxSelectionFilteredOnly": true,
                "suppressFilter": true,
                "width": 50
            },
            {
                "headerName": "Reference Type",
                "field": "referenceType",
                "filter": "agTextColumnFilter",
                "headerTooltip": "Reference Type",
                "tooltipField": "referenceType",
                "width": 130
            },
            {
                "headerName": "Assignment",
                "field": "isVisibleToAssignment",
                "headerTooltip": "Assignment",
                "suppressFilter": true,
                "width": 100,
                "valueGetter": (params) => {                               
                    if (params.data.isVisibleToAssignment === "true") {                        
                        return "Yes";
                    } else {
                        return "No";
                    }
                }
            },
            {
                "headerName": "Visit",
                "field": "isVisibleToVisit",
                "suppressFilter": true,
                "width": 100,
                "valueGetter": (params) => {                    
                    if (params.data.isVisibleToVisit === "true") {                        
                        return "Yes";
                    } else {
                        return "No";
                    }
                }
            },
            {
                "headerName": "Timesheet",
                "field": "isVisibleToTimesheet",
                "headerTooltip": "Timesheet",
                "suppressFilter": true,
                "width": 100,
                "valueGetter": (params) => {                    
                    if (params.data.isVisibleToTimesheet === "true") {                        
                        return "Yes";
                    } else {
                        return "No";
                    }
                }
            },
            {
                "headerName": "",
                "field": "",
                "cellRenderer": "EditRenderer",
                "cellRendererParams": {
                    "action": "",
                    "popupId": ""
                },
                "suppressFilter": true,
                "suppressSorting": true,
                "width": 80
            },  
        ],
        "enableSorting": true,
        "pagination": false,
        "rowSelection": "multiple",
        "gridHeight": 30
    },

    "ContractAttachmentTypesHeader": {
        "columnDefs": [
            {
                "checkboxSelection": true,
                "headerCheckboxSelectionFilteredOnly": true,
                "suppressFilter": true,
                "width": 50
            },
            {
                "headerName": "Attachment Types",
                "field": "documentType",
                "filter": "agTextColumnFilter",
                "tooltipField": "documentType",   
                "width": 250
            },
            {
                "headerName": "",
                "field": "contractNumber",
                "cellRenderer": "EditRenderer",
                "cellRendererParams": {
                    "action": "",
                    "popupId": ""
                },
                "suppressFilter": true,
                "suppressSorting": true,
                "width": 80
            },       
        ],
        "enableSorting": true,
        "pagination": false,
        "rowSelection": "multiple",
        "gridHeight": 30
    }
};