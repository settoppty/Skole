//#region imports and connection to firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  orderBy,
  where,
  serverTimestamp,
  onSnapshot,
  increment,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDqt-mGu0NEBt3GRZgBoJnsNg4mdCMCtg",
  authDomain: "prosjekt4-ac475.firebaseapp.com",
  projectId: "prosjekt4-ac475",
  storageBucket: "prosjekt4-ac475.firebasestorage.app",
  messagingSenderId: "410896235066",
  appId: "1:410896235066:web:37f3c5e34820d1fb779303",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//#endregion

//#region queryselectors
//   LEGG TIL BUTTONELEMENTS

// DISSE MÅ VÆRE OPPE FOR Å DEFINERE CONTAINER SLIK AT SHOWLIST KAN FUNGERE
// Inputs:
const inputTextEl = document.querySelector(".inputText");
// Containers:
const containerEl = document.querySelector(".container");
const lockScreenEl = document.querySelector("#lockScreen");
const UserStatusEl = document.querySelector(".userID");
const loggedOutEl = document.querySelector(".loggedOut");
const loggedInEl = document.querySelector(".loggedIn");
// Buttons:
const chatInput = document.querySelector("#inputChat");
const sendBtn = document.querySelector("#send");
const logOutBtn = document.querySelector("#logoutBtn");

// AUTHKNAPPER
const signInEmailInputEl = document.querySelector("#signInEmail");
const signInPasswordInputEl = document.querySelector("#signInPassword");
const signInBtn = document.querySelector("#signIn");
const registerEmailInputEl = document.querySelector("#registerEmail");
const registerPasswordInputEl = document.querySelector("#registerPassword");
const registerUIDInputEl = document.querySelector("#registerUID");
const registerBtn = document.querySelector("#register");

//#endregion

const auth = getAuth();

logOutBtn.addEventListener("click", logout);
async function logout() {
  signOut(auth);
  alert("Successfully logged out");
}

registerBtn.addEventListener("click", registerNewUser);
async function registerNewUser() {
  let email = registerEmailInputEl.value;
  let password = registerPasswordInputEl.value;
  let username = registerUIDInputEl.value;
  if (!email || !password || !username) {
    alert("Du må fylle feltene");
    return;
  }

  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Set displayName as username
    await updateProfile(userCredential.user, { displayName: username });

    alert("User registered successfully!");
    location.reload();
  } catch (error) {
    alert("Error: " + error.message);
  }
}

signInBtn.addEventListener("click", signInUser);
async function signInUser() {
  let email = signInEmailInputEl.value;
  let password = signInPasswordInputEl.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("Velkommen " + userCredential.user.displayName);
      alert("Logged in as " + userCredential.user.displayName);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });

  if (!email || !password) {
    alert("Du må fylle feltene");
    return;
  }
}

// Henter objekter
//  spør databasen om dette
let chatQuery = query(collection(db, "chat"), orderBy("time", "asc"));

onSnapshot(chatQuery, (snapshot) => {
  containerEl.innerHTML = "";

  // finne collection id. den som blir autoGenerert
  snapshot.forEach((docInfo) => {
    console.log(docInfo.id);
    let o = docInfo.data();

    // For hver sang i chat, lag en div og fyll den med info

    let divEl = document.createElement("div");
    divEl.className = "object";

    let uidEl = document.createElement("div");
    uidEl.innerHTML = o.uid;
    uidEl.className = "uid";

    let msgEl = document.createElement("div");
    msgEl.innerHTML = o.msg;
    msgEl.className = "msg";

    let timeEl = document.createElement("div");
    let date = new Date(o.time.seconds * 1000);
    console.log(date);
    timeEl.innerHTML = date.toDateString();
    timeEl.className = "time";

    let starBtn = document.createElement("button");
    starBtn.innerHTML = "★" + o.stars;
    starBtn.className = "btn star";
    starBtn.addEventListener("click", async () => {
      const currentUser = auth.currentUser;

      if (currentUser.displayName === o.uid) {
        alert("Grådig?");
        return;
      }
      await updateDoc(doc(db, "chat", docInfo.id), {
        stars: increment(1),
      });
    });

    let deleteBtnEl = document.createElement("button");
    deleteBtnEl.innerText = "slett";
    deleteBtnEl.addEventListener("click", async () => {
      const currentUser = auth.currentUser;

      if (currentUser.displayName !== o.uid) {
        alert("Alle har ytringsfrihet! Ikke bare du");
        return;
      }
      await deleteDoc(doc(db, "chat", docInfo.id));
    });

    let updateBtnEl = document.createElement("button");
    updateBtnEl.innerText = "Edit";

    let isEditing = false;
    updateBtnEl.addEventListener("click", async () => {
      const currentUser = auth.currentUser;

      if (currentUser.displayName !== o.uid) {
        alert("Hva enn du prøver å få dem til å si... ikke gjør det");
        return;
      }
      if (!isEditing) {
        //  Redigerings mode
        msgEl.contentEditable = true;
        msgEl.classList.add("editable");
        updateBtnEl.innerText = "Save";
        isEditing = true;
      } else {
        // ikke redigeringsmode
        let updatedDoc = {
          msg: msgEl.innerText,
        };

        // HVORDAN FINNER DU ID til DOKUMENTET!?!?!
        await updateDoc(doc(db, "chat", docInfo.id), updatedDoc);
        msgEl.contentEditable = false;
        updateBtnEl.innerText = "Edit";
        msgEl.classList.remove("editable");
        isEditing = false;
      }
    });

    divEl.appendChild(uidEl);
    divEl.appendChild(msgEl);
    divEl.appendChild(timeEl);
    divEl.appendChild(deleteBtnEl);
    divEl.appendChild(updateBtnEl);
    divEl.appendChild(starBtn);

    containerEl.appendChild(divEl);
  });
  containerEl.scrollTop = containerEl.scrollHeight;
});

sendBtn.addEventListener("click", addToDatabase);
async function addToDatabase() {
  // Sjekk om det i det hele tatt er en logget inn bruker
  const user = auth.currentUser;

  if (!user) {
    alert("Du må være logget inn for å chatte!");
    return;
  } else if (chatInput.value.trim() === "") {
    alert("You must write something");
    return;
  } else {
    let newDoc = {
      //  forventes at vi legger til ting f.eks å sjekke om det er noe i eller blabla
      msg: chatInput.value,
      stars: 0,
      time: serverTimestamp(),
      uid: user.displayName || "Anonymous",
    };
    chatInput.value = "";
    console.log("Sendt melding!");
    await addDoc(collection(db, "chat"), newDoc);
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User logged in
    containerEl.classList.remove("blurred");
    inputTextEl.style.display = "block";
    UserStatusEl.innerText = "Logged in as: " + user.displayName;
    lockScreenEl.style.display = "none";
    loggedOutEl.style.display = "none";
    loggedInEl.style.display = "block";
  } else {
    // User is signed out
    containerEl.classList.add("blurred");
    inputTextEl.style.display = "none";
    UserStatusEl.innerText = "Not logged in";
    lockScreenEl.style.display = "block";
    loggedOutEl.style.display = "block";
    loggedInEl.style.display = "none";
  }
});
