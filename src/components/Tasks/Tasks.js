import React from 'react';
import classes from './Tasks.module.css';
import refuel from '../../assets/images/gas.svg';
import oil from '../../assets/images/oil.svg';

const tasks = (props) => {
    return (
        <div className={classes.Tasks}>
            <div className={classes.div_refuelBtn} onClick={props.refuel}>
                <img src={refuel} alt='refuel' className={classes.fuelBtn} />
                <div>Refuel</div>
            </div>
            <div className={classes.div_oilBtn} onClick={props.service}>
                <img src={oil} alt='refuel' className={classes.serviceBtn} />
                <div>Service</div>
            </div>
        </div>
    );
}

export default tasks;