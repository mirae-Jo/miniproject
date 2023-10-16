// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  doc,
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

//민석 db넣기
$("#comment_btn_minseok").click(async function () {
  let comment = $("#comment_box_minseok").val();
  if (comment === "잘생겼어요") {
    alert("잘못된 입력입니다.");
  } else if (comment === "멋져요") {
    window.open("https://www.youtube.com/shorts/eLpP7DkYiVE");
  } else if (comment === "QnA") {
    window.open("https://chat.openai.com/");
  } else {
    let doc = {
      comment: comment,
      date: new Date(),
    };
    await addDoc(collection(db, "comments_minseok"), doc);
    window.location.reload();
  }
});

//민석 db삭제
async function minseokHandleDeleteBtn(e) {
  const goodbye_comment = e.target.parentElement.id;
  await deleteDoc(doc(db, "comments_minseok", goodbye_comment));
  location.reload();
}

//민석 db가져오기
async function get_comments_minseok() {
  const q = query(collection(db, "comments_minseok"), orderBy("date"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row["comment"];
    const teml_html = `<p class = 'commentColor'id='${doc.id}'>${comment}<img src="./img/delete_btn.png" class='delete_btn minseok_delete_btn'></p>`;
    $("#commented_minseok").prepend(teml_html);
  });
  const delete_btns = document.querySelectorAll(".minseok_delete_btn");
  delete_btns.forEach((a) => {
    a.addEventListener("click", minseokHandleDeleteBtn);
  });
}
get_comments_minseok();

//-------------------------------------------------------------------------------------------------------------------------------------

//미래 db넣기
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

//미래 db삭제
async function miraeHandleDeleteBtn(event) {
  const commentId = event.target.parentElement.id;
  await deleteDoc(doc(db, "comments_mirae", commentId));
  window.location.reload();
}

//미래db가져오기
async function get_comments_mirae() {
  const q = query(collection(db, "comments_mirae"), orderBy("date"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const time = row["date"].toDate();
    console.dir(time);
    const Year = time.getUTCFullYear();
    const Month = time.getMonth();
    const Day = time.getDay();
    const Hours = time.getHours();
    const Minutes = time.getMinutes();
    const Seconds = time.getSeconds();
    const date =
      Year +
      "년" +
      Month +
      "월" +
      Day +
      "일" +
      " " +
      Hours +
      "시" +
      Minutes +
      "분" +
      Seconds +
      "초";

    const comment = row["comment"];
    const teml_html = `<p class = 'commentColor'id='${doc.id}'>${comment}<span class="time">${date}</span><img src="./img/delete_btn.png" class='delete_btn mirae_delete_btn'></p>`;
    $("#commented_mirae").prepend(teml_html);
  });
  const delete_btns = document.querySelectorAll(".mirae_delete_btn");
  delete_btns.forEach((a) => {
    a.addEventListener("click", miraeHandleDeleteBtn);
  });
}
get_comments_mirae();

//-------------------------------------------------------------------------------------------------------------------------------------

//유나db넣기
$("#comment_btn_yuna").click(async function () {
  let comment = $("#comment_box_yuna").val();
  if (comment == "별로에요") {
    alert("잘못입력했습니다.");
  } else if (comment == "예뻐요") {
    let doc = {
      comment: '너 뭘 좀 아는구나?',
      date: new Date(),
    };
    await addDoc(collection(db, "comments_yuna"), doc);
    window.location.reload();
  } else {
    let doc = {
      comment: comment,
      date: new Date(),
    };
    await addDoc(collection(db, "comments_yuna"), doc);
    window.location.reload();
  }
});

//유나 db삭제
async function yunaHandleDeleteBtn(e) {
  const goodbye_comment = e.target.parentElement.id;
  await deleteDoc(doc(db, "comments_yuna", goodbye_comment));
  location.reload();
}

//유나db가져오기
async function get_comments_yuna() {
  const q = query(collection(db, "comments_yuna"), orderBy("date"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const row = doc.data();
    const comment = row["comment"];
    const teml_html = `<p class = 'commentColor'id='${doc.id}'>${comment}<img src="./img/delete_btn.png" class='delete_btn yuna_delete_btn'></p>`;
    $("#commented_yuna").prepend(teml_html);
  });
  const delete_btns = document.querySelectorAll(".yuna_delete_btn");
  delete_btns.forEach((a) => {
    a.addEventListener("click", yunaHandleDeleteBtn);
  });
}
get_comments_yuna();
