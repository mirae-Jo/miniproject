// Firebase 세팅 코드

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
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
//-------------------------------------------------------------------------------------------------------------------------------------


//민석db넣기
$("#comment_btn_minseok").click(async function () {
  let comment = $("#comment_box_minseok").val();

  let doc = {
    comment: comment,
    date: new Date() /*Date()는 문자열취급 new Date는 타임스탬프*/,
  };
  await addDoc(collection(db, "comments_minseok"), doc);
  let temp_html = `<p class="aaa">${comment}</p>`;
  $("#commented_minseok").prepend(temp_html);
  $("#comment_box_minseok").val("");
});

//민석db가져오기
async function get_comments_minseok() {
  const q = query(collection(db, "comments_minseok"), orderBy("date"))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row['comment'];

    const temp_html = `<p class="aaa">${comment}</p>`;
    $('#commented_minseok').prepend(temp_html);

  });
}
get_comments_minseok()
//-------------------------------------------------------------------------------------------------------------------------------------
//미래db넣기
$("#comment_btn_mirae").click(async function () {
  let comment = $("#comment_box_mirae").val();

  let doc = {
    comment: comment,
    date: new Date() /*Date()는 문자열취급 new Date는 타임스탬프*/,
  };
  await addDoc(collection(db, "comments_mirae"), doc);
  let temp_html = `<p>${comment}</p>`;
  $("#commented_mirae").prepend(temp_html);
  $("#comment_box_mirae").val("");
});

//미래db가져오기
async function get_comments_mirae() {
  const q = query(collection(db, "comments_mirae"), orderBy("date"))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row['comment'];

    const temp_html = `<p>${comment}</p>`;
    $('#commented_mirae').prepend(temp_html);
  });
}
get_comments_mirae()

//-------------------------------------------------------------------------------------------------------------------------------------

//유나db넣기
$("#comment_btn_yuna").click(async function () {
  let comment = $("#comment_box_yuna").val();

  let doc = {
    comment: comment,
    date: new Date() /*Date()는 문자열취급 new Date는 타임스탬프*/,
  };
  await addDoc(collection(db, "comments_yuna"), doc);
  let temp_html = `<p>${comment}</p>`;
  $("#commented_yuna").prepend(temp_html);
  $("#comment_box_yuna").val("");
});

//유나db가져오기
async function get_comments_yuna() {
  const q = query(collection(db, "comments_yuna"), orderBy("date"))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row['comment'];

    const temp_html = `<p>${comment}</p>`;
    $('#commented_yuna').prepend(temp_html);
  });
}
get_comments_yuna()