// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const brandRoutes = require('./routes/brandRoutes');
const featuredPerfumeRoutes = require('./routes/featuredPerfumeRoutes');
const noteRoutes = require('./routes/noteRoutes');
const perfumeRoutes = require('./routes/perfumeRoutes');
const perfumeNoteRoutes = require('./routes/perfumeNoteRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const savedPerfumeRoutes = require('./routes/savedPerfumeRoutes');
const searchLogRoutes = require('./routes/searchLogRoutes');
const storeRoutes = require('./routes/storeRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/featured-perfumes', featuredPerfumeRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/perfumes', perfumeRoutes);
app.use('/api/perfume-notes', perfumeNoteRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/saved-perfumes', savedPerfumeRoutes);
app.use('/api/search-logs', searchLogRoutes);
app.use('/api/stores', storeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));