# 📋 CTFL 4.0 — Simulado Interativo

Simulado interativo para estudo e preparação para a certificação **ISTQB CTFL 4.0** (Certified Tester Foundation Level).

---

## ✨ Funcionalidades

- 📚 **Estudo por módulo** — 6 capítulos do syllabus CTFL 4.0
- 🏆 **Prova oficial simulada** — todas as questões com cronômetro de 60 minutos
- ✅ **Feedback imediato** — acertos e erros destacados após cada resposta
- 🔁 **Revisão de erros** — veja exatamente onde errou e qual era a resposta correta
- 📊 **Histórico de tentativas** — acompanhe sua evolução ao longo do tempo
- 💾 **Persistência local** — histórico salvo no navegador via localStorage

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

🔗 **[seu-usuario.github.io/nome-do-repositorio](https://seu-usuario.github.io/nome-do-repositorio)**

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