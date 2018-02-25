const express = require('express');
const request = require('supertest');

const reservationsRouter = require('./reservations');

describe('reservations Router', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use('/reservations', reservationsRouter);
  });

  test('should return a 201 on a POST request', () => {
    request(app).post('/reservations')
      .then((response) => {
        expect(response.statusCode).toBe(201);
      });
  });

  test('should return a 404 on a GET request', () => {
    request(app).get('/reservations')
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});
