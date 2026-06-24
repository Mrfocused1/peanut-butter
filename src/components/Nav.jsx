import { useState } from 'react'
import logo from '../assets/logo.svg'
import './Nav.css'

const LINKS = ['Products', 'About Us', 'Why Nutri Nut', 'Recipes', 'FAQs']

function CartIcon() {
  return (
    <span className="nav__cart" aria-label="Cart">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      <span className="nav__badge">0</span>
    </span>
  )
}

function AccountIcon() {
  return (
    <svg className="nav__account" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Account">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="nav__brand" href="#" aria-label="Nutri Nut home">
        <img src={logo} alt="Nutri Nut" />
      </a>

      <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
        {LINKS.map((label) => (
          <a key={label} href="#" onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav__icons">
        <button className="nav__icon-btn nav__icon-btn--account" aria-label="Account">
          <AccountIcon />
        </button>
        <button className="nav__icon-btn" aria-label="Cart">
          <CartIcon />
        </button>
        <button
          className="nav__icon-btn nav__hamburger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  )
}
