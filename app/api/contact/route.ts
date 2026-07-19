import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Safely gets a string from FormData. */
function get(fd: FormData, key: string): string {
  return (fd.get(key) as string | null)?.trim() ?? "";
}

/** Builds a professional dark-themed HTML email for the sales team. */
function buildSalesEmail(data: Record<string, string>): string {
  const brand = "#FF4204";
  const bg = "#0f172a";
  const surface = "#1e293b";
  const muted = "#94a3b8";
  const text = "#e2e8f0";

  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;width:160px;font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:${text};vertical-align:top;border-left:1px solid #334155;">${value}</td>
        </tr>`
      : "";

  const services = data.services
    ? data.services
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map(
          (s) =>
            `<span style="display:inline-block;margin:2px;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:600;background:${brand}22;color:${brand};border:1px solid ${brand}44;">${s}</span>`
        )
        .join("")
    : "—";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Sales Enquiry — ELVTERA</title></head>
<body style="margin:0;padding:0;background:${bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${bg};padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        
        <!-- Header -->
        <tr><td style="background:${surface};border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:3px solid ${brand};">
          <table width="100%"><tr>
            <td>
              <div style="font-size:20px;font-weight:800;color:#fff;letter-spacing:-.03em;">ELVTERA</div>
              <div style="font-size:12px;color:${muted};margin-top:2px;">E-Solutions</div>
            </td>
            <td align="right">
              <div style="display:inline-block;padding:6px 16px;border-radius:999px;background:${brand}22;border:1px solid ${brand};font-size:12px;font-weight:700;color:${brand};">NEW SALES ENQUIRY</div>
            </td>
          </tr></table>
        </td></tr>

        <!-- Hero row -->
        <tr><td style="background:${bg};padding:32px 40px 0;">
          <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-.03em;">New project enquiry</div>
          <div style="font-size:14px;color:${muted};margin-top:6px;">Submitted ${data.submittedAt} · Reply within 1 business day</div>
        </td></tr>

        <!-- Contact block -->
        <tr><td style="background:${bg};padding:24px 40px 0;">
          <div style="font-size:11px;font-weight:700;color:${muted};text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;">Contact</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:${surface};border-radius:12px;border:1px solid #334155;overflow:hidden;">
            ${row("Full Name", data.name)}
            ${row("Company", data.company)}
            ${row("Work Email", `<a href="mailto:${data.email}" style="color:${brand};">${data.email}</a>`)}
            ${row("Phone", data.phone || "—")}
          </table>
        </td></tr>

        <!-- Project block -->
        <tr><td style="background:${bg};padding:24px 40px 0;">
          <div style="font-size:11px;font-weight:700;color:${muted};text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;">Project Details</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:${surface};border-radius:12px;border:1px solid #334155;overflow:hidden;">
            <tr>
              <td style="padding:12px 16px;font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:.06em;vertical-align:top;width:160px;">Services</td>
              <td style="padding:12px 16px;font-size:14px;color:${text};border-left:1px solid #334155;">${services}</td>
            </tr>
            ${row("Industry", data.industry)}
            ${row("Company Size", data.companySize)}
            ${row("Current Website", data.website || "—")}
          </table>
        </td></tr>

        <!-- Description block -->
        ${
          data.description
            ? `<tr><td style="background:${bg};padding:24px 40px 0;">
            <div style="font-size:11px;font-weight:700;color:${muted};text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;">Project Description</div>
            <div style="background:${surface};border-radius:12px;border:1px solid #334155;padding:20px;font-size:14px;color:${text};line-height:1.7;">${data.description.replace(/\n/g, "<br>")}</div>
          </td></tr>`
            : ""
        }

        <!-- Qualification block -->
        <tr><td style="background:${bg};padding:24px 40px 0;">
          <div style="font-size:11px;font-weight:700;color:${muted};text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;">Qualification</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:${surface};border-radius:12px;border:1px solid #334155;overflow:hidden;">
            ${row("Budget", data.budget)}
            ${row("Timeline", data.timeline)}
            ${row("Source", data.source || "—")}
            ${row("Currency", data.currency || "INR")}
          </table>
        </td></tr>

        <!-- Meta block -->
        <tr><td style="background:${bg};padding:24px 40px;">
          <div style="font-size:11px;font-weight:700;color:${muted};text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;">Submission Meta</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:${surface};border-radius:12px;border:1px solid #334155;overflow:hidden;">
            ${row("Timestamp", data.submittedAt)}
            ${row("IP Address", data.ip || "Unknown")}
            ${row("User Agent", data.userAgent ? `<span style="font-size:12px;">${data.userAgent}</span>` : "—")}
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:${surface};border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid #334155;">
          <p style="margin:0;font-size:12px;color:${muted};text-align:center;">
            This email was generated automatically by the ELVTERA enquiry system.<br>
            Reply directly to this email to contact <strong style="color:${text};">${data.email}</strong>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/** Builds a clean HTML email for general enquiries. */
function buildGeneralEmail(data: Record<string, string>): string {
  const brand = "#FF4204";
  const bg = "#0f172a";
  const surface = "#1e293b";
  const muted = "#94a3b8";
  const text = "#e2e8f0";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>General Enquiry — ELVTERA</title></head>
<body style="margin:0;padding:0;background:${bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${bg};padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr><td style="background:${surface};border-radius:16px 16px 0 0;padding:32px 40px;border-bottom:3px solid ${brand};">
          <table width="100%"><tr>
            <td>
              <div style="font-size:20px;font-weight:800;color:#fff;letter-spacing:-.03em;">ELVTERA</div>
              <div style="font-size:12px;color:${muted};margin-top:2px;">E-Solutions</div>
            </td>
            <td align="right">
              <div style="display:inline-block;padding:6px 16px;border-radius:999px;background:#33415544;border:1px solid #475569;font-size:12px;font-weight:700;color:${muted};">GENERAL ENQUIRY</div>
            </td>
          </tr></table>
        </td></tr>

        <tr><td style="background:${bg};padding:32px 40px 0;">
          <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-.03em;">New message from ${data.name}</div>
          <div style="font-size:14px;color:${muted};margin-top:6px;">Submitted ${data.submittedAt}</div>
        </td></tr>

        <tr><td style="background:${bg};padding:24px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:${surface};border-radius:12px;border:1px solid #334155;overflow:hidden;">
            <tr>
              <td style="padding:10px 16px;width:100px;font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">Name</td>
              <td style="padding:10px 16px;font-size:14px;color:${text};border-left:1px solid #334155;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding:10px 16px;font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">Email</td>
              <td style="padding:10px 16px;font-size:14px;border-left:1px solid #334155;"><a href="mailto:${data.email}" style="color:${brand};">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 16px;font-size:12px;font-weight:600;color:${muted};text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">Subject</td>
              <td style="padding:10px 16px;font-size:14px;color:${text};border-left:1px solid #334155;">${data.subject}</td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="background:${bg};padding:24px 40px;">
          <div style="font-size:11px;font-weight:700;color:${muted};text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;">Message</div>
          <div style="background:${surface};border-radius:12px;border:1px solid #334155;padding:20px;font-size:14px;color:${text};line-height:1.7;">${data.message.replace(/\n/g, "<br>")}</div>
        </td></tr>

        <tr><td style="background:${surface};border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid #334155;">
          <p style="margin:0;font-size:12px;color:${muted};text-align:center;">
            This email was generated automatically by the ELVTERA enquiry system.<br>
            Reply directly to this email to contact <strong style="color:${text};">${data.email}</strong>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const type = get(fd, "type"); // "sales" | "general"
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    const userAgent = req.headers.get("user-agent") ?? "";
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    }) + " IST";

    if (type === "sales") {
      const name = get(fd, "name");
      const company = get(fd, "company");
      const email = get(fd, "email");

      if (!name || !company || !email) {
        return NextResponse.json(
          { error: "Missing required fields." },
          { status: 400 }
        );
      }

      const data = {
        name,
        company,
        email,
        phone: get(fd, "phone"),
        services: get(fd, "services"),
        industry: get(fd, "industry"),
        companySize: get(fd, "companySize"),
        website: get(fd, "website"),
        description: get(fd, "description"),
        budget: get(fd, "budget"),
        timeline: get(fd, "timeline"),
        source: get(fd, "source"),
        currency: get(fd, "currency"),
        ip,
        userAgent,
        submittedAt,
      };

      const { error } = await resend.emails.send({
        from: "ELVTERA Enquiries <onboarding@resend.dev>",
        to: process.env.SALES_EMAIL ?? "sales@elvtera.com",
        replyTo: email,
        subject: `New Project Enquiry: ${company} — ${data.services || "General"}`,
        html: buildSalesEmail(data),
      });

      if (error) {
        console.error("Resend error (sales):", error);
        return NextResponse.json(
          { error: "Failed to send email. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    if (type === "general") {
      const name = get(fd, "name");
      const email = get(fd, "email");
      const subject = get(fd, "subject");
      const message = get(fd, "message");

      if (!name || !email || !subject || !message) {
        return NextResponse.json(
          { error: "All fields are required." },
          { status: 400 }
        );
      }

      const { error } = await resend.emails.send({
        from: "ELVTERA Enquiries <onboarding@resend.dev>",
        to: process.env.GENERAL_EMAIL ?? "hello@elvtera.com",
        replyTo: email,
        subject: `[ELVTERA] ${subject} — from ${name}`,
        html: buildGeneralEmail({ name, email, subject, message, ip, userAgent, submittedAt }),
      });

      if (error) {
        console.error("Resend error (general):", error);
        return NextResponse.json(
          { error: "Failed to send email. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
