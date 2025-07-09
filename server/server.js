const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'postman');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Root route
app.get('/', (req, res) => {
  res.send('Server is running. Send POST requests to /api/contact');
});

// Handle contact form submission
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message, lastName = '' } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }
    
    // Create contact object
    const contact = {
      name,
      lastName,
      email,
      message,
      date: new Date().toISOString()
    };
    
    // Log to console
    console.log('New contact:', contact);
    
    // Save to file
    const filePath = path.join(dataDir, 'portfolio_collection.json');
    let contacts = [];
    
    if (fs.existsSync(filePath)) {
      contacts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    
    contacts.push(contact);
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
    
    res.json({ 
      success: true, 
      message: 'Message sent!' 
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
