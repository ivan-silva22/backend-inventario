import { Router } from "express";
import { createInventoryMovement, deleteInventoryMovement, getInventoryMovement, getInventoryMovements } from "../controllers/inventoryMovementController";

const router = Router();

router.route("/inventoryMovements").post(createInventoryMovement).get(getInventoryMovements);
router.route("/inventoryMovement/:id").get(getInventoryMovement).delete(deleteInventoryMovement);

export default router;