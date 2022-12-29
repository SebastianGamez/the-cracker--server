// Importing the FormType type and the email library
import nodemailer from "nodemailer";
import FormType from "../types/formType";

// This function will send the email and returns a boolean
const sendEmail = async({name, email, message}: FormType): Promise<boolean> => {

    // Variable to send if the email was sent
    let sent: boolean;

    // Get the email and password from the environment variables
    const account: {user: string | undefined, pass: string | undefined} = {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: account.user,
        pass: account.pass
      },
    });

    // send mail with defined transport object
    try{
      
      await transporter.sendMail({
        from: account.user,
        to: "juan.gamez1001@gmail.com",
        subject: `${name} wants contact you`,
        text: `From ${email}:\n${message}`
      });

      // If the email was sent, set the sent variable to true
      sent = true;
      
    }catch(err){
      
      // If the email was not sent, set the sent variable to false and show the error
      console.log(err);
      sent = false;
    }

    // Return the sent variable
    return sent;

}

export default sendEmail;