export const HeaderData = {
    "columnDefs": [
        {
            "checkboxSelection": true,
            "headerCheckboxSelectionFilteredOnly": true,
            "suppressFilter": true,
            "width": 50
        },
        {
            "headerName": "Description",
            "field": "tax",
            "filter": "agTextColumnFilter",
            "width": 450
        },
        {
            "headerName": "Type",
            "field": "taxType",
            "filter": "agTextColumnFilter",
            "width": 250,
            "valueGetter": (params) => {
                if (params.data.taxType === "S") {
                    return "Sales Tax";
                } else if(params.data.taxType === "W") {
                    return "Withholding Tax";
                }
            }
        },
        {
            "headerName": "Rate (%)",
            "field": "taxRate",
            "filter": "agNumericColumnFilter",
            "width": 150
        },
        {
            "headerName": "",
            "field": "companyTaxId",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "EditCompanyTaxes",
                "popupId": "addCompanyTaxes"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 80
        }
    ],
    "enableFilter": true,
    "enableSorting": true,
    "rowSelection": "multiple",
    "gridHeight": 60
};