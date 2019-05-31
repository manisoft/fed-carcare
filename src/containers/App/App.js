import React, { Component } from 'react';
import classes from './App.module.css';
import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    cardata: {
      name: '',
      model: '',
      yearOfBuild: 0,
      odometer: 0,
      gasolineCapacity: 0
    },
    user: {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path='/' exact component={Signup} />
          <Route path='/signin' component={Signin} />
        </Switch>

      </div>
    );
  }
}

export default App;
