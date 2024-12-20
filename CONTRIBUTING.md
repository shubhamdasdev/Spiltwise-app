# Contributing to Splitwise Clone

## Setup

### Backend (Python/Flask)
1. Create a virtual environment
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Run the application
```bash
python run.py
```

### Frontend (React/TypeScript)
1. Install dependencies
```bash
cd frontend
npm install
```

2. Run the development server
```bash
npm start
```

## Development Guidelines
- Use type annotations in TypeScript
- Follow PEP 8 for Python
- Write unit tests for new features
- Create pull requests for all changes

## Running Tests
### Backend
```bash
pytest backend/tests
```

### Frontend
```bash
npm test
```

## Code of Conduct
- Be respectful
- Collaborate constructively
- Prioritize code quality and user experience

# Create .zshrc file
touch ~/.zshrc

# Add nvm configuration to .zshrc
echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion' >> ~/.zshrc
