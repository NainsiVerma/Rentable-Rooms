import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const placeholder =
  "https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png";

const ViewDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchLocations();
  }, []);
  const [selShop, setSelShop] = useState(null);

  const fetchLocations = async () => {
    const res = await fetch("http://localhost:5000/room/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setSelShop(data);
  };

  const showProducts = () => {
    if (!selShop) return <div>Loading...</div>;
    return (
      <div>
        <img className="img-fluid" src={"http://localhost:5000/" + selShop.image} alt="" />

        <h1>{selShop.name}</h1>

        <h3>{selShop.type}</h3>
        <p>{selShop.description}</p>

        <h3>Rent : ₹{selShop.rent} per month</h3>

        <h4>Contact : {selShop.contact}</h4>
        <h4>Address : {selShop.address}</h4>

      </div>
    );
  };

  return (
    <div>
      <header>
        <h1>Room Details</h1>
        <hr />
        <div className="container">{showProducts()}</div>
      </header>
    </div>
  );
};

export default ViewDetails;
