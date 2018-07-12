#!/usr/bin/env node
import Koa from 'koa';
import indexRoutes from'./routes';
import moviesRoutes from'./routes/movies';
import bodyParser from 'koa-bodyparser';
const pkg = require('../package.json');

const app = new Koa();
const PORT = process.env.PORT || 1338;

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Credentials', 'true')
//   ctx.set('Access-Control-Allow-Origin', '*')
//   await next()
// })

// app.use(async (ctx, next) => {
//   if(ctx.method=='OPTIONS')
//     ctx.status = 204
//   await next()
// })

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(moviesRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  console.log(`version:${pkg.version}`)
});

export = server;