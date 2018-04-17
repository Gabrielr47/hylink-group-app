import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import NotFound from './404';
import Work from './Work';
import Office from './Office';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="app">

              <Header />
              <main className="app-content">
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={100}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/work" component={Work} />
                      <Route path="/office" component={Office} />
                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </main>
              <Footer />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
