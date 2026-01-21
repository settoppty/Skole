  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot }
    from  "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDOuFgkvY5uJbSZCuIe6yXJDeDD5-5Yz4Y",
    authDomain: "affernflammehi.firebaseapp.com",
    projectId: "affernflammehi",
    storageBucket: "affernflammehi.firebasestorage.app",
    messagingSenderId: "230854846290",
    appId: "1:230854846290:web:eeaceebbcd3d76c713bc8b",
    measurementId: "G-057CQYWCFC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);
  console.log("hello")

  let titleInputEl = document.querySelector("#itemTitle");
  let descriptionInputEl = document.querySelector("itemDesc");
  let createButtonEl = document.querySelector("#createButton");
  createButtonEl.addEventListener("click", addNote);

  async function addNote() {
    let title = titleInputEl.value;
    let description = descriptionInputEl.value;
    if (!title || !description) {
        return;
    }

    let newNote= {
        title: title,
        description: description,
    }

    await addDoc(collection(db, "notater"), newNote);
    resetForm();
  }

  function resetForm() {
    titleInputEl.value = ""
    descriptionInputEl.value = ""
  }