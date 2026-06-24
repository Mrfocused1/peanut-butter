import { Fragment } from 'react'
import peanuts from '../assets/peanuts.webp'
import iconSugar from '../assets/icon-sugar.svg'
import iconPalmOil from '../assets/icon-palmoil.svg'
import iconFillers from '../assets/icon-fillers.svg'
import iconPreservatives from '../assets/icon-preservatives.svg'
import leaf from '../assets/leaf.svg'
import BrushUnderline from './BrushUnderline.jsx'
import './WhyNutriNut.css'

const ROWS = [
  { icon: iconSugar, others: 'Added Sugar', nutri: '100% Peanuts' },
  { icon: iconPalmOil, others: 'Palm Oil', nutri: 'No Palm Oil' },
  { icon: iconFillers, others: 'Fillers', nutri: 'No Fillers' },
  { icon: iconPreservatives, others: 'Preservatives', nutri: 'No Preservatives' },
]

function Check() {
  return (
    <span className="why__check" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5 L10 17.5 L19 7" />
      </svg>
    </span>
  )
}

export default function WhyNutriNut() {
  return (
    <section className="why">
      <img className="why__leaf why__leaf--tl" src={leaf} alt="" aria-hidden="true" />
      <img className="why__leaf why__leaf--br" src={leaf} alt="" aria-hidden="true" />

      <div className="why__inner">
        <div className="why__left">
          <h2 className="why__title">
            Why
            <br />
            Nutri Nut?
          </h2>
          <BrushUnderline className="why__rule" id="why" />
          <p className="why__copy">
            Real food. Real simple.
            <br />
            Real good.
          </p>
          <img
            className="why__peanuts"
            src={peanuts}
            alt="Roasted peanuts, peanut halves and a fresh green leaf"
          />
        </div>

        <div className="why__table">
          <div className="why__head why__head--others">Others</div>
          <div className="why__head why__head--nutri">Nutri Nut</div>

          {ROWS.map((row) => (
            <Fragment key={row.others}>
              <div className="why__cell why__cell--others">
                <img className="why__icon" src={row.icon} alt="" aria-hidden="true" />
                <span>{row.others}</span>
              </div>
              <div className="why__cell why__cell--nutri">
                <Check />
                <span>{row.nutri}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
