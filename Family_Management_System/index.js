// ============================================================
// index.js - Main Application Server
// ============================================================
// Mini User & Family Management System
// Technologies: Node.js, Express.js, EJS, MongoDB/Mongoose, dotenv, body-parser

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Initialize the Express application
const app = express();

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Retrieve MongoDB connection URL from environment variables
const MONGODB_URL = process.env.MONGODB_URL;

// Verify that MONGODB_URL is configured
if (!MONGODB_URL) {
  console.error('ERROR: MONGODB_URL is not set in the .env file!');
  process.exit(1);
}

// ------------------------------------------------------------
// Database Connection
// ------------------------------------------------------------
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully.');
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
  });

// ------------------------------------------------------------
// Middleware Configuration
// ------------------------------------------------------------
// Configure body-parser to parse URL-encoded form submissions and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static assets from public/ folder (CSS, icons, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the template engine and configure views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ------------------------------------------------------------
// Routes Configuration
// ------------------------------------------------------------
// Import route modules
const userRoutes = require('./routes/userRoutes');
const childRoutes = require('./routes/childRoutes');

// Home Page: Displays title and navigation buttons
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini User & Family Management System'
  });
});

// Convenient shortcut for Add User page
app.get('/add-user', (req, res) => {
  res.redirect('/users/new');
});

// Mount user and child routes
app.use('/users', userRoutes);
app.use('/children', childRoutes);

// ------------------------------------------------------------
// Error Handling Middlewares
// ------------------------------------------------------------
// 404 Catch-All Handler for unmatched routes
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    message: `The requested page "${req.originalUrl}" was not found.`
  });
});

// Global Error Handler for unexpected exceptions
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(err.status || 500).render('error', {
    title: 'Server Error',
    message: err.message || 'An unexpected error occurred on the server.',
    error: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

// ------------------------------------------------------------
// Start Server
// ------------------------------------------------------------
const server = app.listen(PORT, () => {
  console.log(`🚀 Mini User & Family Management System is running at: http://localhost:${PORT}`);
});

module.exports = { app, server };
