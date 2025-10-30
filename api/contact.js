import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

function validateEmail(value) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(value)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const { name, email, organization, message, source } = req.body || {}

    // Basic server-side validation
    if (!email || !message) return res.status(400).json({ error: 'Missing required fields: email and message' })
    if (typeof email !== 'string' || !validateEmail(email)) return res.status(400).json({ error: 'Invalid email' })
    if (typeof message !== 'string' || message.trim().length === 0) return res.status(400).json({ error: 'Message is required' })
    if (message.length > 10000) return res.status(400).json({ error: 'Message too long' })

    const from = process.env.FROM_EMAIL || 'no-reply@tripcostscalc.online'
    const to = process.env.TO_EMAIL || 'hello.tripcostscalc@gmail.com'

    const subject = `[Partnership] ${organization || name || 'New inquiry'}`
    const safe = (s) => (typeof s === 'string' ? s.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '-')
    const text = `Name: ${safe(name)}\nEmail: ${safe(email)}\nOrg: ${safe(organization)}\nSource: ${safe(source)}\n\n${safe(message)}`
    const html = `<p><strong>Name:</strong> ${safe(name)}</p><p><strong>Email:</strong> ${safe(email)}</p><p><strong>Org:</strong> ${safe(organization)}</p><p><strong>Source:</strong> ${safe(source)}</p><hr/><p>${safe(message)}</p>`

    // Ensure API key present
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY not configured')
      return res.status(500).json({ error: 'Server not configured' })
    }

    await sendgrid.send({
      to,
      from,
      subject,
      text,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('send failed', err)
    return res.status(500).json({ error: 'send-failed' })
  }
}
