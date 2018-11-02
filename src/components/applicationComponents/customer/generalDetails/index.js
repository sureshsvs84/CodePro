import GeneralDetails from './generalDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchCustomerList,AddCustomerAddress,AddCustomerContact,DeleteCustomerAddress,DeleteCustomerContact, UpdateAddressReference,ShowButtonHandler,UpdateContactReference } from '../../../viewComponents/customer/customerAction';
import { FetchCity, FetchState } from '../../../viewComponents/company/companyAction';
import { DisplayModal,HideModal } from '../../../baseComponents/customModal/customModalAction';

const mapStateToProps = (state) => {
    return {
        customerData: state.CustomerReducer.customerDetail.Detail,
        customerAddressData: state.CustomerReducer.customerDetail.Addresses,
        customerContactData: state.CustomerReducer.customerDetail.Addresses,
        cityMasterData: state.CompanyReducer.cityMasterData,
        stateMasterData: state.CompanyReducer.stateMasterData,
        countryMasterData: state.CompanyReducer.countryMasterData,
        salutationMasterData: state.CompanyReducer.salutationMasterData,
        vatPrefixMasterData: state.CompanyReducer.vatPrefixMasterData,
        showButton: state.CustomerReducer.showButton,
        // gridProps: state.CompanyReducer.gridProps,
        // secondGridProps:state.CompanyReducer.secondGridProps,
        editedAddressReference:state.CustomerReducer.editedAddressReference,
        editedContactReference:state.CustomerReducer.editedContactReference,
        loggedInUser: state.appLayoutReducer.loginUser    
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchCustomerList,
                AddCustomerAddress,
                DeleteCustomerAddress,
                DeleteCustomerContact,
                AddCustomerContact,   
                FetchCity,                
                FetchState,            
                UpdateAddressReference,
                UpdateContactReference,
                ShowButtonHandler,
                DisplayModal,     
                HideModal           
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralDetails);