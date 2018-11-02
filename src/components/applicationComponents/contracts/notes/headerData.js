export const HeaderData = {
    "columnDefs": [
        {
            "headerName": "Date",
            "field": "createdOn",
            "filter": "agTextColumnFilter",
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "createdOn"
            },
            "width": 120
        },
        {
            "headerName": "User",
            "field": "createdBy",
            "filter": "agTextColumnFilter",
            "width": 120
        },
        {
            "headerName": "Note",
            "field": "notes",
            "filter": "agTextColumnFilter",
            "width": 650
        },
    ],
    "defaultColDef": {
        "width": 80
    },
    "enableFilter": true,
    "enableSorting": true,
    "pagination": true,
    "rowSelection": "multiple",
    "gridHeight": 60
};
