import React from 'react';
//import carCareLogo from '../../assets/images/carcare.svg';
import classes from './Logo.module.css';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
const Logo = () => <Icon iconName="car" className={classes.logo} title="Car Care" ariaLabel="Car Care" />;

const logo = (props) => {
    return (
        //<img src={carCareLogo} className={classes.logo} alt='CarCare Logo' />
        <Logo />
    );
}

export default logo;