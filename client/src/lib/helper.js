import $ from 'jquery';

const BASE_URL = 'http://localhost:3001';

const getReservationInfo = (id, date, callback) => {
  $.ajax({
    url: `${BASE_URL}/restaurants/${id}/reservations/${date}`,
    method: 'GET',
    success: (data) => {
      console.log('ajax GET success', data);
      callback(null, data);
      // return new Promise(resolve => resolve(data));
    },
    error: (jqxhr, errString, errThrown) => {
      console.log('ajax GET error', jqxhr, errString, errThrown);
      callback(errString, null);
      // return new Promise((resolve, reject) => reject(errString));
    },
  });
};

module.exports.getReservationInfo = getReservationInfo;
