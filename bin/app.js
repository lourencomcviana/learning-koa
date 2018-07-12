#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const koa_1 = __importDefault(require("koa"));
const routes_1 = __importDefault(require("./routes"));
const movies_1 = __importDefault(require("./routes/movies"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const pkg = require('../package.json');
const app = new koa_1.default();
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
app.use(koa_bodyparser_1.default());
app.use(routes_1.default.routes());
app.use(movies_1.default.routes());
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
    console.log(`version:${pkg.version}`);
});
module.exports = server;
//# sourceMappingURL=app.js.map