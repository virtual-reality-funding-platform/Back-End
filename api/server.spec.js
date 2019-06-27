const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
  describe('GET /', () => {
    it('responds with 200 OK', () => {
      return request(server)
        .get('/')
        .expect(200);
    });

    it('should set testing env', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });    
  })

  describe("GET /projects", () => {
    it('should return 200 ok', async () => {
      const res = await request(server).get('/projects');

      expect(res.status).toEqual(200);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/projects');

      expect(res.type).toBe('application/json');
    })
  })
})