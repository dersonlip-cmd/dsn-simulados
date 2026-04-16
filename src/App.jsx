import { useState } from 'react'
import Home from './Home'
import Quiz from './Quiz'
import Historico from './components/Historico' // 🔥 NOVO

export default function App() {
  const [tema, setTema] = useState(null)
  const [tela, setTela] = useState('menu') // 🔥 NOVO

  // 👉 Se estiver no quiz
  if (tela === 'quiz' && tema) {
    return (
      <Quiz
        tema={tema}
        voltar={() => {
          setTema(null)
          setTela('menu')
        }}
      />
    )
  }

  // 👉 Tela de histórico
  if (tela === 'historico') {
    return <Historico voltar={() => setTela('menu')} />
  }

  // 👉 Menu principal (Home)
  return (
    <Home
      setTema={(t) => {
        setTema(t)
        setTela('quiz')
      }}
      irHistorico={() => setTela('historico')} // 🔥 NOVO
    />
  )
}