// ============================================================
// DADOS E ESTADO
// ============================================================

const MODULES = [
  { id: 'cap1', label: 'Capítulo 1', title: 'Fundamentos do Teste', desc: 'Objetivos, princípios, processo e psicologia do teste.' },
  { id: 'cap2', label: 'Capítulo 2', title: 'Testes no SDLC', desc: 'Modelos de desenvolvimento, níveis e tipos de teste.' },
  { id: 'cap3', label: 'Capítulo 3', title: 'Teste Estático', desc: 'Revisões, análise estática e processo de revisão.' },
  { id: 'cap4', label: 'Capítulo 4', title: 'Técnicas de Teste', desc: 'Caixa-preta, caixa-branca e técnicas baseadas em experiência.' },
  { id: 'cap5', label: 'Capítulo 5', title: 'Gerenciamento de Teste', desc: 'Organização, planejamento, risco e monitoramento.' },
  { id: 'cap6', label: 'Capítulo 6', title: 'Ferramentas de Teste', desc: 'Suporte a testes, automação e seleção de ferramentas.' }
];
const nomeModulo = {
  cap1: 'Fundamentos do Teste',
  cap2: 'Testes no SDLC',
  cap3: 'Teste Estático',
  cap4: 'Técnicas de Teste',
  cap5: 'Gerenciamento de Teste',
  cap6: 'Ferramentas de Teste'
};

let activeModule = null;
let examMode = false;
let timerInterval = null;
let remainingTime = 3600;

let questions = [];
let order = [];
let current = 0;
let correct = 0;
let wrong = 0;
let skipped = 0;
let mistakes = [];

let answered = false;
let selectedOpts = [];

// ============================================================
// UTILITÁRIOS
// ============================================================

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function correctArr(q) {
  return Array.isArray(q.ans) ? q.ans : [q.ans];
}

function show(screen) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const target = document.getElementById(`screen-${screen}`);
  if (target) {
    target.style.display = '';
    requestAnimationFrame(() => target.classList.add('active'));
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  const timerEl = document.getElementById('timer');
  if (timerEl) timerEl.textContent = '60:00';
}

// ============================================================
// CRONÔMETRO — só roda no modo prova
// ============================================================

function startTimer() {
  stopTimer();
  remainingTime = 3600;

  const timerEl = document.getElementById('timer');

  timerInterval = setInterval(() => {
    remainingTime--;

    const min = Math.floor(remainingTime / 60);
    const sec = remainingTime % 60;

    if (timerEl) {
      timerEl.textContent =
        `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    if (remainingTime <= 0) {
      stopTimer();
      alert('Tempo encerrado!');
      showResult();
    }
  }, 1000);
}

// ============================================================
// MÓDULOS
// ============================================================

function buildModules() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  grid.innerHTML = '';

  MODULES.forEach(m => {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div class="module-chip">${m.label}</div>
      <div class="module-title">${m.title}</div>
      <div class="module-desc">${m.desc}</div>
    `;

    card.onclick = () => {
      activeModule = m.id;
      examMode = false;
      startQuiz();
    };

    grid.appendChild(card);
  });
}

// ============================================================
// INICIAR QUIZ
// ============================================================

function startQuiz() {
  if (typeof QUESTIONS_BY_MODULE === 'undefined') {
    alert('Erro: QUESTIONS_BY_MODULE não encontrado. Verifique a ordem dos scripts.');
    return;
  }

  if (examMode) {

  questions = [

    ...shuffle(QUESTIONS_BY_MODULE.cap1).slice(0, 11),

    ...shuffle(QUESTIONS_BY_MODULE.cap2).slice(0, 8),

    ...shuffle(QUESTIONS_BY_MODULE.cap3).slice(0, 4),

    ...shuffle(QUESTIONS_BY_MODULE.cap4).slice(0, 13),

    ...shuffle(QUESTIONS_BY_MODULE.cap5).slice(0, 3),

    ...shuffle(QUESTIONS_BY_MODULE.cap6).slice(0, 1)

  ];

  questions = shuffle(questions);

} else {

  questions = QUESTIONS_BY_MODULE[activeModule];

}

  if (!questions || questions.length === 0) {
    alert('Nenhuma questão encontrada para este módulo.');
    return;
  }

  order = shuffle([...Array(questions.length).keys()]);

  current = 0;
  correct = 0;
  wrong = 0;
  skipped = 0;
  mistakes = [];

  // Badge: nome do módulo ou prova oficial
  const badge = document.getElementById('quiz-badge');
  if (badge) {
    if (examMode) {
      badge.textContent = 'Prova Oficial';
    } else {
      const mod = MODULES.find(m => m.id === activeModule);
      badge.textContent = mod ? `${mod.label} — ${mod.title}` : 'CTFL 4.0';
    }
  }

  // Timer: só inicia no modo prova; no simulado mostra traço
  const timerEl = document.getElementById('timer');
  if (examMode) {
    startTimer();
  } else {
    resetTimer();
    if (timerEl) timerEl.textContent = '—';
  }

  show('quiz');
  renderQ();
}

// ============================================================
// RENDER QUESTÃO
// ============================================================

function renderQ() {
  answered = false;
  selectedOpts = [];

  const q = questions[order[current]];

  updateStats();

  document.getElementById('q-meta-txt').textContent =
    `Questão ${current + 1} de ${questions.length}`;

  document.getElementById('q-text').textContent = q.q;

  const antiga = document.querySelector('.questoes-imagens-container');
  if (antiga) antiga.remove();

  if (q.image) {
    const box = document.createElement('div');
    box.className = 'questoes-imagens-container';
    const img = document.createElement('img');
    img.src = q.image.startsWith('src/') ? q.image : `src/${q.image}`;
    img.style.maxWidth = '100%';
    box.appendChild(img);
    document.getElementById('q-text').after(box);
  }

  const list = document.getElementById('options-list');
  list.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'opt';
    div.id = `o${i}`;
    div.innerHTML = `
      <div class="opt-letter">${String.fromCharCode(65 + i)}</div>
      <div class="opt-text">${opt}</div>
    `;
    div.onclick = () => pickOpt(i);
    list.appendChild(div);
  });

  const btn = document.getElementById('btn-confirm');
  btn.textContent = 'Confirmar';
  btn.disabled = true;
  btn.onclick = confirmA;

  document.getElementById('btn-skip').onclick = skipQ;
}

// ============================================================
// SELECIONAR RESPOSTA
// ============================================================

function pickOpt(i) {
  if (answered) return;

  const q = questions[order[current]];
  const multi = q.multi === true;
  const correctAnswers = correctArr(q);

  if (!multi) {
    selectedOpts = [i];
    q.opts.forEach((_, idx) => {
      document.getElementById(`o${idx}`).className =
        idx === i ? 'opt selected' : 'opt';
    });
  } else {
    const pos = selectedOpts.indexOf(i);
    if (pos >= 0) {
      selectedOpts.splice(pos, 1);
      document.getElementById(`o${i}`).className = 'opt';
    } else if (selectedOpts.length < correctAnswers.length) {
      selectedOpts.push(i);
      document.getElementById(`o${i}`).className = 'opt selected';
    }
  }

  document.getElementById('btn-confirm').disabled =
    multi
      ? selectedOpts.length !== correctAnswers.length
      : selectedOpts.length === 0;
}

// ============================================================
// CONFIRMAR
// ============================================================

function confirmA() {
  if (answered) return;

  answered = true;

  const q = questions[order[current]];
  const correctAnswers = correctArr(q);

  const ok =
    selectedOpts.length === correctAnswers.length &&
    selectedOpts.every(a => correctAnswers.includes(a));

  if (ok) {
    correct++;
  } else {
    wrong++;
    mistakes.push({
      question: q,
      yourOpts: [...selectedOpts],
      correctOpts: correctAnswers
    });
  }

  q.opts.forEach((_, idx) => {
    document.getElementById(`o${idx}`).className =
      'opt ' + (
        correctAnswers.includes(idx)
          ? 'correct'
          : selectedOpts.includes(idx)
            ? 'wrong'
            : ''
      );
  });

  updateStats();

  const btn = document.getElementById('btn-confirm');
  btn.textContent =
    current + 1 < questions.length ? 'Próxima →' : 'Ver resultado';
  btn.disabled = false;
  btn.onclick = nextQ;
}

// ============================================================
// NAVEGAÇÃO
// ============================================================

function skipQ() {
  skipped++;
  nextQ();
}

function nextQ() {
  current++;
  if (current >= questions.length) {
    showResult();
  } else {
    renderQ();
  }
}

// ============================================================
// ESTATÍSTICAS
// ============================================================

function updateStats() {
  document.getElementById('quiz-counter').textContent =
    `${current + 1} / ${questions.length}`;

  document.getElementById('progress-bar').style.width =
    `${Math.round(((current + 1) / questions.length) * 100)}%`;

  document.getElementById('stat-q').textContent = current + 1;
  document.getElementById('stat-c').textContent = correct;
  document.getElementById('stat-w').textContent = wrong;

  const totalRespondidas = correct + wrong;
  document.getElementById('stat-p').textContent =
    totalRespondidas
      ? `${Math.round((correct / totalRespondidas) * 100)}%`
      : '—';
}
// ============================================================
// HISTÓRICO
// ============================================================

function salvarHistorico(resultado) {

  const historico =
    JSON.parse(localStorage.getItem('ctflHistorico') || '[]');

  historico.unshift(resultado);

  if (historico.length > 20) {
    historico.length = 20;
  }

  localStorage.setItem(
    'ctflHistorico',
    JSON.stringify(historico)
  );

  atualizarPainelHistorico();
}

function atualizarPainelHistorico() {

  const historico =
    JSON.parse(localStorage.getItem('ctflHistorico') || '[]');

  const painel =
    document.getElementById('historico-box');

  if (!painel) return;

  if (historico.length === 0) {

    painel.innerHTML = `
      <div class="history-empty">
        Nenhuma tentativa realizada
      </div>
    `;

    return;
  }

  const melhor =
    Math.max(...historico.map(h => h.percentual));

  const ultima =
    historico[0];

  painel.innerHTML = `

<div class="history-panel">

  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
    <h3>📊 Histórico de Desempenho</h3>

    <button
      id="btn-clear-history"
      class="btn"
      style="padding:8px 12px;font-size:12px;">
      🗑 Limpar
    </button>
  </div>

  <div class="history-grid">

    <div class="history-card">
      <div class="history-value">${ultima.percentual}%</div>
      <div class="history-label">Último Resultado</div>
    </div>

    <div class="history-card">
      <div class="history-value">${melhor}%</div>
      <div class="history-label">Melhor Resultado</div>
    </div>

    <div class="history-card">
      <div class="history-value">${historico.length}</div>
      <div class="history-label">Tentativas</div>
    </div>

  </div>

  <div class="history-last-results">

    <h4>Últimas Tentativas</h4>

    ${historico.slice(0,5).map(h => `
      <div class="history-item">
        <span>${h.percentual}%</span>
        <span>${h.modo}</span>
        <span>
        ${h.acertos} acertos
        ${h.percentual >= 65 ? '✅' : '❌'}
        </span>
      </div>
    `).join('')}

  </div>

</div>

`;

document.getElementById('btn-clear-history').onclick = () => {

  if (!confirm('Deseja apagar todo o histórico?')) {
    return;
  }

  localStorage.removeItem('ctflHistorico');

  atualizarPainelHistorico();
};
}

// ============================================================
// RESULTADO
// ============================================================

function showResult() {
  stopTimer();

  const totalRespondidas = correct + wrong;
  const pct = totalRespondidas > 0
    ? Math.round((correct / totalRespondidas) * 100)
    : 0;

  document.getElementById('result-pct').textContent = `${pct}%`;

  document.getElementById('result-sub').textContent =
    `${correct} de ${totalRespondidas} respondidas · ${skipped} pulada${skipped !== 1 ? 's' : ''}`;

  document.getElementById('result-verdict').textContent =
    correct >= 26 ? '🎉 APROVADO' : '❌ REPROVADO';

  document.getElementById('rs-c').textContent = correct;
  document.getElementById('rs-w').textContent = wrong;
  document.getElementById('rs-s').textContent = skipped;

  // Salva no histórico
salvarHistorico({
  data: new Date().toLocaleString('pt-BR'),
  modo: examMode
  ? 'Prova Oficial'
  : nomeModulo[activeModule] || activeModule,
  acertos: correct,
  erros: wrong,
  puladas: skipped,
  percentual: pct
});
  show('result');
}

// ============================================================
// REVISÃO DOS ERROS
// ============================================================

function showReview() {
  const review = document.getElementById('review-list');
  review.innerHTML = '';

  if (!mistakes.length) {
    review.innerHTML = '<p style="color:var(--muted2);padding:1rem;">Nenhum erro encontrado 🎉</p>';
  } else {
    mistakes.forEach((m, i) => {
      const div = document.createElement('div');
      div.className = 'review-card';

      const optLines = m.question.opts.map((opt, idx) => {
        const isCorrect = m.correctOpts.includes(idx);
        const isYours   = m.yourOpts.includes(idx);
        const mark = isCorrect ? '✓' : isYours ? '✗' : ' ';
        const cls  = isCorrect ? 'review-opt-correct'
                   : isYours   ? 'review-opt-wrong' : '';
        return `<li class="${cls}">[${mark}] ${opt}</li>`;
      }).join('');

      div.innerHTML = `
        <h3>QUESTÃO ${i + 1}</h3>
        <p>${m.question.q}</p>
        <ul class="review-opts">${optLines}</ul>
      `;

      review.appendChild(div);
    });
  }

  show('review');
}

// ============================================================
// EVENTOS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildModules();

  // Simulado: pulsa os cards para indicar "escolha um módulo"
  document.getElementById('mode-simulado')?.addEventListener('click', () => {
    document.querySelectorAll('.module-card').forEach(c => {
      c.style.borderColor = 'var(--accent)';
      setTimeout(() => c.style.borderColor = '', 1200);
    });
  });

  // Prova oficial: todas as questões + timer
  document.getElementById('mode-prova')?.addEventListener('click', () => {
    examMode = true;
    startQuiz();
  });

  document.getElementById('btn-review')?.addEventListener('click', showReview);

  document.getElementById('btn-back')?.addEventListener('click', () => {
    show('result');
  });

  // Voltar à home: para o timer e reseta tudo
  document.getElementById('btn-voltar-home')?.addEventListener('click', () => {
    if (confirm('Deseja sair? O progresso será perdido.')) {
      stopTimer();
      resetTimer();
      examMode = false;
      activeModule = null;
      show('home');
    }
  });

  document.getElementById('btn-change-module')?.addEventListener('click', () => {
    stopTimer();
    resetTimer();
    examMode = false;
    activeModule = null;
    show('home');
  });

  document.getElementById('btn-restart')?.addEventListener('click', () => {
    startQuiz();
  });
});
