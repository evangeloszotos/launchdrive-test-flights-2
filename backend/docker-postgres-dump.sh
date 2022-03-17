sudo docker exec launchdrive_backend-postgres pg_dump -U postgres -F p keystone > ./dump.sql
sudo docker exec launchdrive_backend-postgres pg_dump -U postgres --format custom keystone > ./dump.pgdata