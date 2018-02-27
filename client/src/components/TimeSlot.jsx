import React from 'react';
import PropTypes from 'prop-types';

const TimeSlot = props => (
  <div>
    <button
      disabled={!props.available}
      onClick={() => props.clickHandler(props.time)}
    >
      {props.time > 12 ? props.time - 12 : props.time}:00 {props.time > 12 ? 'PM' : 'AM'}
    </button>
  </div>
);


TimeSlot.propTypes = {
  time: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default TimeSlot;
