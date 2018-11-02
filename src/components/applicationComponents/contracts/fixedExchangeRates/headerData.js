export const HeaderData = {

    "ContractFixedExchangeRatesHeader": {
        "columnDefs": [
            {
                "checkboxSelection": true,
                "headerCheckboxSelectionFilteredOnly": true,
                "suppressFilter": true,
                "width": 50
            },
            {
                "headerName": "From Currency",
                "field": "fromCurrency",
                "cellRenderer": "medalCellRenderer",
                "filter": "agTextColumnFilter"
            },
            {
                "headerName": "To Currency",
                "field": "toCurrency",
                "filter": "agTextColumnFilter"
            },
            {
                "headerName": "Effective Date",
                "field": "effectiveFrom",
                "filter": "agTextColumnFilter",
                "cellRenderer": "DateComponent",
                "cellRendererParams": {
                    "dataToRender": "effectiveFrom"
                }
            },
            {
                "headerName":"Exchange Rate",
                "field":"exchangeRate",
                "filter": "agTextColumnFilter"
              
            },

            {
                "headerName": "",
                "field": "id",
                "cellRenderer": "EditRenderer",
                "cellRendererParams": {
                    "action": "EditFixedExchangeRate",
                    "popupId": "fixedExform"
                },
                "suppressFilter": true,
                "suppressSorting": true,
                "width": 100
            }
        ],
        "enableFilter": true,
        "enableSorting": true,
        "pagination": true,

        "searchable": true,
        "gridActions": true,
        "gridTitlePanel": true,
        "gridHeight": 60,
        "rowSelection": "multiple"
    }
};