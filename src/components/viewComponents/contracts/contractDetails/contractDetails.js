import React, { Component } from 'react';
import SaveBar from '../../../applicationComponents/saveBar';
import CustomModal from '../../../baseComponents/customModal';
import { getlocalizeData } from '../../../../utils/commonUtils';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GeneralDetails from '../../../applicationComponents/contracts/generalDetails';
import InvoicingDefaults from '../../../applicationComponents/contracts/invoicingDefaults';
import FixedExchangeRates from '../../../applicationComponents/contracts/fixedExchangeRates';
import RateSchedule from '../../../applicationComponents/contracts/rateSchedule';
import Documents from '../../../applicationComponents/contracts/documents';
import Notes from '../../../applicationComponents/contracts/notes';
const localConstant = getlocalizeData();

class ContractDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

    }

    render() {
        return (

            <div className="row">
                <div className="col s12 pl-0 verticalTabs">
                    <Tabs>
                        <TabList>
                            <Tab>General Details</Tab>
                            <Tab>Invoicing Defaults</Tab>
                            <Tab>Fixed Exchange Rates</Tab>
                            <Tab>Rate Schedules</Tab>
                            <Tab>Documents</Tab>
                            <Tab>Projects</Tab>
                            <Tab>Notes</Tab>

                        </TabList>

                        <TabPanel>
                            <GeneralDetails />
                        </TabPanel>
                        <TabPanel>
                            <InvoicingDefaults />
                        </TabPanel>
                        <TabPanel>
                            <FixedExchangeRates />
                        </TabPanel>
                        <TabPanel>
                            <RateSchedule />
                        </TabPanel>
                        <TabPanel>
                            <Documents />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default ContractDetails;