import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { NavLink } from 'react-router-dom';
import { sideMenu } from './sideMenuData.js';
import collapsedLogo from '../../assets/images/collapsedLogo.png';
import Logo from '../../assets/images/logo.png';

class AppSideMenu extends Component {
    componentDidMount() {
        const sidnav = document.querySelectorAll('.sidenav');
        const sidnavInstances = MaterializeComponent.Sidenav.init(sidnav);
        const collapse = document.querySelectorAll('.collapsible');
        const collapseInstances = MaterializeComponent.Collapsible.init(collapse);
        const tooltips = document.querySelectorAll('.tooltipped');
        const tooltipInstances = MaterializeComponent.Tooltip.init(tooltips);
        // Subscribe to 'attarctionList' store data modifications
    }
    render() {
        const sideMenus = sideMenu;
        return (
            <Fragment>
            <ul id="slide-out" class="sidenav collapsible">
            <a className="btn-floating sidenav-close sideMenuCloseBtn waves-effect waves-light"><i className="zmdi zmdi-close"></i></a>
                    <NavLink to={'/dashboard/assignments'} className="expandedLogo">
                        <img src={Logo} width='250' alt="Intertek Logo" />
                    </NavLink>
                    <li className="sideNavContent">
                        {
                                sideMenus.map((iteratedMenu, i) => {
                                    return (
                                        <Fragment>
                                        { iteratedMenu.subMenu.length 
                                        < 0 ?
                                        <div className="collapsible-header"><NavLink to={'/' + iteratedMenu.viewUrl} className='sidenav-close menuText'>
                                        <img alt={iteratedMenu.menuText} src={iteratedMenu.menuIcon} /> <span>{iteratedMenu.menuText}</span>
                                        </NavLink>
                                        </div> :
                                            <ul className="collapsible collapsible-accordion">
                                               <li>                                               
                                               <a class="collapsible-header"> 
                                                    <img alt={iteratedMenu.menuText} src={iteratedMenu.menuIcon} /> {iteratedMenu.menuText}
                                                </a>
                                                <div class="collapsible-body">
                                                 <ul>
                                                    { iteratedMenu.subMenu.length > 0 && iteratedMenu.subMenu.map((subMenu, j) => {
                                                        return (
                                                            <li>
                                                                <NavLink to={'/' + subMenu.viewUrl} key={i} className='greyBorder' activeClassName='activeMenu'>
                                                                    {subMenu.menuText}
                                                                </NavLink>
                                                            </li>
                                                            );
                                                        })
                                                    }                                   
                                                 </ul>
                                                </div>
                                               </li>                                            
                                            </ul>
                                        }                                  
                                    
                                    </Fragment>
                                    );
                                })
                        }
                    </li>
                   
                </ul>
               
                <div className='sideMenuCollapsed hide-on-med-and-down'>
                    <a href="#" data-target="slide-out" className="ml-1 menuIcon sidenav-trigger sideMenuCloseBtn waves-effect waves-light"><i className="zmdi zmdi-menu"></i></a>
                    <NavLink to={'/dashboard/assignments'} className='collapsedLogo p-0 tooltipped' data-position="right" data-tooltip={"Home"}>
                        <img src={collapsedLogo} width="50" alt="Intertek Logo" />
                    </NavLink>
                    <ul class="sideNav-vertical">
                        {
                            sideMenus.map((iteratedMenu, i) => {
                                return (
                                    <li>
                                        { iteratedMenu.subMenu.length > 0 ? <a class="greyBorder">  <img alt={iteratedMenu.viewUrl} src={iteratedMenu.menuIcon} /> </a> :
                                        <NavLink to={ '/' + iteratedMenu.viewUrl} data-position="right" data-tooltip={iteratedMenu.subMenu.length === 0 ? iteratedMenu.menuText : null} key={i} className={iteratedMenu.subMenu.length === 0 ? 'tooltipped greyBorder' : 'greyBorder'} activeClassName='activeMenu'>
                                            <img alt={iteratedMenu.viewUrl} src={iteratedMenu.menuIcon} />
                                        </NavLink>  
                                        }
                                        {iteratedMenu.subMenu.length > 0 && <ul className="sub-menu">
                                            {iteratedMenu.subMenu.length > 0 && iteratedMenu.subMenu.map((subMenu, j) => {
                                                return (

                                                    <li>
                                                        <NavLink to={'/' + subMenu.viewUrl} key={i} className='greyBorder'>
                                                            {subMenu.menuText}
                                                        </NavLink>
                                                    </li>

                                                );

                                            })
                                            }
                                        </ul>}

                                    </li>

                                );
                            })
                        }
                    </ul>
                </div>

            </Fragment>
        );
    }
}

export default AppSideMenu;