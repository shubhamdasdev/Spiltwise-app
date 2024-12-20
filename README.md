# Splitwise Clone

## Overview
A full-stack web application that helps users track and split expenses with friends and groups. Built with React, TypeScript, and Flask, this application provides a user-friendly interface for managing shared expenses and settling balances.

## Features
- **User Management**
  - User registration and authentication
  - Secure password handling
  - Profile management
- **Group Management**
  - Create and manage expense groups
  - Add/remove group members
  - View group history
- **Expense Tracking**
  - Add expenses with descriptions and amounts
  - Split bills equally or custom amounts
  - Support for multiple currencies (planned)
- **Balance Management**
  - Track balances between users
  - View who owes whom
  - Settlement suggestions
- **User Interface**
  - Responsive Material-UI design
  - Intuitive expense input
  - Clear balance visualization

## Tech Stack
### Frontend
- React 18 with TypeScript
- Material-UI for components
- React Router for navigation
- Axios for API requests
- React Context for state management

### Backend
- Python 3.11
- Flask framework
- SQLAlchemy ORM
- Flask-Login for authentication
- Flask-CORS for cross-origin support

### Database
- SQLite (development)
- PostgreSQL (production - planned)

### Development Tools
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Python Black for Python formatting

## Setup Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/shubhamdasdev/Spiltwise-app.git
   cd Spiltwise-app
   ```

2. Backend Setup
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   python run.py
   ```

3. Frontend Setup
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. Access the application
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Environment Variables
### Frontend (.env)
env
REACT_APP_API_URL=http://localhost:5000

### Backend (.env)
env
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=your-secret-key
DATABASE_URL=sqlite:///splitwise.db


## API Documentation
- POST /api/register - User registration
- POST /api/login - User authentication
- GET /api/groups - List user's groups
- POST /api/groups - Create new group
- POST /api/expenses - Add new expense
- GET /api/expenses/group/:id - Get group expenses

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Testing
### Backend Tests
bash
cd backend
pytest

### Frontend Tests
bash
cd frontend
npm test

## Deployment
- Frontend: Vercel/Netlify (planned)
- Backend: Heroku/DigitalOcean (planned)
- Database: PostgreSQL on managed service (planned)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by the original Splitwise application
- Material-UI for the component library
- Flask community for the excellent documentation