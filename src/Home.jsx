import { motion } from 'framer-motion'

const temas = [
  { nome: 'Segurança', id: 'seguranca', icon: '🛟' },
  { nome: 'RIPEAM', id: 'ripeam', icon: '🚦' },
  { nome: 'Balizamento', id: 'balizamento', icon: '⚓' },
  { nome: 'Legislação', id: 'legislacao', icon: '📜' },
  { nome: 'Primeiros Socorros', id: 'primeiros_socorros', icon: '❤️' }
]

const simulados = [
  { nome: 'Simulado Geral 20', id: 'simulado20', icon: '🧠' },
  { nome: 'Simulado Geral 40', id: 'simulado40', icon: '🔥' }
]

// 🔥 ADICIONADO irHistorico
export default function Home({ setTema, irHistorico }) {
  return (
    <div style={styles.container}>

      <div style={styles.overlay}></div>

      <div style={styles.content}>

        <h1 style={styles.mainTitle}>DSN Simulados Motonauta</h1>
        <p style={styles.subtitle}>Escolha um tema ou simulado</p>

        {/* 📚 TEMAS */}
        <div style={styles.grid}>
          {temas.map((tema, index) => (
            <motion.div
              key={tema.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              style={styles.gridItem}
              onClick={() => setTema(tema.id)}
            >
              <p style={styles.itemTitle}>{tema.nome}</p>
              <span style={styles.gridIcon}>{tema.icon}</span>
            </motion.div>
          ))}
        </div>

        {/* 🔥 SIMULADOS */}
        <div style={styles.simuladosRow}>
          {simulados.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={styles.simuladoItem}
              onClick={() => setTema(item.id)}
            >
              <p style={styles.itemTitle}>{item.nome}</p>
              <span style={styles.gridIcon}>{item.icon}</span>
            </motion.div>
          ))}
        </div>

        {/* 🔥 BOTÃO HISTÓRICO */}
        <button onClick={irHistorico} style={styles.botaoHistorico}>
          📊 Ver Histórico
        </button>

      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    position: 'relative'
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(15, 23, 42, 0.75)'
  },

  content: {
    width: '100%',
    maxWidth: 420,
    padding: 20,
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  },

  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 0.6,
    background: 'linear-gradient(90deg, #22c55e, #38bdf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },

  subtitle: {
    marginBottom: 25,
    opacity: 0.7
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 15
  },

  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.08)',
    padding: 15,
    borderRadius: 15,
    cursor: 'pointer',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
    transition: '0.3s'
  },

  gridIcon: {
    fontSize: 34
  },

  itemTitle: {
    fontSize: 13,
    marginBottom: 8,
    textAlign: 'center',
    opacity: 0.9
  },

  simuladosRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30
  },

  simuladoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(34,197,94,0.2)',
    padding: 15,
    borderRadius: 15,
    cursor: 'pointer',
    border: '1px solid #22c55e',
    boxShadow: '0 0 20px rgba(34,197,94,0.6)',
    transition: '0.3s'
  },

  // 🔥 NOVO ESTILO
  botaoHistorico: {
    marginTop: 30,
    padding: 12,
    width: '100%',
    borderRadius: 10,
    border: 'none',
    background: '#38bdf8',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s'
  }
}