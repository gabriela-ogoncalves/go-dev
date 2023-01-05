CREATE TABLE
   roles (
      id serial NOT NULL,
      NAME VARCHAR(20),
      PRIMARY KEY (id)
   );

CREATE TABLE
   users (
      id bigserial NOT NULL,
      email VARCHAR(50),
      PASSWORD VARCHAR(120),
      username VARCHAR(20),
      PRIMARY KEY (id)
   );

CREATE TABLE
   users_roles (
      user_id int8 NOT NULL,
      role_id int4 NOT NULL,
      PRIMARY KEY (user_id, role_id)
   );

ALTER TABLE users
ADD CONSTRAINT UKr43af9ap4edm43mmtq01oddj6 UNIQUE (username);

ALTER TABLE users
ADD CONSTRAINT UK6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);

ALTER TABLE users_roles
ADD CONSTRAINT FKj6m8fwv7oqv74fcehir1a9ffy FOREIGN KEY (role_id) REFERENCES roles;

ALTER TABLE users_roles
ADD CONSTRAINT FK2o0jvgh89lemvvo17cbqvdxaa FOREIGN KEY (user_id) REFERENCES users;

INSERT INTO roles (NAME) VALUES ('ROLE_USER');
INSERT INTO roles (NAME) VALUES ('ROLE_ADMIN');