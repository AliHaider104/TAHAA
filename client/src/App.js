import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Admin from "./components/Admin";
import AddProducts from "./components/AddProducts";
import Home from "./components/Home";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/AddProducts">
            <AddProducts />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
