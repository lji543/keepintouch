import React from 'react';

import ListItem from './ListItem';

export class List extends React.Component{

  // constructor(props) {
  //   super(props);
  //
  // }

  header = <div className="list_header">{this.props.header}</div>;

  contactList = () => {
    const { listItems } = this.props;

    // TODO need a more specific index if these lists are going to be changed by input
    return (
      listItems.map((item,idx) => {
        return (
          <ListItem key={idx}
            {...item}
          />
        )
      })
    )
  }

  render() {

    return (
      <div className="list-section">
        {this.header}
        <div className="list">
          {this.contactList()}
        </div>
      </div>
    );
  }

}

export default List;
