const member1 = document.querySelector(".member1");

function click1() {
  $(".member_info1").toggle();
  $(".member_info2").css("display", "none");
  $(".member_info3").css("display", "none");
  $(".member_info4").css("display", "none");
  window.scrollTo(0, 500);
}
member1.addEventListener("click", click1);
//-------------------------------------------------------------------------------------------------------------------------------------
const member2 = document.querySelector(".member2");

function click2() {
  $(".member_info2").toggle();
  $(".member_info1").css("display", "none");
  $(".member_info3").css("display", "none");
  $(".member_info4").css("display", "none");
  window.scrollTo(0, 500);
}
member2.addEventListener("click", click2);
//-------------------------------------------------------------------------------------------------------------------------------------
const member3 = document.querySelector(".member3");

function click3() {
  $(".member_info3").toggle();
  $(".member_info2").css("display", "none");
  $(".member_info1").css("display", "none");
  $(".member_info4").css("display", "none");
  window.scrollTo(0, 500);
}
member3.addEventListener("click", click3);
//-------------------------------------------------------------------------------------------------------------------------------------

const member4 = document.querySelector(".member4");
function click4() {
  $(".member_info4").toggle();
  $(".member_info2").css("display", "none");
  $(".member_info3").css("display", "none");
  $(".member_info1").css("display", "none");
  window.scrollTo(0, 500);
}
member4.addEventListener("click", click4);
click1();
