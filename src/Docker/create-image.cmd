docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt_scenariya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proekt_scenariya/app ../..
