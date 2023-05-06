
    var openModalEntry = document.querySelectorAll(".card__add");
openModalEntry.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault(modal__inner);
    console.log(openModalEntry);
  })
});
