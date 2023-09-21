run backend

docker compose build
docker compose up sql_server_db -d
docker compose up backend