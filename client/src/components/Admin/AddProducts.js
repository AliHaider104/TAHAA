import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = { name, description, price, image };

    try {
      const response = await fetch("http://localhost:5000/AddProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast.success("Product is Added!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        height: "50%",
        marginLeft: "25%",
        marginTop: "10%",
        border: "solid 2px #FFF",
        padding: "2%",
        boxShadow: "5px 5px",
      }}
    >
      <form>
        <h3 style={{ color: "#2b6777", textShadow: "1px 1px black" }}>
          Add Product
        </h3>

        <div className="form-group">
          <label>Name</label>
          <input
            onChange={(event) => setname(event.target.value)}
            value={name}
            type="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            onChange={(event) => setdescription(event.target.value)}
            value={description}
            type="name"
            className="form-control"
            placeholder="Enter Description"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            onChange={(event) => setprice(event.target.value)}
            value={price}
            type="name"
            className="form-control"
            placeholder="Enter Price"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            onChange={(event) => setimage(event.target.value)}
            value={image}
            type="name"
            className="form-control"
            placeholder="Enter Image URL"
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={onSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
