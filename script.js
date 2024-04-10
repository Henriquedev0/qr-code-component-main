var card = document.getElementById("flutuar");

card.addEventListener("mouseover", function () {
  card.classList.add("flutuar");
});

card.addEventListener("mouseout", function () {
  card.classList.remove("flutuar");
});
