import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import db, { connexion } from "./db/drizzle";

async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  connexion.end();
}

main();
