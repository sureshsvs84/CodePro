export const HeaderData={
    "ContractHeader":{
        "columnDefs":[
            {
                "headerName": "Status",
                "field": "contractStatus",
                "filter": "agTextColumnFilter",
                "valueGetter": (params) => {
                    if(params.data.contractStatus === 'O'){
                        return "Open";
                    }else if(params.data.contractStatus === 'C'){
                      return "Closed";      
                            }
                    
                  }
            },
            {
                "headerName":"Contract Holding Company",
                "field":"chCompanyName",
                "filter":"agTextColumnFilter"
            },
            {
                "headerName":"Contract Number",
                "field":"contractNumber",
                "filter":"agTextColumnFilter",
                "cellRenderer": "contractAnchorRenderer"
            },
            {
                "headerName":" Customer Contract Number",
                "field":"customerContractNumber",
                "filter":"agTextColumnFilter"
            },
            {
                "headerName":"Start Date",
                "field":"contractStartDate",
                "filter":"agDateColumnFilter",
                "cellRenderer": "DateComponent",
                "cellRendererParams": {
                    "dataToRender": "contractStartDate"
                }
            },
             {
                "headerName":"End Date",
                "field":"contractEndDate",
                "filter":"agDateColumnFilter",
                "cellRenderer": "DateComponent",
                "cellRendererParams": {
                    "dataToRender": "contractEndDate"
                }
            },
            {
                "headerName":"Contract Structure",
                "field":"contractStructure",
                "filter":"agTextColumnFilter"
            },
            {
                "headerName":"CRM Opp.Ref",
                "field":"contractCRMReference",
                "filter":"agTextColumnFilter"
            }
        ],
        "enableFilter":true, 
        "enableSorting":true, 
        "pagination": true,
        "gridHeight":60,
        "searchable":true,
        "gridActions":true,
        "gridTitlePanel":true
    }
};
