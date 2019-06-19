import React from 'react';
import classes from './LastCheck.module.css';
import m from '../../assets/images/m.svg';
import d from '../../assets/images/d.svg';

const lastCkeck = (props) => {
    return (
        <div>
            <div className={classes.header}>Last Time Checked</div>
            <div className={classes.box}>
                <div className={classes.left}>
                    <span className={classes.title}>Air Filter</span>
                    <span className={classes.amount}> {props.lAirFilter[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lAirFilter[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
                <div className={classes.right}>
                    <span className={classes.title}>Oil Filter</span>
                    <span className={classes.amount}> {props.lOilFilter[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lOilFilter[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.left}>
                    <span className={classes.title}>Battery</span>
                    <span className={classes.amount}> {props.lBattery[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lBattery[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
                <div className={classes.right}>
                    <span className={classes.title}>Radiator Fluid</span>
                    <span className={classes.amount}> {props.lRadiator[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lRadiator[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.left}>
                    <span className={classes.title}>Gearbox Oil</span>
                    <span className={classes.amount}> {props.lGearbox[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lGearbox[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
                <div className={classes.right}>
                    <span className={classes.title}>Wiper Fluid</span>
                    <span className={classes.amount}> {props.lWiper[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lWiper[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.left}>
                    <span className={classes.title}>Gasoline</span>
                    <span className={classes.amount}> {props.lGasoline[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lGasoline[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
                <div className={classes.right}>
                    <span className={classes.title}>Oil</span>
                    <span className={classes.amount}> {props.lOil[0]} <img src={m} alt='Month' className={classes.month} /></span>
                    <span className={classes.amount}> {("0" + props.lOil[1]).slice(-2)} <img src={d} alt='Day' className={classes.day} /></span>
                </div>
            </div>
            <br />
        </div>
    );
}

export default lastCkeck;