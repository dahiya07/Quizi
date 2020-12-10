import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Quizez from './container/Quizez';
import Register from './container/register'; 
import Login from './container/login';
import Dashboard from './container/dashborad';
import './css/style.css';

class App extends Component {


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/quiz' component={Quizez} />
            <Route path='/dashboard' component={()=>window.sessionStorage.getItem('name')==null?<Login/> : <Dashboard/>}  />
            <Route path='/register' component={Register} />
          </Switch>
        </Router>
    </div>
    );
  }
}

export default App;
