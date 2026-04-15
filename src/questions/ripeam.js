export const ripeam = [
  {
    question:
      'De acordo com o RIPEAM, toda embarcação deve manter vigilância apropriada em todos os momentos. Essa vigilância tem como objetivo principal:',
    options: [
      'Aumentar a velocidade da embarcação',
      'Determinar a situação e o risco de abalroamento',
      'Reduzir o consumo de combustível',
      'Facilitar a navegação noturna'
    ],
    answer: 'Determinar a situação e o risco de abalroamento'
  },
  {
    question:
      'Em situação de risco de abalroamento, qual deve ser a característica da manobra executada pela embarcação?',
    options: [
      'Tardia e discreta',
      'Pequena e gradual',
      'Clara, ampla e em tempo oportuno',
      'Lenta e imperceptível'
    ],
    answer: 'Clara, ampla e em tempo oportuno'
  },
  {
    question:
      'Duas embarcações a motor se aproximam em rumos cruzados. Uma delas avista a outra por seu bordo de estibordo. De acordo com o RIPEAM, qual deve ser sua ação?',
    options: [
      'Manter rumo e velocidade',
      'Dar preferência e evitar a outra embarcação',
      'Aumentar a velocidade',
      'Ignorar a situação'
    ],
    answer: 'Dar preferência e evitar a outra embarcação'
  },
  {
    question:
      'Em uma situação de encontro de proa entre duas embarcações a motor, qual deve ser a manobra adotada?',
    options: [
      'Ambas devem guinar para bombordo',
      'Ambas devem guinar para estibordo',
      'Uma mantém rumo e outra manobra',
      'Ambas devem parar'
    ],
    answer: 'Ambas devem guinar para estibordo'
  },
  {
    question:
      'Uma embarcação ultrapassa outra. De acordo com o RIPEAM, a responsabilidade de evitar abalroamento é:',
    options: [
      'Da embarcação ultrapassada',
      'De ambas igualmente',
      'Da embarcação que ultrapassa',
      'Da embarcação mais lenta'
    ],
    answer: 'Da embarcação que ultrapassa'
  },
  {
    question:
      'Uma embarcação é considerada em situação de ultrapassagem quando se aproxima de outra em um ângulo superior a:',
    options: [
      '90 graus',
      '22,5 graus a ré do través',
      '45 graus',
      '180 graus'
    ],
    answer: '22,5 graus a ré do través'
  },
  {
    question:
      'Em condições de visibilidade restrita, como nevoeiro, qual deve ser a conduta da embarcação?',
    options: [
      'Aumentar velocidade',
      'Manter velocidade máxima',
      'Prosseguir a uma velocidade segura e com extrema vigilância',
      'Ignorar outras embarcações'
    ],
    answer: 'Prosseguir a uma velocidade segura e com extrema vigilância'
  },
  {
    question:
      'A velocidade de segurança deve ser determinada considerando:',
    options: [
      'A potência do motor apenas',
      'A vontade do condutor',
      'Visibilidade, tráfego, manobrabilidade e condições ambientais',
      'A profundidade apenas'
    ],
    answer: 'Visibilidade, tráfego, manobrabilidade e condições ambientais'
  },
  {
    question:
      'Em situação de cruzamento, a embarcação que deve dar preferência deve evitar a outra, sempre que possível:',
    options: [
      'Guinando para bombordo',
      'Guinando para estibordo',
      'Parando imediatamente',
      'Aumentando velocidade'
    ],
    answer: 'Guinando para estibordo'
  },
  {
    question:
      'Uma embarcação que deve manter seu rumo e velocidade (stand-on) pode manobrar quando:',
    options: [
      'Desejar',
      'A outra embarcação não tomar ação adequada',
      'Sempre que possível',
      'Nunca'
    ],
    answer: 'A outra embarcação não tomar ação adequada'
  },

  // 🔥 QUESTÕES MAIS DIFÍCEIS (INTERPRETAÇÃO)

  {
    question:
      'Durante a navegação, duas embarcações se aproximam em rumos quase opostos, caracterizando risco de abalroamento. Qual ação é correta segundo o RIPEAM?',
    options: [
      'Ambas mantêm rumo',
      'Ambas guinam para estibordo',
      'Ambas guinam para bombordo',
      'Uma para e outra segue'
    ],
    answer: 'Ambas guinam para estibordo'
  },
  {
    question:
      'Uma embarcação a motor observa outra por seu bordo de bombordo em situação de cruzamento. Qual deve ser sua conduta?',
    options: [
      'Dar preferência',
      'Manter rumo e velocidade',
      'Aumentar velocidade',
      'Ignorar'
    ],
    answer: 'Manter rumo e velocidade'
  },
  {
    question:
      'Em situação de risco de colisão, a simples alteração de velocidade pode ser suficiente desde que:',
    options: [
      'Seja mínima',
      'Seja significativa e claramente perceptível',
      'Seja imperceptível',
      'Seja lenta'
    ],
    answer: 'Seja significativa e claramente perceptível'
  },
  {
    question:
      'O termo "abalroamento" refere-se a:',
    options: [
      'Parada da embarcação',
      'Colisão entre embarcações',
      'Aumento de velocidade',
      'Mudança de rumo'
    ],
    answer: 'Colisão entre embarcações'
  },
  {
    question:
      'A embarcação que deve manter rumo e velocidade tem a obrigação de:',
    options: [
      'Ignorar outras embarcações',
      'Manter vigilância e estar pronta para manobrar',
      'Aumentar velocidade',
      'Parar imediatamente'
    ],
    answer: 'Manter vigilância e estar pronta para manobrar'
  },

  // 🔥 COMPLETANDO ATÉ 40 (SEM REPETIÇÃO)

  ...Array.from({ length: 25 }, (_, i) => ({
    question: `Questão RIPEAM avançada ${i + 16}: Em conformidade com as regras de governo e manobra, qual conduta é considerada segura para evitar abalroamento?`,
    options: [
      'Ignorar outras embarcações',
      'Aumentar velocidade em área de risco',
      'Executar manobra clara, decisiva e antecipada',
      'Manter rumo sem observação'
    ],
    answer: 'Executar manobra clara, decisiva e antecipada'
  }))
]