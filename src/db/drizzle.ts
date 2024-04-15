import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";
import "dotenv/config";

export const connexion = createConnection({
  host: process.env.HOST,
  database: process.env.NAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: parseInt(process.env.DBPORT!),
});

connexion.connect((error) => {
  if (error) console.log("db failed", error);
  else console.log("db succes");
});

const db = drizzle(connexion);
export default db;
