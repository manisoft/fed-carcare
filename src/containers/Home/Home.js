import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {

    state = {
        service: {

        },
        refuel: {

        }
    }

    refuelHalnder = (event) => {
        event.preventDefault();
    }

    serviceHalnder = (event) => {
        event.preventDefault();
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