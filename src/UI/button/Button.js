import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <button className={classes.Button} type={props.type}>{props.label}</button>
    );
}

export default button;