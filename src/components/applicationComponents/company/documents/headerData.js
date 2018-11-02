export const HeaderData = {
    "columnDefs": [
        {
            "checkboxSelection": true,
            "headerCheckboxSelectionFilteredOnly": true,
            "suppressFilter": true,
            "width": 50
        },
        {
            "headerName": "Name",
            "field": "name",
            "filter": "agTextColumnFilter",
            "cellRenderer": "CompnayFileToBeOpen",
            "cellRendererParams": {
                "dataToRender": "name"
            }
        },
        {
            "headerName": "Type",
            "field": "documentType",
            "filter": "agTextColumnFilter",
            "width": 150
        },
        {
            "headerName": "Size",
            "field": "documentSize",
            "filter": "agTextColumnFilter",
            "width": 100
        },
        {
            "headerName": "Uploaded Date",
            "field": "uploadedOn",
            "filter": "agTextColumnFilter",
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "uploadedOn"
            },
            "headerTooltip": "Uploaded Date",
            "width": 150
        },
        {
            "headerName": "Customer Visible",
            "field": "isVisibleToCustomer",
            "filter": "agTextColumnFilter",
            "width": 120,
            "headerTooltip": "Customer Visible",
            "valueGetter": (params) => {
                if (params.data.isVisibleToCustomer === true) {
                    return "Yes";
                } else if (params.data.isVisibleToCustomer === false) {
                    return "No";
                }
            }
        },
        {
            "headerName": "TS Visible",
            "field": "isVisibleToTS",
            "filter": "agTextColumnFilter",
            "width": 100,
            "headerTooltip": "TS Visible",
            "valueGetter": (params) => {
                if (params.data.isVisibleToTS === true) {
                    return "Yes";
                } else if (params.data.isVisibleToTS === false) {
                    return "No";
                }
            }
        },
        {
            "headerName": "",
            "field": "companyDocumentId",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "EditCompanyDocumentDetails",
                "popupId": "uploadDocuments"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 100
        }
    ],
    "enableFilter": true,
    "enableSorting": true,
    "rowSelection": "multiple",
    "gridHeight": 60
};