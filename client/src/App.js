import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/utility/ScrollToTop';

import { Provider } from 'react-redux';
import store from './store';

import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Travels from './components/about/Travels';
import Mission from './components/about/Mission';
import Vision from './components/about/Vision';
import Goals from './components/about/Goals';
import History from './components/History';
import Testimonials from './components/Testimonials';
import CrackSeal from './components/services/CrackSeal';
import JointSeal from './components/services/JointSeal';
import TrafficLoops from './components/services/TrafficLoops';
import TrafficLights from './components/services/TrafficLights';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';

import './App.css';

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
                  <Route exact path="/travels" component={Travels} />
                  <Route exact path="/mission" component={Mission} />
                  <Route exact path="/vision" component={Vision} />
                  <Route exact path="/goals" component={Goals} />
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
