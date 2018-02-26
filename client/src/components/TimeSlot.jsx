import React from 'react';
import PropTypes from 'prop-types';

const TimeSlot = props => (
  <div>
    <button
      disabled={!props.available}
      onClick={() => props.clickHandler(props.time)}
    >
      {props.time}:00 PM
    </button>
  </div>
);


TimeSlot.propTypes = {
  time: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default TimeSlot;
