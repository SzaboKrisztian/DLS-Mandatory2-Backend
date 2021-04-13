#!/usr/bin/env bash

if [ -d ./output ]; then
    rm -rf output;
fi

mkdir output;

protoc *.proto --js_out=import_style=commonjs:./output --grpc-web_out=import_style=commonjs,mode=grpcweb:./output