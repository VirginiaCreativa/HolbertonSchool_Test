const handleThumbnail = document.querySelector(".section_thumbnail");
const $bigImage = document.querySelector(".bigImage");
const classPopUp = document.querySelector(".section_popup_off");
let onPopUp = false;
let popUpClass = "";

handleThumbnail.addEventListener("click", ev => {
  $bigImage.src = ev.target.src;
  if (!onPopUp) {
    classPopUp.className = "section_popup_on";
  }
});

function handleClosedPopUp() {
  classPopUp.className = "section_popup_off";
}
