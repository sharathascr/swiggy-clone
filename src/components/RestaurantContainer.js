import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../styles/RestaurantContainer.css";

function RestaurantContainer() {
  const [restraurants, setRestraurants] = useState([]);
  useEffect(() => {
    const fetchRestraurants = async () => {
      const response = await axios.get("http://localhost:7071/restraurants");
      const resArray = response.data;
      setRestraurants(resArray);
    };
    fetchRestraurants();
  }, []);
  return (
    <div className="res-container">
      {restraurants.map((res, index) => (
        <RestaurantCard key={index} data={res} />
      ))}
    </div>
  );
}

export default RestaurantContainer;
