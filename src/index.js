// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to database
connectDB().then(() => {
  // Routes
  app.use('/api', feedbackRoutes);

  const PORT = process.env.PORT || 8105;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});