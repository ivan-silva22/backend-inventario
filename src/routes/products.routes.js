import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updatedProduct } from "../controllers/products.controllers";
import validateProduct from "../helpers/validateProduct";

const router = Router();

router.route("products").post(validateProduct, createProduct).get(getProducts);
router.route("product/:id").get(getProduct).delete(deleteProduct).put(updatedProduct);

export default router;

