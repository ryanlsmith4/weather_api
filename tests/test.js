/* eslint-disable no-undef */
const router = require('express').Router();

const { getWeather, recieveWeather } = require('../controllers/weather');

test('Smoke Test', () => {
  expect(true).toBe(true);
  expect(true).not.toBe(false);
});

test('should return weather json', () => {
//   router.post(recieveWeather);
  expect(router.route.post(recieveWeather)).toContain(JSON);
});

test('should return HTML', () => {
  expect(router.route.get(getWeather)).toContain(HTML);
});
