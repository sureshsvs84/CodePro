export const HeaderData={
    "CustomerNoteHeader": {
        "columnDefs": [
            // {
            //     "checkboxSelection": true,
            //     "headerCheckboxSelectionFilteredOnly": true,
            //     "suppressFilter": true,
            //     "width": 50
            // },
            {
                "headerName": "Date",
                "field": "createdOn",
                "filter": "agTextColumnFilter",
                "cellRenderer": "DateComponent",
                "cellRendererParams": {
                    "dataToRender": "createdOn"
                },
                "width": 200
            },
            {
                "headerName": "User",
                "field": "createdBy",
                "filter": "agTextColumnFilter",
                "width": 200
            },
            {
                "headerName": "Note",
                "field": "note",
                "filter": "agTextColumnFilter",
                "width": 460
            },
            // {
            //     "headerName": "",
            //     "field": "customerNoteId",
            //     "width": 80,
            //     "cellRenderer": "EditRenderer",
            //     "cellRendererParams": {
            //         "action": "EditNotesDetails",
            //         "popupId": "addNotes"                    
            //     },
            //     "suppressFilter": true,
            //     "suppressSorting": true
            // }
        ],
        "enableFilter": true,
        "enableSorting": true,
        "pagination": false,
        "rowSelection": "multiple",
        "gridHeight": 60
    }
};