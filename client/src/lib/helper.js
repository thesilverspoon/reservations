import $ from 'jquery';

const getReservationInfo = (id, date, callback) => {
  $.ajax({
    url: `/restaurants/${id}/reservations/${date}`,
    method: 'GET',
    success: (data) => {
      console.log('ajax GET success', data);
      callback(null, data);
    },
    error: (jqxhr, status, error) => {
      console.log('ajax GET error', jqxhr, status, error);
      callback(error, null);
    },
  });
};

const requestReservation = (id, date, time, name, party, callback) => {
  $.ajax({
    url: '/reservations',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      restaurantId: id,
      date,
      time,
      name,
      party,
    }),
    success: (result) => {
      console.log('ajax POST success', result);
      callback(null, result);
    },
    error: (jqxhr, status, error) => {
      console.log('ajax POST error', jqxhr, status, error);
      callback(error, null);
    },
  });
};

module.exports = {
  getReservationInfo, requestReservation,
};
