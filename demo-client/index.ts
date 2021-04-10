import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/greeter';

const packageDef = protoLoader.loadSync(__dirname + '/../proto/greeter.proto');
const proto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;

const client = new proto.greeterTest.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.SayHello({ name: 'Chris' }, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Got server reply: ${res.message}`);
    }
})