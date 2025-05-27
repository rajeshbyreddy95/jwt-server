const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb/db');
const authRoutes = require('./mongodb/routes/authRoutes');

const app = express();
const port = 6060;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // 🔧 Fix: use express.json() to parse JSON bodies

// ✅ Connect to MongoDB
connectDB();

// ✅ Base route
app.get('/', (req, res) => {
  res.json({ message: 'server running' });
});

// ✅ Auth routes
app.use('/api', authRoutes);

// ✅ Local dev server (ignored by Vercel but useful locally)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log('Server running on port', port));
}

// ✅ Export app for Vercel
module.exports = app;
