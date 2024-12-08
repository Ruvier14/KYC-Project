const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Your other API routes here...

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'firstPage.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard/dashboard.html'));
});

app.get('/kyc-info', (req, res) => {
    res.sendFile(path.join(__dirname, 'kyc-info/kycInfo.html'));
});

app.get('/review', (req, res) => {
    res.sendFile(path.join(__dirname, 'review/review.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signUp/createAccount.html'));
});

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'successPage/successPage.html'));
});

// Catch-all handler
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'firstPage.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;