CREATE TABLE `todo` (
	`id` int NOT NULL,
	`text` text NOT NULL,
	`done` boolean NOT NULL DEFAULT false,
	CONSTRAINT `todo_id` PRIMARY KEY(`id`)
);
