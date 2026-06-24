import heroDesktop from '../assets/hero-desktop.webp'
import heroMobile from '../assets/hero-mobile.webp'
import leaf from '../assets/leaf.svg'
import Features from './Features.jsx'
import BrushUnderline from './BrushUnderline.jsx'
import './Hero.css'

function Stamp() {
  return (
    <div className="hero__stamp" aria-hidden="true">
      <svg viewBox="0 0 160 160">
        <defs>
          <path
            id="stampCircle"
            d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
          />
        </defs>
        <text className="hero__stamp-text">
          <textPath href="#stampCircle" startOffset="0">
            JUST ONE INGREDIENT · PEANUTS ·
          </textPath>
        </text>
      </svg>
      <span className="hero__stamp-center">
        JUST
        <br />
        ONE
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Faint botanical leaves filling the negative space, like the reference */}
      <div className="hero__decor" aria-hidden="true">
        <img className="hero__leaf hero__leaf--1" src={leaf} alt="" />
        <img className="hero__leaf hero__leaf--2" src={leaf} alt="" />
        <img className="hero__leaf hero__leaf--3" src={leaf} alt="" />
      </div>

      <div className="hero__copy">
        <h1 className="hero__title">
          <span className="hero__line">
            <span className="hero__word">Real</span>{' '}
            <span className="hero__word">Peanuts.</span>
          </span>
          <span className="hero__line">
            <span className="hero__word">Nothing</span>{' '}
            <span className="hero__word">Else.</span>
          </span>
        </h1>

        <BrushUnderline className="hero__rule" id="hero" />

        <p className="hero__lead">
          Made from <strong>100% roasted peanuts</strong> for a naturally rich,
          protein-packed spread.
        </p>

        <div className="hero__cta">
          <a href="#" className="btn btn--primary hero__shop">
            <span className="hero__shop-long">Shop Smooth Peanut Butter</span>
            <span className="hero__shop-short">Shop Now</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#" className="btn btn--secondary">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <img
            className="hero__image"
            src={heroDesktop}
            alt="Nutri Nut smooth peanut butter jar surrounded by a peanut butter splash and roasted peanuts"
          />
        </picture>
        <Stamp />
      </div>

      <Features />
    </section>
  )
}
