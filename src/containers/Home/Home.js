import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {

    state = {
        fuelAmount: 0,
        fuelPrice: 0,
        refuelDate: Date,
        isfull: false,
        refuelOdometer: 0,
        servicePrice: 0,
        serviceDate: Date,
        serviceOdometer: 0,
        nextOilReminder: 0,
        serviceCenter: '',
        radiatorService: false,
        engineOilService: false,
        oilFilterService: false,
        airFilterService: false,
        batteryService: false,
        gearboxOilService: false,
        wiperFluidService: false
    }

    refuelHalnder = (event) => {
        event.preventDefault();
        this.props.history.push('/refuel');
    }

    serviceHalnder = (event) => {
        event.preventDefault();
        this.props.history.push('/service');
    }

    render() {
        return (
            <div className={classes.Home}>
                <div>Car info</div>
                <div>Average</div>
                <div>Cost</div>
                <span>
                    <button onClick={this.refuelHalnder}>Refuel</button>
                    <button onClick={this.serviceHalnder}>Service</button>
                </span>
            </div>
        );
    }
}

export default Home;