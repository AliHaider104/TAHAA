import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Admin = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const Signin = async (e) => {
    e.preventDefault();

    try {
      const body = { name, password };
      const response = await fetch("http://localhost:5000/Admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const resParse = await response.json();

      if (resParse === true) {
        toast.success("Login Sucessfully!");
        console.log("YES");
      } else {
        toast.error("Name or Password is not Correct!");
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
        <h3 style={{ color: "#808000", textShadow: "1px 1px black" }}>
          Admin Log in
        </h3>

        <div className="form-group">
          <label>Name</label>
          <input
            onChange={(event) => setname(event.target.value)}
            value={name}
            type="name"
            className="form-control"
            placeholder="Enter name"
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
          onClick={Signin}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Admin;
