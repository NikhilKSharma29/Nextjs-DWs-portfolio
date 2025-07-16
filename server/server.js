const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

require('dotenv').config({ path: '../.env.local' });
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());


const dataDir = path.join(__dirname, 'postman');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}


app.get('/', (req, res) => {
  res.send('Server is running. Send POST requests to /api/contact');
});


app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message, lastName = '' } = req.body;
    

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }
    
   
    const contact = {
      name,
      lastName,
      email,
      message,
      date: new Date().toISOString()
    };
    
   
    console.log('New contact:', contact);
    
    
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
