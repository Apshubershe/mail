const sendBtn = document.getElementById("sendBtn");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

function createHearts() {
  for(let i=0;i<10;i++){
    const heart = document.createElement("div");
    heart.className="heart";
    heart.innerText="💖";
    heart.style.left = Math.random()*window.innerWidth + "px";
    heart.style.fontSize = (12 + Math.random()*18) + "px";
    heartsContainer.appendChild(heart);
    setTimeout(()=>heart.remove(),1200);
  }
}

sendBtn.onclick = ()=>{
  const email = emailInput.value.trim();
  if(!email){
    message.innerText = "Пожалуйста, введите email 📧";
    message.classList.remove("hidden");
    return;
  }
  
  // Здесь можно отправлять email на сервер
  message.innerText = `Спасибо! Ссылка отправлена на ${email} 💌`;
  message.classList.remove("hidden");
  
  createHearts();
  emailInput.value = "";
};
