let currentCharacter = "human";

function changeCharacter(type) {
  currentCharacter = type;

  const img = document.getElementById("character");

  if (type === "human１") {
    img.src = "images/human1.png";
  }

  if (type === "space１") {
    img.src = "images/space1.png";
  }
  
    if (type === "space") {
    img.src = "images/ｆｉｓｈ1.png";
  }
}

function equipItem(item) {
  const character = document.getElementById("character");

  if (item === "hat") {
    character.style.filter = "brightness(1.2)";
  }

  if (item === "glasses") {
    character.style.filter = "contrast(1.5)";
  }

  if (item === "helmet") {
    character.style.transform = "scale(1.1)";
  }
}
