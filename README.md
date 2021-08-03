# Skeleton: React Server Side + Node Server with Postgres/SqlServer
## _This is the incopleted skeleton_

## Features BackEnd:
+ Mono package, stateless, support scale
+ New ES style, using babel with latest preset
+ Node server using the sequelize ORM, support DB First and Model First with sample script for seed, migrate db, create model or update model from db
+ Styled OData (copy coding style/same as .net)
+ 3 linear tier layer: presentation, business model, data layer
+ Follow resful naming convention
+ Using common DB: https://www.sqlservertutorial.net/sql-server-sample-database
+ Swagger with auto-generator (almost same as .net)
+ Support multiple enviroment build (test.dev.prod)
+ The dyamic logger: can switch to many logger lib: current using Winston
+ Eslint + Eslint auto fix for styled *lazy* developer
+ Tech: expressjs, sequelize...

## Features ReactJs (server side rendering):
+ support router integrated with express-js server
+ support build output for both client + server.
+ LESS CODE FOR REDUX FLOW, developer dont need care about _CRAZY_ redux flow, I wrapped all in module, corrected sample is in orders module. (Copied styled in react typescript: actions + reducer in togethers)
+ Develope new features base on the module: included store, component, action inside each module
+ Tech: redux-thunk, bootstrap, immuablejs
+ babel build: can self customize, dont depend on react-scripts
## Will complete in furture:
+ integrate invariant auth
+ integrate web socket: for realtime
+ Multiple languges: write as pluggin, can use i18 or self implment
+ Testing is not implmented

## Wellknow issue:
- still mixed between function and class.
- the naming convention still mixed between snakeCase and cammelCase
- the comment still with 'avoid this/that' still alot
- find the fixed issue in branched name: completed issue
- Mixed coding style for redux actions

## Different between React Server Side and Client
- RSS return output as html/css from server. Client produce it in client.
- SSR DON'T call functions in life cycle of Component: component mount/unmount... It's work only with function rendering.
- Due to the #2: SSR dont have the middlware.
- Before call the rendering, must pass store state as expected to the server side store first 
- Cannot/(should not) using the xxx-DOM library in server side. Example: React Router. SSR using static router, Client using Browsers router.
- Have 2 file configuration: bundle.js & server.js is the both config files to support 2 enviroments.

## Note For SSR coding:
- still need implment the lifecycle func like componentdidmount if required both client and server side rendered.
- Client still can use the middleware actions as normal react-redux code.
- Dont call API to get the initial state data in server side: use service. 

