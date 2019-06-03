import React, { Component } from 'react';
import classes from './Home.module.css';
import Refuel from '../../components/Refuel/Refuel';
import Service from '../../components/Service/Service';
import axios from 'axios';

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
        wiperFluidService: false,
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
        const config = {
            headers: { 'Authorization': 'Bearer ' + this.props.token }
        }
        const refuel = {
            gasoline: this.state.fuelAmount,
            price: this.state.fuelPrice,
            odometer: this.state.refuelOdometer,
            date: this.state.refuelDate,
            isFull: this.state.isfull
        }
        axios.post('https://carcarepwa.herokuapp.com/refuel', refuel, config)
            .then(res => {
                this.props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
            })
    }

    serviceHandler = (event) => {
        event.preventDefault();
        const config = {
            headers: { 'Authorization': 'Bearer ' + this.props.token }
        }
        const service = {
            engineOil: this.state.engineOilService,
            oilFilter: this.state.oilFilterService,
            airFilter: this.state.airFilterService,
            gearboxOil: this.state.gearboxOilService,
            wiperFluid: this.state.wiperFluidService,
            battery: this.state.batteryService,
            radiator: this.state.radiatorService,
            serviceOdometer: this.state.serviceOdometer,
            price: this.state.servicePrice,
            date: this.state.serviceDate,
            nextOilReminder: this.state.nextOilReminder,
            seviceCenter: this.state.serviceCenter
        }
        axios.post('https://carcarepwa.herokuapp.com/service', service, config)
            .then(res => {
                this.props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
            })
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

    engineOilServiceHandler = () => {
        if (this.state.engineOilService === true) {
            this.setState({
                ...this.state,
                engineOilService: false
            });
        } else {
            this.setState({
                ...this.state,
                engineOilService: true
            });
        }
    }
    radiatorServiceHandler = () => {
        if (this.state.radiatorService === true) {
            this.setState({
                ...this.state,
                radiatorService: false
            });
        } else {
            this.setState({
                ...this.state,
                radiatorService: true
            });
        }
    }
    oilFilterServiceHandler = () => {
        if (this.state.oilFilterService === true) {
            this.setState({
                ...this.state,
                oilFilterService: false
            });
        } else {
            this.setState({
                ...this.state,
                oilFilterService: true
            });
        }
    }
    airFilterServiceHandler = () => {
        if (this.state.airFilterService === true) {
            this.setState({
                ...this.state,
                airFilterService: false
            });
        } else {
            this.setState({
                ...this.state,
                airFilterService: true
            });
        }
    }
    batteryServiceHandler = () => {
        if (this.state.batteryService === true) {
            this.setState({
                ...this.state,
                batteryService: false
            });
        } else {
            this.setState({
                ...this.state,
                batteryService: true
            });
        }
    }
    gearboxOilServiceHandler = () => {
        if (this.state.gearboxOilService === true) {
            this.setState({
                ...this.state,
                gearboxOilService: false
            });
        } else {
            this.setState({
                ...this.state,
                gearboxOilService: true
            });
        }
    }
    wiperFluidServiceHandler = () => {
        if (this.state.wiperFluidService === true) {
            this.setState({
                ...this.state,
                wiperFluidService: false
            });
        } else {
            this.setState({
                ...this.state,
                wiperFluidService: true
            });
        }
    }

    serviceCenterHandler = (event) => {
        this.setState({
            ...this.state,
            serviceCenter: event.target.value
        })
    }

    servicePriceHandler = (event) => {
        this.setState({
            ...this.status,
            servicePrice: event.target.value
        })
    }

    serviceOdometerHandler = (event) => {
        this.setState({
            ...this.status,
            serviceOdometer: event.target.value
        })
    }

    nextOilReminderHandler = (event) => {
        this.setState({
            ...this.status,
            nextOilReminder: event.target.value
        })
    }

    serviceDateHandler = (event) => {
        this.setState({
            ...this.state,
            serviceDate: event.target.value
        });
    }

    render() {
        const carname = this.props.name;
        const carmodel = this.props.model;
        const yearOfBuild = this.props.yearOfBuild;
        let page = (<div className={classes.Home}>
            <div>
                <span>{carname} - {carmodel} - {yearOfBuild}</span>
            </div>
            <div>Average Fuel Consumption per 100 Km</div>
            <div>Average Cost Per Month (Fuel & Service)</div>
            <span>
                <button onClick={this.refuel}>Refuel</button>
                <button onClick={this.service}>Service</button>
            </span>
        </div>)
        if (this.props.location.pathname === '/home/service') {
            page = <Service
                serviceHandler={this.serviceHandler}
                engineOilServiceHandler={this.engineOilServiceHandler}
                radiatorServiceHandler={this.radiatorServiceHandler}
                oilFilterServiceHandler={this.oilFilterServiceHandler}
                airFilterServiceHandler={this.airFilterServiceHandler}
                batteryServiceHandler={this.batteryServiceHandler}
                gearboxOilServiceHandler={this.gearboxOilServiceHandler}
                wiperFluidServiceHandler={this.wiperFluidServiceHandler}
                serviceCenterHandler={this.serviceCenterHandler}
                servicePriceHandler={this.servicePriceHandler}
                serviceOdometerHandler={this.serviceOdometerHandler}
                nextOilReminderHandler={this.nextOilReminderHandler}
                serviceDateHandler={this.serviceDateHandler}
            />
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