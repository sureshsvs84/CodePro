import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {    
    render() {
        const { className, colSize, subtitle,heading, children, isopen,onpanelClick } = this.props;
        return (
            <Fragment>
            <div className={"col " + colSize +' '+ className}>
            <ul className="collapsible">                   
                    <li className={isopen ? 'active':'inactive'} >
                        <div className="collapsible-header" onClick={onpanelClick}>
                        {subtitle && <Fragment> <strong className="bold">{heading} </strong> 
                        <span className="pl-2"> {subtitle}</span>
                        <div className="searchIcon"><i className="zmdi zmdi-search"></i></div>
                        </Fragment>
                        }                
                        </div>
                         <div className="collapsible-body">
                         {children}
                        </div>
                    </li>
            </ul>
        </div>
        </Fragment>
        );
    }
}

export default Panel;

Panel.propTypes = {
    className: PropTypes.string,
    title:PropTypes.string,
    heading:PropTypes.string,
    isopen:PropTypes.bool
};
Panel.defaultProps = {
    className:'',
    title:'',
    heading:''
    
}; 