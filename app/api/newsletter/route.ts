import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "hello@emes3ye.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body as { email: string };

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      // Dev mode: log and return success without calling Resend
      console.log(`[Newsletter] Would subscribe: ${email}`);
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Add contact to Resend audience
    if (AUDIENCE_ID) {
      await resend.contacts.create({
        email: email.trim(),
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });
    }

    // Send welcome email
    await resend.emails.send({
      from: `Shafiul Islam <${FROM_EMAIL}>`,
      to: email.trim(),
      subject: "Welcome — you're on the list",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; color: #1A1A1A;">
          <h1 style="font-size: 28px; font-weight: 800; margin-bottom: 16px;">Welcome aboard.</h1>
          <p style="font-size: 16px; color: #6B7280; line-height: 1.6; margin-bottom: 16px;">
            Thanks for subscribing. You'll hear from me when I have something worth sharing — thoughts on halal finance, tech, and building meaningful things.
          </p>
          <p style="font-size: 16px; color: #6B7280; line-height: 1.6; margin-bottom: 32px;">
            No spam. No noise. Just signal.
          </p>
          <p style="font-size: 14px; color: #6B7280;">
            — Shafiul
          </p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 32px 0;" />
          <p style="font-size: 12px; color: #9CA3AF;">
            You subscribed at emes3ye.com. Reply to this email to unsubscribe.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
