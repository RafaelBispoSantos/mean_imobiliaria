import express from "express";
import test, { deleteUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { signOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/test", test);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/signout', signOut)

export default router;
