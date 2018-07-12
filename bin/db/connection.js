"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = process.env.NODE_ENV || 'development';
const knex_1 = __importDefault(require("knex"));
const config = require('../../knexfile.js')[environment];
module.exports = knex_1.default(config);
//# sourceMappingURL=connection.js.map