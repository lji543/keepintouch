import React from 'react';

import List from './Utility/List';

export class UpcomingList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts,
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

    return (
      <List
        header="Upcoming Birthdays"
        listItems={this.listItem()}
      />
    );
  }

}

export default UpcomingList;
