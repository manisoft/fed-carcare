import React from 'react';
import classes from './Cardata.module.css';
import Button from '../../UI/button/Button';
import Textbox from '../../UI/textbox/Textbox';

const cardata = (props) => {
    return (
        <div className={classes.Cardata}>
            <img src="https://via.placeholder.com/150x150" alt="CarCare" />
            <form className={classes.form} onSubmit={props.carDataHandler}>
                <Textbox type='text' placeholder='Car Name' />
                <Textbox type='text' placeholder='Car Model' />
                <Textbox type='number' placeholder='Year of Build' />
                <Textbox type='number' placeholder='Gasoline Capacity' />
                <Textbox type='number' placeholder='Odometer' />
                <Button type='submit' label={'Start Engine!'} />
            </form>
        </div>
    );
}

export default cardata;