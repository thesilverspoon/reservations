import React from 'react';
import PropTypes from 'prop-types';

import TimeSlot from './TimeSlot';

const TimeSlotSelector = (props) => {
  const timeSlots = props.availabilityInfo.reduce((acc, item) => acc + (item.remaining > props.party
    ? 1
    : 0), 0);

  let timeSlotMessage;
  if (timeSlots === 0) {
    timeSlotMessage = 'We\'re sorry, no tables are available';
  } else if (timeSlots > 1) {
    timeSlotMessage = `${timeSlots} time slots available!`;
  } else {
    timeSlotMessage = 'Hurry, only 1 time slot available!';
  }

  return (
    <div>
      <div>
        <span role="img" aria-label="upward trend chart">📈</span>
        { props.bookingsMadeToday } bookings made today!
      </div>
      <div>
        { timeSlotMessage }
      </div>
      <div>
        { props.availabilityInfo.map(res => (<TimeSlot
          time={res.time}
          available={res.remaining > props.party}
          clickHandler={props.clickHandler}
        />)) }
      </div>
    </div>);
};


TimeSlotSelector.propTypes = {
  party: PropTypes.number.isRequired,
  bookingsMadeToday: PropTypes.number.isRequired,
  availabilityInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default TimeSlotSelector;
