import { Router, Request, Response, NextFunction } from 'express';
import { fetchBalanceSheet } from '../services/externalApiService';
import { BalanceSheetResponse } from '../types/balanceSheet.type';

const router = Router();

interface QueryParams {
  date?: string;
  periods?: string;
  paymentsOnly?: boolean;
}

// Ping Endpoint
router.get('/ping', (req: Request, res: Response) => {
  res.send('pong!');
});

// Balance Sheet Endpoint
router.get('/BalanceSheet', async (req: Request<{}, {}, {}, QueryParams>, res: Response, next: NextFunction) => {
  try {
    const data: BalanceSheetResponse[] = await fetchBalanceSheet(req.query);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

/**
 * More api routes can go here...
 */

export { router as reportsRoute };
