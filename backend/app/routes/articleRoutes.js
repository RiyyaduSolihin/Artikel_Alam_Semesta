const express = require('express');
const router = express.Router(); // buat router baru
const ArticleController = require('../controllers/ArticleController');

// mapping URL ke fungsi controller
router.get('/', ArticleController.getArticles);      // GET /api/articles
router.post('/', ArticleController.createArticle);   // POST /api/articles
router.put('/:id', ArticleController.updateArticle); // PUT /api/articles/:id
router.delete('/:id', ArticleController.deleteArticle); // DELETE /api/articles/:id

module.exports = router; // export router supaya bisa dipakai di server.js