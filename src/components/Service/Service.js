import React from 'react';
import classes from './Service.module.css';
import { withRouter } from 'react-router-dom';

const service = (props) => {
    return (
        <div className={classes.Service}>
            <button onClick={props.history.goBack}>back</button>
            service page
        </div>
    );
}

export default withRouter(service);