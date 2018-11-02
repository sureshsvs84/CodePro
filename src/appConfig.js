export const configuration = {
    // userName:"Kamalakannan",
    // password:"admin",
     selectedCompany:localStorage.getItem("CompanyCode"),
    apiBaseUrl: "http://192.168.50.205:5100/",
    authBaseUrl: "http://192.168.50.205:5102/",
    documentBaseUrl: "http://192.168.50.205:5100/",
    contractBaseUrl: "http://192.168.50.161:85/",
    fileLimit: 10240, // File Limit is 10 MB,
    allowedFileFormats: '.txt,.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.csv'

};