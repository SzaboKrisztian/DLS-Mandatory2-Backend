#!/usr/bin/env bash

COMMAND=$1

container=$(
    docker ps --filter ancestor=mandatory2-envoy-proxy --format="{{.ID}}"
)

if [[ "$COMMAND" == "stop-proxy" ]]
then
    printf 'Attempting to automatically stop container:\n'
    if [ -z "$container" ]
    then
        printf 'Container does not appear to be running. Aborting.\n'
        exit 1
    else
        printf "Found running container id=$container\n"
        docker stop "$container"
    fi
else
    printf "This script can be used with a stop argument as follows:
    \"yarn run start stop-proxy\"
    To try to automatically stop the docker container if running.\n\n"
    
    if [ -z "$container" ]
    then
        printf 'Docker container not running. Attepting to start:\n'

        output=$(
            docker image inspect mandatory2-envoy-proxy
        )

        if [[ "$output" =~ ^\[\] ]]
        then
            printf 'Docker image does not exist; Building:\n'
            cd proxy
            docker build . -t mandatory2-envoy-proxy
            printf 'Running:\n'
            docker run -d -p 2301:2301 --name mandatory2-envoy-proxy mandatory2-envoy-proxy
            cd ..
        else
            printf 'Image exists. Running:\n'
            docker start mandatory2-envoy-proxy
        fi
    else
        printf "Docker container running id=$container\n"
    fi

    printf '\nRunning server:\n'
    ts-node src/index.ts
fi