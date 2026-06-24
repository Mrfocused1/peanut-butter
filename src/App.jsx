import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import JustOneIngredient from './components/JustOneIngredient.jsx'
import WhyNutriNut from './components/WhyNutriNut.jsx'

export default function App() {
  return (
    <main className="page">
      <div className="container">
        <Nav />
        <Hero />
        <JustOneIngredient />
        <WhyNutriNut />
      </div>
    </main>
  )
}
