import { useState } from 'react'
import Home from './Home'
import Quiz from './Quiz'

export default function App() {
  const [tema, setTema] = useState(null)

  return tema ? (
    <Quiz tema={tema} voltar={() => setTema(null)} />
  ) : (
    <Home setTema={setTema} />
  )
}