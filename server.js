const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("calculator.proto", {});
const calculator = grpc.loadPackageDefinition(packageDef);
const proto = calculator.proto;


const server = new grpc.Server();


server.bind('localhost:9000', grpc.ServerCredentials.createInsecure());
server.addService(proto.CalculatorService.service, 
    {'Multiplication' : Multiplication});


server.start();




function Multiplication(call, callback){
    let multiplicationResult = call.request.a * call.request.b ;

    callback(
        null,
        {result: multiplicationResult}
    );
}

