import React from 'react';
import classes from './Textbox.module.css';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const textbox = (props) => {
    return (
        <TextField
            className={classes.Textbox}
            type={props.type}
            min={props.min}
            max={props.max}
            maxLength={props.maxLength}
            step={props.step}
            placeholder={props.placeholder}
            onChange={props.onChange}
            required
        >{props.label}</TextField>
    );
}

export default textbox;