import {
  int,
  mysqlTable,
  boolean,
  text,
  varchar,
  unique,
  mysqlEnum,
  date,
  time,
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 55 }),
  username: varchar("username", { length: 55 }),
  password: varchar("password", { length: 255 }),
});

export const todo = mysqlTable("todo", {
  id: varchar("id", { length: 55 }).primaryKey(),
  title: varchar("title", { length: 255 }),
  text: text("text"),
  status: mysqlEnum("status", ["EN COURS", "AVENIR", "TERMINER"])
    .default("EN COURS")
    .notNull(),
  date: date("date"),
  time: time("time"),
  authorId: int("authorId").references(() => user.id),
});
