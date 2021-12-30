let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let message = document.querySelector("h2");

const randomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
}

const addClass = (slot) => {
    slot.classList.remove(...slot.classList);

    let number = randomNumber();

    if (number === 1) {
        slot.classList.add("coin1");
    } else if (number === 2) {
        slot.classList.add("coin2");
    } else if (number === 3) {
        slot.classList.add("fruit");
    }
}

const statusMessage = () => {
    let condition = slot1.className === slot2.className && slot1.className === slot3.className;
    
    if(condition) {
       message.innerText = "Vitória";
    } else {
       message.innerText = "Tente outra vez!"
    }
}

const playGame = () => {
    addClass(slot1);
    addClass(slot2);
    addClass(slot3);
    statusMessage();
}

const button = document.getElementById("btn");
button.addEventListener("click", playGame);