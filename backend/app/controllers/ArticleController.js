const Article = require('../models/Article'); // ambil model Article

// ambil semua artikel
exports.getArticles = async (req, res) => {
  const articles = await Article.find(); // cari semua artikel di DB
  res.json(articles); // kirim hasil dalam format JSON
};

// buat artikel baru
exports.createArticle = async (req, res) => {
  const article = new Article(req.body); // buat artikel dari data request
  await article.save(); // simpan ke DB
  res.json(article); // kirim balik artikel yang baru dibuat
};

// update artikel berdasarkan id
exports.updateArticle = async (req, res) => {
  const article = await Article.findByIdAndUpdate(
    req.params.id, // ambil id dari URL
    req.body,      // data baru dari request
    { new: true }  // opsi supaya hasil return adalah data terbaru
  );
  res.json(article); // kirim balik artikel yang sudah diupdate
};

// hapus artikel berdasarkan id
exports.deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id); // hapus artikel
  res.json({ message: 'Artikel dihapus' }); // kirim pesan konfirmasi
};