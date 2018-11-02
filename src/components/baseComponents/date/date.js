import React, { Component,Fragment } from 'react';
import dateUtil from '../../../utils/dateUtil';

class DateComponent extends Component {     

    render() {
        return (
            <Fragment>{dateUtil.formatDate(this.props.data[this.props.dataToRender], '-')}</Fragment>
        );
    }
}

export default DateComponent;