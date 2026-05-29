// simulados.js — CTFL 4.0

// ============================================================
// SIMULADO A
// ============================================================

const SIMULADO_A = [
  {
    q: "Quais das seguintes afirmações descrevem um objetivo de teste válido?",
    opts: [
      "Para provar que não há defeitos não corrigidos no sistema em teste.",
      "Para verificar se não há combinações não testadas de entradas.",
      "Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade.",
      "Para provar que não haverá falhas após a implementação do sistema na produção.",
    ],
    ans: 2,
  },
  {
    q: "Qual das opções a seguir mostra um exemplo que contribui para o sucesso das atividades de teste?",
    opts: [
      "O envolvimento dos testadores durante várias atividades do ciclo de vida de desenvolvimento de software (SDLC) ajudará a detectar defeitos nos produtos de trabalho.",
      "Os testadores tentam não perturbar os desenvolvedores durante a codificação, para que eles escrevam um código melhor.",
      "Os testadores que colaboram com os usuários finais ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes e o teste do sistema.",
      "Os testadores certificados modelarão casos de teste muito melhores do que os testadores não certificados.",
    ],
    ans: 0,
  },
  {
    q: "Você foi designado como testador de uma equipe que está produzindo um novo sistema de forma incremental. \nVocê notou que nenhuma alteração foi feita nos casos de teste de regressão existentes durante várias iterações e nenhum novo defeito de regressão foi identificado.\n Seu gerente está feliz, mas você não está.\n\n Qual princípio de teste explica seu ceticismo?",
    opts: [
      "Os defeitos se agrupam.",
      "Os testes se desgastam.",
      "É impossível realizar testes exaustivos.",
      "Falácia da ausência de erros.",
    ],
    ans: 1,
  },
  {
    q: "Você trabalha em uma equipe que desenvolve um aplicativo móvel para pedidos de comida. Na iteração atual, a equipe decidiu implementar a funcionalidade de pagamento. \nQual das atividades a seguir faz parte da análise de teste?",
    opts: [
      "Estimativa de que o teste da integração com o serviço de pagamento levará 8 dias/homem.",
      "Analisar a discrepância entre o resultado real e o resultado esperado após a execução de um caso de teste que verifica o processo de pagamento com cartão de crédito e relatar um defeito.",
      "Decidir que a equipe deve testar se é possível realizar o pagamento entre muitos usuários.",
      "Usar a análise de valor limite (BVA) para derivar os dados de teste para os casos de teste que verificam o processamento correto do pagamento para o valor mínimo permitido a ser pago.",
    ],
    ans: 2,
  },
  {
    q: "Quais dos seguintes fatores (i-v) têm influência SIGNIFICATIVA no processo de teste?\n\ni. O SDLC;\nii. O número de defeitos detectados em projetos anteriores;\niii. Os riscos identificados do produto;\niv. Novos requisitos regulatórios forçando;\nv. O número de testadores certificados na organização;",
    opts: [
      "ii, iv, v têm influência significativa; i, iii não têm.",
      "iii, v têm influência significativa; i, ii, iv não têm.",
      "i, ii têm influência significativa; iii, iv, v não têm.",
      "i, iii, iv têm influência significativa; ii, v não têm.",
    ],
    ans: 3,
  },
  {
    q: "Quais das DUAS tarefas a seguir pertencem PRINCIPALMENTE a um papel no teste?",
    opts: [
      "Relatório sobre a cobertura alcançada.",
      "Configurar ambientes de teste.",
      "Criar o plano de teste.",
      "Projetar soluções para novos requisitos.",
      "Manter o backlog do produto.",
    ],
    ans: [0, 1],
    multi: true,
  },
  {
    q: "Quais das seguintes habilidades (i-v) são as MAIS importantes para um testador?\n\ni. Ter conhecimento do domínio;\nii. Criação de uma visão do produto;\niii. Ser um bom membro da equipe;\niv. Planejar e organizar o trabalho da equipe;\nv. Pensamento crítico;",
    opts: [
      "iii e iv são importantes; i, ii e v não são.",
      "i, ii e v são importantes; iii e iv não são.",
      "i, iii e v são importantes; ii e iv não são.",
      "ii e iv são importantes; i, iii e v não são.",
    ],
    ans: 2,
  },
  {
    q: "Como a abordagem de equipe inteira está presente nas interações entre os testadores e os representantes da empresa?",
    opts: [
      "Os testadores ajudam os representantes da empresa a definir a estratégia de teste.",
      "Os representantes do negócio decidem sobre as abordagens de automação de testes.",
      "Os representantes de negócio não participam da abordagem de equipe inteira.",
      "Os testadores ajudam os representantes de negócio a criar testes de aceite adequados.",
    ],
    ans: 3,
  },
  {
    q: "Qual é o principal objetivo das retrospectivas em um projeto ágil?",
    opts: [
      "Avaliar o desempenho individual dos desenvolvedores.",
      "Identificar melhorias no processo e no trabalho da equipe.",
      "Documentar requisitos do sistema para o cliente.",
      "Validar se todos os testes foram executados.",
    ],
    ans: 1,
  },
  {
    q: "Qual afirmação melhor descreve testes baseados em risco?",
    opts: [
      "Testes são executados apenas quando há tempo disponível.",
      "Testes são priorizados com base na probabilidade e impacto de falhas.",
      "Testes são realizados apenas no final do ciclo de desenvolvimento.",
      "Testes são definidos exclusivamente pelo cliente.",
    ],
    ans: 1,
  },
  {
    q: "Qual é uma característica típica de testes exploratórios?",
    opts: [
      "São totalmente automatizados e previamente documentados.",
      "Seguem scripts rígidos sem possibilidade de variação.",
      "Dependem da experiência do testador e não seguem scripts detalhados.",
      "São executados apenas em ambientes de produção.",
    ],
    ans: 2,
  },
  {
    q: "Qual é o principal objetivo dos critérios de saída em testes?",
    opts: [
      "Definir quando o desenvolvimento deve começar.",
      "Determinar quando os testes podem ser encerrados.",
      "Criar casos de teste automatizados.",
      "Priorizar defeitos encontrados.",
    ],
    ans: 1,
  },
  {
    q: "O que melhor descreve o princípio de testes antecipados (early testing)?",
    opts: [
      "Testes devem ser feitos apenas após a codificação.",
      "Testes devem começar o mais cedo possível no SDLC.",
      "Testes são executados somente após a entrega ao cliente.",
      "Testes não são necessários em fases iniciais.",
    ],
    ans: 1,
  },
  {
    q: "Quais tipos de falhas (1-4) se encaixam melhor em quais níveis de teste (A-D)?\n\n(1) Falhas no comportamento do sistema à medida que ele se desvia das necessidades de negócio do usuário.\n(2) Falhas na comunicação entre os componentes.\n(3) Falhas na lógica em um módulo.\n(4) Falhas nas regras de negócios não implementadas corretamente.\n\n(A) Teste de componentes.\n(B) Teste de integração de componentes.\n(C) Teste de sistema.\n(D) Teste de aceite.",
    opts: [
      "1B, 2A, 3D, 4C",
      "1C, 2B, 3A, 4D",
      "1D, 2B, 3C, 4A",
      "1D, 2B, 3A, 4C",
    ],
    ans: 3,
  },
  {
    q: "Você está testando uma história de usuário com três critérios de aceite: AC1, AC2 e AC3. O AC1 é coberto pelo caso de teste TC1, o AC2 pelo TC2 e o AC3 pelo TC3.\n\nO histórico de execução do teste teve três execuções de teste em três versões consecutivas do software, como segue:\n\nOs testes são repetidos quando você é informado de que todos os defeitos encontrados na execução do teste foram corrigidos e que uma nova versão do software está disponível.\n\nQuais dos testes acima são executados como testes de regressão?",
    image: "src/imagens/simulados/A/q14.png",
    opts: [
      "4, 6, 8, 9",
      "5, 6",
      "5, 7",
      "4, 7, 8, 9",
    ],
    ans: 2,
  },
  {
    q: "Qual das opções a seguir NÃO é um benefício dos testes estáticos?",
    opts: [
      "Detecção de lacunas e inconsistências nos requisitos.",
      "Ter um gerenciamento de defeitos menos dispendioso devido à facilidade de detectar defeitos mais tarde no processo SDLC.",
      "A correção de defeitos encontrados durante o teste estático geralmente é muito mais barata do que a correção de defeitos encontrados durante o teste dinâmico.",
      "Encontrar defeitos de codificação que poderiam não ter sido encontrados apenas com a realização de testes dinâmicos.",
    ],
    ans: 1,
  },
  {
    q: "Qual dos seguintes é um benefício do feedback antecipado e frequente?",
    opts: [
      "Ele força os clientes a priorizarem seus requisitos com base nos riscos acordados.",
      "Essa é a única maneira de medir a qualidade das mudanças.",
      "Isso ajuda a evitar mal-entendidos sobre os requisitos.",
      "Melhora o processo de teste para projetos futuros.",
    ],
    ans: 2,
  },
  {
    q: "As revisões que estão sendo usadas em sua organização têm os seguintes atributos:\n\n• Há o papel de um redator.\n• O principal objetivo é avaliar a qualidade.\n• A reunião é conduzida pelo autor do produto de trabalho.\n• Há uma preparação individual.\n• É produzido um relatório de revisão.\n\nQual dos seguintes tipos de revisão é MAIS provável que esteja sendo usado?",
    opts: [
      "Walkthrough.",
      "Revisão informal.",
      "Inspeção.",
      "Revisão técnica.",
    ],
    ans: 0,
  },
  {
    q: "Qual dessas afirmações NÃO é um fator que contribui para revisões bem-sucedidas?",
    opts: [
      "Dividir grandes produtos de trabalho em pequenas partes para tornar o esforço necessário menos intenso.",
      "Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade com outros participantes.",
      "Os participantes devem dedicar tempo suficiente para a análise.",
      "As falhas encontradas devem ser reconhecidas, apreciadas e tratadas de forma objetiva.",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes é uma característica das técnicas de teste baseadas em experiência?",
    opts: [
      "As técnicas dependem muito do conhecimento do testador sobre o software e o domínio do negócio.",
      "Os casos de teste são usados para identificar desvios dos requisitos.",
      "Os casos de teste são criados com base em informações detalhadas do projeto.",
      "Os itens testados na seção de código da interface são usados para medir a cobertura.",
    ],
    ans: 0,
  },
  {
    q: "Você está testando um formulário simplificado de busca de apartamento que tem apenas dois critérios de busca:\n\n- Andar: térreo, primeiro andar, segundo andar  \n- Tipo de jardim: sem jardim, jardim pequeno, jardim grande  \n\nSomente apartamentos no andar térreo podem ter jardins. O formulário possui validação que impede combinações inválidas.\n\nVocê deseja aplicar o particionamento de equivalência (EP) para cobrir cada andar e cada tipo de jardim em seus testes.\n\nQual é o número mínimo de casos de teste para atingir 100% de cobertura do EP?",
    opts: [
      "6",
      "3",
      "5",
      "4",
    ],
    ans: 3,
  },
  {
    q: "Você está testando um sistema que calcula a nota final do curso para um determinado aluno.\n\nA nota final é atribuída com base no resultado final de pontos, de acordo com regras definidas, .\n\nVocê preparou o seguinte conjunto de casos de teste.\n\nQual é a cobertura da Análise de Valor Limite (BVA - Boundary Value Analysis) de dois valores para o resultado final obtido com os casos de teste existentes?",
    image: "src/imagens/simulados/A/q21.png",
    opts: [
      "50%",
      "100%",
      "33.3%",
      "60%",
    ],
    ans: 0,
  },
  {
    q: "Sua loja favorita de aluguel de bicicletas acaba de lançar um novo sistema de Gerenciamento de Relacionamento com o Cliente e pediu a você que o testasse.\n\nOs recursos implementados são os seguintes:\n- Qualquer pessoa pode alugar uma bicicleta, mas os membros recebem um desconto de 20%;\n- Se o prazo de devolução for perdido, o desconto não estará mais disponível;\n- Após 15 aluguéis, os membros ganham de presente uma camiseta.\n\nA tabela de decisão descreve os recursos implementados,\n\nCom base APENAS na descrição dos recursos do sistema, qual das regras abaixo descreve uma situação impossível?",
    image: "src/imagens/simulados/A/q22.png",
    opts: [
      "R2",
      "R8",
      "R6",
      "R4",
    ],
    ans: 1,
  },
  {
    q: "Você testa um sistema cujo ciclo de vida é modelado por um diagrama de transição de estado.\n\nO sistema começa no estado INIT e termina sua operação no estado OFF.\n\nQual é o número MÍNIMO de casos de teste para obter uma cobertura de transições válida?",
    image: "src/imagens/simulados/A/q23.png",
    opts: [
      "3",
      "7",
      "2",
      "4",
    ],
    ans: 0,
  },
  {
    q: "Seu conjunto de testes atingiu 100% de cobertura de instrução.\n Qual é a consequência desse fato?",
    opts: [
      "Cada combinação de valores de entrada foi testada pelo menos uma vez.",
      "Cada instrução no código que contém um defeito foi executada pelo menos uma vez.",
      "Cada caminho no código foi executado pelo menos uma vez.",
      "Qualquer conjunto de testes que contenha mais casos de teste do que o seu conjunto de testes também alcançará 100% de cobertura de instrução.",
    ],
    ans: 1,
  },
  {
    q: "Qual das opções a seguir NÃO é verdadeira para testes caixa-branca?",
    opts: [
      "As técnicas de teste caixa-branca podem ser usadas em testes estáticos.",
      "Durante o teste caixa-branca, toda a implementação do software é considerada.",
      "O teste caixa-branca pode ajudar a identificar lacunas na implementação dos requisitos.",
      "As métricas de cobertura caixa-branca podem ajudar a identificar testes adicionais para aumentar a cobertura do código.",
    ],
    ans: 2,
  },
  {
    q: "Qual das opções a seguir descreve MELHOR o conceito por trás da suposição de erros?",
    opts: [
      "A suposição de erros envolve o uso de seu conhecimento e experiência de defeitos encontrados no passado e erros típicos cometidos por desenvolvedores.",
      "A suposição de erros exige que você imagine que é o usuário do objeto de teste e adivinhe os erros que o usuário poderia cometer ao interagir com ele.",
      "A suposição de erros envolve o uso de sua experiência pessoal de desenvolvimento e os erros que você cometeu como desenvolvedor.",
      "A suposição de erros exige que você duplique rapidamente a tarefa de desenvolvimento para identificar os tipos de erros que um desenvolvedor pode cometer.",
    ],
    ans: 0,
  },
  {
    q: "Em seu projeto, houve um atraso no lançamento de um aplicativo totalmente novo e a execução do teste começou tarde, mas você tem um conhecimento de domínio muito detalhado e boas habilidades analíticas. \nA lista completa de requisitos ainda não foi compartilhada com a equipe, mas a gerência está pedindo que alguns resultados de testes sejam apresentados.\n\n Qual técnica de teste se encaixa MELHOR nessa situação?",
    opts: [
      "Suposição de erros.",
      "Testes exploratórios.",
      "Teste de ramificação.",
      "Testes baseados em listas de verificação.",
    ],
    ans: 1,
  },
  {
    q: "Qual das opções a seguir descreve MELHOR a maneira como os critérios de aceite podem ser documentados?",
    opts: [
      "Usar a comunicação verbal para reduzir o risco de outras pessoas não entenderem os critérios de aceite.",
      "Documentar os riscos relacionados a uma determinada história de usuário em um plano de teste para facilitar o teste baseado em riscos de uma determinada história de usuário.",
      "Realizar retrospectivas para determinar as necessidades reais dos stakeholders em relação a uma determinada história de usuário.",
      "Usar o formato dado/quando/então para descrever um exemplo de condição de teste relacionada a uma determinada história de usuário.",
    ],
    ans: 3,
  },
  {
    q: "Considere a seguinte história de usuário:\n\n\"Como editor, quero revisar o conteúdo antes de ser publicado, para que eu possa garantir que a gramática esteja correta.\"\n\nCritérios de aceite:\n- O usuário pode fazer login no sistema de gerenciamento de conteúdo com o papel de \"Editor\";\n- O editor pode visualizar as páginas de conteúdo existentes;\n- O editor pode editar o conteúdo da página;\n- O editor pode adicionar comentários de marcação;\n- O editor pode salvar as alterações;\n- O editor pode reatribuir a função de \"proprietário do conteúdo\" para fazer atualizações.\n\nQual dos seguintes é o MELHOR exemplo de um teste ATDD para essa história de usuário?",
    opts: [
      "Testar se o editor pode salvar o documento após excluir o conteúdo da página.",
      "Testar se o editor pode programar o conteúdo editado para publicação.",
      "Testar se o proprietário do conteúdo pode fazer login e fazer atualizações no conteúdo.",
      "Testar se o editor pode reatribuir a outro editor para fazer atualizações.",
    ],
    ans: 0,
  },
  {
    q: "Como os testadores agregam valor aos planejamentos de iteração e lançamento?",
    opts: [
      "Os testadores determinam a prioridade das histórias de usuários a serem desenvolvidas.",
      "Os testadores se concentram apenas nos aspectos funcionais do sistema a ser testado.",
      "Os testadores participam da identificação de riscos e da avaliação de riscos das histórias de usuários.",
      "Os testadores garantem o lançamento de software de alta qualidade por meio de um projeto de teste antecipado durante o planejamento do lançamento.",
    ],
    ans: 2,
  },
  {
    q: "Quais das DUAS opções a seguir são critérios de saída para testar um sistema?",
    opts: [
      "Prontidão do ambiente de teste.",
      "Os requisitos são traduzidos para o formato dado/quando/então.",
      "A capacidade do testador de fazer login no objeto de teste.",
      "Os testes de regressão são automatizados.",
      "A densidade de defeitos estimada é atingida.",
    ],
    ans: [3, 4],
    multi: true,
  },
  {
    q: "Sua equipe usa a técnica de estimativa de três pontos para estimar o esforço de teste de um novo recurso de alto risco. Foram feitas as seguintes estimativas: \n\nEstimativa mais otimista: 2 homens/hora; \nEstimativa mais provável: 11 homens/hora; \nEstimativa mais pessimista: 14 homens/hora. \n\nQual é a estimativa final?",
    opts: [
      "9 homens/hora",
      "11 homens/hora",
      "14 homens/hora",
      "10 homens/hora",
    ],
    ans: 3,
  },
  {
    q: "Você está testando um aplicativo móvel que permite que os usuários encontrem um restaurante próximo com base no tipo de comida que desejam comer.\n\nConsidere a seguinte lista de casos de teste, prioridades (quanto menor o número, maior a prioridade) e dependências \n\nQual dos seguintes casos de teste deve ser o terceiro a ser executado?",
    image: "src/imagens/simulados/A/q33.png",
    opts: [
      "TC 003",
      "TC 005",
      "TC 001",
      "TC 002",
    ],
    ans: 0,
  },
  {
    q: "Considere as seguintes categorias de teste (1-4) e os quadrantes de teste ágil (A-D):\n\n(1) Teste de usabilidade\n(2) Teste de componentes\n(3) Teste funcional\n(4) Teste de confiabilidade\n\n(A) Q1: voltado para a tecnologia, apoiando o desenvolvimento\n(B) Q2: voltado para o negócio, apoiando o desenvolvimento\n(C) Q3: voltado para o negócio, crítica do produto\n(D) Q4: voltado para a tecnologia, crítica do produto\n\nComo essas categorias de teste são mapeadas nos quadrantes de teste ágil?",
    opts: [
      "1D, 2A, 3C, 4B",
      "1C, 2B, 3D, 4A",
      "1D, 2B, 3C, 4A",
      "1C, 2A, 3B, 4D",
    ],
    ans: 3,
  },
  {
    q: "Durante uma análise de risco, o seguinte risco foi identificado e avaliado:\n\nRisco: o tempo de resposta é muito longo para gerar um relatório\nProbabilidade do risco: média\nImpacto do risco: alto\n\nResposta ao risco:\n(1) uma equipe de teste independente realiza testes de performance durante o teste do sistema;\n(2) uma amostra selecionada de usuários finais realiza testes de aceite alfa e beta antes do lançamento.\n\nQue medida é proposta para ser tomada em resposta a esse risco analisado?",
    opts: [
      "Aceite de riscos.",
      "Plano de contingência.",
      "Mitigação de riscos.",
      "Transferência de risco.",
    ],
    ans: 2,
  },
  {
    q: "Qual ferramenta pode ser usada por uma equipe ágil para mostrar a quantidade de trabalho que foi concluída e a quantidade de trabalho total restante para uma determinada iteração?",
    opts: [
      "Critérios de aceite.",
      "Relatório de conclusão do teste.",
      "Relatório de defeitos.",
      "Gráfico de Burndown.",
    ],
    ans: 3,
  },
  {
    q: "Você precisa atualizar um dos scripts de teste automatizados para que esteja de acordo com um novo requisito. \nQual processo indica que você deve criar uma nova versão do script de teste no repositório de testes?",
    opts: [
      "Engenharia de Requisitos.",
      "Teste de Manutenção.",
      "Gerenciamento de Configuração.",
      "Gerenciamento de Rastreabilidade.",
    ],
    ans: 2,
  },
  {
    q: "Você recebeu o seguinte relatório de defeito dos desenvolvedores afirmando que a anomalia descrita neste relatório de teste não é reproduzível.\n\n\nO aplicativo desliga\n2022-May-03 - John Doe - Rejeitado\n\nO aplicativo desliga depois de inserir \"Test input: $ä\" no campo Nome na tela de criação de novo usuário. Tentei fazer logoff e fazer login com a conta test_admin01, o mesmo problema. Tentei com outras contas de administrador de teste, o mesmo problema. Nenhuma mensagem de erro recebida; o registro (veja anexo) contém notificação de erro fatal. Com base no caso de teste TC-1305, o aplicativo deve aceitar a entrada fornecida e criar o usuário. Corrija com alta prioridade, pois esse recurso está relacionado ao REQ-0012, que é um novo requisito crítico de negócio.\n\nQue informações essenciais estão FALTANDO nesse relatório de teste que teriam sido úteis para os desenvolvedores?",
    opts: [
      "Prioridade e gravidade.",
      "Referências e status do defeito.",
      "Resultado esperado e resultado real.",
      "Ambiente de teste e item de teste.",
    ],
    ans: 3,
  },
  {
    q: "Qual atividade de teste é suportada por uma ferramenta de preparação de dados?",
    opts: [
      "Monitoramento e controle de testes.",
      "Implementação e execução de testes.",
      "Conclusão do teste.",
      "Análise e projeto de testes.",
    ],
    ans: 1,
  },
  {
    q: "Qual item identifica corretamente um risco potencial de realizar a automação de testes?",
    opts: [
      "As ferramentas de teste e o material de teste associado podem não ser suficientemente confiáveis.",
      "Ele pode introduzir regressões desconhecidas na produção.",
      "Pode reduzir o tempo alocado para testes manuais.",
      "Esforços suficientes para manter o material de teste podem não ser alocados adequadamente.",
    ],
    ans: 3,
  },
  {
    q: "Você recebeu a tarefa de analisar e corrigir as causas de falhas em um novo sistema a ser lançado. Que atividade você está realizando?",
    opts: [
      "Teste de software.",
      "Solicitação de requisitos.",
      "Depuração.",
      "Gerenciamento de defeitos.",
    ],
    ans: 2,
  },
  {
    q: "Em muitas organizações de software, o departamento de testes é chamado de departamento de Garantia de Qualidade (QA). \n\nEssa frase está correta ou não e por quê?",
    opts: [
      "INCORRETO. O teste é algo mais; o teste inclui todas as atividades relacionadas à qualidade. O controle de qualidade se concentra nos processos relacionados à qualidade.",
      "CORRETO. Esses nomes podem ser usados de forma intercambiável porque tanto os testes quanto a garantia de qualidade concentram suas atividades nos mesmos problemas de qualidade.",
      "CORRETO. Teste e controle de qualidade significam exatamente a mesma coisa.",
      "INCORRETO. A QA se concentra nos processos relacionados à qualidade, enquanto os testes se concentram em demonstrar que um componente ou sistema é adequado à finalidade e em detectar defeitos.",
    ],
    ans: 3,
  },
  {
    q: "Um telefone tocando em um cubículo vizinho distrai um programador, fazendo com que ele codifique de forma inadequada a lógica que verifica o limite superior de uma variável de entrada. Mais tarde, durante o teste do sistema, um testador percebe que esse campo de entrada aceita valores de entrada inválidos. \n\nQual das opções a seguir descreve corretamente um limite superior codificado incorretamente?",
    opts: [
      "Um defeito",
      "A causa principal",
      "Uma falha",
      "Um erro",
    ],
    ans: 0,
  },
  {
    q: "Considere o seguinte testware: \n\nQual atividade de teste produz esse testware como resultado?",
    image: "src/imagens/simulados/A/q44.png",
    opts: [
      "Análise de teste",
      "Monitoramento e controle de testes",
      "Planejamento de testes",
      "Projeto de teste",
    ],
    ans: 3,
  },
  {
    q: "Qual dos seguintes é o MELHOR exemplo de como a rastreabilidade apoia os testes?",
    opts: [
      "A realização da análise de impacto de uma mudança fornecerá informações sobre a conclusão dos testes.",
      "A análise da rastreabilidade entre os casos de teste e os resultados do teste fornecerá informações sobre o nível estimado de risco residual.",
      "A análise da rastreabilidade entre a base de teste, os objetos de teste e os casos de teste ajudará a selecionar os dados de teste para atingir a cobertura presumida do objeto de teste.",
      "A realização da análise de impacto de uma mudança ajudará a selecionar os casos de teste corretos para o teste de regressão.",
    ],
    ans: 3,
  },
  {
    q: "Qual das opções a seguir explica MELHOR um benefício da independência dos testes?",
    opts: [
      "Uma equipe de testes independente pode trabalhar separadamente dos desenvolvedores, não precisa se distrair com as mudanças nos requisitos do projeto e pode restringir a comunicação com os desenvolvedores ao relatório de defeitos por meio do sistema de gerenciamento de defeitos.",
      "Se for possível contar com uma equipe de teste externa à organização, haverá benefícios distintos em termos de essa equipe externa não ser tão facilmente influenciada pelas preocupações de entrega do gerenciamento de projetos e pela necessidade de cumprir prazos de entrega rigorosos.",
      "Quando as especificações contêm ambiguidades e inconsistências, são feitas suposições sobre sua interpretação, e um testador independente pode ser útil para questionar essas suposições e a interpretação feita pelo desenvolvedor.",
      "O uso de uma equipe de teste independente permite que o gerenciamento do projeto atribua à equipe de teste a responsabilidade pela qualidade da entrega final.",
    ],
    ans: 2,
  },
  {
    q: "Você está trabalhando como testador em uma equipe que segue o modelo V.\n\n Como a escolha desse modelo de ciclo de vida de desenvolvimento de software (SDLC) afeta o cronograma dos testes?",
    opts: [
      "Os testes dinâmicos não podem ser realizados no início do SDLC.",
      "O teste estático não pode ser realizado no início do SDLC.",
      "O teste de aceite pode ser realizado no início do SDLC.",
      "O planejamento de testes não pode ser realizado no início do SDLC.",
    ],
    ans: 0,
  },
  {
    q: "Você trabalha como testador em um projeto de um aplicativo móvel para pedidos de comida para um de seus clientes. \n O cliente enviou um requisito: 'O pedido deve ser processado em menos de 10 segundos em 95% dos casos'.\n\\ Você criou um conjunto de casos de teste em que foram feitos vários pedidos aleatórios, o tempo de processamento foi medido e os resultados foram comparados com os requisitos.\nQue tipo de teste você realizou?",
    opts: [
      "Funcional, porque os casos de teste abrangem os requisitos de negócio do usuário para o sistema.",
      "Estrutural, porque precisamos conhecer a estrutura interna do programa para medir o tempo de processamento de pedidos.",
      "Funcional, porque os casos de teste interagem com a interface do usuário.",
      "Não funcionais, pois medem o desempenho do sistema.",
    ],
    ans: 3,
  },
  {
    q: "Quais são as vantagens do DevOps?\n\ni. Lançamento de produtos e tempo de comercialização mais rápidos; \nii. Aumenta a necessidade de testes manuais repetitivos;\niii. Disponibilidade constante de software executável;\niv. Redução do número de testes de regressão associados à refatoração do código;\nv. A configuração da estrutura de automação de testes é barata, pois tudo é automatizado.",
    opts: [
      "São vantagens: i, iii; não são: ii, iv, v.",
      "São vantagens: ii, iv, v; não são: i, iii.",
      "São vantagens: iii, v; não são: i, ii, iv.",
      "São vantagens: i, ii, iv; não são: iii, v.",
    ],
    ans: 0,
  },
  {
    q: "A estratégia de teste de sua organização sugere que, quando um sistema for desativado, a migração de dados deverá ser testada.\n Como parte de que tipo de teste é mais provável que esse teste seja realizado?",
    opts: [
      "Teste de componentes.",
      "Teste de integração.",
      "Teste de manutenção.",
      "Teste de regressão.",
    ],
    ans: 2,
  },
  {
    q: "A seguir, uma lista dos produtos de trabalho produzidos no SDLC.\n\ni. Requisitos de negócios;\nii. Cronograma;\niii. Orçamento de teste;\niv. Código executável de terceiros;\nv. Histórias de usuários e seus critérios de aceite.\n\nQuais deles podem ser revisados?",
    opts: [
      "Podem ser revisados: i, ii, iii e iv; não podem: v.",
      "Podem ser revisados: i e iv; não podem: ii, iii e v.",
      "Podem ser revisados: iii, iv e v; não podem: i e ii.",
      "Podem ser revisados: i, ii, iii e v; não podem: iv.",
    ],
    ans: 3,
  },
  {
    q: "Decida quais das seguintes afirmações (i-v) são verdadeiras para testes dinâmicos e quais são verdadeiras para testes estáticos.\n\ni. Os comportamentos externos anormais são mais fáceis de identificar com esse teste;\nii. As discrepâncias em relação a um padrão de codificação são mais fáceis de encontrar com esse teste;\niii. Ele identifica as falhas causadas por defeitos quando o software é executado;\niv. Seu objetivo de teste é identificar defeitos o mais cedo possível;\nv. A falta de cobertura para requisitos críticos de segurança é mais fácil de encontrar e corrigir.",
    opts: [
      "Testes Estáticos: ii, iv e v; Testes Dinâmicos: i, iii e iv",
      "Testes Estáticos: i, iv e v; Testes Dinâmicos: ii e iii.",
      "Testes Estáticos: i, iii e iv; Testes Dinâmicos: ii e v",
      "Testes Estáticos: ii e iii; Testes Dinâmicos: i, iv e v.",
    ],
    ans: 0,
  },
  {
    q: "Qual das seguintes afirmações sobre revisões formais é VERDADEIRA?",
    opts: [
      "Os defeitos encontrados durante a revisão não são relatados, pois não são encontrados no teste dinâmico.",
      "Algumas revisões não exigem mais de uma função.",
      "A documentação a ser revisada não é distribuída antes da reunião de revisão, com exceção do produto de trabalho para tipos específicos de revisão.",
      "O processo de revisão tem várias atividades.",
    ],
    ans: 3,
  },
];

// ============================================================
// SIMULADO B
// ============================================================

const SIMULADO_B = [
  {
    q: "Qual dos seguintes é um exemplo do porquê testar é necessário?",
    opts: [
      "Teste estático é usado pelos desenvolvedores para identificar falhas em seu código de programa mais cedo do que pode ser alcançado através do teste dinâmico.",
      "Análise estática fornece evidências aos clientes de que os elementos do sistema que não fornecem saídas são adequados para lançamento.",
      "Teste dinâmico aumenta a qualidade ao fazer com que objetos de teste falhem de maneiras que nunca poderiam ser alcançadas pelos usuários.",
      "Revisões aumentam a qualidade das especificações de requisitos e levam a menos alterações sendo necessárias nos produtos de trabalho derivados.",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes afirmações sobre garantia de qualidade (QA) e/ou controle de qualidade está correta?",
    opts: [
      "QA é realizada como parte dos testes",
      "Os testes são realizados como parte do QC",
      "Testar é outro termo para QC",
      "Os testes são realizados como parte da QA",
    ],
    ans: 1,
  },
  {
    q: "Um dos 'princípios de teste' afirma que testes exaustivos são impossíveis.\n\n Qual das seguintes opções é um exemplo de abordar esse princípio na prática?",
    opts: [
      "Usar particionamento de equivalência e análise de valores limite para gerar casos de teste.",
      "Documentar todas as variações de entrada de teste possíveis e priorizá-las com base na importância.",
      "Iniciar os testes o mais cedo possível com revisões e outras abordagens de teste estático.",
      "Criar casos de teste que cubram todas as possíveis saídas especificadas.",
    ],
    ans: 0,
  },
  {
    q: "Qual atividade de teste envolve trabalhar com requisitos de dados de teste, condições de teste, requisitos de ambiente de teste e casos de teste?",
    opts: [
      "Modelagem de Teste",
      "Implementação de teste",
      "Análise de teste",
      "Execução de teste",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes é MAIS provável de impactar como os testes são realizados para um determinado objeto de teste?",
    opts: [
      "O conhecimento dos usuários para os quais um novo sistema está sendo desenvolvido",
      "O número de anos de experiência dos membros da equipe de teste",
      "A estrutura organizacional do usuário final para um aplicativo de streaming de música comercial",
      "O nível médio de experiência da equipe de marketing da organização",
    ],
    ans: 1,
  },
  {
    q: "Qual das seguintes afirmações é um exemplo CORRETO do valor da rastreabilidade?",
    opts: [
      "Rastreabilidade entre os requisitos do usuário e os resultados da execução do teste fornece um meio de medir o progresso do projeto em relação aos objetivos comerciais.",
      "Rastreabilidade entre os testadores e casos de teste com falha fornece um meio de determinar o nível de habilidade dos testadores.",
      "Rastreabilidade entre os riscos mitigados e os casos de teste aprovados fornece um meio de determinar o nível de risco residual.",
      "Rastreabilidade entre os riscos identificados e condições de teste escritas fornece um meio de determinar quais riscos valem a pena testar.",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um exemplo de um testador usando uma habilidade genérica ao testar?",
    opts: [
      "O profundo conhecimento do testador em uma variedade de jogos de computador fez com que se desse bem com um dos desenvolvedores que também era fã de jogos.",
      "O testador era um ex-piloto e foi capaz de entender melhor os critérios de aceitação para o sistema de controle de helicópteros.",
      "O testador trabalhou anteriormente como programador e usou suas habilidades nessa área para se comunicar melhor com os analistas de negócios.",
      "O testador foi muito cuidadoso para não cometer erros ao gerar metodicamente casos de teste antes de iniciar sua sessão de teste exploratório.",
    ],
    ans: 1,
  },
  {
    q: "Qual dos seguintes é uma vantagem da abordagem de equipe inteira?",
    opts: [
      "Apenas requer uma única equipe para apoiar o projeto de desenvolvimento completo",
      "Incorpora representantes de negócios ao lado de desenvolvedores na mesma equipe",
      "Gera uma sinergia de equipe que beneficia o projeto inteiro",
      "Permite que os membros da equipe assumam qualquer papel a qualquer momento",
    ],
    ans: 2,
  },
  {
    q: "Qual das seguintes afirmações sobre o ciclo de vida de desenvolvimento de software escolhido é CORRETA?",
    opts: [
      "Se o desenvolvimento de software ágil for utilizado, a automação de teste de sistema substitui a necessidade de testes de regressão.",
      "Se um modelo de desenvolvimento iterativo for utilizado, então o teste de componentes é tipicamente realizado manualmente pelos desenvolvedores.",
      "Se um modelo de desenvolvimento sequencial for utilizado, então o teste dinâmico é tipicamente restrito a estágios posteriores no ciclo de vida.",
      "Se um modelo de desenvolvimento incremental for utilizado, então o teste estático é realizado nos incrementos iniciais e o teste dinâmico nos incrementos posteriores.",
    ],
    ans: 2,
  },
  {
    q: "Qual dos seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
    opts: [
      "Os testadores devem revisar os produtos de trabalho como parte da próxima fase de desenvolvimento.",
      "Os testadores devem revisar os produtos de trabalho imediatamente após serem publicados.",
      "Os testadores devem revisar os produtos de trabalho antes que a análise e o design de teste comecem.",
      "Os testadores devem revisar os produtos de trabalho assim que os rascunhos estiverem disponíveis",
    ],
    ans: 3,
  },
  {
    q: "Qual dos seguintes é um exemplo de uma abordagem de desenvolvimento orientada por testes?",
    opts: [
      "Desenvolvimento Orientado pela Qualidade (Quality-Driven Development)",
      "Desenvolvimento Orientado por Recursos (Feature-Driven Development)",
      "Desenvolvimento Orientado por Cobertura (Coverage-Driven Development)",
      "Desenvolvimento Orientado por Testes (Test-Driven Development)",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes afirmações sobre o DevOps é CORRETA?",
    opts: [
      "Para poder atualizar e lançar sistemas com mais frequência, muitos testes de regressão automatizados são necessários para reduzir o perigo de regressão.",
      "Para acelerar os lançamentos, a integração contínua é usada para incentivar os desenvolvedores a enviar código rapidamente, sem a necessidade de concluir testes de componentes.",
      "Para criar uma sinergia aumentada entre testadores, desenvolvedores e operações, os testes devem se tornar totalmente automatizados, sem nenhum teste manual.",
      "Para tratar tanto desenvolvedores quanto operações igualmente, os testadores alocarão mais esforço para o teste de lançamento pelas operações usando uma abordagem shift-right.",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser realizado como parte dos testes de sistema?",
    opts: [
      "Testar a interface de um sistema de câmbio de moedas com um sistema bancário externo",
      "Teste beta de um sistema de aprendizagem remota por desenvolvedores de material didático",
      "Testar as interações entre a interface do usuário e o banco de dados de um sistema de recursos humanos",
      "Teste de segurança de um sistema de gestão de crédito por uma equipe de teste independente",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes afirmações é CORRETA?",
    opts: [
      "O teste de regressão se preocupa em verificar se o ambiente operacional permanece inalterado, enquanto o teste de confirmação se preocupa em testar as mudanças no objeto de teste.",
      "Os testes de regressão são criados e executados quando o objeto de teste é corrigido, enquanto os testes de confirmação são executados sempre que o objeto de teste é aprimorado.",
      "O teste de regressão se preocupa com efeitos adversos no código inalterado, enquanto o teste de confirmação se preocupa em testar o código alterado.",
      "Os testes de regressão aumentam em número à medida que o projeto avança, enquanto o número de testes de confirmação diminui à medida que o projeto avança.",
    ],
    ans: 2,
  },
  {
    q: "Qual dos seguintes é um exemplo de defeito que pode ser encontrado por testes estáticos, mas NÃO por testes dinâmicos?",
    opts: [
      "Falta de usabilidade fornecida pela interface do usuário",
      "Recursos necessários que não estão implementados no código",
      "Código sem nenhum caminho que o alcance",
      "Tempos de resposta ruins para a maioria dos usuários esperados",
    ],
    ans: 2,
  },
  {
    q: "Qual dos seguintes é um benefício do feedback precoce e frequente das partes interessadas?",
    opts: [
      "Isso permite que os gerentes de projeto priorizem suas interações com as partes interessadas",
      "Facilita a comunicação precoce de possíveis problemas de qualidade",
      "Os gerentes estão cientes de quais desenvolvedores são menos produtivos",
      "Os usuários finais entendem melhor por que a entrega do produto de trabalho está atrasada",
    ],
    ans: 1,
  },
  {
    q: "Dadas as seguintes descrições de tarefa:\n\n1. As características de qualidade a serem avaliadas e os critérios de saída são selecionados\n2. Todos têm acesso ao produto de trabalho\n3. Anomalias são identificadas no produto de trabalho\n4. Anomalias são discutidas\n\nE as seguintes atividades de revisão:\n\nA. Revisão individual\nB. Início da revisão\nC. Planejamento\nD. Comunicação e análise\n\nQual das seguintes MELHOR corresponde às descrições de tarefa e atividades?",
    opts: [
      "1B, 2D, 3C, 4A",
      "1B, 2C, 3D, 4A",
      "1C, 2B, 3A, 4D",
      "1C, 2A, 3B, 4D",
    ],
    ans: 2,
  },
  {
    q: "Dadas as seguintes funções em revisões:\n\n1. Escrivão\n2. Líder da revisão\n3. Facilitador\n4. Gerente\n\nE as seguintes responsabilidades em revisões:\n\nA. Garante o funcionamento eficaz das reuniões de revisão e a criação de um ambiente de revisão seguro\nB. Registra informações da revisão, como decisões e novas anomalias encontradas durante a reunião de revisão\nC. Decide o que será revisado e fornece recursos, como pessoal e tempo para a revisão\nD. Assume a responsabilidade geral pela revisão, como organizar quando e onde a revisão ocorrerá\n\nQual das seguintes MELHOR corresponde às funções e responsabilidades?",
    opts: [
      "1B, 2D, 3A, 4C",
      "1A, 2B, 3D, 4C",
      "1A, 2C, 3B, 4D",
      "1B, 2D, 3C, 4A",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes afirmações DESCREVE MELHOR a diferença entre o teste de tabela de decisão e o teste de ramificação?",
    opts: [
      "No teste de tabela de decisão, os casos de teste são independentes de como o software é implementado. No teste de ramificação, os casos de teste só podem ser criados após o design ou implementação do código.",
      "No teste de tabela de decisão, os casos de teste são derivados das declarações de decisão no código. No teste de ramificação, os casos de teste são derivados do conhecimento do fluxo de controle do objeto de teste.",
      "No teste de tabela de decisão, os casos de teste são derivados da especificação que descreve a lógica de negócios. No teste de ramificação, os casos de teste são baseados na antecipação de possíveis defeitos no código-fonte.",
      "No teste de tabela de decisão, os casos de teste são derivados do conhecimento do fluxo de controle do objeto de teste. No teste de ramificação, os casos de teste são derivados da especificação que descreve a lógica de negócios.",
    ],
    ans: 0,
  },
  {
    q: "Clientes da cadeia de lava-rápidos TestWash têm cartões com um registro do número de lavagens que eles compraram até agora. O valor inicial é 0. Após entrar no lava-rápido, o sistema aumenta o número no cartão em um. Esse valor representa o número da lavagem atual. Com base nesse número, o sistema decide qual desconto o cliente tem direito. Para cada décima lavagem, o sistema oferece um desconto de 10%, e para cada vigésima lavagem, o sistema oferece mais um desconto de 40% (ou seja, um desconto total de 50%).\n\nQual dos seguintes conjuntos de dados de entrada (entendidos como os números da lavagem atual) alcança a cobertura de partição de equivalência mais alta?",
    opts: [
      "11, 12, 20",
      "19, 20, 30",
      "1, 10, 50",
      "10, 29, 30, 31",
    ],
    ans: 1,
  },
  {
    q: "Você está testando um formulário que verifica a correção do comprimento da senha fornecida como entrada. O formulário aceita uma senha com o comprimento correto e rejeita uma senha que é muito curta ou muito longa. O comprimento da senha é considerado correto se tiver entre 6 e 12 caracteres, inclusivamente. Caso contrário, é considerado incorreto.\n\nInicialmente, o formulário está vazio (comprimento da senha = 0). Você aplica a análise de valores de fronteira à variável \\\\\"comprimento da senha\\\\\".\n\nSeu conjunto de casos de teste alcança 100% de cobertura de valores de fronteira de 2 valores. A equipe decidiu que, devido ao alto risco desse componente, casos de teste devem ser adicionados para garantir 100% de cobertura de valores de fronteira de 3 valores.\n\nQuais comprimentos de senha adicionais devem ser testados para alcançar isso?",
    opts: [
      "4, 5, 13, 14",
      "7, 11",
      "1, 5, 13",
      "1, 4, 7, 11, 14",
    ],
    ans: 3,
  },
  {
    q: "A tabela de decisão a seguir contém as regras para determinar o risco de aterosclerose.\n\nVocê projetou os casos de teste com os seguintes dados de entrada de teste:\n\nTC1: Colesterol = 125 mg/dl Pressão sanguínea = 141 mmHg\nTC2: Colesterol = 200 mg/dl Pressão sanguínea = 201 mmHg\nTC3: Colesterol = 124 mg/dl Pressão sanguínea = 201 mmHg\nTC4: Colesterol = 109 mg/dl Pressão sanguínea = 200 mmHg\nTC5: Colesterol = 201 mg/dl Pressão sanguínea = 140 mmHg\n\nQual é a cobertura da tabela de decisão alcançada por esses casos de teste?",
    image: "src/imagens/simulados/B/q22.png",
    opts: [
      "60%",
      "80%",
      "40%",
      "100%",
    ],
    ans: 0,
  },
  {
    q: "Um sistema de armazenamento pode armazenar até três elementos e é modelado pelo seguinte diagrama de transição de estados. A variável N representa o número de elementos atualmente armazenados.\n\nQual dos seguintes casos de teste, representados como sequências de eventos, alcança o maior nível de cobertura de transições válidas?",
    image: "src/imagens/simulados/B/q23.png",
    opts: [
      "Add, Remove, Add, Add, Add",
      "Add, Add, Add, Remove, Add",
      "Add, Add, Add, Add, Remove, Remove",
      "Add, Add, Add, Remove, Remove",
    ],
    ans: 3,
  },
  {
    q: "Você executou dois casos de teste, T1 e T2, no mesmo código.\n O teste T1 alcançou 40% de cobertura de instruções e o teste T2 alcançou 65% de cobertura de instruções.\n\nQual das seguintes afirmações deve ser necessariamente verdadeira?",
    opts: [
      "Existe pelo menos uma instrução que deve ter sido executada tanto por T1 quanto por T2",
      "O conjunto de testes composto pelos testes T1 e T2 alcança 105% de cobertura de instruções",
      "O conjunto de testes composto pelos testes T1 e T2 alcança cobertura total de branches",
      "Pelo menos 5% das instruções no código em teste são não executáveis",
    ],
    ans: 0,
  },
  {
    q: "Seja a métrica de cobertura de ramificação definida como:\n\n O que X e Y representam nesta fórmula?",
    image: "src/imagens/simulados/B/q25.png",
    opts: [
      "X = número de resultados de decisões exercidos pelos casos de teste; Y = número total de resultados de decisão no código",
      "X = número de ramificações condicionais exercidos pelos casos de teste; Y = número total de ramificações no código",
      "X = número de ramificações condicionais exercidas pelos casos de teste; Y = número total de resultados de decisão no código",
      "X = número de ramificações exercidas pelos casos de teste; Y = número total de ramificações no código",
    ],
    ans: 3,
  },
  {
    q: "Quais DUAS das seguintes afirmações fornecem a MELHOR justificativa para usar testes exploratórios?",
    opts: [
      "A especificação é escrita em uma linguagem formal que pode ser processada por uma ferramenta",
      "Os testadores têm experiência no domínio de negócios e têm boas habilidades analíticas",
      "Os testadores são membros de uma equipe ágil e têm boas habilidades de programação",
      "Os testadores não foram alocados tempo suficiente para o design e execução de testes",
      "A estratégia de teste existente requer que os testadores usem técnicas formais de teste caixa-preta",
    ],
    ans: [1, 3],
    multi: true,
  },
  {
    q: "Qual dos seguintes se encaixa MELHOR como um elemento da lista de verificação usada no teste baseado em lista de verificação?",
    opts: [
      "“O programa funciona corretamente em relação aos requisitos funcionais e não funcionais”",
      "“As mensagens de erro são escritas em uma linguagem que o usuário pode entender”",
      "“O desenvolvedor cometeu um erro ao implementar o código”",
    ],
    ans: 1,
  },
  {
    q: "Considere os seguintes critérios de aceitação para uma história de usuário escrita da perspectiva de um proprietário de loja online.\n\nDado que o usuário está logado e na página inicial,\nQuando o usuário clica no botão \\\\\"Adicionar Item\\\\\",\nEntão o formulário \\\\\"Criar Item\\\\\" deve aparecer,\nE o usuário deve ser capaz de inserir um nome e preço para o novo item.\n\nEm que formato esses critérios de aceitação estão escritos?",
    opts: [
      "Orientado a Produto",
      "Orientado a Regras",
      "Orientado a Cenários",
      "Orientado a Processos",
    ],
    ans: 2,
  },
  {
    q: "Sua equipe analisa a seguinte história do usuário para definir os critérios de aceitação:\nComo cliente registrado, quero poder visualizar meus pedidos anteriores no site da empresa, para que eu possa acompanhar minhas compras.\n\nQual dos seguintes casos de teste NÃO será relevante para esta história de usuário?",
    opts: [
      "Entrada: o cliente clica no botão \\\\\"Ordenar ascendente\\\\\" na tela de histórico de pedidos Saída esperada: o sistema mostra o histórico de pedidos ordenado pelo número do pedido em ordem ascendente",
      "Entrada: o cliente faz login em sua conta no site e clica no botão \\\\\"ver histórico de pedidos\\\\\" Saída esperada: o sistema mostra uma lista de todos os pedidos anteriores do cliente, incluindo a data, número do pedido e custo total",
      "Entrada: um cliente não registrado se registra como novo cliente com um endereço de e-mail válido",
      "Entrada: o cliente clica em um pedido na lista de pedidos Saída esperada: o sistema exibe os itens individuais comprados, juntamente com seus preços e quantidades",
    ],
    ans: 2,
  },
  {
    q: "A sua equipe segue o processo que utiliza o pipeline de entrega do DevOps. Os três primeiros passos desse processo são:\n\n(1) Desenvolvimento de código\n(2) Submissão do código em um sistema de controle de versão e mesclagem dele no ramo \\\\\"teste\\\\\"\n(3) Realização de testes de componentes para o código submetido\n\nQual dos seguintes é o MELHOR critério de entrada para o passo (2) deste pipeline?",
    opts: [
      "Análise estática não retorna avisos de alta gravidade para o código enviado",
      "Testes de componente são compilados e prontos para serem executados",
      "Controle de versão do sistema não relata conflitos ao mesclar código no ramo \\\\\"teste\\\\\"",
      "Cobertura de declaração é de pelo menos 80%",
    ],
    ans: 0,
  },
  {
    q: "Para estimar o esforço de teste para o novo projeto usando a estimativa baseada em proporções, precisamos calcular a proporção média entre o esforço de teste e o esforço de desenvolvimento, utilizando dados médios de desenvolvimento e teste de quatro projetos históricos similares ao novo projeto. A tabela mostra esses dados históricos. \n\nO esforço de desenvolvimento estimado para o novo projeto é de $800.000. \n\nQual é a sua estimativa para o esforço de teste neste projeto?",
    image: "src/imagens/simulados/B/q31.png",
    opts: [
      "$81,250",
      "$82,500",
      "$40,000",
      "$80,000",
    ],
    ans: 3,
  },
  {
    q: "Você está testando uma aplicação web que permite aos usuários BUSCAR por produtos, VER detalhes do produto, ADICIONAR produtos a um carrinho de compras e fazer um PEDIDO.\n Você preparou os seguintes cinco casos de teste, que deseja executar de acordo com suas prioridades:\n\nTC1: BUSCAR produto A   Prioridade: média\nTC2: VER detalhes do produto A   Prioridade: baixa\nTC3: ADICIONAR produto B ao carrinho de compras   Prioridade: média\nTC4: ADICIONAR produto C ao carrinho de compras   Prioridade: alta\nTC5: fazer um PEDIDO   Prioridade: alta\n\nVocê também identificou as seguintes dependências lógicas entre os casos de teste:\n\n-A funcionalidade de BUSCA deve ser testada antes que a funcionalidade de VISUALIZAÇÃO possa ser testada, pois os detalhes do produto dependem da funcionalidade de busca.\n-A funcionalidade de VISUALIZAÇÃO deve ser testada antes da funcionalidade de ADIÇÃO, pois adicionar produtos depende da disponibilidade de detalhes precisos do produto.\n-A funcionalidade de ADIÇÃO deve ser testada antes da funcionalidade de PEDIDO, pois fazer um pedido depende da disponibilidade de informações precisas do carrinho de compras.\n\nQual caso de teste deve ser executado como o quarto?",
    opts: [
      "TC1",
      "TC4",
      "TC2",
      "TC3",
    ],
    ans: 3,
  },
  {
    q: "De acordo com o modelo de quadrantes de teste, qual das seguintes opções se enquadra no quadrante Q1 (\\\\\"orientado à tecnologia\\\\\" e \\\\\"suporte à equipe\\\\\")?",
    opts: [
      "Teste funcional",
      "Teste de integração de componentes",
      "Teste de aceitação do usuário",
      "Teste de usabilidade",
    ],
    ans: 1,
  },
  {
    q: "Dadas os seguintes riscos:\n\n1. Implementação de loop ineficaz causa respostas longas do sistema\n2. Consumidores alteram suas preferências\n3. Inundação da sala do servidor\n4. Pacientes acima de uma certa idade recebem relatórios imprecisos\n\nE as seguintes atividades de mitigação:\n\nA. Aceitação do risco\nB. Teste de desempenho\nC. Utilização da análise de valor limite como técnica de teste\nD. Transferência de risco\n\nQual das seguintes opções melhor corresponde aos riscos com as atividades de mitigação?",
    opts: [
      "1C, 2A, 3D, 4B",
      "1C, 2D, 3A, 4B",
      "1B, 2D, 3A, 4C",
      "1B, 2A, 3D, 4C",
    ],
    ans: 3,
  },
  {
    q: "Qual dos seguintes é uma métrica de qualidade do produto?",
    opts: [
      "Cobertura de requisitos",
      "Número de defeitos encontrados",
      "Percentual de detecção de defeitos",
      "Tempo médio até a falha",
    ],
    ans: 3,
  },
  {
    q: "Você é membro de uma equipe de teste localizada na América do Norte, desenvolvendo um produto para um cliente localizado na Europa. \nA equipe é ágil e segue a abordagem DevOps, usando um pipeline de integração/distribuição contínua.\n\nQual das seguintes é a maneira MENOS eficaz de comunicar o progresso do teste ao cliente?",
    opts: [
      "Painéis de controle",
      "E-mail",
      "Cara-a-cara",
      "Videoconferência",
    ],
    ans: 2,
  },
  {
    q: "Qual das seguintes opções descreve MELHOR um exemplo de como o gerenciamento de configuração (CM) apoia os testes?",
    opts: [
      "Tendo o número da versão do caso de teste, a ferramenta de CM pode automaticamente gerar dados de teste para este caso de teste",
      "Tendo o número da versão do ambiente, a ferramenta de CM pode recuperar os números de versão das bibliotecas, stubs e drivers usados nesse ambiente",
      "Tendo dados sobre a data de compra de uma licença de software, a ferramenta de CM automaticamente gera informações sobre o fato de que a licença do produto está chegando ao fim",
      "Tendo um registro dos valores das entradas de teste, a ferramenta de CM pode executar os casos de teste para essas configurações e calcular a cobertura de teste",
    ],
    ans: 1,
  },
  {
    q: "Você está testando uma função de classificação que recebe um conjunto de números como entrada e retorna o mesmo conjunto de números classificados em ordem crescente. \nO registro da execução do teste é o seguinte.\n\n\\Qual das seguintes fornece a MELHOR descrição da falha que pode ser usada em um relatório de defeitos?",
    opts: [
      "O sistema parece ignorar duplicatas durante a classificação. Referência: TC3, TC4, TC5.",
      "O sistema falha ao classificar números negativos. Referência: TC4, TC5.",
      "O sistema falha ao classificar várias sequências de números. Referência: TC3, TC4, TC5.",
      "TC3, TC4 e TC5 possuem defeitos (dados de entrada duplicados) e devem ser corrigidos.",
    ],
    ans: 0,
  },
  {
    q: "Dada às seguintes descrições:\n\n1. Suporte ao rastreamento de fluxo de trabalho\n2. Facilitar a comunicação\n3. Máquinas virtuais\n4. Suporte a revisões\n\nE as seguintes categorias de ferramentas de teste:\n\nA. Ferramentas de teste estático\nB. Ferramentas que suportam escalabilidade e padronização de implantação\nC. Ferramentas DevOps\nD. Ferramentas de colaboração\n\nQual das seguintes combinações corresponde MELHOR às descrições e categorias?",
    opts: [
      "1B, 2D, 3C, 4A",
      "1A, 2B, 3C, 4D",
      "1C, 2D, 3B, 4A",
      "1D, 2C, 3A, 4B",
    ],
    ans: 2,
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um benefício da automação de testes?",
    opts: [
      "Remove a necessidade de pensamento crítico ao analisar os resultados dos testes",
      "Gera casos de teste a partir de uma análise do código do programa",
      "Compartilha a responsabilidade pelos testes com o fornecedor da ferramenta",
      "Fornece medidas de cobertura que são muito complicadas para os humanos derivarem",
    ],
    ans: 3,
  },
];

// ============================================================
// SIMULADO C
// ============================================================

const SIMULADO_C = [
  {
    q: "Qual dos seguintes é um objetivo típico de teste?",
    opts: [
      "a. Validar que os requisitos documentados são atendidos",
      "b. Causar falhas e identificar defeitos",
      "c. Iniciar erros e identificar causas raízes",
      "d. Verificar se o objeto de teste atende às expectativas do usuário",
    ],
    ans: 1,
  },
  {
    q: "Qual das seguintes afirmações MELHOR descreve a diferença entre teste e depuração (debugging)?",
    opts: [
      "a. O teste causa falhas enquanto a depuração corrige falhas",
      "b. O teste é uma atividade negativa enquanto a depuração é uma atividade positiva",
      "c. O teste determina que existem defeitos enquanto a depuração remove defeitos",
      "d. O teste encontra a causa dos defeitos enquanto a depuração corrige a causa dos defeitos",
    ],
    ans: 2,
  },
  {
    q: "A falácia da “ausência de defeitos” é um dos princípios do teste.\n\n Qual das seguintes é um exemplo de abordar este princípio na prática?",
    opts: [
      "a. Explicar que não é possível que o teste mostre a ausência de defeitos",
      "b. Apoiar os usuários finais na realização de testes de aceitação",
      "c. Garantir que não restem defeitos de implementação no sistema entregue",
      "d. Modificar testes que não causam falhas para garantir que poucos defeitos permaneçam",
    ],
    ans: 1,
  },
  {
    q: "Quais das seguintes atividades de teste são MAIS prováveis de envolver a aplicação da análise de valor de fronteira e particionamento por equivalência?\n\nSelecione DUAS opções",
    opts: [
      "a. Implementação de teste",
      "b. Projeto de teste",
      "c. Execução de teste",
      "d. Monitoramento de teste",
      "e. Análise de teste",
    ],
    ans: [1, 4],
    multi: true,
  },
  {
    q: "Dado o seguinte testware:\n\n1. Itens de cobertura\n2. Solicitações de mudança\n3. Cronograma de execução de teste\n4. Condições de teste priorizadas\n\nE as seguintes atividades de teste:\n\nA. Análise de teste\nB. Projeto de teste\nC. Implementação de teste\nD. Conclusão de teste\n\nQual das seguintes opções MELHOR mostra o testware produzido pelas atividades?",
    opts: [
      "a. 1B, 2D, 3C, 4A",
      "b. 1B, 2D, 3A, 4C",
      "c. 1D, 2C, 3A, 4B",
      "d. 1D, 2C, 3B, 4A",
    ],
    ans: 0,
  },
  {
    q: "Qual das seguintes afirmações sobre os diferentes papéis de teste é MAIS provável de ser CORRETA?",
    opts: [
      "a. No desenvolvimento ágil de software, a função de gerenciamento de testes é a principal responsabilidade da equipe, enquanto a função de teste é principalmente a responsabilidade de um único indivíduo de fora da equipe.",
      "b. A função de teste é principalmente responsável pelo monitoramento e controle de testes, enquanto a função de gerenciamento de testes é principalmente responsável pelo planejamento de testes e conclusão de testes.",
      "c. No desenvolvimento ágil de software, as atividades de gerenciamento de testes que abrangem várias equipes são tratadas por um gerente de testes fora da equipe, enquanto algumas tarefas de gerenciamento de testes são tratadas pela própria equipe.",
      "d. A função de gerenciamento de testes é principalmente responsável pela análise de testes e pelo design de testes, enquanto a função de teste é principalmente responsável pela implementação e execução de testes.",
    ],
    ans: 2,
  },
  {
    q: "Qual das seguintes é uma vantagem da abordagem de toda a equipe?",
    opts: [
      "a. Equipes sem testadores",
      "b. Dinâmica de equipe melhorada",
      "c. Membros de equipe especialistas",
      "d. Tamanhos de equipe maiores",
    ],
    ans: 1,
  },
  {
    q: "Qual das seguintes afirmações sobre a independência de teste está CORRETA?",
    opts: [
      "a. Testadores independentes encontrarão defeitos devido à sua perspectiva técnica diferente da dos desenvolvedores, mas sua independência pode levar a um relacionamento adversarial com os desenvolvedores.",
      "b. A familiaridade dos desenvolvedores com seu próprio código significa que eles encontrarão apenas alguns defeitos nele; no entanto, seu histórico compartilhado de software com os testadores significa que esses defeitos também seriam encontrados pelos testadores.",
      "c. Testes independentes exigem testadores que estão fora da equipe do desenvolvedor e, idealmente, fora da organização; no entanto, esses testadores têm dificuldade em entender o domínio da aplicação.",
      "d. Testadores de fora da equipe do desenvolvedor são mais independentes do que testadores de dentro da equipe, mas os testadores de dentro da equipe são mais propensos a serem culpados por atrasos no lançamento do produto.",
    ],
    ans: 0,
  },
  {
    q: "Qual das seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida do desenvolvimento de software?",
    opts: [
      "a. Para cada nível de teste, há um nível de desenvolvimento correspondente",
      "b. Para cada objetivo de teste, há um objetivo de desenvolvimento correspondente",
      "c. Para cada atividade de teste de software, há uma atividade de usuário correspondente",
      "d. Para cada atividade de desenvolvimento de software, há uma atividade de teste correspondente",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes é um exemplo de uma abordagem de desenvolvimento orientada a testes?",
    opts: [
      "a. Desenvolvimento Orientado a Testes de Componentes",
      "b. Desenvolvimento Orientado a Testes de Integração",
      "c. Desenvolvimento Orientado a Testes de Sistema",
      "d. Desenvolvimento Orientado a Testes de Aceitação",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes fornece a MELHOR descrição da abordagem de shift-left?",
    opts: [
      "a. Quando acordado pelos desenvolvedores, atividades manuais do lado esquerdo do processo de teste são automatizadas para apoiar o princípio de \"testes antecipados economizam tempo e dinheiro\".",
      "b. Onde for economicamente viável, atividades de teste são movidas para serem realizadas mais cedo no ciclo de vida do desenvolvimento de software (SDLC) para reduzir o custo total da qualidade, reduzindo o número de defeitos encontrados mais tarde no SDLC.",
      "c. Quando têm tempo disponível, os testadores são obrigados a automatizar testes para testes de regressão, começando com testes de componentes e testes de integração de componentes.",
      "d. Quando disponível, os testadores são treinados para realizar tarefas no início do SDLC para permitir que mais atividades de teste sejam automatizadas posteriormente no SDLC.",
    ],
    ans: 1,
  },
  {
    q: "Qual dos seguintes é MENOS provável de ocorrer como resultado de uma retrospectiva?",
    opts: [
      "a. A qualidade dos futuros objetos de teste melhora ao identificar melhorias nas práticas de desenvolvimento.",
      "b. A eficiência dos testes melhora ao acelerar a configuração de ambientes de teste através da automação.",
      "c. A compreensão dos usuários finais sobre os processos de desenvolvimento e teste é aprimorada.",
      "d. Scripts de teste automatizados são aprimorados através de feedback dos desenvolvedores.",
    ],
    ans: 2,
  },
  {
    q: "Qual dos seguintes níveis de teste é MAIS provável que esteja sendo realizado se o foco dos testes é a validação e não está sendo realizado por testadores?",
    opts: [
      "a. Teste de componente",
      "b. Teste de integração de componentes",
      "c. Teste de integração de sistema",
      "d. Teste de aceitação",
    ],
    ans: 3,
  },
  {
    q: "O software do sistema de navegação foi atualizado devido a ele sugerir rotas que violam as leis de trânsito, como dirigir na contramão de ruas de sentido único.\n\n Qual das seguintes alternativas DESCREVE MELHOR os testes que serão realizados?",
    opts: [
      "a. Apenas testes de confirmação",
      "b. Testes de confirmação e depois testes de regressão",
      "c. Apenas testes de regressão",
      "d. Testes de regressão e depois testes de confirmação",
    ],
    ans: 1,
  },
  {
    q: "Dadas os seguintes defeitos exemplos:\n\n i. Duas partes diferentes da especificação de design discordam devido à complexidade do design\n ii. O tempo de resposta é muito longo e faz com que os usuários percam a paciência\n iii. Um caminho no código não pode ser alcançado durante a execução\n iv. Uma variável é declarada, mas nunca usada posteriormente no programa\n v. A quantidade de memória necessária pelo programa para gerar um relatório é muito alta\n\n Qual das seguintes opções IDENTIFICA MELHOR exemplos de defeitos que poderiam ser encontrados por testes estáticos (em vez de testes dinâmicos)?",
    opts: [
      "a. ii, v",
      "b. iii, v",
      "c. i, ii, iv",
      "d. i, iii, iv",
    ],
    ans: 3,
  },
  {
    q: "Qual dos seguintes é um benefício do feedback precoce e frequente dos interessados?",
    opts: [
      "a. As mudanças nos requisitos são compreendidas e implementadas mais cedo",
      "b. Garante que os interessados em negócios entendam os requisitos do usuário",
      "c. Isso permite que os proprietários do produto mudem seus requisitos quantas vezes quiserem",
      "d. Os usuários finais são informados sobre quais requisitos não serão implementados antes do lançamento",
    ],
    ans: 0,
  },
  {
    q: "Dado os seguintes tipos de revisão:\n\n 1. Revisão técnica\n 2. Revisão informal\n 3. Inspeção\n 4. Revisão detalhada\n\n E as seguintes descrições:\n\n A. Inclui objetivos como alcançar consenso, gerar novas ideias e motivar os autores a melhorarem\n B. Inclui objetivos como educar os revisores, alcançar consenso, gerar novas ideias e detectar defeitos potenciais\n C. O principal objetivo é detectar defeitos potenciais e requer coleta de métricas para apoiar a melhoria do processo\n D. O principal objetivo é detectar defeitos potenciais e não gera uma saída formal documentada\n\n Qual das seguintes combinações corresponde MELHOR aos tipos de revisão e às descrições?",
    opts: [
      "a. 1A, 2B, 3C, 4D",
      "b. 1A, 2D, 3C, 4B",
      "c. 1B, 2C, 3D, 4A",
      "d. 1C, 2D, 3A, 4B",
    ],
    ans: 3,
  },
  {
    q: "Qual dos seguintes é um fator que contribui para uma revisão bem-sucedida?",
    opts: [
      "a. Garantir que a gerência participe como revisores",
      "b. Dividir grandes produtos de trabalho em partes menores",
      "c. Definir a avaliação do revisor como um objetivo",
      "d. Planejar cobrir um documento por revisão",
    ],
    ans: 1,
  },
  {
    q: "Qual é a principal diferença entre as técnicas de teste caixa-preta e as técnicas de teste baseadas em experiência?",
    opts: [
      "a. O objeto de teste",
      "b. O nível de teste no qual a técnica de teste é usada",
      "c. A base de teste",
      "d. O ciclo de vida de desenvolvimento de software (SDLC) no qual a técnica de teste pode ser usada",
    ],
    ans: 2,
  },
  {
    q: "Um desenvolvedor foi solicitado a implementar a seguinte regra de negócio:\n\nENTRADA: valor (número inteiro)\nSE (valor ≤ 100 OU valor ≥ 200) ENTÃO escreva “valor incorreto”\nSENÃO escreva “valor OK”\nVocê projeta os casos de teste usando análise de valores limite de 2 valores.\n\nQual dos seguintes conjuntos de entradas de teste alcança a maior cobertura?",
    opts: [
      "100, 150, 200, 201",
      "99, 100, 200, 201",
      "98, 99, 100, 101",
      "101, 150, 199, 200",
    ],
    ans: 3,
  },
  {
    q: "Você está trabalhando em um projeto para desenvolver um sistema para analisar resultados de testes de direção.\nVocê foi solicitado a projetar casos de teste com base na seguinte tabela de decisão. \n\nQue dados de teste mostrarão que existem regras contraditórias na tabela de decisão?",
    image: "src/imagens/simulados/C/q22.png",
    opts: [
      "C1 = T, C2 = T, C3 = F",
      "C1 = T, C2 = F, C3 = T",
      "C1 = T, C2 = T, C3 = T e C1 = F, C2 = T, C3 = T",
      "C1 = F, C2 = F, C3 = F",
    ],
    ans: 3,
  },
  {
    q: "Você está projetando casos de teste com base no seguinte diagrama de transição de estados: \n\nQual é o número MÍNIMO de casos de teste necessários para alcançar uma cobertura de transições válidas de 100%?",
    image: "src/imagens/simulados/C/q23.png",
    opts: [
      "3",
      "2",
      "5",
      "6",
    ],
    ans: 0,
  },
  {
    q: "Você está testando um validador de PIN, que aceita PINs válidos e rejeita PINs inválidos. Um PIN é uma sequência de dígitos. Um PIN é válido se consistir de quatro dígitos, sendo pelo menos dois deles diferentes. Você identificou as seguintes partições de equivalência válidas: Variável: Comprimento do código PIN \n\nA partição \"comprimento correto\" - PINs de quatro dígitos \nA partição \"comprimento incorreto\" - PINs com comprimento diferente de 4 Variável: Número de dígitos diferentes \nA partição \"número de dígitos diferentes correto\" - PINs com pelo menos dois dígitos diferentes \nA partição \"número de dígitos diferentes incorreto\" - PINs com todos os dígitos iguais 'a. 1, 1111, 1234 'b. 111, 1111, 1112 'c. 1, 12345 'd. 12345, 1234 \n\nQual dos seguintes é um conjunto MÍNIMO de dados de entrada que cobre todas as partições de equivalência identificadas? Sua resposta está incorreta. A resposta correta é: 1, 1111, 1234",
    opts: [
      "1, 1111, 1234",
      "111, 1111, 1112",
      "1, 12345",
      "12345, 1234",
    ],
    ans: 0,
  },
  {
    q: "Você deseja aplicar teste de branch ao código representado pelo seguinte grafo de fluxo de controle \nQuantos itens de cobertura você precisa testar?",
    image: "src/imagens/simulados/C/q24.png",
    opts: [
      "2",
      "4",
      "8",
      "7",
    ],
    ans: 2,
  },
  {
    q: "Como o teste de caixa branca pode ser útil para apoiar o teste de caixa preta?",
    opts: [
      "As medidas de cobertura de caixa branca podem ajudar os testadores a avaliar os testes de caixa preta em termos da cobertura de código alcançada por esses testes de caixa preta",
      "A análise de cobertura de caixa branca pode ajudar os testadores a identificar fragmentos inacessíveis do código-fonte",
      "O teste de ramificação subsume técnicas de teste de caixa preta, então alcançar cobertura de ramificação completa garante alcançar cobertura completa de qualquer técnica de caixa preta",
      "As técnicas de teste de caixa branca podem fornecer itens de cobertura para técnicas de caixa preta",
    ],
    ans: 0,
  },
  {
    q: "Considerando a seguinte lista:\n\nEntrada correta não aceita\nEntrada incorreta aceita\nFormato de saída errado\nDivisão por zero\n\nQual técnica de teste é MAIS PROVAVELMENTE usada pelo testador que usa esta lista ao realizar testes?",
    opts: [
      "Teste exploratório",
      "Ataque de falha",
      "Teste baseado em lista de verificação",
      "Análise de valor limite",
    ],
    ans: 1,
  },
  {
    q: "Qual das seguintes DESCREVE MELHOR como usar teste baseado em lista de verificação pode resultar em uma cobertura aumentada?",
    opts: [
      "Os itens da lista de verificação podem ser definidos em um nível de detalhe suficientemente baixo, para que o testador possa implementar e executar casos de teste detalhados com base nesses itens.",
      "As listas de verificação podem ser automatizadas, então cada vez que uma execução de teste automatizada cobre os itens da lista de verificação, isso resulta em cobertura adicional.",
      "Cada item da lista de verificação deve ser testado separadamente e independentemente, para que os elementos cubram diferentes áreas do software.",
      "Dois testadores projetando e executando testes com base nos mesmos itens de lista de verificação de alto nível geralmente executarão os testes de maneiras ligeiramente diferentes.",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes fornece o MELHOR exemplo de um critério de aceitação orientado a cenário?",
    opts: [
      "A aplicação deve permitir que os usuários excluam sua conta e todos os dados associados mediante solicitação.",
      "Quando um cliente adiciona um item ao carrinho e prossegue para o checkout, ele deve ser solicitado a fazer login ou criar uma conta se ainda não o tiver feito.",
      "SE (contém(produto(23).Nome, carrinho.produtos())) ENTÃO retorne FALSO.",
      "O site deve estar em conformidade com os Padrões de Acessibilidade ICT 508 e garantir que todo o conteúdo seja acessível aos usuários com deficiência.",
    ],
    ans: 1,
  },
  {
    q: "Você está usando o desenvolvimento orientado por testes de aceitação e projetando casos de teste com base na seguinte história do usuário:\nComo usuário Regular ou Especial, quero poder usar meu cartão eletrônico de acesso para acessar andares específicos.\nCritérios de aceitação:\n\nCA1: Usuários Regulares têm acesso aos andares 1 a 3.\nCA2: O andar 4 só é acessível para usuários Especiais.\nCA3: Usuários Especiais têm todos os direitos de acesso dos Usuários Regulares.\n\nQual caso de teste é o MAIS razoável para testar o CA3?",
    opts: [
      "Verificar se um usuário Regular pode acessar os andares 1 e 3.",
      "Verificar se um usuário Regular não pode acessar o andar 4.",
      "Verificar se um usuário Especial pode acessar o andar 5.",
      "Verificar se um usuário Especial pode acessar os andares 1, 2 e 3.",
    ],
    ans: 3,
  },
  {
    q: "Qual dos seguintes NÃO é um propósito de um plano de teste?",
    opts: [
      "Definir dados de teste e resultados esperados para testes de componente e testes de integração de componentes.",
      "Definir como critério de saída do nível de teste de componente que \"cobertura de 100% de instruções e cobertura de 100% de ramificação devem ser alcançadas\".",
      "Descrever quais campos o relatório de progresso do teste deve conter e qual deve ser o formato deste relatório.",
      "Explicar por que os testes de integração do sistema serão excluídos dos testes, embora a estratégia de teste exija esse nível de teste.",
    ],
    ans: 0,
  },
  {
    q: "No início de cada iteração, a equipe estima a quantidade de trabalho (em dias de trabalho) que precisará completar durante a iteração. Seja E a quantidade estimada de trabalho para a iteração n, e seja A a quantidade real de trabalho feita na iteração n. A partir da terceira iteração, a equipe usa o seguinte modelo de estimação baseado em extrapolação:  O gráfico mostra a quantidade estimada e real de trabalho para as quatro primeiras iterações.\n\n Qual é a quantidade estimada de trabalho para a iteração #5?",
    image: "src/imagens/simulados/C/q31.png",
    opts: [
      "10,5 dias de trabalho",
      "8,25 dias de trabalho",
      "6,5 dias de trabalho",
      "9,4 dias de trabalho",
    ],
    ans: 2,
  },
  {
    q: "Você está preparando um cronograma de execução de testes para executar sete casos de teste TC 1 a TC 7. A figura a seguir inclui as prioridades desses casos de teste (1 = prioridade mais alta, 3 = prioridade mais baixa). A figura também mostra as dependências entre os casos de teste usando setas. Por exemplo, a seta de TC 4 para TC 5 significa que TC 5 só pode ser executado se TC 4 foi previamente executado \n\nQual caso de teste deve ser executado em sexto lugar?",
    image: "src/imagens/simulados/C/q32.png",
    opts: [
      "TC 3",
      "TC 5",
      "TC 6",
      "TC 2",
    ],
    ans: 0,
  },
  {
    q: "O modelo da pirâmide de testes mostra:",
    opts: [
      "Que os testes podem ter diferentes prioridades",
      "Que os testes podem ter granularidades diferentes",
      "Que os testes podem requerer diferentes critérios de cobertura",
      "Que os testes podem depender de outros testes",
    ],
    ans: 1,
  },
  {
    q: "Qual é a relação entre os quadrantes de teste, os níveis de teste e os tipos de teste?",
    opts: [
      "Os quadrantes de teste representam combinações específicas de níveis de teste e tipos de teste, definindo sua localização no ciclo de vida do desenvolvimento de software.",
      "Os quadrantes de teste descrevem o grau de granularidade dos tipos de teste individuais realizados em cada nível de teste.",
      "Os quadrantes de teste atribuem os tipos de teste que podem ser realizados aos níveis de teste.",
      "Os quadrantes de teste agrupam níveis de teste e tipos de teste com base em vários critérios, como o direcionamento a partes interessadas específicas.",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes é um exemplo de como a análise de risco do produto pode influenciar a minuciosidade e o escopo dos testes?",
    opts: [
      "O monitoramento contínuo de riscos permite identificar riscos emergentes o mais cedo possível.",
      "A identificação de riscos permite implementar atividades de mitigação de riscos e reduzir o nível de risco.",
      "O nível de risco avaliado ajuda a selecionar o rigor dos testes.",
      "A análise de riscos permite derivar itens de cobertura.",
    ],
    ans: 2,
  },
  {
    q: "Qual das seguintes atividades no processo de teste faz o MAIOR uso de relatórios de progresso de teste?",
    opts: [
      "Design de teste",
      "Conclusão do teste",
      "Análise de teste",
      "Planejamento de teste",
    ],
    ans: 1,
  },
  {
    q: "Qual dos seguintes NÃO é um exemplo de como o gerenciamento de configuração suporta o teste?",
    opts: [
      "Todos os commits no repositório são identificados de forma única e controlados por versão",
      "Todas as mudanças nos elementos do ambiente de teste são rastreadas",
      "Todas as especificações de requisitos são referenciadas de forma inequívoca nos planos de teste",
      "Todos os defeitos identificados têm um status atribuído",
    ],
    ans: 3,
  },
  {
    q: "Considere o seguinte relatório de defeitos para um aplicativo de compras online:\n\nAplicação: WebShop v0.99\nDefeito: Botão de login não funciona\nPassos para Reproduzir:\nInicie o site\nClique no botão de login\n\nResultado Esperado:\nO usuário deve ser redirecionado para a página de login.\nResultado Real: O botão de login não responde quando clicado.\nSeveridade: Alta\nPrioridade: Urgente\n\nQual é a informação MAIS importante que está faltando neste relatório?",
    opts: [
      "Nome do testador e data do relatório",
      "Elementos do ambiente de teste e seus números de versão",
      "Identificação do objeto de teste",
      "Impacto nos interesses das partes interessadas",
    ],
    ans: 1,
  },
  {
    q: "Ferramentas de qual das seguintes categorias ajudam na organização de casos de teste, defeitos detectados e gerenciamento de configuração?",
    opts: [
      "Ferramentas de execução de teste e cobertura",
      "Ferramentas de design e implementação de teste",
      "Ferramentas de gerenciamento de defeitos",
      "Ferramentas de gerenciamento de teste",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes afirmações sobre testes de ramificação está CORRETA?",
    opts: [
      "Se 100% da cobertura de instruções for alcançada, então 100% da cobertura de ramificação também será alcançada.",
      "Se os casos de teste executarem todas as ramificações incondicionais no código, será possível obter 100% de cobertura de ramificação.",
      "Se 100% da cobertura de ramificação for alcançada, todos os resultados da decisão em cada instrução de decisão no código serão executados.",
      "Se um programa incluir apenas ramificações incondicionais, será possível obter 100% de cobertura de ramificação sem executar nenhum caso de teste.",
    ],
    ans: 2,
  },
];

// ============================================================
// SIMULADO D
// ============================================================

const SIMULADO_D = [
  {
    q: "Qual das seguintes é um objetivo típico de teste?",
    opts: [
      "Encontrar e corrigir defeitos no objeto de teste",
      "Manter comunicações eficazes com os desenvolvedores",
      "Validar que os requisitos legais foram atendidos",
      "Construir confiança na qualidade do objeto de teste",
    ],
    ans: 3,
  },
  {
    q: "Um designer documenta um design para uma interface de usuário que não aborda adequadamente os usuários com deficiência porque o designer está cansado.\n O programador implementa a interface de usuário de acordo com o design, mas como está trabalhando sob forte pressão de tempo, não inclui tratamento adequado de exceções em seu código para cálculos de bônus. \nQuando o sistema operacional é usado, reclamações são feitas por alguns usuários com deficiência sobre a interface e a empresa é subsequentemente multada pela autoridade reguladora relevante.\n Ninguém percebe que os cálculos de bônus às vezes estão incorretos.\n\n Qual das seguintes afirmações está CORRETA?",
    opts: [
      "O erro de cálculo de bônus é um defeito que ocasionalmente ocorre",
      "A multa recebida por não abordar alguns usuários com deficiência é uma falha",
      "O programador trabalhando sob forte pressão de tempo é uma causa raiz",
      "O design da interface de usuário inclui um erro do designer",
    ],
    ans: 2,
  },
  {
    q: "Condições de teste de alto nível estão sendo usadas por testadores para gerar casos de teste e executar testes. Mesmo que as condições de teste permaneçam as mesmas, os casos de teste são variados a cada vez. \n\nQual dos seguintes 'princípios de teste' está sendo abordado através da variação dos casos de teste?",
    opts: [
      "Os testes se desgastam",
      "Falácia da ausência de defeitos",
      "Teste antecipado economiza tempo e dinheiro",
      "Defeitos se agrupam juntos",
    ],
    ans: 0,
  },
  {
    q: "Dadas as seguintes tarefas de teste:\n\n1. Derivar casos de teste a partir de condições de teste\n2. Identificar testware reutilizável\n3. Organizar casos de teste em procedimentos de teste\n4. Avaliar a base de teste e o objeto de teste\n\nE as seguintes atividades de teste:\nA. Análise de teste\nB. Projeto de teste\nC. Implementação de teste\nD. Conclusão de teste\n\nQual das seguintes opções MELHOR corresponde às tarefas com as atividades?",
    opts: [
      "1B, 2A, 3D, 4C",
      "1B, 2D, 3C, 4A",
      "1C, 2A, 3B, 4D",
      "1C, 2D, 3A, 4B",
    ],
    ans: 1,
  },
  {
    q: "Considerando o seguinte testware:\n\ni. Relatório de conclusão de teste\nii. Dados armazenados em um banco de dados usados para entradas de teste e resultados esperados\niii. A lista de elementos necessários para construir o ambiente de teste\niv. Sequências documentadas de casos de teste na ordem de execução\nv. Casos de teste\n\n\\Qual das seguintes opções MELHOR mostra o testware produzido como resultado da realização da implementação do teste?",
    opts: [
      "ii, iv",
      "iii, v",
      "i, ii, v",
      "i, iii, iv",
    ],
    ans: 0,
  },
  {
    q: "Qual das seguintes é a descrição MAIS provável de uma tarefa realizada por alguém em um papel de gerenciamento de teste?",
    opts: [
      "Avaliar a base de teste e o objeto de teste",
      "Definir requisitos de ambiente de teste",
      "Avaliar a testabilidade do objeto de teste",
      "Criar relatório de conclusão de teste",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes é uma vantagem da abordagem de equipe inteira?",
    opts: [
      "Melhoria na comunicação entre os membros da equipe",
      "Diminuição da responsabilidade individual pela qualidade",
      "Implantação mais rápida de entregáveis para os usuários finais",
      "Redução da colaboração com usuários comerciais externos",
    ],
    ans: 0,
  },
  {
    q: "Dadas as seguintes vantagens e desvantagens da independência do teste:\n\ni. Os testadores trabalham em um local diferente dos desenvolvedores\nii. Os testadores questionam os pressupostos que os programadores fazem ao escrever o código\niii. Uma dinâmica de confronto foi estabelecida entre testadores e desenvolvedores\niv. Os desenvolvedores convenceram-se de que os testadores são principalmente responsáveis pela qualidade\nv. Os testadores têm viéses diferentes dos mantidos pelos desenvolvedores\n\nQuais são MAIS prováveis de serem consideradas vantagens?",
    opts: [
      "i, iv",
      "ii, v",
      "i, iii, iv",
      "ii, iii, v",
    ],
    ans: 1,
  },
  {
    q: "Qual das seguintes é um exemplo de uma abordagem de desenvolvimento test-first?",
    opts: [
      "Desenvolvimento Orientado ao Comportamento (Behavior-Driven Development)",
      "Desenvolvimento Orientado ao Nível de Teste (Test Level Driven Development)",
      "Desenvolvimento Orientado à Função (Function-Driven Development)",
      "Desenvolvimento Orientado ao Desempenho (Performance-Driven Development)",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um desafio encontrado ao implementar o DevOps?",
    opts: [
      "Garantir que as características de qualidade não funcionais não sejam negligenciadas",
      "Gerenciar ambientes de teste em constante mudança",
      "A necessidade de mais testadores manuais com experiência adequada",
      "Configurar a automação de teste como parte do pipeline de entrega",
    ],
    ans: 3,
  },
  {
    q: "Qual das seguintes DESCREVE MELHOR as retrospectivas?",
    opts: [
      "Retrospectivas permitem que os membros da equipe identifiquem outros membros da equipe que não contribuíram totalmente para alcançar a qualidade conforme necessário pela abordagem de equipe inteira",
      "Retrospectivas dão aos testadores a oportunidade de identificar atividades que foram bem-sucedidas para que estas sejam mantidas quando melhorias potenciais forem feitas no futuro",
      "Retrospectivas são onde os membros da equipe ágil têm permissão para expressar suas preocupações sobre a gestão e os clientes em um ambiente livre de culpa",
      "Retrospectivas dão aos membros da equipe ágil um fórum onde eles se concentram em discutir o plano e as decisões técnicas para a próxima iteração",
    ],
    ans: 1,
  },
  {
    q: "Qual das seguintes testes é MAIS provável de ser realizado como parte do teste funcional?",
    opts: [
      "O teste verifica se a função de ordenação coloca os elementos da lista ou array em ordem crescente",
      "O teste verifica se a função de ordenação completa a ordenação dentro de um segundo após o início",
      "O teste verifica o quão facilmente a função de ordenação pode ser alterada de ordenação ascendente para ordenação descendente",
      "O teste verifica se a função de ordenação ainda funciona corretamente quando movida de uma arquitetura de 32 bits para uma de 64 bits",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um gatilho que leva ao teste de manutenção de um sistema de câmbio de moeda?",
    opts: [
      "Os desenvolvedores relataram que alterar o sistema de câmbio de moeda era difícil e os testadores decidiram verificar se isso era verdade",
      "A opção de reembolso do sistema de câmbio de moeda foi removida, pois nem sempre reembolsava o valor correto aos clientes",
      "A equipe ágil começou a desenvolver uma história do usuário que adiciona um novo recurso de fidelidade do cliente ao sistema de câmbio de moeda",
      "O sistema de câmbio de moeda foi reconfigurado para suportar transações em moeda inglesa e local",
    ],
    ans: 1,
  },
  {
    q: "Qual dos seguintes NÃO pode ser examinado por meio de teste estático?",
    opts: [
      "Contrato",
      "Plano de teste",
      "Código criptografado",
      "Carta de teste",
    ],
    ans: 2,
  },
  {
    q: "Qual das seguintes afirmações sobre o valor do teste estático está CORRETA?",
    opts: [
      "Os tipos de defeitos encontrados pelo teste estático são diferentes dos tipos de defeitos que podem ser encontrados pelo teste dinâmico",
      "O teste dinâmico pode detectar os tipos de defeitos que podem ser encontrados pelo teste estático, além de alguns tipos adicionais de defeitos",
      "O teste dinâmico pode identificar alguns dos defeitos que podem ser encontrados pelo teste estático, mas não todos",
      "O teste estático pode identificar os tipos de defeitos que podem ser encontrados pelo teste dinâmico, bem como alguns tipos extras de defeitos",
    ],
    ans: 2,
  },
  {
    q: "Dadas as seguintes descrições das atividades de revisão:\n\n1. Anomalias detectadas são deliberadas, e determinações são feitas em relação ao seu status, responsabilidade e quaisquer etapas adicionais necessárias\n2. Problemas são registrados, e quaisquer atualizações necessárias são abordadas antes da aceitação do produto de trabalho\n3. Revisores utilizam técnicas para fazer sugestões e perguntas sobre o produto de trabalho e para detectar anomalias\n4. O objetivo da revisão e seu cronograma são estabelecidos para garantir uma revisão focada e eficiente\n5. Os participantes têm acesso ao item em revisão\n\nQual das seguintes é a sequência CORRETA no processo de revisão das atividades que correspondem às descrições?",
    opts: [
      "4 – 3 – 5 – 2 – 1",
      "4 – 5 – 3 – 1 – 2",
      "5 – 4 – 1 – 3 – 2",
      "5 – 4 – 3 – 2 – 1",
    ],
    ans: 1,
  },
  {
    q: "Qual participante no processo de revisão é responsável por garantir que as reuniões de revisão ocorram de forma eficaz e que todos nas reuniões possam expressar suas opiniões livremente?",
    opts: [
      "Gerente",
      "Moderador",
      "Presidente",
      "Líder de revisão",
    ],
    ans: 1,
  },
  {
    q: "Você realiza testes de sistema em um aplicativo web de comércio eletrônico e recebe o seguinte requisito:\nREQ 05-017. Se o custo total das compras exceder $100, o cliente recebe um desconto de 5% nas compras subsequentes. Caso contrário, o cliente não recebe desconto.\n\nQuais técnicas de teste serão MAIS úteis na elaboração de casos de teste com base nesse requisito?",
    opts: [
      "Técnicas de teste de caixa branca",
      "Técnicas de teste de caixa preta",
      "Técnicas de teste baseadas em experiência",
      "Técnicas de teste baseadas em risco",
    ],
    ans: 1,
  },
  {
    q: "Você está testando um sistema de controle de temperatura para uma instalação de armazenamento a frio hortícola. O sistema recebe a temperatura (em graus Celsius inteiros) como entrada. Se a temperatura estiver entre 0 e 2 graus, inclusive, o sistema exibe a mensagem \"temperatura OK\". Para temperaturas mais baixas, o sistema exibe a mensagem \"temperatura muito baixa\" e para temperaturas mais altas, ele exibe a mensagem \"temperatura muito alta\". \n\nUsando a análise de valor limite de dois valores, qual dos seguintes conjuntos de entradas de teste fornece o maior nível de cobertura de valor limite?",
    opts: [
      "–1, 3",
      "0, 2",
      "–1, 0, 2, 3",
      "–2, 0, 2, 4",
    ],
    ans: 2,
  },
  {
    q: "Você está projetando casos de teste com base na seguinte tabela de decisão. Até agora, você projetou os seguintes casos de teste:\n\nTC1: Homem não registrado de 19 anos sem experiência; resultado esperado: categoria A\nTC2: Mulher não registrada de 65 anos com 5 anos de experiência; resultado esperado: categoria B\nTC3: Homem registrado de 66 anos sem experiência; resultado esperado: categoria C\nTC4: Mulher registrada de 65 anos com 4 anos de experiência; resultado esperado: categoria D\n\nQual dos seguintes casos de teste, quando adicionado ao conjunto existente de casos de teste, aumentará a cobertura da tabela de decisão?",
    image: "src/imagens/simulados/D/q22.png",
    opts: [
      "Homem não registrado de 66 anos sem experiência; resultado esperado: categoria B",
      "Mulher não registrada de 55 anos com 2 anos de experiência; resultado esperado: categoria A",
      "Mulher registrada de 19 anos com 5 anos de experiência; resultado esperado: categoria D",
      "Nenhum caso de teste adicional pode aumentar a cobertura da tabela de decisão já alcançada",
    ],
    ans: 0,
  },
  {
    q: "Você está aplicando o teste de transição de estado ao sistema de reserva de quartos de hotel modelado pela seguinte tabela de transição de estado, com 4 estados e 5 eventos diferentes:\n\nAssumindo que todos os casos de teste começam no estado \"Solicitando\", qual dos seguintes casos de teste, representados como sequências de eventos, atinge a maior cobertura de transições válidas?",
    image: "src/imagens/simulados/D/q23.png",
    opts: [
      "Indisponível, Disponível, Trocar Quarto, Indisponível, Cancelar",
      "Disponível, Trocar Quarto, Indisponível, Disponível, Pagar",
      "Disponível, Trocar Quarto, Disponível, Trocar Quarto, Indisponível",
      "Indisponível, Cancelar, Trocar Quarto, Disponível, Pagar",
    ],
    ans: 1,
  },
  {
    q: "Sua suíte de testes S para um programa P atinge 100% de cobertura de instruções. Ela consiste em três casos de teste, cada um dos quais atinge 50% de cobertura de instruções. Qual das seguintes afirmações está CORRETA?",
    opts: [
      "Executar S causará todas as falhas possíveis em P",
      "S atinge 100% de cobertura de ramos para P",
      "Cada instrução executável em P contendo um defeito foi executada pelo menos uma vez durante a execução de S",
      "Após remover um caso de teste de S, os dois casos de teste restantes ainda atingirão 100% de cobertura de instruções",
    ],
    ans: 2,
  },
  {
    q: "Por que o teste de caixa branca facilita a detecção de defeitos mesmo quando a especificação de software é vaga, desatualizada ou incompleta?",
    opts: [
      "Os casos de teste são projetados com base na estrutura do objeto de teste, em vez da especificação",
      "Para cada técnica de teste de caixa branca, a cobertura pode ser bem definida e facilmente medida",
      "As técnicas de teste de caixa branca são muito bem projetadas para detectar omissões nos requisitos",
      "As técnicas de teste de caixa branca podem ser usadas tanto em teste estático quanto em teste dinâmico",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes NÃO é antecipado pelo testador ao aplicar o \"error guessing\"?",
    opts: [
      "O desenvolvedor entendeu erroneamente a fórmula na história do usuário para calcular os juros",
      "O desenvolvedor escreveu \"FA = A*(1+IR^N)\" em vez de \"FA = A*(1+IR)^N\" no código-fonte",
      "O desenvolvedor perdeu o seminário sobre nova legislação de taxa de juros compostos",
      "A precisão dos juros calculados pelo sistema não é suficientemente precisa",
    ],
    ans: 2,
  },
  {
    q: "Qual dos seguintes é verdadeiro sobre teste exploratório?",
    opts: [
      "Casos de teste são projetados antes do início da sessão de teste exploratório",
      "O testador pode realizar a execução do teste, mas não pode realizar o design do teste",
      "Os resultados do teste exploratório são bons preditores do número de defeitos restantes",
      "Durante o teste exploratório, o testador pode usar técnicas de teste de caixa-preta",
    ],
    ans: 3,
  },
  {
    q: "Qual prática colaborativa de escrita de histórias de usuário permite que a equipe alcance um entendimento coletivo do que precisa ser entregue?",
    opts: [
      "Planning poker, para que uma equipe possa alcançar consenso sobre o esforço necessário para implementar uma história de usuário",
      "Revisões, para que uma equipe possa detectar inconsistências e contradições em uma história de usuário",
      "Planejamento de iteração, para que histórias de usuário com o maior valor comercial para um cliente possam ser priorizadas para implementação",
      "Conversa, para que os membros da equipe possam entender como o software será utilizado",
    ],
    ans: 3,
  },
  {
    q: "Você acabou de começar a projetar casos de teste para a seguinte história de usuário.\n\nComo cliente, Quero poder filtrar os resultados da pesquisa por faixa de preço, para que eu possa encontrar produtos dentro do meu orçamento com mais facilidade.\n\nCritérios de aceitação:\n1. O filtro deve funcionar para todas as versões do aplicativo a partir da versão 3.0\n2. O filtro deve permitir que o cliente defina uma faixa de preço com um preço mínimo e máximo\n3. Os resultados da pesquisa devem ser atualizados dinamicamente conforme o cliente ajusta o filtro de faixa de preço\n\nEm todos os casos de teste, a pré-condição é a seguinte: existem apenas dois produtos disponíveis, os produtos A e B. O produto A custa $100 e o produto B custa $110.\n\nQual dos seguintes é o MELHOR exemplo de um caso de teste para esta história do usuário?",
    opts: [
      "Acesse a página da web e defina o filtro para mostrar preços entre $90 e $100. Resultado esperado: os resultados mostram apenas o produto A. Defina o preço máximo para $110. Resultado esperado: os resultados agora incluem ambos os produtos A e B",
      "Acesse a página da web. Resultado esperado: os preços mínimos e máximos padrão são, respectivamente, $100 e $110. Adicione o produto C ao estoque, com preço de $120. Atualize a página da web do cliente. Resultado esperado: o preço máximo padrão muda para $120",
      "Acesse a página da web e defina o filtro para mostrar preços entre $90 e $115. Resultado esperado: os resultados mostram ambos os produtos A e B. Mude a moeda de USD para EUR. Resultado esperado: o intervalo do filtro muda corretamente para os valores em EUR, de acordo com a taxa de câmbio atual",
      "Acesse a página da web com três navegadores diferentes: Edge, Chrome e Opera. Em cada navegador, defina o filtro entre $90 e $110. Resultado esperado: os resultados incluem ambos os produtos A e B e o layout dos resultados é o mesmo em todos os três navegadores",
    ],
    ans: 0,
  },
  {
    q: "Qual dos seguintes MELHOR define critérios de SAÍDA em um projeto de teste? \n\nSelecione DUAS opções",
    opts: [
      "O orçamento está aprovado",
      "O orçamento acaba",
      "A base de teste está disponível",
      "Os casos de teste alcançaram pelo menos 80% de cobertura de instruções",
      "Todos os analistas de teste são certificados ISTQB no nível Foundation",
    ],
    ans: [1, 3],
    multi: true,
  },
  {
    q: "A equipe deseja estimar o tempo necessário para um testador executar quatro casos de teste para um componente de software. A equipe reuniu as seguintes medidas do esforço usado para executar um único caso de teste:\n\nCenário melhor caso: 1 hora\nCenário pior caso: 8 horas\nCenário mais provável: 3 horas\n\nConsiderando que a técnica de estimativa de três pontos está sendo utilizada, qual é a estimativa final do tempo necessário para executar todos os quatro casos de teste?",
    opts: [
      "14 horas",
      "3.5 horas",
      "16 horas",
      "12 horas",
    ],
    ans: 0,
  },
  {
    q: "A tabela mostra a matriz de rastreabilidade dos casos de teste para requisitos. \"X\" significa que um caso de teste dado abrange o requisito correspondente.\n\nVocê deseja priorizar os casos de teste seguindo a técnica de priorização de cobertura adicional. Você executa os quatro casos de teste.\n\nQual caso de teste deve ser executado como ÚLTIMO?",
    image: "src/imagens/simulados/D/q32.png",
    opts: [
      "TC1",
      "TC2",
      "TC3",
      "TC4",
    ],
    ans: 1,
  },
  {
    q: "Como os quadrantes de teste podem ser benéficos para o teste?",
    opts: [
      "Eles ajudam no planejamento de teste ao dividir o processo de teste em quatro estágios, correspondentes aos quatro níveis básicos de teste: componente, integração, sistema e teste de aceitação",
      "Eles ajudam na avaliação da cobertura em alto nível (por exemplo, cobertura de requisitos) com base na cobertura em baixo nível (por exemplo, cobertura de código)",
      "Eles ajudam os stakeholders não técnicos a entender os diferentes tipos de testes e que alguns tipos de teste são mais relevantes para determinados níveis de teste do que outros",
      "Eles ajudam as equipes ágeis a desenvolver uma estratégia de comunicação com base na classificação das pessoas de acordo com quatro tipos psicológicos básicos e na modelagem das relações entre eles",
    ],
    ans: 2,
  },
  {
    q: "Para um risco específico, seu nível de risco é de $1.000 e sua probabilidade de ocorrência é estimada em 50%.\n\n Qual é o impacto do risco?",
    opts: [
      "$500",
      "$2.000",
      "$50.000",
      "$200",
    ],
    ans: 1,
  },
  {
    q: "Quais dos seguintes são riscos do produto?\n\n Selecione DUAS opções",
    opts: [
      "Escopo em expansão",
      "Arquitetura inadequada",
      "Redução de custos",
      "Suporte inadequado de ferramentas",
      "Tempo de resposta muito longo",
    ],
    ans: [1, 4],
    multi: true,
  },
  {
    q: "O usuário relatou uma falha no software. Um engenheiro da equipe de suporte pediu ao usuário o número da versão do software onde a falha foi observada. Com base no número da versão, a equipe reuniu todos os arquivos que compunham o lançamento. Isso posteriormente permitiu que um desenvolvedor realizasse análises, encontrasse o defeito e o corrigisse.\n\nQual dos seguintes possibilitou que a equipe realizasse a atividade acima?",
    opts: [
      "Gerenciamento de riscos",
      "Monitoramento e controle de teste",
      "Abordagem de equipe inteira",
      "Gerenciamento de configuração",
    ],
    ans: 3,
  },
  {
    q: "Considerar o seguinte relatório de defeitos para um Sistema de Empréstimo de Livros.\n\nID do Defeito: 001 | Título: Incapaz de Devolver um Livro | Severidade: Alta | Prioridade: | Ambiente: Windows 10, Google Chrome\n\nDescrição: Ao tentar devolver um livro usando o recurso de Devolução de Livro, o sistema não registra a devolução e o livro permanece emprestado para o usuário.\n\nPassos para Reproduzir: Faça login no Sistema de Empréstimo de Livros como um usuário que tenha emprestado um livro. Clique no botão \"Devolução de Livro\" para o livro que foi emprestado. O sistema não registra a devolução e o livro permanece emprestado.\n\nResultado Esperado: O livro deve ser devolvido e não deve mais aparecer como emprestado para o usuário.\n\nResultado Atual: O livro permanece emprestado para o usuário e não é registrado como devolvido no sistema.\n\nAnexos: [lista vazia]\n\nQual dos seguintes é MAIS provável de ajudar o desenvolvedor a reproduzir a falha rapidamente?",
    opts: [
      "Adicionar informações sobre quais usuários e quais livros são afetados ao campo \"Descrição\"",
      "Preencher o valor ausente para o campo \"Prioridade\"",
      "Adicionar despejos de memória e snapshots de banco de dados tirados após cada etapa descrita na seção \"Passos para Reproduzir\" à seção \"Anexos\"",
      "Repetir o mesmo caso de teste para diferentes ambientes e escrever relatórios de defeitos para cada um deles separadamente",
    ],
    ans: 0,
  },
  {
    q: "Dadas as seguintes categorias de ferramentas de teste:\n\ni. Ferramentas de colaboração\nii. Ferramentas de DevOps\niii. Ferramentas de gerenciamento\niv. Ferramentas de teste não funcionais\nv. Ferramentas de design e implementação de teste\n\nFerramentas de quais categorias são MAIS prováveis de facilitar a execução de teste?",
    opts: [
      "i, v",
      "ii, iv",
      "i, iii, v",
      "ii, iii, iv",
    ],
    ans: 1,
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um risco da automação de teste?",
    opts: [
      "A detecção de defeitos adicionais de alta gravidade",
      "Fornecer medidas que são muito complicadas para humanos derivarem",
      "Incompatibilidade com a plataforma de desenvolvimento",
      "Tempos de execução de teste substancialmente reduzidos",
    ],
    ans: 2,
  },
  {
    q: "O sistema de venda de ingressos de cinema calcula o tipo de desconto com base no ano de nascimento do cliente (BY) e no ano atual (CY) da seguinte forma: Seja D a diferença entre CY e BY, ou seja, D = CY - BY\n\nSe D < 0, então exibe a mensagem de erro “ano de nascimento não pode ser maior que o ano atual”\nSe 0 ≤ D < 18, então aplica o desconto de estudante\nSe 18 ≤ D < 65, então não aplica desconto\nSe D ≥ 65, então aplica o desconto de pensionista\n\nSeu conjunto de testes já contém dois casos de teste:\nBY = 1990, CY = 2020, resultado esperado: sem desconto\nBY = 2030, CY = 2029, resultado esperado: exibe a mensagem de erro\n\nQual dos seguintes conjuntos de dados de teste deve ser adicionado para alcançar cobertura completa de partição de equivalência válida para o tipo de desconto? Selecione DUAS opções.",
    opts: [
      "BY = 2001, CY = 2065",
      "BY = 1900, CY = 1965",
      "BY = 1965, CY = 1900",
      "BY = 2011, CY = 2029",
      "BY = 2000, CY = 2000",
    ],
    ans: [1, 4],
    multi: true,
  },
  {
    q: "Que tarefa a gerência pode assumir durante uma revisão formal?",
    opts: [
      "Registro de informações de revisão, como decisões de revisão.",
      "Decidir o que deve ser revisado.",
      "Garantir o andamento eficaz das reuniões de avaliação e mediar, se necessário.",
      "Assumir a responsabilidade geral pela revisão",
    ],
    ans: 1,
  },
  {
    q: "Um sistema de armazenamento de vinho usa um dispositivo de controle que mede a temperatura T da célula de vinho (medida em °C, arredondada para o grau mais próximo) e emite um alarme para o usuário se ela se desviar do valor ideal de 12°C, de acordo com as regras a seguir:\n\nSe T = 12°C, o sistema diz: \"temperatura ideal\"\nSe T < 12°C, o sistema diz: \"A temperatura está muito baixa!\"\nSe T > 12°C, o sistema diz: \"A temperatura está muito alta!\"\n\nVocê deseja usar a análise de valor limite de 3 pontos (BVA) para verificar o comportamento do dispositivo de controle. Uma entrada de teste é uma temperatura em °C fornecida pelo dispositivo.\n\nQual é o conjunto MÍNIMO de entradas de teste que atinge 100% da cobertura desejada?",
    opts: [
      "10°C, 12°C, 14°C",
      "10°C, 11°C, 13°C, 14°C",
      "10°C, 11°C, 12°C, 13°C, 14°C",
      "11°C, 12°C, 13°C",
    ],
    ans: 2,
  },
];

// ============================================================
// MAPA DE SIMULADOS — usado pelo script.js
// ============================================================
const SIMULADOS = {
  A: SIMULADO_A,
  B: SIMULADO_B,
  C: SIMULADO_C,
  D: SIMULADO_D,
};