const handleThumbnail = document.querySelector(".section_thumbnail");
const $bigImage = document.querySelector(".bigImage");
const $bgOveryl = document.getElementById("bgOverly");
const classPopUp = document.querySelector(".section_popup_off");
let onPopUp = true;
let popUpClass = "";

handleThumbnail.addEventListener("click", ev => {
  $bigImage.src = ev.target.src;
  if (onPopUp) {
    classPopUp.className = "section_popup_on";
    $bgOveryl.className = "section_popup_bgOverly";
  }
});

function handleClosedPopUp() {
  classPopUp.className = "section_popup_off";
  $bgOveryl.className = "";
}
