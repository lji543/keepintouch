import React, { Component } from 'react';

import Profiles from './components/Profiles'

import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <Profiles />
      </div>
    );
  }
}

export default App;
