import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import JustOneIngredient from '../components/JustOneIngredient.jsx'
import WhyNutriNut from '../components/WhyNutriNut.jsx'

/*
 * Nutri Nut — v2 "Light" edition.
 * Same brand, same layout, same assets as the main site, re-skinned to a
 * brighter, airier white theme via the .page--light scope (see v2.css).
 */
export default function App() {
  return (
    <main className="page page--light">
      <div className="container">
        <Nav />
        <Hero />
        <JustOneIngredient />
        <WhyNutriNut />
      </div>
    </main>
  )
}
