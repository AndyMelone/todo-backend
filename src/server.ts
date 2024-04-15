import { PORT } from "./../variables";
import express from "express";
import { todo } from "./db/schema";
import db from "./db/drizzle";

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
