import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import './Restaurants.css';
import { useEffect } from "react";

function Restaurants() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${pageNumber}`
        );
        const finalRes = await res.json();
        setData(finalRes.data);
        setTotalPages(finalRes.totalPages)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [pageNumber]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <div className="Apps">
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container" className="restaurants-container">
        {/* Restaurant Card */}
        {data.map((e) => (
          <RestaurantCard
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.name}
            type={e.type}
            price_starts_from={e.price_starts_from}
            rating={e.rating}
            number_of_votes={e.number_of_votes}
          />
        ))}
      </div>
      <div>{/* Pagination Component */}
          <Pagination current={pageNumber} onChange={setPageNumber} total={totalPages}/>
      </div>
    </div>
  );
}

export default Restaurants;
