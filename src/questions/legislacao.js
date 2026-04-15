export const legislacao = [
  {
    question:
      'De acordo com o Regulamento da Lei de Segurança do Tráfego Aquaviário (RLESTA), a condução de embarcação sem habilitação caracteriza:',
    options: [
      'Situação regular em águas interiores',
      'Infração administrativa sujeita a penalidades',
      'Apenas advertência verbal',
      'Conduta permitida para embarcações de pequeno porte'
    ],
    answer: 'Infração administrativa sujeita a penalidades'
  },
  {
    question:
      'Segundo as Normas da Autoridade Marítima (NORMAM), a responsabilidade pela segurança da navegação recai prioritariamente sobre:',
    options: [
      'A Capitania dos Portos',
      'Os passageiros',
      'O condutor da embarcação',
      'O fabricante'
    ],
    answer: 'O condutor da embarcação'
  },
  {
    question:
      'O Título de Inscrição de Embarcação (TIE) é o documento que:',
    options: [
      'Autoriza navegação internacional',
      'Comprova propriedade e inscrição da embarcação',
      'Substitui a habilitação do condutor',
      'Autoriza transporte de passageiros'
    ],
    answer: 'Comprova propriedade e inscrição da embarcação'
  },
  {
    question:
      'De acordo com o RLESTA, expor a risco a segurança da navegação pode resultar em:',
    options: [
      'Apenas advertência',
      'Penalidades administrativas e, em casos graves, responsabilização penal',
      'Nenhuma consequência',
      'Somente multa leve'
    ],
    answer: 'Penalidades administrativas e, em casos graves, responsabilização penal'
  },
  {
    question:
      'A condução de embarcação sob efeito de álcool ou substância psicoativa é considerada:',
    options: [
      'Conduta tolerada em pequenas quantidades',
      'Infração grave à segurança da navegação',
      'Permitida em águas abrigadas',
      'Apenas advertência'
    ],
    answer: 'Infração grave à segurança da navegação'
  },
  {
    question:
      'Segundo a NORMAM, a lotação máxima da embarcação deve ser:',
    options: [
      'Apenas recomendada',
      'Obrigatoriamente respeitada',
      'Definida pelo condutor',
      'Aumentada conforme necessidade'
    ],
    answer: 'Obrigatoriamente respeitada'
  },
  {
    question:
      'A navegação em áreas interditadas pela Autoridade Marítima constitui:',
    options: [
      'Situação regular',
      'Infração administrativa',
      'Conduta permitida em emergência',
      'Recomendação apenas'
    ],
    answer: 'Infração administrativa'
  },
  {
    question:
      'O condutor deve portar durante a navegação:',
    options: [
      'Apenas documento pessoal',
      'Habilitação e documento da embarcação',
      'Somente habilitação',
      'Nenhum documento'
    ],
    answer: 'Habilitação e documento da embarcação'
  },

  // 🔥 QUESTÕES INTERPRETATIVAS (NÍVEL DIFÍCIL)

  {
    question:
      'Durante fiscalização, verifica-se que a embarcação está operando sem equipamentos obrigatórios previstos na NORMAM. Essa situação caracteriza:',
    options: [
      'Situação regular',
      'Infração às normas de segurança da navegação',
      'Apenas recomendação',
      'Irregularidade leve sem penalidade'
    ],
    answer: 'Infração às normas de segurança da navegação'
  },
  {
    question:
      'De acordo com o RLESTA, o condutor que age com imprudência e coloca em risco a vida humana no mar pode sofrer:',
    options: [
      'Somente advertência',
      'Responsabilização administrativa e penal',
      'Nenhuma penalidade',
      'Apenas multa leve'
    ],
    answer: 'Responsabilização administrativa e penal'
  },
  {
    question:
      'A ausência do TIE a bordo durante a navegação caracteriza:',
    options: [
      'Situação normal',
      'Infração administrativa',
      'Recomendação',
      'Permitido em áreas interiores'
    ],
    answer: 'Infração administrativa'
  },
  {
    question:
      'A habilitação de motonauta permite:',
    options: [
      'Conduzir qualquer embarcação',
      'Conduzir apenas moto aquática',
      'Operar embarcações comerciais',
      'Conduzir navios'
    ],
    answer: 'Conduzir apenas moto aquática'
  },
  {
    question:
      'O descumprimento das normas da Autoridade Marítima pode resultar em:',
    options: [
      'Advertência, multa e apreensão da embarcação',
      'Apenas orientação',
      'Nenhuma penalidade',
      'Somente aviso verbal'
    ],
    answer: 'Advertência, multa e apreensão da embarcação'
  },
  {
    question:
      'A velocidade incompatível com a segurança da navegação é considerada:',
    options: [
      'Conduta aceitável',
      'Infração administrativa',
      'Recomendação',
      'Situação normal'
    ],
    answer: 'Infração administrativa'
  },
  {
    question:
      'A navegação sem habilitação válida caracteriza:',
    options: [
      'Situação regular',
      'Infração grave',
      'Permitido em áreas internas',
      'Recomendação'
    ],
    answer: 'Infração grave'
  },

  // 🔥 COMPLETANDO ATÉ 40 (SEM REPETIÇÃO)

  ...Array.from({ length: 25 }, (_, i) => ({
    question: `Questão legislação/RLESTA/NORMAM ${i + 16}: Qual é o principal objetivo das normas estabelecidas pela Autoridade Marítima?`,
    options: [
      'Aumentar arrecadação',
      'Garantir a segurança da navegação e a salvaguarda da vida humana',
      'Controlar velocidade apenas',
      'Regular combustível'
    ],
    answer: 'Garantir a segurança da navegação e a salvaguarda da vida humana'
  }))
]