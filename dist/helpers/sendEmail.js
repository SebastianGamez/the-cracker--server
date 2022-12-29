"use strict";
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
// Importing the FormType type and the email library
const nodemailer_1 = __importDefault(require("nodemailer"));
// This function will send the email and returns a boolean
const sendEmail = ({ name, email, message }) => __awaiter(void 0, void 0, void 0, function* () {
    // Variable to send if the email was sent
    let sent;
    // Get the email and password from the environment variables
    const account = {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    };
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer_1.default.createTransport({
        service: 'hotmail',
        auth: {
            user: account.user,
            pass: account.pass
        },
    });
    // send mail with defined transport object
    try {
        yield transporter.sendMail({
            from: account.user,
            to: "juan.gamez1001@gmail.com",
            subject: `${name} wants contact you`,
            text: `From ${email}:\n${message}`
        });
        // If the email was sent, set the sent variable to true
        sent = true;
    }
    catch (err) {
        // If the email was not sent, set the sent variable to false and show the error
        console.log(err);
        sent = false;
    }
    // Return the sent variable
    return sent;
});
exports.default = sendEmail;
