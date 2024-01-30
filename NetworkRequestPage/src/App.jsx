import React from 'react';
import { useEffect } from 'react'
import PostItem from './Components/PostItem.jsx'
import './App.css'

function App() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);


  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const finalRes = await res.json();
      setPosts(finalRes);
    } catch (error) { 
      setError(error);     
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData();
  }, [page]);

  function pageIncrease() {
    setPage(page + 1)
  }

  function pageDecrease() {
    setPage(page - 1)
  }


  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && <PostItem posts={posts} handleClick={pageIncrease} handleClick2={pageDecrease} page={page}/>}
    </>
  );
}

export default App
