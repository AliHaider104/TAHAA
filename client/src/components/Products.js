import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Home from "./Home";
import Edit from "./EditProduct";

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

  const deleteProduct = async (id) => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/products/${id}`,
        {
          method: "DELETE",
        }
      );
      setprodlist(prodlist.filter((todo) => todo.todo_id !== id));
      toast.success("Product is deleted!");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [prodlist]);

  return (
    <div>
      <Home prodlist={prodlist} />
      <h1
        style={{
          fontSize: "5vw",
          marginLeft: "25.5%",
          color: "#808000",
          textShadow: "1px 1px black",
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
                  color: "#808000",
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
              <button
                onClick={() => deleteProduct(prod.product_id)}
                style={{
                  height: "20%",
                  width: "100%",
                  fontSize: "1vw",
                }}
                className="btn btn-outline-danger btn-xs"
              >
                Remove
              </button>
              <Edit prod={prod} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
