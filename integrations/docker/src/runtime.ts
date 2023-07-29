const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./password.proto";
const bcrypt = require('bcrypt');
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
var grpcObj = protoLoader.loadSync(PROTO_PATH, options);
const PasswordService = grpc.loadPackageDefinition(grpcObj).PasswordService;

const clientStubTS = new PasswordService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

const clientStubPY = new PasswordService(
    "localhost:50052",
    grpc.credentials.createInsecure()
);

clientStubTS.retrievePasswords({}, (error, passwords) => {
    //implement your error logic here
    console.log('clientStubTS', passwords);
});
clientStubPY.retrievePasswords({}, (error, passwords) => {
    //implement your error logic here
    console.log('clientStubPY', passwords);
});

const saltRounds = 10;
let passwordToken = "5TgU76W&eRee!";
let updatePasswordToken = "H7hG%$Yh33"
bcrypt.genSalt(saltRounds, function (error, salt) {
    bcrypt.hash(passwordToken, salt, function (error, hash) {
        clientStubTS.addNewDetails(
            {
                id: Date.now(),
                password: passwordToken,
                hashValue: hash,
                saltValue: salt,
            },
            (error, passwordDetails) => {
                //implement your error logic here
                console.log('clientStubTS', passwordDetails);
            }
        );
    });
});

bcrypt.genSalt(saltRounds, function (error, salt) {
    bcrypt.hash(passwordToken, salt, function (error, hash) {
        clientStubPY.addNewDetails(
            {
                id: Date.now(),
                password: passwordToken,
                hashValue: hash,
                saltValue: salt,
            },
            (error, passwordDetails) => {
                //implement your error logic here
                console.log('clientStubPY', passwordDetails);
            }
        );
    });
});

bcrypt.genSalt(saltRounds, function (error, salt) {
    //implement your error logic here
    bcrypt.hash(updatePasswordToken, salt, function (error, hash) {
        //implement your error logic here
        clientStubTS.updatePasswordDetails(
            {
                /*
                This is one of the defaultIDs of our dummy object's values.
                You can change it to suit your needs
                */
                id: 153642,
                password: updatePasswordToken,
                hashValue: hash,
                saltValue: salt,
            },
            (error, passwordDetails) => {
                //implement your error logic here
                console.log('clientStubTS', passwordDetails);
            }
        );
    });
});
bcrypt.genSalt(saltRounds, function (error, salt) {
    //implement your error logic here
    bcrypt.hash(updatePasswordToken, salt, function (error, hash) {
        //implement your error logic here
        clientStubPY.updatePasswordDetails(
            {
                /*
                This is one of the defaultIDs of our dummy object's values.
                You can change it to suit your needs
                */
                id: 153642,
                password: updatePasswordToken,
                hashValue: hash,
                saltValue: salt,
            },
            (error, passwordDetails) => {
                //implement your error logic here
                console.log('clientStubPY', passwordDetails);
            }
        );
    });
});