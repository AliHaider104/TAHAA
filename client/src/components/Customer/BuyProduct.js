import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const BuyProduct = ({ prod }) => {
  const id = prod.product_id;
  const email = localStorage.email;

  const [quantity, setquantity] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const orderProduct = async (e) => {
    e.preventDefault();
    try {
      const body = { email, id, quantity };

      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      let res = await response.json();
      if (res == true) toast.success("Purchased!");
      else toast.error("Purchase Failed!");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {}, [prod]);

  return (
    <>
      <Button
        style={{
          height: "20%",
          width: "100%",
          fontSize: "1vw",
          marginTop: "1%",
        }}
        className="btn btn-outline-primary btn-xs"
        onClick={handleShow}
      >
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Purchase Product</Modal.Title>
        </Modal.Header>
        <h1
          style={{
            fontSize: "4vw",
            color: "#52ab98",
            textShadow: "1px 1px black",
          }}
        >
          {prod.product_name}
        </h1>
        <img
          style={{ width: "30%", height: "20%" }}
          src={prod.product_image_url}
          alt=""
        />
        <input
          placeholder="Enter Product Quantity"
          className="form-control"
          value={quantity}
          onChange={(event) => {
            setquantity(event.target.value);
          }}
        ></input>

        <Modal.Footer>
          <Button className="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-outline-primary" onClick={orderProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BuyProduct;
