import express from 'express';
import routes from '../routes';
import {logger, errorLoger} from './logger';
import {documentation} from './apiDoc';
import {authenticate} from './auth';

import pageNotFoundHandler from './pageNotFoundHandler';
import registerReactAsServerSide from './registerReactServerSide';
const cors = require('cors');

// / create server base on the express js library
const server = express();
server.use(cors());
server.use(express.json());

server.use('/doc', documentation);
// sample code for used of middleware.
// do not code like this, this is just example of middlware. import from the other modules
server.use((req, res, next) => {
  console.log(req.url);
  next();
});

// server.use(logger);
server.use(authenticate);
server.use('/api', routes);

registerReactAsServerSide(server);

server.use(pageNotFoundHandler);
server.use(errorLoger);
// global catch error
// do not code like this. use the external with injectable logger
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'errors': {
      message: err.message,
      error: {},
    },
  });

  next();
});

export default server;
