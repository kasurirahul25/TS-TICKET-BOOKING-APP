const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 🔥 Register / Login user
router.post('/login', async (req, res) => {
  const { name, phone } = req.body;

  try {
    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ name, phone });
      await user.save();
    }

    res.json({
      message: 'User logged in',
      user,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;