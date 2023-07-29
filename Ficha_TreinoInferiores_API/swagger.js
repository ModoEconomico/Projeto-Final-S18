const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger/swagger_output";
const endpointsFiles = ["./src/app"];
swaggerAutogen(outputFile, endpointsFiles);