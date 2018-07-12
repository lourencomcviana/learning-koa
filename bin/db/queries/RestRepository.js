"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
class RestRepository {
    constructor(objectName) {
        this.objectName = objectName;
    }
    get(id) {
        if (id) {
            connection_1.default(this.objectName)
                .select('*');
        }
        else {
            connection_1.default(this.objectName)
                .select('*')
                .where({ id: id });
        }
    }
    post(movie) {
        return connection_1.default(this.objectName)
            .insert(movie)
            .returning('*');
    }
    put(movie) {
        return connection_1.default(this.objectName)
            .update(movie)
            .returning('*');
    }
    delete(id) {
        // return knex()
        // .delete({id:id})
        // .returning('*');
    }
}
exports.RestRepository = RestRepository;
//# sourceMappingURL=RestRepository.js.map