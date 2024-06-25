import { Request, Response, NextFunction } from "express";
import { generateHtml } from "../utils/emaiLHtml";
import { config } from "dotenv";
import nodemailer from "nodemailer";

config();

function sendEmails(request: Request, response: Response, next: NextFunction) {
  const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  smtp
    .sendMail({
      from: process.env.EMAIL_USER,
      to: request.body.email,
      subject: "Easy Email update Password",
      text: "Go to page for changing your password",
      html: generateHtml(request.body.email),
    })
    .then((message) => {
      response.json({ message: `Email sent: ${message.response}` });
    })
    .catch((error) => {
      response.status(500).json({ message: `Error - ${error.message}` });
    });
}

export { sendEmails };
