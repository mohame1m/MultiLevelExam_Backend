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
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from the React app


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exams', ExamsRoutes);


// Always return index.html for client-side routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Health check route
app.get('/', (_req, res) => {
  res.send('API is running');
});




// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// No need for module.exports in ES modules
