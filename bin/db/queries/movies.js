"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
function getAllMovies() {
    return connection_1.default('movies')
        .select('*');
}
exports.getAllMovies = getAllMovies;
function getSingleMovie(id) {
    return connection_1.default('movies')
        .select('*')
        .where({ id: parseInt(id) });
}
exports.getSingleMovie = getSingleMovie;
function addMovie(movie) {
    return connection_1.default('movies')
        .insert(movie)
        .returning('*');
}
exports.addMovie = addMovie;
function updateMovie(id, movie) {
    return connection_1.default('movies')
        .update(movie)
        .where({ id: parseInt(id) })
        .returning('*');
}
exports.updateMovie = updateMovie;
function deleteMovie(id) {
    return connection_1.default('movies')
        .del()
        .where({ id: parseInt(id) })
        .returning('*');
}
exports.deleteMovie = deleteMovie;
//# sourceMappingURL=movies.js.map