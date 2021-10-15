import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Admin/Products";
import Admin from "./components/Admin/Admin";
import AddProducts from "./components/Admin/AddProducts";
import Customer from "./components/Customer/Singup";
import CustomerLogin from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Admin/ViewOrders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Orders">
            <Orders />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/CustomerLogin">
            <CustomerLogin />
          </Route>
          <Route path="/AddProducts">
            <AddProducts />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Customer">
            <Customer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
