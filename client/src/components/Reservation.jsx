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
        { time: 18, remaining: 0 },
        { time: 19, remaining: 0 },
        { time: 20, remaining: 0 },
        { time: 21, remaining: 0 },
      ],
      date: (new Date()).toISOString().slice(0, 10),
      time: 19,
      name: '',
      party: 2,
      message: '',
    };

    this.setName = this.setName.bind(this);
    this.requestReservation = this.requestReservation.bind(this);
    this.getAvailabilityInfo = this.getAvailabilityInfo.bind(this);
  }

  componentDidMount() {
    this.getAvailabilityInfo(this.state.date, this.state.time, this.state.party);
  }

  setName(name) {
    this.setState({ name });
  }

  getAvailabilityInfo(date, time, party) {
    helper.getReservationInfo(this.props.id, date, (err, data) => {
      if (!err) {
        console.log('getAvailabilityInfo', data);
        this.setState({
          message: '',
          availabilityInfo: data.reservations,
          bookingsMadeToday: data.madeToday,
          party,
          date,
          time,
        });
      } else {
        this.setState({
          message: `Error getting availability info: ${err}`,
        });
      }
    });
  }

  requestReservation(time) {
    helper.requestReservation(
      this.props.id, this.state.date, time, this.state.name, this.state.party,
      (err) => {
        if (!err) {
          console.log('requestReservation success');
          this.setState({
            message: 'Your table has been saved!',
          });
        } else {
          this.setState({
            message: `Error making reservation: ${err}`,
          });
        }
      },
    );
  }

  render() {
    const {
      name, bookingsMadeToday, availabilityInfo, message,
    } = this.state;

    return (
      <div>
        <SetName
          name={name}
          clickHandler={this.setName}
        />
        <SearchParams
          clickHandler={this.getAvailabilityInfo}
        />
        <TimeSlotSelector
          party={this.state.party}
          bookingsMadeToday={bookingsMadeToday}
          availabilityInfo={availabilityInfo}
          clickHandler={this.requestReservation}
        />
        <div>
          {message}
        </div>
      </div>
    );
  }
}

Reservation.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reservation;
