# Frontend-Backend Integration Test

## Quick Test Instructions

### 1. Test if server is running and responding

Open your browser console (F12) and run:

```javascript
fetch('http://localhost:5000/api/startups')
  .then(res => res.json())
  .then(data => console.log('API Response:', data))
  .catch(err => console.error('API Error:', err));
```

Expected response:
```json
{
  "success": true,
  "count": 0,
  "data": []
}
```

### 2. Test form submission

1. Go to `http://localhost:5000/#startup-registration`
2. Open browser console (F12)
3. Fill in the form with test data
4. Click "Register Startup"
5. Check console for logs:
   - "FormHandler.js loaded"
   - "Submit button clicked"
   - "Form data: {...}"
   - "Making POST request to /api/startups"
   - "Response status: 201"
   - "Submission successful"

### 3. Test startups listing page

1. Go to `http://localhost:5000/startups`
2. Open browser console (F12)
3. Check for logs:
   - "StartupsPage.js loaded"
   - "Fetching startups from API..."
   - "Response status: 200"
   - "Number of startups: X"

### 4. Common Issues

**If form doesn't submit:**
- Check console for "FormHandler.js loaded" - if missing, script isn't loading
- Check for any JavaScript errors
- Verify all form fields have correct IDs

**If startups don't display:**
- Check console for API response
- Verify server is running on port 5000
- Check MongoDB connection

**CORS errors:**
- Server already has CORS enabled, but if you see CORS errors, restart the server

### 5. Manual API Test

Test POST endpoint with curl:

```bash
curl -X POST http://localhost:5000/api/startups -H "Content-Type: application/json" -d "{\"startupName\":\"Test Startup\",\"founderName\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"+91 12345 67890\",\"stage\":\"idea\",\"domain\":\"EdTech\",\"website\":\"\",\"description\":\"This is a test startup\"}"
```

Test GET endpoint:

```bash
curl http://localhost:5000/api/startups
```
