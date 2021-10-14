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

//* ADD NEW PRODUCT
app.post("/AddProduct", async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const newProduct = await pool.query(
      "INSERT INTO product (product_name,product_description,product_price,product_image_url) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, description, price, image]
    );

    res.send("Product Was Added!");
  } catch (err) {
    console.error(err.message);
  }
});

//* DELETE A PRODUCT
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await pool.query(
    "DELETE FROM product WHERE product_id=$1",
    [id]
  );
  res.json(true);
});

//* GET A SINGLE PRODUCT
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      "SELECT* FROM product WHERE product_id=$1",
      [id]
    );
    res.json(product.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//* UPDATE PRODUCT
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    const updateProduct = await pool.query(
      "UPDATE product SET product_name=$1, product_description=$2, product_price=$3, product_image_url=$4  WHERE product_id = $5",
      [name, description, price, image, id]
    );
    res.json(true);
  } catch (error) {
    console.error(error.message);
  }
});

//* App will start listening at port 5000

app.listen(5000, () => {
  console.log("Server is starting at port 5000");
});
