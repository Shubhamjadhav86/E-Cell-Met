const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    startupName: {
        type: String,
        required: [true, 'Startup name is required'],
        trim: true
    },
    founderName: {
        type: String,
        required: [true, 'Founder name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    stage: {
        type: String,
        required: [true, 'Startup stage is required'],
        enum: ['idea', 'mvp', 'early-revenue', 'scaling']
    },
    domain: {
        type: String,
        required: [true, 'Domain/Industry is required'],
        trim: true
    },
    website: {
        type: String,
        trim: true,
        default: ''
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    images: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Startup', startupSchema);
