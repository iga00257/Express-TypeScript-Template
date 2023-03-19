import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/userRoutes';
import mongoose, { ConnectOptions } from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const app = express();
const PORT = 3000;

// Connect to MongoDB

  mongoose.connect(uri)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', router);



// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});