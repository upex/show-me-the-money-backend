
import request from 'supertest';
import { app, server } from '../index';
import { reports } from './fixtures/reports';
import { BalanceSheetResponse } from '../types/balanceSheet.type';

describe('Reports Routes', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('GET /BalanceSheet - valid request', async () => {
    const response = await request(app)
      .get('/api/v1/BalanceSheet')
      .expect(200);
    
    const actual = response.body.map((item: BalanceSheetResponse) => {
        delete item.UpdatedDateUTC;
        return item;
    });

    expect(actual).toEqual(reports);
  });

  test('GET /BalanceSheet - Not Found', async () => {
    const response = await request(app)
      .get('/api/v1/BalanceShee?invalid=true')
      .expect(404);

    expect(response.body.message).toEqual('Not Found');
  });
});
