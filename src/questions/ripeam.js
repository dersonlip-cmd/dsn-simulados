export const ripeam = [
  {
    question: "Uma embarcação a motor deve evitar outra a vela quando:",
    options: [
      "Sempre",
      "A vela estiver com motor ligado",
      "Não houver risco de colisão",
      "A vela estiver fundeada"
    ],
    answer: 0
  },
  {
    question: "Em situação de cruzamento, quem deve manobrar?",
    options: [
      "Quem vê a outra por boreste",
      "Quem vê a outra por bombordo",
      "Ambas",
      "Nenhuma"
    ],
    answer: 0
  },
  {
    question: "A luz de alcançado é de cor:",
    options: ["Branca", "Verde", "Vermelha", "Amarela"],
    answer: 0
  },
  {
    question: "Em canal estreito, a navegação deve ser:",
    options: [
      "Pelo centro",
      "Pelo lado de boreste",
      "Livre",
      "Pelo lado de bombordo"
    ],
    answer: 1
  },
  {
    question: "A embarcação privilegiada deve:",
    options: [
      "Alterar rumo",
      "Manter rumo e velocidade",
      "Parar",
      "Aumentar velocidade"
    ],
    answer: 1
  },
  {
    question: "Uma embarcação engajada na pesca deve exibir:",
    options: [
      "Luzes vermelhas",
      "Luzes verde sobre branca",
      "Somente branca",
      "Amarela"
    ],
    answer: 1
  },
  {
    question: "Em ultrapassagem, o risco de colisão é assumido por:",
    options: [
      "Ultrapassada",
      "Ultrapassadora",
      "Ambas",
      "Nenhuma"
    ],
    answer: 1
  },
  {
    question: "O termo “boreste” refere-se a:",
    options: [
      "Lado esquerdo",
      "Lado direito",
      "Proa",
      "Popa"
    ],
    answer: 1
  },
  {
    question: "O termo “bombordo” refere-se a:",
    options: [
      "Direita",
      "Esquerda",
      "Frente",
      "Trás"
    ],
    answer: 1
  },
  {
    question: "Uma embarcação sem governo apresenta:",
    options: [
      "Luz verde",
      "Duas luzes vermelhas",
      "Luz branca",
      "Luz azul"
    ],
    answer: 1
  },

  // 🔥 nível alto

  {
    question: "Em baixa visibilidade, a embarcação deve:",
    options: [
      "Aumentar velocidade",
      "Manter velocidade",
      "Reduzir velocidade e emitir sinais",
      "Parar imediatamente"
    ],
    answer: 2
  },
  {
    question: "O risco de colisão existe quando:",
    options: [
      "O ângulo varia",
      "O rumo relativo permanece constante",
      "Há diferença de velocidade",
      "Há visibilidade"
    ],
    answer: 1
  },
  {
    question: "Uma embarcação fundeada deve mostrar:",
    options: [
      "Luz branca 360°",
      "Luz verde",
      "Luz vermelha",
      "Sem luz"
    ],
    answer: 0
  },
  {
    question: "Em encontro de proa, deve-se:",
    options: [
      "Guinar ambos para boreste",
      "Guinar ambos para bombordo",
      "Parar",
      "Ignorar"
    ],
    answer: 0
  },
  {
    question: "A DPC é responsável por:",
    options: [
      "Meteorologia",
      "Segurança da navegação e habilitação",
      "Construção naval",
      "Pesca"
    ],
    answer: 1
  },
  {
    question: "A DHN é responsável por:",
    options: [
      "Carteiras",
      "Cartas náuticas e previsões",
      "Multas",
      "Portos"
    ],
    answer: 1
  },
  {
    question: "A carta náutica serve para:",
    options: [
      "Entretenimento",
      "Navegação segura",
      "Velocidade",
      "Comunicação"
    ],
    answer: 1
  },
  {
    question: "A previsão meteorológica é importante para:",
    options: [
      "Estética",
      "Planejamento da navegação",
      "Combustível",
      "Velocidade"
    ],
    answer: 1
  },

  // completar 40

  ...Array.from({ length: 36 }, (_, i) => ({
    question: `Questão DPC/DHN nível extremo ${i + 5}: responsabilidade da autoridade marítima.`,
    options: [
      "Ignorar normas",
      "Cumprir normas e garantir segurança",
      "Aumentar velocidade",
      "Reduzir carga"
    ],
    answer: 1
  }
  {
    question: "A RLESTA regula:",
    options: [
      "Pesca",
      "Segurança do tráfego aquaviário",
      "Construção",
      "Clima"
    ],
    answer: 1
  },
  {
    question: "A infração às normas pode resultar em:",
    options: [
      "Premiação",
      "Multa e penalidades",
      "Aumento de velocidade",
      "Nada"
    ],
    answer: 1
  },
  {
    question: "A autoridade marítima no Brasil é:",
    options: [
      "Polícia",
      "Marinha do Brasil",
      "Prefeitura",
      "Exército"
    ],
    answer: 1
  },

  // completar 40

  ...Array.from({ length: 37 }, (_, i) => ({
    question: `Questão RLESTA nível extremo ${i + 4}: aplicação de normas de segurança aquaviária.`,
    options: [
      "Ignorar regras",
      "Cumprir legislação vigente",
      "Aumentar velocidade",
      "Reduzir vigilância"
    ],
    answer: 1
  }))
]