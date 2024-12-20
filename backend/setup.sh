#!/bin/bash

# Exit on error
set -e

# Clean up everything first
echo "Cleaning up..."
rm -rf venv
rm -rf __pycache__
rm -rf .pytest_cache
rm -rf *.pyc
rm -rf *.db
rm -f app.py  # Remove old app.py
rm -f routes.py  # Remove old routes.py
rm -f models.py  # Remove old models.py

# Create app directory if it doesn't exist
echo "Creating app directory..."
mkdir -p app

# Create virtual environment
echo "Creating virtual environment..."
python3.11 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
python3.11 -m pip install --upgrade pip

# Install requirements
echo "Installing requirements..."
python3.11 -m pip install -r requirements.txt

# Show current directory structure
echo "Current directory structure:"
ls -la

echo "Setup complete!"
