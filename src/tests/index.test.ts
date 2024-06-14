import request from 'supertest';
import { app, server }  from '../index';

describe('Index Route', () => {
    afterAll((done) => {
        server.close(done);
    });

    it('should return "pong!" for GET /', async () => {
        const response = await request(app).get('/api/v1/ping');
        expect(response.status).toBe(200);
        expect(response.text).toBe('pong!');
    });
});
