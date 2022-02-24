#! /bin/bash
#! /bin/bash
docker run -p 5500:5500 --rm -it --privileged=true -v "$(pwd)"/src:/gtd-lib/src/ -v "$(pwd)"/test:/gtd-lib/test/ akrck02/gtd-lib-test:v1 npm run test-ci
