import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updatedUser } from "../controllers/users.controllers";

const router = Router();

router.route("/users").post(createUser).get(getUsers);
router.route("/user/:id").get(getUser).delete(deleteUser).put(updatedUser);

export default router;