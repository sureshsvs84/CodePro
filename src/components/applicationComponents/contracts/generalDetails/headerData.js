export const HeaderData = {
    "columnDefs": [
        {
            "headerCheckboxSelectionFilteredOnly": true,
            "checkboxSelection": true,
            "suppressFilter": true,
            "width": 50
        },
        {
            "headerName": "Code",
            "field": "customerCode",
            "filter": "agTextColumnFilter",
            "width": 300
        },
        {
            "headerName": "Name",
            "field": "customerName",
            "filter": "agTextColumnFilter",
            "width": 300
        }
    ],
    "enableFilter": true,
    "enableSorting": true,
    "pagination": false,
    "gridHeight": 30
};