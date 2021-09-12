if %1==prod (
  docker run -d -p 8000:8000/tcp polaire:latest
) 
if %1==dev (
  docker run -d -p 8000:8000/tcp -v %cd%:/code polaire-dev:latest
)