import { useState } from 'react'
import type { FormEvent } from 'react'
import { store } from '../data/store'
import './Contact.css'
import './About.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')
    const text = encodeURIComponent(
      `Hello Davaindia Kanpur,\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    )
    window.open(`https://wa.me/${store.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(store.mapQuery)}&output=embed`

  return (
    <>
      <section className="page-hero">
        <div className="container fade-up">
          <p className="eyebrow">Contact</p>
          <h1>Talk to the Kanpur store</h1>
          <p className="section-copy" style={{ marginTop: '0.85rem' }}>
            Call, WhatsApp, or drop by Shop No 11, Chaitanya Vihar — near the CNG pump on Indira
            Nagar Road.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>Store contacts</h2>
            <div className="contact-methods">
              <a href={`tel:${store.phone}`}>
                <span>Phone</span>
                <strong>{store.phoneDisplay}</strong>
              </a>
              <a
                href={`https://wa.me/${store.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>{store.phoneDisplay}</strong>
              </a>
              <a href={`mailto:${store.email}`}>
                <span>Email</span>
                <strong>{store.email}</strong>
              </a>
              <div>
                <span>Address</span>
                <strong>{store.address.full}</strong>
              </div>
              <div>
                <span>Proprietor</span>
                <strong>{store.proprietor}</strong>
              </div>
            </div>
            <div className="hours-badge">Open daily · {store.hours}</div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send an enquiry</h2>
            <div className="form-grid">
              <label>
                Your name
                <input name="name" required placeholder="Full name" />
              </label>
              <label>
                Phone
                <input name="phone" required placeholder="Mobile number" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Ask about medicines, delivery, or store timings"
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Continue on WhatsApp
              </button>
            </div>
            <p className="form-note">
              {sent
                ? 'WhatsApp should open with your message. If it did not, tap the WhatsApp button below.'
                : 'Enquiries open directly in WhatsApp for a quick reply from the store.'}
            </p>
          </form>
        </div>

        <div className="container">
          <div className="map-frame">
            <iframe
              title="Davaindia Generic Pharmacy Kanpur location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
