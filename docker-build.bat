set DOCKER_BUILDKIT=1
set COMPOSE_DOCKER_CLI_BUILD=1


for /f "tokens=* delims=" %%a in ('docker images -q polaire-basedependencies') do set output=%%a
if "%output%"=="" (docker build -f "./Docker/Dockerfile-basedependencies" -t polaire-basedependencies:latest ".")
set "output="

if %1==prod (
  for /f "tokens=* delims=" %%a in ('docker images -q polaire') do set output=%%a
  if "%output%"=="" (docker build -f "./Docker/Dockerfile" -t polaire:latest ".")
  set "output="
) 
if %1==dev (
  for /f "tokens=* delims=" %%a in ('docker images -q polaire-dev') do set output=%%a
  if "%output%"=="" (docker build -f "./Docker/Dockerfile-dev" -t polaire-dev:latest ".")
  set "output="
)
