
    create table roles (
       id  serial not null,
        name varchar(20),
        primary key (id)
    );

    create table users (
       id  bigserial not null,
        email varchar(50),
        password varchar(120),
        username varchar(20),
        primary key (id)
    );

    create table users_roles (
       user_id int8 not null,
        role_id int4 not null,
        primary key (user_id, role_id)
    );

    alter table users 
       add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username);

    alter table users 
       add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email);

    alter table users_roles 
       add constraint FKj6m8fwv7oqv74fcehir1a9ffy 
       foreign key (role_id) 
       references roles;

    alter table users_roles 
       add constraint FK2o0jvgh89lemvvo17cbqvdxaa 
       foreign key (user_id) 
       references users;

    create table roles (
       id  serial not null,
        name varchar(20),
        primary key (id)
    );

    create table users (
       id  bigserial not null,
        email varchar(50),
        password varchar(120),
        username varchar(20),
        primary key (id)
    );

    create table users_roles (
       user_id int8 not null,
        role_id int4 not null,
        primary key (user_id, role_id)
    );

    alter table users 
       add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username);

    alter table users 
       add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email);

    alter table users_roles 
       add constraint FKj6m8fwv7oqv74fcehir1a9ffy 
       foreign key (role_id) 
       references roles;

    alter table users_roles 
       add constraint FK2o0jvgh89lemvvo17cbqvdxaa 
       foreign key (user_id) 
       references users;

    create table roles (
       id  serial not null,
        name varchar(20),
        primary key (id)
    );

    create table users (
       id  bigserial not null,
        email varchar(50),
        password varchar(120),
        username varchar(20),
        primary key (id)
    );

    create table users_roles (
       user_id int8 not null,
        role_id int4 not null,
        primary key (user_id, role_id)
    );

    alter table users 
       add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username);

    alter table users 
       add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email);

    alter table users_roles 
       add constraint FKj6m8fwv7oqv74fcehir1a9ffy 
       foreign key (role_id) 
       references roles;

    alter table users_roles 
       add constraint FK2o0jvgh89lemvvo17cbqvdxaa 
       foreign key (user_id) 
       references users;

    create table roles (
       id  serial not null,
        name varchar(20),
        primary key (id)
    );

    create table users (
       id  bigserial not null,
        email varchar(50),
        password varchar(120),
        username varchar(20),
        primary key (id)
    );

    create table users_roles (
       user_id int8 not null,
        role_id int4 not null,
        primary key (user_id, role_id)
    );

    alter table users 
       add constraint UKr43af9ap4edm43mmtq01oddj6 unique (username);

    alter table users 
       add constraint UK6dotkott2kjsp8vw4d0m25fb7 unique (email);

    alter table users_roles 
       add constraint FKj6m8fwv7oqv74fcehir1a9ffy 
       foreign key (role_id) 
       references roles;

    alter table users_roles 
       add constraint FK2o0jvgh89lemvvo17cbqvdxaa 
       foreign key (user_id) 
       references users;
