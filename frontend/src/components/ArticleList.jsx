import axios from 'axios';
import { useEffect, useState } from 'react';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/api/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Artikel Alam Semesta</h2>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <strong>{article.title}</strong> - {article.category}
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;