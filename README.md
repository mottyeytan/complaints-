# Anonymous Complaints System

A web-based complaint management system built for organizations to collect anonymous feedback from users. Features a clean interface for complaint submission and an admin dashboard for viewing reports.

## Features
- **Anonymous Submissions**: Users can submit complaints without any personal identification
- **Category Classification**: Complaints are organized by categories (Food, Equipment, Orders, Other)
- **Admin Dashboard**: Password-protected panel to view all submitted complaints
- **Real-time Feedback**: Visual success/error messages for user actions
- **Responsive Design**: Works on desktop and mobile devices
- **Data Persistence**: All complaints stored securely in MongoDB

## Project Structure
```
complaints/
├── client/           # Frontend files
│   ├── complaints.html
│   ├── style.css
│   ├── comlaints.script.js
│   └── admin.script.js
├── server/           # Backend files
│   ├── app.js
│   ├── routes.js
│   ├── controllers.js
│   ├── service.js
│   ├── dal.js
│   ├── complaints.model.js
│   └── mongoConnection.js
└── package.json
```

##link

 `http://localhost:3000/complaints.html`

## Usage
### Submitting Complaints
1. Navigate to the main page
2. Type your complaint in the text area (minimum 3 characters)
3. Select an appropriate category
4. Click Submit

### Admin Panel
1. Scroll to the admin section at the bottom
2. Enter the admin password
3. Click "Get All Complaints" to view the data table

## API Endpoints
- `POST /api/complaints` - Submit a new complaint
- `GET /api/complaints/admin?password=XXX` - Retrieve all complaints (admin only)

## Tech Stack
- **Frontend**:  HTML, CSS, JavaScript 
- **Backend**: Node.js with Express.js 
- **Database**: MongoDB with Mongoose 
