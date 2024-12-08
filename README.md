# KYC (Know Your Customer) System

## What it does
This is a web-based KYC (Know Your Customer) system that allows users to:
- Create and manage user accounts
- Submit identification information 
- Review submitted KYC documents
- Track verification status through a dashboard
- Receive confirmation upon successful verification

## How to Run Locally

1. Clone the repository

bash
git clone https://github.com/Ruvier14/KYC-Project.git

2. Navigate to project directory

bash 
cd KYC-Project

3. Install dependencies

bash
npm install
4. Create a `.env` file in the root directory and add required environment variables (see `.env.example`)

5. Start the server

bash 
nose server.js

6. Open your browser and visit:

http://localhost:3000

## Libraries and Tools Used

### Frontend
- HTML5
- CSS3 
- Vanilla JavaScript

### Backend
- Node.js
- Express.js

### Key Dependencies
- `express`: Web application framework
- `axios`: HTTP client for API requests
- `body-parser`: Request parsing middleware
- `dotenv`: Environment variable management

### Development Tools
- Git for version control
- VS Code (recommended editor)
- Node Package Manager (npm)

## Project Structure


KYC-Project/
├── apiCall.js
├── dashboard/
│ ├── dashboard.css
│ ├── dashboard.html
│ └── dashboard.js
├── kyc-info/
│ ├── kycInfo.css
│ ├── kycInfo.html
│ └── kycInfo.js
├── review/
│ ├── review.css
│ ├── review.html
│ └── review.js
├── signUp/
│ ├── createAccount.css
│ ├── createAccount.html
│ ├── createAccount.js
│ └── createAccountForm.js
├── successPage/
│ ├── successPage.css
│ └── successPage.html
├── shared-script.js
├── shared-styles.css
└── server.js

## Requirements
- Node.js v12 or higher
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection for dependency installation

## Notes
- Make sure all environment variables are properly set in the `.env` file
- The server runs on port 3000 by default
- Check console for any error messages during startup

