import { Router } from "express";
import * as todoControllers from "../controllers/todos.conntrollers";

export const todoRoutes = Router();

export const createTodo = () => {};
todoRoutes.get("/", todoControllers.getOneTodo);
todoRoutes.get("/all", todoControllers.getAllTodo);
todoRoutes.post("/create", todoControllers.createTodo);
todoRoutes.put("/:id", todoControllers.updateTodo);
todoRoutes.delete("/:id", todoControllers.deleteTodo);
