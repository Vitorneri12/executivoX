const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuLinks = document.querySelectorAll(".nav-menu a, .header-cta, .btn");
const revealTargets = document.querySelectorAll(".reveal, .stagger");
const staggerGroups = document.querySelectorAll(".stagger");
const counters = document.querySelectorAll("[data-counter]");
const questionOptions = document.querySelectorAll(".question-option[data-question]");
const heroQuestionOptions = document.querySelectorAll("[data-hero-question]");
const executivePanel = document.querySelector(".executive-panel");
const heroCeoBubble = document.querySelector("[data-hero-ceo-bubble]");
const heroAiBubble = document.querySelector("[data-hero-ai-bubble]");
const heroCeoQuestion = document.querySelector("[data-hero-ceo-question]");
const heroAiAnswer = document.querySelector("[data-hero-ai-answer]");
const ceoQuestion = document.querySelector("#ceo-question");
const executivoxAnswer = document.querySelector("#executivox-answer");
const interactiveChat = document.querySelector(".conversation-section .chat-window");
const ceoBubble = document.querySelector(".conversation-section .user-message");
const aiBubble = document.querySelector(".conversation-section .ai-message");
const commandCenter = document.querySelector(".command-center");
const commandKpis = document.querySelectorAll("[data-command-metric]");
const commandLine = document.querySelector("[data-command-line]");
const commandPoints = document.querySelectorAll(".chart-point");
const commandChartTitle = document.querySelector("[data-command-chart-title]");
const commandChartStatus = document.querySelector("[data-command-chart-status]");
const commandInsightCard = document.querySelector("[data-command-insight-card]");
const commandInsightLabel = document.querySelector("[data-command-insight-label]");
const commandInsight = document.querySelector("[data-command-insight]");
const commandInsightStatus = document.querySelector("[data-command-insight-status]");
const commandRecommendation = document.querySelector("[data-command-recommendation]");
const commandImpact = document.querySelector("[data-command-impact]");
const commandOpportunities = document.querySelector("[data-command-opportunities]");
const commandAlerts = document.querySelector("[data-command-alerts]");
const opportunityCount = document.querySelector("[data-opportunity-count]");
const alertCount = document.querySelector("[data-alert-count]");
const chartTooltip = document.querySelector("[data-chart-tooltip]");
const commandAlertLevel = document.querySelector("[data-command-alert-level]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const executiveAnswers = {
  margin: {
    question: "Onde perdi margem",
    answer: "Pressão em logística, estoque e rentabilidade. Prioridade: frete e giro.",
  },
  cost: {
    question: "Qual custo está crescendo",
    answer: "Custos operacionais cresceram acima da receita. Prioridade: contratos, insumos e retrabalho.",
  },
  client: {
    question: "Qual cliente destrói lucro",
    answer: "Clientes de alto volume e baixa margem estão reduzindo rentabilidade. Prioridade: renegociar condições.",
  },
  action: {
    question: "O que corrigir agora",
    answer: "Comece por frete, estoque parado e clientes de baixa margem. São os pontos com maior impacto imediato.",
  },
  risk: {
    question: "Qual risco ninguém viu",
    answer: "A queda gradual de margem por unidade ainda não virou crise, mas já exige ação executiva.",
  },
};

const executivePanelData = {
  margin: {
    question: "Onde estou perdendo margem?",
    answer: "Identificamos três prioridades: logística, estoque parado e rentabilidade por cliente. Esses fatores pressionam sua margem operacional.",
  },
  unit: {
    question: "Qual área gera menos lucro?",
    answer: "A menor rentabilidade aparece onde frete, retrabalho e estoque parado se combinam. Prioridade: revisar a operação.",
  },
  week: {
    question: "O que devo corrigir esta semana?",
    answer: "Comece por frete, estoque parado e clientes de baixa margem. São os pontos com maior impacto imediato.",
  },
};

const commandMetricData = {
  revenue: {
    title: "Receita",
    status: "Oportunidade",
    insightLabel: "Maior oportunidade identificada",
    insight: "Expandir contas de alta margem",
    recommendation: "Ação recomendada: priorizar contas rentáveis",
    impact: "Impacto esperado: maior crescimento com menor custo de aquisição",
    alertLevel: { label: "Monitoramento", type: "monitor" },
    path: "M32 176 C116 134, 166 142, 232 104 S356 84, 430 110 S522 152, 608 72",
    points: [
      { x: 92, y: 156, label: "Entrada recorrente", value: "estável" },
      { x: 220, y: 104, label: "Expansão", value: "em alta" },
      { x: 346, y: 86, label: "Clientes premium", value: "crescendo" },
      { x: 480, y: 128, label: "Sazonalidade", value: "monitorar" },
      { x: 608, y: 72, label: "Receita", value: "sinal positivo" },
    ],
    opportunities: [
      { label: "Expansão comercial", progress: 0.74 },
      { label: "Mix de receita", progress: 0.58 },
      { label: "Clientes premium", progress: 0.64 },
    ],
    alerts: [
      { status: "crítico", type: "critical", label: "Pipeline concentrado" },
      { status: "atenção", type: "warning", label: "Receita recorrente" },
      { status: "monitoramento", type: "monitor", label: "Ticket médio" },
    ],
  },
  margin: {
    title: "Margem",
    status: "Alerta",
    insightLabel: "Maior risco identificado",
    insight: "Recuperar margem logística",
    recommendation: "Ação recomendada: revisar frete, giro e clientes de baixa margem",
    impact: "Impacto esperado: recuperação imediata de margem operacional",
    alertLevel: { label: "Crítico", type: "critical" },
    path: "M32 96 C116 118, 178 94, 250 138 S370 178, 444 150 S536 112, 608 142",
    points: [
      { x: 92, y: 112, label: "Margem inicial", value: "saudável" },
      { x: 220, y: 120, label: "Frete", value: "pressionando" },
      { x: 346, y: 170, label: "Estoque", value: "crítico" },
      { x: 480, y: 132, label: "Clientes", value: "baixa margem" },
      { x: 608, y: 142, label: "Margem", value: "exige ação" },
    ],
    opportunities: [
      { label: "Frete", progress: 0.82 },
      { label: "Estoque parado", progress: 0.76 },
      { label: "Clientes de baixa margem", progress: 0.68 },
    ],
    alerts: [
      { status: "crítico", type: "critical", label: "Logística" },
      { status: "atenção", type: "warning", label: "Estoque" },
      { status: "monitoramento", type: "monitor", label: "Rentabilidade" },
    ],
  },
  ebitda: {
    title: "EBITDA",
    status: "Previsão",
    insightLabel: "Prioridade da semana",
    insight: "Revisar custos operacionais",
    recommendation: "Ação recomendada: reduzir despesa fixa e elevar produtividade",
    impact: "Impacto esperado: EBITDA mais previsível e resiliente",
    alertLevel: { label: "Atenção", type: "warning" },
    path: "M32 160 C120 150, 184 132, 252 150 S368 124, 444 98 S536 104, 608 88",
    points: [
      { x: 92, y: 154, label: "Base operacional", value: "estável" },
      { x: 220, y: 142, label: "Despesa fixa", value: "monitorar" },
      { x: 346, y: 126, label: "Produtividade", value: "melhorando" },
      { x: 480, y: 100, label: "Eficiência", value: "em alta" },
      { x: 608, y: 88, label: "EBITDA", value: "previsível" },
    ],
    opportunities: [
      { label: "Produtividade", progress: 0.7 },
      { label: "Despesa fixa", progress: 0.55 },
      { label: "Previsibilidade", progress: 0.78 },
    ],
    alerts: [
      { status: "atenção", type: "warning", label: "Despesa fixa" },
      { status: "monitoramento", type: "monitor", label: "Produtividade" },
      { status: "monitoramento", type: "monitor", label: "Forecast" },
    ],
  },
};

const executiveThinkingSteps = [
  "Analisando indicadores",
  "Correlacionando dados financeiros",
  "Identificando prioridades",
];

const conversationThinkingSteps = [
  "Analisando indicadores",
  "Correlacionando dados",
];

let conversationChangeTimers = [];
let executivePanelTimers = [];
let typingFrame = null;
let typingCursor = null;
let commandUpdateTimer = null;
const commandPointPositions = [0, 0.24, 0.48, 0.72, 1];

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeMenu = () => {
  if (!menuToggle) return;
  body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const prepareStagger = () => {
  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.classList.add("stagger-item");
      child.style.setProperty("--stagger-delay", `${index * 70}ms`);
    });
  });
};

const setCounterValue = (counter, value) => {
  counter.textContent = Math.round(value).toLocaleString("pt-BR");
};

const animateCounter = (counter) => {
  if (counter.dataset.animated === "true") return;

  const target = Number(counter.dataset.target);
  if (!Number.isFinite(target)) return;

  counter.dataset.animated = "true";

  if (prefersReducedMotion) {
    setCounterValue(counter, target);
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  const tick = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    setCounterValue(counter, target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const updateExecutiveConversation = (key) => {
  const content = executiveAnswers[key];
  if (!content || !ceoQuestion || !executivoxAnswer) return;

  ceoQuestion.textContent = content.question;
  executivoxAnswer.textContent = content.answer;
};

const clearTypingAnimation = () => {
  if (typingFrame) {
    window.cancelAnimationFrame(typingFrame);
    typingFrame = null;
  }

  if (typingCursor?.isConnected) {
    typingCursor.remove();
  }

  typingCursor = null;
};

const clearConversationTimers = () => {
  conversationChangeTimers.forEach((timer) => window.clearTimeout(timer));
  conversationChangeTimers = [];
  clearTypingAnimation();
};

const resetConversationAnimation = () => {
  [ceoBubble, aiBubble].forEach((bubble) => {
    if (!bubble) return;
    bubble.classList.remove("is-hiding", "is-showing", "is-typing");
  });

  if (interactiveChat) {
    interactiveChat.classList.remove("is-changing");
  }
};

const renderThinkingStatus = (element, status) => {
  if (!element) return;

  element.textContent = "";

  const statusElement = document.createElement("span");
  const dotsElement = document.createElement("span");

  statusElement.className = "typing-status";
  statusElement.textContent = status;
  dotsElement.className = "typing-dots";
  dotsElement.setAttribute("aria-hidden", "true");

  statusElement.append(dotsElement);
  element.append(statusElement);
};

const showTypingIndicator = (status = "Analisando indicadores") => {
  if (!executivoxAnswer || !aiBubble) return;
  renderThinkingStatus(executivoxAnswer, status);
  aiBubble.classList.add("is-typing");
};

const hideTypingIndicator = () => {
  if (!aiBubble) return;
  aiBubble.classList.remove("is-typing");
};

const typeText = (element, text, onComplete) => {
  if (!element) return;

  clearTypingAnimation();

  if (prefersReducedMotion) {
    element.textContent = text;
    if (typeof onComplete === "function") {
      onComplete();
    }
    return;
  }

  element.textContent = "";

  const textNode = document.createTextNode("");
  const cursor = document.createElement("span");
  cursor.className = "cursor typing-cursor";
  element.append(textNode, cursor);
  typingCursor = cursor;

  const characterDelay = Math.min(12, Math.max(8, 980 / Math.max(text.length, 1)));
  const duration = Math.max(360, text.length * characterDelay);
  const startTime = performance.now();

  const tick = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const visibleCharacters = Math.ceil(text.length * progress);

    textNode.nodeValue = text.slice(0, visibleCharacters);

    if (progress < 1) {
      typingFrame = window.requestAnimationFrame(tick);
      return;
    }

    cursor.remove();
    typingFrame = null;
    typingCursor = null;

    if (typeof onComplete === "function") {
      onComplete();
    }
  };

  typingFrame = window.requestAnimationFrame(tick);
};

const finishConversationAnimation = () => {
  hideTypingIndicator();
  interactiveChat?.classList.remove("is-changing");
  ceoBubble?.classList.remove("is-showing");
  aiBubble?.classList.remove("is-showing");
};

const clearExecutivePanelTimers = () => {
  executivePanelTimers.forEach((timer) => window.clearTimeout(timer));
  executivePanelTimers = [];
  clearTypingAnimation();
};

const resetExecutivePanelAnimation = () => {
  executivePanel?.classList.remove("is-processing");

  [heroCeoBubble, heroAiBubble].forEach((bubble) => {
    if (!bubble) return;
    bubble.classList.remove("bubble-hiding", "bubble-showing", "ai-thinking");
  });
};

const showExecutivePanelThinking = (status) => {
  if (!heroAiAnswer || !heroAiBubble) return;

  heroAiBubble.classList.add("ai-thinking");
  renderThinkingStatus(heroAiAnswer, status);
};

const updateExecutivePanel = (key) => {
  const content = executivePanelData[key];
  if (!content || !heroCeoQuestion || !heroAiAnswer || !heroCeoBubble || !heroAiBubble) return;

  const hasMatchingQuestion = Array.from(heroQuestionOptions).some((button) => button.dataset.heroQuestion === key);

  if (hasMatchingQuestion) {
    heroQuestionOptions.forEach((button) => {
      const isActive = button.dataset.heroQuestion === key;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  clearExecutivePanelTimers();
  resetExecutivePanelAnimation();
  executivePanel?.classList.add("is-processing");

  if (prefersReducedMotion) {
    heroCeoQuestion.textContent = content.question;
    heroAiAnswer.textContent = content.answer;
    executivePanel?.classList.remove("is-processing");
    return;
  }

  heroCeoBubble.classList.add("bubble-hiding");
  heroAiBubble.classList.add("bubble-hiding");

  executivePanelTimers.push(window.setTimeout(() => {
    heroCeoQuestion.textContent = content.question;
    heroCeoBubble.classList.remove("bubble-hiding");
    heroCeoBubble.classList.add("bubble-showing");
  }, 180));

  executivePanelTimers.push(window.setTimeout(() => {
    showExecutivePanelThinking(executiveThinkingSteps[0]);
    heroAiBubble.classList.remove("bubble-hiding");
    heroAiBubble.classList.add("bubble-showing");
  }, 250));

  executivePanelTimers.push(window.setTimeout(() => {
    showExecutivePanelThinking(executiveThinkingSteps[1]);
  }, 430));

  executivePanelTimers.push(window.setTimeout(() => {
    showExecutivePanelThinking(executiveThinkingSteps[2]);
  }, 590));

  executivePanelTimers.push(window.setTimeout(() => {
    typeText(heroAiAnswer, content.answer, () => {
      heroAiBubble.classList.remove("ai-thinking");
      executivePanel?.classList.remove("is-processing");
    });
  }, 760));
};

const resetCommandLineAnimation = () => {
  if (!commandLine || prefersReducedMotion) return;
  if (!commandCenter?.classList.contains("is-visible")) return;

  commandLine.style.transition = "none";
  commandLine.style.strokeDasharray = "760";
  commandLine.style.strokeDashoffset = "760";
  void commandLine.getBoundingClientRect();
  commandLine.style.transition = "stroke-dashoffset 920ms cubic-bezier(0.22, 1, 0.36, 1) 80ms";
  commandLine.style.strokeDashoffset = "0";
};

const updateCommandPoints = (points) => {
  const canReadPath =
    commandLine &&
    typeof commandLine.getTotalLength === "function" &&
    typeof commandLine.getPointAtLength === "function";
  const pathLength = canReadPath ? commandLine.getTotalLength() : 0;

  commandPoints.forEach((point, index) => {
    const item = points[index];
    if (!item) return;

    const ratio = commandPointPositions[index] ?? index / Math.max(commandPoints.length - 1, 1);
    const pathPoint = canReadPath ? commandLine.getPointAtLength(pathLength * ratio) : item;

    point.removeAttribute("transform");
    point.setAttribute("cx", Number(pathPoint.x).toFixed(1));
    point.setAttribute("cy", Number(pathPoint.y).toFixed(1));
    point.setAttribute("r", index === points.length - 1 ? "6" : "4.5");
    point.dataset.label = item.label;
    point.dataset.value = item.value;
    point.classList.toggle("is-current", index === points.length - 1);
  });
};

const renderCommandOpportunities = (items) => {
  if (!commandOpportunities) return;

  commandOpportunities.innerHTML = items
    .map((item) => `
      <li>
        <div><span></span>${item.label}</div>
        <div class="opportunity-progress"><i style="--progress: ${item.progress}"></i></div>
      </li>
    `)
    .join("");

  if (opportunityCount) {
    opportunityCount.textContent = String(items.length);
  }

  if (prefersReducedMotion) {
    loadCommandProgressBars();
    return;
  }

  if (commandCenter?.classList.contains("is-visible")) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(loadCommandProgressBars);
    });
  }
};

const loadCommandProgressBars = () => {
  if (!commandOpportunities) return;

  commandOpportunities.querySelectorAll(".opportunity-progress").forEach((bar) => {
    bar.classList.add("is-loaded");
  });
};

const renderCommandAlerts = (items) => {
  if (!commandAlerts) return;

  commandAlerts.innerHTML = items
    .map((item) => `
      <li class="status-${item.type}">
        <span>${item.status}</span>${item.label}
      </li>
    `)
    .join("");

  if (alertCount) {
    alertCount.textContent = String(items.length);
  }
};

const updateCommandInsight = (data) => {
  if (!data) return;

  [commandInsightCard, commandRecommendation, commandOpportunities, commandAlerts].forEach((element) => {
    element?.classList.add("is-changing");
  });

  window.setTimeout(() => {
    if (commandInsightLabel) commandInsightLabel.textContent = data.insightLabel;
    if (commandInsight) commandInsight.textContent = data.insight;
    if (commandInsightStatus) commandInsightStatus.textContent = data.status;
    if (commandRecommendation) commandRecommendation.textContent = data.recommendation;
    if (commandImpact) commandImpact.textContent = data.impact;

    if (commandAlertLevel && data.alertLevel) {
      commandAlertLevel.textContent = data.alertLevel.label;
      commandAlertLevel.classList.remove("status-critical", "status-warning", "status-monitor");
      commandAlertLevel.classList.add(`status-${data.alertLevel.type}`);
    }

    [commandInsightCard, commandRecommendation, commandOpportunities, commandAlerts].forEach((element) => {
      element?.classList.remove("is-changing");
    });
  }, prefersReducedMotion ? 0 : 140);
};

const updateCommandCenter = (metricKey) => {
  const data = commandMetricData[metricKey];
  if (!data) return;

  if (commandUpdateTimer) {
    window.clearTimeout(commandUpdateTimer);
  }

  commandCenter?.classList.add("is-updating");

  commandKpis.forEach((button) => {
    const isActive = button.dataset.commandMetric === metricKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (commandChartTitle) commandChartTitle.textContent = data.title;
  if (commandChartStatus) commandChartStatus.textContent = data.status;
  if (commandLine) commandLine.setAttribute("d", data.path);

  updateCommandPoints(data.points);
  updateCommandInsight(data);
  renderCommandOpportunities(data.opportunities);
  renderCommandAlerts(data.alerts);
  resetCommandLineAnimation();

  commandUpdateTimer = window.setTimeout(() => {
    commandCenter?.classList.remove("is-updating");
    commandUpdateTimer = null;
  }, prefersReducedMotion ? 0 : 340);
};

const showChartTooltip = (point) => {
  if (!chartTooltip || !point) return;

  const cx = Number(point.getAttribute("cx"));
  const cy = Number(point.getAttribute("cy"));

  chartTooltip.innerHTML = `${point.dataset.label || ""}<small>${point.dataset.value || ""}</small>`;
  chartTooltip.style.left = `${(cx / 640) * 100}%`;
  chartTooltip.style.top = `${(cy / 240) * 100}%`;
  chartTooltip.hidden = false;
};

const hideChartTooltip = () => {
  if (!chartTooltip) return;
  chartTooltip.hidden = true;
};

const setupCommandCenter = () => {
  if (!commandCenter) return;

  commandKpis.forEach((button) => {
    button.addEventListener("click", () => {
      const metric = button.dataset.commandMetric;
      updateCommandCenter(metric);
    });
  });

  commandPoints.forEach((point) => {
    point.addEventListener("mouseenter", () => showChartTooltip(point));
    point.addEventListener("mouseleave", hideChartTooltip);
    point.addEventListener("focus", () => showChartTooltip(point));
    point.addEventListener("blur", hideChartTooltip);
  });

  updateCommandCenter("revenue");
};

const setupExecutivePanel = () => {
  if (!heroQuestionOptions.length || !heroCeoQuestion || !heroAiAnswer || !heroCeoBubble || !heroAiBubble) return;

  heroQuestionOptions.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.heroQuestion;
      if (!key) return;

      updateExecutivePanel(key);
    });
  });
};

const setupExecutiveConversation = () => {
  if (!questionOptions.length || !ceoQuestion || !executivoxAnswer || !ceoBubble || !aiBubble) return;

  questionOptions.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));

    button.addEventListener("click", () => {
      const key = button.dataset.question;
      if (!key || !executiveAnswers[key]) return;

      questionOptions.forEach((option) => {
        option.classList.remove("active");
        option.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      clearConversationTimers();
      resetConversationAnimation();

      if (prefersReducedMotion) {
        updateExecutiveConversation(key);
        return;
      }

      ceoBubble.classList.add("is-hiding");
      aiBubble.classList.add("is-hiding");
      interactiveChat?.classList.add("is-changing");

      conversationChangeTimers.push(window.setTimeout(() => {
        ceoQuestion.textContent = executiveAnswers[key].question;
        showTypingIndicator(conversationThinkingSteps[0]);
        ceoBubble.classList.remove("is-hiding");
        ceoBubble.classList.add("is-showing");
      }, 180));

      conversationChangeTimers.push(window.setTimeout(() => {
        aiBubble.classList.remove("is-hiding");
        aiBubble.classList.add("is-showing");
      }, 280));

      conversationChangeTimers.push(window.setTimeout(() => {
        showTypingIndicator(conversationThinkingSteps[1]);
      }, 480));

      conversationChangeTimers.push(window.setTimeout(() => {
        typeText(executivoxAnswer, executiveAnswers[key].answer, finishConversationAnimation);
      }, 720));
    });
  });
};

prepareStagger();
setupExecutivePanel();
setupExecutiveConversation();
setupCommandCenter();

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (body.classList.contains("menu-open")) {
      closeMenu();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.classList.contains("menu-open")) {
    closeMenu();
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
  loadCommandProgressBars();
  counters.forEach((counter) => animateCounter(counter));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target === commandCenter) {
            loadCommandProgressBars();
          }
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -80px 0px" }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}
