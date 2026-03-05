import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, country, interest, message, _honey } = body;

    // Honeypot check
    if (_honey) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail =
      process.env.CONTACT_EMAIL || "info@regulatorycounsel.co.uk";

    const lines = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      country ? `Country: ${country}` : null,
      interest ? `Area of Interest: ${interest}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    // Send notification to team
    await resend.emails.send({
      from: "Regulatory Counsel Website <noreply@regulatorycounsel.co.uk>",
      to: contactEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: lines,
    });

    // Send confirmation to enquirer
    await resend.emails.send({
      from: "Regulatory Counsel <noreply@regulatorycounsel.co.uk>",
      to: email,
      subject: "Thank you for contacting Regulatory Counsel",
      text: [
        `Dear ${name},`,
        "",
        "Thank you for contacting Regulatory Counsel. We have received your enquiry and a member of our team will respond within 24 hours on business days.",
        "",
        "If your matter is urgent, please call us on 020 7873 2077.",
        "",
        "Kind regards,",
        "Regulatory Counsel",
        "2 Frederick Street, London WC1X 0ND",
        "info@regulatorycounsel.co.uk",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
