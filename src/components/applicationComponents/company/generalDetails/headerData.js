export const HeaderData = {
    "RemittanceTextHeader": {
        "columnDefs": [
            {
                "checkboxSelection": true,
                "headerCheckboxSelectionFilteredOnly": true,
                "suppressFilter": true,
                "width": 50
            },
            {
                "headerName": "Identifier",
                "field": "msgIdentifier",
                "filter": "agTextColumnFilter",
                "width": 150
            },
            {
                "headerName": "Invoice Remittance Text",
                "field": "msgText",
                "filter": "agTextColumnFilter",
                "width": 450,
                "tooltipField": "msgText"
            },
            {
                "headerName": "Default",
                "field": "isDefaultMsg",
                "filter": "agTextColumnFilter",
                "width": 120,
                "valueGetter": (params) => {
                    if (params.data.isDefaultMsg === true) {
                        return "Yes";
                    } else {
                        return "No";
                    }
                }
            },
            {
                "headerName": "Not Used",
                "field": "isActive",
                "filter": "agTextColumnFilter",
                "width": 130,
                "valueGetter": (params) => {
                    if (params.data.isActive === true) {
                        return "Yes";
                    } else {
                        return "No";
                    }
                }
            },
            {
                "headerName": "",
                "field": "id",
                "cellRenderer": "EditRenderer",
                "cellRendererParams": {
                    "action": "EditInvoiceRemittance",
                    "popupId": "addInvoiceRemittance"
                },
                "suppressFilter": true,
                "suppressSorting": true,
                "width": 100
            }
        ],
        "enableFilter": true,
        "enableSorting": true,
        "pagination": false,
        "rowSelection": "multiple",
        "gridHeight": 30
    },
    "InvoiceFooterTextHeader": {
        "columnDefs": [
            {
                "checkboxSelection": true,
                "headerCheckboxSelectionFilteredOnly": true,
                "suppressFilter": true,
                "width": 50
            },
            {
                "headerName": "Identifier",
                "field": "msgIdentifier",
                "filter": "agTextColumnFilter",
                "width": 150
            },
            {
                "headerName": "Invoice Footer Text",
                "field": "msgText",
                "filter": "agTextColumnFilter",
                "width": 580,
                "tooltipField": "msgText"
            },
            {
                "headerName": "Default",
                "field": "isDefaultMsg",
                "filter": "agTextColumnFilter",
                "width": 120,
                "valueGetter": (params) => {
                    if (params.data.isDefaultMsg === true) {
                        return "Yes";
                    } else {
                        return "No";
                    }
                }
            },
            {
                "headerName": "",
                "field": "id",
                "cellRenderer": "EditRenderer",
                "cellRendererParams": {
                    "action": "EditInvoiceFooter",
                    "popupId": "addInvoiceFooter"
                },
                "suppressFilter": true,
                "suppressSorting": true,
                "width": 100
            }
        ],
        "enableFilter": true,
        "enableSorting": true,
        "pagination": false,
        "rowSelection": "multiple",
        "gridHeight": 30
    }
};