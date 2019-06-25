import React from 'react';
import './App.css';
import Calendar from "./DateRangePicker"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title} from 'react-admin';

export const Dashboard = (props) => (
    <div>
        <Title title="Date Picker" />
        <CardContent>
            <Calendar/>
        </CardContent>
    </div>
);

export default Dashboard;