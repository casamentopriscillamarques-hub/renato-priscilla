// ============================================================
// RENATO & PRISCILLA — SCRIPT
// ============================================================

// Cole aqui a URL da implantação do Google Apps Script.
// Exemplo: https://script.google.com/macros/s/SEU_ID/exec
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyJRcHCvzulHfwY8YDlWam2pu5dEFwWH7POSN5Z00L33cOm-EoschC1Kdd9AQfl3TV/exec";

const PIX_KEY = "21964143316";
const WEDDING_DATE = new Date("2026-10-11T12:00:00-03:00");

const giftCategories = [
  {title:"💪 Projeto Casal Monstro",note:"Fitness",gifts:[
    ["gym","🏋️","1 Mês de Academia","Para começar o projeto casal monstro com disposição.",100],
    ["scale","⚖️","Balança Digital de Bioimpedância","Para acompanhar o progresso sem desculpas.",50],
    ["whey","💪","Kit de Whey Protein + Creatina","Combustível oficial dos recém-casados.",150],
    ["bottles","🥤","Garrafas Térmicas Combinando","Porque casal fitness também combina acessórios.",80]
  ]},
  {title:"🎤 Modo Pagodão Ativado",note:"Lazer",gifts:[
    ["pagode","🎶","Ingressos para o Pagode","Uma noite de música, alegria e muita resenha.",220],
    ["instruments","🥁","Tantan e Pandeiro Oficiais","Para o pagode continuar mesmo depois da festa.",100],
    ["speaker","🔊","Caixa de Som Bluetooth à Prova D'Água","Para animar qualquer lugar.",200]
  ]},
  {title:"🍻 Open Bar dos Noivos",note:"",gifts:[
    ["beer","🍺","Uma Caixa de Cerveja","Porque algumas decisões do casal merecem comemoração.",65],
    ["gin","🍸","Gin","Para brindar a vida de casados.",75],
    ["hangover","🤕","Kit Anti-Ressaca Infalível","Porque o dia seguinte também faz parte da história.",40],
    ["cooler","🧊","Cooler Térmico com Rodinhas","Praticidade para manter a resenha gelada.",250],
    ["cups","🥃","Copos Térmicos Gravados","Para cada brinde ter estilo.",90]
  ]},
  {title:"🏠 Operação Casa Nova",note:"",gifts:[
    ["dinner","🍽️","Jantar pós-casamento","Porque depois da festa ninguém quer cozinhar.",80],
    ["kitchen","🍳","Kit cozinha dos recém-casados","Para começar a vida nova com cozinha equipada.",150],
    ["cleaning","🧹","Dia de faxina","Uma ajuda preciosa para colocar tudo em ordem.",100],
    ["fridge","🧊","Reposição do estoque da geladeira","A geladeira também precisa de carinho.",120],
    ["mat","🚪","Capacho de Porta “Só Entra Se Trouxer Cerveja”","Regra número 1 da casa nova.",55],
    ["sink","🍳","Kit Rodinho de Pia e Organizador","Para quem perder no Jokenpô limpar.",65],
    ["mop","🧹","MOP Giratório","O melhor amigo do pós-festa para limpar o chão.",90],
    ["beer-glasses","🍻","Kit de Taças e Copos de Cerveja para as Visitas","Porque visita merece um brinde.",110],
    ["caps","🛋️","Quadro Porta-Tampinhas de Cerveja de Parede","Para guardar as histórias em forma de tampinha.",130],
    ["blender","🍳","Liquidificador Potente","Para bater o Whey sem empelotar.",150],
    ["sheets","🛏️","Jogo de Lençol Confortável","Para curar a ressaca de domingo.",185],
    ["grill","🍳","Sanduicheira e Grill","Para o espetinho de frango perfeito.",210],
    ["airfryer","🍳","Airfryer","A verdadeira dona da casa nova para fazer petiscos fit.",290],
    ["towel","🧺","Pano de Prato com Frase de Pagode","Exemplo: “Deixa Acontecer Naturalmente”.",35]
  ]},
  {title:"✈️ Lua de Mel",note:"",gifts:[
    ["flight","✈️","Passagem dos sonhos","Para ajudar o casal a chegar ao destino especial.",300],
    ["romantic-dinner","🍷","Jantar romântico","Uma noite especial a dois.",180],
    ["tour","🗺️","Passeio inesquecível","Uma experiência para guardar na memória.",200],
    ["breakfast","☕","Café da manhã da lua de mel","Começar o dia devagarinho e apaixonados.",80]
  ]},
  {title:"❤️ Mimos para os Noivos",note:"",gifts:[
    ["date","💕","Vale-date do casal","Um programa especial só para os dois.",100],
    ["night","🌹","Noite romântica","Um mimo para celebrar o amor.",150],
    ["massage","💆","Massagem para dois","Porque os noivos também merecem relaxar.",200],
    ["because","🎁","“Porque vocês merecem!”","Um presente livre para deixar o casal ainda mais feliz.",300]
  ]}
];

const money = value => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const escapeHtml = value => String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

function showToast(message){
  const toast=document.getElementById("toast");
  if(!toast)return;
  toast.textContent=message; toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2800);
}

async function sendToGoogleSheets(payload){
  if(!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.includes("COLE_AQUI")){
    throw new Error("URL do Google Apps Script ainda não configurada.");
  }
  await fetch(GOOGLE_APPS_SCRIPT_URL,{
    method:"POST",
    mode:"no-cors",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify(payload)
  });
  return true;
}

function renderGifts(){
  const container=document.getElementById("gift-categories");
  if(!container)return;

  giftCategories.forEach(category=>{
    const section=document.createElement("section");
    section.className="gift-category";
    section.innerHTML=`<h3 class="category-title">${category.title}${category.note?`<span class="category-note">— ${category.note}</span>`:""}</h3><div class="gift-grid"></div>`;
    const grid=section.querySelector(".gift-grid");

    category.gifts.forEach(gift=>{
      const [id,icon,name,description,value]=gift;
      const card=document.createElement("article");
      card.className="gift-card";
      card.innerHTML=`
        <div class="gift-icon">${icon}</div>
        <h3>${name}</h3>
        <p class="gift-description">${description}</p>
        <div class="gift-bottom">
          <span class="gift-price">${money(value)}</span>
          <button class="btn btn-primary gift-btn" type="button"
            data-gift-id="${id}" data-gift-name="${escapeHtml(name)}"
            data-gift-description="${escapeHtml(description)}"
            data-gift-value="${value}" data-gift-icon="${icon}">
            Quero presentear
          </button>
        </div>`;
      grid.appendChild(card);
    });
    container.appendChild(section);
  });

  document.querySelectorAll(".gift-btn").forEach(button=>{
    button.addEventListener("click",()=>openGiftModal(button.dataset));
  });
}

function openGiftModal(data){
  document.getElementById("modal-icon").textContent=data.giftIcon;
  document.getElementById("modal-title").textContent=data.giftName;
  document.getElementById("modal-description").textContent=data.giftDescription;
  document.getElementById("modal-value").textContent=money(Number(data.giftValue));
  document.getElementById("gift-id").value=JSON.stringify({name:data.giftName,value:Number(data.giftValue)});
  document.getElementById("gift-name").value="";
  document.getElementById("gift-success").classList.add("hidden");
  document.getElementById("gift-form").classList.remove("hidden");
  document.getElementById("copy-feedback").textContent="";

  const proof=document.getElementById("payment-proof");
  const status=document.getElementById("payment-status");
  const button=document.getElementById("confirm-gift-button");
  if(proof) proof.value="";
  if(status) status.textContent="";
  if(button){ button.disabled=true; button.textContent="❤️ Anexe o comprovante para confirmar"; }

  document.getElementById("gift-modal").classList.remove("hidden");
  document.body.style.overflow="hidden";
}

function closeGiftModal(){
  const modal=document.getElementById("gift-modal");
  if(!modal)return;
  modal.classList.add("hidden"); document.body.style.overflow="";
}
async function copyPix(){
  try{
    await navigator.clipboard.writeText(PIX_KEY);
  }catch{
    const textarea=document.createElement("textarea");
    textarea.value=PIX_KEY; document.body.appendChild(textarea); textarea.select();
    document.execCommand("copy"); textarea.remove();
  }
  const feedback=document.getElementById("copy-feedback");
  if(feedback)feedback.textContent="✓ Chave Pix copiada!";
  showToast("Chave Pix copiada ❤️");
}

function setupRsvp(){
  const form=document.getElementById("rsvp-form");
  const add=document.getElementById("add-guest");
  const container=document.getElementById("guests-container");
  if(!form || !add || !container)return;

  add.addEventListener("click",()=>{
    const count=container.querySelectorAll(".guest-item").length+1;
    const item=document.createElement("div");
    item.className="guest-item";
    item.innerHTML=`
      <div class="guest-number">Convidado ${count}</div>
      <label>Nome completo<input type="text" name="guestName[]" placeholder="Digite o nome completo" required></label>
      <label>Telefone / WhatsApp<input type="tel" name="guestPhone[]" placeholder="(21) 99999-9999" required></label>
      <button type="button" class="btn btn-outline remove-guest">➖ Remover convidado</button>`;
    container.appendChild(item);
    item.querySelector(".remove-guest").addEventListener("click",()=>{
      item.remove();
      container.querySelectorAll(".guest-item").forEach((el,i)=>{
        el.querySelector(".guest-number").textContent=`Convidado ${i+1}`;
      });
    });
  });

  form.addEventListener("submit",async event=>{
    event.preventDefault();
    const button=event.submitter; button.disabled=true; button.textContent="Enviando...";
    const names=[...form.querySelectorAll('input[name="guestName[]"]')].map(x=>x.value.trim());
    const phones=[...form.querySelectorAll('input[name="guestPhone[]"]')].map(x=>x.value.trim());
    const guests=names.map((name,i)=>({name,phone:phones[i]||""}));

    try{
      await sendToGoogleSheets({type:"rsvp",timestamp:new Date().toISOString(),guests});
      form.classList.add("hidden");
      document.getElementById("rsvp-success").classList.remove("hidden");
    }catch(error){
      console.error(error); showToast("Não foi possível registrar agora. Tente novamente.");
      button.disabled=false; button.textContent="💕 Confirmar presença";
    }
  });
}

function readFileAsDataURL(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=()=>reject(reader.error || new Error("Não foi possível ler o arquivo."));
    reader.readAsDataURL(file);
  });
}

function setupGiftForm(){
  const form=document.getElementById("gift-form");
  const proof=document.getElementById("payment-proof");
  const button=document.getElementById("confirm-gift-button");
  const status=document.getElementById("payment-status");
  if(!form)return;

  if(proof){
    proof.addEventListener("change",()=>{
      const file=proof.files && proof.files[0];
      if(!file){
        if(button){button.disabled=true;button.textContent="❤️ Anexe o comprovante para confirmar";}
        if(status)status.textContent="";
        return;
      }

      const allowed=["image/jpeg","image/png","image/webp","application/pdf"];
      const maxSize=2*1024*1024;
      if(!allowed.includes(file.type)){
        proof.value="";
        if(button){button.disabled=true;button.textContent="❤️ Anexe um comprovante válido";}
        if(status)status.textContent="Formato não permitido. Use JPG, PNG, WEBP ou PDF.";
        return;
      }
      if(file.size>maxSize){
        proof.value="";
        if(button){button.disabled=true;button.textContent="❤️ Comprovante acima de 2 MB";}
        if(status)status.textContent="O comprovante precisa ter no máximo 2 MB.";
        return;
      }

      if(button){button.disabled=false;button.textContent="❤️ Confirmar meu presente";}
      if(status)status.textContent="✓ Comprovante anexado. Você já pode confirmar o presente.";
    });
  }

  form.addEventListener("submit",async event=>{
    event.preventDefault();
    const button=event.submitter;
    const file=proof && proof.files ? proof.files[0] : null;
    const name=document.getElementById("gift-name").value.trim();

    if(!name){showToast("Digite seu nome completo.");return;}
    if(!file){showToast("Anexe o comprovante do Pix para confirmar.");return;}
    if(file.size>2*1024*1024){showToast("O comprovante deve ter no máximo 2 MB.");return;}

    button.disabled=true;
    button.textContent="Confirmando...";
    if(status)status.textContent="Enviando confirmação...";

    try{
      const gift=JSON.parse(document.getElementById("gift-id").value);
      const dataUrl=await readFileAsDataURL(file);
      const proofBase64=dataUrl.split(",")[1] || "";

      if(!proofBase64)throw new Error("Comprovante inválido.");

      const payload={
        type:"gift",
        timestamp:new Date().toISOString(),
        name,
        gift:gift.name,
        value:gift.value,
        pix:PIX_KEY,
        paymentStatus:"PAGO",
        proofMimeType:file.type,
        proofBase64
      };

      await sendToGoogleSheets(payload);

      // O comprovante não é salvo pelo site. Após o envio, removemos a referência do input.
      proof.value="";
      if(status)status.textContent="";
      form.classList.add("hidden");
      document.getElementById("gift-success").classList.remove("hidden");
    }catch(error){
      console.error(error);
      showToast("Não foi possível registrar agora. Tente novamente.");
      button.disabled=false;
      button.textContent="❤️ Confirmar meu presente";
      if(status)status.textContent="Não foi possível enviar. Tente novamente.";
    }
  });
}

function setupModal(){
  document.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click",closeGiftModal));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeGiftModal()});
  const copy=document.getElementById("copy-pix");
  if(copy)copy.addEventListener("click",copyPix);
}

function updateCountdown(){
  const el=document.getElementById("countdown");
  if(!el)return;
  const difference=WEDDING_DATE-new Date();
  if(difference<=0){
    el.innerHTML='<div style="grid-column:1/-1"><strong>🎉 CHEGOU O GRANDE DIA!</strong><span>Renato & Priscilla esperam vocês!</span></div>';
    return;
  }
  const totalSeconds=Math.floor(difference/1000);
  document.getElementById("days").textContent=String(Math.floor(totalSeconds/86400)).padStart(2,"0");
  document.getElementById("hours").textContent=String(Math.floor((totalSeconds%86400)/3600)).padStart(2,"0");
  document.getElementById("minutes").textContent=String(Math.floor((totalSeconds%3600)/60)).padStart(2,"0");
  document.getElementById("seconds").textContent=String(totalSeconds%60).padStart(2,"0");
}

renderGifts();
setupRsvp();
setupGiftForm();
setupModal();
updateCountdown();
setInterval(updateCountdown,1000);
