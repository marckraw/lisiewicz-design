#!/usr/bin/env bash
# Run java application

WAIT_SCRIPT=/app/wait-for
TIMEOUT=200

echo "Waiting for mongo with timeout $TIMEOUT..."
sh $WAIT_SCRIPT ${MONGO_HOST}:${MONGO_PORT} -t $TIMEOUT
sleep 2

java \
 -Xmx${XMX} -XX:+IdleTuningGcOnIdle -Xtune:virtualized -Xscmx128m -Xscmaxaot100m -Xshareclasses:cacheDir=/opt/shareclasses \
  -jar lisiewicz_ecommerce.jar \
  --spring.data.mongodb.port=${MONGO_PORT} \
  --spring.data.mongodb.database=java_the_hub \
  --spring.data.mongodb.host=${MONGO_HOST} \
  --server.port=${BACKEND_PORT}
  /
