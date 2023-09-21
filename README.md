# market-data

## setup database
<ul>
  <li>
    docker exec -it sql_server_db "bash"
  </li>
  <li>
    /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P marketD@ta12345
  </li>
  <li>
    create database marketdata
  </li>
  <li>
    go
  </li>
</ul>

## run backend
<ul>
  <li>
    cd server
  </li>
  <li>
    docker compose build
  </li>
  <li>
    docker compose up sql_server_db -d
  </li>
  <li>
    docker compose up backend
  </li>
</ul>