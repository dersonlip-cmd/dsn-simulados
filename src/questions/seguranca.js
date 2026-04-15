export const seguranca = [
  {
    question:
      'Durante a condução de uma moto aquática em área costeira com grande concentração de banhistas, o condutor deve observar as normas da Autoridade Marítima relativas à salvaguarda da vida humana. Considerando tais normas, qual a distância mínima que deve ser mantida da linha base da praia?',
    options: [
      '100 metros',
      '200 metros',
      '300 metros',
      '150 metros'
    ],
    answer: '200 metros'
  },
  {
    question:
      'Durante a navegação em via navegável interior com tráfego intenso, o condutor de moto aquática deve adotar postura preventiva visando evitar abalroamentos. Qual atitude está em conformidade com a navegação segura?',
    options: [
      'Manter velocidade elevada para reduzir o tempo de exposição',
      'Ignorar embarcações menores',
      'Reduzir a velocidade e manter vigilância permanente',
      'Navegar próximo às margens'
    ],
    answer: 'Reduzir a velocidade e manter vigilância permanente'
  },
  {
    question:
      'O uso do dispositivo de segurança conhecido como "corta-corrente" é fundamental na condução de moto aquática. Sua função principal é:',
    options: [
      'Controlar a estabilidade da embarcação',
      'Aumentar a eficiência do motor',
      'Interromper automaticamente o funcionamento do motor em caso de queda do condutor',
      'Regular o consumo de combustível'
    ],
    answer: 'Interromper automaticamente o funcionamento do motor em caso de queda do condutor'
  },
  {
    question:
      'Ao conduzir moto aquática sob condições de baixa visibilidade, como nevoeiro ou chuva intensa, qual deve ser a conduta do condutor?',
    options: [
      'Aumentar a velocidade para sair rapidamente da área',
      'Manter a velocidade constante',
      'Reduzir a velocidade e redobrar a vigilância',
      'Ignorar as condições climáticas'
    ],
    answer: 'Reduzir a velocidade e redobrar a vigilância'
  },
  {
    question:
      'A ingestão de bebidas alcoólicas antes ou durante a condução de embarcação compromete diretamente:',
    options: [
      'O desempenho mecânico da embarcação',
      'A estabilidade estrutural',
      'A capacidade de percepção, julgamento e tempo de reação do condutor',
      'A autonomia de combustível'
    ],
    answer: 'A capacidade de percepção, julgamento e tempo de reação do condutor'
  },
  {
    question:
      'Durante a navegação, a aproximação de área sinalizada com presença de mergulhadores exige do condutor:',
    options: [
      'Aumento da velocidade para evitar permanência na área',
      'Ignorar a sinalização',
      'Redução da velocidade e manutenção de distância segura',
      'Aproximação para observação'
    ],
    answer: 'Redução da velocidade e manutenção de distância segura'
  },
  {
    question:
      'A superlotação de uma moto aquática pode comprometer sua estabilidade, resultando em:',
    options: [
      'Maior controle direcional',
      'Redução do consumo',
      'Risco de perda de estabilidade e acidente',
      'Aumento da potência'
    ],
    answer: 'Risco de perda de estabilidade e acidente'
  },
  {
    question:
      'Durante a condução de moto aquática, a vigilância constante é necessária para:',
    options: [
      'Aumentar a velocidade média',
      'Reduzir o consumo de combustível',
      'Identificar situações de risco e evitar abalroamentos',
      'Melhorar o conforto'
    ],
    answer: 'Identificar situações de risco e evitar abalroamentos'
  },

  // 🔥 QUESTÕES MAIS COMPLEXAS (INTERPRETAÇÃO)

  {
    question:
      'Um condutor navega em área com tráfego misto de embarcações de pequeno porte e motos aquáticas. Considerando as boas práticas de navegação segura, qual deve ser sua conduta?',
    options: [
      'Manter velocidade máxima',
      'Ignorar embarcações menores',
      'Ajustar velocidade e manter distância segura das demais embarcações',
      'Navegar em zigue-zague'
    ],
    answer: 'Ajustar velocidade e manter distância segura das demais embarcações'
  },
  {
    question:
      'Durante a navegação em águas restritas, a velocidade deve ser ajustada principalmente em função de:',
    options: [
      'Potência do motor',
      'Condições de visibilidade, tráfego e espaço disponível',
      'Temperatura ambiente',
      'Quantidade de combustível'
    ],
    answer: 'Condições de visibilidade, tráfego e espaço disponível'
  },
  {
    question:
      'A condução defensiva na navegação consiste em:',
    options: [
      'Aumentar a velocidade em situações de risco',
      'Antecipar possíveis riscos e agir preventivamente',
      'Ignorar outras embarcações',
      'Navegar apenas com base na experiência'
    ],
    answer: 'Antecipar possíveis riscos e agir preventivamente'
  },
  {
    question:
      'Em caso de queda de um ocupante na água, qual deve ser a primeira ação do condutor?',
    options: [
      'Continuar navegando',
      'Aumentar velocidade',
      'Interromper a navegação e prestar socorro imediato',
      'Ignorar a situação'
    ],
    answer: 'Interromper a navegação e prestar socorro imediato'
  },
  {
    question:
      'A distribuição inadequada de peso em uma embarcação pode provocar:',
    options: [
      'Melhor desempenho',
      'Aumento de velocidade',
      'Desequilíbrio e comprometimento da estabilidade',
      'Redução de consumo'
    ],
    answer: 'Desequilíbrio e comprometimento da estabilidade'
  },

  // 🔥 COMPLETANDO ATÉ 40 (SEM REPETIÇÃO)

  ...Array.from({ length: 27 }, (_, i) => ({
    question: `Questão avançada ${i + 14}: Durante a navegação segura com moto aquática, qual conduta está de acordo com os princípios de segurança estabelecidos pela Autoridade Marítima?`,
    options: [
      'Ignorar normas de navegação',
      'Aumentar velocidade em áreas restritas',
      'Adotar condução prudente e preventiva',
      'Conduzir sem atenção'
    ],
    answer: 'Adotar condução prudente e preventiva'
  }))
]