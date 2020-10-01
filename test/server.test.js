const app = require('../server/app.js');
const supertest = require('supertest');
const request = supertest(app);

it('checks to see if the test suite is working', () => {
  const foo = 2;
  expect(foo).toBe(2);
});

it('queries the /campsites endpoint successfully', async done => {
  const response = await request.get('/api/campsites');

  expect(response.status).toBe(200);
  done();
});

it('fetches data in the proper shape from the campsites endpoint', async done => {
  const response = await request.get('/api/campsites');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body.length).toBe(100);
  done();
});

it('queries the /campsite endpoint successfully', async done => {
  const response = await request.get('/api/campsite?siteID=5');

  expect(response.status).toBe(200);
  done();
});

it('fetches data in the proper shape from the campsite endpoint', async done => {
  const response = await request.get('/api/campsite?siteID=5');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body.length).toBe(1);
  const obj = response.body[0];
  expect(obj).toHaveProperty('_id');
  expect(obj).toHaveProperty('pictures');
  expect(obj).toHaveProperty('siteID');
  expect(obj).toHaveProperty('userName');
  expect(obj).toHaveProperty('userPic');
  expect(obj).toHaveProperty('postedOn');
  expect(obj).toHaveProperty('location');
  expect(Array.isArray(obj.pictures)).toBe(true);
  expect(obj.pictures[0]).toHaveProperty('picUrl');
  expect(obj.pictures[0]).toHaveProperty('helpful');
  expect(obj.pictures[0]).toHaveProperty('caption');
  done();
});