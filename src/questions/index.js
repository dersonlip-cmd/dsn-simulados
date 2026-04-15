import { seguranca } from './seguranca'
import { ripeam } from './ripeam'
import { balizamento } from './balizamento'
import { legislacao } from './legislacao'
import { primeiros_socorros } from './primeiros_socorros'

// 🔥 BANCO
export const banco = {
  seguranca,
  ripeam,
  balizamento,
  legislacao,
  primeiros_socorros
}

// 🔀 EMBARALHAR
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// 🔥 ESSA LINHA É O QUE FALTAVA
export function getQuestionsByTema(tema) {
  const todas = Object.values(banco).flat()

  if (tema === 'simulado20') {
    return shuffle(todas).slice(0, 20)
  }

  if (tema === 'simulado40') {
    return shuffle(todas).slice(0, 40)
  }

  const lista = banco[tema]

  if (!lista) return []

  return shuffle(lista).slice(0, 40)
}