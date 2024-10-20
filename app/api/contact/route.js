// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // or use 465 for secure connection
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name.value}" <${email.value}>`, // Sender address
      to: process.env.NEXT_PUBLIC_EMAIL_USER, // Recipient's email
      subject: `New Contact Form Portfolio From ${name.value} ${email.value}`, // Subject line
      text: message.value, // Plain text body
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
