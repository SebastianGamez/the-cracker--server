"use strict";
// Description: This file contains the message route
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
const express_1 = __importDefault(require("express"));
// Import the message controller
const messageController_1 = __importDefault(require("../../controllers/messageController"));
// Create an express router
const MessageRouter = express_1.default.Router();
// Create an instance of the message controller
const { sendMessage } = new messageController_1.default();
// Create the route
MessageRouter.post("/contact", sendMessage);
// Export the router
exports.default = MessageRouter;
