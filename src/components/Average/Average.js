import React from 'react';
import classes from './Average.module.css';

const average = (props) => {
    return (
        <div>
            <div className={classes.fuel}>Average Fuel Consumption</div>
            <div>
                <div className={classes.litre}>{props.avgFuel}</div>
                <div className={classes.unit}>litre/100 km</div>
            </div>
            <div className={classes.fuel}>Average Maintenance Cost</div>
            <div className={classes.avg}>
                <div className={classes.avg_price_month}>{props.avgCost}</div>
                <div className={classes.avg_price_day}>{(props.avgCost / 30).toFixed(0)}</div>
            </div>
            <div className={classes.avgunit}>
                <div className={classes.unit_month}>Unit/Month</div>
                <div className={classes.unit_day}>Unit/Day</div>
            </div>
        </div>
    );
}

export default average;