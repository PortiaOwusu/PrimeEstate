const router = require("express").Router();
const productController = require("../Controllers/productController");

router.get("/", productController.allProduct);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
