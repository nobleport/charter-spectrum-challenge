DROP DATABASE IF EXISTS cinema;
CREATE DATABASE cinema;

\c cinema;

DROP TABLE shows
DROP TABLE packages
DROP TABLE networks

CREATE TABLE IF NOT EXISTS shows(
    PRIMARY KEY (ID),
    title TEXT,
    rating NUMERIC(3, 1)
)

CREATE TABLE IF NOT EXISTS packages(
    PRIMARY KEY (ID),
    package_name TEXT,
    network_ids INT[],,
    price NUMERIC(5, 2)
)

CREATE TABLE IF NOT EXISTS network(
    PRIMARY KEY (ID),
    network_name TEXT
)