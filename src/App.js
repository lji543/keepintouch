import React, { Component } from 'react';

import ContactList from './components/ContactList';
import Profiles from './components/Profiles';
import UpcomingList from './components/UpcomingList';
import FollowUpList from './components/FollowUpList';

import './scss/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App-body">
        <ContactList contacts={Profiles}/>
        <div className="side-panel">
          <UpcomingList contacts={Profiles}/>
          <FollowUpList contacts={Profiles}/>
        </div>
      </div>
    );
  }
}

export default App;
