import { Link } from 'react-router-dom'
import { store } from '../data/store'
import './Home.css'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner fade-up">
          <div className="hero-copy">
            <p className="hero-kicker">New franchise · Chaitanya Vihar, Kanpur</p>
            <div className="brand-word hero-brand">
              <span className="dava">dava</span>
              <span className="india">india</span>
              <span className="brand-sub">Generic Pharmacy</span>
            </div>
            <h1>{store.tagline}</h1>
            <p>{store.subtitle}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`tel:${store.phone}`}>
                Call {store.phoneDisplay}
              </a>
              <Link className="btn btn-ghost" to="/products">
                Browse products
              </Link>
            </div>
          </div>

          <div className="hero-panel" aria-label="Store highlights">
            <p className="hero-panel-save">Save up to</p>
            <p className="hero-panel-percent">90%*</p>
            <p className="hero-panel-copy">on your medicine bill at our Kanpur store</p>
            <ul className="hero-panel-points">
              <li>Free home delivery</li>
              <li>WHO-certified quality</li>
              <li>Open daily · {store.hours}</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="category-strip">
        <div className="container">
          {store.categories.map((item) => (
            <Link className="category-chip" key={item.slug} to={`/products/${item.slug}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="section-tight stats">
        <div className="container stats-grid">
          {store.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container promo-grid">
          <div className="promo-copy">
            <p className="eyebrow">Why choose us</p>
            <h2 className="section-title">{store.savingsHeadline}</h2>
            <p className="section-copy">
              Quality-assured generic medicines from a trusted national chain — now open at
              Chaitanya Vihar, Kalyanpur. Also available: Khadi India products, Ayurvedic range,
              and free home delivery.
            </p>
            <ul className="trust-list">
              {store.trust.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/products/medicines">
                View medicines
              </Link>
              <a
                className="btn btn-secondary"
                href={`https://wa.me/${store.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp enquiry
              </a>
            </div>
          </div>
          <div className="promo-visual">
            <img src="/images/dhoni-trust.png" alt="Davaindia trusted generic pharmacy" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">What we offer</p>
          <h2 className="section-title">Click a category to explore</h2>
          <p className="section-copy">
            Prescription medicines, daily wellness, personal care, and surgical essentials —
            browse each aisle below.
          </p>
          <div className="category-grid">
            {store.categories.map((item) => (
              <Link className="category-item" key={item.slug} to={`/products/${item.slug}`}>
                <strong>{item.label}</strong>
                <span>View products in this aisle →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Price comparison</p>
          <h2 className="section-title">See how much you can save</h2>
          <p className="section-copy">
            Average Davaindia prices vs typical market rates. Actual prices may vary. *T&amp;C
            apply.
          </p>
          <div className="savings-table-wrap">
            <table className="savings-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Davaindia</th>
                  <th>Market</th>
                  <th>Savings</th>
                </tr>
              </thead>
              <tbody>
                {store.savings.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td>{row.dava}</td>
                    <td>{row.market}</td>
                    <td className="save">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="visit-band">
            <div>
              <h2>Visit our new Kanpur franchise</h2>
              <p>
                Proprietor {store.proprietor} · {store.address.full}
              </p>
              <p style={{ marginTop: '0.55rem' }}>{store.delivery} available in nearby areas.</p>
            </div>
            <div className="visit-actions">
              <a className="btn btn-secondary" href={`tel:${store.phone}`}>
                {store.phoneDisplay}
              </a>
              <Link className="btn btn-ghost" to="/contact">
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Store gallery</p>
          <h2 className="section-title">From our shop materials</h2>
          <div className="gallery">
            <figure>
              <img src="/images/business-card.png" alt="Store visiting card" />
              <figcaption>Proprietor &amp; contact card</figcaption>
            </figure>
            <figure>
              <img src="/images/khadi-banners.png" alt="Khadi India product range" />
              <figcaption>Khadi India &amp; wellness</figcaption>
            </figure>
            <figure>
              <img src="/images/care-categories.png" alt="Personal care categories" />
              <figcaption>Face, hair, baby &amp; more</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
