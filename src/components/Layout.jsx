export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        {children}
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
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
    maxWidth: 400,
    padding: 20,
    position: 'relative',
    zIndex: 1
  }
}