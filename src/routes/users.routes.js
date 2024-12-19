import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updatedUser } from "../controllers/users.controllers";
import validateUser from "../helpers/validateUser";

const router = Router();

router.route("/users").post(validateUser, createUser).get(getUsers);
router.route("/user/:id").get(getUser).delete(deleteUser).put(updatedUser);

export default router;