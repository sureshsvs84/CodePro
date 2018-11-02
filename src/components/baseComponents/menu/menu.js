import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { isEmptyReturnDefault } from '../../../utils/commonUtils';
class Menu extends Component {
    getNavStyles = (path) => {
        return this.context.router.route.location.pathname === path ? 'active' : 'inactive';
    }  
    render() {    
        const { menuClass, menulist,name,url,count,countkey } = this.props;
        const menulistArray = isEmptyReturnDefault(menulist,'array');

        return (
            <Fragment>
               <ul className={'mb-0 collection '+ menuClass}>
                  {
                    menulistArray.map((menu,i) => {
                          return(
                            <li className={"collection-item " + this.getNavStyles(menu[url])}>
                                    <Link key={i} to={menu[url]} >{menu[name]} {count && count[menu[countkey]] !== null &&  count[menu[countkey]] !== undefined && <span>({count[menu[countkey]]})</span>}</Link>
                            </li>
                            );                           
                      })
                  }
                    
              </ul>
            </Fragment>
        );
   }
}
export default Menu;
Menu.propTypes = {
    menuClass: PropTypes.string,
    menulist: PropTypes.array.isRequired
};
Menu.contextTypes= {
    router: PropTypes.object
  };
Menu.defaultProps = {
    menuClass: '',
    menulist:[],
    count:''   
    
}; 