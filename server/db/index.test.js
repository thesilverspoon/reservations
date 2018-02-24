require('dotenv').config();

jest.mock('pg');

const db = require('./index');

describe('db/index.js', () => {
  describe('getOpenSeats', () => {
    test('should expose method "getOpenSeats"', () => {
      expect(db.getOpenSeats).toBeInstanceOf(Function);
    });
  });

  describe('addRestaurantInfo', () => {
    test('should run insert query of restaurant info into DB', () => {
      const testItem = { id: 5, name: 'Krusty Burger', seats: 100 };
      db.addRestaurantInfo(testItem)
        .then(result => {
          expect(result.query).toBe('INSERT INTO restaurants (id,name,seats) VALUES ($1,$2,$3)');
          expect(result.params).toHaveLength(3);
          expect(result.params).toEqual(expect.arrayContaining([
            testItem.id, testItem.name, testItem.seats]));
        })
        .catch(error => {
          expect(error).toBe(false);
        });
    });
  });


  describe('addReservation', () => {
    test('should run insert query of reservation into DB', () => {
      const testItem = {
        restaurantId: 1,
        date: '2018-03-01',
        time: 17,
        name: 'Homer Simpson',
        party: 5,
      };

      db.addReservation(testItem)
        .then(result => {
          expect(result.query).toBe('INSERT INTO reservations (restaurantId, date, time, name, party) VALUES ($1,$2,$3,$4,$5)');
          expect(result.params).toHaveLength(5);
          expect(result.params).toEqual(expect.arrayContaining([
            testItem.restaurantId, testItem.date, testItem.time, testItem.name, testItem.party]));
        })
        .catch(error => {
          expect(error).toBe(false);
        });
    });
  });
});
