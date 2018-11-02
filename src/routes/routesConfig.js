export const AppMainRoutes={
    login:'/',
    dashboard:'/dashboard',
    company:'/company',
    customer:'/customer',
    contracts:'/contracts',
    contractsDetails:'/contractsDetails',
    projectsHome:'/projects'
};

export const AppDashBoardRoutes={
    assignments:'/dashboard/assignments', 
    inactiveassignments:'/dashboard/inactiveassignments',
    generaldetails:'/dashboard/generalDetails',
    visitStatus:'/dashboard/visitStatus',
    timesheet:'/dashboard/timesheet',  
    contractsNearExpiry:'/dashboard/contractsNearExpiry',
    documentAproval:'/dashboard/documentAproval',
    budgetMonetary:'/dashboard/budgetMonetary',
    budgeHours:'/dashboard/budgeHours' 
};
export const AppCompanyRoutes={
    generalDetails:'/company/generalDetails',
    // extranet:'company/extranet',
    emailTemplates:'/company/emailTemplates',
    divisionCostCenterMargin:'/company/divisionCostCenterMargin',
    expectedMarginByBusinessUnit:'/company/expectedMarginByBusinessUnit',
    payroll:'/company/payroll',
    contracts:'/company/contracts',
    documents:'/company/documents',
    notes:'/company/notes',
    changeLog:'/company/changeLog',    
    companyOffices: '/company/companyOffices',
    companyTaxes: '/company/companyTaxes'
};
export const AppCustomerRoutes={
    generalDetails:'/customer/generalDetails',
    extranet:'/customer/extranet',
    assignments:'/customer/assignmentAccountReference',
    contracts:'/customer/contracts',
    documents:'/customer/documents',
    notes:'/customer/notes',
    changeLog:'/customer/changeLog', 

};
export const AppContractsRoutes={
    generalDetails:'/contracts/generalDetails',
    documents:'/contracts/documents',
    invoicingDefaults:'/contracts/invoicingDefaults',
    fixedExchangeRates:'/contracts/fixedExchangeRates',
    rateSchedules:'/contracts/rateSchedule',
    project:'/contracts/projects',
    notes:'/contracts/notes'

};

export const AppProjectsRoutes={
    generalDetails:'/projects/generalDetails',
    // invoicingDefaults:'/projects/invoicingDefaults',
    // documents:'/projects/documents',
    // assignments:'/projects/assignments',
    // notes:'/projects/notes',
    // clientNotification:'./projects/clientNotification',
    // changeLog:'/projects/changeLog'
};