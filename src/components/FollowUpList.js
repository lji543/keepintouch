import React from 'react';

import List from './Utility/List';

export class FollowUpList extends React.Component{

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
        c.lastContacted
      ])
    })
  }

  render() {
    return (
      <List
        header="Follow Up"
        listItems={this.listItem()}
      />
    );
  }

}

export default FollowUpList;
