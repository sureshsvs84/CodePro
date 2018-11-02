export const HeaderData = {
    "columnDefs": [ 
        {
            "headerName": "Code",
            "field": "companyCode",
            "cellRenderer": "companyAnchorRenderer",            
            "width":200
        },
        {
            "headerName": "Company Name",
            "field": "companyName",
            "width":650
        },
        {
            "headerName": "Active",
            "field": "isActive",                        
            "width":200,
            "valueGetter": (params) => {
                if (params.data.isActive === true) {
                    return "Yes";
                } else {
                    return "No";
                }
            }
        },
        {
            "headerName": "Full Use",
            "field": "isFullUse",                      
            "width":200,
            "valueGetter": (params) => {
                if (params.data.isFullUse === true) {
                    return "Yes";
                } else {
                    return "No";
                }
            }
        }                       
    ],
    "pagination": true,
    "enableFilter":true, 
    "enableSorting":true, 
    "gridHeight":59,
    "searchable":true,
    "gridActions":true,
    "gridTitlePanel":true
};

export default HeaderData;