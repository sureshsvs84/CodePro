export const headData ={
    "columnDefs": [
        {
            "checkboxSelection": true,
            "headerCheckboxSelectionFilteredOnly": true,
            "suppressFilter":true,
            "width":50
        },
        {
            "headerName": "Cost Center Code",
            "field": "costCenterCode",
            "filter": "agTextColumnFilter",
            "width":300
        },
        {
            "headerName": "Cost Center Name",
            "field": "costCenterName",
            "filter": "agTextColumnFilter",
            "width":600
        },
        {
            "headerName": "",
            "field": "id",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "EditCompanyDivisionCostcentre",
                "popupId": "createCostcenter"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 50
        }
    ],
    "enableFilter":true, 
    "enableSorting":true, 
    "pagination": true,
    "gridHeight":30,
    "rowSelection":"multiple"
};