// server/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import ExamsRoutes from './routes/exams.js'; 


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exams', ExamsRoutes);

// Health check route
app.get('/', (_req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// No need for module.exports in ES modules
