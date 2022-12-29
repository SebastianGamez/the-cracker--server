// Description: This file contains the message route

// Import the express module
import express from "express";

// Import the message controller
import MessageController from "../../controllers/messageController";

// Create an express router
const MessageRouter = express.Router();

// Create an instance of the message controller
const { sendMessage } = new MessageController();

// Create the route
MessageRouter.post("/contact", sendMessage);

// Export the router
export default MessageRouter;