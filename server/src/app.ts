import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import notFound from './utils/notFound';
import errorHandler from './utils/errorHandler';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(notFound);
app.use(errorHandler);

export default app;
