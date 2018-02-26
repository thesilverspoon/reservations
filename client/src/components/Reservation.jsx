import React from 'react';
import PropTypes from 'prop-types';

import SetName from './SetName';
import SearchParams from './SearchParams';
import TimeSlotSelector from './TimeSlotSelector';

import helper from '../lib/helper';

class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // timeSlotsLeft: 0,
      bookingsMadeToday: 0,
      availabilityInfo: [],
      // date: '',
      // time: 17,
      name: '',
      // party: 1,
    };

    this.setName = this.setName.bind(this);
  }

  setName(name) {
    this.setState({ name });
  }

  componentDidMount() {
    this.fetch();
  }

  fetch(date = (new Date()).toISOString().slice(0, 10)) {
    helper.getReservationInfo(this.props.id, date, (err, data) => {
      console.log('getReservationInfo callback', this.props.id, data);
      console.log(this.state.bookingsMadeToday, this.state.availabilityInfo);
      this.setState({
        bookingsMadeToday: data.madeToday,
        availabilityInfo: data.reservations,
      });
    });
  }

  render() {
    return (
      <div>
        <SetName
          name={this.state.name}
          clickHandler={this.setName}
        />
        <SearchParams />
        <TimeSlotSelector />
      </div>
    );
  }
}

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reservation;
