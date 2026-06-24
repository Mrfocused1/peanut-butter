import iconRoasted from '../assets/icon-roasted.svg'
import iconNoSugar from '../assets/icon-no-sugar.svg'
import iconNatural from '../assets/icon-natural.svg'
import iconProtein from '../assets/icon-protein.svg'
import './Features.css'

const FEATURES = [
  { icon: iconRoasted, label: ['100%', 'Roasted', 'Peanuts'] },
  { icon: iconNoSugar, label: ['No Added', 'Sugar'] },
  { icon: iconNatural, label: ['All', 'Natural'] },
  { icon: iconProtein, label: ['Protein', 'Rich'] },
]

export default function Features() {
  return (
    <section className="features" aria-label="Product highlights">
      {FEATURES.map(({ icon, label }) => (
        <div className="feature" key={label.join(' ')}>
          <img className="feature__icon" src={icon} alt="" aria-hidden="true" />
          <span className="feature__label">
            {label.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </span>
        </div>
      ))}
    </section>
  )
}
