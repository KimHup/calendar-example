import React from 'react';
import get from 'lodash/get';
import pure from 'recompose/pure';
import Typography from '@material-ui/core/Typography';


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
        <Typography
            component="span"
            variant="body1"
            className={className}
            {...(rest)}
        >
            {startDateString} {value.start.inclusive ? 'inclusive' : 'exclusive'} to{' '}
            {endDateString} {value.end.inclusive ? 'inclusive' : 'exclusive'}
        </Typography>
    );
};

const EnhancedDateRangeField = pure(DateRangeField);

EnhancedDateRangeField.defaultProps = {
    addLabel: true,
};

EnhancedDateRangeField.displayName = 'EnhancedDateRangeField';

export default EnhancedDateRangeField;