#Envoy Proxy (required for running gRPC-Web)
##Steps to run the proxy:

1. RUN docker build . -t mandatory2-envoy-proxy
2. RUN docker run -d -p 2301:2301 --name mandatory2-envoy-proxy mandatory2-envoy-proxy

If the container has already been created please RUN the following command:
'docker start mandatory2-envoy-proxy'

If you want to stop ALL the containers running in docker, use the following command:
docker container kill $(docker ps -q)

Note: Please make sure that the server is running before starting the proxy.
