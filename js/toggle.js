function hide() {
  $(".member").css("display", "none");
}
hide();

const member1 = document.querySelector(".person>.one");
function click1(e) {
  e.preventDefault();
  $(".member1").toggle();
  $(".member2").css("display", "none");
  $(".member3").css("display", "none");
  window.scrollTo(0, 1150);
}

member1.addEventListener("click", click1);

//-------------------------------------------------------------------------------------------------------------------------------------
const member2 = document.querySelector(".person>.two");

function click2(e) {
  e.preventDefault();
  $(".member2").toggle();
  $(".member1").css("display", "none");
  $(".member3").css("display", "none");
  window.scrollTo(0, 1150);
}

member2.addEventListener("click", click2);
// //-------------------------------------------------------------------------------------------------------------------------------------
const member3 = document.querySelector(".person>.tree");
function click3(e) {
  e.preventDefault();
  $(".member3").toggle();
  $(".member2").css("display", "none");
  $(".member1").css("display", "none");
  window.scrollTo(0, 1150);
}

member3.addEventListener("click", click3);
// //-------------------------------------------------------------------------------------------------------------------------------------
