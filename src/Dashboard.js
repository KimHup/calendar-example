import React from 'react';
import './App.css';
import CalendarPicker from "./DatePicker";
import Calendar from "./DateRangePicker";

import CardContent from '@material-ui/core/CardContent';
import {Title} from 'react-admin';

export const Dashboard = (props) => (
    <div>
        <Title title="Date Picker" />
        <CardContent>
            <CalendarPicker source="timePeriod" />
            <Calendar source="timePeriod"/>
        </CardContent>
    </div>
);

export default Dashboard;