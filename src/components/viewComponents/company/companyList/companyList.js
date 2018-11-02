import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import ReactGrid from '../../../baseComponents/reactAgGrid';
import HeaderData from '../companyHeaderData';
import CustomInput from '../../../baseComponents/inputControlls';
import Panel from '../../../baseComponents/panel';
const SearchFilter = (props) => (
  <form onSubmit={props.searchFilter} onReset={props.ClearSearchData}>
    <div className="row">
      <CustomInput hasLabel={true} label="Company Code" divClassName="s4" type='text'
        name='companyCode' autocomplete="off" colSize='s4' inputClass="customInputs" onValueChange={props.handlerChange}
      />
      <CustomInput hasLabel={true} label={"Has the Word:"} divClassName="s4"
        name='hasWord' colSize='s4' autocomplete="off" inputClass="customInputs" disabled={true} onValueChange={props.handlerChange}
      />
      <CustomInput hasLabel={true} divClassName='col' label={'Documents'} type='select'
        colSize='s4' className="browser-default" optionName='value' optionValue="value"
        disabled={true} onValueChange={props.handlerChange}
      />
    </div>
    <div className="row">
      <CustomInput hasLabel={true} label={"Name:"} divClassName="s4"
        name='companyName' colSize='s4' inputClass="customInputs" autocomplete="off" onValueChange={props.handlerChange}
      />
      <CustomInput hasLabel={true} id="companyOperatingCountry" name='operatingCountry' divClassName='col' label={'Operating Country'} type='select'
        colSize='s4' className="browser-default" optionsList={props.countryMasterData} optionName='name' optionValue="name"
        onSelectChange={props.handlerChange}
      />
      <div className="col s2 align-center mt-4 m1 align-center">
        <button type="submit" id="companySearchClicked" className="modal-close waves-effect waves-green btn">Search</button>
      </div>
      <div className="col s2 align-center mt-4 m1 align-center">
        <button type="reset" className="modal-close waves-effect waves-green btn">Reset</button>
      </div>
    </div>
  </form>
);

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.updatedData = {};    
  }
  componentWillUnmount() {
    this.props.actions.ClearSearchData();
  }
  componentDidMount() {
    this.props.actions.ClearCompanyDetails();
    if(this.props.isSearch){
      this.props.actions.showHidePanel();
    }
   
    this.props.actions.FetchCountry();

    document.getElementById("companyOperatingCountry").addEventListener("keydown", function(e) {
      if (e.key === "Enter" || (e.keyCode || e.which) === 13)
        // e.preventDefault();
        document.getElementById("companySearchClicked").click();
    });
  }

  panelClick = (e) => {
    this.props.actions.showHidePanel();
  }

  handlerChange = (e) => {
    this.updatedData[e.target.name] = e.target.value;
  }

  searchFilter = (e) => {
    e.preventDefault();
    this.props.actions.FetchCompanyDataList(this.updatedData);

  }
  ClearSearchData=()=>{
    this.updatedData = {};
    this.props.actions.ClearSearchData(this.updatedData);
  }

  render() {
    const headData = HeaderData;
    const rowData = this.props.companyDataList;
    const countryMasterData = this.props.countryMasterData;   
        
    return (
      <Fragment>
        <div className="companyPageContainer customCard">
          <Panel colSize="s12" isopen={this.props.isopen} heading="Company" subtitle="Edit/View Company" onpanelClick={this.panelClick}>
            <SearchFilter handlerChange={this.handlerChange} ClearSearchData={this.ClearSearchData} searchFilter={this.searchFilter} countryMasterData={countryMasterData} ></SearchFilter>
          </Panel>
          <ReactGrid gridRowData={rowData} gridColData={headData} />
        </div>
      </Fragment>
    );
  }
}

export default CompanyList;
