
const mongoose = require('mongoose'); // import library mongoose untuk koneksi MongoDB

// definisi struktur data artikel
const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },   // judul artikel, wajib diisi
  content: { type: String, required: true }, // isi artikel, wajib diisi
  category: { type: String, required: true },// kategori artikel, wajib diisi
}, { timestamps: true }); // otomatis menambahkan createdAt & updatedAt

// export model supaya bisa dipakai di controller
module.exports = mongoose.model('Article', ArticleSchema);