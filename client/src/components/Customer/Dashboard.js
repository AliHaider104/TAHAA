import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Home from "../Admin/Home";
import BuyProduct from "./BuyProduct";

const Dashboard = () => {
  const [prodlist, setprodlist] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Products");
      const data = await response.json();
      setprodlist(data);
      console.log(prodlist);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [prodlist]);

  return (
    <div>
      <h1
        style={{
          fontSize: "5vw",
          marginLeft: "25.5%",
          color: "#2b6777",
          textShadow: "1px 1px #FFF",
        }}
      >
        WELCOME {localStorage.email}
      </h1>
      <Home prodlist={prodlist} />
      <h1
        style={{
          fontSize: "5vw",
          marginLeft: "40%",
          color: "#2b6777",
          textShadow: "1px 1px #FFF",
        }}
      >
        MY SHOP
      </h1>
      {prodlist.map((prod) => {
        return (
          <div
            key={prod.product_id}
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#FFF",
              width: "50%",
              height: "50%",
              marginLeft: "26%",
              boxShadow: "2px 2px",
              marginTop: "2%",
            }}
          >
            <img
              alt=""
              style={{
                marginTop: "1%",
                width: "30%",
                height: "20%",
              }}
              src={prod.product_image_url}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "10vw",
              }}
              className="container"
            >
              <h1
                style={{
                  fontSize: "4vw",
                  color: "#52ab98",
                  textShadow: "1px 1px black",
                }}
              >
                {prod.product_name}
              </h1>
              <h1 style={{ fontSize: "1vw", color: "#6B8E23" }}>
                {prod.product_description}
              </h1>
              <h1 style={{ fontSize: "1vw" }}>Price: {prod.product_price}$</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1%",
              }}
            >
              <BuyProduct prod={prod} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
