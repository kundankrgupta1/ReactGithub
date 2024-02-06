import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesRow";
import Pagination from "./Pagination";
import "./Style.css";

function Countries() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(()=>{
    async function fetchData(){
      setIsLoading(true);
      try {
        const fetchedData = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${pageNumber}&limit=10&orderBy=desc`
        );
        const finalData = await fetchedData.json();
        setData(finalData.data)
        setTotalPages(finalData.totalPages)
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }
    fetchData();
  },[pageNumber])
  

  if(isLoading){
    return <LoadingIndicator />;
  }
  

  return (
    <div className="main">
      <h1 data-testid="countries-header">Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */}
          {data.map((e)=> <CountriesCard key={e.id} country={e.country} population={e.population} id={e.id} rank={e.Rank} /> )}
        </tbody>
      </table>
      <div className="pagination">{/* Pagination */}
        <Pagination current={pageNumber} onChange={setPageNumber} total={totalPages} />
      </div>
    </div>
  );
}

export default Countries;
