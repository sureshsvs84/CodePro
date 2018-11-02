import React, { Component, Fragment } from 'react';
//import MaterializeComponent from 'materialize-css';

class FileToBeOpen extends Component {
    clickHandler = (e) => {           
        if (this.props.data.uploadDataId) {
            if (this.props.data.recordStatus === "N") {
                this.props.actions.DownloadUploadedDocumentData(this.props.data.uploadDataId);
             
            }
            else {
                this.props.actions.DownloadDocumentData(this.props.data.uploadDataId);                
            }
        }        
    }
    render() {
        return (
            <Fragment>
                <a onClick={this.clickHandler} className="link">{this.props.data[this.props.dataToRender]}</a>
            </Fragment>
        );
    }
}

export default FileToBeOpen;