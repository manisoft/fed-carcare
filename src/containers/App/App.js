import React, { Component } from 'react';
import classes from './App.module.css';
import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

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
      email: 'mani.co@live.com',
      password: '2064052901'
    }
  }

  signInHandler = (event)=> {
    event.preventDefault();
    const user={
      email:this.state.user.email,
      password:this.state.user.password
    }
    axios.post('https://carcarepwa.herokuapp.com/user/signin',user)
    .then(res=>{
      console.log(res.data.message);
      const token = res.data.token;
      console.log(token);
    })
    .catch(err=>{
      console.log(err);
    })
  }

signUpHandler=(event)=>{
  event.preventDefault();
/*   const cardata={
    name: this.state.cardata.name,
    model: this.state.cardata.model,
    yearOfBuild: this.state.cardata.yearOfBuild,
    odometer:this.state.cardata.odometer,
    gasolineCapacity:this.state.cardata.gasolineCapacity
  } */
  const user={
    email:this.state.user.email,
    password:this.state.user.password
  }
  axios.post('https://carcarepwa.herokuapp.com/user/signup',user)
  .then(res=>{
    console.log(res.data.message);
    console.log(res);
  })
  .catch(err=>{
    console.log(err);
  })
}


  render() {
    return (
      <div className={classes.App}>
        <Switch>
          {/* <Signin signInHandler = {this.signInHandler}/> */}
          <Route path='/' exact component={Signup} />
          <Route path='/signin' component={Signin} />
        </Switch>

      </div>
    );
  }
}

export default App;
