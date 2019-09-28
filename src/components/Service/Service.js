import React from 'react';
import classes from './Service.module.css';
import { withRouter } from 'react-router-dom';
import Textbox from '../../UI/textbox/Textbox';
//import Button from '../../UI/button/Button';
import oilIcon from '../../assets/images/car-service.svg';
import backIcon from '../../assets/images/back.svg';
import {
    PrimaryButton,
    Toggle
} from 'office-ui-fabric-react';

/* const Service_Center = [
    { key: 'Alipour', text: 'Alipour', value: 'Aliepour' },
    { key: 'Bijan', text: 'Bijan', value: 'Bijan' },
    { key: 'Motevakel', text: 'Motevakel', value: 'Motevakel' },
    { key: 'Samuel', text: 'Samuel', value: 'Samuel' },
    { key: 'Unregistered', text: 'Unregistered Service Center', value: 'Unregistered' }
]; */


const service = (props) => {
    return (
        <div className={classes.Service}>
            <div>
                <img onClick={props.history.goBack} className={classes.back} src={backIcon} alt="Back to Home" />
                <img src={oilIcon} alt="Oil Service" className={classes.oil} />
                <form className={classes.form} onSubmit={props.serviceHandler}>
                    <div className={classes.toggle_area}>
                        <div className={classes.divall}>
                            <div className={classes.divleft}>
                                <Toggle
                                    label="Oil"
                                    inlineLabel
                                    onChange={props.engineOilServiceHandler}
                                />
                            </div>
                            <div className={classes.divright}>
                                <Toggle
                                    label="Radiator"
                                    inlineLabel
                                    onChange={props.radiatorServiceHandler}
                                />
                            </div>
                        </div>
                        <div className={classes.divall}>
                            <div className={classes.divleft}>
                                <Toggle
                                    label="Oil Filter"
                                    inlineLabel
                                    onChange={props.oilFilterServiceHandler}
                                />
                            </div>
                            <div className={classes.divright}>
                                <Toggle
                                    label="Air Filter"
                                    inlineLabel
                                    onChange={props.airFilterServiceHandler}
                                />
                            </div>
                        </div>
                        <div className={classes.divall}>
                            <div className={classes.divleft}>
                                <Toggle
                                    label="Battery"
                                    inlineLabel
                                    onChange={props.batteryServiceHandler}
                                />
                            </div>
                            <div className={classes.divright}>
                                <Toggle
                                    label="Gearbox"
                                    inlineLabel
                                    onChange={props.gearboxOilServiceHandler}
                                />
                            </div>
                        </div>
                        <Toggle
                            label="Wiper Fluid"
                            inlineLabel
                            onChange={props.wiperFluidServiceHandler}
                        />
                    </div>
                    {/* <span>
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
                    </span>*/}
                    <select autocomplete required className={classes.select} onChange={props.serviceCenterHandler}>
                        <option value="">Choose a Service Center ...</option>
                        <option value="Alipour">Alipour Service Center</option>
                        <option value="Motevakel">Motevakel</option>
                        <option value="Bijan">Bijan</option>
                        <option value="Samuel">Samuel</option>
                        <option value="Unregistered">Unregistered Service Center</option>
                    </select>

                    {/* <Dropdown
                        className={classes.sc}
                        onChange={props.serviceCenterHandler}
                        label="Select your service center"
                        required
                        autoComplete="on"
                        options={Service_Center}
                        defaultSelectedKey="Alipour"
                    /> */}
                    <Textbox
                        type={'number'}
                        min={'0'}
                        step={'0.01'}
                        max={'1000000'}
                        placeholder={'Service Price'}
                        onChange={props.servicePriceHandler}
                    />
                    <Textbox
                        type={'number'}
                        min={'0'}
                        step={'1'}
                        max={'1000000'}
                        placeholder={'Service Odometer'}
                        onChange={props.serviceOdometerHandler}
                    />
                    <Textbox
                        type={'number'}
                        min={'0'}
                        step={'1000'}
                        max={'30000'}
                        placeholder={'Next Service Reminder (Km)'}
                        onChange={props.nextOilReminderHandler}
                    />
                    <Textbox
                        type={'date'}
                        onChange={props.serviceDateHandler}
                    />
                    {/*                   <Button
                        type={'submit'}
                        label={'Service Done'}
                    /> */}
                    <PrimaryButton
                        className={classes.btn}
                        type='submit'>
                        Service
                    </PrimaryButton>
                </form>
            </div>
        </div >
    );
}

export default withRouter(service);