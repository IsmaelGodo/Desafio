-- Users table
CREATE TABLE users (
	user_id serial NOT NULL PRIMARY KEY,
	username varchar(45) NOT NULL UNIQUE,
	email varchar(100) NOT NULL UNIQUE,
	password varchar(45) NOT NULL,
	logged boolean
);

--Answers table
-- CREATE TABLE answers (
-- 	answer_id serial NOT NULL PRIMARY KEY,
-- 	user_id int NOT NULL,
-- 	sex varchar(100) NOT NULL,
-- 	age int NOT NULL,
-- 	height int NOT NULL,
-- 	weight int NOT NULL,
-- 	water_gl int NOT NULL,
-- 	activity varchar(45) NOT NULL,
-- 	cardio_dis boolean NOT NULL, 
-- 	digest_dis boolean NOT NULL, 
-- 	neuro_dis boolean NOT NULL,
-- 	lung_dis boolean NOT NULL,
-- 	FOREIGN KEY (user_id) REFERENCES users(user_id)
-- 	ON DELETE CASCADE
-- );

--Answers table
CREATE TABLE data (
	user_id int NOT NULL PRIMARY KEY,
	sex varchar(100),
	age int,
	height int,
	weight int,
	water_gl int,
	activity varchar(45),
	cardio_dis boolean, 
	digest_dis boolean, 
	neuro_dis boolean,
	lung_dis boolean,
	response text,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	ON DELETE CASCADE
);