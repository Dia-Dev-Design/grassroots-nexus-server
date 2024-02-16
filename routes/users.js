var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', async (req, res) => {
  try{
       const users = await User.find();
       res.json(users);
  }   catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Server error' });
  } });

router.post('/', async (req, res)=>{
  try {
    const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });}
});


/* to get user by thier id*/
router.put('/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {


          return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
  } catch(error) {
      console.error('Error updating user by ID:', error);
      res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async(req, res) => {
  try{
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
  } catch(error) {
      console.error('There was an error getting user by ID:', error);
      res.status(500).json({ error: 'Server error' });
  }
});




router.delete('/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Theres an error deleting user by ID:', error);
      res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
