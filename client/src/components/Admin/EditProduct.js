import React, { Fragment, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const EditProduct = ({ prod }) => {
  const id = prod.product_id;
  const [name, setname] = useState(prod.product_name);
  const [description, setDescription] = useState(prod.product_description);
  const [price, setprice] = useState(prod.product_price);
  const [image, setimage] = useState(prod.product_image_url);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const body = { name, description, price, image };

      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      toast.success("Product is Updated!");
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
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <input
          className="form-control"
          value={name}
          onChange={(event) => {
            setname(event.target.value);
          }}
        ></input>
        <input
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <input
          className="form-control"
          value={price}
          onChange={(event) => setprice(event.target.value)}
        ></input>
        <input
          className="form-control"
          value={image}
          onChange={(event) => {
            setimage(event.target.value);
          }}
        ></input>

        <Modal.Footer>
          <Button className="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-outline-primary" onClick={updateProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProduct;
