"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.get('/', async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'success'
    };
});
module.exports = router;
//# sourceMappingURL=index.js.map