import { useState, useEffect } from 'react'
import { getQuestionsByTema } from './questions/index'
import { motion } from 'framer-motion'
import Layout from './components/Layout'
import { salvarResultado } from './utils/salvarResultado'

export default function Quiz({ tema, voltar }) {
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  // 🔥 EMBARALHAR RESPOSTAS
  function shuffleOptions(question) {
    const options = [...question.options]
    const correctAnswer = options[question.answer]

    const shuffled = options
      .map((opt) => ({ opt, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ opt }) => opt)

    const newAnswerIndex = shuffled.findIndex(
      (opt) => opt === correctAnswer
    )

    return {
      ...question,
      options: shuffled,
      answer: newAnswerIndex
    }
  }

  useEffect(() => {
    const lista = getQuestionsByTema(tema)
      .sort(() => Math.random() - 0.5) // 🔥 embaralha perguntas
      .map(shuffleOptions) // 🔥 embaralha respostas

    setQuestions(lista)
    setCurrent(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }, [tema])

  function getCorrectIndex() {
    const answer = questions[current]?.answer

    if (typeof answer === 'number') return answer

    return questions[current]?.options.findIndex(
      (opt) => opt === answer
    )
  }

  const correctIndex = getCorrectIndex()

  const percent = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0

  function voltarPergunta() {
    if (current > 0) {
      setCurrent((prev) => prev - 1)
      setSelected(null)
    }
  }

  function handleAnswer(index) {
    if (selected !== null) return

    setSelected(index)

    let novoScore = score

    if (index === correctIndex) {
      novoScore = score + 1
      setScore(novoScore)
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1)
        setSelected(null)
      } else {
        setFinished(true)

        salvarResultado(tema, novoScore, questions.length)
      }
    }, 800)
  }

  if (questions.length === 0) {
    return (
      <Layout>
        <h2 style={{ textAlign: 'center' }}>Carregando...</h2>
      </Layout>
    )
  }

  if (finished) {
    const percentFinal = Math.round((score / questions.length) * 100)
    const aprovado = percentFinal >= 50

    return (
      <Layout>
        <div style={styles.card}>
          <h2>Resultado Final</h2>

          <p>Acertos: {score}</p>
          <p>Erros: {questions.length - score}</p>

          <h3>{percentFinal}%</h3>

          <h3 style={{ color: aprovado ? '#22c55e' : '#ef4444' }}>
            {aprovado ? 'APROVADO' : 'REPROVADO'}
          </h3>

          <button onClick={voltar} style={styles.button}>
            Voltar ao Menu
          </button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div style={styles.content}>

        <div style={styles.header}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={voltarPergunta} style={styles.navButton}>
              ⬅
            </button>

            <button onClick={voltar} style={styles.navButton}>
              🏠
            </button>
          </div>

          <div>
            <h2>{tema.toUpperCase()}</h2>
            <p>
              {current + 1} / {questions.length}
            </p>
          </div>
        </div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 style={styles.question}>
            {questions[current].question}
          </h3>

          <div style={styles.options}>
            {questions[current].options.map((opt, i) => {
              let bg = 'rgba(255,255,255,0.05)'

              if (selected !== null) {
                if (i === correctIndex) bg = '#22c55e'
                else if (i === selected) bg = '#ef4444'
              }

              return (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    ...styles.optionCard,
                    background: bg
                  }}
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div style={styles.footer}>
          <span>Acertos: {score}</span>
          <span>{percent}%</span>
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  content: {
    width: '100%',
    maxWidth: 400,
    padding: 20
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },

  navButton: {
    padding: '8px 12px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    background: '#1e293b',
    color: '#fff',
    fontSize: 16
  },

  question: {
    marginBottom: 20,
    lineHeight: 1.4
  },

  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  },

  optionCard: {
    padding: 15,
    borderRadius: 12,
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    transition: '0.3s'
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    opacity: 0.8
  },

  card: {
    padding: 30,
    borderRadius: 20,
    background: '#1e293b',
    textAlign: 'center'
  },

  button: {
    marginTop: 15,
    padding: 10,
    width: '100%',
    cursor: 'pointer'
  }
}