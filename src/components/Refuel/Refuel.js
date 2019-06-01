import React from 'react';
import classes from './Refuel.module.css';
import { withRouter } from 'react-router-dom';


const refuel = (props) => {
    return (
        <div className={classes.Refuel}>
            <button onClick={props.history.goBack}>back</button>
            refuel page
        </div>
    );
}

export default withRouter(refuel);