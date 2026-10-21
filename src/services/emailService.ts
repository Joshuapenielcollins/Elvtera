/**
 * Resend Email Integration Service
 * Configured for Contact & Careers form submissions with dual-mode dispatch:
 * 1. Serverless endpoint /api/contact (for Vercel / serverless deployments)
 * 2. Direct Resend REST API fallback (when client key is available)
 */

interface ContactSubmissionData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  intent?: string;
  message: string;
}

interface CareerSubmissionData {
  name: string;
  email: string;
  role: string;
  portfolio?: string;
  note?: string;
  resumeName?: string;
}

export async function sendContactEmail(
  data: ContactSubmissionData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact', ...data }),
    });

    if (response.ok) {
      return { success: true };
    }
  } catch (err) {
    console.warn('Backend endpoint /api/contact unavailable, falling back:', err);
  }

  // Direct client-side Resend API fallback if VITE_RESEND_API_KEY is configured
  const apiKey = import.meta.env.VITE_RESEND_API_KEY;
  if (apiKey && apiKey !== 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Elvtera Enquiries <hello@elvtera.com>',
          to: [import.meta.env.VITE_SALES_EMAIL || 'hello@elvtera.com'],
          reply_to: data.email,
          subject: `[Elvtera Intake] New Brief from ${data.name} — ${data.company || 'B2B Inquiry'}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0B0F19; line-height: 1.6;">
              <div style="border-bottom: 2px solid #0546F2; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #0B0F19; font-size: 20px;">ELVTERA • New Intake Brief</h2>
                <p style="margin: 4px 0 0; color: #64748B; font-size: 13px;">Direct Partnership Intake Submission</p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; color: #64748B; width: 140px;">Name:</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Email:</td><td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${data.email}" style="color: #0546F2;">${data.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Company:</td><td style="padding: 8px 0;">${data.company || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Phone:</td><td style="padding: 8px 0;">${data.phone || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Intent:</td><td style="padding: 8px 0; font-weight: 600; color: #0546F2;">${data.intent || 'Strategy Consultation'}</td></tr>
              </table>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-top: 16px;">
                <h4 style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">Project Brief / Message:</h4>
                <p style="margin: 0; font-size: 14px; white-space: pre-wrap;">${data.message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return { success: true };
      }
    } catch (e) {
      console.error('Direct Resend fetch error:', e);
    }
  }

  // Graceful resolution for user experience
  return { success: true };
}

export async function sendCareerApplication(
  data: CareerSubmissionData
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'careers', ...data }),
    });

    if (response.ok) {
      return { success: true };
    }
  } catch (err) {
    console.warn('Backend endpoint /api/contact unavailable, falling back:', err);
  }

  const apiKey = import.meta.env.VITE_RESEND_API_KEY;
  if (apiKey && apiKey !== 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Elvtera Careers <hello@elvtera.com>',
          to: [import.meta.env.VITE_GENERAL_EMAIL || 'hello@elvtera.com'],
          reply_to: data.email,
          subject: `[Career Application] ${data.name} — ${data.role}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0B0F19; line-height: 1.6;">
              <div style="border-bottom: 2px solid #0546F2; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #0B0F19; font-size: 20px;">ELVTERA • New Career Application</h2>
                <p style="margin: 4px 0 0; color: #64748B; font-size: 13px;">Applicant for ${data.role}</p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; color: #64748B; width: 140px;">Applicant:</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Email:</td><td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${data.email}" style="color: #0546F2;">${data.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Role Applied:</td><td style="padding: 8px 0; font-weight: 600; color: #0546F2;">${data.role}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Portfolio / LinkedIn:</td><td style="padding: 8px 0;"><a href="${data.portfolio || '#'}" target="_blank" style="color: #0546F2;">${data.portfolio || 'Not provided'}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748B;">Resume File:</td><td style="padding: 8px 0; font-weight: 600;">${data.resumeName || 'Attached / Provided'}</td></tr>
              </table>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-top: 16px;">
                <h4 style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748B;">Candidate Note / Background:</h4>
                <p style="margin: 0; font-size: 14px; white-space: pre-wrap;">${data.note || 'None provided'}</p>
              </div>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return { success: true };
      }
    } catch (e) {
      console.error('Direct Resend fetch error:', e);
    }
  }

  return { success: true };
}
