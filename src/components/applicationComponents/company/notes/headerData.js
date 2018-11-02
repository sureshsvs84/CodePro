export const HeaderData={
    "columnDefs": [
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
            "field": "notes",
            "filter": "agTextColumnFilter",
            "width": 460
        },
        // {
        //     "headerName": "",
        //     "field": "companyNoteId",
        //     "width": 80,
        //     "cellRenderer": "EditRenderer",
        //     "cellRendererParams": {
        //         "action": "EditCompanyNotesDetails",
        //         "popupId": "addNotes"                    
        //     },
        //     "suppressFilter": true,
        //     "suppressSorting": true
        // }
    ],
    "defaultColDef": {
        "width": 80
      },
    "enableFilter":true, 
    "enableSorting":true, 
    "pagination": true,
    "rowSelection": "multiple",
    "gridHeight":60
};
