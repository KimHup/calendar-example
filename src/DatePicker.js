import React from 'react';
import get from 'lodash/get';
import {Datagrid, List, TextField} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Calendar from "./DateRangePicker";

export var CalendarPicker = ({
       className,
       locales,
       options,
       record,
       showTime = false,
       source,
       ...rest
   }) => {
    if (!record) {
        return null;
    }
    const value = get(record, source);
    const hasValue = typeof value === 'object';
    if (value == null || !hasValue) {
        return null;
    }
    const startValue = value.start.value;
    const startDate = startValue instanceof Date ? startValue : new Date(startValue);

    const endValue = value.end.value;
    const endDate = endValue instanceof Date ? endValue : new Date(endValue);
    return (
            <DateRangePicker
                startDateId="startDate2"
                endDateId="endDate2"
                startDate={startDate}
                endDate={endDate}
                onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
            />
    );
};

export default CalendarPicker;

