import React, { Component } from 'react';
import './App.css';
import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import get from "lodash/get";



export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }
    componentDidMount() {
        if (!this.props){
        fetch('https://my-json-server.typicode.com/msand/demo/nodes')
            .then(response => response.json())
            .then((jsonData) => {

                this.setState({
                    startDate: moment(JSON.parse(JSON.stringify(jsonData[0])).timePeriod.start.value),
                    endDate: moment(JSON.parse(JSON.stringify(jsonData[0])).timePeriod.end.value)
                })
            })
            .catch((error) => {
                console.error(error)
            });
        }
        else {
            this.setState({
                startDate: moment(this.props.start),
                endDate: moment(this.props.end)
            })
        }
   }

    render() {
        return (

            <div className="Calendar">
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                    small={true}
                    appendToBody={true}
                />
            </div>
        );
    }
}

export default Calendar;