import { store } from '../data/store'
import './About.css'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container fade-up">
          <p className="eyebrow">About the store</p>
          <h1>
            Your neighbourhood Davaindia
            <br />
            in Chaitanya Vihar, Kanpur
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-grid">
          <article className="about-card">
            <h2 className="section-title" style={{ fontSize: '1.55rem' }}>
              {store.taglineHi}
            </h2>
            <p>
              {store.brandFull} is India’s trusted private generic pharmacy retail chain from{' '}
              {store.poweredBy}. Our new franchise at Kalyanpur brings affordable, quality
              medicines and wellness products closer to every home in Purana Kanpur.
            </p>
            <p>
              We stock prescription medicines, OTC products, Ayurvedic remedies, nutraceuticals,
              protein supplements, cosmetics, surgical items, and the Khadi India range — with
              savings of up to 90%* on medicine bills.
            </p>
            <p>
              Come visit the store, compare prices, and experience safe, reliable healthcare
              shopping with free home delivery support in nearby areas.
            </p>
            <img src="/images/business-card.png" alt="Store visiting card for Ayush Singh" />
          </article>

          <aside className="info-panel">
            <h2>Store details</h2>
            <ul className="info-list">
              <li>
                <span>Proprietor</span>
                <strong>{store.proprietor}</strong>
              </li>
              <li>
                <span>Franchise code</span>
                <strong>{store.franchiseCode}</strong>
              </li>
              <li>
                <span>Phone</span>
                <strong>
                  <a href={`tel:${store.phone}`}>{store.phoneDisplay}</a>
                </strong>
              </li>
              <li>
                <span>Email</span>
                <strong>
                  <a href={`mailto:${store.email}`}>{store.email}</a>
                </strong>
              </li>
              <li>
                <span>Address</span>
                <strong>{store.address.full}</strong>
              </li>
              <li>
                <span>Hours</span>
                <strong>{store.hours}</strong>
              </li>
              <li>
                <span>Powered by</span>
                <strong>{store.poweredBy}</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Personal care</p>
          <h2 className="section-title">Complete family care aisle</h2>
          <p className="section-copy">
            From face and hair care to baby essentials — curated categories available in-store.
          </p>
          <div className="care-grid">
            {store.careCategories.map((item) => (
              <div className="care-item" key={item}>
                {item}
              </div>
            ))}
          </div>
          <img
            src="/images/care-categories.png"
            alt="Care category wall branding"
            style={{ marginTop: '1.5rem', borderRadius: '18px', border: '1px solid var(--line)' }}
          />
        </div>
      </section>
    </>
  )
}
