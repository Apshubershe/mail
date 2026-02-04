const form = document.getElementById("emailForm");
const message = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

form.addEventListener("submit", (e)=>{
  e.preventDefault(); // отключаем стандартное поведение формы

  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if(response.ok){
      message.innerText = "Спасибо! Ссылка отправлена 💌";
      message.classList.remove("hidden");
      form.reset();
      createHearts();
    } else {
      message.innerText = "Ошибка! Попробуйте ещё раз 😢";
      message.classList.remove("hidden");
    }
  }).catch(()=> {
    message.innerText = "Ошибка сети 😢";
    message.classList.remove("hidden");
  });
});

// Функция создания салюта сердечек
function createHearts(){
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
