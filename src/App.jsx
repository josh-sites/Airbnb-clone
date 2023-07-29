import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './cardData'

function App() {
  const cards = cardData.map(card => {
    return <Card
            key={card.id}
            {...card}
           />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-list">
        {cards}
      </div>
    </div>
  )
}

export default App
