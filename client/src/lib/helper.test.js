jest.mock('jquery');

const helper = require('./helper');

describe('client/src/lib/helper', () => {
  test('should blah', () => {
    const id = 200;
    const date = '2018-04-01';
    helper.getReservationInfo(id, date, (err, data) => {
      // console.log(data);
      expect(data.inputOptions.url).toBe('http://localhost:3001/restaurants/200/reservations/2018-04-01');
    });
  });
});
