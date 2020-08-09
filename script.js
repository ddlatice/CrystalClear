const nav = document.getElementById("nav-bar");
const toggle = document.getElementById("toggle");

// open / close navbar.

function closeNav(e) {
  //close nav if user clicks outside of navbar
  if (
    //if nav is open
    document.body.classList.contains("showNav") &&
    //and event target is not toggle or nav
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== nav &&
    !nav.contains(e.target)
  ) {
    //toggle to close nav and remove event listener.
    document.body.classList.toggle("showNav");
    document.body.removeEventListener("click", closeNav);
    //else if nav is closed
  } else if (!document.body.classList.contains("showNav")) {
    //remove event listener
    document.body.removeEventListener("click", closeNav);
  }
}

//Toggle

toggle.addEventListener("click", () => {
  document.body.classList.toggle("showNav");
  document.body.addEventListener("click", closeNav);
});
