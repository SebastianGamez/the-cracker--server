"use strict";
// Description: This file contains the controller for the message route
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the sendEmail function
const sendEmail_1 = __importDefault(require("../helpers/sendEmail"));
// Create the message controller class
class MessageController {
    // Create the send message function
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the data from the request body
            const { name, email, message } = req.body;
            // Create the data object
            const data = { name: name, email: email, message: message };
            // Receive a response then of send the email
            const response = yield (0, sendEmail_1.default)(data);
            // If the email was sent, return a 200 status code
            if (response)
                res.status(200).json({ message: "Email sent" });
            // If the email was not sent, return a 500 status code
            else
                res.status(500).json({ message: "Email not sent" });
        });
    }
}
// Export the message controller
exports.default = MessageController;
