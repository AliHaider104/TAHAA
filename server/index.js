const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

// * Middleware
app.use(cors());
app.use(express.json());

// * ROUTES

// * ADMIN LOGIN

app.post("/Admin", async (req, res) => {
  try {
    const { name, password } = req.body;
    const Response = await pool.query(
      "SELECT* FROM admin WHERE admin_name=$1 and admin_password=$2",
      [name, password]
    );

    if (Response.rows.length === 0) {
      res.json(false);
    } else {
      res.json(true);
    }
  } catch (error) {
    console.error(error.message);
  }
});

//* GET ALL PRODUCTS

app.get("/Products", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT* FROM product");
    res.json(allProducts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//* App will start listening at port 5000

app.listen(5000, () => {
  console.log("Server is starting at port 5000");
});
