import React from 'react';

import data from '../data.json';

export class Profiles extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      contacts: data.contacts
    }
  }

  contactList = () => {
    const { contacts } = this.state;

    return (
      contacts.map((contact,idx) => {
          return <div key={idx}>{contact.firstName}</div>
        })
    )
  }

  render() {

    return (
      <div>
        {this.contactList()}
      </div>
    );
  }

}

export default Profiles;
