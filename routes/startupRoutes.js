const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Startup = require('../models/Startup');

// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'startup-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter - only images
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

// Multer upload configuration
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB per file
        files: 10 // Max 10 files
    }
});

// POST /api/startups - Register a new startup with images
router.post('/startups', upload.array('images', 10), async (req, res) => {
    try {
        const { startupName, founderName, email, phone, stage, domain, website, description } = req.body;

        // Validate required fields
        if (!startupName || !founderName || !email || !phone || !stage || !domain || !description) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        // Get image paths
        const imagePaths = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

        // Create new startup
        const startup = new Startup({
            startupName,
            founderName,
            email,
            phone,
            stage,
            domain,
            website: website || '',
            description,
            images: imagePaths
        });

        // Save to database
        await startup.save();

        res.status(201).json({
            success: true,
            message: 'Startup registered successfully',
            data: startup
        });

    } catch (error) {
        console.error('Error registering startup:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to register startup. Please try again.',
            error: error.message
        });
    }
});

// GET /api/startups - Fetch all startups
router.get('/startups', async (req, res) => {
    try {
        // Fetch all startups, sorted by newest first
        const startups = await Startup.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: startups.length,
            data: startups
        });

    } catch (error) {
        console.error('Error fetching startups:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch startups',
            error: error.message
        });
    }
});

module.exports = router;
