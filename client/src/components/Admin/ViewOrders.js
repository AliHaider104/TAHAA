import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Orders = () => {
  const [orderlist, setorderlist] = useState([]);

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/vieworders");
      const data = await response.json();
      setorderlist(data);
      console.log(orderlist);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const deleteOrder = await fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      });
      setorderlist(orderlist.filter((todo) => todo.todo_id !== id));
      toast.success("Order is Completed!");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, [orderlist]);

  return (
    <div>
      <h1
        style={{
          fontSize: "5vw",
          marginLeft: "29%",
          color: "#2b6777",
          textShadow: "1px 1px #FFF",
        }}
      >
        WELCOME ADMIN
      </h1>
      <h1
        style={{
          fontSize: "5vw",
          marginLeft: "35%",
          color: "#2b6777",
          textShadow: "1px 1px #FFF",
        }}
      >
        ALL ORDERS
      </h1>
      {orderlist.map((order) => {
        return (
          <div
            key={order.order_id}
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
                {order.customer_email}
              </h1>
              <h1>
                Orders {order.order_quantity} {order.product_name}
              </h1>
              <h1 style={{ fontSize: "1vw" }}>Bill: {order.order_price}$</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1%",
              }}
            >
              <button
                onClick={() => deleteOrder(order.order_id)}
                style={{
                  height: "20%",
                  width: "100%",
                  fontSize: "1vw",
                }}
                className="btn btn-outline-danger btn-xs"
              >
                Completed
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
