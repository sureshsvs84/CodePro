import React, { Component, Fragment } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// ToDo - Rich Editor Css
import './quill.css';
import { modalMessageConstant, modalTitleConstant } from '../../../constants/modalConstants';
import CustomModal from '../customModal';

class QuillComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { text: props.text };
        this.handleChange = this.handleChange.bind(this);
        this.options = [];
        this.placeholdersArray = [];
        this.state = {
            isOpen: false
        };
        this.confirmationModalData = {
            title: "",
            message: "",
            type: "",
            modalClassName: "",
            buttons: []
        };
    }

    modules() {
        return {
            toolbar: {
                container: [
                    [
                        {
                            'header': [
                                1,
                                2,
                                3,
                                false
                            ]
                        }
                    ],
                    [
                        'italic',
                        'underline'
                    ],
                    [
                        { 'list': 'ordered' }, { 'list': 'bullet' }
                    ],
                    [
                        'link'
                    ],
                    [
                        { 'editorPlaceholder': this.options }
                    ],
                ],
                handlers: {
                    "editorPlaceholder": function (value) {
                        if (value) {
                            const cursorPosition = this.quill.getSelection().index;
                            this.quill.insertText(cursorPosition, '@' + value + '@ ');
                            this.quill.setSelection(cursorPosition + (value.length + 3));
                        }
                    }
                }
            }
        };
    }

    formats() {
        return [
            'header', 'italic', 'underline', 'blockquote',
            'list', 'bullet', 'indent',
            'link'
        ];
    }

    handleChange(e) {
        this.props.actions.UpdateCompanyEmailTemplate({ "emailType": this.props.templateValue, "template": e });
        if (e.length > 4000) {
            const confirmationObject = {
                title: modalTitleConstant.CONFIRMATION,
                message: modalMessageConstant.EMAIL_TEMPLATE_TEXT_LIMIT,
                type: "confirm",
                modalClassName: "warningToast",
                buttons: [
                    {
                        buttonName: "Close",
                        onClickHandler: this.confirmationRejectHandler,
                        className: "modal-close m-1 btn-small"
                    }
                ]
            };
            this.props.actions.DisplayModal(confirmationObject);
        }
    }

    confirmationRejectHandler = () => {
        this.props.actions.HideModal();
    }

    render() {
        const placeholders = this.props.editorPlaceholders;
        const ddlList = this.props.editorPlaceholders;
        this.options = [];
        for (const item in placeholders) {
            this.options.push(
                placeholders[item].name
            );
        }
        // Code to set the options and label for custom select box in the rich-editor #issue with the plugin
        // TODO - Remove this code once the issue is resolved with the plugin
        setTimeout(() => {
            // Setting the label for select box            
            const selectBoxes = document.getElementsByClassName('ql-picker-label');
            if (selectBoxes[1]) {
                let label = selectBoxes[1].innerHTML;
                if (!label.includes("Select")) {
                    label = 'Select' + label;
                    document.getElementsByClassName('ql-picker-label')[1].innerHTML = label;
                }
            }
            // Setting the labels for options
            const pickerItems = document.getElementsByClassName('ql-picker-item');
            for (const item in pickerItems) {
                if (item > 3) {                    
                    const dataValue = pickerItems[item].getAttribute('data-value');
                    const filterValue = this.props.editorPlaceholders.filter(x => x.name == dataValue)[0];
                    if (filterValue != null) {
                        pickerItems[item].setAttribute('data-value', filterValue.name);
                        pickerItems[item].innerHTML = filterValue.displayName;
                    }
                }
            }
        }, 0);
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        return (
            <Fragment>
                <CustomModal modalData={modelData} />
                <ReactQuill
                    theme='snow'
                    value={this.props.templateValue ? this.props.text ? this.props.text : '' : ''}
                    onChange={this.handleChange}
                    modules={this.modules()}
                    formats={this.formats()}
                />
            </Fragment>
        );
    }
}

export default QuillComponent;