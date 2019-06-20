import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { addField, FieldTitle } from 'ra-core';


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
    componentDidMount() {
        const { start, end } = this.props.input.value;
        this.props.input.onChange({
            start: { value: start && start.value, inclusive: true },
            end: { value: end && end.value, inclusive: true },
        });
    }
    onChange = event => {
        this.props.input.onChange(event.target.value);
    };
    onChangeStart = event => {
        const { start, end } = this.props.input.value;
        this.props.input.onChange({
            start: {
                value: event && event.target && event.target.value,
                inclusive: true,
            },
            end: { value: end && end.value, inclusive: true },
        });
    };
    onChangeEnd = event => {
        const { start, end } = this.props.input.value;
        this.props.input.onChange({
            start: { value: start && start.value, inclusive: true },
            end: {
                value: event && event.target && event.target.value,
                inclusive: true,
            },
        });
    };

    render() {
        const {
            className,
            meta,
            input,
            isRequired,
            label,
            options,
            source,
            resource,
            ...rest
        } = this.props;
        if (typeof meta === 'undefined') {
            throw new Error(
                "The DateRangeInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details.",
            );
        }
        const { touched, error } = meta;
        const hasValue = typeof input.value === 'object';
        const end = hasValue ? sanitizeValue(input.value.end.value) : '';
        const start = hasValue ? sanitizeValue(input.value.start.value) : '';

        return (
            <Fragment>
                <TextField
                    {...input}
                    className={className}
                    type="date"
                    margin="normal"
                    id={`${resource}_${source}_date_input`}
                    error={!!(touched && error)}
                    helperText={touched && error}
                    label={
                        <FieldTitle
                            label={label + ' Start'}
                            source={source}
                            resource={resource}
                            isRequired={isRequired}
                        />
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...options}

                    value={start}
                    onChange={this.onChangeStart}
                    onBlur={this.onChangeStart}
                />
                <TextField
                    {...input}
                    className={className}
                    type="date"
                    margin="normal"
                    id={`${resource}_${source}_date_input`}
                    error={!!(touched && error)}
                    helperText={touched && error}
                    label={
                        <FieldTitle
                            label={label + ' End'}
                            source={source}
                            resource={resource}
                            isRequired={isRequired}
                        />
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...options}

                    value={end}
                    onChange={this.onChangeEnd}
                    onBlur={this.onChangeEnd}
                />
            </Fragment>
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
