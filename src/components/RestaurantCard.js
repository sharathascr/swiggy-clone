import React, { useContext } from "react";
import "../styles/RestaurantCard.css";
import { AppContext } from "../contexts/AppContextWrapper";
import { useNavigate } from "react-router-dom";

function RestaurantCard({ data }) {
  console.log(data);
  const navigate = useNavigate();
  const { appState, appDispatch } = useContext(AppContext);
  // const handleAddtoCart = (res) => {
  //   appDispatch({ type: "ADD_TO_CART", payload: res });
  // };
  const handleRestaurant = () => {
    navigate(`/restaurant/${data.name}`);
  };
  return (
    <div className="res-card" onClick={handleRestaurant}>
      <div className="res-img-div">
        <img
          className="res-img"
          src={
            `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
            data.cloudinaryImageId
          }
          alt={data.name}
        />
      </div>
      <p className="res-name">{data.name}</p>
      <p className="res-area">
        <span>area: </span>
        {data.areaName}
      </p>
      <p className="res-costfortwo">
        <span>cost for two: </span>
        {data.costForTwo}
      </p>
      <p className="res-cuisines">
        <span>cuisines: </span>
        {data.cuisines.join(" ")}
      </p>
      <p className="res-rating">
        <span>rating: </span>
        {data.avgRatingString}
      </p>
      <p className="res-total-rating">
        <span>total rating: </span>
        {data.totalRatingsString}
      </p>
      <p className="res-type">{data.veg ? "Veg" : "Non-veg"}</p>
      {/* <button onClick={() => handleAddtoCart(data)}>Add to Cart</button> */}
    </div>
  );
}

export default RestaurantCard;
