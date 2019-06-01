import React from 'react';
import classes from './Textbox.module.css';

const textbox = (props) => {
    return (
        <input
            className={classes.Textbox}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            required
        >{props.label}</input>
    );
}

export default textbox;