# E-Cell MET Website - Backend Integration

## Overview

This project now includes a full-stack implementation for Startup Registration with MongoDB Atlas integration.

## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **ORM**: Mongoose

## Project Structure

```
E-Cell site/
├── models/
│   └── Startup.js          # MongoDB schema for startups
├── routes/
│   └── startupRoutes.js    # API routes for startup operations
├── js/
│   ├── formHandler.js      # Form submission logic
│   └── startupsPage.js     # Startup listing page logic
├── css/
│   └── startup-styles.css  # Styles for startup features
├── server.js               # Main Express server
├── package.json            # Node.js dependencies
├── .env                    # Environment variables (create this)
├── .env.example            # Environment variables template
├── index.html              # Main website (updated)
├── startups.html           # Startup listing page (new)
└── styles.css              # Main styles

```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://ecell:<DB_PASSWORD>@cluster0.pnek51j.mongodb.net/ecell?retryWrites=true&w=majority
PORT=5000
```

Replace `<DB_PASSWORD>` with your actual MongoDB Atlas password.

### 3. Start the Server

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Features

### 1. Startup Registration Form

- **Location**: `http://localhost:5000/#startup-registration`
- **Fields**:
  - Startup Name (required)
  - Founder/Co-Founder Name (required)
  - Email Address (required)
  - Phone Number (required)
  - Startup Stage (required): Idea, MVP, Early Revenue, Scaling
  - Domain/Industry (required): FinTech, EdTech, HealthTech, SaaS, AI/ML, Other
  - Website/LinkedIn URL (optional)
  - Brief Description (required)

- **Features**:
  - Client-side validation
  - Success animation (slides from left to right)
  - Form reset after successful submission
  - Error handling

### 2. Startup Listing Page

- **Location**: `http://localhost:5000/startups`
- **Features**:
  - Displays all registered startups
  - Sorted by newest first
  - Card-based responsive layout
  - Shows: Startup Name, Domain, Stage, Description, Founder
  - Empty state when no startups exist
  - Error handling for network issues

### 3. API Endpoints

#### POST /api/startups
Register a new startup

**Request Body**:
```json
{
  "startupName": "Example Startup",
  "founderName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "stage": "mvp",
  "domain": "FinTech",
  "website": "https://example.com",
  "description": "A revolutionary fintech solution"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Startup registered successfully",
  "data": { ... }
}
```

#### GET /api/startups
Fetch all startups

**Response**:
```json
{
  "success": true,
  "count": 5,
  "data": [ ... ]
}
```

## Database Schema

**Collection**: `startups` in `ecell` database

```javascript
{
  startupName: String (required),
  founderName: String (required),
  email: String (required),
  phone: String (required),
  stage: String (required) ['idea', 'mvp', 'early-revenue', 'scaling'],
  domain: String (required),
  website: String (optional),
  description: String (required),
  createdAt: Date (auto-generated)
}
```

## Testing

### 1. Test Form Submission

1. Navigate to `http://localhost:5000/#startup-registration`
2. Fill in all required fields
3. Click "Register Startup"
4. Verify success animation appears
5. Check MongoDB Atlas dashboard for the new entry

### 2. Test Startup Listing

1. Navigate to `http://localhost:5000/startups`
2. Verify startup cards are displayed
3. Check that newest startups appear first
4. Test responsive layout on mobile

### 3. Test API Directly

Using curl or Postman:

```bash
# POST - Register a startup
curl -X POST http://localhost:5000/api/startups \
  -H "Content-Type: application/json" \
  -d '{
    "startupName": "Test Startup",
    "founderName": "Test User",
    "email": "test@example.com",
    "phone": "+91 12345 67890",
    "stage": "idea",
    "domain": "EdTech",
    "website": "",
    "description": "This is a test startup"
  }'

# GET - Fetch all startups
curl http://localhost:5000/api/startups
```

## MongoDB Atlas Management

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to your cluster
3. Click "Browse Collections"
4. Select `ecell` database → `startups` collection
5. View, edit, or delete startup entries

## Troubleshooting

### Server won't start
- Check if MongoDB URI is correct in `.env`
- Verify all dependencies are installed: `npm install`
- Check if port 5000 is already in use

### Form submission fails
- Ensure server is running: `npm start`
- Check browser console for errors
- Verify MongoDB connection in server logs

### Startups not displaying
- Check if server is running
- Verify API endpoint: `http://localhost:5000/api/startups`
- Check browser console for errors

## Production Deployment

When deploying to production:

1. Update `MONGODB_URI` in environment variables
2. Set appropriate `PORT` (e.g., 3000 or as required by hosting)
3. Update API URLs in `formHandler.js` and `startupsPage.js` from `localhost:5000` to your production domain
4. Consider adding:
   - Rate limiting
   - Input sanitization
   - HTTPS
   - Authentication (if needed)

## Support

For issues or questions, contact: contact@ecellmet.tech
