// Firebase 세팅 코드

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  deleteDoc
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
  if (comment === "잘생겼어요") {
    alert("잘못된 입력입니다.");
  } else {
    let doc = {
      comment: comment,
      date: new Date(),
    };
    await addDoc(collection(db, "comments_minseok"), doc);
    window.location.reload();
  }
});

//민석db가져오기
const minseok_comment_list = [];

async function get_comments_minseok() {
  const q = query(collection(db, "comments_minseok"), orderBy("date"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row["comment"];
    minseok_comment_list.push(comment);
  });

  minseok_comment_list.forEach((a) => {
    const commentColor = minseok_comment_list.indexOf(a) % 2;
    if (commentColor === 0) {
      const temp_html = `<p class='aaa'>${a}</p>`;
      $("#commented_minseok").prepend(temp_html);
    } else {
      const temp_html = `<p class='bbb'>${a}</p>`;
      $("#commented_minseok").prepend(temp_html);
    }
    console.log(minseok_comment_list.indexOf(a));
  });
}
get_comments_minseok();
//-------------------------------------------------------------------------------------------------------------------------------------
//미래db넣기
const mirae_comment_list = [];

$("#comment_btn_mirae").click(async function () {
  let comment = $("#comment_box_mirae").val();
  if (comment == "예뻐요") {
    alert("잘못 입력된 정보입니다.");
  } else {
    let doc = {
      comment: comment,
      date: new Date(),
    };
    await addDoc(collection(db, "comments_mirae"), doc);
    window.location.reload();
  }
});

//미래db가져오기
async function get_comments_mirae() {
  const q = query(collection(db, "comments_mirae"), orderBy("date"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row["comment"];
    mirae_comment_list.push(comment);
  });

  mirae_comment_list.forEach((a) => {
    const commentColor = mirae_comment_list.indexOf(a) % 2;
    if (commentColor === 0) {
      const temp_html = `<p class='aaa'>${a}</p>`;
      $("#commented_mirae").prepend(temp_html);
    } else {
      const temp_html = `<p class='bbb'>${a}</p>`;
      $("#commented_mirae").prepend(temp_html);
    }
  });
}
get_comments_mirae();

//-------------------------------------------------------------------------------------------------------------------------------------

//유나db넣기
const yuna_comment_list = [];

$("#comment_btn_yuna").click(async function () {
  let comment = $("#comment_box_yuna").val();
 if(comment == '별로에요') {
  alert('잘못입력했습니다.')
 } else {
   let doc = {
     comment: comment,
     date: new Date(),
   };
   await addDoc(collection(db, "comments_yuna"), doc);
   window.location.reload();
 }
});

//유나db가져오기
async function get_comments_yuna() {
  const q = query(collection(db, "comments_yuna"), orderBy("date"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row["comment"];
    yuna_comment_list.push(comment);
  });

  yuna_comment_list.forEach((a) => {
    const commentColor = yuna_comment_list.indexOf(a) % 2;
    if (commentColor === 0) {
      const temp_html = `<p class='aaa'>${a}</p>`;
      $("#commented_yuna").prepend(temp_html);
    } else {
      const temp_html = `<p class='bbb'>${a}</p>`;
      $("#commented_yuna").prepend(temp_html);
    }
  });
}
get_comments_yuna();
