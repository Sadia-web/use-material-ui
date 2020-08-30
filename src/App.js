import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core/Button';
import './App.css';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ecf2254474e34f1d873adff51f51f6dc')
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])

  useEffect(() => {
    axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=ecf2254474e34f1d873adff51f51f6dc')
    .then(data => setArticles(data.data.articles))
    

  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    
    </div>
  );
}

export default App;
