import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.HOST!,
    database: process.env.NAME!,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: parseInt(process.env.DBPORT!),
  },
} satisfies Config;
