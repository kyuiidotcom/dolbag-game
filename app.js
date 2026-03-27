let currentCharacter = "human1";

function changeCharacter(type) {
  currentCharacter = type;

  const img = document.getElementById("character");

  if (type === "human1") {
    img.src = "images/human1.jpg";
  }

  else if (type === "space1") {
    img.src = "images/space1.png";
  }

  else if (type === "fish1") {
    img.src = "images/fish1.png";
  }

  else if (type === "bear1") {
    img.src = "images/bear1.png";
  }

  else if (type === "dolbag1") {
    img.src = "images/dolbag1.png";
  }

  else if (type === "dolbagi") {
    img.src = "images/dolbagi.png";
  }
}

function equipItem(item) {
  const character = document.getElementById("character");

  if (item === "hat1") {
    character.style.filter = "brightness(1.2)";
  }

  else if (item === "glasses") {
    character.style.filter = "contrast(1.5)";
  }

  else if (item === "helmet1") {
    character.style.transform = "scale(1.1)";
  }

  else {
    alert("아이템 장착: " + item);
  }
}