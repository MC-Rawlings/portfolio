import { useState } from 'react'
import { StyledCard } from './components/Card/style'
import './App.css'

const data = [{title: "One"}, {title: "Two"}, {title: "Three"}, {title: "Four"}, {title: "Five"}];

function App() {

  return (
    <>
    {data.map((cardData) => {
      return <StyledCard title={cardData.title} key={cardData.title} />
    })}
    </>
  )
}

export default App
