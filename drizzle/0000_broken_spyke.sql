CREATE TABLE `todo` (
	`id` varchar(55) NOT NULL,
	`title` varchar(255),
	`text` text,
	`status` enum('EN COURS','AVENIR','TERMINER') NOT NULL DEFAULT 'EN COURS',
	`date` date,
	`time` time,
	`authorId` int,
	CONSTRAINT `todo_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(55),
	`username` varchar(55),
	`password` varchar(255),
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `todo` ADD CONSTRAINT `todo_authorId_user_id_fk` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;