// questions.js — CTFL 4.0 
// Cada questão: { q, opts, ans, multi? }
// ans: índice (0-based) da resposta correta, ou array para questões de múltipla escolha
// multi: true quando o enunciado pede mais de uma opção

// ============================================================
// QUESTÕES — CAPÍTULO 1
// ============================================================
const QUESTIONS_CAP1 = [
  {q:"Quais das seguintes afirmações descrevem um objetivo de teste válido?",opts:["Para verificar se não há combinações não testadas de entradas.","Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade.","Para provar que não há defeitos não corrigidos no sistema em teste.","Para provar que não haverá falhas após a implementação do sistema na produção."],ans:1},
  {q:"Qual das opções a seguir mostra um exemplo que contribui para o sucesso das atividades de teste?",opts:["Os testadores tentam não perturbar os desenvolvedores durante a codificação, para que eles escrevam um código melhor.","O envolvimento dos testadores durante várias atividades do SDLC ajudará a detectar defeitos nos produtos de trabalho.","Os testadores certificados modelarão casos de teste muito melhores do que os testadores não certificados.","Os testadores que colaboram com os usuários finais ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes e o teste do sistema."],ans:1},
  {q:"Você foi designado como testador de uma equipe que está produzindo um novo sistema de forma incremental. Você notou que nenhuma alteração foi feita nos casos de teste de regressão existentes durante várias iterações e nenhum novo defeito de regressão foi identificado. Seu gerente está feliz, mas você não está. Qual princípio de teste explica seu ceticismo?",opts:["Os defeitos se agrupam.","É impossível realizar testes exaustivos.","Os testes se desgastam.","Falácia da ausência de erros."],ans:2},
  {q:"Você trabalha em uma equipe que desenvolve um aplicativo móvel para pedidos de comida. Na iteração atual, a equipe decidiu implementar a funcionalidade de pagamento. Qual das atividades a seguir faz parte da análise de teste?",opts:["Estimativa de que o teste da integração com o serviço de pagamento levará 8 dias/homem.","Decidir que a equipe deve testar se é possível realizar o pagamento entre muitos usuários.","Analisar a discrepância entre o resultado real e o resultado esperado após a execução de um caso de teste que verifica o processo de pagamento com cartão de crédito e relatar um defeito.","Usar a análise de valor limite (BVA) para derivar os dados de teste para os casos de teste que verificam o processamento correto do pagamento para o valor mínimo permitido a ser pago."],ans:1},
  {q:"Quais dos seguintes fatores (i-v) têm influência SIGNIFICATIVA no processo de teste?\ni. O SDLC;\nii. O número de defeitos detectados em projetos anteriores;\niii. Os riscos identificados do produto;\niv. Novos requisitos regulatórios;\nv. O número de testadores certificados na organização.",opts:["ii, iv, v têm influência significativa; i, iii não têm.","iii, v têm influência significativa; i, ii, iv não têm.","i, iii, iv têm influência significativa; ii, v não têm.","i, ii têm influência significativa; iii, iv, v não têm."],ans:2},
  {q:"Quais das DUAS tarefas a seguir pertencem PRINCIPALMENTE a um papel no teste?",opts:["Relatório sobre a cobertura alcançada.","Configurar ambientes de teste.","Manter o backlog do produto.","Projetar soluções para novos requisitos.","Criar o plano de teste."],ans:[0,1],multi:true},
  {q:"Quais das seguintes habilidades (i-v) são as MAIS importantes para um testador?\ni. Ter conhecimento do domínio;\nii. Criação de uma visão do produto;\niii. Ser um bom membro da equipe;\niv. Planejar e organizar o trabalho da equipe;\nv. Pensamento crítico.",opts:["i, ii e v são importantes; iii e iv não são.","ii e iv são importantes; i, iii e v não são.","iii e iv são importantes; i, ii e v não são.","i, iii e v são importantes; ii e iv não são."],ans:3},
  {q:"Como a abordagem de equipe inteira está presente nas interações entre os testadores e os representantes da empresa?",opts:["Os testadores ajudam os representantes da empresa a definir a estratégia de teste.","Os representantes de negócio não participam da abordagem de equipe inteira.","Os testadores ajudam os representantes de negócio a criar testes de aceite adequados.","Os representantes do negócio decidem sobre as abordagens de automação de testes."],ans:2},
  {q:"Qual dos seguintes é um exemplo do porquê testar é necessário?",opts:["Revisões aumentam a qualidade das especificações de requisitos e levam a menos alterações sendo necessárias nos produtos de trabalho derivados.","Teste dinâmico aumenta a qualidade ao fazer com que objetos de teste falhem de maneiras que nunca poderiam ser alcançadas pelos usuários.","Análise estática fornece evidências aos clientes de que os elementos do sistema que não fornecem saídas são adequados para lançamento.","Teste estático é usado pelos desenvolvedores para identificar falhas em seu código de programa mais cedo do que pode ser alcançado através do teste dinâmico."],ans:0},
  {q:"Qual das seguintes afirmações sobre garantia de qualidade (QA) e/ou controle de qualidade está correta?",opts:["Testar é outro termo para QC.","QA é realizada como parte dos testes.","Os testes são realizados como parte da QA.","Os testes são realizados como parte do QC."],ans:3},
  {q:"Um dos 'princípios de teste' afirma que testes exaustivos são impossíveis. Qual das seguintes opções é um exemplo de abordar esse princípio na prática?",opts:["Usar particionamento de equivalência e análise de valores limite para gerar casos de teste.","Criar casos de teste que cubram todas as possíveis saídas especificadas.","Documentar todas as variações de entrada de teste possíveis e priorizá-las com base na importância.","Iniciar os testes o mais cedo possível com revisões e outras abordagens de teste estático."],ans:0},
  {q:"Qual atividade de teste envolve trabalhar com requisitos de dados de teste, condições de teste, requisitos de ambiente de teste e casos de teste?",opts:["Execução de teste.","Modelagem de Teste.","Análise de teste.","Implementação de teste."],ans:1},
  {q:"Qual dos seguintes é MAIS provável de impactar como os testes são realizados para um determinado objeto de teste?",opts:["O conhecimento dos usuários para os quais um novo sistema está sendo desenvolvido.","A estrutura organizacional do usuário final para um aplicativo de streaming de música comercial.","O número de anos de experiência dos membros da equipe de teste.","O nível médio de experiência da equipe de marketing da organização."],ans:2},
  {q:"Qual das seguintes afirmações é um exemplo CORRETO do valor da rastreabilidade?",opts:["Rastreabilidade entre os riscos mitigados e os casos de teste aprovados fornece um meio de determinar o nível de risco residual.","Rastreabilidade entre os testadores e casos de teste com falha fornece um meio de determinar o nível de habilidade dos testadores.","Rastreabilidade entre os riscos identificados e condições de teste escritas fornece um meio de determinar quais riscos valem a pena testar.","Rastreabilidade entre os requisitos do usuário e os resultados da execução do teste fornece um meio de medir o progresso do projeto em relação aos objetivos comerciais."],ans:3},
  {q:"Qual dos seguintes é MAIS provável de ser um exemplo de um testador usando uma habilidade genérica ao testar?",opts:["O testador era um ex-piloto e foi capaz de entender melhor os critérios de aceitação para o sistema de controle de helicópteros.","O testador foi muito cuidadoso para não cometer erros ao gerar metodicamente casos de teste antes de iniciar sua sessão de teste exploratório.","O profundo conhecimento do testador em jogos de computador fez com que se desse bem com um dos desenvolvedores que também era fã de jogos.","O testador trabalhou anteriormente como programador e usou suas habilidades nessa área para se comunicar melhor com os analistas de negócios."],ans:0},
  {q:"Qual dos seguintes é uma vantagem da abordagem de equipe inteira?",opts:["Permite que os membros da equipe assumam qualquer papel a qualquer momento.","Apenas requer uma única equipe para apoiar o projeto de desenvolvimento completo.","Gera uma sinergia de equipe que beneficia o projeto inteiro.","Incorpora representantes de negócios ao lado de desenvolvedores na mesma equipe."],ans:2},
  {q:"Qual dos seguintes é um objetivo típico de teste?",opts:["Validar que os requisitos documentados são atendidos.","Iniciar erros e identificar causas raízes.","Verificar se o objeto de teste atende às expectativas do usuário.","Causar falhas e identificar defeitos."],ans:3},
  {q:"Dado o seguinte testware:\n1. Itens de cobertura\n2. Solicitações de mudança\n3. Cronograma de execução de teste\n4. Condições de teste priorizadas\n\nAtividades: A. Análise  B. Projeto  C. Implementação  D. Conclusão\n\nQual das opções MELHOR mostra o testware produzido pelas atividades?",opts:["1D, 2C, 3A, 4B","1D, 2C, 3B, 4A","1B, 2D, 3A, 4C","1B, 2D, 3C, 4A"],ans:3},
  {q:"Qual das seguintes afirmações MELHOR descreve a diferença entre teste e depuração (debugging)?",opts:["O teste encontra a causa dos defeitos enquanto a depuração corrige a causa dos defeitos.","O teste determina que existem defeitos enquanto a depuração remove defeitos.","O teste causa falhas enquanto a depuração corrige falhas.","O teste é uma atividade negativa enquanto a depuração é uma atividade positiva."],ans:1},
  {q:"A falácia da 'ausência de defeitos' é um dos princípios do teste. Qual das seguintes é um exemplo de abordar este princípio na prática?",opts:["Garantir que não restem defeitos de implementação no sistema entregue.","Explicar que não é possível que o teste mostre a ausência de defeitos.","Apoiar os usuários finais na realização de testes de aceitação.","Modificar testes que não causam falhas para garantir que poucos defeitos permaneçam."],ans:2},
  {q:"Quais das seguintes atividades de teste são MAIS prováveis de envolver a aplicação da análise de valor de fronteira e particionamento por equivalência?\n(Selecione DUAS opções)",opts:["Análise de teste.","Execução de teste.","Projeto de teste.","Monitoramento de teste.","Implementação de teste."],ans:[0,2],multi:true},
  {q:"Qual das seguintes afirmações sobre os diferentes papéis de teste é MAIS provável de ser CORRETA?",opts:["No desenvolvimento ágil, a função de gerenciamento de testes é a principal responsabilidade da equipe, enquanto a função de teste é principalmente a responsabilidade de um único indivíduo de fora da equipe.","A função de gerenciamento de testes é principalmente responsável pela análise e design de testes, enquanto a função de teste é principalmente responsável pela implementação e execução.","A função de teste é principalmente responsável pelo monitoramento e controle de testes, enquanto a função de gerenciamento é principalmente responsável pelo planejamento e conclusão.","No desenvolvimento ágil, as atividades de gerenciamento de testes que abrangem várias equipes são tratadas por um gerente externo, enquanto algumas tarefas são tratadas pela própria equipe."],ans:3},
  {q:"Qual das seguintes é uma vantagem da abordagem de toda a equipe?",opts:["Equipes sem testadores.","Dinâmica de equipe melhorada.","Membros de equipe especialistas.","Tamanhos de equipe maiores."],ans:1},
  {q:"Qual das seguintes afirmações sobre a independência dos testes é CORRETA?",opts:["Testadores de fora da equipe são mais independentes, mas os de dentro são mais propensos a serem culpados por atrasos.","Testadores independentes encontrarão defeitos devido à sua perspectiva técnica diferente dos desenvolvedores, mas sua independência pode levar a um relacionamento adverso com os desenvolvedores.","Testes independentes requerem testadores fora da organização, mas esses testadores têm dificuldade em entender o domínio da aplicação.","A familiaridade dos desenvolvedores com seu código significa que eles encontram poucos defeitos; no entanto, esses defeitos também seriam encontrados pelos testadores."],ans:1},
  {q:"Qual das seguintes é um objetivo típico de teste?",opts:["Encontrar e corrigir defeitos no objeto de teste.","Manter comunicações eficazes com os desenvolvedores.","Validar que os requisitos legais foram atendidos.","Construir confiança na qualidade do objeto de teste."],ans:3},
  {q:"Um designer documenta um design para uma interface de usuário que não aborda adequadamente os usuários com deficiência porque o designer está cansado. O programador implementa a interface de acordo com o design, mas trabalhando sob forte pressão de tempo, não inclui tratamento adequado de exceções para cálculos de bônus. Qual das seguintes afirmações está CORRETA?",opts:["O erro de cálculo de bônus é um defeito que ocasionalmente ocorre.","A multa recebida por não abordar alguns usuários com deficiência é uma falha.","O programador trabalhando sob forte pressão de tempo é uma causa raiz.","O design da interface de usuário inclui um erro do designer."],ans:2},
  {q:"Condições de teste de alto nível estão sendo usadas por testadores para gerar casos de teste e executar testes. Mesmo que as condições de teste permaneçam as mesmas, os casos de teste são variados a cada vez. Qual dos seguintes 'princípios de teste' está sendo abordado através da variação dos casos de teste?",opts:["Os testes se desgastam.","Falácia da ausência de defeitos.","Teste antecipado economiza tempo e dinheiro.","Defeitos se agrupam juntos."],ans:0},
  {q:"Dadas as seguintes tarefas de teste:\n1. Derivar casos de teste a partir de condições\n2. Identificar testware reutilizável\n3. Organizar casos de teste em procedimentos\n4. Avaliar a base de teste e o objeto de teste\n\nAtividades: A. Análise  B. Projeto  C. Implementação  D. Conclusão\n\nQual das opções MELHOR corresponde às tarefas com as atividades?",opts:["1B, 2A, 3D, 4C","1B, 2D, 3C, 4A","1C, 2A, 3B, 4D","1C, 2D, 3A, 4B"],ans:1},
  {q:"Testware:\ni. Relatório de conclusão de teste\nii. Dados armazenados em um banco de dados para entradas de teste e resultados esperados\niii. A lista de elementos necessários para construir o ambiente de teste\niv. Sequências documentadas de casos de teste na ordem de execução\nv. Casos de teste\n\nQual opção MELHOR mostra o testware produzido na implementação do teste?",opts:["ii, iv","iii, v","i, ii, v","i, iii, iv"],ans:0},
  {q:"Qual das seguintes é a descrição MAIS provável de uma tarefa realizada por alguém em papel de gerenciamento de teste?",opts:["Avaliar a base de teste e o objeto de teste.","Definir requisitos de ambiente de teste.","Avaliar a testabilidade do objeto de teste.","Criar relatório de conclusão de teste."],ans:3},
  {q:"Qual das seguintes é uma vantagem da abordagem de equipe inteira?",opts:["Melhoria na comunicação entre os membros da equipe.","Diminuição da responsabilidade individual pela qualidade.","Implantação mais rápida de entregáveis para os usuários finais.","Redução da colaboração com usuários comerciais externos."],ans:0},
  {q:"Vantagens e desvantagens da independência do teste:\ni. Os testadores trabalham em um local diferente dos desenvolvedores\nii. Os testadores questionam os pressupostos que os programadores fazem ao escrever o código\niii. Uma dinâmica de confronto foi estabelecida entre testadores e desenvolvedores\niv. Os desenvolvedores convenceram-se de que os testadores são principalmente responsáveis pela qualidade\nv. Os testadores têm viéses diferentes dos mantidos pelos desenvolvedores\n\nQuais são MAIS prováveis de serem consideradas vantagens?",opts:["i, iv","ii, v","i, iii, iv","ii, iii, v"],ans:1},
  {q:"Qual das seguintes respostas descreve uma condição de teste?",opts:["Um aspecto testável de um componente ou sistema identificado como base para os testes.","O grau em que um produto de software fornece funções que atendem às necessidades declaradas e implícitas.","Uma característica distinta de um componente ou sistema.","Casos de teste projetados para executar combinações de condições e ações resultantes delas."],ans:0},
  {q:"Qual das seguintes declarações é um objetivo válido para os testes?",opts:["Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas.","Para provar que qualquer defeito remanescente não causará nenhuma falha.","O teste deve começar o mais tarde possível para que o desenvolvimento tenha tempo suficiente para criar um bom produto.","Para provar que todos os possíveis defeitos são identificados."],ans:0},
  {q:"Qual das seguintes declarações descreve corretamente a diferença entre teste e depuração?",opts:["Os testes dinâmicos previnem as causas das falhas; a depuração remove as falhas.","Os testes dinâmicos mostram falhas causadas por defeitos; a depuração elimina os defeitos, que são a fonte das falhas.","Os testes não removem as falhas; mas a depuração remove os defeitos que causam as falhas.","Os testes identificam a fonte dos defeitos; a depuração analisa os defeitos e propõe atividades de prevenção."],ans:1},
  {q:"Qual das declarações abaixo descreve a situação mais comum para uma falha descoberta durante os testes ou na produção?",opts:["O algoritmo de computação utilizou as variáveis de entrada erradas.","O desenvolvedor interpretou erroneamente a exigência do algoritmo.","A versão errada de um arquivo de código fonte compilado foi incluída na compilação.","O produto falhou quando o usuário selecionou uma opção em uma caixa de diálogo."],ans:3},
  {q:"O Sr. Test tem testado aplicações de software em dispositivos móveis por 5 anos. Durante vários meses, ele não modificou os casos de testes automatizados existentes e não criou casos de testes. Isto leva a que cada vez menos defeitos sejam encontrados. Que princípio de teste o Sr. Test não observou?",opts:["A repetição dos mesmos testes não encontrará novos defeitos.","Não é possível realizar testes exaustivos.","Defeitos agrupados.","Os testes dependem do ambiente."],ans:0},
  {q:"De que forma os testes podem ser parte da Garantia de Qualidade?",opts:["Ela garante que os requisitos sejam suficientemente detalhados.","Assegura que as normas da organização sejam seguidas.","Os testes reduzem o risco de má qualidade do software.","Mede a qualidade do software em termos de número de casos de teste executados."],ans:2},
  {q:"Qual das seguintes atividades faz parte da atividade principal 'análise de teste' no processo de teste?",opts:["Análise das lições aprendidas para a melhoria do processo.","Criação de conjuntos de teste a partir de scripts de teste.","Avaliando a base de teste de testabilidade.","Identificação de qualquer infraestrutura e ferramentas necessárias."],ans:2},
  {q:"Combine os produtos de trabalho (1–4) com a descrição correta (A–D):\n(1) Conjunto de teste\n(2) Caso de teste\n(3) Roteiro de teste\n(4) Carta de teste\n\n(a) Conjunto de scripts para execução específica\n(b) Conjunto de instruções para a execução de um teste\n(c) Contém os resultados esperados\n(d) Documentação das atividades em testes exploratórios baseados em sessões",opts:["1A, 2C, 3D, 4B","1D, 2B, 3A, 4C","1A, 2C, 3B, 4D","1D, 2C, 3B, 4A"],ans:2},
  {q:"Qual dos itens a seguir fornece a definição do termo caso de teste?",opts:["Uma fonte para determinar um resultado esperado para comparar com o resultado real do sistema em teste.","Subconjunto do domínio do valor de uma variável dentro de um componente ou sistema no qual todos os valores devem ser tratados da mesma forma com base na especificação.","Produtos de trabalho produzidos durante o processo de teste para uso no planejamento, projeto, execução, avaliação e relatórios sobre testes.","Um conjunto de condições prévias, insumos, ações, resultados esperados e pós condições, desenvolvido com base em condições de teste."],ans:3},
  {q:"Qual dos seguintes é um objetivo típico dos testes?",opts:["Encontrar defeitos e falhas.","Garantia de testes completos.","Para validar os trabalhos do plano do projeto, conforme necessário.","Comparação dos resultados reais com os resultados esperados."],ans:0},
  {q:"Qual dos seguintes é um exemplo de falha em um sistema de controle de velocidade 'cruise control' de um carro?",opts:["A especificação do projeto do sistema indica erroneamente as velocidades.","Código desnecessário que soa um alarme quando a inversão de marcha foi incluída no sistema.","O desenvolvedor do sistema esqueceu de renomear variáveis após uma operação de cortar e colar.","O sistema deixa de manter uma velocidade definida quando o volume do rádio é aumentado ou diminuído."],ans:3},
  {q:"Qual dos seguintes aspectos é mais um defeito do que uma causa raiz em um rastreador de fitness?",opts:["Como a projetista nunca havia trabalhado em dispositivos vestíveis, ela entendeu mal os efeitos da luz solar refletida.","Uma variável de configuração incorreta implementada para a função GPS poderia causar problemas de localização durante o horário de verão.","O testador da interface do smartphone não tinha sido treinado em testes de transição de estado, então falhou um defeito grave.","Como o autor dos requisitos não estava familiarizado com o domínio do treinamento físico, assumiu erroneamente que os usuários queriam batimentos cardíacos em batidas por hora."],ans:1},
  {q:"Como resultado da análise de risco, mais testes estão sendo direcionados para aquelas áreas do sistema em teste onde os testes iniciais encontraram mais defeitos do que a média. Qual dos seguintes princípios de teste está sendo aplicado?",opts:["Cuidado com o paradoxo do pesticida.","A ausência de erros é uma falácia.","Os testes são dependentes do contexto.","Defeitos agrupados."],ans:3},
  {q:"Atividades: (a) Projeto  (b) Implementação  (c) Execução  (d) Conclusão\n\nTarefas:\n(1) Entrada de pedidos de alteração para defeitos em aberto\n(2) Identificação de dados de teste para apoiar os casos de teste\n(3) Priorização de procedimentos e criação de dados de teste\n(4) Analisar as discrepâncias para determinar sua causa\n\nQual dos seguintes MELHORES combina atividades com tarefas?",opts:["A-3, B-2, C-4, D-1","A-3, B-2, C-1, D-4","A-2, B-3, C-4, D-1","A-2, B-1, C-3, D-4"],ans:2},
  {q:"Qual dos seguintes MELHORES descreve como o valor é agregado ao manter a rastreabilidade entre a base de teste e os artefatos de teste?",opts:["Os gerentes de testes podem identificar quais testadores encontraram os defeitos de maior gravidade.","É possível determinar se um novo caso de teste aumentou a cobertura das exigências.","As áreas que podem ser impactadas por efeitos colaterais de uma mudança podem ser alvo de testes de confirmação.","Os testes de manutenção podem ser totalmente automatizados com base em mudanças nas exigências iniciais."],ans:1},
  {q:"Qual das seguintes qualidades é MAIS provável que seja encontrada na mentalidade de um testador e não na de um desenvolvedor?",opts:["A mentalidade de um testador tende a crescer e amadurecer à medida que o testador ganha experiência.","Capacidade de ver o que pode dar errado.","Atenção aos detalhes.","Boa comunicação com os membros da equipe."],ans:1},
  {q:"O que é qualidade?",opts:["O grau em que um componente ou sistema protege informações e dados para que as pessoas ou outros sistemas tenham o grau de acesso adequado a seus tipos e níveis de autorização.","O grau em que um componente ou sistema satisfaz as necessidades declaradas e implícitas de suas diversas partes interessadas.","Atividades focadas em proporcionar confiança de que os requisitos de qualidade serão cumpridos.","Os custos totais incorridos em atividades e questões de qualidade, divididos em custos de prevenção, avaliação, falhas internas e falhas externas."],ans:1},
  {q:"Qual dos seguintes é um objetivo típico do teste?",opts:["Comparação dos resultados reais com os resultados esperados.","Analisando a causa do fracasso.","Prevenir defeitos.","Reparação de defeitos."],ans:2},
  {q:"Um telefone tocando momentaneamente distrai um programador, fazendo com que o programador programe inadequadamente a lógica que verifica o limite superior de uma variável de entrada. Mais tarde, durante os testes do sistema, um testador percebe que este campo de entrada aceita valores de entrada inválidos. A lógica codificada impropriamente para a verificação do limite superior é:",opts:["O erro.","O fracasso.","A causa raiz.","O defeito."],ans:3},
  {q:"Um proprietário de produto diz que seu papel como testador em uma equipe Ágil é pegar todos os bugs antes do final de cada iteração. Qual dos seguintes é um princípio de teste que poderia ser usado para responder a esta falsa afirmação?",opts:["Ausência de erros de falácia.","Os testes mostram a presença de defeitos.","Agrupamento de defeitos.","Análise da causa raiz."],ans:1},
  {q:"Os programadores frequentemente escrevem e executam testes unitários contra o código que eles escreveram. Durante esta atividade de autoteste, qual dos seguintes aspectos é uma mentalidade de testador que os programadores devem adotar para realizar estes testes unitários de forma eficaz?",opts:["Atenção aos detalhes.","Avaliação de defeitos de código.","Cobertura de código.","Boa habilidade de comunicação."],ans:0},
  {q:"Considere as atividades de teste:\n(1) Seleção de testes de regressão\n(2) Avaliando a completude da execução do teste\n(3) Identificar quais histórias de usuários têm defeitos em aberto\n(4) Avaliar se o número de testes para cada exigência é consistente com o nível de risco\n\nFormas como a rastreabilidade pode ajudar:\n(a) Melhorar a compreensibilidade dos relatórios de status\n(b) Tornar os testes auditáveis\n(c) Fornecer informações para avaliar a qualidade do processo\n(d) Analisar o impacto das mudanças\n\nQual dos seguintes combina a atividade de teste com a forma como a rastreabilidade pode auxiliar?",opts:["1b; 2d; 3a; 4c","1d; 2c; 3a; 4b","1d; 2b; 3a; 4c","1d; 2b; 3c; 4a"],ans:2},
  {q:"Um testador participou de uma discussão sobre a estrutura de banco de dados proposta e identificou um problema potencial de desempenho relacionado a certas buscas comuns de usuários. Este possível problema foi explicado para a equipe de desenvolvimento. Qual dos seguintes aspectos é uma contribuição de teste para o sucesso que o MELHOR corresponde a esta situação?",opts:["Assegurar que os processos sejam realizados corretamente.","Permitindo que os testes requeridos sejam identificados em um estágio inicial.","Reduzindo o risco de funcionalidade não testada.","Reduzindo o risco de defeitos fundamentais de projeto."],ans:3},
  {q:"Qual dos seguintes é um exemplo de uma tarefa que pode ser realizada como parte do processo de teste?",opts:["Dados de teste de projeto.","Atribuição de uma versão a um item de teste.","Análise de um defeito.","Escrever uma história de usuário."],ans:0},
];

// ============================================================
// QUESTÕES — CAPÍTULO 2
// ============================================================
const QUESTIONS_CAP2 = [
  {
    q: "Considere a seguinte regra: \"para cada atividade do SDLC, há uma atividade de teste correspondente\". Em quais modelos de SDLC essa regra é válida?",
    opts: [
      "Em modelos de sequenciais, incrementais e iterativos.",
      "Somente em modelos iterativos e incrementais.",
      "Somente em modelos sequenciais.",
      "Somente em modelos iterativos."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado por testes de aceite (ATDD)?",
    opts: [
      "No ATDD, os testes são baseados no comportamento desejado do software, o que facilita a compreensão dos membros da equipe.",
      "No ATDD, os testes são criados com base em critérios de aceite para orientar o desenvolvimento do software.",
      "No ATDD, os casos de teste são criados principalmente no teste de componentes e são orientados para o código.",
      "No ATDD, os critérios de aceite geralmente são criados com base no formato dado/quando/então."
    ],
    ans: 1
  },
  {
    q: "Qual das opções a seguir NÃO é um exemplo da abordagem shift-left?",
    opts: [
      "Revisar os requisitos do usuário antes que eles sejam formalmente aceitos pelos stakeholders.",
      "Execução de um teste de eficiência de performance para um componente durante o teste do componente.",
      "Escrever um teste de componente antes que o código correspondente seja escrito.",
      "Escrever um script de teste antes de definir o processo de gerenciamento de configuração."
    ],
    ans: 3
  },
  {
    q: "Qual dos argumentos abaixo você usaria para convencer seu gerente a organizar retrospectivas no final de cada ciclo de lançamento?",
    opts: [
      "As retrospectivas são muito populares hoje em dia e os clientes gostariam que as adicionássemos aos nossos processos.",
      "A organização de retrospectivas economizará dinheiro, pois os representantes dos usuários finais não fornecem feedback imediato sobre o produto.",
      "Os pontos fracos do processo, identificados durante a retrospectiva, podem ser analisados e servir como uma lista de tarefas para o programa de melhoria contínua do processo da organização.",
      "As retrospectivas adotam cinco valores, incluindo coragem e respeito, que são cruciais para manter o aprimoramento contínuo na organização."
    ],
    ans: 2
  },
  {
    q: "Quais tipos de falhas (1-4) se encaixam melhor em quais níveis de teste (A-D)?\n(1) Falhas no comportamento do sistema à medida que ele se desvia das necessidades de negócio do usuário.\n(2) Falhas na comunicação entre os componentes.\n(3) Falhas na lógica em um módulo.\n(4) Falhas nas regras de negócios não implementadas corretamente.\n\n(A) Teste de componentes.\n(B) Teste de integração de componentes.\n(C) Teste de sistema.\n(D) Teste de aceite.",
    opts: [
      "1D, 2B, 3C, 4A",
      "1B, 2A, 3D, 4C",
      "1C, 2B, 3A, 4D",
      "1D, 2B, 3A, 4C"
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes afirmações sobre o ciclo de vida de desenvolvimento de software escolhido é CORRETA?",
    opts: [
      "Se o desenvolvimento de software ágil for utilizado, a automação de teste de sistema substitui a necessidade de testes de regressão.",
      "Se um modelo de desenvolvimento sequencial for utilizado, então o teste dinâmico é tipicamente restrito a estágios posteriores no ciclo de vida.",
      "Se um modelo de desenvolvimento incremental for utilizado, então o teste estático é realizado nos incrementos iniciais e o teste dinâmico nos incrementos posteriores.",
      "Se um modelo de desenvolvimento iterativo for utilizado, então o teste de componentes é tipicamente realizado manualmente pelos desenvolvedores."
    ],
    ans: 1
  },
  {
    q: "Qual dos seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
    opts: [
      "Os testadores devem revisar os produtos de trabalho assim que os rascunhos estiverem disponíveis.",
      "Os testadores devem revisar os produtos de trabalho antes que a análise e o design de teste comecem.",
      "Os testadores devem revisar os produtos de trabalho imediatamente após serem publicados.",
      "Os testadores devem revisar os produtos de trabalho como parte da próxima fase de desenvolvimento."
    ],
    ans: 0
  },
  {
    q: "Qual dos seguintes é um exemplo de uma abordagem de desenvolvimento orientada por testes?",
    opts: [
      "Desenvolvimento Orientado por Testes (Test-Driven Development)",
      "Desenvolvimento Orientado por Recursos (Feature-Driven Development)",
      "Desenvolvimento Orientado por Cobertura (Coverage-Driven Development)",
      "Desenvolvimento Orientado pela Qualidade (Quality-Driven Development)"
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes afirmações sobre o DevOps é CORRETA?",
    opts: [
      "Para poder atualizar e lançar sistemas com mais frequência, muitos testes de regressão automatizados são necessários para reduzir o perigo de regressão.",
      "Para acelerar os lançamentos, a integração contínua é usada para incentivar os desenvolvedores a enviar código rapidamente, sem a necessidade de concluir testes de componentes.",
      "Para tratar tanto desenvolvedores quanto operações igualmente, os testadores alocarão mais esforço para o teste de lançamento pelas operações usando uma abordagem shift-right.",
      "Para criar uma sinergia aumentada entre testadores, desenvolvedores e operações, os testes devem se tornar totalmente automatizados, sem nenhum teste manual."
    ],
    ans: 0
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser realizado como parte dos testes de sistema?",
    opts: [
      "Testar a interface de um sistema de câmbio de moedas com um sistema bancário externo.",
      "Teste de segurança de um sistema de gestão de crédito por uma equipe de teste independente.",
      "Testar as interações entre a interface do usuário e o banco de dados de um sistema de recursos humanos.",
      "Teste beta de um sistema de aprendizagem remota por desenvolvedores de material didático."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes é uma boa prática de teste que se aplica a todos os ciclos de vida do desenvolvimento de software?",
    opts: [
      "Para cada objetivo de teste, há um objetivo de desenvolvimento correspondente.",
      "Para cada atividade de teste de software, há uma atividade de usuário correspondente.",
      "Para cada nível de teste, há um nível de desenvolvimento correspondente.",
      "Para cada atividade de desenvolvimento de software, há uma atividade de teste correspondente."
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes fornece a MELHOR descrição da abordagem de shift-left?",
    opts: [
      "Onde for economicamente viável, atividades de teste são movidas para serem realizadas mais cedo no ciclo de vida do desenvolvimento de software (SDLC) para reduzir o custo total da qualidade, reduzindo o número de defeitos encontrados mais tarde no SDLC.",
      "Quando disponível, os testadores são treinados para realizar tarefas no início do SDLC para permitir que mais atividades de teste sejam automatizadas posteriormente no SDLC.",
      "Quando têm tempo disponível, os testadores são obrigados a automatizar testes para testes de regressão, começando com testes de componentes e testes de integração de componentes.",
      "Quando acordado pelos desenvolvedores, atividades manuais do lado esquerdo do processo de teste são automatizadas para apoiar o princípio de \"testes antecipados economizam tempo e dinheiro\"."
    ],
    ans: 0
  },
  {
    q: "Qual dos seguintes níveis de teste é MAIS provável que esteja sendo realizado se o foco dos testes é a validação e não está sendo realizado por testadores?",
    opts: [
      "Teste de componente.",
      "Teste de integração de sistema.",
      "Teste de integração de componentes.",
      "Teste de aceitação."
    ],
    ans: 3
  },
  {
    q: "Como os testes caixa-branca podem ser aplicados durante os testes de aceite?",
    opts: [
      "Verificar se todos os fluxos do processo de trabalho foram cobertos.",
      "Para verificar se grandes volumes de dados podem ser transferidos entre sistemas integrados.",
      "Para cobrir todas as navegações da página web.",
      "Para verificar se todas as declarações de código e caminhos de decisão de código foram executadas."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes declarações comparando testes de componentes e testes de sistemas é VERDADEIRA?",
    opts: [
      "Os testes de componentes são de responsabilidade dos testadores, enquanto os testes de sistemas são tipicamente de responsabilidade dos usuários.",
      "Os casos de teste para teste de componentes são geralmente derivados das especificações de componentes, especificações de projeto ou modelos de dados, enquanto os casos de teste para teste de sistemas são geralmente derivados das especificações de requisitos ou casos de uso.",
      "O teste de componentes verifica a funcionalidade de módulos de software, objetos de programa e classes que são testados separadamente, enquanto o teste de sistema verifica interfaces entre componentes e interações entre diferentes partes do sistema.",
      "O teste de componentes foca exclusivamente em características não-funcionais, enquanto o teste de sistema foca apenas em requisitos e regras de negócio funcionais."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções é VERDADEIRA?",
    opts: [
      "O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido.",
      "O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o sistema ainda está funcionando em um novo ambiente.",
      "O objetivo do teste de regressão é verificar se a correção foi implementada com sucesso, enquanto o objetivo do teste de confirmação é confirmar que a correção não tem efeitos colaterais.",
      "O objetivo do teste de regressão é verificar se a nova funcionalidade está funcionando, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes definições é a MELHOR definição de um modelo de desenvolvimento incremental?",
    opts: [
      "Uma fase no processo de desenvolvimento deve começar quando a fase anterior estiver concluída.",
      "Definição de requisitos, projeto de software e testes são feitos em fases em que em cada uma parte do sistema é adicionada.",
      "Os testes são adicionados ao desenvolvimento como um incremento.",
      "Os testes são vistos como uma fase separada que ocorre após a conclusão do desenvolvimento."
    ],
    ans: 1
  },
  {
    q: "Qual dos seguintes itens NÃO deve ser um gatilho para testes de manutenção?",
    opts: [
      "Decisão de testar após \"hot fixes\".",
      "Decisão de testar a possibilidade de manutenção do software.",
      "Decisão de testar se os dados arquivados são possíveis de serem recuperados.",
      "Decisão de testar o sistema após a migração para uma nova plataforma operacional."
    ],
    ans: 1
  },
  {
    q: "Dadas as seguintes declarações sobre as relações entre as atividades de desenvolvimento de software e as atividades de teste no ciclo de vida de desenvolvimento de software:\n(1) Cada atividade de desenvolvimento deve ter uma atividade de teste correspondente\n(2) A revisão deve começar assim que as versões finais dos documentos estiverem disponíveis.\n(3) O projeto e a implementação de testes devem começar durante a atividade de desenvolvimento correspondente\n(4) As atividades de teste devem começar nos estágios iniciais do ciclo de vida de desenvolvimento de software\n\nQuais dos seguintes CORRETAMENTE mostram quais são verdadeiros e quais são falsos?",
    opts: [
      "Verdadeiro - 1, 2, 4; Falso - 3",
      "Verdadeiro - 2, 3; Falso - 1, 4",
      "Verdadeiro - 1, 4; Falso - 2, 3",
      "Verdadeiro - 1, 2; Falso - 3, 4"
    ],
    ans: 2
  },
  {
    q: "Qual das seguintes declarações sobre tipos e níveis de teste é CORRETA?",
    opts: [
      "Os testes funcionais podem ser realizados em qualquer nível de teste, enquanto o teste caixa-branca é restrito ao teste de componentes.",
      "Os testes funcionais e não funcionais podem ser realizados em qualquer nível de teste, enquanto os testes caixa-branca são restritos aos testes de componentes e integração.",
      "Os testes funcionais e não funcionais podem ser realizados nos níveis de teste do sistema e de aceitação, enquanto o teste caixa-branca é restrito aos testes de componentes e de integração.",
      "É possível realizar testes funcionais, não-funcionais e caixa-branca em qualquer nível de teste."
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes declarações BEST compara os propósitos de teste de confirmação e teste de regressão?",
    opts: [
      "O teste de confirmação serve para verificar se as correções de defeito foram implementadas com sucesso, enquanto o teste de regressão serve para mitigar o risco de que as alterações de software tenham causado efeitos colaterais indesejados.",
      "O teste de confirmação busca encontrar novos defeitos em funcionalidades recém-adicionadas, enquanto o teste de regressão foca exclusivamente em testar os módulos antigos de código que não sofreram alterações diretas.",
      "O teste de confirmação serve para analisar o impacto das correções de segurança em produção, enquanto o teste de regressão visa validar as regras de negócio junto aos usuários finais.",
      "O teste de confirmação é executado exclusivamente por uma equipe de testes terceirizada independente, enquanto os testes de regressão automatizados são uma responsabilidade única dos desenvolvedores do sistema."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes declarações descreve CORRETAMENTE um papel da análise de impacto nos testes de manutenção?",
    opts: [
      "A análise de impacto é utilizada para identificar como os dados devem ser migrados para o sistema mantido.",
      "A análise de impacto é utilizada para decidir quais correções quentes são de maior valor para o usuário.",
      "A análise de impacto é utilizada quando se decide se vale a pena uma correção para um sistema mantido.",
      "A análise de impacto é utilizada para determinar a eficácia de novos casos de teste de manutenção."
    ],
    ans: 2
  },
  {
    q: "Você está executando um teste de desempenho com o objetivo de encontrar possíveis gargalos de rede nas interfaces entre os componentes de um sistema. Qual das seguintes afirmações descreve este teste?",
    opts: [
      "Um teste não-funcional realizado durante o nível de teste de integração de componentes.",
      "Um teste funcional realizado durante o nível de teste de integração de sistemas.",
      "Um teste caixa-branca focado em componentes estruturais isolados.",
      "Um teste de aceite operacional focado no desempenho global do sistema."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes afirmações é verdadeira?",
    opts: [
      "O teste de confirmação é útil para o teste de regressão durante o projeto do sistema.",
      "A análise de impacto é útil para testes de regressão durante os testes de manutenção.",
      "O teste de confirmação é útil para a análise de impacto durante os testes de manutenção.",
      "A análise de impacto é útil para os testes de confirmação durante os testes de manutenção."
    ],
    ans: 1
  },
  {
    q: "Considere os seguintes tipos de defeitos nos quais um nível de teste pode se concentrar:\n(1) Defeitos em módulos ou objetos testáveis separadamente\n(2) Não focado na identificação de defeitos\n(3) Defeitos nas interfaces e interações\n(4) Defeitos em todo o objeto de teste\n\nQual alternativa associa corretamente o nível de teste (Componente, Integração, Sistema, Aceite) com o seu foco principal de defeito?",
    opts: [
      "Componente - 1; Integração - 3; Sistema - 4; Aceite - 2",
      "Componente - 3; Integração - 1; Sistema - 4; Aceite - 2",
      "Componente - 1; Integração - 4; Sistema - 3; Aceite - 2",
      "Componente - 2; Integração - 3; Sistema - 4; Aceite - 1"
    ],
    ans: 0
  },
  {
    q: "Um produto de software de sistema operacional de mercado de massa é projetado para rodar em qualquer hardware de PC com um processador da família x86. Você está executando um conjunto de testes para procurar defeitos relacionados ao suporte dos vários PCs que usam tal processador e para criar confiança de que marcas importantes de PCs funcionarão. Que tipo de teste você está realizando?",
    opts: [
      "Teste de desempenho.",
      "Teste funcional.",
      "Teste do processador.",
      "Teste de portabilidade."
    ],
    ans: 3
  },
  {
    q: "Durante um effort de desenvolvimento ágil, um proprietário de produto descobre uma exigência regulatória desconhecida anteriormente que se aplica à maioria das histórias de usuários dentro de um determinado épico. As histórias de usuários são atualizadas para proporcionar as mudanças necessárias no comportamento do software. Os programadores modificam o código e os testadores precisam validar a mudança. Qual abordagem descreve melhor o teste desencadeado por esse cenário?",
    opts: [
      "Teste de manutenção provocado por modificações devido a atualizações regulatórias.",
      "Teste de regressão em todo o sistema sem análise prévia de impacto.",
      "Teste de componentes focado apenas nas novas linhas de código adicionadas pelos desenvolvedores.",
      "Teste de portabilidade focado na execução do sistema em novos ambientes regulatórios."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes opções descreve uma característica essencial dos testes não-funcionais?",
    opts: [
      "Eles medem as características de qualidade de um sistema ou produto, como usabilidade, eficiência de desempenho ou segurança.",
      "Eles servem principalmente para demonstrar que as funções do software foram completamente codificadas de acordo com os requisitos estruturais.",
      "Eles dependem fundamentalmente da visualização e análise de caminhos lógicos internos e estruturas do código-fonte.",
      "Eles só podem ser aplicados no nível de teste de aceite operacional por equipes de infraestrutura e operações."
    ],
    ans: 0
  },
  {
    q: "No contexto de testes estruturais (caixa-branca), qual das alternativas a seguir expressa um objetivo comum de cobertura avaliado nos níveis iniciais de teste?",
    opts: [
      "O percentual de histórias de usuário validadas pelo Product Owner.",
      "O percentual de declarações (statements) ou decisões executadas pelo conjunto de testes.",
      "O percentual de telas mapeadas na interface gráfica do usuário.",
      "O número de defeitos de regressão que foram fechados com sucesso."
    ],
    ans: 1
  },
  {
    q: "Se um sistema legado precisa ser desativado e os dados armazenados nele devem ser migrados para um novo banco de dados corporativo, qual o tipo de teste de manutenção ideal para validar que as informações arquivadas ainda permanecem acessíveis e íntegras?",
    opts: [
      "Teste de regressão de componentes estruturais.",
      "Teste de conversão ou migração de dados.",
      "Teste de estresse de interface de usuário.",
      "Teste caixa-preta de eficiência de performance."
    ],
    ans: 1
  }
];

// ============================================================
// QUESTÕES — CAPÍTULO 3
// ============================================================

const QUESTIONS_CAP3 = [
  {
    q: "Quais das seguintes opções são papéis em uma revisão formal?",
    opts: [
      "Autor, Moderador, Gerente, Revisor, Desenvolvedor.",
      "Desenvolvedor, Moderador, Líder de revisão, Revisor, Testador.",
      "Autor, Moderador, Líder de revisão, Revisor, Redator.",
      "Autor, Gerente, Lider de revisão, Revisor, Designer."
    ],
    ans: 2
  },
  {
    q: "Quais atividades são realizadas no âmbito do planejamento de uma revisão formal?",
    opts: [
      "Coleta de métricas para a avaliação da eficácia da revisão",
      "Avaliação dos resultados da revisão em relação aos critérios de saída",
      "Responder a quaisquer perguntas que os participantes possam ter",
      "Definição e verificação do cumprimento dos critérios de entrada para a revisão"
    ],
    ans: 3
  },
  {
    q: "Qual dos tipos de revisão abaixo é a MELHOR opção para escolher quando a revisão deve seguir um processo formal baseado em regras e listas de verificação?",
    opts: [
      "Inspeção",
      "Passagem",
      "Revisão Técnica",
      "Revisão Informal"
    ],
    ans: 0
  },
  {
    q: "Quais das seguintes afirmações sobre testes estáticos são as mais verdadeiras?",
    opts: [
      "Os testes estáticos permitem encontrar problemas de tempo de execução no início do ciclo de vida",
      "Os testes estáticos são uma forma barata de detectar e remover defeitos",
      "Ao testar um sistema crítico de segurança, os testes estáticos tem menos valor porque os testes dinâmicos encontram melhor os defeitos",
      "Os testes estáticos tornam os testes dinâmicos menos desafiadores"
    ],
    ans: 1
  },
  {
    q: "Você será convidado para uma revisão baseada em checklist de uma descrição do processo de criação de documentos internos cujo objetivo é apresentar a distribuição do trabalho de forma clara. A checklist inclui:\nI. A pessoa que executa a atividade é claramente identificada?\nII. Os critérios de entrada estão claramente definidos?\nIII. Os critérios de saída estão claramente definidos?\nIV. Os papéis de apoio e seu escopo estão claramente definidos?\n\nTrecho avaliado: 'Depois de verificar a documentação do cliente para verificar se está completa e correta, o arquiteto do software cria a especificação do sistema. Uma vez concluída, ele convida os testadores e verificadores para a revisão. Uma lista de verificação descreve o escopo da revisão. Cada revisor convidado cria comentários de revisão - se necessário e conclui a revisão com um comentário oficial de revisão'.\n\nQual das seguintes declarações sobre sua revisão é correta?",
    opts: [
      "O ponto I da lista de verificação foi violado porque não está claro quem esta fornecendo a lista de verificação para o convite para a revisão",
      "Você percebe que além do verificador, o validador também deve ser convidado. Como este item não faz parte de sua lista de verificação, você não cria um comentário correspondente",
      "O ponto III da lista de verificação foi violado, pois não está claro o que marca a revisão como concluída.",
      "O ponto II da lista de verificação foi violado porque não está claro qual condição deve ser preenchida para convidar para a revisão."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes afirmações reflete CORRETAMENTE o valor dos testes estáticos?",
    opts: [
      "Desde que começamos a usar análise estática, encontramos defeitos de codificação que podem não ter sido encontrados realizando apenas testes dinâmicos",
      "Usando testes estáticos significa que temos melhor controle e gerenciamento de defeitos mais barato devido à facilidade de detecção de defeitos mais tarde no ciclo de vida",
      "Agora que exigimos o uso de análise estática, as exigências não atendidas diminuiram e a comunicação entre testadores e desenvolvedores melhorou",
      "Ao introduzir revisões, descobrimos que tanto a qualidade das especificações quanto o tempo necessário para o desenvolvimento e os testes aumentaram"
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes declarações sobre o uso de listas de verificação em uma revisão formal é CORRETA?",
    opts: [
      "Como parte da reunião de revisão, os revisores criam relatórios de defeitos com base nas listas de verificação previstas para a revisão",
      "Como parte da comunicação da questão, os revisores preenchem as listas de verificação previstas para a revisão",
      "Como parte do planejamento da revisão, os revisores criam as listas de verificação necessárias para a revisão",
      "Como parte do início da revisão, os revisores recebem as listas de verificação necessárias para a revisão"
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes funções e responsabilidades se encaixa CORRETAMENTE em uma revisão formal?",
    opts: [
      "Lider de revisão - Assegura o funcionamento eficaz das reuniões de revisão",
      "Gerente - Decide sobre a execução das revisões",
      "Escriba - Corrige defeitos no produto de trabalho em revisão",
      "Moderador - Monitora a relação custo-benefício continua"
    ],
    ans: 1
  },
  {
    q: "As revisões que estão sendo utilizadas em sua organização têm os seguintes atributos:\n• Há um papel de escriba\n• O objetivo é detectar defeitos potenciais\n• A reunião de revisão é liderada pelo autor\n• Os revisores encontram defeitos potenciais por revisão individual\n• É produzido um relatório de revisão\n\nQual dos seguintes tipos de revisão é o MAIS provável que seja utilizado?",
    opts: [
      "Inspeção",
      "Caminhada (Walkthrough)",
      "Revisão Técnica",
      "Revisão Informal"
    ],
    ans: 1
  },
  {
    q: "Você participa de uma revisão baseada em checklist de uma especificação de requisitos para uma biblioteca. Os requisitos contam com as seguintes afirmações:\n(6) Os bibliotecários podem obter respostas do sistema em 5 segundos\n(9) Os tomadores de empréstimo podem ser multados por não devolver um livro dentro de 3 semanas\n(10) Os tomadores de empréstimo podem obter respostas do sistema em 3 segundos\n(11) Emprestar um livro sem custo por um período máximo de 4 semanas\n(15) O sistema deve responder às solicitações dos usuários em 3 segundos\n\nSua tarefa é encontrar inconsistências/conflitos entre exigências individuais. Qual das seguintes CORRETAMENTE identifica inconsistências entre pares de requisitos?",
    opts: [
      "6-15, 9-11",
      "6-15, 7-12",
      "6-10, 6-15, 7-12",
      "6-10, 6-15, 9-11"
    ],
    ans: 0
  },
  {
    q: "Em uma revisão formal, qual é o nome do papel do participante que dirige uma reunião de inspeção?",
    opts: [
      "Programador",
      "Gerente de projetos",
      "Facilitador (ou Moderador)",
      "Autor"
    ],
    ans: 2
  },
  {
    q: "Você está lendo uma história de usuário no acúmulo de produtos para se preparar para uma reunião com o proprietário do produto e um desenvolvedor, notando defeitos potenciais à medida que você vai. Qual das seguintes afirmações é verdadeira sobre esta atividade?",
    opts: [
      "Não é um teste estático, pois os testes estáticos são sempre realizados com uma ferramenta",
      "Não é um teste estático, porque o teste estático envolve a execução do objeto de teste",
      "É um teste estático, pois qualquer defeito encontrado pode ser encontrado mais barato durante os testes dinâmicos",
      "É um teste estático, porque o teste estático não envolve a execução do objeto de teste"
    ],
    ans: 3
  },
  {
    q: "Durante um período intensivo de horas extras do projeto, um documento de arquitetura de sistema é enviado a vários participantes do projeto, anunciando uma revisão técnica previamente não planejada para ocorrer em uma semana. Não são feitos ajustes na lista de tarefas atribuídas aos participantes. Com base apenas nestas informações, qual dos seguintes fatores é um fator de sucesso para a revisão que é AUSENTE?",
    opts: [
      "Métricas suficientes para avaliar o autor",
      "Tipo de revisão apropriada",
      "Reunião de revisão bem gerenciada",
      "Tempo adequado para a preparação"
    ],
    ans: 3
  },
  {
    q: "Você está trabalhando como um testador em uma equipe Ágil e participou de mais de duas dúzias de sessões de refinamento da história do usuário com o proprietário do produto e os desenvolvedores da equipe no início de cada iteração. Considerando os fatores de sucesso do processo, qual o maior benefício dessa atividade precoce?",
    opts: [
      "Garantir que os testes automatizados substituam totalmente a necessidade de revisões de código manuais.",
      "Reduzir o tempo gasto nas reuniões de retrospectiva de sprint.",
      "Detectar defeitos e ambiguidades nos requisitos antes mesmo do início do desenvolvimento, servindo como uma forma barata de prevenir falhas.",
      "Permitir que os desenvolvedores criem códigos sem a necessidade de seguir padrões de arquitetura."
    ],
    ans: 2
  },
  {
    q: "Você está trabalhando em um projeto de videogame ágil baseado na mitologia grega. Considere a história de usuário da 'Vara de Midas':\n(1) A Vara deve funcionar em qualquer objeto ou jogador pelo toque.\n(2) Segurar o bastão não transforma o jogador que o segura em ouro.\n(3) Qualquer objeto ou jogador se transforma em ouro dentro de um milissegundo.\n(4) A Vara aparece como mostrado no Protótipo O.W.RoM.\n(5) A transformação começa no ponto de contato e se move a uma taxa de um metro por milissegundo.\n\nDurante a sessão de revisão de requisitos desta história de usuário, qual inconsistência crítica pode ser identificada entre os critérios?",
    opts: [
      "Os critérios (1) e (2) estão em conflito direto sobre quem pode segurar o objeto.",
      "Os critérios (3) e (5) são inconsistentes entre si sobre a velocidade/tempo de propagação da transformação.",
      "O critério (4) é redundante porque protótipos não podem ser usados em metodologias ágeis.",
      "Não há inconsistências aparentes e o requisito está perfeitamente pronto para desenvolvimento."
    ],
    ans: 1
  },
  {
    q: "Você está testando uma história de usuário com três critérios de aceite (AC1, AC2 e AC3) cobertos respectivamente pelos casos de teste TC1, TC2 e TC3. O histórico de execuções em três versões consecutivas do software foi:\n• Execução 1: TC1(Falhou), TC2(Aprovado), TC3(Falhou)\n• Execução 2: TC1(Aprovado), TC2(Falhou), TC3(Falhou)\n• Execução 3: TC1(Aprovado), TC2(Aprovado), TC3(Aprovado)\n\nOs testes são repetidos quando você é informado de que todos os defeitos encontrados na execução foram corrigidos. Quais dos testes/execuções acima agiram estritamente como testes de regressão (validação de código inalterado)?",
		image:"imagens/Cap 03/q16.png",
	opts: [
      "5, 6",
      "4, 6, 8, 9",
      "5, 7",
      "4, 7, 8, 9"
    ],
    ans: 2
  },
  {
    q: "Qual das opções a seguir NÃO é um benefício dos testes estáticos?",
    opts: [
      "A correction de defeitos encontrados durante o teste estático geralmente é muito mais barata do que a correção de defeitos encontrados durante o teste dinâmico.",
      "Detecção de lacunas e inconsistências nos requisitos.",
      "Ter um gerenciamento de defeitos menos dispendioso devido à facilidade de detectar defeitos mais tarde no processo SDLC.",
      "Encontrar defeitos de codificação que poderiam não ter sido encontrados apenas com a realização de testes dinâmicos."
    ],
    ans: 2
  },
  {
    q: "Qual dos seguintes é um benefício do feedback antecipado e frequente?",
    opts: [
      "Melhora o processo de teste para projetos futuros.",
      "Ele força os clientes a priorizarem seus requisitos com base nos riscos acordados.",
      "Essa é a única maneira de medir a qualidade das mudanças.",
      "Isso ajuda a evitar mal-entendidos sobre os requisitos."
    ],
    ans: 3
  },
  {
    q: "As revisões que estão sendo usadas em sua organização têm os seguintes atributos:\n• Há o papel de um redator (escriba).\n• O principal objetivo é avaliar a qualidade.\n• A reunião é conduzida pelo autor do produto de trabalho.\n• Há uma preparação individual.\n• É produzido um relatório de revisão.\n\nQual dos seguintes tipos de revisão é MAIS provável que esteja sendo usado?",
    opts: [
      "Revisão informal.",
      "Revisão técnica.",
      "Walkthrough (Caminhada).",
      "Inspeção."
    ],
    ans: 2
  },
  {
    q: "Qual dessas afirmações NÃO é um fator que contribui para revisões bem-sucedidas?",
    opts: [
      "Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade com outros participantes.",
      "Dividir grandes produtos de trabalho em pequenas partes para tornar o esforço necessário menos intenso.",
      "Os participantes devem dedicar tempo suficiente para a análise.",
      "As falhas encontradas devem ser reconhecidas, apreciadas e tratadas de forma objetiva."
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes afirmações é CORRETA?",
    opts: [
      "O teste de regressão se preocupa com efeitos adversos no código inalterado, enquanto o teste de confirmação se preocupa em testar o código alterado.",
      "O teste de regressão se preocupa em verificar se o ambiente operacional permanece inalterado, enquanto o teste de confirmação se preocupa em testar as mudanças no objeto de teste.",
      "Os testes de regressão aumentam em número à medida que o projeto avança, enquanto o número de testes de confirmação diminui à medida que o projeto avança.",
      "Os testes de regressão são criados e executados quando o objeto de teste é corrigido, enquanto os testes de confirmação são executados sempre que o objeto de teste é aprimorado."
    ],
    ans: 0
  },
  {
    q: "Qual dos seguintes é um exemplo de defeito que pode ser encontrado por testes estáticos, mas NÃO por testes dinâmicos?",
    opts: [
      "Código sem nenhum caminho que o alcance",
      "Falta de usabilidade fornecida pela interface do usuário",
      "Tempos de resposta ruins para a maioria dos usuários esperados",
      "Recursos necessários que não estão implementados no código"
    ],
    ans: 0
  },
  {
    q: "Qual dos seguintes é um benefício do feedback precoce e frequente das partes interessadas?",
    opts: [
      "Os usuários finais estão cientes de por que a entrega do produto de trabalho está atrasada",
      "Os gerentes estão cientes de quais desenvolvedores são menos produtivos",
      "Facilita a comunicação precoce de possíveis problemas de qualidade",
      "Isso permite que os gerentes de projeto priorizem suas interações com as partes interessadas"
    ],
    ans: 2
  },
  {
    q: "Dadas as seguintes descrições de tarefa:\n1. As características de qualidade a serem avaliadas e os critérios de saída são selecionados\n2. Todos têm acesso ao produto de trabalho\n3. Anomalias são identificadas no produto de trabalho\n4. Anomalias são discutidas\n\nE as seguintes atividades de revisão:\nA. Revisão individual\nB. Início da revisão\nC. Planejamento\nD. Comunicação e análise\n\nQual das seguintes MELHOR corresponde às descrições de tarefa e atividades?",
    opts: [
      "1C, 2A, 3B, 4D",
      "1B, 2C, 3D, 4A",
      "1B, 2D, 3C, 4A",
      "1C, 2B, 3A, 4D"
    ],
    ans: 3
  },
  {
    q: "Dadas as seguintes funções em revisões:\n1. Escrivão\n2. Líder da revisão\n3. Facilitador\n4. Gerente\n\nE as seguintes responsabilidades em revisões:\nA. Garante o funcionamento eficaz das reuniões de revisão e a criação de um ambiente de revisão seguro\nB. Registra informações da revisão, como decisões e novas anomalias encontradas durante a reunião de revisão\nC. Decide o que será revisado e fornece recursos, como pessoal e tempo para a revisão\nD. Assume a responsabilidade geral pela revisão, como organizar quando e onde a revisão ocorrerá\n\nQual das seguintes MELHOR corresponde às funções e responsabilidades?",
    opts: [
      "1A, 2C, 3B, 4D",
      "1B, 2D, 3C, 4A",
      "1B, 2D, 3A, 4C",
      "1A, 2B, 3D, 4C"
    ],
    ans: 2
  },
  {
    q: "No que diz respeito às responsabilidades fundamentais do papel do Autor no âmbito de revisões de produtos de trabalho, qual das seguintes afirmativas está correta?",
    opts: [
      "O autor é responsável por alocar o orçamento e o tempo dos testadores dedicados à atividade de revisão.",
      "O autor lidera e modera as sessões de inspeção mais formais para garantir um ambiente seguro.",
      "O autor cria e assume a responsabilidade de corrigir os defeitos identificados no produto de trabalho em análise.",
      "O autor consolida as métricas finais geradas pelas revisões individuais para repassar à gerência sênior."
    ],
    ans: 2
  },
  {
    q: "Dadas os seguintes defeitos exemplos:\ni. Duas partes diferentes da especificação de design discordam devido à complexidade do design\nii. O tempo de resposta é muito longo e faz com que os usuários percam a paciência\niii. Um caminho no código não pode ser alcançado durante a execução\niv. Uma variável é declarada, mas nunca usada posteriormente no programa\nv. A quantidade de memória necessária pelo programa para gerar um relatório é muito alta\n\nQual das seguintes opções IDENTIFICA MELHOR exemplos de defeitos que poderiam ser encontrados por testes estáticos (em vez de testes dinâmicos)?",
    opts: [
      "ii, v",
      "i, ii, iv",
      "iii, v",
      "i, iii, iv"
    ],
    ans: 3
  },
  {
    q: "Durante um período intensivo de horas extras do projeto, um documento de arquitetura de sistema é enviado a vários participantes do projeto, anunciando uma revisão técnica previamente não planejada para ocorrer em uma semana. Qual fator organizacional ou de processo representa o maior risco de falha para o sucesso desta revisão?",
    opts: [
      "A falta de ferramentas automáticas para registrar os apontamentos de erro em tempo real.",
      "A ausência de métricas formais para avaliar o desempenho individual do autor do documento.",
      "A falta de tempo adequado para a preparação individual dos revisores devido à sobrecarga de tarefas existentes.",
      "O uso excessivo de critérios de entrada muito restritivos antes da distribuição do rascunho."
    ],
    ans: 2
  },
  {
    q: "Dado os seguintes tipos de revisão:\n1. Revisão técnica\n2. Revisão informal\n3. Inspeção\n4. Revisão detalhada (Walkthrough)\n\nE as seguintes descrições:\nA. Inclui objetivos como alcançar consenso, gerar novas ideias e motivar os autores a melhorarem\nB. Inclui objetivos como educar os revisores, alcançar consenso, gerar novas ideias e detectar defeitos potenciais\nC. O principal objetivo é detectar defeitos potenciais e requer coleta de métricas para apoiar a melhoria do processo\nD. O principal objetivo é detectar defeitos potenciais e não gera uma saída formal documentada\n\nQual das seguintes combinações corresponde MELHOR aos tipos de revisão e às descrições?",
    opts: [
      "1A, 2B, 3C, 4D",
      "1A, 2D, 3C, 4B",
      "1B, 2C, 3D, 4A",
      "1C, 2D, 3A, 4B"
    ],
    ans: 1
  },
  {
    q: "Qual dos seguintes é um fator organizacional/humano de sucesso crítico que contribui para uma revisão bem-sucedida?",
    opts: [
      "Planejar cobrir um documento inteiro por revisão, independente da sua extensão ou complexidade.",
      "Definir que a avaliação do resultado sirva como métrica de desempenho individual para punir os autores.",
      "Garantir uma cultura baseada em confiança mútua, onde os defeitos encontrados sejam tratados de forma objetiva e construtiva, focando no produto e não na pessoa.",
      "Exigir que todas as reuniões de revisão sejam executadas sem preparação individual prévia dos participantes."
    ],
    ans: 2
  }
];
// ============================================================
// QUESTÕES — CAPÍTULO 4
// ============================================================
const QUESTIONS_CAP4 = [
  {
    q: "O que é teste baseado em checklist?",
    opts: [
      "Uma técnica de teste na qual os testes são derivados com base no conhecimento do testador sobre falhas do passado, ou conhecimento geral de falhas.",
      "Uma abordagem aos testes onde os testadores projetam e executam dinamicamente testes baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores.",
      "Uma técnica de teste baseada em uma análise da especificação de um componente ou sistema.",
      "Uma técnica de teste baseada na experiência em que o testador experiente usa uma lista de itens a serem anotados, verificados ou lembrados em um conjunto de critérios de aceitação."
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes opções descreve MELHOR o teste de transição de estado?",
    opts: [
      "Uma técnica de teste de caixa-preta aplicável quando diferentes combinações de entradas resultam em diferentes ações.",
      "Uma técnica de teste de caixa-preta baseada no comportamento do sistema para entradas que acionam mudanças e interações de estado.",
      "Uma técnica de teste baseada na experiência em que o testador gera cenários lógicos baseados na intuição de falhas históricas.",
      "Uma técnica de teste de caixa-branca focada na cobertura de caminhos de decisão em estruturas de laço de repetição."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve MELHOR a técnica de partição de equivalência?",
    opts: [
      "Dividir as entradas do sistema em grupos que se espera que sejam processados da mesma forma.",
      "Escolher valores nas bordas de blocos lógicos estruturais definidos no código.",
      "Mapear combinações complexas de causas e efeitos em tabelas booleanas de decisão.",
      "Gerar listas de verificação com base em defeitos típicos encontrados na arquitetura."
    ],
    ans: 0
  },
  {
    q: "Em qual das seguintes situações a análise de valor limite (AVL) é MAIS aplicável?",
    opts: [
      "Quando o sistema possui poucos estados lógicos estruturados e dependência temporal.",
      "Quando os requisitos de entrada ou saída são divididos em partições ordenadas contínuas ou discretas.",
      "Quando as regras de negócio complexas envolvem múltiplas combinações lógicas binárias.",
      "Quando o teste precisa ser conduzido puramente com base na intuição e experiência do usuário."
    ],
    ans: 1
  },
  {
    q: "Qual é o principal objetivo de usar tabelas de decisão nos testes de software?",
    opts: [
      "Identificar todas as declarações executáveis ocultas no código do programa.",
      "Garantir que as regras de negócio complexas que dependem de combinações de condições sejam totalmente testadas.",
      "Proporcionar alta cobertura de ramificação em estruturas do tipo Switch-Case.",
      "Permitir que usuários finais criem cenários ad-hoc baseados estritamente na interface gráfica."
    ],
    ans: 1
  },
  {
    q: "O que caracteriza a técnica de teste de adivinhação de erro?",
    opts: [
      "Uma técnica matemática de caixa-branca usada para contar caminhos lineares independentes.",
      "Uma técnica estruturada baseada em modelos de fluxo de dados criados pela arquitetura do sistema.",
      "Uma técnica baseada na experiência onde o testador usa seu conhecimento para antecipar erros, defeitos e falhas.",
      "Uma técnica de caixa-preta que exige o mapeamento estrito de diagramas de decisão booleana."
    ],
    ans: 2
  },
  {
    q: "O que define o teste exploratório?",
    opts: [
      "Testes projetados estritamente com semanas de antecedência baseados em requisitos formais.",
      "Uma abordagem de teste em que o design, a execução, o registro e o aprendizado de testes ocorrem concorrentemente.",
      "Uma técnica automatizada focada na varredura de vulnerabilidades de segurança de rede.",
      "A execução manual de scripts estruturais passo a passo fornecidos pela equipe de desenvolvimento."
    ],
    ans: 1
  },
  {
    q: "No teste de caixa-branca, o que significa alcançar 100% de cobertura de declaração (instrução)?",
    opts: [
      "Garantir que todas as decisões condicionais do código foram avaliadas como Verdadeiro e Falso.",
      "Garantir que todas as linhas de instruções executáveis do código-fonte foram executadas pelo menos uma vez.",
      "Garantir que todos os caminhos de dados e variáveis globais foram validados.",
      "Garantir que todas as interfaces de integração de APIs retornaram status HTTP 200."
    ],
    ans: 1
  },
  {
    q: "Os funcionários de uma empresa recebem bônus se trabalharem mais de um ano na empresa e atingirem uma meta que tenha sido acordada individualmente antes. Estes fatos podem ser mostrados na tabela de decisão apresentada na imagem correspondente.\n\nQual dos seguintes casos de teste representa uma situação que pode acontecer na vida real, e está faltando na tabela de decisão?",
    image: "src/imagens/Cap 04/q09.png",
    opts: [
      "Condição 1 = NÃO, Condição 2 = NÃO, Condição 3 = SIM, Ação = NÃO",
      "Condição 1 = NÃO, Condição 2 = SIM, Condição 3 = NÃO, Ação = NÃO",
      "Condição 1 = SIM, Condição 2 = SIM, Condição 3 = NÃO, Ação = SIM",
      "Condição 1 = SIM, Condição 2 = NÃO, Condição 3 = SIM, Ação = NÃO"
    ],
    ans: 1
  },
  {
    q: "Considere o diagrama de transição de estados exibido na imagem para o comportamento de uma TV (representando os estados TV Off, TV Standby e TV Play).\n\nQual das seguintes afirmações sobre este conjunto de testes é VERDADEIRA?",
    image: "src/imagens/Cap 04/q10.png",
    opts: [
      "Os casos de teste em questão cobrem transições válidas e inválidas no diagrama de transição estatal.",
      "Os casos de teste em questão representam todas as transições válidas possíveis no diagrama de transição estatal.",
      "Os casos de teste em questão representam pares de transições no diagrama de transição estatal.",
      "Os casos de teste em questão representam algumas das transições válidas no diagrama de transição estatal."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve uma técnica de teste baseada na especificação (caixa-preta)?",
    opts: [
      "Teste de caminhos lógicos baseados no fluxo de controle de dados estruturais.",
      "Teste derivado da análise da arquitetura interna e mapeamento do banco de dados.",
      "Teste baseado no comportamento funcional descrito em documentos de requisitos ou histórias de usuário.",
      "Teste conduzido exclusivamente por meio de inspeções automatizadas de código-fonte dinâmico."
    ],
    ans: 2
  },
  {
    q: "Qual é o principal benefício do teste baseado em colaboração (como o ATDD ou BDD)?",
    opts: [
      "Aumentar o isolamento do testador em relação aos desenvolvedores para evitar vieses.",
      "Promover um entendimento compartilhado dos requisitos entre desenvolvedores, testadores e representantes de negócios.",
      "Substituir completamente a necessidade de qualquer nível de testes estruturais de caixa-branca.",
      "Permitir o cálculo exato da complexidade ciclomática do sistema automaticamente."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes alternativas apresenta uma partição de equivalência válida para uma entrada que aceita apenas anos entre 1900 e 2025?",
    opts: [
      "Apenas o valor exato 1950.",
      "Valores menores que 1900, valores entre 1900 e 2025, e valores maiores que 2025.",
      "Apenas os limites exatos 1900 e 2025.",
      "Qualquer valor numérico positivo contínuo, incluindo frações decimais."
    ],
    ans: 1
  },
  {
    q: "No contexto de testes estruturais de caixa-branca, o que representa a cobertura de ramificação?",
    opts: [
      "A porcentagem de linhas de código que contêm loops do tipo While ou For exercitados.",
      "A porcentagem de resultados de decisões condicionais (Verdadeiro e Falso) que foram testados.",
      "A quantidade de chamadas externas de integração mapeadas por ferramentas de monitoramento.",
      "O número total de caminhos independentes do grafo lógicos estruturados."
    ],
    ans: 1
  },
  {
  q: "Um gravador de radiação diário para plantas produz uma pontuação de luz solar baseada na combinação do número de horas que uma planta está exposta ao sol (abaixo de 3 horas, 3 a 6 horas ou acima de 6 horas) e a intensidade média da luz solar (muito baixa, baixa, média, alta).\n\nDados os seguintes casos de teste ilustrados na imagem.\n\nQual é o número mínimo de casos de teste adicionais necessários para garantir a cobertura total de TODAS as partições de equivalência de entrada válida?",
  image: "src/imagens/Cap 04/q15.png",
  opts: [
    "2",
    "1",
    "3",
    "4"
  ],
  ans: 0
  },
  {
    q: "Uma das principais vantagens do teste exploratório é:",
    opts: [
      "A habilidade de garantir 100% de cobertura de código sem analisar o software estruturalmente.",
      "Sua utilidade quando os requisitos são escassos, desatualizados ou quando há forte pressão de tempo.",
      "A facilidade de replicação exata e idêntica por testadores diferentes sem variação de comportamento.",
      "O fato de não requerer nenhum tipo de conhecimento técnico prévio sobre o domínio do negócio."
    ],
    ans: 1
  },
  {
    q: "Considere a tabela de decisão exibida na imagem para a parte de um sistema de reservas de companhias aéreas online que permite aos passageiros frequentes resgatar pontos para viagens de recompensa.\n\nSuponha que haja duas partições de equivalência para a condição em que a conta/senha ok não é verdadeira: uma onde a conta é inválida e outra onde a conta é válida, mas a senha é inválida. Suponha que haja apenas uma partição correspondente a Conta/senha ok verdadeira.\nSe você quiser projetar testes para cobrir as partições de equivalência para Conta/senha ok e para esta parte da tabela de decisão, qual é o número mínimo de testes necessários?",
    image: ["src/imagens/Cap 04/q17.png", "src/imagens/Cap 04/q17a.png"],
    opts: [
      "3",
      "4",
      "5",
      "2"
    ],
    ans: 1
  },
  {
  q: "Dado o seguinte modelo de estado de um software carregador de bateria ilustrado na imagem.\n\nQual das seguintes sequências de transições proporciona o mais alto nível de cobertura de transição para o modelo?",
  image: "src/imagens/Cap 04/q18.png",
  opts: [
    "HIGH → CHARGE → LOW → CHARGE → TRICKLE → WAIT → TRICKLE → WAIT → TRICKLE",
    "WAIT → TRICKLE → CHARGE → HIGH → CHARGE → TRICKLE → WAIT → OFF → WAIT",
    "OFF → WAIT → OFF → WAIT → TRICKLE → CHARGE → HIGH → CHARGE → LOW",
    "WAIT → TRICKLE → WAIT → OFF → WAIT → TRICKLE → CHARGE → LOW → CHARGE"
  ],
  ans: 1
  },
  {
    q: "Qual das seguintes opções descreve a principal característica do teste baseado em casos de uso?",
    opts: [
      "Derivar testes baseados estritamente na estrutura interna e fluxo de controle de dados das classes Java.",
      "Projetar testes para validar interações lógicas entre atores (usuários ou sistemas) e o objeto de teste para alcançar um objetivo.",
      "Avaliar o desempenho de endpoints sob estresse de requisições concorrentes simultâneas.",
      "Validar os limites exatos das tabelas do banco de dados relacional."
    ],
    ans: 1
  },
  {
    q: "No formato Gherkin utilizado no desenvolvimento orientado por comportamento (BDD), o que representam as palavras-chave Dado, Quando e Então?",
    opts: [
      "Dado: ação do usuário; Quando: pós-condições lógicas; Então: pré-condições estruturais do ambiente.",
      "Dado: pré-condições do cenário; Quando: ação ou evento desencadeador; Então: resultado esperado ou pós-condições.",
      "Dado: defeito encontrado; Quando: log de erro do console; Então: correção aplicada pelo desenvolvedor.",
      "Dado: classe de equivalência inválida; Quando: valor limite; Então: mensagem de exceção do sistema."
    ],
    ans: 1
  },
  {
    q: "A análise de valor limite clássica de 2 valores para um campo de texto que aceita uma senha de 8 a 16 caracteres deve testar quais comprimentos?",
    opts: [
      "7, 8, 16 e 17 caracteres.",
      "8, 9, 15 e 16 caracteres.",
      "0, 8, 16 e 32 caracteres.",
      "7, 9, 15 e 17 caracteres."
    ],
    ans: 0
  },
  {
    q: "Se um caso de teste cobre uma partição de equivalência inválida para um campo de entrada numérico, o que o testador deve garantir ao projetar as outras entradas lógicas desse caso de teste?",
    opts: [
      "Que todas as outras entradas também sejam inválidas para testar o tratamento massivo de erros.",
      "Que todas as outras entradas sejam válidas, garantindo que a falha observada seja causada estritamente pela entrada inválida sob teste.",
      "Que as outras entradas sejam deixadas em branco ou nulas para acelerar a execução do roteiro.",
      "Que a cobertura estrutural de código seja medida automaticamente em tempo real."
    ],
    ans: 1
  },
  {
    q: "O que diferencia o teste de caixa-branca do teste de caixa-preta?",
    opts: [
      "O teste de caixa-branca foca nos requisitos, enquanto o teste de caixa-preta foca no design da interface.",
      "O teste de caixa-branca baseia-se na análise da estrutura interna, código ou arquitetura do sistema, enquanto o de caixa-preta baseia-se na análise da especificação funcional.",
      "O teste de caixa-branca é executado exclusivamente por usuários finais, e o de caixa-preta por analistas de qualidade certificados.",
      "O teste de caixa-branca não gera métricas de cobertura, enquanto o teste de caixa-preta gera logs complexos de decisão."
    ],
    ans: 1
  },
  {
    q: "Qual técnica de teste baseada na experiência envolve o uso de sessões estruturadas limitadas pelo tempo, chamadas de charters de teste?",
    opts: [
      "Adivinhação de erro.",
      "Teste exploratório.",
      "Teste baseado em checklist.",
      "Mapeamento de tabela de decisão recursiva."
    ],
    ans: 1
  },
  {
    q: "Em relação à cobertura de ramificação e cobertura de declaração, qual das seguintes afirmações é estritamente VERDADEIRA?",
    opts: [
      "100% de cobertura de declaração garante automaticamente 100% de cobertura de ramificação.",
      "100% de cobertura de ramificação garante automaticamente 100% de cobertura de declaração.",
      "As duas métricas são totalmente independentes e uma nunca apoia ou subsume a outra lintermente.",
      "A cobertura de declaração é sempre mais difícil de ser alcançada do que a cobertura de ramificação."
    ],
    ans: 1
  },
  {
    q: "No desenvolvimento orientado por testes de aceitação (ATDD), os testes são criados:",
    opts: [
      "Após a codificação completa do sistema estar estabilizada no ambiente de homologação final.",
      "Antes do código correspondente ser escrito, baseando-se na colaboração para detalhar os critérios de aceitação.",
      "Exclusivamente por ferramentas de inteligência artificial sem intervenção humana baseada em requisitos.",
      "Durante a fase de testes de estresse e desempenho de carga na infraestrutura."
    ],
    ans: 1
  },
  {
    q: "Um campo de entrada aceita um código de desconto composto por um único caractere alfabético maiúsculo (A-Z). Usando a análise de valor limite de 2 valores, quais caracteres/valores lógicos devem ser validados na fronteira externa direta?",
    opts: [
      "A, B, Y, Z.",
      "A, Z e os caracteres imediatamente adjacentes fora do intervalo válido (como @ e [ ).",
      "Qualquer sequência contendo de 1 a 26 caracteres mistos.",
      "Apenas strings vazias ou nulas."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve um estado inválido no teste de transição de estado?",
    opts: [
      "Um estado que não possui transições de saída lógicas de sucesso estruturadas.",
      "Uma tentativa de disparar um evento que não é permitido a partir do estado atual do sistema.",
      "Um estado em que o sistema trava devido a uma falha crítica de falta de memória (Out Of Memory).",
      "Um estado intermediário temporário usado apenas para fins de depuração de código logístico."
    ],
    ans: 1
  },
  {
    q: "No teste baseado em casos de uso, os cenários que descrevem desvios do comportamento padrão que ainda assim levam ao objetivo do ator são chamados de:",
    opts: [
      "Fluxos básicos ou principais.",
      "Fluxos alternativos.",
      "Fluxos de exceção.",
      "Partições de equivalência inválidas."
    ],
    ans: 1
  },
  {
    q: "O principal motivo para medir a cobertura de testes é:",
    opts: [
      "Garantir a ausência total de defeitos em qualquer cenário remanescente do código.",
      "Fornecer um indicador quantitativo da extensão em que os itens de cobertura foram exercitados pelos testes.",
      "Medir a produtividade diária individual de cada desenvolvedor do time de engenharia.",
      "Estimar automaticamente o custo financeiro total de cada rodada de regressão automatizada."
    ],
    ans: 1
  },
  {
    q: "Considere o modelo de transição de estados composto por 3 estados e 4 transições lógicas exibido na imagem do enunciado.\n\nVocê está projetando casos de teste com base neste diagrama de transição de estados. Qual é o número MÍNIMO de casos de teste necessários para alcançar uma cobertura de transições válidas de 100%, assumindo que todos os estados podem ser visitados em um único fluxo contínuo?",
    image: "scr/imagens/Cap 04/q31.png",
    opts: [
      "3",
      "1",
      "5",
      "6"
    ],
    ans: 1
  },
  {
    q: "Analise atentamente o fragmento de código de um componente de software estrutural apresentado na imagem correspondente.\n\nComo o teste de caixa branca pode ser útil para apoiar o teste de caixa preta?",
    image: "src/imagens/Cap 04/q32.png",
    opts: [
      "As medidas de cobertura de caixa branca podem ajudar os testadores a avaliar os testes de caixa preta em termos da cobertura de código alcançada por esses testes de caixa preta.",
      "A análise de cobertura de caixa branca pode ajudar os testadores a identificar fragmentos inacessíveis do código-fonte de forma visual na interface gráfica.",
      "O teste de ramificação subsume técnicas de teste de caixa preta, então alcançar cobertura de ramificação completa garante alcançar cobertura completa de qualquer técnica de caixa preta.",
      "As técnicas de teste de caixa branca podem fornecer itens de cobertura de negócio diretamente para técnicas de caixa preta."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes opções descreve MELHOR a principal diferença entre técnicas de teste caixa-preta e caixa-branca?",
    opts: [
      "As técnicas caixa-preta são técnicas dinâmicas, enquanto as técnicas caixa-branca são estáticas.",
      "As técnicas caixa-preta baseiam-se na estrutura do item de teste, enquanto as técnicas caixa-branca baseiam-se nos modelos de requisitos lógicos estruturados.",
      "As técnicas caixa-preta baseiam-se nos requisitos lógicos estruturados, enquanto as técnicas caixa-branca baseiam-se na estrutura interna do item de teste.",
      "As técnicas caixa-preta são adequadas para testes de sistema, enquanto as técnicas caixa-branca são adequadas apenas para testes de aceitação do usuário."
    ],
    ans: 2
  },
  {
    q: "Qual das seguintes técnicas de teste NÃO é uma técnica de teste baseada na especificação (caixa-preta)?",
    opts: [
      "Partição de equivalência.",
      "Tabela de decisão.",
      "Teste de transição de estado.",
      "Teste de ramificação."
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes opções descreve a cobertura de declaração (instrução)?",
    opts: [
      "A proporção de instruções executáveis exercitadas por casos de teste em relação ao número total de instruções executáveis no item de teste.",
      "A proporção de caminhos lógicos exercitados por casos de teste em relação ao número total de caminhos lógicos no item de teste.",
      "A proporção de requisitos de negócios exercitados por casos de teste em relação ao número total de requisitos de negócios no item de teste.",
      "A proporção de funções do sistema exercitadas por casos de teste em relação ao número total de funções do sistema no item de teste."
    ],
    ans: 0
  },
  {
    q: "Analise o diagrama de controle de fluxo de um pequeno algoritmo exibido na imagem em anexo.\n\nSeja a métrica de cobertura de ramificação definida em engenharia de software estrutural. O que representa o dividendo e o divisor nessa fórmula de cobertura?",
    image: ["src/imagens/Cap 04/q36.png","src/imagens/Cap 04/q36a.png"],
    opts: [
      "X = número de ramificações exercidas pelos casos de teste; Y = número total de ramificações no código.",
      "X = número de declarações executadas; Y = número total de declarações.",
      "X = número de caminhos testados; Y = número total de caminhos lógicos.",
      "X = número de defeitos encontrados; Y = número de defeitos corrigidos."
    ],
    ans: 0
  },
  {
    q: "Considere a tabela de decisão de entrada limitada estruturada para um sistema de validação de cupons de desconto apresentada na imagem.\n\nEm uma tabela de decisão de entrada limitada, o que representa cada coluna da tabela?",
    image: "src/imagens/Cap 04/q37.png",
    opts: [
      "Uma ação isolada do sistema.",
      "Uma regra de decisão única que mapeia uma combinação de condições e suas respectivas ações.",
      "Um caso de teste estrutural de caixa-branca.",
      "Uma linha de comando do código de programação."
    ],
    ans: 1
  },
  {
    q: "Considere o diagrama de blocos lógicos estruturais de desvio em um componente de software exibido na imagem.\n\nNo contexto de testes estruturais (caixa-branca), o termo 'ramificação' (branch) refere-se a qual elemento lógico do programa?",
    image: "src/imagens/Cap 04/q38.png",
    opts: [
      "Uma linha de comentário explicativa escrita pelo desenvolvedor.",
      "Um ponto de decisão no código que direciona o fluxo de controle para um entre dois ou mais resultados possíveis.",
      "Um arquivo de configuração externo do servidor web.",
      "Uma chamada de API externa em formato JSON."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes alternativas descreve a principal característica das técnicas de teste baseadas na experiência?",
    opts: [
      "Os casos de teste são derivados com base na análise da estrutura do código-fonte ou da arquitetura do sistema.",
      "Os casos de teste são derivados com base no conhecimento e na intuição do testador sobre possíveis falhas, erros e defeitos baseados no histórico passado.",
      "Os casos de teste são gerados automaticamente a partir de modelos formais de requisitos lógicos estruturados.",
      "Os casos de teste são baseados estritamente nas regras e fluxogramas de decisão definidos pelos gerentes de produto."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes técnicas de teste é baseada no conhecimento do testador sobre defeitos comuns e falhas típicas?",
    opts: [
      "Partição de equivalência.",
      "Adivinhação de erro.",
      "Teste de transição de estado.",
      "Teste de declaração."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve MELHOR o teste exploratório?",
    opts: [
      "Uma técnica de teste em que o testador executa casos de teste pré-planejados com base em checklists formais de alto nível.",
      "Uma abordagem de teste informal em que o testador projeta e executa dinamicamente testes com base em seu conhecimento, exploração do item de teste e resultados de testes anteriores.",
      "Uma técnica de teste automatizada que varre o sistema em busca de vulnerabilidades lógicas de segurança interna.",
      "Uma abordagem de teste caixa-branca na qual os caminhos do código são explorados matematicamente por meio de ferramentas externas."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções NÃO é um elemento típico de um caso de teste?",
    opts: [
      "Um conjunto de valores de entrada lógicos estruturados.",
      "Pré-condições operacionais do ambiente.",
      "O resultado esperado após a execução do teste.",
      "O código-fonte interno do componente sendo avaliado."
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes opções descreve um objetivo principal do teste baseado em checklist?",
    opts: [
      "Garantir a cobertura completa de todas as instruções executáveis do código-fonte do componente sob teste.",
      "Usar uma lista de itens de alto nível a serem anotados, verificados ou lembrados para fornecer consistência na cobertura do teste.",
      "Gerar automaticamente scripts de testes lógicos estruturados baseados no modelo de dados relacionais.",
      "Permitir o cálculo preciso da densidade de defeitos remanescentes por linha de código funcional."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve uma técnica de teste baseada na colaboração?",
    opts: [
      "Teste baseado em casos de uso executado isoladamente pela equipe de garantia de qualidade (QA).",
      "Desenvolvimento Orientado por Testes de Aceitação (ATDD), onde os testes são criados em conjunto por representantes de negócios, desenvolvedores e testadores.",
      "Teste de ramificação estrutural revisado em pares durante o ciclo de integração contínua (CI).",
      "Teste exploratório cronometrado conduzido em equipe em um laboratório fechado."
    ],
    ans: 1
  },
  {
    q: "No contexto do desenvolvimento orientado por comportamento (BDD), qual formato estruturado é comumente usado para escrever cenários de teste com base em critérios de aceitação?",
    opts: [
      "XML com tags customizadas de causa e efeito.",
      "Matrizes de transição booleanas de três valores lógicos.",
      "O formato Gherkin usando as palavras-chave Dado, Quando, Então.",
      "Código JavaScript puro estruturado com blocos Describe e It."
    ],
    ans: 2
  },
  {
    q: "Qual das seguintes alternativas descreve a partição de equivalência?",
    opts: [
      "Uma técnica de teste baseada na experiência onde o testador agrupa erros semelhantes cometidos por desenvolvedores juniores.",
      "Uma técnica de teste caixa-preta aplicável quando os requisitos lógicos estruturados são divididos em intervalos contínuos de valores discretos ordenados.",
      "Uma técnica de teste de caixa-preta aplicável quando o domínio de entrada ou saída é dividido em grupos que se espera que sejam processados da mesma forma.",
      "Uma técnica de teste caixa-branca que divide o código-fonte em blocos básicos lineares equivalentes."
    ],
    ans: 2
  },
  {
    q: "Qual das seguintes opções descreve a principal característica da análise de valor limite (AVL)?",
    opts: [
      "É uma técnica de teste caixa-branca focada nos limites estruturais de laços lógicos iterativos.",
      "É uma técnica de teste de caixa-preta aplicável quando as partições de equivalência contêm valores contínuos ou discretos ordenados, focando nos valores extremos dessas partições.",
      "É uma técnica de teste baseada na experiência que usa os limites da capacidade de memória do servidor para projetar cenários de estresse.",
      "É uma abordagem de teste automatizada que avalia os limites superiores e inferiores das strings JSON enviadas via API."
    ],
    ans: 1
  },
  {
  q: "A tabela de decisão a seguir contém as regras para determinar o risco de aterosclerose ilustrada na imagem.\n\nVocê projetou os casos de teste com os seguintes dados de entrada de teste:\n\nTC1: Colesterol = 125 mg/dl | Pressão sanguínea = 141 mmHg\nTC2: Colesterol = 200 mg/dl | Pressão sanguínea = 201 mmHg\nTC3: Colesterol = 124 mg/dl | Pressão sanguínea = 201 mmHg\nTC4: Colesterol = 109 mg/dl | Pressão sanguínea = 200 mmHg\nTC5: Colesterol = 201 mg/dl | Pressão sanguínea = 140 mmHg\n\nQual é a cobertura da tabela de decisão alcançada por esses casos de teste?",
  image: "src/imagens/Cap 04/q48.png",
  opts: [
    "40%",
    "100%",
    "60%",
    "80%"
  ],
  ans: 2
  },
  {
    q: "Considere a matriz de cobertura apresentada na imagem, que detalha a relação de execução entre múltiplos casos de teste e as ramificações lógicas encontradas no código do componente sob análise.\n\nSeja a métrica de cobertura de ramificação definida em engenharia de software estrutural. O que representa o dividendo e o divisor nessa fórmula de cobertura?",
    image: "src/imagens/Cap 04/q49.png",
    opts: [
      "X = número de ramificações exercidas pelos casos de teste; Y = número total de ramificações no código.",
      "X = número de declarações executadas; Y = número total de declarações.",
      "X = número de caminhos testados; Y = número total de caminhos lógicos.",
      "X = número de defeitos encontrados; Y = número de defeitos corrigidos."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes opções descreve a principal característica do teste baseado em casos de uso?",
    opts: [
      "Os casos de teste são projetados para exercer os caminhos lógicos de dados e interações descritos em cenários de casos de uso do sistema.",
      "Os casos de teste são baseados inteiramente nas funções internas de tratamento de exceções assíncronas do código do programa.",
      "Os casos de teste avaliam a usabilidade e o posicionamento visual dos elementos na interface gráfica com base em pesquisas com usuários reais.",
      "Os casos de teste são gerados automaticamente a partir de matrizes de complexidade ciclomática da arquitetura."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes alternativas apresenta uma desvantagem comum do teste baseado estritamente na experiência?",
    opts: [
      "Requer ferramentas de automação comerciais caras e complexas para medir a eficácia das execuções lógicas.",
      "Pode apresentar cobertura inconsistente e falta de reprodutibilidade, dependendo muito da habilidade, foco e conhecimento individual do testador.",
      "Não é adequado para ser executado em ambientes de metodologias ágeis ou ciclos rápidos de entrega.",
      "Exige uma análise exaustiva e demorada de toda a documentação de arquitetura técnica do código do componente."
    ],
    ans: 1
  },
  {
    q: "No contexto do teste exploratório, o que é um 'charter de teste'?",
    opts: [
      "Um documento formal de plano de teste que descreve o orçamento financeiro e cronograma detalhado de liberação do produto.",
      "Uma declaração de objetivos de teste e possíveis ideias de teste, usada para orientar uma sessão curta e focada de teste exploratório.",
      "Um script automatizado escrito em formato Gherkin pronto para ser executado em ferramentas de integração contínua.",
      "Um certificado formal emitido pela equipe de engenharia garantindo a qualidade final do código-fonte inspecionado."
    ],
    ans: 1
  },
  {
    q: "Uma empresa de comércio eletrônico oferece frete grátis para compras acima de R$ 150,00. Usando a análise de valor limite de 2 valores lógicos, quais valores exatos de compra devem ser testados para validar o limite operacional do cálculo do frete?",
    opts: [
      "R$ 149,99 e R$ 150,00",
      "R$ 150,00 e R$ 150,01",
      "R$ 0,00 e R$ 150,00",
      "R$ 100,00 e R$ 200,00"
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes opções descreve um item de cobertura para a técnica de partição de equivalência?",
    opts: [
      "Uma ramificação condicional individual avaliada no código-fonte.",
      "Uma classe de equivalência (ou partição) identificada a partir do domínio de dados de entrada ou saída do item sob análise.",
      "Um ponto de desvio lógico em uma estrutura condicional do tipo If-Else.",
      "Uma linha de instrução executável dentro do bloco de código principal."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve uma situação em que a técnica de tabela de decisão é ALTAMENTE recomendada?",
    opts: [
      "Quando o sistema possui poucos estados estruturados e depende de eventos temporais sequenciais discretos.",
      "Quando o comportamento do sistema é determinado por combinações complexas de múltiplas condições de entrada booleanas ou discretas.",
      "Quando o teste precisa focar exclusivamente na cobertura estrutural de todas as linhas do código do programa.",
      "Quando os requisitos de negócios são expressos puramente na forma de fluxos lógicos gráficos sequenciais sem desvios."
    ],
    ans: 1
  },
  {
    q: "O que mede a métrica de cobertura de declaração (instrução) no teste de caixa-branca?",
    opts: [
      "A porcentagem de pontos de decisão condicional testados com sucesso.",
      "A porcentagem de instruções executáveis no código-fonte que foram exercitadas pelo menos uma vez pelos casos de teste.",
      "A quantidade de defeitos lógicos encontrados em relação ao número total de linhas de código escritas.",
      "A proporção de módulos funcionais integrados com sucesso no servidor de produção."
    ],
    ans: 1
  },
  {
    q: "No contexto do teste de transição de estado, o que representa um 'estado'?",
    opts: [
      "Uma condição ou modo em que o sistema está aguardando um ou mais eventos, ou executando uma atividade contínua estruturada.",
      "Um evento de entrada enviado pelo usuário que altera o fluxo lógico operacional do programa.",
      "Uma mensagem de erro exibida na interface gráfica do usuário final após uma falha crítica.",
      "Uma linha de instrução executável que atualiza os valores das variáveis locais do sistema."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes alternativas descreve uma característica importante dos testes baseados em checklists?",
    opts: [
      "Os itens da lista de verificação devem ser detalhados no nível de scripts de teste passo a passo para evitar ambiguidades operacionais.",
      "Eles fornecem uma estrutura de alto nível para consistência, mas dão ao testador flexibilidade na forma como executam os testes lógicos reais.",
      "Eles exigem o uso obrigatório de ferramentas de automação comerciais integradas ao pipeline de CI/CD.",
      "Eles garantem matematicamente 100% de cobertura de ramificação em todas as decisões condicionais do código."
    ],
    ans: 1
  },
  {
  q: "Você está trabalhando em um projeto para desenvolver um sistema para analisar resultados de testes de direção. Você foi solicitado a projetar casos de teste com base na tabela de decisão ilustrada na imagem.\n\nQue dados de teste mostrarão que existem regras contraditórias na tabela de decisão?",
  image: "src/imagens/Cap 04/q59.png",
  opts: [
    "C1 = T, C2 = T, C3 = F",
    "C1 = T, C2 = F, C3 = T",
    "C1 = T, C2 = T, C3 = T e C1 = F, C2 = T, C3 = T",
    "C1 = F, C2 = F, C3 = F"
  ],
  ans: 3
  },
  {
  q: "Você está projetando casos de teste com base no seguinte diagrama de transição de estados ilustrado na imagem.\n\nQual é o número MÍNIMO de casos de teste necessários para alcançar uma cobertura de transições válidas de 100%?",
  image: "src/imagens/Cap 04/q60.png",
  opts: [
    "3",
    "2",
    "5",
    "6"
  ],
  ans: 0
 },
  {
  q: "Você deseja aplicar teste de ramificação ao código representado pelo seguinte grafo de fluxo de controle ilustrado na imagem.\n\nQuantos itens de cobertura você precisa testar?",
  image: "src/imagens/Cap 04/q61.png",
  opts: [
    "2",
    "4",
    "8",
    "7"
  ],
  ans: 2
 },
  {
    q: "Qual das seguintes opções descreve a cobertura de partição de equivalência?",
    opts: [
      "O número de classes de equivalência exercitadas pelos casos de teste dividido pelo número total de classes de equivalência identificadas.",
      "A proporção de linhas de código que pertencem a uma mesma partição de dados lógicos estruturados executados com sucesso.",
      "O número total de entradas válidas testadas dividido pelo número total de entradas inválidas rejeitadas pelo sistema.",
      "A quantidade de partições lógicas mapeadas automaticamente por analisadores estáticos integrados ao IDE."
    ],
    ans: 0
  },
  {
    q: "No contexto do teste de caixa-branca, se um conjunto de casos de teste alcançou 100% de cobertura de ramificação, o que se pode afirmar sobre a cobertura de declaração?",
    opts: [
      "A cobertura de declaração será de exatamente 50% devido à exclusão das ramificações falsas lógicas.",
      "A cobertura de declaração será necessariamente de 100%, pois cobrir todos os resultados de decisão garante exercitar todas as instruções internas.",
      "Não há relação direta e a cobertura de declaração pode ser de 0% dependendo da arquitetura do compilador.",
      "A cobertura de declaração será reduzida pela metade devido à redundância estrutural de caminhos lineares."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes alternativas apresenta uma atividade crítica realizada durante o teste baseado em casos de uso?",
    opts: [
      "Mapear todas as variáveis lógicas globais usadas na codificação interna das classes do microsserviço sob teste.",
      "Projetar casos de teste para validar o fluxo básico (cenário de sucesso) e os fluxos alternativos ou de exceção descritos no caso de uso.",
      "Garantir a conformidade visual exata de todos os botões da interface de acordo com os padrões CSS definidos.",
      "Executar testes de estresse de infraestrutura simulando milhares de requisições de rede assíncronas concorrentes."
    ],
    ans: 1
  },
  {
    q: "Qual das seguintes opções descreve a principal característica do teste baseado na experiência?",
    opts: [
      "Os casos de teste são derivados com base em métricas matemáticas de complexidade ciclomática do grafo lógicos estruturados.",
      "Eles complementam as técnicas de caixa-preta e caixa-branca usando o conhecimento do testador, histórico de falhas e intuição para encontrar defeitos ocultos.",
      "Eles substituem integralmente a necessidade de qualquer documentação técnica de requisitos de negócios ou planos de teste do sistema.",
      "Eles dependem exclusivamente de ferramentas automatizadas de engenharia reversa de código-fonte dinâmico."
    ],
    ans: 1
  },
  {
    q: "Você está usando o desenvolvimento orientado por testes de aceitação e projetando casos de teste com base na seguinte história do usuário: Como usuário Regular ou Especial, quero poder usar meu cartão eletrônico de acesso para acessar andares específicos. Critérios de aceitação: CA1: Usuários Regulares têm acesso aos andares 1 a 3. CA2: O andar 4 só é acessível para usuários Especiais. CA3: Usuários Especiais têm todos os direitos de acesso dos Usuários Regulares. Qual caso de teste é o MAIS razoável para testar o CA3?",
    opts: [
      "Verificar se um usuário Regular pode acessar os andares 1 e 3.",
      "Verificar se um usuário Regular não pode acessar o andar 4.",
      "Verificar se um usuário Especial pode acessar o andar 5.",
      "Verificar se um usuário Especial pode acessar os andares 1, 2 e 3."
    ],
    ans: 3
  }
];

// ============================================================
// QUESTÕES — CAPÍTULO 5
// ============================================================
const QUESTIONS_CAP5 = [

{
    q: "Qual das seguintes declarações MELHOR descreve como as tarefas são divididas entre o gerente de testes e o testador?",
    opts: [
      "O gerente de testes planeja as atividades de teste e escolhe os padrões a serem seguidos, enquanto o testador escolhe as ferramentas e estabelece as diretrizes de uso das ferramentas",
      "O gerente de testes planeja e organiza os testes e especifica os casos de teste, enquanto o testador executa os testes",
      "O gerente de testes planeja, monitora e controla as atividades de teste, enquanto o testador projeta os testes e decide sobre a liberação do objeto de teste",
      "O gerente de testes planeja, coordena e controla as atividades de teste, enquanto o testador automatiza os testes"
    ],
    ans: 3
  },
  {
    q: "Qual das seguintes métricas seria a mais útil para monitorar durante a execução do teste?",
    opts: [
      "Porcentagem de casos de teste executados",
      "Porcentagem de casos de teste ja criados e revisados",
      "Cobertura dos requisitos por código fonte",
      "Número médio de testadores envolvidos na execução do teste"
    ],
    ans: 0
  },
  {
    q: "Qual dos seguintes aspectos pode afetar e fazer parte do planejamento (inicial) do teste?",
    opts: [
      "Casos de uso",
      "Limitações orçamentárias",
      "Taxa de falha",
      "Diário de testes"
    ],
    ans: 1
  },
  {
    q: "Qual das listas a seguir contém apenas os critérios típicos de saída dos testes?",
    opts: [
      "Medidas de confiabilidade, cobertura de teste, grau de independência do testador e completude do produto",
      "Tempo para comercialização, defeitos restantes, qualificação do testador, disponibilidade de casos de uso testável, cobertura de teste e custo do teste",
      "Medidas de confiabilidade, cobertura do teste, cronograma e status sobre a correção de defeitos e riscos remanescentes",
      "Medidas de confiabilidade, cobertura de teste, custo do teste, disponibilidade do ambiente de teste, tempo de colocação no mercado e completude do produto"
    ],
    ans: 2
  },
  {
    q: "Qual dos itens a seguir NÃO esta incluído em um relatório resumido de teste?",
    opts: [
      "Avaliação da qualidade do objeto de teste",
      "Definição de critérios de aprovação/reprovação e objetivos dos testes",
      "Medições do progresso real em relação aos critérios de saída",
      "Desvios da abordagem de teste"
    ],
    ans: 1
  },
  {
    q: "O projeto desenvolve um termostato de aquecimento 'inteligente'. Os algoritmos de controle foram modelados como modelos Matlab/Simulink e executados no servidor. O gerente de teste definiu a seguinte estratégia/abordagem de teste no plano de teste: 1. O teste de aceite como teste baseado na experiência. 2. Algoritmos de controle verificados em relação ao padrão do regulamento de economia de energia. 3. Teste funcional do termostato como teste baseado em risco. 4. Testes de segurança de dados/comunicação via internet executados com especialistas externos. Que quatro tipos comuns de estratégias/abordagens de teste o gerente de testes implementou?",
    opts: [
      "analítico, conforme às normas, consultivo e reativo",
      "metódico, analítico, reativo e avesso à regressão",
      "baseada em modelos, metódica, analítica e consultiva",
      "regressão-aversão, consultiva, reativa e metódica"
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes é a característica de uma abordagem baseada em métricas para a estimativa de teste?",
    opts: [
      "Experiência geral coletada em entrevistas com gerentes de testes",
      "Estimativa de esforço para automação de testes acordada na equipe de teste",
      "Média dos cálculos coletados de especialistas empresariais",
      "Orçamento que foi utilizado por um projeto de teste anterior semelhante"
    ],
    ans: 3
  },
{
    q: "Como gerente de testes, você é responsável por testar:\nR1: Anomalias de processo\nR2: Sincronização\nR3: Aprovação\nR4: Solução de problemas\nR5: Dados financeiros\nR6: Dados do diagrama\nR7: Mudanças no perfil do usuário.\n\nNotação: A -> B significa que B depende de A.\nQual das seguintes opções estrutura o cronograma de execução de testes de acordo com as dependências de requisitos?",
    image: "src/imagens/Cap 05/q08.png", // Certifique-se de que o caminho da imagem está correto
    opts: [
      "R1 -> R3 -> R4 -> R7 -> R2 -> R5 -> R6",
      "R1 -> R3 -> R2 -> R4 -> R7 -> R5 -> R6",
      "R1 -> R2 -> R3 -> R4 -> R5 -> R6 -> R7",
      "R2 -> R1 -> R3 -> R5 -> R4 -> R6 -> R7"
    ],
    ans: 0 // A alternativa correta geralmente é a primeira (baseado nos simulados CTFL)
  },
  {
    q: "Você está testando uma máquina de café (categorias: Tamanho, Açúcar, Leite, Xarope). Você escreveu um relatório de defeito com: Título (Baixa temperatura), Resumo (Tempo longo e temperatura < 40°C), Resultado esperado (75°C), Grau de risco (Médio), Prioridade (Normal). Que informações valiosas foram omitidas no relatório de defeitos acima?",
    opts: [
      "Idéias para melhorar o caso teste",
      "Status do defeito",
      "Identificação da versão testada do software",
      "Os resultados reais dos testes"
    ],
    ans: 2
  },
  
  {
    q: "Qual dos seguintes explica MELHOR um benefício dos testes independentes?",
    opts: [
      "Quando as especificações contêm ambiguidades, são feitas suposições; um testador independente pode questionar essas suposições e a interpretação do desenvolvedor.",
      "O uso de uma equipe independente permite atribuir a responsabilidade pela qualidade final apenas à equipe de teste.",
      "A equipe de teste independente pode trabalhar totalmente separada dos desenvolvedores e restringir a comunicação apenas a relatórios de defeitos.",
      "Se a equipe é externa, ela não é influenciada pelas preocupações de entrega do gerenciamento e pela necessidade de cumprir prazos rígidos."
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes tarefas é MUITO MAIS EFICIENTE a ser executada pelo gerente de testes?",
    opts: [
      "Preparar e adquirir dados de teste.",
      "Analisar, rever e avaliar os requisitos, especificações e modelos de testabilidade.",
      "Escrever relatórios resumidos de testes com base nas informações coletadas durante os testes.",
      "Testes de revisão desenvolvidos por outros."
    ],
    ans: 2
  },
  {
    q: "Dados os seguintes critérios: (1) Orçamento de $37.000 gasto; (2) 96% dos testes do pacote de desenho executados; (3) Ambiente de teste montado e verificado; (4) Nenhum defeito crítico pendente; (5) Especificações do piloto automático revisadas; (6) Componente de imposto passou nos testes unitários. Qual a classificação correta entre critérios de entrada e saída?",
    opts: [
      "Critérios de entrada - 5, 6; Critérios de saída - 1, 2, 3, 4",
      "Critérios de entrada - 3, 5, 6; Critérios de saída - 1, 2, 4",
      "Critérios de entrada - 1, 3; Critérios de saída - 2, 4, 5, 6",
      "Critérios de entrada - 2, 3, 6; Critérios de saída - 1, 4, 5"
    ],
    ans: 1
  },
  {
    q: "Dadas as prioridades e dependências técnicas/lógicas, qual dos cronogramas de execução de testes considera melhor esses fatores?",
    image: "src/imagens/Cap 05/q13.png",
    opts: [
      "TC4 - TC1 - TC3 - TC5 - TC6 - TC2",
      "TC1 - TC3 - TC4 - TC6 - TC2 - TC5",
      "TC4 - TC3 - TC1 - TC2 - TC5 - TC6",
      "TC4 - TC2 - TC5 - TC1 - TC3 - TC6"
    ],
    ans: 2
  },
  {
    q: "Qual das seguintes afirmações sobre os métodos de estimativa de teste é CORRETA?",
    opts: [
      "Com a abordagem baseada em métricas, uma média dos custos de teste registrados de vários projetos passados é usada como orçamento de teste",
      "Com a abordagem baseada em métricas, a estimativa é baseada em medidas de teste do projeto e, portanto, esta estimativa só está disponível após o início dos testes",
      "Com a abordagem baseada em especialistas, os gerentes de testes responsáveis pelas diferentes atividades de teste preveem o esforço de teste esperado",
      "Com a abordagem baseada em especialistas, um grupo de usuários experientes identificados pelo cliente recomenda o orçamento de teste necessário"
    ],
    ans: 2
  },
  {
    q: "Qual dos seguintes define MELHOR o nível de risco?",
    opts: [
      "O nível de risco é a soma de todos os perigos potenciais de um sistema multiplicada pela soma de todas as perdas potenciais desse sistema",
      "O nível de risco é calculado somando as probabilidades de todas as situações problemáticas e os danos financeiros que delas resultam",
      "O nível de risco é estimado pela multiplicação da probabilidade de uma ameaça ao sistema pela chance de que a ameaça ocorra e resulte em dano financeiro",
      "O nível de risco é determinado por uma combinação da probabilidade de um evento indesejável e o impacto esperado desse evento"
    ],
    ans: 3
  },
  {
    q: "Qual dos seguintes é o mais provável de ser um exemplo de risco de PRODUTO?",
    opts: [
      "Os desenvolvedores podem não ter tempo para corrigir todos os defeitos encontrados pela equipe de teste",
      "As características de segurança esperadas podem não ser suportadas pela arquitetura do sistema",
      "Os casos de teste podem não oferecer cobertura total dos requisitos especificados",
      "O ambiente de teste de desempenho pode não estar pronto antes que o sistema esteja pronto para entrega"
    ],
    ans: 1
  },
  {
    q: "Qual dos seguintes é o MENOS provável que seja um exemplo de análise de risco do produto CORRETAMENTE influenciando os testes?",
    opts: [
      "Os testes constataram que a qualidade do módulo de rede é superior ao esperado, portanto não serão realizados testes adicionais nessa área",
      "O tempo necessário para carregar as páginas web é crucial para o sucesso do novo site, por isso foi empregado para este projeto um especialista em testes de desempenho",
      "Os usuários tiveram problemas com a interface de usuário do sistema anterior, de modo que testes de usabilidade adicionais estão planejados para o sistema de substituição",
      "O impacto potencial das falhas de segurança foi identificado como sendo particularmente alto, portanto os testes de segurança foram priorizados antes de algumas outras atividades de teste"
    ],
    ans: 0
  },
  {
  q: "Você está realizando testes de sistema de reserva de trens. Com base nos casos de teste realizados, você notou que o sistema ocasionalmente relata que não há trens disponíveis, embora este não devesse ser realmente o caso. Você forneceu aos desenvolvedores um resumo do defeito e a versão do sistema testado. Eles reconhecem a urgência do defeito e agora estão esperando que você forneça mais detalhes.\n\nAlém das informações já fornecidas, são fornecidas as seguintes informações adicionais:\n\n(1) Grau de impacto (gravidade) do defeito\n(2) Identificação do item de teste\n(3) Detalhes do ambiente de teste\n(4) Urgência/prioridade para consertar\n(5) Resultados reais\n(6) Referência à especificação do caso de teste\n\nQual destas informações é a mais útil para incluir no relatório de defeitos?",
  opts: [
    "2, 3, 4, 5",
    "3, 5, 6",
    "1, 2, 6",
    "1, 4, 5, 6"
  ],
  ans: 1
 },
  {
    q: "Você encontrou uma falha reprodutível em um banco online onde transferências de fundos desconectam o usuário por 3 a 5 minutos. Qual dos seguintes seria um bom resumo para o relatório de defeitos?",
    opts: [
      "O desempenho é lento e confiável sob carga",
      "Os desenvolvedores introduziram um grande defeito de disponibilidade que irá perturbar seriamente nossos clientes",
      "Os logs do servidor Web mostram erro 0x44AB27 ao executar o teste 07.005",
      "A típica transação de transferência de fundos resulta no término da sessão do cliente, com um atraso na disponibilidade quando se tenta reconectar"
    ],
    ans: 3
  },
  {
  q: "Você está testando um aplicativo móvel que permite aos usuários encontrar um restaurante próximo, com base no tipo de comida que eles querem comer. Considere a seguinte lista de casos de teste, prioridades (menor número é alta prioridade), e dependências, ilustrada na imagem.\n\nQual dos seguintes é um possível cronograma de execução de testes que considera tanto as prioridades quanto as dependências?",
  image: "src/imagens/Cap 05/q20.png",
  opts: [
    "01.001, 01.002, 01.003, 01.005, 01.004",
    "01.001, 01.002, 01.004, 01.005, 01.003",
    "01.001, 01.002, 01.004, 01.003, 01.005",
    "01.003, 01.004, 01.002, 01.001, 01.002"
  ],
  ans: 2
 },
  {
    q: "Qual dos seguintes é uma métrica de teste comum frequentemente usada para monitorar a preparação e execução do teste?",
    opts: [
      "Status do caso de teste",
      "Taxas de localização/correção de defeitos",
      "Preparação do ambiente de teste",
      "Custo estimado para encontrar o próximo defeito"
    ],
    ans: 0
  },
  {
    q: " Quais dos dois fatores a seguir podem ser usados para determinar o nível de risco?",
    opts: [
      "Probabilidade e impacto",
      "Dinâmico e reativo",
      "Testes e desenvolvimento",
      "Declaração e decisão"
    ],
    ans: 0
  },
  {
    q: "Em um projeto bancário, um processo rigoroso de correção de defeitos é usado. Defeitos confirmados como corrigidos no ambiente de desenvolvimento são reprovados nos testes no ambiente de teste. Qual aspecto é a parte mais provável do processo a ser verificada a seguir?",
    opts: [
      "Gerenciamento da configuração, que pode não estar mantendo a integridade do produto",
      "A atividade dos testadores, que podem estar confusos sobre o que testar",
      "A atividade dos desenvolvedores, que podem não estar testando adequadamente",
      "A atividade dos desenvolvedores, que podem não estar corrigindo defeitos corretamente"
    ],
    ans: 0
  },
  {
    q: "Para estimar o esforço de uma nova aplicação, você consulta a equipe (especialistas) e depois verifica com médias do setor (métricas). Qual declaração descreve com exatidão sua abordagem?",
    opts: [
      "Uma abordagem simultânea baseada em especialistas e em métricas",
      "Primeiramente o planning poker, verificado por velocidade",
      "Principalmente uma abordagem baseada em especialistas, complementada com uma baseada em métricas",
      "Principalmente uma abordagem baseada em métricas, complementada com uma baseada em especialistas"
    ],
    ans: 2
  },
  {
    q: "Durante um projeto Ágil, você encontra uma discrepância entre a interpretação do desenvolvedor e a do Product Owner sobre um critério de aceite. Qual benefício de independência de teste isso exemplifica?",
    opts: [
      "Assumir a responsabilidade primária pela qualidade",
      "Desafiar as suposições das partes interessadas",
      "Reconhecimento de diferentes tipos de falhas",
      "Remoção precoce de um defeito"
    ],
    ans: 1
  },
  {
    q: "Qual o lugar apropriado para documentar o processo de análise de risco do produto em um plano de teste Ágil?",
    opts: [
      "Gerenciamento da configuração do objeto de teste",
      "Abordagem de testes",
      "Métricas de testes",
      "Escopo dos testes"
    ],
    ans: 1
  },
  {
    q: "Classifique os resultados indesejáveis em riscos de projeto e de produto: (a) Totais incorretos; (b) Mudança nos critérios de aceite; (c) Usuários acham o teclado difícil; (d) Resposta lenta à entrada; (e) Testadores impedidos de relatar resultados.",
    opts: [
      "Riscos do produto: A, C, D; Riscos do projeto: B, E",
      "Riscos do produto: A, C; Riscos do projeto: B, D, E",
      "Riscos do produto: A, C, D, E; Riscos do projeto: B",
      "Riscos do produto: B, E; Riscos de projeto: A, C, D"
    ],
    ans: 0
  },
  {
    q: "Como os testadores agregam valor aos planejamentos de iteração e lançamento em projetos Ágeis?",
    opts: [
      "Garantem o lançamento de alta qualidade por meio de projeto antecipado.",
      "Participam da identificação e avaliação de riscos das histórias de usuários.",
      "Determinam a prioridade das histórias a serem desenvolvidas.",
      "Concentram-se apenas nos aspectos funcionais."
    ],
    ans: 1
  },
  {
    q: "Quais das opções a seguir são critérios de saída para testar um sistema?",
    opts: [
      "Prontidão do ambiente de teste e capacidade do testador de fazer login.",
      "Testes de regressão automatizados e densidade de defeitos estimada atingida.",
      "Requisitos traduzidos para Gherkin e testes de regressão automatizados.",
      "Prontidão do ambiente de teste e densidade de defeitos estimada atingida."
    ],
    ans: 1
  },
  {
  q: "Sua equipe usa a técnica de estimativa de três pontos para estimar o esforço de teste de um novo recurso de alto risco. Foram feitas as seguintes estimativas:\n\nEstimativa mais otimista: 2 homens/hora\nEstimativa mais provável: 11 homens/hora\nEstimativa mais pessimista: 14 homens/hora\n\nQual é a estimativa final?",
  opts: [
    "9 homens/hora",
    "10 homens/hora",
    "14 homens/hora",
    "11 homens/hora"
  ],
  ans: 1
  },
  {
  q: "Você está testando um aplicativo móvel que permite que os usuários encontrem um restaurante próximo com base no tipo de comida que desejam comer. Considere a seguinte lista de casos de teste, prioridades (ou seja, um número menor significa uma prioridade maior) e dependências ilustrada na imagem.\n\nQual dos seguintes casos de teste deve ser o terceiro a ser executado?",
  image: "src/imagens/Cap 05/q31.png",
  opts: [
    "TC 001",
    "TC 002",
    "TC 003",
    "TC 005"
  ],
  ans: 2
 },
 {
  q: "Considere as seguintes categorias de teste (1-4) e os quadrantes de teste ágil (A-D):\n\n(1) Teste de usabilidade\t(A) Q1: voltado para a tecnologia, apoiando o desenvolvimento\n(2) Teste de componentes\t(B) Q2: voltado para o negócio, apoiando o desenvolvimento\n(3) Teste funcional\t(C) Q3: voltado para o negócio, crítica do produto\n(4) Teste de confiabilidade\t(D) Q4: voltado para a tecnologia, crítica do produto\n\nComo as seguintes categorias de teste são mapeadas nos quadrantes de teste ágil?",
  opts: [
    "1C, 2A, 3B, 4D",
    "1D, 2B, 3C, 4A",
    "1C, 2B, 3D, 4A",
    "1D, 2A, 3C, 4B"
  ],
  ans: 0
 },
 {
  q: "Durante uma análise de risco, o seguinte risco foi identificado e avaliado:\n\nRisco: o tempo de resposta é muito longo para gerar um relatório\nProbabilidade do risco: média\nImpacto do risco: alto\nResposta ao risco: (1) uma equipe de teste independente realiza testes de performance durante o teste do sistema; (2) uma amostra selecionada de usuários finais realiza testes de aceite alfa e beta antes do lançamento.\n\nQue medida é proposta para ser tomada em resposta a esse risco analisado?",
  opts: [
    "Aceite de riscos",
    "Plano de contingência",
    "Transferência de risco",
    "Mitigação de riscos"
  ],
  ans: 3
},
  {
    q: "Qual ferramenta ágil mostra a quantidade de trabalho concluída e a quantidade total restante para uma iteração?",
    opts: ["Gráfico de Burndown", "Relatório de defeitos", "Relatório de conclusão do teste", "Critérios de aceite"],
    ans: 0
  },
  {
    q: "Ao atualizar um script de teste automatizado para um novo requisito, qual processo indica que você deve criar uma nova versão no repositório?",
    opts: ["Gerenciamento de Rastreabilidade", "Engenharia de Requisitos", "Gerenciamento de Configuração", "Teste de Manutenção"],
    ans: 2
  },
  {
    q: "Um relatório de defeito foi rejeitado por não ser reproduzível. Faltavam informações sobre o campo Nome com entrada '$ä' e contas de administrador. Que informações essenciais faltaram?",
    opts: ["Resultado esperado e real", "Referências e status do defeito", "Ambiente de teste e item de teste", "Prioridade e gravidade"],
    ans: 2
  },
  {
    q: "No pipeline DevOps (Desenvolvimento -> Controle de Versão/Merge -> Testes de Componente), qual é o MELHOR critério de entrada para o passo de subir/mesclar o código?",
    opts: ["Cobertura de declaração de 80%", "Controle de versão não relata conflitos", "Testes de componente prontos", "Análise estática não retorna avisos de alta gravidade"],
    ans: 3
  },
 {
  q: "Para estimar o esforço de teste para o novo projeto usando a estimativa baseada em proporções, precisamos calcular a proporção média entre o esforço de teste e o esforço de desenvolvimento, utilizando dados médios de ambos os esforços de desenvolvimento e teste de quatro projetos históricos similares ao novo projeto. A tabela mostra esses dados históricos ilustrados na imagem.\n\nO esforço de desenvolvimento estimado para o novo projeto é de $800.000. Qual é a sua estimativa para o esforço de teste neste projeto?",
  image: "src/imagens/Cap 05/q38.png",
  opts: [
    "$82,500",
    "$80,000",
    "$81,250",
    "$40,000"
  ],
  ans: 1
},
{
  q: "Você está testando uma aplicação web que permite aos usuários BUSCAR por produtos, VER detalhes do produto, ADICIONAR produtos a um carrinho de compras e fazer um PEDIDO. Você preparou os seguintes cinco casos de teste, que deseja executar de acordo com suas prioridades:\n\nTC1: BUSCAR produto A\tPrioridade: média\nTC2: VER detalhes do produto A\tPrioridade: baixa\nTC3: ADICIONAR produto B ao carrinho de compras\tPrioridade: média\nTC4: ADICIONAR produto C ao carrinho de compras\tPrioridade: alta\nTC5: fazer um PEDIDO\tPrioridade: alta\n\nVocê também identificou as seguintes dependências lógicas entre os casos de teste:\n\n- A funcionalidade de BUSCA deve ser testada antes que a funcionalidade de VISUALIZAÇÃO possa ser testada, pois os detalhes do produto dependem da funcionalidade de busca.\n- A funcionalidade de VISUALIZAÇÃO deve ser testada antes da funcionalidade de ADIÇÃO, pois adicionar produtos depende da disponibilidade de detalhes precisos do produto.\n- A funcionalidade de ADIÇÃO deve ser testada antes da funcionalidade de PEDIDO, pois fazer um pedido depende da disponibilidade de informações precisas do carrinho de compras.\n\nQual caso de teste deve ser executado como o quarto?",
  opts: [
    "TC4",
    "TC2",
    "TC1",
    "TC3"
  ],
  ans: 3
},
  {
    q: "Segundo o modelo de quadrantes de teste, qual opção se enquadra no Q1 (Orientado à tecnologia / Suporte à equipe)?",
    opts: ["Teste de usabilidade", "Teste funcional", "Teste de integração de componentes", "Teste de aceitação do usuário"],
    ans: 2
  },
  {
    q: "Relacione os riscos (1. Loop ineficaz; 2. Mudança de preferência do consumidor; 3. Inundação; 4. Relatórios imprecisos para idosos) com suas respectivas atividades de mitigação (A. Aceitação; B. Teste de desempenho; C. Análise de valor limite; D. Transferência de risco).",
    opts: [
      "1B, 2A, 3D, 4C",
      "1C, 2D, 3A, 4B",
      "1C, 2A, 3D, 4B",
      "1B, 2D, 3A, 4C"
    ],
    ans: 0
  },
  {
    q: "Qual das seguintes opções é considerada uma métrica de qualidade do produto?",
    opts: [
      "Cobertura de requisitos",
      "Percentual de detecção de defeitos",
      "Número de defeitos encontrados",
      "Tempo médio até a falha"
    ],
    ans: 3
  },
  {
    q: "Em uma equipe Ágil com cultura DevOps (América do Norte/Europa), qual das seguintes é a maneira MENOS eficaz de comunicar o progresso do teste ao cliente?",
    opts: [
      "Painéis de controle",
      "Cara-a-cara",
      "E-mail",
      "Videoconferência"
    ],
    ans: 1
  },
  {
    q: "Qual das opções descreve MELHOR como o gerenciamento de configuração (CM) apoia os testes?",
    opts: [
      "Tendo um registro das entradas, a ferramenta de CM executa os testes e calcula a cobertura",
      "Tendo o número da versão do caso de teste, a ferramenta de CM gera dados de teste automaticamente",
      "Tendo a data de compra da licença, a ferramenta de CM avisa sobre o fim da validade",
      "Tendo a versão do ambiente, a ferramenta de CM recupera as versões de bibliotecas, stubs e drivers usados"
    ],
    ans: 3
  },
  {
  q: "Você está testando uma função de classificação que recebe um conjunto de números como entrada e retorna o mesmo conjunto de números classificados em ordem crescente. O registro da execução do teste é ilustrado na imagem.\n\nQual das seguintes fornece a MELHOR descrição da falha que pode ser usada em um relatório de defeitos?",
  image: "src/imagens/Cap 05/q45.png",
  opts: [
    "TC3, TC4 e TC5 possuem defeitos (dados de entrada duplicados) e devem ser corrigidos.",
    "O sistema falha ao classificar números negativos. Referência: TC4, TC5.",
    "O sistema parece ignorar duplicatas durante a classificação. Referência: TC3, TC4, TC5.",
    "O sistema falha ao classificar várias sequências de números. Referência: TC3, TC4, TC5."
  ],
  ans: 2
  },
  {
    q: "Qual dos seguintes NÃO é um propósito de um plano de teste?",
    opts: [
      "Definir dados de teste e resultados esperados para testes de componente e integração.",
      "Definir como critério de saída que 'cobertura de 100% de instruções e ramificação deve ser alcançada'.",
      "Descrever quais campos o relatório de progresso do teste deve conter e seu formato.",
      "Explicar por que os testes de integração do sistema serão excluídos, embora a estratégia exija esse nível."
    ],
    ans: 0
  },
  {
    q: "No início de cada iteração, a equipe estima a quantidade de trabalho (em dias de trabalho) que precisará completar durante a iteração.  Seja E a quantidade estimada de trabalho para a iteração n, e seja A a quantidade real de trabalho feita na iteração n. A partir da terceira iteração, a equipe usa o seguinte modelo de estimação baseado em extrapolação:, O gráfico mostra a quantidade estimada e real de trabalho para as quatro primeiras iterações. Qual é a quantidade estimada de trabalho para a iteração #5?",
    image: ["src/imagens/Cap 05/q47.png", "src/imagens/Cap 05/q47a.png"],
    opts: [
      "10,5 dias de trabalho",
      "8,25 dias de trabalho",
      "6,5 dias de trabalho",
      "9,4 dias de trabalho"
    ],
    ans: 2
  },
{
  q: "Você está preparando um cronograma de execução de testes para executar sete casos de teste TC 1 a TC 7.\n\nA figura a seguir inclui as prioridades desses casos de teste (1 = prioridade mais alta, 3 = prioridade mais baixa).\n\nA figura também mostra as dependências entre os casos de teste usando setas. Por exemplo, a seta de TC 4 para TC 5 significa que TC 5 só pode ser executado se TC 4 foi previamente executado.\n\nQual caso de teste deve ser executado em sexto lugar?",
  image: "src/imagens/Cap 05/q48.png",
  opts: [
    "TC 3",
    "TC 5",
    "TC 6",
    "TC 2"
  ],
  ans: 0
},
  {
    q: "O que o modelo da pirâmide de testes mostra?",
    opts: [
      "Que os testes podem ter diferentes prioridades",
      "Que os testes podem ter granularidades diferentes",
      "Que os testes podem requerer diferentes critérios de cobertura",
      "Que os testes podem depender de outros testes"
    ],
    ans: 1
  },
  {
    q: "Qual é a relação correta entre os quadrantes de teste, os níveis de teste e os tipos de teste?",
    opts: [
      "Os quadrantes representam combinações específicas de níveis e tipos de teste no ciclo de vida.",
      "Os quadrantes descrevem o grau de granularidade dos tipos de teste em cada nível.",
      "Os quadrantes atribuem os tipos de teste que podem ser realizados aos níveis de teste.",
      "Os quadrantes agrupam níveis e tipos de teste com base em critérios como o direcionamento a partes interessadas."
    ],
    ans: 3
  },
  {
    q: "Qual das alternativas é um exemplo de como a análise de risco do produto influencia a minuciosidade e o escopo dos testes?",
    opts: [
      "O monitoramento contínuo permite identificar riscos emergentes o mais cedo possível.",
      "A identificação de riscos permite implementar mitigação e reduzir o nível de risco.",
      "O nível de risco avaliado ajuda a selecionar o rigor dos testes.",
      "A análise de riscos permite derivar itens de cobertura."
    ],
    ans: 2
  },
  {
    q: "Qual das atividades do processo de teste faz o MAIOR uso de relatórios de progresso de teste?",
    opts: [
      "Design de teste",
      "Conclusão do teste",
      "Análise de teste",
      "Planejamento de teste"
    ],
    ans: 1
  },
  {
    q: "Qual das opções NÃO é um exemplo de como o gerenciamento de configuração (CM) suporta o teste?",
    opts: [
      "Todos os commits no repositório são identificados de forma única e controlados por versão",
      "Todas as mudanças nos elementos do ambiente de teste são rastreadas",
      "Todas as especificações de requisitos são referenciadas de forma inequívoca nos planos de teste",
      "Todos os defeitos identificados têm um status atribuído"
    ],
    ans: 3
  },
  {
    q: "Em um relatório de defeito com Título, Passos, Resultados e Severidade, qual informação crucial está faltando para permitir a reprodução?",
    opts: [
      "Nome do testador e data do relatório",
      "Elementos do ambiente de teste e seus números de versão",
      "Identificação do objeto de teste",
      "Impacto nos interesses das partes interessadas"
    ],
    ans: 1
  }
  
];

// ============================================================
// QUESTÕES — CAPÍTULO 6
// ============================================================
const QUESTIONS_CAP6 = [
{
    q: "Qual dos seguintes é o MAIS provável que seja um benefício das ferramentas de execução de testes?",
    opts: ["É fácil projetar testes para testes de segurança", "É fácil criar testes de regressão", "É fácil manter o controle de versão dos ativos de teste", "É fácil executar testes de regressão"],
    ans: 3
  },
  {
    q: "Qual das seguintes ferramentas de teste é mais adequada para desenvolvedores do que para testadores?",
    opts: ["Ferramentas de teste de desempenho", "Ferramentas de gerenciamento de defeitos", "Ferramentas de gerenciamento de requisitos", "Ferramentas de gerenciamento da configuração"],
    ans: 1
  },
  {
    q: "Dadas as seguintes atividades de teste e ferramentas:\n(1) Medição de desempenho e análise dinâmica\n(2) Execução de testes e registro\n(3) Gerenciamento de testes e tesouras\n(4) Projeto do teste\n\n(A) Ferramentas de cobertura de necessidades\n(B) Ferramentas de análise dinâmica\n(C) Ferramentas de preparação de dados de teste\n(D) Ferramentas de gerenciamento de defeitos\n\nQual a melhor combinação?",
    opts: ["1-B, 2-A, 3-C, 4-D", "1-A, 2-B, 3-D, 4-C", "1-B, 2-A, 3-D, 4-C", "1-B, 2-C, 3-D, 4-A"],
    ans: 2
  },
  {
    q: "Qual dos seguintes é o mais provável de ser usado como motivo para usar um projeto piloto para introduzir uma ferramenta em uma organização?",
    opts: ["Avaliar como a ferramenta se ajusta aos processos e práticas existentes e determinar o que precisaria mudar", "Avaliar se a ferramenta fornece a funcionalidade necessária e não duplica ferramentas existentes", "Avaliar habilidades de automação e necessidades de treinamento/coaching", "Avaliar o fornecedor da ferramenta em termos de apoio e treinamento"],
    ans: 0
  },
  {
    q: "Você concluiu um projeto piloto para uma ferramenta de teste de regressão. Você adaptou o processo, padronizou a abordagem e produtos de trabalho. Qual objetivo é um projeto piloto típico que ainda deve ser realizado?",
    opts: ["Saiba mais detalhes sobre a ferramenta", "Veja como a ferramenta se ajustaria aos processos e práticas existentes", "Avaliar se os benefícios serão alcançados a um custo razoável", "Decidir sobre formas padrão de usar, gerenciar, armazenar e manter a ferramenta"],
    ans: 2
  },
  {
    q: "Qual das seguintes ferramentas é mais útil para relatar as métricas de teste?",
    opts: ["Ferramenta de análise estática", "Ferramenta de gerenciamento de testes", "Ferramentas de teste baseadas em modelos", "Ferramenta de cobertura"],
    ans: 1
  },
  {
    q: "Qual atividade de teste é suportada por uma ferramenta de preparação de dados?",
    opts: ["Análise e projeto de testes", "Monitoramento e controle de testes", "Implementação e execução de testes", "Conclusão do teste"],
    ans: 2
  },
  {
    q: "Qual item identifica corretamente um risco potencial de realizar a automação de testes?",
    opts: ["Esforços suficientes para manter o material de teste podem não ser alocados adequadamente", "Ele pode introduzir regressões desconhecidas na produção", "As ferramentas de teste e o material de teste associado podem não ser suficientemente confiáveis", "Pode reduzir o tempo alocado para testes manuais"],
    ans: 0
  },
  {
    q: "Dada às seguintes descrições:\n1. Suporte ao rastreamento de fluxo de trabalho\n2. Facilitar a comunicação\n3. Máquinas virtuais\n4. Suporte a revisões\n\nE as categorias:\nA. Ferramentas de teste estático\nB. Ferramentas que suportam escalabilidade e padronização de implantação\nC. Ferramentas DevOps\nD. Ferramentas de colaboração\n\nQual a melhor combinação?",
    opts: ["1D, 2C, 3A, 4B", "1A, 2B, 3C, 4D", "1B, 2D, 3C, 4A", "1C, 2D, 3B, 4A"],
    ans: 3
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um benefício da automação de testes?",
    opts: ["Compartilha a responsabilidade pelos testes com o fornecedor da ferramenta", "Fornece medidas de cobertura que são muito complicadas para os humanos derivarem", "Remove a necessidade de pensamento crítico ao analisar os resultados dos testes", "Gera casos de teste a partir de uma análise do código do programa"],
    ans: 1
  },
  {
    q: "Ferramentas de qual das seguintes categorias ajudam na organização de casos de teste, defeitos detectados e gerenciamento de configuração?",
    opts: ["Ferramentas de execução de teste e cobertura", "Ferramentas de design e implementação de teste", "Ferramentas de gerenciamento de defeitos", "Ferramentas de gerenciamento de teste"],
    ans: 3
  },
  {
    q: "Qual dos seguintes é MAIS provável de ser um benefício da automação de testes?",
    opts: ["A capacidade de gerar casos de teste sem acesso à base de teste", "O aumento da cobertura por meio de avaliação mais objetiva", "O aumento do tempo de execução do teste com maior capacidade de processamento", "A prevenção de erros humanos por meio de maior consistência e repetibilidade"],
    ans: 3
  }

];





// ============================================================
// MAPA DE MÓDULOS — usado pelo script.js
// ============================================================
const QUESTIONS_BY_MODULE = {
  cap1: QUESTIONS_CAP1,
  cap2: QUESTIONS_CAP2,
  cap3: QUESTIONS_CAP3,
  cap4: QUESTIONS_CAP4,
  cap5: QUESTIONS_CAP5,
  cap6: QUESTIONS_CAP6
};
