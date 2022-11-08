import express from "express";
import {
  saveUser,
  loginUser,
  getUser,
  getAllUsers,
  viewProfile,
  updateUser,
  deleteUser,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", authenticate, viewProfile);
userRouter.get("/:id", authenticate, getUser);
userRouter.get("/", authenticate, getAllUsers);
userRouter.put("/:id", authenticate, updateUser);
userRouter.delete("/:id", authenticate, deleteUser);

export default userRouter;
