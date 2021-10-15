import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Customer = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Signup = async (e) => {
    e.preventDefault();

    try {
      const body = { email, name, password };
      const response = await fetch("http://localhost:5000/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const resParse = await response.json();

      if (resParse === true) {
        toast.success("Signup Sucessfully!");

        console.log("YES");
      } else {
        toast.error("Singup Failed!");
        console.log("NO");
      }
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
          Customer Sign up
        </h3>

        <div className="form-group">
          <label>Email</label>
          <input
            onChange={(event) => setemail(event.target.value)}
            value={email}
            type="text"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            onChange={(event) => setname(event.target.value)}
            value={name}
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(event) => setpassword(event.target.value)}
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={Signup}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Customer;
