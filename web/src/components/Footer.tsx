import { Link } from 'react-router-dom'
import { store } from '../data/store'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand-word footer-brand">
            <span className="dava">dava</span>
            <span className="india">india</span>
          </p>
          <span className="brand-sub">Generic Pharmacy</span>
          <p className="footer-tagline">{store.tagline}</p>
          <p className="footer-note">
            Franchise store powered by {store.poweredBy}. Code {store.franchiseCode}.
          </p>
        </div>

        <div>
          <h3>Visit us</h3>
          <p>{store.address.full}</p>
          <p>Open daily · {store.hours}</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>
            <a href={`tel:${store.phone}`}>{store.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${store.email}`}>{store.email}</a>
          </p>
          <p>
            Proprietor: <strong>{store.proprietor}</strong>
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {store.brandFull}, Kanpur. *T&amp;C apply.</p>
        <p>
          Official brand:{' '}
          <a href={store.website} target="_blank" rel="noreferrer">
            davaindia.com
          </a>
        </p>
      </div>
    </footer>
  )
}
