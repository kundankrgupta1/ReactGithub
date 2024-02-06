import React from 'react';
import { useEffect } from 'react';
import DataDisplay from './components/DataDisplay.jsx'
import './App.css'

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      )
      const finalResutl = await res.json();
      setData(finalResutl);
    } catch (error) {
      setError(error)      
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && <DataDisplay data={data} />}
    </>
  );  
}

export default App
