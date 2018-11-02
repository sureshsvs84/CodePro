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
            "cellRenderer": "FileToBeOpen",
            "cellRendererParams": {
                "dataToRender": "name"
            },
            "width":110
        },
        {
            "headerName": "Type",
            "field": "documentType",
            "filter": "agTextColumnFilter",
              "width":100
        },
        {
            "headerName": "Size in KB's",
            "field": "documentSize",
            "filter": "agTextColumnFilter",
            "width":100
        },
        {
            "headerName": "Uploaded Date",
            "field": "uploadedOn",
            "filter": "agTextColumnFilter",
            "width":150
        },
        {
            "headerName": "Customer Visible",
            "field": "visibleToCustomer",
            "filter": "agTextColumnFilter",
            "width":150,
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
            "headerName": "Specialist Visible",
            "field": "visibleTospecial",
            "filter": "agTextColumnFilter",
            "width":150,
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
            "headerName": "Out of Company Visible",
            "field": "outOfCompanyVisible",
            "filter": "agTextColumnFilter",
            "width":150,
            "headerTooltip": "Out of Company Visible",
            "valueGetter": (params) => {
                if (params.data.isOutOfCompanyVisible === true) {
                    return "Yes";
                } else if (params.data.isOutOfCompanyVisible === false) {
                    return "No";
                }
            }
        },
        {
            "headerName": "",
            "field": "contractDocumentId",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "EditContractDocumentDetails",
                "popupId": "uploadDocuments"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 100
        }

    ],
    "enableFilter": true,
    "enableSorting": true,
    "pagination": true,
    "rowSelection": "multiple",
    "gridHeight": 60
};