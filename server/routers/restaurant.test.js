const express = require('express');
const request = require('supertest');

const restaurantRouter = require('./restaurant');

describe('restaurant router', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use('/restaurant', restaurantRouter);
  });

  describe('GET /restaurant/:id/reservations/', () => {
    test('should return 200 response', () => request(app).get('/restaurant/300/reservations/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      }));

    test('should return expected object shape', () => request(app).get('/restaurant/300/reservations/')
      .then((response) => {
        const responseKeys = Object.keys(response.body);

        expect(responseKeys.length).toBe(2);
        expect(responseKeys.includes('madeToday')).toBe(true);
        expect(responseKeys.includes('reservations')).toBe(true);

        expect(typeof response.body.madeToday).toBe('number');
        expect(Array.isArray(response.body.reservations)).toBe(true);
      }));

    test('should return expected reservation information', () => request(app).get('/restaurant/300/reservations')
      .then((response) => {
        const reservationObjKeys = Object.keys(response.body.reservations[0]);
        expect(reservationObjKeys.length).toBe(2);
        expect(reservationObjKeys.includes('time')).toBe(true);
        expect(reservationObjKeys.includes('remaining')).toBe(true);

        expect(typeof response.body.reservations[0].time).toBe('number');
        expect(typeof response.body.reservations[0].remaining).toBe('number');
      }));
  });

  describe('GET /restaurant/:id/reservations/2018-03-01', () => {
    test('should return 200 response', () => request(app).get('/restaurant/300/reservations/2018-03-01')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      }));

    test('should return expected object shape', () => request(app).get('/restaurant/300/reservations/2018-03-01')
      .then((response) => {
        const responseKeys = Object.keys(response.body);

        expect(responseKeys.length).toBe(2);
        expect(responseKeys.includes('madeToday')).toBe(true);
        expect(responseKeys.includes('reservations')).toBe(true);

        expect(typeof response.body.madeToday).toBe('number');
        expect(Array.isArray(response.body.reservations)).toBe(true);
      }));

    test('should return expected reservation information', () => request(app).get('/restaurant/300/reservations/2018-03-01')
      .then((response) => {
        const reservationObjKeys = Object.keys(response.body.reservations[0]);
        expect(reservationObjKeys.length).toBe(2);
        expect(reservationObjKeys.includes('time')).toBe(true);
        expect(reservationObjKeys.includes('remaining')).toBe(true);

        expect(typeof response.body.reservations[0].time).toBe('number');
        expect(typeof response.body.reservations[0].remaining).toBe('number');
      }));
  });
});
