import { configuration } from '../appConfig';

export function RequestPayload (data = {}, headers = {}) {
    this.data = data;
    this.headers = headers;
}

export const homeAPIConfig={
    homeBaseURL:configuration.apiBaseUrl,
    dashBoardCount:'dashboard?IsRecordCountOnly=true',
    assignments:'assignments?',
    inActivessignments:'assignments/inactive',
    visitStatus:'visits',
    contract:'contracts',
    timesheet:'timesheets'
};

export const companyAPIConfig={
    companyBaseURL:configuration.apiBaseUrl,
    docBaseUrl: configuration.documentBaseUrl,
    companyDetails:'companies',    
    companyContractDetail:'contracts?contractHoldingCompanyCode',
    companyDetail: '/detail',
    costSaleReference:'expense/types',
    currencies:'currencies',
    companyPlaceholder: 'email/placeholders',
    companyOffices:'offices'
};

export const customerAPIConfig={    
    custBaseUrl:configuration.apiBaseUrl,
    customer:'customers/',
    customerDetail:'detail',
    customerDetails:'customers',                      
    custContractDetail:'contracts?contractCustomerCode',
    docBaseUrl: configuration.documentBaseUrl
};

export const contractAPIConfig={    
    contBaseUrl:configuration.contractBaseUrl,
    docBaseUrl: configuration.documentBaseUrl,
    api:'api/',
    contracts:'contracts/',
    rateSchedule:'schedules',
    documents:'/documents',
    notes:'/notes'
};

export const masterData={
    baseUrl:configuration.apiBaseUrl,
    state: 'states',
    country: 'countries',
    city: 'cities',
    assignmentReference:'assignments/referencetypes',
    documentType: 'module/document/types',
    salutation:'salutations',
    prefix: 'euvatprefixes',
    tax: 'taxes',
    businessUnit:'company/margintypes',
    divisionName:'divisions',
    payrolls:'payrolls',
    exportPrefixes:'payroll/exportprefixes'
};

export const loginApiConfig = {    
    authLogin: `${ configuration.apiBaseUrl }authenticate`,
    logOutUrl: `${ configuration.apiBaseUrl }token/access/revoke`,
    refreshToken: `${ configuration.apiBaseUrl }token/renew`

};