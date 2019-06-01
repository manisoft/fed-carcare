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
                <Textbox
                    type='email'
                    placeholder='E-mail Address'
                    onChange={props.emailHandler} />
                <Textbox
                    type='password'
                    placeholder='Password'
                    onChange={props.passwordHandler} />
                <Textbox
                    type='password'
                    placeholder='Confirm Password'
                    onChange={props.passwordcHandler} />
                <Button type='submit' label={'Sign Up'} />
            </form>
            <Link className={classes.link} to='/signin'>Already have an account Sign-In here</Link>
        </div>
    );
}

export default signup;

