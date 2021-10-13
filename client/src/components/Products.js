import React, { useEffect } from "react";
import { useState } from "react";

const Products = () => {
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
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "5vw", marginLeft: "25.5%" }}>MY SHOP</h1>
      {prodlist.map((prod) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#FFF",
              width: "50%",
              height: "50%",
              marginLeft: "26%",
              boxShadow: "5px 5px",
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
              <h1 style={{ fontSize: "4vw" }}>{prod.product_name}</h1>
              <h1 style={{ fontSize: "2vw" }}>{prod.product_description}</h1>
              <h1 style={{ fontSize: "1vw" }}>Price: {prod.product_price}$</h1>
            </div>
            <button
              style={{ height: "20%", width: "20%", fontSize: "1vw" }}
              className="btn btn-outline-dark btn-xs"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
