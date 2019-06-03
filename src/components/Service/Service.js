import React from 'react';
import classes from './Service.module.css';
import { withRouter } from 'react-router-dom';
import Textbox from '../../UI/textbox/Textbox';
import Button from '../../UI/button/Button';
import oilIcon from '../../assets/images/oil.svg';
import backIcon from '../../assets/images/back.svg';
import Logo from '../Logo/Logo';


const service = (props) => {
    return (
        <div className={classes.Service}>
            <div>
                <img onClick={props.history.goBack} className={classes.back} src={backIcon} alt="Back to Home" />
                <img src={oilIcon} alt="Oil Service" className={classes.oil} />
                <Logo />
                <form className={classes.form} onSubmit={props.serviceHandler}>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.engineOilServiceHandler}
                        />Oil Changed
                    </span>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.radiatorServiceHandler}
                        />Radiator Fluid Checked
                    </span>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.oilFilterServiceHandler}
                        />Oil Filter Changed
                    </span>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.airFilterServiceHandler}
                        />Air Filter Changed
                    </span>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.batteryServiceHandler}
                        />Battery Checked
                    </span>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.gearboxOilServiceHandler}
                        />Gearbox Oil Checked
                    </span>
                    <span>
                        <input
                            type='checkbox'
                            value='false'
                            onChange={props.wiperFluidServiceHandler}
                        />Wiper Fluid Checked
                    </span>
                    <select className={classes.select} onChange={props.serviceCenterHandler}>
                        <option value="Unregistered Service Center">Unregistered Service Center</option>
                        <option value="Bijan">Bijan</option>
                        <option value="Samuel">Samuel</option>
                    </select>
                    <Textbox
                        type={'number'}
                        placeholder={'Service Price'}
                        onChange={props.servicePriceHandler}
                    />
                    <Textbox
                        type={'number'}
                        placeholder={'Service Odometer'}
                        onChange={props.serviceOdometerHandler}
                    />
                    <Textbox
                        type={'number'}
                        placeholder={'Next Oil Reminder'}
                        onChange={props.nextOilReminderHandler}
                    />
                    <Textbox
                        type={'date'}
                        onChange={props.serviceDateHandler}
                    />
                    <Button
                        type={'submit'}
                        label={'Service Done'}
                    />
                </form>
            </div>
        </div>
    );
}

export default withRouter(service);