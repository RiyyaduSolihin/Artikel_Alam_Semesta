const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("API Artikel Alam Semesta berjalan 🚀");
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require('mongoose'); // import mongoose untuk koneksi DB

// koneksi ke MongoDB lokal

mongoose.connect('mongodb://127.0.0.1:27017/alam_semesta')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// import router artikel
const articleRoutes = require('./app/routes/articleRoutes');

// pasang router ke path /api/articles
app.use('/api/articles', articleRoutes);