import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/utility/ScrollToTop';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/admin/PrivateRoute';

import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import About from './components/about/About';
import History from './components/history/History';
import Testimonials from './components/testimonials/Testimonials';
import CrackSeal from './components/services/CrackSeal';
import JointSeal from './components/services/JointSeal';
import TrafficLoops from './components/services/TrafficLoops';
import TrafficLights from './components/services/TrafficLights';
import Contact from './components/Contact';
import Login from './components/admin/Login';
import Admin from './components/admin/Admin';
import Footer from './components/layout/Footer';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info/expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Navigation />
              <ScrollToTop>
                <div>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/history" component={History} />
                  <Route exact path="/testimonials" component={Testimonials} />
                  <Route exact path="/crack-seal" component={CrackSeal} />
                  <Route exact path="/joint-seal" component={JointSeal} />
                  <Route exact path="/traffic-loops" component={TrafficLoops} />
                  <Route
                    exact
                    path="/traffic-lights"
                    component={TrafficLights}
                  />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/login" component={Login} />
                  <Switch>
                    <PrivateRoute exact path="/admin" component={Admin} />
                  </Switch>
                </div>
              </ScrollToTop>
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
