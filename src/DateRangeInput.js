import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { addField, FieldTitle } from 'ra-core';
import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

/**
 * Convert Date object to String
 *
 * @param {Date} v value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */
const dateFormatter = v => {
    if (!(v instanceof Date) || isNaN(v.getDate())) return;
    const pad = '00';
    const yyyy = v.getFullYear().toString();
    const MM = (v.getMonth() + 1).toString();
    const dd = v.getDate().toString();
    return `${yyyy}-${(pad + MM).slice(-2)}-${(pad + dd).slice(-2)}`;
};

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const sanitizeValue = value => {
    // null, undefined and empty string values should not go through dateFormatter
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }

    if (value instanceof Date) {
        return dateFormatter(value);
    }

    // valid dates should not be converted
    if (dateRegex.test(value)) {
        return value;
    }

    return dateFormatter(new Date(value));
};

export class DateRangeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }
    componentDidMount() {
        const { start, end } = this.props.input.value;
        this.setState({
            startDate: moment(start),
            endDate: moment(end)
        })
    }
    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
        this.props.input.onChange({
            start: {
                value: startDate,
                inclusive: true,
            },
            end: {
                value: endDate,
                inclusive: true },
        });

    }
    render() {
        console.log(this.props.input.value)
        return (

            <div className="Calendar">
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    isOutsideRange={() => false}
                    onDatesChange={({ startDate, endDate }) => { this.onDatesChange({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                    small={true}
                    appendToBody={true}
                />
            </div>
        );
    }
}

DateRangeInput.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
};

DateRangeInput.defaultProps = {
    options: {},
};

export default addField(DateRangeInput);