#!/usr/bin/env bash

if [ -d ./protoOutput ]; then
    rm -rf protoOutput;
fi

mkdir -p protoOutput/js;

$(npm bin)/proto-loader-gen-types --proto_path=$(pwd) --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=protoOutput/ts/ proto/*.proto;

protoc proto/*.proto --proto_path=$(pwd) --js_out=import_style=commonjs:./protoOutput/js/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./protoOutput/js;

docker run --rm -v $(pwd)/protoOutput/:/out -v $(pwd)/proto:/protos pseudomuto/protoc-gen-doc