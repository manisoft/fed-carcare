import React from 'react';
import classes from './Refuel.module.css';
import { withRouter } from 'react-router-dom';
import Textbox from '../../UI/textbox/Textbox';
import Button from '../../UI/button/Button';
import gasIcon from '../../assets/images/gas.svg';
import backIcon from '../../assets/images/back.svg';
import Logo from '../Logo/Logo';


const refuel = (props) => {
    return (
        <div className={classes.Refuel}>
            <div>
                <img onClick={props.history.goBack} className={classes.back} src={backIcon} alt="Back to Home" />
                <img src={gasIcon} alt="Refuel" className={classes.gas} />
                <Logo />
                <form className={classes.form} onSubmit={props.refuelHandler}>
                    <Textbox
                        type={'number'}
                        min={'0'}
                        step={'0.1'}
                        max={'200'}
                        placeholder={'Fuel Amount (Litre)'}
                        onChange={props.fuelAmountHandler}
                    />
                    <Textbox
                        type={'number'}
                        min={'0'}
                        step={'0.01'}
                        max={'1000000'}
                        placeholder={'Fuel Price'}
                        onChange={props.fuelPriceHandler}
                    />
                    <Textbox
                        type={'number'}
                        min={'0'}
                        step={'1'}
                        max={'1000000'}
                        placeholder={'Refuel Odometer'}
                        onChange={props.refuelOdometerHandler}
                    />
                    <Textbox
                        type={'date'}
                        onChange={props.refuelDateHandler}
                    />
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.isfullHandler}
                        />is Full
                    </span>

                    <Button
                        type={'submit'}
                        label={'Refuel Done'}
                    />
                </form>
            </div>
        </div>
    );
}

export default withRouter(refuel);