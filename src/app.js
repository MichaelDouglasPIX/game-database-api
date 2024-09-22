import express from 'express';
import connectDB from './config/dbConnect.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import error404Handler from './middlewares/error404Handler.js';
import cors from 'cors';

const connection = await connectDB();

connection.on('error', (erro) => {
  console.error('connection error', erro);
});

connection.once('open', () => {
  console.log('connection to the database made successfuly');
});

const app = express();
app.use(cors());
routes(app);

app.use(error404Handler);
app.use(errorHandler);

export default app;
