import React, { Component } from 'react';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;