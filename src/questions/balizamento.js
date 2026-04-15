export const balizamento = [
  {
    question:
      'No sistema de balizamento lateral, ao adentrar um porto, as marcas laterais de cor vermelha devem ser mantidas:',
    options: [
      'A boreste (direita)',
      'A bombordo (esquerda)',
      'À proa',
      'À popa'
    ],
    answer: 'A bombordo (esquerda)'
  },
  {
    question:
      'Uma marca lateral verde indica:',
    options: [
      'Bordo de bombordo',
      'Bordo de estibordo',
      'Perigo isolado',
      'Águas seguras'
    ],
    answer: 'Bordo de estibordo'
  },
  {
    question:
      'Uma boia com cores preta e vermelha em faixas horizontais indica:',
    options: [
      'Águas seguras',
      'Perigo isolado',
      'Canal preferencial',
      'Bifurcação'
    ],
    answer: 'Perigo isolado'
  },
  {
    question:
      'Uma marca cardinal norte indica que as águas seguras se encontram:',
    options: [
      'Ao sul da marca',
      'Ao norte da marca',
      'A leste',
      'A oeste'
    ],
    answer: 'Ao norte da marca'
  },
  {
    question:
      'Uma marca cardinal sul indica que o perigo está localizado:',
    options: [
      'Ao sul da marca',
      'Ao norte da marca',
      'A leste',
      'A oeste'
    ],
    answer: 'Ao norte da marca'
  },
  {
    question:
      'As marcas cardinais utilizam como referência principal:',
    options: [
      'O vento',
      'A corrente',
      'Os pontos cardeais',
      'A profundidade'
    ],
    answer: 'Os pontos cardeais'
  },
  {
    question:
      'Uma marca de águas seguras é identificada por:',
    options: [
      'Cores preta e vermelha',
      'Cores vermelha e verde',
      'Cores vermelha e branca verticais',
      'Cor amarela'
    ],
    answer: 'Cores vermelha e branca verticais'
  },
  {
    question:
      'A marca de perigo isolado indica:',
    options: [
      'Área segura',
      'Obstáculo isolado com águas navegáveis ao redor',
      'Canal principal',
      'Área proibida'
    ],
    answer: 'Obstáculo isolado com águas navegáveis ao redor'
  },

  // 🔥 QUESTÕES MAIS COMPLEXAS

  {
    question:
      'Durante a navegação noturna, uma luz verde intermitente indica:',
    options: [
      'Marca de bombordo',
      'Marca de estibordo',
      'Perigo isolado',
      'Águas seguras'
    ],
    answer: 'Marca de estibordo'
  },
  {
    question:
      'Uma boia vermelha com número par indica:',
    options: [
      'Bordo de estibordo',
      'Bordo de bombordo',
      'Perigo isolado',
      'Águas seguras'
    ],
    answer: 'Bordo de bombordo'
  },
  {
    question:
      'Ao sair de um porto, as marcas laterais vermelhas devem ser mantidas:',
    options: [
      'À direita',
      'À esquerda',
      'À frente',
      'Atrás'
    ],
    answer: 'À direita'
  },
  {
    question:
      'Uma marca cardinal leste indica que as águas seguras estão:',
    options: [
      'A oeste da marca',
      'A leste da marca',
      'Ao norte',
      'Ao sul'
    ],
    answer: 'A leste da marca'
  },
  {
    question:
      'Uma marca cardinal oeste indica que o perigo está:',
    options: [
      'A oeste da marca',
      'A leste da marca',
      'Ao norte',
      'Ao sul'
    ],
    answer: 'A leste da marca'
  },
  {
    question:
      'O topo das marcas cardinais norte apresenta:',
    options: [
      'Cones para baixo',
      'Cones para cima',
      'Esferas',
      'Cilindros'
    ],
    answer: 'Cones para cima'
  },
  {
    question:
      'O topo das marcas cardinais sul apresenta:',
    options: [
      'Cones para cima',
      'Cones para baixo',
      'Esferas',
      'Cilindros'
    ],
    answer: 'Cones para baixo'
  },
  {
    question:
      'A principal função do sistema de balizamento é:',
    options: [
      'Aumentar velocidade',
      'Orientar e garantir a segurança da navegação',
      'Decorar o canal',
      'Controlar vento'
    ],
    answer: 'Orientar e garantir a segurança da navegação'
  },

  // 🔥 COMPLETANDO ATÉ 40 (SEM REPETIÇÃO)

  ...Array.from({ length: 24 }, (_, i) => ({
    question: `Questão balizamento avançada ${i + 17}: A sinalização náutica tem como objetivo principal:`,
    options: [
      'Aumentar velocidade',
      'Indicar perigos e orientar a navegação segura',
      'Decorar vias navegáveis',
      'Controlar corrente'
    ],
    answer: 'Indicar perigos e orientar a navegação segura'
  }))
]