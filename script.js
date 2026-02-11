const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("music");
const title = document.getElementById("title");
const msg = document.getElementById("msg");
const gif = document.getElementById("gif");

// apna Google Form prefill link yahan daalo
const formBaseURL = "https://docs.google.com/forms/d/e/1FAIpQLSc3GIwb0G2DjjvJgUM8mNkbIJAsZTM0f_e5agrscpauuJmJBw/viewform?usp=pp_url&entry.2089083960=ANKITA&entry.1023733850=";

/* floating hearts */
setInterval(()=>{
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},500);

noBtn.addEventListener("click", ()=>{
  saveAnswer("NO");

  music.play();
  gif.src = "sad.gif";
  title.innerHTML = "Oh no… 😢";
  msg.innerHTML = `
    Dil thoda sa toot gaya 💔<br>
    Par phir bhi tumhari khushi meri priority hai…
  `;

  let x = Math.random() * 200;
  let y = Math.random() * 200;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", ()=>{
  saveAnswer("YES");

  title.innerHTML = "Yayyyy 🥰💖";
  msg.innerHTML = `
   I knew you would say YES 😘<br>
    Tumhare saath har din special lagta hai…<br>
    Aur aaj se tum sirf Valentine nahi,<br>
    meri duniya ho 💕💫<br><br>
    I love you 😘💌
  `;
  gif.src = "iilu.gif";

  yesBtn.style.display="none";
  noBtn.style.display="none";
});

// Google form save function
function saveAnswer(ans){
  let url = formBaseURL + ans;
  fetch(url, { mode: "no-cors" });
}
function yesClicked(){
  document.querySelectorAll(".fox")[0].src="happy.gif";
  document.querySelectorAll(".fox")[1].src="happy.gif";
}
function noClicked(){
  document.querySelectorAll(".fox")[0].src="sad.gif";
  document.querySelectorAll(".fox")[1].src="sad.gif";
}



