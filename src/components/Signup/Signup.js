import React from 'react';
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';
import Textbox from '../../UI/textbox/Textbox';

const signup = (props) => {
    return (
        <div className={classes.Signup}>
            <img src="https://via.placeholder.com/150x150" alt="CarCare" />
            <form className={classes.form} onSubmit={props.signUpHandler}>
                <Textbox type='text' placeholder='Car Name'/>
                <Textbox type='text' placeholder='Car Model'/>
                <Textbox type='number' placeholder='Year of Build'/>
                <Textbox type='number' placeholder='Gasoline Capacity'/>
                <Textbox type='number' placeholder='Odometer'/>
                <Textbox type='email' placeholder='E-mail Address'/>
                <Textbox type='password' placeholder='Password'/>
                <Textbox type='password' placeholder='Confirm Password'/>
                <Button type='submit' label={'Sign Up'}/>
            </form>
            <p>Already have an account <Link to='/signin'>Sign-In</Link> here</p>
        </div>
    );
}

export default signup;

