import { PORT } from "./../variables";
import express from "express";

const app = express();

app.use("/", () => {
  console.log(1);
});

app.listen(PORT, () => console.log(`Server is runnig at ${PORT}`));
