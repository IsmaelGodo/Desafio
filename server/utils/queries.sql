-- Users table
CREATE TABLE users (
	user_id serial NOT NULL PRIMARY KEY,
	username varchar(45) NOT NULL UNIQUE,
	email varchar(100) NOT NULL UNIQUE,
	password varchar(45) NOT NULL,
	logged boolean
);

--Answers table
CREATE TABLE answers (
	answer_id serial NOT NULL PRIMARY KEY,
	user_id int,
	sex varchar(100) NOT NULL,
	age int NOT NULL,
	height int NOT NULL,
	weight int NOT NULL,
	water_gl int NOT NULL,
	nationality varchar(45) NOT NULL,
	cardio_dis boolean NOT NULL, 
	digest_dis boolean NOT NULL, 
	neuro_dis boolean NOT NULL,
	lung_dis boolean NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
	ON DELETE CASCADE
);