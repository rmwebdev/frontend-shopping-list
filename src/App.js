import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import store from './store';
import { loadUser } from './actions/authActions';
import AppNavbar from './components/AppNavbar';
import Profile from './components/Profile';
class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
        <Router>
      <div className="App">
            <AppNavbar />
            <Switch>
            <Route  exact path="/" component={ Home } />
            <Route  exact path="/profile" component={ Profile } />
            </Switch>
      </div>
     </Router>
    );
  }
  }

export default App;
