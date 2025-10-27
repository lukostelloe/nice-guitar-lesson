// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime

const resendApiKey = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not set");
}
if (!TO_EMAIL) {
  throw new Error("CONTACT_TO_EMAIL is not set");
}

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    // Honeypot (spam trap)
    if (website) return NextResponse.json({ ok: true });

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contact Form <contact@niceguitarlesson.com>", // must be on your verified domain
      to: [TO_EMAIL!],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Contact form error:", err);
    const message = err instanceof Error ? err.message : "Failed to send";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
