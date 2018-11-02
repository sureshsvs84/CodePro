import React, { Component, Fragment } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import MaterializeComponent from 'materialize-css';
import CustomerAnchorRenderer from '../../viewComponents/customer/customerAnchor';
import EditRenderer from '../editRenderer';
class ReactGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginationPageSize: 10,
            rowClassRules: {
                "dangerTag": function (params) {
                    if (params.data.techSpecialists !== undefined || params.data.operatingCompanyCoordinator !== undefined) {
                        if (params.data.techSpecialists !== undefined) {
                            if ((params.data.techSpecialists === null) || params.data.techSpecialists.length == 0) {
                                return true;
                            }
                        }
                        if (params.data.operatingCompanyCoordinator !== undefined) {
                            if ((params.data.operatingCompanyCoordinator === null) || (params.data.operatingCompanyCoordinator.length == 0)) {
                                return true;
                            }
                        }
                    } else if (params.data.techSpecialists === undefined || params.data.operatingCompanyCoordinator === undefined) {
                        return false;
                    }
                },
                "defaultTag": function (params) {
                    return params.data.techSpecialists === undefined;
                },
                "oddRowColor": function (params) {
                    if (params.node.rowIndex % 2 === 0) {
                        return true;
                    }
                }
            },
            frameworkComponents: {
                customerAnchorRenderer: CustomerAnchorRenderer,
                EditRenderer: EditRenderer,
            },
            overlayLoadingTemplate: "<div class='loaders'><div></div><div></div><div></div></div>",
            overlayNoRowsTemplate: "<span class='noRecords'>No Records Found</span>",

        };

    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        if(this.gridApi.paginationGetTotalPages() == 0){
            setCurrentPage(this.gridApi.paginationGetCurrentPage());
        }else{
            setCurrentPage(this.gridApi.paginationGetCurrentPage() + 1);
        }
        setTotalPage(this.gridApi.paginationGetTotalPages());   
        // this.gridApi.sizeColumnsToFit(false);
    }

    onPaginationChanged = () => {
        if (this.gridApi) {
            setTotalPage(this.gridApi.paginationGetTotalPages());
            if (this.gridApi.paginationGetTotalPages() == 0) {
                setCurrentPage(this.gridApi.paginationGetCurrentPage());
            } else {
                setCurrentPage(this.gridApi.paginationGetCurrentPage() + 1);
            }
        }
    }

    onBtnPrevious = () => {
        this.gridApi.paginationGoToPreviousPage();
    }
    onBtnNext = () => {
        this.gridApi.paginationGoToNextPage();
    }

    onQuickFilterChanged = (e) => {
        this.gridApi.setQuickFilter(e.target.value);
    }

    currentPageChanged = (e) => {
        this.gridApi.paginationGoToPage(e.target.value - 1);
    }

    checkEnterKey = (e) => {
        const code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode
            this.gridApi.paginationGoToPage(e.target.value - 1);
        }
    }

    onPageSizeChanged = (newPageSize) => {
        const value = newPageSize.target.value;
        this.gridApi.paginationSetPageSize(Number(value));
    }

    componentDidMount() {
        const select = document.querySelectorAll('select');
        const selectInstances = MaterializeComponent.FormSelect.init(select);
        const tooltips = document.querySelectorAll('.tooltipped');
        const tooltipInstances = MaterializeComponent.Tooltip.init(tooltips);
        this.props.onRef && this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef && this.props.onRef(undefined);
    }

    exportToCSV = () => {
        this.gridApi.exportDataAsCsv();
    }

    getSelectedRows = () => {
        const selectedData = this.gridApi.getSelectedRows();
        return selectedData;
    }

    removeSelectedRows = (data) => {
        this.gridApi.updateRowData({ remove: data });
    }

    renderGridSearchBox = () => {
        const gridLength = this.props.gridRowData ? this.props.gridRowData.length : 0;
        if (gridLength > 0) {
            return (<div className={this.props.gridColData.searchable ? "input-field col s12 m4" : "hide"}>
                <input type="text" onInput={this.onQuickFilterChanged} className="customInputs browser-default searchtxtbox" id="quickFilter" placeholder="Free Text Search.." />
            </div>);
        }
        else {
            return ("");
        }
    }
    renderPagination = () => {
        const gridLength = this.props.gridRowData ? this.props.gridRowData.length : 0;
        if (gridLength > this.state.paginationPageSize) {
            return (<div>
                <div className={this.props.gridColData.pagination ? 'input-field col s12 m1' : 'hide'}>
                    <select onChange={this.onPageSizeChanged} id="page-size" className='browser-default'>
                        <option value="10" selected defaultValue>10 Rows</option>
                        <option value="25">25 Rows</option>
                        <option value="50">50 Rows</option>
                        <option value="100">100 Rows</option>
                        <option value="500">500 Rows</option>
                        <option value={gridLength} >Show All</option>
                    </select>
                </div>
                <div className={this.props.gridColData.pagination ? "input-field col s12 m2 pr-0 mr-0" : "hide"}>
                    <a onClick={this.onBtnPrevious} className="link mr-3"><i className="zmdi zmdi-chevron-left zmdi-hc-lg"></i></a>
                    <input id="currentPageTwo" type="text" className="browser-default customInputs center-align mr-1 pagerInput validate" onBlur={this.currentPageChanged} onKeyPress={this.checkEnterKey} />
                    of<span id="lbTotalPagesTwo" className='ml-2'></span>
                    <a onClick={this.onBtnNext} className="link ml-2"><i className="zmdi zmdi-chevron-right zmdi-hc-lg"></i></a>
                </div>
            </div>);
        }
        else {
            return ("");
        }
    }

    renderExport = () => {
        const gridLength = this.props.gridRowData ? this.props.gridRowData.length : 0;
        if (gridLength > 0) {
            return (<div className={this.props.gridColData.gridActions ? 'input-field col s12 m1 right-left' : 'hide'}>
                <img width='24' className="link tooltipped" data-position="left" data-tooltip="Export To CSV" title="Export To CSV" onClick={this.exportToCSV} src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDFMOCw1SDExVjE0SDEzVjVIMTZNMTgsMjNINkM0Ljg5LDIzIDQsMjIuMSA0LDIxVjlBMiwyIDAgMCwxIDYsN0g5VjlINlYyMUgxOFY5SDE1VjdIMThBMiwyIDAgMCwxIDIwLDlWMjFBMiwyIDAgMCwxIDE4LDIzWiIgLz48L3N2Zz4=' />
            </div>);
        }
        else {
            return ("");
        }
    }
    clearFilters =() =>{      
        this.gridApi.setFilterModel(null);
        this.gridApi.onFilterChanged();
    }

    renderFilters =() =>{
        const gridLength = this.props.gridRowData ? this.props.gridRowData.length : 0;
        if (gridLength > 0) {
            return (<div className={this.props.gridColData.enableFilter ?  this.props.gridColData.gridTitlePanel ? 'input-field col right-left gridFilter' : 'input-field col right-left gridFilter mb-0 mt-0 mr-2 right' : 'hide'}>
            <img width='24' className="link tooltipped" data-position="left" data-tooltip="Clear Filter" title="Clear Filter"  onClick={this.clearFilters}  src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE0LjczLDIwLjgzTDE3LjU4LDE4TDE0LjczLDE1LjE3TDE2LjE1LDEzLjc2TDE5LDE2LjU3TDIxLjgsMTMuNzZMMjMuMjIsMTUuMTdMMjAuNDEsMThMMjMuMjIsMjAuODNMMjEuOCwyMi4yNEwxOSwxOS40TDE2LjE1LDIyLjI0TDE0LjczLDIwLjgzTTEzLDE5Ljg4QzEzLjA0LDIwLjE4IDEyLjk0LDIwLjUgMTIuNzEsMjAuNzFDMTIuMzIsMjEuMSAxMS42OSwyMS4xIDExLjMsMjAuNzFMNy4yOSwxNi43QzcuMDYsMTYuNDcgNi45NiwxNi4xNiA3LDE1Ljg3VjEwLjc1TDIuMjEsNC42MkMxLjg3LDQuMTkgMS45NSwzLjU2IDIuMzgsMy4yMkMyLjU3LDMuMDggMi43OCwzIDMsM1YzSDE3VjNDMTcuMjIsMyAxNy40MywzLjA4IDE3LjYyLDMuMjJDMTguMDUsMy41NiAxOC4xMyw0LjE5IDE3Ljc5LDQuNjJMMTMsMTAuNzVWMTkuODhNNS4wNCw1TDksMTAuMDZWMTUuNThMMTEsMTcuNThWMTAuMDVMMTQuOTYsNUg1LjA0WiIgLz48L3N2Zz4=' />
            </div>);
        }
        else {
            return ("");
        }
    }
    render() {
        const gridLength = this.props.gridRowData ? this.props.gridRowData.length : 0;
        const noRowTemplate = (Array.isArray(this.props.gridRowData) && this.props.gridRowData.length == 0) ? this.state.overlayNoRowsTemplate : this.state.overlayLoadingTemplate;

        return (
            <Fragment>
                <div className={this.props.gridColData.gridTitlePanel ? 'row m-0' : this.props.gridColData.enableFilter ? 'row m-0' :'hide'}>
                    {
                        this.renderGridSearchBox()
                    }
                    {
                        this.renderPagination()
                    }
                    {
                        this.renderExport()
                    }
                    { 
                        this.renderFilters()
                    } 
                </div>
                <div className="ag-theme-material reactAgGrid second-grid" style={{ "height": this.props.gridColData.gridHeight + "vh" }}>
                    <AgGridReact
                        columnDefs={this.props.gridColData.columnDefs}
                        rowData={this.props.gridRowData}
                        enableFilter={this.props.gridColData.enableFilter}
                        enableSorting={this.props.gridColData.enableSorting}
                        pagination={this.props.gridColData.pagination}
                        paginationPageSize={this.state.paginationPageSize}
                        onPaginationChanged={this.onPaginationChanged}
                        suppressPaginationPanel={true}
                        onGridReady={this.onGridReady}
                        suppressMenuHide={true}
                        enableColResize={true}
                        rowClass="customRow"
                        rowHeight="30"
                        rowClassRules={this.state.rowClassRules}
                        frameworkComponents={this.state.frameworkComponents}
                        suppressRowClickSelection={true}
                        rowSelection={this.props.gridColData.rowSelection}
                        overlayLoadingTemplate={this.state.overlayLoadingTemplate}
                        overlayNoRowsTemplate={this.state.overlayNoRowsTemplate}
                        multiSortKey={this.props.gridColData.multiSortKey}
                    >
                    </AgGridReact>
                </div>
            </Fragment>
        );
    }
}

function setTotalPage(text) {
    const element = document.querySelector('#lbTotalPagesTwo');
    if (element !== undefined && element !== null) {
        element.innerHTML = text;
    }
}

function setCurrentPage(text) {
    const element = document.querySelector('#currentPageTwo');
    if (element !== undefined && element !== null) {
        element.value = text;
        MaterializeComponent.updateTextFields();
    }
}

export default ReactGrid;