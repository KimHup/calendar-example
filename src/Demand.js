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
import DateRangeField from './DateRangeField';

export const DemandList = props => (
    <List {...props}>
        <Datagrid >
            <DateRangeField source="timePeriod" />

        </Datagrid>
    </List>
);


export const DemandShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <DateRangeField source="timePeriod" />
        </SimpleShowLayout>
    </Show>
);