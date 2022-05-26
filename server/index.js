import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {} from 'dotenv/config';
import connectDB from './models/db.js';

import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Welcame to NuC Api');
});

const PORT = process.env.PORT || 3001;

connectDB();
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
