import React, { Component } from 'react';
import classes from './App.module.css';
import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cardata from '../../components/Cardata/Cardata';
import Home from '../Home/Home';
import Refuel from '../../components/Refuel/Refuel';
import Service from '../../components/Service/Service';
import Admin from '../Admin/Admin';

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
        this.setState({
          ...this.state,
          token: res.data.token,
        });
        const config = {
          headers: { 'Authorization': 'Bearer ' + this.state.token }
        }
        axios.get('https://carcarepwa.herokuapp.com/cardata/query/user', config)
          .then(res => {
            if (res.data.length > 0) {
              this.setState({
                ...this.state,
                name: res.data[0].name,
                model: res.data[0].model,
                yearOfBuild: res.data[0].yearOfBuild,
                odometer: res.data[0].odometer,
                gasolineCapacity: res.data[0].gasolineCapacity
              });
              this.props.history.push('/home');
            } else {
              this.props.history.push('/cardata');
            }
          })
          .catch(err => {
            console.log(err);
          })
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
          this.props.history.push('/signin');
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
    const config = {
      headers: { 'Authorization': 'Bearer ' + this.state.token }
    }
    const cardata = {
      name: this.state.name,
      model: this.state.model,
      yearOfBuild: this.state.yearOfBuild,
      odometer: this.state.odometer,
      gasolineCapacity: this.state.gasolineCapacity
    }
    axios.post('https://carcarepwa.herokuapp.com/cardata', cardata, config)
      .then(res => {
        this.props.history.push('/home');
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

  nameHandler = (event) => {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }

  modelHandler = (event) => {
    this.setState({
      ...this.state,
      model: event.target.value
    })
  }

  yrbHandler = (event) => {
    this.setState({
      ...this.state,
      yearOfBuild: event.target.value
    })
  }


  capacityHandler = (event) => {
    this.setState({
      ...this.state,
      gasolineCapacity: event.target.value
    })
  }


  odometerHandler = (event) => {
    this.setState({
      ...this.state,
      odometer: event.target.value
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
          <Route path='/cardata' render={() => (<Cardata
            nameHandler={this.nameHandler}
            modelHandler={this.modelHandler}
            yrbHandler={this.yrbHandler}
            capacityHandler={this.capacityHandler}
            odometerHandler={this.odometerHandler}
            carDataHandler={this.carDataHandler}
          />)} />
          <Route path='/admin' component={Admin} />
          <Route path='/home' component={Home} />
          <Route path='/refuel' component={Refuel} />
          <Route path='/service' component={Service} />
        </Switch>
      </div>
    );
  }
}

export default App;
