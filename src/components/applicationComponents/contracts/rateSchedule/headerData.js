export const HeaderData = {
    "columnDefs": [
        {
            "checkboxSelection": true,
            "headerCheckboxSelectionFilteredOnly": true,
            "suppressFilter": true,
            "width": 50
        },

        {
            "headerName": "Charge Type",
            "field": "chargetype",
            "filter": "agTextColumnFilter",
            "width":100,
        },
        {
            "headerName": "Standard Value",
            "field": "standardvalue",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Charge Value",
            "field": "chargevalue",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Description",
            "field": "description",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Discounts Applied",
            "field": "discountapplied",
            "filter": "agTextColumnFilter",
            "width":100
        },
        {
            "headerName": "Percentage",
            "field": "percentage",
            "filter": "agTextColumnFilter",
            "width":100
        },

        {
            "headerName": "Effective From",
            "field": "effectivefrom",
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "effectivefrom"
            },
            "width":100,
            "suppressFilter": true
        },
        {
            "headerName": "Effective To",
            "field": "effectiveto",
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "effectiveto"
            },
            "width":100
        },
        {
            "headerName": "",
            "field": "Id",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "EditChargeType",
                "popupId": "add-location",
                "popupAction": "RateScheduleModalState",
                "buttonAction": "RateScheduleModalState"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 80
        }
    ],
    "enableFilter":true, 
    "enableSorting":true,
    "gridHeight":35,
    "pagination": true,
    "searchable":true,
    "gridActions":true,
    "gridTitlePanel":true,
    "rowSelection":"multiple"
};