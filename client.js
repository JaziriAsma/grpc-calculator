const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("calculator.proto", {});
const calculator = grpc.loadPackageDefinition(packageDef);
const proto = calculator.proto;



const client = new proto.CalculatorService('localhost:9000', grpc.credentials.createInsecure());

let a =Math.round(Math.random()* 10) ;

let b  =Math.round(Math.random()* 10) ;

let argument = { a:a , b:b }
console.log("input: ", argument)

client.Multiplication(
    argument, function(err, response){
        if (err) return console.err(err);
        console.log('Multiplication result is: ', response.result);
}
)

