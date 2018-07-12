"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const koa_router_1 = __importDefault(require("koa-router"));
const movies_1 = require("../db/queries/movies");
const router = new koa_router_1.default();
const BASE_URL = `/api/v1/movies`;
router.get(BASE_URL, async (ctx) => {
    try {
        const movies = await movies_1.getAllMovies();
        ctx.body = {
            status: 'success',
            data: movies
        };
    }
    catch (err) {
        ctx.body = {
            status: 'error',
            data: err
        };
        console.log(err);
    }
});
router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const movie = await movies_1.getSingleMovie(ctx.params.id);
        if (movie.length) {
            ctx.body = {
                status: 'success',
                data: movie
            };
        }
        else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That movie does not exist.'
            };
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.post(`${BASE_URL}`, async (ctx) => {
    try {
        const movie = await movies_1.addMovie(ctx.request.body);
        if (movie.length) {
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                data: movie
            };
        }
        else {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                message: 'Something went wrong.'
            };
        }
    }
    catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
});
router.put(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const movie = await movies_1.updateMovie(ctx.params.id, ctx.request.body);
        if (movie.length) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: movie
            };
        }
        else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That movie does not exist.'
            };
        }
    }
    catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
});
router.delete(`${BASE_URL}/:id`, async (ctx) => {
    try {
        const movie = await movies_1.deleteMovie(ctx.params.id);
        if (movie.length) {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: movie
            };
        }
        else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That movie does not exist.'
            };
        }
    }
    catch (err) {
        ctx.status = 400;
        ctx.body = {
            status: 'error',
            message: err.message || 'Sorry, an error has occurred.'
        };
    }
});
module.exports = router;
//# sourceMappingURL=movies.js.map