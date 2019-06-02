import React from 'react';
import classes from './Service.module.css';
import { withRouter } from 'react-router-dom';
import Textbox from '../../UI/textbox/Textbox';
import Button from '../../UI/button/Button';

const service = (props) => {
    return (
        <div className={classes.Service}>
            <div>
                <img onClick={props.history.goBack} className={classes.back} src="https://via.placeholder.com/75x75" alt="CarCare" />
                <img src="https://via.placeholder.com/75x75" alt="CarCare" />
                <img src="https://via.placeholder.com/75x75" alt="CarCare" />
                <form className={classes.form} onSubmit={props.serviceHandler}>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'engineOilService'}
                            onChange={props.engineOilServiceHandler}
                        />Oil Changed
                    </span>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'radiatorService'}
                            onChange={props.radiatorServiceHandler}
                        />Radiator Fluid Checked
                    </span>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'oilFilterService'}
                            onChange={props.oilFilterServiceHandler}
                        />Oil Filter Changed
                    </span>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'airFilterService'}
                            onChange={props.airFilterServiceHandler}
                        />Air Filter Changed
                    </span>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'batteryService'}
                            onChange={props.batteryServiceHandler}
                        />Battery Checked
                    </span>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'gearboxOilService'}
                            onChange={props.gearboxOilServiceHandler}
                        />Gearbox Oil Checked
                    </span>
                    <span>
                        <Textbox
                            type={'checkbox'}
                            name={'wiperFluidService'}
                            onChange={props.wiperFluidServiceHandler}
                        />Wiper Fluid Checked
                    </span>
                    <select className={classes.select}>
                        <option value="">Please choose an option</option>
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