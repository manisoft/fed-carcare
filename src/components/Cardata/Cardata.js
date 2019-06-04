import React from 'react';
import classes from './Cardata.module.css';
import Button from '../../UI/button/Button';
import Textbox from '../../UI/textbox/Textbox';
import Logo from '../Logo/Logo';


const cardata = (props) => {
    return (
        <div className={classes.Cardata}>
            <Logo />
            <form className={classes.form} onSubmit={props.carDataHandler}>
                <Textbox
                    type={'text'}
                    placeholder={'Car Name'}
                    maxLength={'30'}
                    onChange={props.nameHandler}
                />
                <Textbox
                    type={'text'}
                    placeholder={'Car Model'}
                    maxLength={'30'}
                    onChange={props.modelHandler}
                />
                <Textbox
                    type={'number'}
                    placeholder={'Year of Build'}
                    min={'1350'}
                    max={'2030'}
                    step={'1'}
                    onChange={props.yrbHandler}
                />
                <Textbox
                    type='number'
                    min={'0'}
                    max={'200'}
                    step={'1'}
                    placeholder='Gasoline Capacity'
                    onChange={props.capacityHandler}
                />
                <Textbox
                    type='number'
                    maxLength={'10'}
                    min={'0'}
                    step={'1'}
                    placeholder='Odometer'
                    onChange={props.odometerHandler}
                />
                <Button type='submit' label={'Start Engine!'} />
            </form>
        </div>
    );
}

export default cardata;