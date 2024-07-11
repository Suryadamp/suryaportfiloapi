// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRouter = require('./routes/contact');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://sjsurya340:axTkaEJfXEFev8HR@cluster0.kd224td.mongodb.net/portfilo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/contact',contactRouter);


app.get('/', (req, res) => {
  res.send('server running on port 5000.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
