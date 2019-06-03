import React from 'react';
import carCareLogo from '../../assets/images/carcare.svg';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <img src={carCareLogo} className={classes.logo} alt='CarCare Logo' />
    );
}

export default logo;