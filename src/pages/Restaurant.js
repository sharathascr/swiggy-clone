import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Restaurant() {
  const { resName } = useParams();
  useEffect(() => {
    const fetchResData = async () => {
      try {
        const response = await axios.get("http://localhost:7071/restraurants");
        const resData = response.data;
        // const resItems = resData.find((res) => res.name === resName);
        // console.log(resItems);
        if (resData) {
          console.log(resData);
        } else {
          console.log("Restaurant not found");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchResData();
  }, []);
  return <div>Restaurant</div>;
}

export default Restaurant;
