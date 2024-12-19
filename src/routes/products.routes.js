import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updatedProduct } from "../controllers/products.controllers";

const router = Router();

router.route("products").post(createProduct).get(getProducts);
router.route("product/:id").get(getProduct).delete(deleteProduct).put(updatedProduct);

export default router;