import React from 'react';

import List from './Utility/List';

export class UpcomingList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      displayDays: 30
    }
  }

  sortBdays = (a,b) => {
    let abday = new Date(a.birthday);
    let bbday = new Date(b.birthday);

    if (abday < bbday) {
      return -1;
    }
    if (abday > bbday) {
      return 1;
    }
    return 0;
  }

  findUpcomingBdays = () => {
    const { contacts } = this.props;
    const { displayDays } = this.state;

    let today = new Date();
    let futureDate = new Date()
    futureDate =  new Date(futureDate.setDate(futureDate.getDate()+displayDays));

    let upcoming = contacts.filter(c => {
      let bdayMo = new Date(c.birthday).getMonth();
      let bdayDate = new Date(c.birthday).getDate();

      return bdayMo === today.getMonth() ||
        (bdayMo === futureDate.getMonth() && bdayDate <= today.getDate());
    })


    upcoming.map(c => {
      let bday = new Date(c.birthday);
      let fake;

      // if the future date is a different year than the current date, we will need to sort differently
      if (futureDate.getFullYear() > today.getFullYear()) {
        if (bday.getMonth() < today.getMonth()) {
          fake = futureDate.getFullYear();
        } else {
          fake = today.getFullYear();
        }
      }
      c.birthday = c.birthday.slice(0,-5).concat('',`/${fake}`);
    })

    // TODO add promise here
    upcoming.sort(this.sortBdays)

    this.setState({contacts: upcoming})
  }

  listItem = () => {
    return this.state.contacts.map((c,idx) => {
      return ([
        `${c.firstName} ${c.lastName}`,
        `${c.birthday}`.slice(0,-5)
      ])
    })
  }

  componentDidMount = () => {
    this.findUpcomingBdays();
  }

  render() {

    return (
      <List
        header={`Upcoming Birthdays: Next ${this.state.displayDays} Days`}
        listItems={this.listItem()}
      />
    );
  }

}

export default UpcomingList;
