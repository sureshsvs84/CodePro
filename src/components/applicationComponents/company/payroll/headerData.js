export const payrollHeaderData = {
    "columnDefs": [
        {
            "checkboxSelection": true,
            "headerCheckboxSelectionFilteredOnly": true,
            "suppressFilter":true,
            "width":50
        },
        {
            "headerName": "Period Name",
            "field": "periodName",
            "filter": "agTextColumnFilter",
            "width":200
        },
        {
            "headerName": "Start Date",
            "field": "startDate",
            "filter": "agTextColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "startDate"
            },
            "width":300
        },
        {
            "headerName": "End Date",
            "field": "endDate",
            "filter": "agTextColumnFilter",           
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "endDate"
            },
            "width":200
        },        
        {
            "headerName": "Hidden",
            "field": "isActive",
            "filter": "agTextColumnFilter", 
            "valueGetter": (params) => {
                if(params.data.isActive === true){
                    return "Yes";
                }else{
                  return "No";              }
                
              },
            "width":200
        },
        {
            "headerName": "",
            "field": "id",
            "cellRenderer": "EditRenderer",
            "cellRendererParams": {
                "action": "EditPayrollPeriodName",
                "popupId": "createPayrollPeriod"
            },
            "suppressFilter": true,
            "suppressSorting": true,
            "width": 50
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
export const sellReferrenceHeaderData = {
    "columnDefs": [
        {
            "headerName": "Name",
            "field": "name",
            "filter": "agTextColumnFilter",
            "width":300
        },
        {
            "headerName": "Type",
            "field": "chargeType",
            "filter": "agTextColumnFilter",
            "width":400
        },
        {
            "headerName": "Charge Reference",
            "field": "chargeReference",
            "filter": "agTextColumnFilter",
            "width":300
        }
    ],
    "enableFilter":true, 
    "enableSorting":true, 
    "pagination": true,
    "gridHeight":50,
    "searchable":true,
    "gridActions":true,
    "gridTitlePanel":true,
};