let currentCharacter = "human1";

function changeCharacter(type) {
  currentCharacter = type;

  const img = document.getElementById("character");

  if (type === "human１") {
    img.src = "images/human1.png";
  }

  if (type === "space１") {
    img.src = "images/space1.png";
  }
  
    if (type === "fish1") {
    img.src = "images/fish1.png";
  }
  
      if (type === "bear1") {
    img.src = "images/bear1.png";
  }
}

function equipItem(item) {
  const character = document.getElementById("character");

  if (item === "hat1") {
    character.style.filter = "brightness(1.2)";
  }

  if (item === "glasses") {
    character.style.filter = "contrast(1.5)";
  }

  if (item === "helmet1") {
    character.style.transform = "scale(1.1)";
  }
}

function changeCharacter(type) {
  const character = document.getElementById("character");

  if (type === "human1") {
    character.src = "images/human1.png";
  }

  if (type === "space1") {
    character.src = "images/space1.png";
  }
}

function equipItem(item) {
  const character = document.getElementById("character");

  // 간단한 테스트 로직
  if (item === "hat") {
    alert("모자 장착");
  }

  if (item === "glasses") {
    alert("안경 장착");
  }

  if (item === "helmet") {
    alert("헬멧 장착");
  }
}
