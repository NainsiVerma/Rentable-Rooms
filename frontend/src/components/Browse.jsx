import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
const placeholder = "https://listing2leasing.com/images/house-placeholder.jpg";

const Browse = () => {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const res = await fetch("http://localhost:5000/room/getall");
    const data = await res.json();

    console.log(data);
    setLocationList(data);
  };

  const displaySpaces = () => {
    return locationList.map((shop, index) => (
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={'http://localhost:5000/'+shop.image} alt="" />
          <div className="card-body">
            <p className="text-muted">{shop.type}</p>
            <h4>{shop.name}</h4>
            <p>{shop.description}</p>
            <NavLink className="btn btn-primary" to={"/details/" + shop._id}>
              View More
            </NavLink>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <header>
        <div className="container py-5">
          <h1>Browse Rentable Spaces near You</h1>
        </div>
      </header>
      <div className="container">
        <div className="row">{displaySpaces()}</div>
      </div>
    </div>
  );
};

export default Browse;
