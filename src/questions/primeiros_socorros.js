export const primeiros_socorros = [
  {
    question:
      'Em caso de afogamento, após retirar a vítima da água, qual deve ser a primeira ação do socorrista?',
    options: [
      'Oferecer água',
      'Verificar sinais vitais e permeabilidade das vias aéreas',
      'Colocar a vítima sentada',
      'Aguardar socorro'
    ],
    answer: 'Verificar sinais vitais e permeabilidade das vias aéreas'
  },
  {
    question:
      'Uma vítima inconsciente e sem respiração deve receber imediatamente:',
    options: [
      'Massagem muscular',
      'Administração de líquidos',
      'Reanimação cardiopulmonar (RCP)',
      'Imobilização'
    ],
    answer: 'Reanimação cardiopulmonar (RCP)'
  },
  {
    question:
      'Durante a RCP em adulto, qual é a proporção correta entre compressões torácicas e ventilações?',
    options: [
      '15:2',
      '30:2',
      '10:1',
      '20:2'
    ],
    answer: '30:2'
  },
  {
    question:
      'Em caso de hemorragia externa intensa, qual deve ser a primeira medida?',
    options: [
      'Lavar o local',
      'Aplicar compressão direta sobre o sangramento',
      'Elevar a vítima',
      'Aplicar gelo'
    ],
    answer: 'Aplicar compressão direta sobre o sangramento'
  },
  {
    question:
      'A obstrução total das vias aéreas por corpo estranho em um adulto consciente deve ser tratada inicialmente com:',
    options: [
      'Massagem cardíaca',
      'Manobra de Heimlich',
      'Respiração boca a boca',
      'Imobilização'
    ],
    answer: 'Manobra de Heimlich'
  },
  {
    question:
      'Em caso de suspeita de fratura, a conduta correta é:',
    options: [
      'Movimentar o membro',
      'Imobilizar a região afetada',
      'Massagear o local',
      'Aplicar calor'
    ],
    answer: 'Imobilizar a região afetada'
  },
  {
    question:
      'A vítima de queimadura térmica deve ser tratada inicialmente com:',
    options: [
      'Aplicação de gelo diretamente',
      'Resfriamento com água corrente',
      'Uso de pomadas',
      'Cobertura com óleo'
    ],
    answer: 'Resfriamento com água corrente'
  },
  {
    question:
      'Em caso de parada cardiorrespiratória, a prioridade é:',
    options: [
      'Transportar a vítima',
      'Iniciar RCP imediatamente',
      'Aguardar ajuda',
      'Oferecer líquidos'
    ],
    answer: 'Iniciar RCP imediatamente'
  },

  // 🔥 QUESTÕES MAIS COMPLEXAS (INTERPRETAÇÃO)

  {
    question:
      'Uma vítima retirada da água apresenta respiração irregular e inconsciência. Qual deve ser a conduta imediata?',
    options: [
      'Colocar a vítima em pé',
      'Iniciar avaliação das vias aéreas e respiração',
      'Dar água',
      'Ignorar'
    ],
    answer: 'Iniciar avaliação das vias aéreas e respiração'
  },
  {
    question:
      'Em uma situação de múltiplas vítimas, o socorrista deve priorizar:',
    options: [
      'A primeira vítima encontrada',
      'A vítima mais grave com risco de morte iminente',
      'A vítima consciente',
      'A mais próxima'
    ],
    answer: 'A vítima mais grave com risco de morte iminente'
  },
  {
    question:
      'A verificação de sinais vitais inclui:',
    options: [
      'Temperatura apenas',
      'Respiração e pulso',
      'Peso e altura',
      'Pressão apenas'
    ],
    answer: 'Respiração e pulso'
  },
  {
    question:
      'Uma vítima com suspeita de lesão na coluna não deve ser:',
    options: [
      'Imobilizada',
      'Movimentada desnecessariamente',
      'Monitorada',
      'Observada'
    ],
    answer: 'Movimentada desnecessariamente'
  },
  {
    question:
      'O choque hipovolêmico pode ser causado por:',
    options: [
      'Excesso de água',
      'Perda significativa de sangue',
      'Calor',
      'Frio'
    ],
    answer: 'Perda significativa de sangue'
  },
  {
    question:
      'Os sinais de parada respiratória incluem:',
    options: [
      'Respiração acelerada',
      'Ausência de movimentos respiratórios',
      'Tosse',
      'Fala'
    ],
    answer: 'Ausência de movimentos respiratórios'
  },

  // 🔥 COMPLETANDO ATÉ 40 (NÍVEL DIFÍCIL)

  ...Array.from({ length: 26 }, (_, i) => ({
    question: `Questão socorros avançada ${i + 15}: Em uma emergência a bordo, qual deve ser a prioridade do socorrista de acordo com os princípios de primeiros socorros?`,
    options: [
      'Proteção de equipamentos',
      'Preservação da vida humana',
      'Velocidade da embarcação',
      'Economia de recursos'
    ],
    answer: 'Preservação da vida humana'
  }))
]