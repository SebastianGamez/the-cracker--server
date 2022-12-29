// Description: This file contains the app model

// Import the express module
import express, { Application } from "express"

// Import the cors module
import cors from 'cors';

// Import the message router
import messageRouter from "../routes/v1/messageRoute";


// Create the app model class
class AppModel {
    
    // Create the app and port properties
    private app: Application;
    private port: string;

    // Create the constructor where the middlewares and routes are called
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT || "3000";

        this.middlewares();
        this.routes();

    }
    
    // Create the middlewares method
    public middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    // Create the routes method
    public routes(): void {
        this.app.use('/api/v1/message', messageRouter);
    }

    // Create the listen method
    public listen(): void {
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }

}

export default AppModel;