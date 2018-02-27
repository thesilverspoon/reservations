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
      availabilityInfo: [
        { time: 17, remaining: 0 },
        { time: 18, remaining: 5 },
        { time: 19, remaining: 3 },
        { time: 20, remaining: 2 },
        { time: 21, remaining: 20 },
      ],
      // date: '',
      // time: 17,
      name: '',
      party: 1,
    };

    this.setName = this.setName.bind(this);
    this.requestReservation = this.requestReservation.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  setName(name) {
    this.setState({ name });
  }

  requestReservation(time) {
    console.log('requestReservation', this.props.id, time, this.state.party);
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
        <TimeSlotSelector
          party={this.state.party}
          bookingsMadeToday={this.state.bookingsMadeToday}
          availabilityInfo={this.state.availabilityInfo}
          clickHandler={this.requestReservation}
        />
      </div>
    );
  }
}

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reservation;
