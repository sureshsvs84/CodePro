import React,{ Component,Fragment } from 'react';
import ReactGrid from '../../../../components/baseComponents/reactAgGrid';
import HeaderData from './headerData.json';
import PropTypes from 'proptypes';

class BudgetMonetary extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            columnDefs: [
                {
                  headerName: "Group",
                  field: "group",
                  cellRenderer: "agGroupCellRenderer"
                },
                {
                  headerName: "Athlete",
                  field: "athlete"
                },
                {
                  headerName: "Year",
                  field: "year"
                },
                {
                  headerName: "Country",
                  field: "country"
                }
              ],
          rowData: [
            {
              group: "Group A",
              participants: [
                {
                  group: "A.1",
                  athlete: "Michael Phelps",
                  year: "2008",
                  country: "United States"
                },
                {
                  group: "A.2",
                  athlete: "Michael Phelps",
                  year: "2008",
                  country: "United States"
                },
                {
                  group: "A.3",
                  athlete: "Michael Phelps",
                  year: "2008",
                  country: "United States"
                }
              ]
            },
            {
              group: "Group B",
              athlete: "Mix of Names",
              year: "2000..2012",
              country: "Group Country",
              participants: [
                {
                  group: "B.1",
                  athlete: "Natalie Coughlin",
                  year: "2008",
                  country: "United States"
                },
                {
                  group: "B.2",
                  athlete: "Missy Franklin ",
                  year: "2012",
                  country: "United States"
                },
                {
                  group: "B.3",
                  athlete: "Ole Einar Qjorndalen",
                  year: "2002",
                  country: "Norway"
                },
                {
                  group: "B.4",
                  athlete: "Marit Bjorgen",
                  year: "2010",
                  country: "Norway"
                },
                {
                  group: "B.5",
                  athlete: "Ian Thorpe",
                  year: "2000",
                  country: "Australia"
                }
              ]
            },
            {
              group: "Group C",
              participants: [
                {
                  group: "C.1",
                  athlete: "Janica Kostelic",
                  year: "2002",
                  country: "Crotia"
                },
                {
                  group: "C.2",
                  athlete: "An Hyeon-Su",
                  year: "2006",
                  country: "South Korea"
                }
              ]
            }
          ],
        getNodeChildDetails(rowItem) {
            if (rowItem.participants) {
              return {
                group: true,
                expanded: rowItem.group === "Group C",
                children: rowItem.participants,
                key: rowItem.group
              };
            } else {
              return null;
            }
          }
        };
      }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }
    render(){ 
        // let rowData;  
        const headData = HeaderData; 
        return(
            <ReactGrid 
            gridRowData={this.state.rowData} 
            gridColData={headData}
            id="myGrid"
            getNodeChildDetails={this.state.getNodeChildDetails}
            onGridReady={this.onGridReady.bind(this)}
             />
           
        );
    }
}
// BudgetMonetary.prototypes = {
//     headData:PropTypes.array.isrequired,
//     rowData:PropTypes.array.isrequired
// };
// BudgetMonetary.defaultprops ={
//     headData:[],
//     rowData:[]
// };
export default BudgetMonetary;