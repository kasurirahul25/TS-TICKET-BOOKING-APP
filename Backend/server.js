const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 🔥 Import routes
const userRoutes = require('./routes/userRoutes');

const app = express();

// 🔥 Middleware
app.use(cors());
app.use(express.json());

// 🔥 MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected ✅'))
  .catch((err) => console.log(err));

// 🔥 Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// 🔥 Use routes
app.use('/api/users', userRoutes);

// 🔥 Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});