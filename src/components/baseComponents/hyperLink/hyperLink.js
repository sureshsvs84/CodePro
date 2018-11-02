import React, { Component } from 'react';
import MaterializeComponent from 'materialize-css';

class HyperLink extends Component {     

    render() {
        return (
            <a onClick={()=>MaterializeComponent.toast({ html: 'Under Construction',classes:"warningToast" })} className="link">{this.props.value}</a>
            // {this.props.data[this.props.dataToRender]}
        );
    }
}

export default HyperLink;