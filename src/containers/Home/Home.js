import React, { Component } from 'react';
import classes from './Home.module.css';
import Refuel from '../../components/Refuel/Refuel';
import Service from '../../components/Service/Service';

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

    refuel = (event) => {
        event.preventDefault();
        this.props.history.push('/home/refuel');
    }

    service = (event) => {
        event.preventDefault();
        this.props.history.push('/home/service');
    }

    refuelHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    serviceHandler = (event) => {
        event.preventDefault();
    }

    fuelAmountHandler = (event) => {
        this.setState({
            ...this.state,
            fuelAmount: event.target.value
        });
    }

    fuelPriceHandler = (event) => {
        this.setState({
            ...this.state,
            fuelPrice: event.target.value
        });
    }

    refuelDateHandler = (event) => {
        this.setState({
            ...this.state,
            refuelDate: event.target.value
        });
    }

    refuelOdometerHandler = (event) => {
        this.setState({
            ...this.state,
            refuelOdometer: event.target.value
        });
    }

    isfullHandler = () => {
        if (this.state.isfull === true) {
            this.setState({
                ...this.state,
                isfull: false
            });
        } else {
            this.setState({
                ...this.state,
                isfull: true
            });
        }
    }

    render() {
        let page = (<div className={classes.Home}>
            <div>Car info</div>
            <div>Average</div>
            <div>Cost</div>
            <span>
                <button onClick={this.refuel}>Refuel</button>
                <button onClick={this.service}>Service</button>
            </span>
        </div>)
        if (this.props.location.pathname === '/home/service') {
            page = <Service
                serviceHandler={this.serviceHandler} />
        } else if (this.props.location.pathname === '/home/refuel') {
            page = <Refuel
                refuelHandler={this.refuelHandler}
                fuelAmountHandler={this.fuelAmountHandler}
                fuelPriceHandler={this.fuelPriceHandler}
                refuelDateHandler={this.refuelDateHandler}
                refuelOdometerHandler={this.refuelOdometerHandler}
                isfullHandler={this.isfullHandler} />
        }
        return (
            page
        );
    }
}

export default Home;