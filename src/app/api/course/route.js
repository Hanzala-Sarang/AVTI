import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Configure nodemailer with SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use TLS (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Correct path to the image in your Next.js public folder
    const imagePath = path.resolve("public", "assets", "course-image.jpg");
    const image = fs.readFileSync(imagePath); // Read the image file

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Course Enquiry: <span style="color: #204099;">ECCE Teacher Training</span></h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Course:</strong> ECCE Teacher Training</p>
          <br />
          <img src="cid:footerLogo" alt="loadibng..." style="width: 100%; max-width: 500px; border-radius: 10px;" />
        </div>
      `,
      attachments: [
        {
          filename: "course-image.jpg",  // Don't include the leading slash here
          content: image,
          cid: "footerLogo", // This CID will be referenced in the HTML
        }
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Enquiry sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 500 });
  }
}
