import React from 'react';

import SetName from './SetName';
import SearchParams from './SearchParams';
import TimeSlotSelector from './TimeSlotSelector';

class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // timeSlotsLeft: 0,
      // bookingsMadeToday: 0,
      // availabilityInfo: [],
      // date: '',
      // time: 17,
      // name: '',
      // party: 1,
    };
  }

  render() {
    return (
      <div>
        <SetName />
        <SearchParams />
        <TimeSlotSelector />
      </div>
    );
  }
}

export default Reservation;
