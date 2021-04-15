#!/usr/bin/env bash

if [ -d ./protoOutput ]; then
    rm -rf protoOutput;
fi

mkdir -p protoOutput/js;

$(npm bin)/proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=protoOutput/ts/ proto/*.proto;

protoc proto/*.proto --js_out=import_style=commonjs:./protoOutput/js/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./protoOutput/js;