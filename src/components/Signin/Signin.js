import React from 'react';
import classes from './Signin.module.css';
import Textbox from '../../UI/textbox/Textbox';
import Button from '../../UI/button/Button';

const signin = (props) => {
    return (
        <div className={classes.Signin}>
            <img src="https://via.placeholder.com/150x150" alt="test" />
            <form className={classes.form}>
                <Textbox
                    type={'email'}
                    placeholder={'E-mail Address'}
                />
                <Textbox
                    type={'password'}
                    placeholder={'Password'}
                />
                <Button
                    type={'submit'}
                    label={'Sign In'}
                />
            </form>
        </div>
    );
}

export default signin;
