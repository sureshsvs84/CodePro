import React from 'react';

const accountRefModal = (props) =>{
    return(
        <div id="accountReference" className="modal">
        <form onSubmit={props.formSubmit} id="addAccountReference" className="col s12">
            <div className="modal-content">
                <h6>Add Account Reference</h6>
                <div className="row">
                    <div className="col s6">
                        <label htmlFor="companyName" className="customLabel">Company Name:</label>
                        <select id="companyName" name="companyCode" className="browser-default" onChange={props.selectChange}>
                            <option value="">Select Account Reference</option>
                            {props.companyData.map(result => {
                                if (result.companyCode === props.editedAccountRef.companyCode) {
                                    return <option value={result.companyCode} selected>{result.companyName}</option>;
                                }
                                else {
                                    return <option value={result.companyCode}>{result.companyName}</option>;
                                }
                            })}
                        </select>
                    </div>
                    <div className="col s6">
                        <label htmlFor="AccountReference" className="customLabel">Account Reference:</label>
                        <input className="browser-default customInputs validate" maxlength="20" placeholder="Account Reference" name="accountReferenceValue" onChange={props.inputChange} defaultValue={props.editedAccountRef.accountReferenceValue} id="AccountReference" type="text" required />
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" id="cancelAccountReference" onClick={props.clearAccountRef} className="modal-close waves-effect waves-teal btn-flat mr-2">CANCEL</button>
                {!props.showButton ?
                    <button type="submit"
                        className="btn-small">
                        SUBMIT
                    </button>
                    :
                    <button type="submit"
                        className="btn-small">
                        SUBMIT
                    </button>
                }
            </div>
        </form>
    </div>
    );
};

export default accountRefModal;