# Utiliza la imagen oficial de MySQL como base
FROM mysql:5.7

COPY ./00-create-db.sql /docker-entrypoint-initdb.d/
COPY ./01-create-users-table.sql /docker-entrypoint-initdb.d/
COPY ./02-populate-users-table.sql /docker-entrypoint-initdb.d/
