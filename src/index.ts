// Description: This is the entry point of the application

// Import the dotenv module
import * as dotenv from 'dotenv';
dotenv.config()

// Import the app model
import AppModel from './models/appModel';

// Create an instance of the app model
const app = new AppModel();

// Start the server
app.listen();