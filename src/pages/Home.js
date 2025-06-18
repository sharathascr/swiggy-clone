import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import RestaurantContainer from "../components/RestaurantContainer";
import { useSelector } from "react-redux";

function Home() {
  return (
    <div id="home-page">
      <div id="res-section">
        <RestaurantContainer />
      </div>
    </div>
  );
}

export default Home;
