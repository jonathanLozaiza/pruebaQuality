CREATE TABLE IF NOT EXISTS market(
    id_market integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> '')
);

CREATE TABLE IF NOT EXISTS company(
    id_company integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> '')
);

CREATE TABLE IF NOT EXISTS service(
    id_service integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> '')
);

CREATE TABLE IF NOT EXISTS project(
    id_project integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    description text,
    id_company integer REFERENCES company(id_company),
    id_market integer REFERENCES market(id_market),
    id_service integer REFERENCES service(id_service)
);

CREATE TABLE IF NOT EXISTS tasks(
    id_task integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title text NOT NULL CHECK (title <> ''),
    task_group_name text NOT NULL CHECK (task_group_name <> ''),
    id_project integer REFERENCES projects(id_project)
);

CREATE TABLE IF NOT EXISTS tareas(
    id_task integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title text NOT NULL CHECK (title <> ''),
    task_group_name text NOT NULL CHECK (task_group_name <> ''),
    id_project integer REFERENCES projects(id_project)
);