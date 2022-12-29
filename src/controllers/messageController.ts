// Description: This file contains the controller for the message route

// Import the express module
import { Request, Response } from "express";

// Import the sendEmail function
import sendEmail from "../helpers/sendEmail";

// Import the FormType type
import FormType from "../types/formType";


// Create the message controller class
class MessageController {


    // Create the send message function
    public async sendMessage(req: Request, res: Response): Promise<void>{
        
        
        // Get the data from the request body
        const {name, email, message}: FormType = req.body;
        
        // Create the data object
        const data = { name: name, email: email, message: message };

        // Receive a response then of send the email
        const response: boolean = await sendEmail(data)

        // If the email was sent, return a 200 status code
        if(response) res.status(200).json({ message: "Email sent" });

        // If the email was not sent, return a 500 status code
        else res.status(500).json({ message: "Email not sent" });

    }

}

// Export the message controller
export default MessageController;