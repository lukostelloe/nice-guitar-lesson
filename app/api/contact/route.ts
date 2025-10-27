// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !TO_EMAIL) {
      return NextResponse.json(
        { ok: false, error: "Server email not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { name, email, message, website } = await req.json();

    if (website) return NextResponse.json({ ok: true }); // honeypot
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Nice Guitar Lesson <contact@niceguitarlesson.com>",
      to: [TO_EMAIL],
      subject: `New message from ${name}`,
      replyTo: email, // camelCase
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to send";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
