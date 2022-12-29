"use strict";
// Description: This file contains the app model
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
const express_1 = __importDefault(require("express"));
// Import the cors module
const cors_1 = __importDefault(require("cors"));
// Import the message router
const messageRoute_1 = __importDefault(require("../routes/v1/messageRoute"));
// Create the app model class
class AppModel {
    // Create the constructor where the middlewares and routes are called
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.middlewares();
        this.routes();
    }
    // Create the middlewares method
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    // Create the routes method
    routes() {
        this.app.use('/api/v1/message', messageRoute_1.default);
    }
    // Create the listen method
    listen() {
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }
}
exports.default = AppModel;
