// This is your backend. It receives the contact form submission and sends the email to your inbox.
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body || {};

    // Validate fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all fields.",
      });
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid information.",
      });
    }

    // SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: "New Contact Form Message",
      text: `
New message from your website.

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });

  } catch (error) {
    console.error("Contact email error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
}
