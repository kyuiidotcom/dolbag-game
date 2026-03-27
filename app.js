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
