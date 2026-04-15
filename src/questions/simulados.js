import { temas } from './index'

// 🔥 junta todas as questões
function getAllQuestions() {
  return [
    ...temas.seguranca,
    ...temas.ripeam,
    ...temas.balizamento,
    ...temas.legislacao,
    ...temas.primeiros_socorros
  ]
}

// 🎲 embaralhar
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

// 🎯 SIMULADO 20 QUESTÕES
export function gerarSimulado20() {
  const all = shuffle(getAllQuestions())
  return all.slice(0, 20)
}

// 🔥 SIMULADO 40 QUESTÕES (EXTREMO)
export function gerarSimulado40() {
  const all = shuffle(getAllQuestions())
  return all.slice(0, 40)
}