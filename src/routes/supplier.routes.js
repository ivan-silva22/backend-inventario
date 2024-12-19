import { Router } from "express";
import { createSupplier, deleteSupplier, getSupplier, getSuppliers, updatedSpplier } from "../controllers/supplier.controllers";
import validateSupplier from "../helpers/validateSupplier";

const router = Router();

router.route("/suppliers").post(validateSupplier, createSupplier).get(getSuppliers);
router.route("/supplier/:id").get(getSupplier).delete(deleteSupplier).put(updatedSpplier);

export default router;