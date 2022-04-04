window.onload = () => {

    let body = document.body;
    body.classList.add("body")


    

let card = document.querySelector("#card");
card.style.backgroundColor = "white";
card.style.width = "550px";
card.style.height= "800px";
card.style.border = "3px-solid-red";
card.style.margin = "0px auto";
card.style.display = "flex";
card.style.borderRadius = "20px";
card.style.justifyContent = "space-between"

let topPip = document.createElement("span");
topPip.style.fontSize = "170px";
topPip.style.position = "flex";
topPip.style.alignSelf ="start";
topPip.style.verticalAlign = "top";
topPip.style.paddingLeft = "15px";




let midPip = document.createElement("span");
midPip.style.fontSize = "200px";
midPip.style.position = "flex";
midPip.style.alignSelf = "center";



let botPip = document.createElement("span");
botPip.style.fontSize = "170px";
botPip.style.position = "flex";
botPip.style.alignSelf ="end";
botPip.style.paddingLeft = "15px";
botPip.style.transform = "rotate(180deg)"




topPip.innerHTML = botPip.innerHTML = getRandomPip();
midPip.innerHTML = getRandomInt();


card.appendChild(topPip);
card.appendChild(midPip);
card.appendChild(botPip);

// ♦ ♥ ♠ ♣


function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(14);
  let  sentinel = Math.floor(Math.random() * (max - min + 1)) + min;
   if (sentinel <= 10){return sentinel} else if (sentinel == 11) {return "J"} else if (sentinel == 12) {return "J"} else if (sentinel == 13) { return "Q"} else {return "K"}

}


function getRandomPip() {
    min = Math.ceil(1);
    max = Math.floor(4);
   let sentinel = Math.floor(Math.random() * (max - min + 1)) + min;
   if (sentinel == 1){return "♦"} else if (sentinel == 2) {return "♥"} else if (sentinel == 3) {return "♠"} else {return "♣"}

}


topPip.classList.add(`${topPip.innerHTML == "♥" || topPip.innerHTML == "♦" ? "red" : "black"}`);
botPip.classList.add( `${botPip.innerHTML == "♥" || botPip.innerHTML == "♦" ? "red" : "black"}`);



}