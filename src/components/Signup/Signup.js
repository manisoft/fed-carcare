import React from 'react';
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';

const signup = (props) => {
    return (
        <div className={classes.Signup}>
            <form>
                <input type="text" placeholder="Car Name"></input>
                <input type="text" placeholder="Car Model"></input>
                <input type="number" placeholder="Year of Build"></input>
                <input type="number" placeholder="Gasoline Capacity"></input>
                <input type="number" placeholder="Odometer"></input>
                <input type="email" placeholder="E-mail Address"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account <Link to='/signin'>Sign-In</Link> here</p>
        </div>
    );
}

export default signup;

