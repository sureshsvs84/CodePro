import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';

class FileToBeOpen extends Component {
    clickHandler = (e) => {           
        if (this.props.data.uploadDataId) {
            if (this.props.data.recordStatus == "N") {
                this.props.actions.DownloadUploadedDocumentData(this.props.data.uploadDataId);
                // this.props.displayDocuments.map(doc => {
                //     if (doc[this.props.data.uploadDataId]) {                        
                //         var file = doc[this.props.data.uploadDataId];
                //         var reader = new FileReader();
                //         reader.onload = (function (theFile) {                            
                //             return function (e) {                                  
                //                 let result = e.target.result;
                //                 // if (file.type) {
                //                 //     var w = window.open('about:blank');
                //                 //     setTimeout(function () { //FireFox seems to require a setTimeout for this to work.
                //                 //         const ifr = w.document.createElement('iframe');
                //                 //         ifr.style.width = "100%";
                //                 //         ifr.style.height = "100%";
                //                 //         w.document.body.appendChild(ifr)
                //                 //             .src = result;
                //                 //     }, 0);
                //                 // }
                //                 if (!file.type) {
                //                     let fileType = file.name.split(".")[1];
                //                     if (fileType == "xls") {
                //                         result = result.replace('data:', 'data:application/vnd.ms-excel');
                //                     }
                //                     if (fileType == "doc" || fileType == "docx") {
                //                         result = result.replace('data:', 'data:application/vnd.ms-word');
                //                     }
                //                     if(fileType == "xlsx"){
                //                         result = result.replace('data:', 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet');
                //                     }
                //                 }
                //                     //Downloading the file  
                //                     var a = window.document.createElement('a');                                    
                //                     a.href = result;
                //                     a.download = file.name;

                //                     // Append anchor to body.
                //                     document.body.appendChild(a);
                //                     a.click();

                //                     // Remove anchor from body
                //                     document.body.removeChild(a);                                                               
                //             };
                //         })(file);
                //         reader.readAsDataURL(file);
                //     }
                // });
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