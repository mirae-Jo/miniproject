// const loginInput = document.querySelector(".comment_box");
// const loginButton = document.querySelector(".comment_btn");

// function loginButtonClick() {
//   console.log(loginInput.value);
// }

// loginButton.addEventListener("click", loginButtonClick);

const comment_btn = document.querySelector(".comment_btn");

// function makeComment() {
//   let comment = $(".comment_box").val();

//   let temp_html = `<div>
//   <br>
//   <br>
//   <p>${comment}</p>
// </div>`;
//   $(".comment_wrap").append(temp_html);
// }

// comment_btn.addEventListener("click", makeComment);

// Firebase 세팅 코드

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ5GSpybMsZNUJ31A11mAUFoYkADMTJcE",
  authDomain: "sparta-78a19.firebaseapp.com",
  projectId: "sparta-78a19",
  storageBucket: "sparta-78a19.appspot.com",
  messagingSenderId: "219129633902",
  appId: "1:219129633902:web:4283af80aaabd138da5a7f",
  measurementId: "G-4CRFJHNREJ",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// comment_btn.click(async function () {
//   // let doc = { name: "min", age: 25 };
//   // await addDoc(collection(db, "comments"), doc);
//   $(".comment_btn").click(async function () {
//     let comment = $(".comment_box").val();
//     console.log(comment);

//     let doc = {
//       comment: comment,
//       date: new Date() /*Date()는 문자열취급 new Date는 타임스탬프*/,
//     };
//     await addDoc(collection(db, "comments"), doc);

//     let temp_html = `<p>${comment}</p>`;
//     $(".comment_wrap").append(temp_html);
//     $(".comment_wrap").val("");
//   });
// });
$(".comment_btn").click(async function () {
  let comment = $(".comment_box").val();

  let doc = {
    comment: comment,
    date: new Date() /*Date()는 문자열취급 new Date는 타임스탬프*/,
  };
  await addDoc(collection(db, "comments"), doc);
  let temp_html = `<p>${comment}</p>`;
  $(".comment_wrap").append(temp_html);
  $(".comment_box").val("");
});

let docs = await getDocs(collection(db, "comments"));
docs.forEach((doc) => {
  let row = doc.data();
  let message = row["comment"];

  let temp_html = `<br><br><p>${message}</p>`;
  $(".comment_wrap").append(temp_html);
});
