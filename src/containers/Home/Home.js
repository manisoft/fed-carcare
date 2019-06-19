import React, { Component } from 'react';
import Refuel from '../../components/Refuel/Refuel';
import Service from '../../components/Service/Service';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Average from '../../components/Average/Average';
import History from '../../components/History/History';
import LastCheck from '../../components/LastCheck/LastCheck';
import Tasks from '../../components/Tasks/Tasks';

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
        avgFuel: 0,
        avgCost: 0,
        historyDays: [0, 0, 0, 0],
        historyAmount: [0, 0, 0, 0],
        historyOdometer: [0, 0, 0, 0],
        lAirFilter: [0, 0],
        lOilFilter: [0, 0],
        lBattery: [0, 0],
        lRadiator: [0, 0],
        lGearbox: [0, 0],
        lWiper: [0, 0],
        lGasoline: [0, 0],
        lOil: [0, 0]
    }

    componentDidMount() {
        const config = {
            headers: { 'Authorization': 'Bearer ' + this.props.token }
        }
        axios.get('https://carcarepwa.herokuapp.com/refuel/query/userId', config)
            .then(res => {
                this.historyDaysCalculator(res.data);
                this.historyAmountCalculator(res.data);
                this.historyOdometerCalculator(res.data);
                if (res.data.length >= 2) {
                    this.avgFuelCalculator(res.data);
                    this.avgCostCalculator(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
        axios.get('https://carcarepwa.herokuapp.com/service/query/userId', config)
            .then(res => {
                res.data.forEach(el => {
                    if (el.airFilter) {
                        this.lAirFilterCounter(res.data);
                    }
                    if (el.oilFilter) {
                        this.lOilFilterCounter(res.data);
                    }
                    if (el.battery) {
                        this.lBatteryCounter(res.data);
                    }
                    if (el.radiator) {
                        this.lRadiatorCounter(res.data);
                    }
                    if (el.gearboxOil) {
                        this.lGearboxCounter(res.data);
                    }
                    if (el.wiperFluid) {
                        this.lWiperCounter(res.data);
                    }
                    if (el.engineOil) {
                        this.lOilCounter(res.data);
                    }
                    if (this.state.historyAmount[0] > 0) {
                        this.lGasolineCounter();
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    getLatestRefuel = () => {
        const config = {
            headers: { 'Authorization': 'Bearer ' + this.props.token }
        }
        axios.get('https://carcarepwa.herokuapp.com/refuel/query/userId', config)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
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
                this.getLatestRefuel();
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

    avgFuelCalculator = (dataArr) => {
        if (dataArr.length > 0) {
            const average = [];
            for (let i = 0; i < dataArr.length - 1; i++) {
                average.push((dataArr[i + 1].odometer - dataArr[i].odometer) / (dataArr[i].gasoline));
            }
            const fuelAvg = this.arrAvgCalculator(average).toFixed(2);
            this.setState({
                ...this.state,
                avgFuel: fuelAvg
            });
        }
    }

    arrAvgCalculator = arr => arr.reduce((a, b) => a + b, 0) / arr.length

    avgCostCalculator = (data) => {
        if (data.length > 0) {
            const position = data.length - 1;
            var fd = new Date(data[0].date);
            var sd = new Date(data[position].date);
            const days = this.dayDiffCalculator(fd, sd);
            let totalCost = 0;
            const priceArr = [];
            data.forEach(el => {
                priceArr.push(el.price);
            });

            priceArr.forEach(el => {
                totalCost = totalCost + el;
            })
            const cost = (totalCost * 30 / days).toFixed(0);
            this.setState({
                ...this.state,
                avgCost: cost
            });
        }
    }

    dayDiffCalculator = (firstDate, secondDate) => {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    }

    historyDaysCalculator = (data) => {
        const days = [];
        for (let i = 0; i < data.length; i++) {
            days.push(this.dayDiffCalculator(new Date(data[i].date), new Date()));
        }
        const hisday = days.reverse().slice(0, 4);
        this.setState({
            ...this.props,
            historyDays: hisday
        })
    }

    historyAmountCalculator = (data) => {
        const amount = [];
        for (let i = 0; i < data.length; i++) {
            amount.push(data[i].gasoline);
        }
        const hisAmount = amount.reverse().slice(0, 4);
        this.setState({
            ...this.props,
            historyAmount: hisAmount
        })
    }

    historyOdometerCalculator = (data) => {
        const odo = [];
        for (let i = 0; i < data.length; i++) {
            odo.push(data[i].odometer);
        }
        const hisOdometer = odo.reverse().slice(0, 4);
        this.setState({
            ...this.props,
            historyOdometer: hisOdometer
        })
    }

    lAirFilterCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.airFilter === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lAirFilter: [lmonths, ldays]
        });
    }

    lOilFilterCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.oilFilter === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lOilFilter: [lmonths, ldays]
        });
    }

    lBatteryCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.battery === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lBattery: [lmonths, ldays]
        });
    }

    lRadiatorCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.radiator === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lRadiator: [lmonths, ldays]
        });
    }

    lGearboxCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.gearboxOil === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lGearbox: [lmonths, ldays]
        });
    }

    lWiperCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.wiperFluid === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lWiper: [lmonths, ldays]
        });
    }

    lGasolineCounter = () => {
        let days = this.state.historyDays[0];
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lGasoline: [lmonths, ldays]
        });
    }

    lOilCounter = (data) => {
        const dateArr = [];
        data.forEach(el => {
            if (el.engineOil === true) {
                dateArr.push(el.date);
            }
        });
        const sorted = dateArr.sort(function (a, b) {
            return new Date(b) - new Date(a);
        });
        let days = this.dayDiffCalculator(new Date(sorted[0]), new Date());
        const lmonths = Math.floor(days / 30);
        const ldays = days % 30;
        this.setState({
            ...this.state,
            lOil: [lmonths, ldays]
        });
    }

    render() {
        let page = (
            <div>
                <Header
                    model={this.props.model}
                    name={this.props.name}
                    yob={this.props.yearOfBuild}
                />
                <Average
                    avgFuel={this.state.avgFuel}
                    avgCost={this.state.avgCost}
                />
                <History
                    historyDays={this.state.historyDays}
                    historyAmount={this.state.historyAmount}
                    historyOdometer={this.state.historyOdometer}
                />
                <LastCheck
                    lAirFilter={this.state.lAirFilter}
                    lOilFilter={this.state.lOilFilter}
                    lBattery={this.state.lBattery}
                    lRadiator={this.state.lRadiator}
                    lGearbox={this.state.lGearbox}
                    lWiper={this.state.lWiper}
                    lGasoline={this.state.lGasoline}
                    lOil={this.state.lOil}
                />
                <Tasks
                    refuel={this.refuel}
                    service={this.service}
                />
            </div >
        )
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