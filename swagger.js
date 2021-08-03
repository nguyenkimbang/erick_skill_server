// note: do not move to the src, this is the dev-tool, not bussiness source code
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/server/swagger_output.json'
const endpointsFiles = ['./src/server/index.js']

swaggerAutogen(outputFile, endpointsFiles)