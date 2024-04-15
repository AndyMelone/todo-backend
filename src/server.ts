import { PORT } from "./../variables";
import express from "express";
import { todo } from "./db/schema";
import db from "./db/drizzle";
import { userRoutes } from "./routes/users.routes";
import { todoRoutes } from "./routes/todos.routes";

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("api/todo", todoRoutes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
