
// PARSE BRUKERNAVN I LOCALSTORAGE OG BRUK DET FOR USERNAME. DROPP AUTH, DISPLAY: HIDDEN PÅ ALT FØR DETTE ER GJORT.
// RUN CHECK OM MAN HAR LOCAL ELLER IKKE, HVIS JA HOPP RETT I SIDEN.




//#region imports and connection to firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, updateDoc, getDocs, query, orderBy, where, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDqt-mGu0NEBt3GRZgBoJnsNg4mdCMCtg",
    authDomain: "prosjekt4-ac475.firebaseapp.com",
    projectId: "prosjekt4-ac475",
    storageBucket: "prosjekt4-ac475.firebasestorage.app",
    messagingSenderId: "410896235066",
    appId: "1:410896235066:web:37f3c5e34820d1fb779303"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)



//   LEGG TIL BUTTONELEMENTS

// DISSE MÅ VÆRE OPPE FOR Å DEFINERE CONTAINER SLIK AT SHOWLIST KAN FUNGERE
// Inputs:
const inputTextEl = document.querySelector("#inputText");
// Containers:
const containerEl = document.querySelector(".container");
// Buttons:
const chatInput = document.querySelector("#inputChat");
const sendBtn = document.querySelector("#send");

// AUTHKNAPPER
const signInEmailInputEl = document.querySelector("#signInEmail");
const signInPasswordInputEl = document.querySelector("#signInPassword");
const signInBtn = document.querySelector("#signIn");
const registerEmailInputEl = document.querySelector("#registerEmail");
const registerPasswordInputEl = document.querySelector("#registerPassword");
const registerBtn = document.querySelector("#register");

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const auth = getAuth();

registerBtn.addEventListener("click", registerNewUser)
async function registerNewUser(){
    let email = registerEmailInputEl.value
    let password = registerPasswordInputEl.value
    if(!email || !password){
        alert("Du må fylle feltene");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
}




signInBtn.addEventListener("click", signInUser)
async function signInUser(){
        let email = signInEmailInputEl.value
    let password = signInPasswordInputEl.value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        username = uid
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log (errorCode + ": " + errorMessage)
    });
    
    if(!email || !password){
        alert("Du må fylle feltene");
        return;
    }
}


//#region Username
//#endRegion


// // #region Blur
// let isBlurred = false; // Track toggle state

// function blurBg(selector) {
//     const target = document.querySelector(selector);
//     if (!target) {
//         console.error("Element not found");
//         return;
//     }

//     document.querySelectorAll("body *").forEach(el => {
//         if (el !== target && !target.contains(el) && el.id !== "usernameButton") {
//             el.classList.add("blurred");
//         }
//     });
// }
// document.getElementById("usernameButton").addEventListener('click', () => {
//     if (!isBlurred) {
//         blurEverythingExcept('#usernameCreate');
//         document.getElementById("usernameButton").textContent = 'Unblur Everything';
//     } else {
//         unblurEverything();
//         document.getElementById("usernameButton").textContent = 'Blur Everything Except #myDiv';
//     }
//     isBlurred = !isBlurred;
// });

// function unblurEverything() {
//     document.querySelectorAll('.blurred').forEach(el => {
//         el.classList.remove('blurred');
//     });
// }
    
// blurBg("#usernameCreate");

// #endregion


showChat();
async function showChat(){
    containerEl.innerHTML = "";

    
    // Henter objekter
    //  spør databasen om dette
    let chatQuery = query(collection(db, "chat"));
    let chatDocs = await getDocs(chatQuery);
    
        // finne collection id. den som blir autoGenerert
        chatDocs.forEach((docInfo)=>{
        console.log(docInfo.id);              
        let o = docInfo.data();
        
        // For hver sang i chat, lag en div og fyll den med info

        let divEl = document.createElement("div");
        divEl.className = "object"

        let uidEl = document.createElement("div");
        uidEl.innerHTML = o.uid;
        uidEl.className = "uid";
        
        let msgEl = document.createElement("div");
        msgEl.innerHTML = o.msg
        msgEl.className = "msg";
        
        let timeEl = document.createElement("div");
        let date = new Date(o.time.seconds * 1000)
        console.log(date);
        timeEl.innerHTML = date.toDateString()
        timeEl.className = "time";

        let starBtn = document.createElement("button");
        starBtn.innerHTML = "★" + o.stars;
        starBtn.className = "btn star";
        //starBtn.addEventListener("click", starIncrease);   // Viktig å gjøre at knappen vi lagde faktisk kaller funksjonen.

        

        divEl.appendChild(uidEl);
        divEl.appendChild(msgEl);
        divEl.appendChild(timeEl);
        divEl.appendChild(starBtn);

    containerEl.appendChild(divEl);

    
    })
    
}
compareDate();
function compareDate(a,b){
    if (a.timeEl > b.timeEl) {
    return 1;
  } else if (a.date < b.date) {
    return -1;
  } else {
    return 0;
  }
};


sendBtn.addEventListener("click", addToDatabase);
async function addToDatabase(){
    let newDoc = {
        //  forventes at vi legger til ting f.eks å sjekke om det er noe i eller blabla
        msg: inputChat.value,
        stars: 0,
        time: serverTimestamp(),
        uid: "a",
    }
    await addDoc(collection(db, "chat"), newDoc);
    console.log("her")
    showChat();
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});