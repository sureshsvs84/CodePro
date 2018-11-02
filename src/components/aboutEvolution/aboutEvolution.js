import React,{ Component } from 'react';
import Logo from '../../assets/images/logo.png';
class AboutEvolution extends Component{
    render(){
        return(
            <div id="about-content" className="center-align">
            <div className="pt-2 aboutLogo"><img src={Logo} alt="Intertek Logo" /></div>
            <div className="pb-0">
                <div>Evo ver 2.0</div>
                <div>Evo QC release ver 1.1</div>
                <div>Evolution Helpdesk: +44 (1444) 472909</div>
                <div>Support Email: <a className="link">industry.support@intertek.com</a></div>
                <div className="pb-1">Evolution and GRM Release Notes</div>
                <div><a className="link" href="https://sharepoint.moodyint.com/gropsys">https://sharepoint.moodyint.com/gropsys</a></div>
            </div>          
        </div>
        );
    }
}

export default AboutEvolution;