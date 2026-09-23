import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function Contact() {
  const { data, showToast } = usePortfolio();

  const contacts = [
    {
      id: 'whatsapp',
      platform: 'WhatsApp',
      value: data.whatsappDisplay || '+91 9080642937',
      raw: data.whatsapp || '9080642937',
      href: `https://wa.me/91${data.whatsapp || '9080642937'}?text=Hi%20Gokul Prasath`,
      actionText: 'Chat on WhatsApp',
      isExternal: true
    },
    {
      id: 'email',
      platform: 'Email',
      value: data.email || 'gokulm3127@gmail.com',
      raw: data.email || 'gokulm3127@gmail.com',
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.email || 'gokulm3127@gmail.com')}&su=${encodeURIComponent('Hi Gokul Prasath')}`,
      actionText: 'Send an Email',
      isExternal: true
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      value: data.linkedin || 'gokul-prasath-559207318',
      raw: data.linkedinUrl || 'https://www.linkedin.com/in/gokul-prasath-559207318/',
      href: data.linkedinUrl || 'https://www.linkedin.com/in/gokul-prasath-559207318/',
      actionText: 'Connect on LinkedIn',
      isExternal: true
    }
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard?.writeText(text);
    showToast(`Copied ${label} to clipboard`);
  };

  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="contact-head">
          <span className="eyebrow mono">Contact Page</span>
          <h2>
            Let’s make it
            <br />
            <em>move.</em>
          </h2>
          <p>
            Have an edit, commercial, or story in mind? Reach out directly via WhatsApp,
            Email, or LinkedIn.
          </p>
        </div>

        {/* Vertically stacked single-line contact cards */}
        <div className="contact-cards-list">
          {contacts.map((c) => (
            <div className="contact-card-item" key={c.id}>
              <div className="contact-card-info">
                <span className="contact-card-label mono">{c.platform}</span>
                <a
                  href={c.href}
                  target={c.isExternal ? '_blank' : undefined}
                  rel={c.isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-card-value"
                >
                  {c.value}
                </a>
              </div>

              <div className="contact-card-actions">
                <button
                  type="button"
                  className="copy-btn mono"
                  onClick={() => handleCopy(c.raw, c.platform)}
                  aria-label={`Copy ${c.platform}`}
                >
                  Copy
                </button>
                <a
                  href={c.href}
                  target={c.isExternal ? '_blank' : undefined}
                  rel={c.isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-action-link"
                >
                  <span>{c.actionText}</span>
                  <span className="action-arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
