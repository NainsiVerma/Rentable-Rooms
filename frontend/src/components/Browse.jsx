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
      <div className="col-md-4 mb-4">
        <div className="card">
          <img className="card-img" src={shop.image ? ('http://localhost:5000/'+shop.image) : placeholder} alt="" />
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
    <div className="browse-page" style={{backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/015/849/322/original/houses-and-key-on-blue-background-buy-or-rent-a-house-concept-for-new-property-mortgage-and-real-estate-investment-homes-for-sale-copy-space-for-your-text-or-logo-modern-layout-3d-rendering-video.jpg')`}}>
      <header className="browse-header container">
        <div className="container py-5">
          <h1 className="display-3 fw-bold">Browse Rentable Spaces near You</h1>
        </div>
      </header>
      <div className="container mt-5">
        <div className="row">{displaySpaces()}</div>
      </div>
    </div>
  );
};

export default Browse;
