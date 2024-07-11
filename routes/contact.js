const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
const {firstName , lastName, email, phone, message} = req.body

const newUser = new  Contact({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
    })
    
 await newUser.save()
  
res.status(200).json({status:200 ,message:'submit successful'})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
