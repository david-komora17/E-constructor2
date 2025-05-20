require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const connectDB = require('./backend/config/db');

// Route files
const propertyRoutes = require('./backend/routes/propertyRoutes');
const mpesaRoutes = require('./backend/routes/mpesaRoutes');
const notifyPoliceRoute = require('./backend/routes/notifyPolice');
const smsRoutes = require('./backend/routes/sms');
const userRoutes = require('./backend/routes/userRoutes');
const errorHandler = require('./backend/middlewares/errorHandler'); // ✅ Add this if you have it

const app = express();

// Connect to MongoDB once
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/property', propertyRoutes);
app.use('/api/mpesa', mpesaRoutes);
app.use('/api', notifyPoliceRoute);
app.use('/api/send-sms', smsRoutes);
app.use('/api/users', userRoutes); // ✅ Correct position

// Test route
app.get('/', (req, res) => {
  res.send('🏗️ E-Constructor API Running');
});

// Error Handler (should be after all routes)
app.use(errorHandler); // Optional but recommended

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
