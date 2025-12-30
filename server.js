require('dotenv').config();
console.log("ENV CHECK:", process.env.MONGODB_URI);


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const startupRoutes = require('./routes/startupRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log('📁 Created uploads directory');
}

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas');
        console.log('📊 Database: ecell');
        console.log('📁 Collection: startups');
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    });

// API Routes
app.use('/api', startupRoutes);

// Root route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Startups listing page
app.get('/startups', (req, res) => {
    res.sendFile(__dirname + '/startups.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📝 Startup Registration: http://localhost:${PORT}/#startup-registration`);
    console.log(`📋 View Startups: http://localhost:${PORT}/startups`);
});
