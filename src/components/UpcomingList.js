import React from 'react';

import List from './Utility/List';

export class UpcomingList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    }
  }

  findUpcomingBdays = () => {

    // TODO is this the right conditional? AND/OR tie to a lifecycle fn
    if (this.state.contacts !== this.props.contacts) {
      this.setState(prevState => ({contacts: this.props.contacts}))
    }
  }

  listItem = () => {
    return this.state.contacts.map((c,idx) => {
      return ([
        `${c.firstName} ${c.lastName}`,
        `${c.birthday}`.slice(0,-5)
      ])
    })
  }

  render() {
    this.findUpcomingBdays();

    return (
      <List
        header="Upcoming Birthdays"
        listItems={this.listItem()}
      />
    );
  }

}

export default UpcomingList;
