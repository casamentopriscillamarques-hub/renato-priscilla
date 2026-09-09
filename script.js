// ============================================================
// RENATO & PRISCILLA — SCRIPT DO SITE
// ============================================================


// ============================================================
// CONFIGURAÇÕES
// ============================================================

const GOOGLE_APPS_SCRIPT_URL = "";

const PIX_KEY = "21964143316";

const WEDDING_DATE =
  new Date("2026-10-11T12:00:00-03:00");


// ============================================================
// LISTA DE PRESENTES
// ============================================================

const giftCategories = [

  {
    title: "💪 Projeto Casal Monstro",
    note: "Fitness",

    gifts: [

      [
        "gym",
        "🏋️",
        "1 Mês de Academia",
        "Para começar o projeto casal monstro com disposição.",
        100
      ],

      [
        "scale",
        "⚖️",
        "Balança Digital de Bioimpedância",
        "Para acompanhar o progresso sem desculpas.",
        50
      ],

      [
        "whey",
        "💪",
        "Kit de Whey Protein + Creatina",
        "Combustível oficial dos recém-casados.",
        150
      ],

      [
        "bottles",
        "🥤",
        "Garrafas Térmicas Combinando",
        "Porque casal fitness também combina acessórios.",
        80
      ],

      [
        "shaker",
        "🥤",
        "Kit de Shakers para o Casal",
        "Para o whey nosso de cada treino.",
        60
      ]

    ]
  },


  {
    title: "🎤 Modo Pagodão Ativado",
    note: "Lazer",

    gifts: [

      [
        "pagode",
        "🎶",
        "Ingressos para o Pagode",
        "Uma noite de música, alegria e muita resenha.",
        220
      ],

      [
        "instruments",
        "🥁",
        "Tantan e Pandeiro Oficiais",
        "Para o pagode continuar mesmo depois da festa.",
        100
      ],

      [
        "speaker",
        "🔊",
        "Caixa de Som Bluetooth à Prova D'Água",
        "Para animar qualquer lugar.",
        200
      ],

      [
        "playlist",
        "🎧",
        "Playlist do Casal",
        "Para manter o pagode tocando na casa nova.",
        50
      ],

      [
        "karaoke",
        "🎤",
        "Noite de Karaokê",
        "Porque cantar mal também é uma forma de amar.",
        75
      ]

    ]
  },


  {
    title: "🍻 Open Bar dos Noivos",
    note: "",

    gifts: [

      [
        "beer",
        "🍺",
        "Uma Caixa de Cerveja",
        "Porque algumas decisões do casal merecem comemoração.",
        65
      ],

      [
        "gin",
        "🍸",
        "Gin",
        "Para brindar a vida de casados.",
        75
      ],

      [
        "hangover",
        "🤕",
        "Kit Anti-Ressaca Infalível",
        "Porque o dia seguinte também faz parte da história.",
        40
      ],

      [
        "cooler",
        "🧊",
        "Cooler Térmico com Rodinhas",
        "Praticidade para manter a resenha gelada.",
        250
      ],

      [
        "cups",
        "🥃",
        "Copos Térmicos Gravados",
        "Para cada brinde ter estilo.",
        90
      ],

      [
        "ice",
        "🧊",
        "Estoque de Gelo",
        "Porque bebida quente acaba com qualquer resenha.",
        50
      ],

      [
        "snacks",
        "🍿",
        "Petiscos para o Casal",
        "Para acompanhar aquele filme e uma bebida gelada.",
        70
      ]

    ]
  },


  {
    title: "🏠 Operação Casa Nova",
    note: "",

    gifts: [

      [
        "dinner",
        "🍽️",
        "Jantar pós-casamento",
        "Porque depois da festa ninguém quer cozinhar.",
        80
      ],

      [
        "kitchen",
        "🍳",
        "Kit cozinha dos recém-casados",
        "Para começar a vida nova com cozinha equipada.",
        150
      ],

      [
        "cleaning",
        "🧹",
        "Dia de faxina",
        "Uma ajuda preciosa para colocar tudo em ordem.",
        100
      ],

      [
        "fridge",
        "🧊",
        "Reposição do estoque da geladeira",
        "A geladeira também precisa de carinho.",
        120
      ],

      [
        "mat",
        "🚪",
        "Capacho de Porta",
        "“Só Entra Se Trouxer Cerveja”.",
        55
      ],

      [
        "sink",
        "🍳",
        "Kit Rodinho de Pia e Organizador",
        "Para quem perder no Jokenpô limpar.",
        65
      ],

      [
        "mop",
        "🧹",
        "MOP Giratório",
        "O melhor amigo do pós-festa.",
        90
      ],

      [
        "beer-glasses",
        "🍻",
        "Kit de Taças e Copos de Cerveja",
        "Porque visita merece um brinde.",
        100
      ],

      [
        "caps",
        "🛋️",
        "Quadro Porta-Tampinhas",
        "Para guardar as histórias em forma de tampinha.",
        80
      ],

      [
        "blender",
        "🥤",
        "Liquidificador",
        "Para bater o Whey sem empelotar.",
        100
      ],

      [
        "sheets",
        "🛏️",
        "Jogo de Lençol",
        "Para curar a ressaca de domingo.",
        100
      ],

      [
        "towel",
        "🧺",
        "Kit de Toalhas",
        "Para começar a vida nova com conforto.",
        90
      ],

      [
        "plates",
        "🍽️",
        "Kit de Pratos",
        "Para receber família e amigos.",
        100
      ],

      [
        "cutlery",
        "🍴",
        "Kit de Talheres",
        "Porque toda casa nova precisa começar completa.",
        75
      ],

      [
        "organizer",
        "🗃️",
        "Kit de Organizadores",
        "Para manter a casa em ordem.",
        60
      ],

      [
        "coffee",
        "☕",
        "Kit Café da Manhã",
        "Para começar os domingos com carinho.",
        85
      ],

      [
        "grill",
        "🍳",
        "Sanduicheira e Grill",
        "Para o espetinho de frango perfeito.",
        210
      ],

      [
        "airfryer",
        "🍳",
        "Airfryer",
        "A verdadeira dona da casa nova.",
        290
      ]

    ]
  },


  {
    title: "✈️ Lua de Mel",
    note: "",

    gifts: [

      [
        "flight",
        "✈️",
        "Passagem dos sonhos",
        "Para ajudar o casal a chegar ao destino especial.",
        300
      ],

      [
        "romantic-dinner",
        "🍷",
        "Jantar romântico",
        "Uma noite especial a dois.",
        180
      ],

      [
        "tour",
        "🗺️",
        "Passeio inesquecível",
        "Uma experiência para guardar na memória.",
        200
      ],

      [
        "breakfast",
        "☕",
        "Café da manhã da lua de mel",
        "Começar o dia devagarinho e apaixonados.",
        80
      ],

      [
        "icecream",
        "🍦",
        "Sorvete na Lua de Mel",
        "Porque todo passeio romântico merece sobremesa.",
        50
      ],

      [
        "souvenir",
        "🎁",
        "Lembrancinha da Viagem",
        "Para trazer uma recordação especial.",
        70
      ],

      [
        "uber",
        "🚗",
        "Transporte do Casal",
        "Para o casal chegar tranquilo aos passeios.",
        90
      ]

    ]
  },


  {
    title: "❤️ Mimos para os Noivos",
    note: "",

    gifts: [

      [
        "date",
        "💕",
        "Vale-date do casal",
        "Um programa especial só para os dois.",
        100
      ],

      [
        "night",
        "🌹",
        "Noite romântica",
        "Um mimo para celebrar o amor.",
        150
      ],

      [
        "massage",
        "💆",
        "Massagem para dois",
        "Porque os noivos também merecem relaxar.",
        200
      ],

      [
        "movie",
        "🎬",
        "Cinema para dois",
        "Uma sessão especial depois do casamento.",
        60
      ],

      [
        "pizza",
        "🍕",
        "Pizza do casal",
        "Porque amor também combina com pizza.",
        70
      ],

      [
        "breakfast-couple",
        "🥐",
        "Café da manhã para dois",
        "Um momento gostoso para começar o dia.",
        90
      ],

      [
        "because",
        "🎁",
        "“Porque vocês merecem!”",
        "Um presente livre para deixar o casal ainda mais feliz.",
        300
      ]

    ]
  }

];


// ============================================================
// FORMATAÇÃO DE DINHEIRO
// ============================================================

const money = value =>
  value.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );


// ============================================================
// PRESENTES
// ============================================================

function renderGifts() {

  const container =
    document.getElementById("gift-categories");

  if (!container) return;

  container.innerHTML = "";

  giftCategories.forEach(category => {

    const section =
      document.createElement("section");

    section.className =
      "gift-category";

    section.innerHTML = `

      <h3 class="category-title">

        ${category.title}

        ${
          category.note
          ? `<span class="category-note">
              — ${category.note}
             </span>`
          : ""
        }

      </h3>

      <div class="gift-grid"></div>

    `;

    const grid =
      section.querySelector(".gift-grid");


    category.gifts.forEach(gift => {

      const [
        id,
        icon,
        name,
        description,
        value
      ] = gift;


      const card =
        document.createElement("article");

      card.className =
        "gift-card";


      card.innerHTML = `

        <div class="gift-icon">
          ${icon}
        </div>

        <h3>
          ${name}
        </h3>

        <p class="gift-description">
          ${description}
        </p>

        <div class="gift-bottom">

          <span class="gift-price">
            ${money(value)}
          </span>

          <button
            class="btn btn-primary gift-btn"
            type="button"

            data-gift-id="${id}"

            data-gift-name="${escapeHtml(name)}"

            data-gift-description="${escapeHtml(description)}"

            data-gift-value="${value}"

            data-gift-icon="${icon}">

            Quero presentear

          </button>

        </div>

      `;

      grid.appendChild(card);

    });


    container.appendChild(section);

  });


  document
    .querySelectorAll(".gift-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => openGiftModal(button.dataset)
      );

    });

}


// ============================================================
// SEGURANÇA HTML
// ============================================================

function escapeHtml(value) {

  return value.replace(
    /[&<>"']/g,
    char => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"

    }[char])
  );

}


// ============================================================
// MODAL DO PRESENTE
// ============================================================

function openGiftModal(data) {

  document.getElementById("modal-icon")
    .textContent = data.giftIcon;

  document.getElementById("modal-title")
    .textContent = data.giftName;

  document.getElementById("modal-description")
    .textContent = data.giftDescription;

  document.getElementById("modal-value")
    .textContent =
      money(Number(data.giftValue));


  document.getElementById("gift-id")
    .value =
      JSON.stringify({

        name: data.giftName,

        value:
          Number(data.giftValue)

      });


  document.getElementById("gift-name")
    .value = "";

  document.getElementById("gift-success")
    .classList.add("hidden");

  document.getElementById("gift-form")
    .classList.remove("hidden");

  document.getElementById("copy-feedback")
    .textContent = "";

  document.getElementById("gift-modal")
    .classList.remove("hidden");

  document.body.style.overflow =
    "hidden";
}


function closeGiftModal() {

  const modal =
    document.getElementById("gift-modal");

  if (!modal) return;

  modal.classList.add("hidden");

  document.body.style.overflow =
    "";

}


// ============================================================
// TOAST
// ============================================================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent =
    message;

  toast.classList.add("show");

  setTimeout(
    () => toast.classList.remove("show"),
    2800
  );

}


// ============================================================
// COPIAR PIX
// ============================================================

async function copyPix() {

  try {

    await navigator.clipboard
      .writeText(PIX_KEY);

    const feedback =
      document.getElementById(
        "copy-feedback"
      );

    feedback.textContent =
      "✓ Chave Pix copiada!";

    showToast(
      "Chave Pix copiada ❤️"
    );

  }

  catch {

    const textarea =
      document.createElement("textarea");

    textarea.value =
      PIX_KEY;

    document.body.appendChild(
      textarea
    );

    textarea.select();

    document.execCommand("copy");

    textarea.remove();

    document.getElementById(
      "copy-feedback"
    ).textContent =
      "✓ Chave Pix copiada!";

  }

}


// ============================================================
// GOOGLE SHEETS / LOCAL STORAGE
// ============================================================

async function sendToGoogleSheets(payload) {

  if (!GOOGLE_APPS_SCRIPT_URL) {

    const key =
      payload.type === "rsvp"
        ? "casamento_rsvp"
        : "casamento_presentes";


    const existing =
      JSON.parse(
        localStorage.getItem(key) || "[]"
      );


    existing.push(payload);


    localStorage.setItem(
      key,
      JSON.stringify(existing)
    );


    return true;
  }


  await fetch(
    GOOGLE_APPS_SCRIPT_URL,
    {
      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body:
        JSON.stringify(payload)
    }
  );


  return true;
}


// ============================================================
// RSVP — ADICIONAR CONVIDADO
// ============================================================

function updateGuestNumbers() {

  const guests =
    document.querySelectorAll(
      ".guest-item"
    );

  guests.forEach(
    (guest, index) => {

      const number =
        guest.querySelector(
          ".guest-number"
        );

      if (number) {

        number.textContent =
          `Convidado ${index + 1}`;

      }

    }
  );

}


function addGuest() {

  const container =
    document.getElementById(
      "guests-container"
    );

  if (!container) return;


  const guest =
    document.createElement("div");

  guest.className =
    "guest-item";


  guest.innerHTML = `

    <div class="guest-number">
      Convidado
    </div>

    <label>

      Nome completo

      <input
        type="text"
        name="guestName[]"
        placeholder="Digite o nome completo"
        required>

    </label>

    <label>

      Telefone / WhatsApp

      <input
        type="tel"
        name="guestPhone[]"
        placeholder="(21) 99999-9999"
        required>

    </label>

    <button
      type="button"
      class="btn btn-outline full remove-guest">

      🗑️ Remover convidado

    </button>

  `;


  container.appendChild(
    guest
  );


  guest
    .querySelector(".remove-guest")
    .addEventListener(
      "click",
      () => {

        guest.remove();

        updateGuestNumbers();

      }
    );


  updateGuestNumbers();

}


// ============================================================
// RSVP — ENVIO
// ============================================================

async function handleRSVP(event) {

  event.preventDefault();


  const button =
    event.submitter;


  button.disabled =
    true;

  button.textContent =
    "Enviando...";


  const guestNames =
    Array.from(
      document.querySelectorAll(
        'input[name="guestName[]"]'
      )
    ).map(
      input =>
        input.value.trim()
    );


  const guestPhones =
    Array.from(
      document.querySelectorAll(
        'input[name="guestPhone[]"]'
      )
    ).map(
      input =>
        input.value.trim()
    );


  const guests =
    guestNames.map(
      (name, index) => ({

        name,

        phone:
          guestPhones[index] || ""

      })
    );


  const payload = {

    type: "rsvp",

    timestamp:
      new Date().toISOString(),

    guests,

    totalGuests:
      guests.length,

    confirmed:
      "Sim"

  };


  try {

    await sendToGoogleSheets(
      payload
    );


    event.target.classList
      .add("hidden");


    document.getElementById(
      "rsvp-success"
    ).classList
      .remove("hidden");

  }

  catch (error) {

    console.error(error);

    showToast(
      "Não foi possível registrar agora. Tente novamente."
    );


    button.disabled =
      false;

    button.textContent =
      "💕 Confirmar presença";

  }

}


// ============================================================
// PRESENTE — ENVIO
// ============================================================

async function handleGiftSubmit(event) {

  event.preventDefault();


  const button =
    event.submitter;


  button.disabled =
    true;

  button.textContent =
    "Registrando...";


  const gift =
    JSON.parse(
      document.getElementById(
        "gift-id"
      ).value
    );


  const payload = {

    type: "gift",

    timestamp:
      new Date().toISOString(),

    name:
      document.getElementById(
        "gift-name"
      ).value.trim(),

    gift:
      gift.name,

    value:
      gift.value,

    pix:
      PIX_KEY

  };


  try {

    await sendToGoogleSheets(
      payload
    );


    event.target.classList
      .add("hidden");


    document.getElementById(
      "gift-success"
    ).classList
      .remove("hidden");

  }

  catch (error) {

    console.error(error);

    showToast(
      "Não foi possível registrar agora. Tente novamente."
    );


    button.disabled =
      false;

    button.textContent =
      "❤️ Confirmar meu presente";

  }

}


// ============================================================
// CONTAGEM REGRESSIVA
// ============================================================

function updateCountdown() {

  const countdown =
    document.getElementById(
      "countdown"
    );


  if (!countdown) return;


  const now =
    new Date();


  const difference =
    WEDDING_DATE - now;


  if (difference <= 0) {

    countdown.innerHTML =
      `
      <div style="grid-column:1/-1">

        <strong>
          🎉 CHEGOU O GRANDE DIA!
        </strong>

        <span>
          Renato & Priscilla esperam vocês!
        </span>

      </div>
      `;

    return;
  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (totalSeconds % 86400) /
      3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) /
      60
    );


  const seconds =
    totalSeconds % 60;


  const daysElement =
    document.getElementById(
      "days"
    );


  if (daysElement) {

    daysElement.textContent =
      String(days).padStart(2, "0");

    document.getElementById(
      "hours"
    ).textContent =
      String(hours).padStart(2, "0");

    document.getElementById(
      "minutes"
    ).textContent =
      String(minutes).padStart(2, "0");

    document.getElementById(
      "seconds"
    ).textContent =
      String(seconds).padStart(2, "0");

  }

}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderGifts();

    updateCountdown();

    setInterval(
      updateCountdown,
      1000
    );


    const addGuestButton =
      document.getElementById(
        "add-guest"
      );


    if (addGuestButton) {

      addGuestButton.addEventListener(
        "click",
        addGuest
      );

    }


    const rsvpForm =
      document.getElementById(
        "rsvp-form"
      );


    if (rsvpForm) {

      rsvpForm.addEventListener(
        "submit",
        handleRSVP
      );

    }


    const giftForm =
      document.getElementById(
        "gift-form"
      );


    if (giftForm) {

      giftForm.addEventListener(
        "submit",
        handleGiftSubmit
      );

    }


    document
      .querySelectorAll(
        "[data-close-modal]"
      )
      .forEach(
        element => {

          element.addEventListener(
            "click",
            closeGiftModal
          );

        }
      );


    const copyButton =
      document.getElementById(
        "copy-pix"
      );


    if (copyButton) {

      copyButton.addEventListener(
        "click",
        copyPix
      );

    }

  }
);


// ============================================================
// ESC FECHA MODAL
// ============================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeGiftModal();

    }

  }
);