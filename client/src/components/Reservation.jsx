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
      bookingsMadeToday: 0,
      availabilityInfo: [
        { time: 17, remaining: 0 },
        { time: 18, remaining: 5 },
        { time: 19, remaining: 3 },
        { time: 20, remaining: 2 },
        { time: 21, remaining: 20 },
      ],
      date: (new Date()).toISOString().slice(0, 10),
      time: 17,
      name: '',
      party: 1,
    };

    this.setName = this.setName.bind(this);
    this.requestReservation = this.requestReservation.bind(this);
    this.getAvailabilityInfo = this.getAvailabilityInfo.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  setName(name) {
    this.setState({ name });
  }

  requestReservation(time) {
    // console.log('requestReservation', this.props.id, time, this.state.party);
    helper.requestReservation(
      this.props.id, this.state.date, time, this.state.name, this.state.party,
      (err) => {
        if (!err) {
          // success
          console.log('requestReservation success');
        } else {
          // error
          console.log('requestReservation error');
        }
      },
    );
  }

  getAvailabilityInfo(date, time, party) {
    console.log('getAvailabilityInfo', this.props.id, date, time, party);
    console.log('state vars', this.state.date, this.state.time, this.state.party);
    helper.getReservationInfo(this.props.id, date, (err, data) => {
      if (!err) {
        console.log('getAvailabilityInfo', data);
        this.setState({
          availabilityInfo: data.reservations,
          bookingsMadeToday: data.madeToday,
          party,
          date,
          time,
        });
      } else {
        console.log('getAvailabilityInfo', err);
      }
    });
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
        <SearchParams
          clickHandler={this.getAvailabilityInfo}
        />
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
