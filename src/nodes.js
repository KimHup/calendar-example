import React from 'react';
import get from 'lodash/get';
import {Datagrid, List, TextField} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import {Calendar} from "./DateRangePicker";

const toLocaleStringSupportsLocales = (() => {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    try {
        new Date().toLocaleString('i');
    } catch (error) {
        return error instanceof RangeError;
    }
    return false;
})();

export const DateRangeField = ({
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
    const startDate =
        startValue instanceof Date ? startValue : new Date(startValue);
    const startDateString = showTime
        ? toLocaleStringSupportsLocales
            ? startDate.toLocaleString(locales, options)
            : startDate.toLocaleString()
        : toLocaleStringSupportsLocales
            ? startDate.toLocaleDateString(locales, options)
            : startDate.toLocaleDateString();
    const endValue = value.end.value;
    const endDate = endValue instanceof Date ? endValue : new Date(endValue);
    const endDateString = showTime
        ? toLocaleStringSupportsLocales
            ? endDate.toLocaleString(locales, options)
            : endDate.toLocaleString()
        : toLocaleStringSupportsLocales
            ? endDate.toLocaleDateString(locales, options)
            : endDate.toLocaleDateString();

    return (
        <div>
            {startDateString} {value.start.inclusive ? 'inclusive' : 'exclusive'} to{' '}
            {endDateString} {value.end.inclusive ? 'inclusive' : 'exclusive'}
            <Calendar label="A Date" start={startDate} end={endDate} />
        </div>
    );
};

export const NodeList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <DateRangeField source="timePeriod" />
        </Datagrid>
    </List>
);