import { useState } from 'react'
import { supabase } from './supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) alert(error.message)
    else alert('Login realizado com sucesso!')
  }

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) alert(error.message)
    else alert('Conta criada!')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Dsn Simulados Motonauta</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Senha"
        onChange={e => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  )
}