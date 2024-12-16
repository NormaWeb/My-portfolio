import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function handler(req, res) {
    // Ensure only POST requests are allowed
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    try {
        const { email, subject, message } = req.body;

        // Validate request body
        if (!email || !subject || !message) {
            console.error("Missing required fields:", { email, subject, message });
            return res.status(400).json({ error: "Missing required fields" });
        }

        console.log("Attempting to send email with:", { email, subject, message });

        // Send email using Resend API
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ['okwongnorma@outlook.com', email],
            subject,
            html: `
                <h1>${subject}</h1>
                <p>Thank you for contacting us!</p>
                <p>New message submitted:</p>
                <p>${message}</p>
            `,
        });

        // Check for errors in the response
        if (error) {
            console.error("Resend API Error:", error);
            return res.status(400).json({ error: error.message || "Failed to send email" });
        }

        console.log("Email sent successfully:", data);
        return res.status(200).json({ message: "Email sent successfully", data });
    } catch (err) {
        console.error("Unhandled Error:", err);
        return res.status(500).json({ error: "An error occurred while sending the email." });
    }
}
