const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("music");
const title = document.getElementById("title");
const msg = document.getElementById("msg");
const gif = document.getElementById("gif");

/* floating hearts */
setInterval(()=>{
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},500);

noBtn.addEventListener("click", noClicked);
yesBtn.addEventListener("click", yesClicked);

function noClicked(){
  music.play();
  let x = Math.random() * 200;
  let y = Math.random() * 200;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
function noClicked(){
  music.play();

  // sad gif
  gif.src = "sad.gif";   // apni sad gif ka naam yahan do

  // sad message
  title.innerHTML = "Oh no… 😢";
  msg.innerHTML = `
    Dil thoda sa toot gaya 💔<br>
    Par phir bhi tumhari khushi meri priority hai…<br>
    Main wait kar sakti hoon 🥺
  `;

  // move NO button
  let x = Math.random() * 200;
  let y = Math.random() * 200;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}


function yesClicked(){
  title.innerHTML = "Yayyyy 🥰💖";
  msg.innerHTML = `
    I knew you would say YES 😘<br>
    Tumhare saath har din special lagta hai…<br>
  Aur aaj se tum sirf Valentine nahi,<br>
  meri duniya ho 💕💫<br><br>
  I love you 😘💌<br><br>
    
  `;
  
  gif.src = "iilu.gif";  

  yesBtn.style.display="none";
  noBtn.style.display="none";
}

