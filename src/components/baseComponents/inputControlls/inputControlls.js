import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import dateUtil from '../../../utils/dateUtil';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
class CustomInput extends Component {
    render() {
        const {
            isVisable,
            inputModal,
            label,
            autocomplete,
            labelName,
            errorMsg,
            type,
            colSize,
            divClassName,
            showPasswordToggle,
            disabled,
            htmlFor,
            hasLabel,
            prefixIcon,
            max,
            min,
            name,
            step,
            placeholder,
            required,
            inputClass,
            onValueKeypress,
            onValueBlur,
            onValueInput,
            onValueChange,
            defaultValue,
            onSelectChange,
            optionsList,
            optionName,
            optionValue,
            optionGroupLabelKey,
            onSelectGroupChange,
            optionGroups,
            optionKeyValue,
            isSwitchLabel,
            switchLabel,
            switchName,
            checkedStatus,
            onChangeToggle,
            radioGroup,
            radioName,
            isSelectOption,
            onRadioChange,
            isNonEditDateField,
            subOption,
            checkboxName,
            onCheckboxChange,
            optionsArray,
            checkBoxArray,
            value,
            labelClass,
            onDateChange,
            selectedDate,
            dateFormat,
            onDatePickBlur,
            shouldCloseOnSelect,
            id,
            readOnly,
            onRef,
            optionKeyName,          
            ref,
            minLength,
            maxLength,
            isChecked,
            refProps
        } = this.props;
        
        this.onValueChangeLength = e => {                
            if (e.currentTarget.value.length >= maxLength){                
                e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);                              
            }
            onValueChange(e);        
          };
                   
         this.onNumericKeypress = (event) => {
            const theEvent = event || window.event;
            const keyCode = theEvent.keyCode || theEvent.which;          
            const key = String.fromCharCode (keyCode);
            const regex = /[0-9]|\./;
            if (!regex.test(key) && keyCode !== 8 && keyCode !== 46 && keyCode !== 190 && keyCode !== 38 && keyCode !== 40 && keyCode !== 37 && keyCode !== 39) {
              theEvent.returnValue = false;
              if(theEvent.preventDefault) theEvent.preventDefault();
            }
        };           
          
        if (type === 'text' || type === 'password' || type === 'number') {
            const divClassName = this.props.divClassName ? this.props.divClassName : '';
           
            return (
                <Fragment>
                    <div className={'col mb-1 ' + divClassName + ' ' + colSize} >
                        {hasLabel && <label className={labelClass || ''}>{label}</label>}
                        {prefixIcon && <i class="tiny material-icons prefix customIcon">
                            <img alt='' class="imageStyles" src={prefixIcon} />
                        </i>
                        }
                        <input
                            id={htmlFor}
                            max={max || null}
                            min={min || null}
                            maxLength={maxLength || null}
                            minLength={minLength || null}
                            name={name || null}
                            placeholder={placeholder || null}
                            required={required || null}
                            step={step || null}
                            autocomplete = {autocomplete || null}
                            type={(isVisable ? 'text' : type) || 'text'}
                            className={"browser-default " + inputClass || "browser-default"}
                            onChange={type==='number' ? this.onValueChangeLength: onValueChange || null}
                            onKeypress={onValueKeypress || null}
                            onKeyDown ={type==='number' ? this.onNumericKeypress : null || null}
                            onBlur={onValueBlur || null}
                            disabled={disabled || null}
                            onInput={onValueInput || null}
                            defaultValue={defaultValue || null}
                            readOnly={readOnly || null}
                            ref={refProps || null}
                        />
                        {type === 'password' &&
                            <i className="tiny material-icons passwordIcon" onClick={showPasswordToggle}>
                                <img alt='' src={isVisable ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAetJREFUSInt1M2LzlEUB/DPzDNlM+P9ZUzYeKnZaKQkhlIsyUYjfwELC4OxNMnGRhY2UrZiJopQlgqThZfUaKKJEY0SSooZZizueTx3fp7HjKnZyKlbv3vO9/s953fuvYf/NsO2YCbFV2MEPVhWC1Q3iUgzdqEdazA//O8xF62x78Dlv6muFZfwHeOTrAeon6pwA7oxWhAZxD4sxfFCbEvG70Cplvhs3A7SC/TG9wAWYiPOR7Ky+NWMvz18N9BUFG9CXwAuohH3Y78D26r81ah00LlGT8Tu5UnqcT0CZ1X6+TVWCbf83vszmfieTOtcxG8G15FwXDHxsH7gG3biXUH8k8obaMSrjFfCtcAdhs94gzmFtj2rUnV5Hc1w3egvcOdhGB/heVTaVgCdqCE+iFmBacGXSJLbeumM+kkHOBbExYUq3lZJ0JFhLmCo8PfNeCm1eGvZ2RXkJwEo2zoT+9+n8vrbpNauzfAteBrYzvyX6nAqAkPYFP4SHmcJNmec3ViU7dvxOnAnVRlDdTgkjYcx6body8R7i4SwFYEdk/p+sAbul23AIxP7PoKVEW+QXm2n9D7K8+qhdLhTspLKqBjH6Sx2oJD8DvaqMfD+NK6HsUS6y6vwIfxdUcAA7kqXYFq2XLqG+6cr8G/YT2VnofdMiQtDAAAAAElFTkSuQmCC" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCAYSNTQeZEUpAAAA6klEQVQ4y+XSMWoCARCF4U9IIZhoZxGbXMBziLDkANEjbG0TUqQQw/Y29jmCJ7AI2FhsLqBYCFYpYhWcNMZsghghpTPd8Abmf284wyodmNU0NZHLvR1fbxiZi0LPjTQOi6v6NsKHMJHJTIStsNFX/S3vWgszLS23+2liZWAmrHWL8p6w0NkRlaRe5VJliaWajoXQ+5JnwlQdN67B/Y4gxUQbdVMhg6EwVgFPHvHi2VoIOTIPoGIsDC9+kLy7wqW742Z+n9Q2Qbo39eBJReiapURZKj8GXbR1YCX529ZicNvTgjv5Nf75fGdSn/ZoeJjRuTkYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA2VDE4OjUzOjUyKzAyOjAwsRD/MgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wNlQxODo1Mzo1MiswMjowMMBNR44AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"} />
                            </i>
                        }
                        {errorMsg && <span className="helper-text" data-error={errorMsg}></span>}
                    </div>
                </Fragment>

            );
        }

        if (type === 'textarea') {
            const divClassName = this.props.divClassName ? this.props.divClassName : 'input-field';
            return (
                <Fragment>
                    <div className={'col mb-1 ' + divClassName + ' ' + colSize} >
                        {hasLabel && <label>{label}</label>}

                        <textarea
                            id={htmlFor}
                            name={name || null}
                            placeholder={placeholder || null}
                            required={required || null}
                            maxLength={maxLength || null}
                            minLength={minLength || null}
                            type='textarea'
                            className={"browser-default " + inputClass || "browser-default"}
                            onChange={onValueChange || null}
                            onKeyPress={onValueKeypress || null}
                            onBlur={onValueBlur || null}
                            disabled={disabled || null}
                            onInput={onValueInput || null}
                            readOnly={readOnly || null}
                            defaultValue={defaultValue || null}
                            ref={ref || null}
                            value={defaultValue || null}
                        />
                    </div>
                </Fragment>

            );
        }
        if (type === 'select') {            
            return (
                <Fragment>
                    <div className={divClassName + ' ' + colSize}>
                        {
                            hasLabel && <label className={'customLabel' + ' ' + labelClass}>{label}</label>
                        }
                        <select className="browser-default customInputs" id={id} name={name} onChange={onSelectChange} disabled={disabled} ref={ref || null}>
                            {/* {!defaultValue || defaultValue === undefined ? <option value="" default="true" selected >Select</option> : null} */}
                            <option value="" default="true" selected >Select</option>
                            {optionsList && optionsList.map((dropdown, index) =>
                                <option
                                    id={dropdown[optionValue]}
                                    key={index}
                                    value={dropdown[optionValue]}
                                    selected={dropdown[optionValue] === defaultValue ? true : false}
                                >{dropdown[optionName]}
                                </option>
                            )}
                        </select>
                    </div>

                </Fragment>
            );
        }

        if (type === 'selectOptionGroup') {
            return (
                <Fragment>
                    <div className={'col mb-1 ' + divClassName + ' ' + colSize} >
                        {
                            hasLabel && <label className="customLabel">{label}</label>
                        }
                        <select value={defaultValue} className="browser-default customInputs"
                            onChange={onSelectGroupChange} disabled={disabled} ref={ref || null}
                        >
                            {!defaultValue ? <option disabled={disabled}>Select</option> : null}
                            {
                                optionGroups.map((optGrop, index) => {
                                    return (
                                        <optgroup label={optGrop[optionGroupLabelKey]} key={index}>
                                            {optGrop[subOption].map((option, i) =>
                                                <option key={i} value={option[optionKeyValue]}>{option[optionKeyValue]}</option>
                                            )}
                                        </optgroup>
                                    );
                                }

                                )
                            }
                        </select>
                    </div>
                </Fragment>
            );
        }

        if (type === 'checkbox') {
            return (
                <Fragment>

                    <div className={'col mb-1' + divClassName + ' ' + colSize}>
                        {
                            hasLabel && <label className={"customLabel" + labelClass}>{label}</label>
                        }
                        {checkBoxArray.map(checkbox => {
                            return (
                                <label key={checkbox[value]}>
                                    <input
                                        type="checkbox"
                                        checked={defaultValue === checkbox[value] || null}
                                        disabled={checkbox[disabled]}
                                        value={checkbox[value]}
                                        name={checkbox[value]}
                                        className="filled-in"
                                        onChange={onCheckboxChange}
                                        ref={ref || null}
                                    />
                                    <span>{checkbox[name]}</span>
                                </label>
                            );
                        })}
                    </div>

                </Fragment>
            );
        }
        if (type === 'switch') {
            return (
                <Fragment>
                    <div className={'switch col' + ' ' + colSize}>
                        {isSwitchLabel && <label className="customLabel">{switchLabel}
                            <input type="checkbox" id={id} name={switchName} onBlur={onChangeToggle} defaultChecked={checkedStatus?true:false} ref={ref}/>
                            <span className="lever"></span>
                        </label>}
                        {!isSwitchLabel &&
                            <label>
                                <input type="checkbox" id={id} name={switchName} onBlur={onChangeToggle} defaultChecked={checkedStatus?true:false} ref={ref} />
                                <span className="lever"></span></label>
                        }

                    </div>
                </Fragment>
            );
        }

        if (type === 'radio') {
            return (
                <Fragment>
                    <div className={'col mb-1' + divClassName + ' ' + colSize}>

                        {
                            hasLabel && <label className={"customLabel" + labelClass}>{label}</label>
                        }
                        {optionsArray.map(radio => {
                            return (

                                <label key={radio[value]}>
                                    <input
                                        type="radio"
                                        checked={defaultValue === radio[value]}
                                        disabled={radio[disabled]}
                                        value={radio[value]}
                                        name={radio[value]}
                                        className="with-gap"
                                        onChange={onRadioChange}
                                        ref={ref || null}
                                    />
                                    <span>{radio[name]}</span>
                                </label>
                            );
                        })}
                    </div>
                </Fragment>
            );
        }

        if (type === 'date') {
            return (

                <Fragment>
                    {isNonEditDateField && dateUtil.formatDate(this.props.data[this.props.dataToRender], '-')}
                    <div className={'col mb-1' + divClassName + ' ' + colSize}>

                        {
                            hasLabel && <label className={"customLabel"+' '+labelClass}>{label}</label>
                        }
                        {!isNonEditDateField &&
                        <div className="datePickerHolder">
                            <DatePicker showYearDropdown yearDropdownItemNumber={15} selected={selectedDate} onBlur={onDatePickBlur} dateFormat={dateFormat} shouldCloseOnSelect={shouldCloseOnSelect} className="browser-default"
                                onChange={onDateChange}
                                disabled = {disabled || null}
                            />
                            
                        </div>
                        //     <input
                        //     id={htmlFor}
                        //     name={name || null}
                        //     placeholder={placeholder || null}
                        //     required={required || null}
                        //     type={'date'}
                        //     className={"browser-default " + inputClass || "browser-default"}
                        //     onChange={onDateChange || null}
                        //     onKeyPress={onValueKeypress || null}
                        //     onBlur={onDatePickBlur || null}
                        //     disabled={disabled || null}
                        //     onInput={onValueInput || null}
                        //     defaultValue={defaultValue || null}
                        //     readOnly={readOnly || null}
                        //     ref={ref || null}
                        // />
                            
                        }
                    </div>
                </Fragment>
            );
        }        

        if (type === 'selectOptionGroupCompanyTaxes') {            
            return (
                <Fragment>
                    <div className={'col mb-1 ' + divClassName + ' ' + colSize} >
                        {
                            hasLabel && <label className={"customLabel" + ' ' + labelClass} >{label}</label>
                        }
                        <select id={htmlFor} name={name} ref={onRef} className="browser-default customInputs"
                            onChange={onSelectGroupChange} disabled={disabled}
                        >
                            {/* {!defaultValue ? <option value="" disabled={disabled}>Select</option> : null} */}
                            <option value="" disabled={disabled}>Select</option>

                            {
                                optionGroups.map((optGrop, index) => {
                                    return (
                                        <optgroup label={optGrop[optionGroupLabelKey]} key={index}>
                                            {optGrop[subOption].map((option, i) =>
                                                <option key={i}
                                                    value={option[optionKeyValue]}
                                                    selected={option[optionKeyName] === defaultValue ? true : false}
                                                >{option[optionKeyName]}</option>
                                            )}
                                        </optgroup>
                                    );
                                }

                                )
                            }
                        </select>
                    </div>
                </Fragment>
            );
        }
       
    }

}
export default CustomInput;

CustomInput.propTypes = {
    inputModal: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputPrefixeIcon: PropTypes.string,
    labelName: PropTypes.string,
    inputName: PropTypes.string,
    disabled: PropTypes.bool,
    colSize: PropTypes.string,
    className: PropTypes.string,
    errorMsg: PropTypes.string,
    onValueChange: PropTypes.func,
    optionsList: PropTypes.array,
    onSelectChange: PropTypes.func,
    optionGroups: PropTypes.array,
    onSelectGroupChange: PropTypes.func,
    onChangeToggle: PropTypes.func,
    radioName: PropTypes.string,
    radioGroup: PropTypes.array,
    onRadioChange: PropTypes.func,
    isNonEditDateField: PropTypes.bool,
    onCheckBoxChange: PropTypes.func,
    optionsArray: PropTypes.array,
    onDateChange: PropTypes.func

};

CustomInput.defaultProps = {
    colSize: 's12',
    inputModal: 'default',
    divClassName: '',
    labelName: '',
    type: 'text',
    disabled: false,
    optionsList: [],
    optionGroups: [],
    radioGroup: [],
    optionsArray: [],
    checkBoxArray: [],
    isNonEditDateField: false,
    labelClass: ''

}; 