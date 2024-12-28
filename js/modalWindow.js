function toggleMenu() {
  let modal = document.getElementById("modal");
  modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
