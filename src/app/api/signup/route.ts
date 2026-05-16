import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, organization, interest } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const airtableBase = process.env.AIRTABLE_BASE_ID;
  const airtableKey = process.env.AIRTABLE_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  // Save to Airtable
  if (airtableBase && airtableKey) {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${airtableBase}/Leads`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Name: name,
            Email: email,
            "Organization / Role": organization || "",
            "Interest Area": Array.isArray(interest) ? interest.join(", ") : interest || "",
            "Submitted At": new Date().toISOString(),
          },
        }),
      }
    );

    if (!airtableRes.ok) {
      const err = await airtableRes.text();
      console.error("Airtable error:", err);
      return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
    }
  }

  // Send notification email via Resend
  if (resendKey) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "EDVAULT <noreply@edvault.org>",
        to: ["team@edvault.org"],
        subject: `New interest from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization / Role:</strong> ${organization || "—"}</p>
          <p><strong>Interest:</strong> ${Array.isArray(interest) ? interest.join(", ") : interest || "—"}</p>
        `,
      }),
    });
  }

  return NextResponse.json({ success: true });
}
