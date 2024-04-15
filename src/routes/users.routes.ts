import { Router } from "express";
import * as userControllers from "../controllers/users.controllers";

export const userRoutes = Router();

userRoutes.get("/", userControllers.getOneUser);
userRoutes.get("/all", userControllers.getAllUser);

userRoutes.put("/:id", userControllers.updateUser);

userRoutes.delete("/:id", userControllers.deleteUser);

userRoutes.post("/register", userControllers.register);
userRoutes.post("/login", userControllers.login);
userRoutes.post("/logout", userControllers.logout);
