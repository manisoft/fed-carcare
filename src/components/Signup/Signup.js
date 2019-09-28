import React from 'react';
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';
//import Button from '../../UI/button/Button';
import Textbox from '../../UI/textbox/Textbox';
import Logo from '../Logo/Logo';
import { PrimaryButton } from 'office-ui-fabric-react';


const signup = (props) => {
    return (
        <div className={classes.Signup}>
            <Logo />
            <form className={classes.form} onSubmit={props.signUpHandler}>
                <Textbox
                    type={'email'}
                    placeholder={'E-mail Address'}
                    maxLength={'30'}
                    onChange={props.emailHandler} />
                <Textbox
                    type={'password'}
                    placeholder={'Password'}
                    maxLength={'30'}
                    onChange={props.passwordHandler} />
                <Textbox
                    type={'password'}
                    placeholder={'Confirm Password'}
                    maxLength={'30'}
                    onChange={props.passwordcHandler} />
                {/* <Button type='submit' label={'Sign Up'} /> */}
                <PrimaryButton
                    text='Sign Up'
                    type='submit'
                    className={classes.btn}
                />
            </form>
            <Link className={classes.link} to='/signin'>Already have an account Sign-In here</Link>
        </div>
    );
}

export default signup;

