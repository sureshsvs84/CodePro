import React,{ Component,Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { NavLink,withRouter } from 'react-router-dom';
class VerticalTab extends Component{    
    constructor(props) {
        super(props);
        this.state = {
            dynamicComponents : []       
        };
    }
    
async componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            const tab = document.querySelectorAll('.tabs');
            const tabInstances = MaterializeComponent.Tabs.init(tab);                       
        }); 
    }
    render(){     
        return(  
            <div className="collection">                
                {
                    (this.props.tabData).map((iteratedTab,i)=>{
                        return <NavLink key={i} activeClassName={'active'} to={iteratedTab.tabBodyComponent} className="collection-item">{iteratedTab.tabHeader}</NavLink>;
                    })
                }
            </div>
        );
    }
}

export default VerticalTab;