import React from 'react';
import classes from './Signin.module.css';
import Textbox from '../../UI/textbox/Textbox';
import Button from '../../UI/button/Button';
import { Link } from 'react-router-dom';

const signin = (props) => {
    return (
        <div className={classes.Signin}>
            <img src="https://via.placeholder.com/150x150" alt="CarCare" />
            <form className={classes.form} onSubmit={props.signInHandler}>
                <Textbox
                    type={'email'}
                    placeholder={'E-mail Address'}
                    onChange={props.emailHandler}
                />
                <Textbox
                    type={'password'}
                    placeholder={'Password'}
                    onChange={props.passwordHandler}
                />
                <Button
                    type={'submit'}
                    label={'Sign In'}
                />
            </form>
            <Link className={classes.link} to='/'>Do not have account Sign-Up now</Link>
        </div>
    );
}

export default signin;
