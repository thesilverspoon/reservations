const express = require('express');
const request = require('supertest');

const restaurantsRouter = require('./restaurants');

const today = (new Date()).toISOString().slice(0, 10);
const restaurantId = 3267;
const url = `/restaurants/${restaurantId}/reservations`;
const urlWithDate = `/restaurants/${restaurantId}/reservations/${today}`;

describe('restaurants router', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use('/restaurants', restaurantsRouter);
  });

  describe('GET /restaurants/:id/reservations/', () => {
    test('should return 200 response', () => request(app).get(url)
      .then((response) => {
        expect(response.statusCode).toBe(200);
      }));

    test('should return expected object shape', () => request(app).get(url)
      .then((response) => {
        const responseKeys = Object.keys(response.body);

        expect(responseKeys).toHaveLength(2);
        expect(responseKeys).toEqual(expect.arrayContaining(['madeToday', 'reservations']));

        expect(typeof response.body.madeToday).toBe('number');
        expect(Array.isArray(response.body.reservations)).toBe(true);
      }));

    test('should return expected reservation information', () => request(app).get(url)
      .then((response) => {
        const reservationObjKeys = Object.keys(response.body.reservations[0]);

        expect(reservationObjKeys).toHaveLength(2);
        expect(reservationObjKeys).toEqual(expect.arrayContaining(['time', 'remaining']));

        expect(typeof response.body.reservations[0].time).toBe('number');
        expect(typeof response.body.reservations[0].remaining).toBe('number');
      }));
  });

  describe(`GET /restaurants/:id/reservations/${today}`, () => {
    test('should return 200 response', () => request(app).get(urlWithDate)
      .then((response) => {
        expect(response.statusCode).toBe(200);
      }));

    test('should return expected object shape', () => request(app).get(urlWithDate)
      .then((response) => {
        const responseKeys = Object.keys(response.body);

        expect(responseKeys).toHaveLength(2);
        expect(responseKeys).toEqual(expect.arrayContaining(['madeToday', 'reservations']));

        expect(typeof response.body.madeToday).toBe('number');
        expect(Array.isArray(response.body.reservations)).toBe(true);
      }));

    test('should return expected reservation information', () => request(app).get(urlWithDate)
      .then((response) => {
        const reservationObjKeys = Object.keys(response.body.reservations[0]);

        expect(reservationObjKeys).toHaveLength(2);
        expect(reservationObjKeys).toEqual(expect.arrayContaining(['time', 'remaining']));

        expect(typeof response.body.reservations[0].time).toBe('number');
        expect(typeof response.body.reservations[0].remaining).toBe('number');
      }));
  });
});
