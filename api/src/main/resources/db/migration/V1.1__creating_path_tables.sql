CREATE TABLE exercise (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(50),
   description VARCHAR(1000),
   source VARCHAR(1000),
   topic BIGINT NOT NULL,
   CONSTRAINT pk_exercise PRIMARY KEY (id)
);

CREATE TABLE lesson (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(50),
   description VARCHAR(1000),
   source VARCHAR(1000),
   topic BIGINT NOT NULL,
   CONSTRAINT pk_lesson PRIMARY KEY (id)
);

CREATE TABLE topic (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(50),
   description VARCHAR(1000),
   path BIGINT NOT NULL,
   CONSTRAINT pk_topic PRIMARY KEY (id)
);

CREATE TABLE path (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
   name VARCHAR(50),
   description VARCHAR(1000),
   CONSTRAINT pk_path PRIMARY KEY (id)
);

CREATE TABLE users_exercise (
  exercise_id BIGINT NOT NULL,
   user_id BIGINT NOT NULL,
   CONSTRAINT pk_users_exercise PRIMARY KEY (exercise_id, user_id)
);

CREATE TABLE users_lesson (
  lesson_id BIGINT NOT NULL,
   user_id BIGINT NOT NULL,
   CONSTRAINT pk_users_lesson PRIMARY KEY (lesson_id, user_id)
);

ALTER TABLE lesson ADD CONSTRAINT FK_LESSON_ON_TOPIC FOREIGN KEY (topic) REFERENCES topic (id);
ALTER TABLE exercise ADD CONSTRAINT FK_EXERCISE_ON_TOPIC FOREIGN KEY (topic) REFERENCES topic (id);
ALTER TABLE topic ADD CONSTRAINT FK_TOPIC_ON_PATH FOREIGN KEY (path) REFERENCES path (id);

ALTER TABLE users_exercise ADD CONSTRAINT fk_useexe_on_exercise FOREIGN KEY (exercise_id) REFERENCES exercise (id);
ALTER TABLE users_exercise ADD CONSTRAINT fk_useexe_on_user FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE users_lesson ADD CONSTRAINT fk_useles_on_lesson FOREIGN KEY (lesson_id) REFERENCES lesson (id);
ALTER TABLE users_lesson ADD CONSTRAINT fk_useles_on_user FOREIGN KEY (user_id) REFERENCES users (id);