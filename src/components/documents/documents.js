import React, { Fragment } from 'react';
import ReactGrid from '../baseComponents/reactAgGrid';

const commonDocuments = (props) => {
    return (
        <Fragment>
            <div className="genralDetailContainer customCard">
                <div className="row mb-0">
                    <p className="bold col s3 pl-3 pr-3">Documents</p>
                    <div className="center-align s3 offset-s9 right mr-3">
                        <a href={"#" + props.Id} className="mr-3 d-inline modal-trigger waves-effect waves-light">
                            <i className="zmdi zmdi-upload zmdi-hc-lg"></i>
                            <span className="d-block">Upload</span>
                        </a>
                        <a onClick={props.copyRecord} className="mr-3 d-inline waves-effect waves-light">
                            <i className="zmdi zmdi-copy zmdi-hc-lg"></i>
                            <span className="d-block">Copy</span>
                        </a>
                        <a onClick={props.pasteRecord} className="mr-3 d-inline waves-effect waves-light">
                            <i className="zmdi zmdi-paste zmdi-hc-lg"></i>
                            <span className="d-block">Paste</span>
                        </a>
                        {/* <a onClick={this.downloadRecord} className="mr-3 d-inline waves-effect waves-light">
                                    <i className="zmdi zmdi-download zmdi-hc-lg"></i>
                                    <span className="d-block">Download</span>
                                </a> */}
                        <a href="#confirmation_Modal" onClick={props.documentDeleteClickHandler} className="mr-3 d-inline waves-effect waves-light modal-trigger">
                            <i className="zmdi zmdi-delete zmdi-hc-lg"></i>
                            <span className="d-block">Delete</span>
                        </a>
                    </div>
                </div>
                <div className="customCard">
                    <ReactGrid gridRowData={props.DocumentsData} gridColData={props.headerData} onRef={props.onRef} />
                </div>
            </div>
        </Fragment>
    );
};

export default commonDocuments;