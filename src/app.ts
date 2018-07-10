#!/usr/bin/env node
import * as Koa from 'koa';
const indexRoutes = require('./routes/index');

const app = new Koa.default();
const PORT = process.env.PORT || 1337;

app.use(indexRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;