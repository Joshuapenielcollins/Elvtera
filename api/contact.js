import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY);
const SALES_EMAIL = process.env.SALES_EMAIL || process.env.VITE_SALES_EMAIL || 'hello@elvtera.com';
const GENERAL_EMAIL = process.env.GENERAL_EMAIL || process.env.VITE_GENERAL_EMAIL || 'hello@elvtera.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { type = 'contact' } = body;

    if (type === 'careers') {
      const { name, email, role, portfolio, note, resumeName } = body;
      const { data, error } = await resend.emails.send({
        from: 'Elvtera Careers <hello@elvtera.com>',
        to: [GENERAL_EMAIL],
        reply_to: email,
        subject: `[Career Application] ${name} — ${role}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0B0F19; line-height: 1.6;">
            <div style="border-bottom: 2px solid #0546F2; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #0B0F19; font-size: 20px;">ELVTERA • New Career Application</h2>
              <p style="margin: 4px 0 0; color: #64748B; font-size: 13px;">Role: ${role}</p>
            </div>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Portfolio / Profile:</strong> ${portfolio || 'N/A'}</p>
            <p><strong>Resume:</strong> ${resumeName || 'Uploaded'}</p>
            <p><strong>Candidate Note:</strong></p>
            <div style="background:#F4F5F7;padding:12px;border-radius:6px;">${note || 'N/A'}</div>
          </div>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({ success: true, data });
    }

    // Default: contact / partnership brief
    const { name, email, company, phone, intent, message } = body;
    const { data, error } = await resend.emails.send({
      from: 'Elvtera Enquiries <hello@elvtera.com>',
      to: [SALES_EMAIL],
      reply_to: email,
      subject: `[Elvtera Intake] New Brief from ${name} — ${company || 'Direct'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0B0F19; line-height: 1.6;">
          <div style="border-bottom: 2px solid #0546F2; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0B0F19; font-size: 20px;">ELVTERA • Direct Partnership Intake</h2>
            <p style="margin: 4px 0 0; color: #64748B; font-size: 13px;">New Operational Brief Submitted</p>
          </div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Intent:</strong> ${intent || 'Strategy Call'}</p>
          <p><strong>Project Brief:</strong></p>
          <div style="background:#F4F5F7;padding:12px;border-radius:6px;">${message || 'N/A'}</div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err.message });
  }
}
