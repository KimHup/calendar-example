import React from 'react';
import {
    Create,
    Datagrid,
    Edit,
    List,
    Show,
    SimpleForm,
    SimpleShowLayout,
} from 'react-admin';
import { Field } from 'redux-form';
import DateRangeInput from './DateRangeInput';
import DateRangeField from './DateRangeField';

export const NodeList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <DateRangeField source="timePeriod" />
        </Datagrid>
    </List>
);
export const NodeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <Field name="timePeriod" component={DateRangeInput} label="Time Period" />
        </SimpleForm>
    </Edit>
);
export const NodeCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <Field name="timePeriod" component={DateRangeInput} label="Time Period" />
        </SimpleForm>
    </Create>
);
export const NodeShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <DateRangeField source="timePeriod" />
        </SimpleShowLayout>
    </Show>
);