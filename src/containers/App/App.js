import React, { Component } from 'react';
import classes from './App.module.css';
import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cardata from '../../components/Cardata/Cardata';
import Home from '../Home/Home';

class App extends Component {

  state = {
    name: '',
    model: '',
    yearOfBuild: 0,
    odometer: 0,
    gasolineCapacity: 0,
    email: '',
    password: '',
    passwordc: '',
    token: ''
  }

  signInHandler = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://carcarepwa.herokuapp.com/user/signin', user)
      .then(res => {
        console.log(res.data.message);
        this.setState({
          token: res.data.token
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  signUpHandler = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.passwordc) {
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post('https://carcarepwa.herokuapp.com/user/signup', user)
        .then(res => {
          console.log(res.data.message);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      alert('Password Fields Data Does Not Match! Please Check It!');
    }
  }

  carDataHandler = (event) => {
    event.preventDefault();
    const cardata = {
      name: this.state.name,
      model: this.state.model,
      yearOfBuild: this.state.yearOfBuild,
      odometer: this.state.odometer,
      gasolineCapacity: this.state.gasolineCapacity
    }
    axios.post('https://carcarepwa.herokuapp.com/cardata', cardata)
      .then(res => {
        console.log(res.data.message);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  emailHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  }

  passwordHandler = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  passwordcHandler = (event) => {
    this.setState({
      ...this.state,
      passwordc: event.target.value
    })
  }

  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route
            path='/' exact
            render={() => (<Signup
              signUpHandler={this.signUpHandler}
              emailHandler={this.emailHandler}
              passwordHandler={this.passwordHandler}
              passwordcHandler={this.passwordcHandler} />)}
          />
          <Route
            path='/signin'
            render={() => (<Signin
              signInHandler={this.signInHandler}
              emailHandler={this.emailHandler}
              passwordHandler={this.passwordHandler}
            />)}
          />
          <Route path='/cardata' component={Cardata} />
          <Route path='/home' component={Home} />
        </Switch>

      </div>
    );
  }
}

export default App;
