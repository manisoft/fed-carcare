import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {

    state = {
        service: {

        },
        refuel: {

        }
    }

    render() {
        return (
            <div className={classes.Home}>
                <p>Home Page</p>
            </div>
        );
    }
}

export default Home;