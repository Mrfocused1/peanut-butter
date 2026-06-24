import bowl from '../assets/bowl.webp'
import BrushUnderline from './BrushUnderline.jsx'
import './JustOneIngredient.css'

export default function JustOneIngredient() {
  return (
    <section className="ingredient">
      <div className="ingredient__text">
        <h2 className="ingredient__title">
          Just One
          <br />
          Ingredient
        </h2>
        <BrushUnderline className="ingredient__rule" id="ing" />
        <p className="ingredient__copy">
          We believe the best things in life are simple. Just{' '}
          <strong>pure peanuts.</strong> Nothing else.
        </p>
      </div>

      <div className="ingredient__visual">
        <img
          className="ingredient__bowl"
          src={bowl}
          alt="Top-down bowl of smooth peanut butter surrounded by roasted peanuts and a fresh leaf"
        />
      </div>
    </section>
  )
}
