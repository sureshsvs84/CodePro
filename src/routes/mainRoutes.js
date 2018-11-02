// import React from 'react';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../components/viewComponents/dashboard';
import Customer from '../components/viewComponents/customer';
import Company from '../components/viewComponents/company';
import Contract from '../views/contractView/contracts';
import ContractDetails from '../components/viewComponents/contracts/contractDetails';
import ProjectHome from '../components/viewComponents/projects';
import NoMatch from '../components/applicationComponents/noMatch/noMatch';

//dasboard Components
import Assignments from '../components/applicationComponents/dashboard/assignments';
import Inactiveassignments from '../components/applicationComponents/dashboard/inactiveassignments';
import VisitStatus from '../components/applicationComponents/dashboard/visitStatus';
import Timesheet from '../components/applicationComponents/dashboard/timesheet';
import ContractsNearExpiry from '../components/applicationComponents/dashboard/contractsNearExpiry';
import DocumentAproval from '../components/applicationComponents/dashboard/documentAproval';
import BudgetMonetary from '../components/applicationComponents/dashboard/budgetMonetary';
import BudgeHours from '../components/applicationComponents/dashboard/budgetHours';
import DocumentInformation from '../components/applicationComponents/dashboard/documentInformation';
import CompanyList from '../components/viewComponents/company/companyList';
import CompanyDetails from '../components/viewComponents/company/companyDetails';
import GeneralDetails from '../components/applicationComponents/company/generalDetails';
import Extranet from '../components/applicationComponents/company/extranet';
import EmailTemplates from '../components/applicationComponents/company/emailTemplates';
import DivisionCostCenterMargin from '../components/applicationComponents/company/divisionCostCenterMargin';
import ExpectedMarginByBusinessUnit from '../components/applicationComponents/company/expectedMarginByBusinessUnit';
import CompanyOffices from '../components/applicationComponents/company/companyOffices';
import Payroll from '../components/applicationComponents/company/payroll';
import Contracts from '../components/applicationComponents/company/contracts';
import Documents from '../components/applicationComponents/company/documents';
import Notes from '../components/applicationComponents/company/notes';
import CompanyTaxes from '../components/applicationComponents/company/companyTaxes';
import ChangeLog from '../components/applicationComponents/company/changeLog';
// customer components
import CustomerDetails from '../components/viewComponents/customer/customerDetails';
import CustGeneralDetails from '../components/applicationComponents/customer/generalDetails';
import CustAssignmentDetails from '../components/applicationComponents/customer/assignment';
import CustomerList from '../components/viewComponents/customer/customerList';
import CustNotesDetails from '../components/applicationComponents/customer/notes';
import CustContractDetails from '../components/applicationComponents/customer/contracts';
import CustomerDocuments from '../components/applicationComponents/customer/documents';
// import ContractList from '../components/viewComponents/customer/customerList';

//Contracts Components
// import ContractList from '../components/viewComponents/contracts/contractList';
// //import ContractDetails from '../components/viewComponents/contracts/contractDetails';
// import ContractGeneralDetails from '../components/applicationComponents/contracts/generalDetails';
// import ContractInvoicingDefaults from '../components/applicationComponents/contracts/invoicingDefaults';
// import ContractFixedExchangeRates from '../components/applicationComponents/contracts/fixedExchangeRates';
// import ContractRateSchedules from '../components/applicationComponents/contracts/rateSchedule';
// import ContractDocuments from '../components/applicationComponents/contracts/documents';
// import ContractProject from '../components/applicationComponents/contracts/project';
// import ContractNotes from '../components/applicationComponents/contracts/notes';
//Project Components
import ProjectGeneralDetails from '../components/applicationComponents/projects/generalDetails';
// import ProjectInvoicingDefaults from '../components/applicationComponents/projects/invoicingDefaults';
// import ProjectDocuments from '../components/applicationComponents/projects/documents';
// import ProjectAssignments from '../components/applicationComponents/projects/assignments';
// import ProjectNotes from '../components/applicationComponents/projects/notes';
// import ProjectClientNotification from '../components/applicationComponents/projects/clientNotification';
// import ProjectChangeLog from '../components/applicationComponents/projects/changeLog';

import {
  AppMainRoutes,
  AppDashBoardRoutes,
  AppCompanyRoutes,
  AppCustomerRoutes,
  AppContractsRoutes,
  AppProjectsRoutes
} from './routesConfig';

import RequireAuthentication from '../components/hoc/requireAuthentication';

export const MainRoutes = () => {
  return (
    <Switch>
      <Route path={AppMainRoutes.company} component={Company} />
      <Route path={AppMainRoutes.customer} component={Customer} />
      <Route path={AppMainRoutes.dashboard} component={Dashboard} />
      <Route path={AppMainRoutes.contracts} component={Contract} />
      <Route path={AppMainRoutes.contractsDetails} component={ContractDetails} />
      <Route path={AppMainRoutes.projectsHome} component={ProjectHome} />
      <Route component={NoMatch} />
    </Switch>
  );
};
export const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/dashboard'} component={Assignments} />
      <Route exact path={AppDashBoardRoutes.assignments} component={Assignments} />
      <Route exact path={AppDashBoardRoutes.inactiveassignments} component={Inactiveassignments} />
      <Route exact path={AppDashBoardRoutes.visitStatus} component={VisitStatus} />
      <Route exact path={AppDashBoardRoutes.timesheet} component={Timesheet} />
      <Route exact path={AppDashBoardRoutes.contractsNearExpiry} component={ContractsNearExpiry} />
      <Route exact path={AppDashBoardRoutes.documentAproval} component={DocumentAproval} />
      <Route exact path={AppDashBoardRoutes.budgetMonetary} component={BudgetMonetary} />
      <Route exact path={AppDashBoardRoutes.budgeHours} component={BudgeHours} />
      <Route exact path={AppDashBoardRoutes.documentInformation} component={DocumentInformation} />
      {/* <Redirect exact from={'/'+AppMainRoutes.dashboard} to={AppDashBoardRoutes.assignments} /> */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export const CompanyRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/company'} component={CompanyList} />
      <Route exact path={AppCompanyRoutes.generalDetails} component={GeneralDetails} />
      <Route exact path={AppCompanyRoutes.emailTemplates} component={EmailTemplates} />
      <Route exact path={AppCompanyRoutes.divisionCostCenterMargin} component={DivisionCostCenterMargin} />
      <Route exact path={AppCompanyRoutes.expectedMarginByBusinessUnit} component={ExpectedMarginByBusinessUnit} />
      <Route exact path={AppCompanyRoutes.payroll} component={Payroll} />
      <Route exact path={AppCompanyRoutes.contracts} component={Contracts} />
      <Route exact path={AppCompanyRoutes.documents} component={Documents} />
      <Route exact path={AppCompanyRoutes.changeLog} component={ChangeLog} />
      <Route exact path={AppCompanyRoutes.notes} component={Notes} />
      <Route exact path={AppCompanyRoutes.companyOffices} component={CompanyOffices} />
      <Route exact path={AppCompanyRoutes.companyTaxes} component={CompanyTaxes} />
      {/* <Redirect exact from={'/'+AppMainRoutes.dashboard} to={AppDashBoardRoutes.assignments} /> */}
      <Route component={NoMatch} />
    </Switch>
  );
};
export const CompanySearchRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/company'} component={CompanyList} />
      <Route exact path={AppCompanyRoutes.generalDetails} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.emailTemplates} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.divisionCostCenterMargin} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.expectedMarginByBusinessUnit} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.payroll} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.contracts} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.documents} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.changeLog} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.notes} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.companyOffices} component={CompanyDetails} />
      <Route exact path={AppCompanyRoutes.companyTaxes} component={CompanyDetails} />
      {/* <Redirect exact from={'/'+AppMainRoutes.dashboard} to={AppDashBoardRoutes.assignments} /> */}
      <Route component={NoMatch} />
    </Switch>
  );
};

export const CustomerRoutes = () => {
  return (
    <Switch>
      <Route exact path={AppCustomerRoutes.generalDetails} component={CustGeneralDetails} />
      <Route exact path={AppCustomerRoutes.extranet} component={Extranet} />
      <Route exact path={AppCustomerRoutes.assignments} component={CustAssignmentDetails} />
      <Route exact path={AppCustomerRoutes.contracts} component={CustContractDetails} />
      <Route exact path={AppCustomerRoutes.documents} component={CustomerDocuments} />
      <Route exact path={AppCustomerRoutes.notes} component={CustNotesDetails} />
      <Route exact path={AppCustomerRoutes.changeLog} component={ChangeLog} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export const CustomerSearchListRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/customer'} component={CustomerList} />
      <Route exact path={AppCustomerRoutes.generalDetails} component={CustomerDetails} />
      <Route exact path={AppCustomerRoutes.extranet} component={CustomerDetails} />
      <Route exact path={AppCustomerRoutes.assignments} component={CustomerDetails} />
      <Route exact path={AppCustomerRoutes.contracts} component={CustomerDetails} />
      <Route exact path={AppCustomerRoutes.documents} component={CustomerDetails} />
      <Route exact path={AppCustomerRoutes.notes} component={CustomerDetails} />
      <Route exact path={AppCustomerRoutes.changeLog} component={CustomerDetails} />

      {/* <Route exact path={'/customer'} component={CustomerDetails} /> */}
    </Switch>
  );
};

// export const ContractRoutes = () => {
//   return (
//     <Switch>
//       {/* <Route exact path={'/contracts'} component={ContractGeneralDetails} /> */}
//       <Route exact path={AppContractsRoutes.generalDetails} component={ContractGeneralDetails} />
//       <Route exact path={AppContractsRoutes.documents} component={ContractDocuments} />
//       <Route exact path={AppContractsRoutes.invoicingDefaults} component={ContractInvoicingDefaults} />
//       <Route exact path={AppContractsRoutes.fixedExchangeRates} component={ContractFixedExchangeRates} />
//       <Route exact path={AppContractsRoutes.rateSchedules} component={ContractRateSchedules} />
//       <Route exact path={AppContractsRoutes.project} component={ContractProject} />
//       <Route exact path={AppContractsRoutes.notes} component={ContractNotes} />
//       <Route exact path={AppContractsRoutes.changeLog} component={ChangeLog} />
//       <Route component={NoMatch} />
//     </Switch>
//   );
// };
// export const ContractsSearchRoutes = () => {
//   return (
//     <Switch>
//       <Route exact path={'/contracts'} component={ContractList} />
//       <Route exact path={AppContractsRoutes.generalDetails} component={ContractDetails} />
//       <Route exact path={AppContractsRoutes.documents} component={ContractDetails} />
//       <Route exact path={AppContractsRoutes.invoicingDefaults} component={ContractDetails} />
//       <Route exact path={AppContractsRoutes.fixedExchangeRates} component={ContractDetails} />
//       <Route exact path={AppContractsRoutes.rateSchedules} component={ContractDetails} />
//       <Route exact path={AppContractsRoutes.project} component={ContractDetails} /> 
//       <Route exact path={AppContractsRoutes.notes} component={ContractDetails} /> 
//       <Route component={NoMatch} />
//     </Switch>
//   );
// };

export const ProjectRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/projects'} component={ProjectGeneralDetails} />
      <Route exact path={AppProjectsRoutes.generalDetails} component={ProjectGeneralDetails} />
      {/* <Route exact path={AppProjectsRoutes.documents} component={ProjectDocuments} />
      <Route exact path={AppProjectsRoutes.invoicingDefaults} component={ProjectInvoicingDefaults} />
      <Route exact path={AppProjectsRoutes.assignments} component={ProjectAssignments} />
      <Route exact path={AppProjectsRoutes.notes} component={ProjectNotes} />
      <Route exact path={AppProjectsRoutes.clientNotification} component={ProjectClientNotification} />
      <Route exact path={AppProjectsRoutes.changeLog} component={ProjectChangeLog} /> */}
      <Route component={NoMatch} />
    </Switch>
  );
};