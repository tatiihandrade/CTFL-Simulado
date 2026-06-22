# 📋 CTFL 4.0 — Simulado Interativo

Simulado interativo desenvolvido para auxiliar candidatos na preparação para a certificação ISTQB CTFL 4.0, oferecendo estudo por capítulos, provas simuladas, controle de tempo e acompanhamento de desempenho.

---

🚀 Estude por capítulos ou teste seus conhecimentos com uma prova simulada completa baseada no ISTQB CTFL 4.0.

---

## ✨ Funcionalidades

- 📚 Estudo por módulo — 6 capítulos do syllabus CTFL 4.0
- 📝 Prova simulada — questões embaralhadas em formato semelhante ao exame oficial
- ⏱️ Cronômetro de 60 minutos na prova simulada
- ✅ Feedback imediato — acertos e erros destacados após cada resposta
- 🔁 Revisão de erros — veja exatamente onde errou e qual era a resposta correta
- 📊 Histórico de tentativas — acompanhe sua evolução ao longo do tempo
- 🏆 Resultado final com percentual de acertos e status de aprovação
- 💾 Persistência local — histórico salvo no navegador via localStorage

---

## ⭐ Destaques

- Interface moderna e responsiva
- Questões organizadas por capítulo do syllabus CTFL 4.0
- Simulação completa do exame oficial
- Controle de tempo com cronômetro
- Histórico de desempenho salvo localmente
- Desenvolvido com JavaScript puro (Vanilla JS)

---

## 🗂️ Estrutura do projeto

```
/
├── index.html          # Estrutura da aplicação
└── src/
    ├── style.css       # Estilos e tema dark
    ├── script.js       # Lógica do quiz
    └── questions.js    # Banco de questões por capítulo
```

---

## 🚀 Como usar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Abra o arquivo `index.html` diretamente no navegador — nenhuma instalação necessária.

---

## 🌐 Acesso online

O projeto está hospedado via **GitHub Pages**:

🔗 **https://tatiihandrade.github.io/CTFL-Simulado/**

> Substitua o link acima pelo seu após ativar o GitHub Pages.

---

## 📖 Módulos disponíveis

| Módulo | Conteúdo |
|--------|----------|
| Capítulo 1 | Fundamentos do Teste — objetivos, princípios, processo e psicologia |
| Capítulo 2 | Testes no SDLC — modelos de desenvolvimento, níveis e tipos de teste |
| Capítulo 3 | Teste Estático — revisões, análise estática e processo de revisão |
| Capítulo 4 | Técnicas de Teste — caixa-preta, caixa-branca e baseadas em experiência |
| Capítulo 5 | Gerenciamento de Teste — organização, planejamento, risco e monitoramento |
| Capítulo 6 | Ferramentas de Teste — suporte a testes, automação e seleção |
| 📝 Prova Simulada | Simulação do exame CTFL com cronômetro, pontuação e critério de aprovação |

---

## 🎯 Critério de aprovação

A nota mínima para aprovação no exame oficial é **65%**. O simulado usa o mesmo critério para indicar aprovado ou reprovado ao final de cada tentativa.

---

## 🛠️ Tecnologias

- HTML5 + CSS3 + JavaScript puro (sem frameworks)
- Google Fonts: [Sora](https://fonts.google.com/specimen/Sora) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- `localStorage` para persistência do histórico

---

## 📌 Como adicionar questões

Abra `src/questions.js` e adicione objetos no array do capítulo correspondente:

```js
// Questão de resposta única
{
  q: "Texto da pergunta aqui.",
  opts: ["Opção A", "Opção B", "Opção C", "Opção D"],
  ans: 0  // índice da resposta correta (0 = A, 1 = B...)
}

// Questão de múltipla escolha
{
  q: "Quais das opções abaixo são corretas?",
  opts: ["Opção A", "Opção B", "Opção C", "Opção D"],
  ans: [0, 2],  // array com os índices corretos
  multi: true
}
```

---

## 📄 Licença

Projeto de uso pessoal para fins de estudo. As questões são baseadas no syllabus público do [ISTQB](https://www.istqb.org/).
