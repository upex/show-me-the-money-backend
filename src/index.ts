import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { reportsRoute } from './routes/reports';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware to enable CORS for all origins for test purposes
app.use(cors());

app.use(express.json());

app.use('/api/v1', reportsRoute);

// Handle 404 errors for unknown endpoints
app.use((_, res, __) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error handling middleware
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export { app, server };
