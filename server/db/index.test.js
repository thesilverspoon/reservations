const db = require('./index');


describe('db/index.js', () => {
  xtest('should connect to the database', () => {

  });

  test('should expose method "getOpenSeats"', () => {
    expect(db.getOpenSeats).toBeInstanceOf(Function);
  });

  test('should expose method "addReservation"', () => {
    expect(db.addReservation).toBeInstanceOf(Function);
  });
});
