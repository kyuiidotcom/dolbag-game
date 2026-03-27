function addItem(src) {
  const canvas = document.getElementById("canvas");

  const img = document.createElement("img");
  img.src = "images/" + src;
  img.className = "item";

  img.style.left = Math.random() * 300 + "px";
  img.style.top = Math.random() * 500 + "px";
  img.style.width = "60px";

  canvas.appendChild(img);
}
function setCharacter(src) {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = `<img src="images/${src}" width="200" style="position:absolute; left:100px; top:200px;">`;
}

const characters = [
  { id: 1, name: "봄_남", type: "human", season: "spring" },
  { id: 2, name: "봄_여", type: "human", season: "spring" },
  { id: 3, name: "여름_남", type: "human", season: "summer" },
  { id: 4, name: "여름_여", type: "human", season: "summer" },
  { id: 5, name: "가을_남", type: "human", season: "autumn" },
  { id: 6, name: "가을_여", type: "human", season: "autumn" },
  { id: 7, name: "겨울_남", type: "human", season: "winter" },
  { id: 8, name: "겨울_여", type: "human", season: "winter" },
  { id: 9, name: "우주인_남", type: "space", season: "none" },
  { id: 10, name: "우주인_여", type: "space", season: "none" }
];