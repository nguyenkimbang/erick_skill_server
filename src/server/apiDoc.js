const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

export const documentation = [
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile),
];
