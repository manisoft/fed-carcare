import React from 'react';
import classes from './History.module.css'

const history = (props) => {
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.refuel}>Refuel History</div>
                <div className={classes.litre}>Amount</div>
                <div className={classes.odometer}>Odometer</div>
            </div>
            <div className={classes.history}>
                <div className={classes.refuel}>
                    <span className={classes.amount}>{props.historyDays[0]}</span><span className={classes.unit}> days ago</span>
                </div>
                <div className={classes.litre}>
                    <span className={classes.amount}>{props.historyAmount[0]}</span><span className={classes.unit}> litre</span>
                </div>
                <div className={classes.odometer}>
                    <span className={classes.amount}>{props.historyOdometer[0]}</span><span className={classes.unit}> Km</span>
                </div>
            </div>
            <div className={classes.histories}>
                <div className={classes.refuel}>
                    <span className={classes.amount}>{props.historyDays[1]}</span><span className={classes.unit}> days ago</span>
                </div>
                <div className={classes.litre}>
                    <span className={classes.amount}>{props.historyAmount[1]}</span><span className={classes.unit}> litre</span>
                </div>
                <div className={classes.odometer}>
                    <span className={classes.amount}>{props.historyOdometer[1]}</span><span className={classes.unit}> Km</span>
                </div>
            </div>
            <div className={classes.history}>
                <div className={classes.refuel}>
                    <span className={classes.amount}>{props.historyDays[2]}</span><span className={classes.unit}> days ago</span>
                </div>
                <div className={classes.litre}>
                    <span className={classes.amount}>{props.historyAmount[2]}</span><span className={classes.unit}> litre</span>
                </div>
                <div className={classes.odometer}>
                    <span className={classes.amount}>{props.historyOdometer[2]}</span><span className={classes.unit}> Km</span>
                </div>
            </div>
            <div className={classes.histories}>
                <div className={classes.refuel}>
                    <span className={classes.amount}>{props.historyDays[3]}</span><span className={classes.unit}> days ago</span>
                </div>
                <div className={classes.litre}>
                    <span className={classes.amount}>{props.historyAmount[3]}</span><span className={classes.unit}> litre</span>
                </div>
                <div className={classes.odometer}>
                    <span className={classes.amount}>{props.historyOdometer[3]}</span><span className={classes.unit}> Km</span>
                </div>
            </div>
        </div>
    );
}

export default history;