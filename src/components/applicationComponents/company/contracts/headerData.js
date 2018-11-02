export const HeaderData={
        "columnDefs":[
            {
                "headerName": "Status",
                "field": "contractStatus",
                "filter": "agTextColumnFilter",
                "width":110,
                "valueGetter": (params) => {
                    if(params.data.contractStatus === 'O'){
                        return "Open";
                    }else if(params.data.contractStatus === 'C'){
                      return "Closed";      
                            }
                    
                  }
            },
            {
                "headerName":" Customer",
                "field":"contractCustomerName",
                "filter":"agTextColumnFilter",
                "width":120
            },
            {
                "headerName":"Contract Number",
                "field":"customerContractNumber",
                "filter":"agTextColumnFilter",
                "cellRenderer": "contractAnchorRenderer",
                "width":150
            },
            {
                "headerName":" Customer Contract Number",
                "field":"customerContractNumber",
                "filter":"agTextColumnFilter" ,
               "width":150
            },
            {
                "headerName":"Start Date",
                "field":"contractStartDate",
                "filter":"agTextColumnFilter",
                "cellRenderer": "DateComponent",
                "cellRendererParams": {
                    "dataToRender": "contractStartDate"
                }
            },
             {
                "headerName":"End Date",
                "field":"contractEndDate",
                "filter":"agTextColumnFilter",
                "cellRenderer": "DateComponent",
                "cellRendererParams": {
                    "dataToRender": "contractEndDate"
                }
            },
            {
                "headerName":"Contract Structure",
                "field":"contractStructure",
                "filter":"agTextColumnFilter",
                "width":150
            },
            {
                "headerName":"ContractReference",
                "field":"contractCRMReference",
                "filter":"agTextColumnFilter",
                "width":130
            }
        ],
        "enableFilter":true, 
        "enableSorting":true, 
        "pagination": true,
        "gridHeight":60,
        "searchable":true,
        "gridActions":true,
        "gridTitlePanel":true
   };