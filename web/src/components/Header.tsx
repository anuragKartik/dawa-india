import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, store } from '../data/store'
import './Header.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="header-brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M10 34c0-10 6-20 14-24 8 4 14 14 14 24"
                stroke="var(--orange)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M24 10l4 18"
                stroke="var(--green)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="28" cy="8" r="3.5" fill="var(--green)" />
            </svg>
          </span>
          <span>
            <span className="brand-word">
              <span className="dava">dava</span>
              <span className="india">india</span>
            </span>
            <span className="brand-sub">Generic Pharmacy</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-primary header-cta" href={`tel:${store.phone}`}>
            Call {store.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  )
}
