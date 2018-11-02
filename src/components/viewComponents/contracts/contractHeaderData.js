export const ContractHeaderData = {
    "columnDefs": [ 
        {
            "headerName": "Customer Name",
            "field": "contractCustomerName",  
            "cellRenderer": "contractAnchorRenderer",   
            "width":200
        },
        {
            "headerName": "Status",
            "field": "contractStatus",
            "width":200
        },
        {
            "headerName": "Contract No.",
            "field": "contractNumber",
            "width":200
        },
        {
            "headerName": "Customer Contract No.",
            "field": "customerContractNumber",                      
            "width":200
        },
        {
            "headerName": "Company Name",
            "field": "contractHoldingCompanyName",                      
            "width":200
        },
        {
            "headerName": "Start Date",
            "field": "contractStartDate", 
            "filter": "agTextColumnFilter",
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "contractStartDate"
            },                     
            "width":200
        },
        {
            "headerName": "End Date",
            "field": "contractEndDate", 
            "cellRenderer": "DateComponent",
            "cellRendererParams": {
                "dataToRender": "contractEndDate"
            },                      
            "width":200
        },
        {
            "headerName": "ContractStructure",
            "field": "isFullUse",                      
            "width":200
        },
        {
            "headerName": "CRM Opp. Ref",
            "field": "isFullUse",                      
            "width":200
        }
                 
    ],
    "pagination": true,
    "enableFilter":true, 
    "enableSorting":true, 
    "gridHeight":66,
    "searchable":true,
    "gridActions":true,
    "gridTitlePanel":true
};