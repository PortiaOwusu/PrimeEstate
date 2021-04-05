const express = require("express");

require("./Config/dbConnect");

const app = express();

app.use(express.json());

app.use("/products", require("./Router/productRouter"));

app.listen(4000, () => console.log("Server up and running"));
