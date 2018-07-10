#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = __importStar(require("koa"));
const indexRoutes = require('./routes/index');
const app = new Koa.default();
const PORT = process.env.PORT || 1337;
app.use(indexRoutes.routes());
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
module.exports = server;
//# sourceMappingURL=app.js.map