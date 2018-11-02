import React, { Component, Fragment } from 'react';
import AppHeader from '../header';
import AppSideMenu from '../sideMenu';
import { MainRoutes } from '../../routes/mainRoutes';
import { Helmet } from 'react-helmet';
import LoaderComponent from '../baseComponents/loader';

class AppLayout extends Component {
  render() {
    return (
      <Fragment>
        <header className="appHeader navbar-fixed">
          <Helmet>
            <title>Intertek</title>
          </Helmet>
          <AppHeader />
        </header>
        <AppSideMenu />
        <div className='pageContainer'>
          <div className='contentSection'>
            {
              this.props.loaderStatus ? <LoaderComponent /> : ''
            }
            <MainRoutes />           
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppLayout;
