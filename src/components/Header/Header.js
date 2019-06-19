import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.yob}>{props.yob}</div>
            <div className={classes.brand}>{props.name}</div>
            <div className={classes.model}>{props.model}</div>
        </div>
    );
}

export default header;