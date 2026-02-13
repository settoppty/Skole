//#region imports and connection to firebase
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, serverTimestamp} from 
"https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCoRMIqB6ER-nEOSmcmKlwVkgElWpnk1vk",
    authDomain: "it1database-91a5f.firebaseapp.com",
    projectId: "it1database-91a5f",
    storageBucket: "it1database-91a5f.firebasestorage.app",
    messagingSenderId: "1032871459206",
    appId: "1:1032871459206:web:8f6ab0ff18d9a04e9a5407"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//#endregion

//#region QuerySelectors
// Buttons
let addBtnEl = document.querySelector("#add");
// Containers
let itemsContainerEl = document.querySelector("#items");

// Inputs
let husketekstInputEl = document.querySelector("#husketekst");
let kategoriInputEl = document.querySelector("#kategori");
let viktighetInputEl = document.querySelector("#viktighet");
let ferdigInputEl = document.querySelector("#ferdig");
//#endregion



async function renderList(){
    // Fjerner det som er der!
    itemsContainerEl.innerHTML = "";

    let listQuery = query(collection(db, "jegGidderIkkeLageEnCollection"));
    let listDocs  = await getDocs(listQuery);

    listDocs.forEach((docInfo)=>{
        let d = docInfo.data();

        console.log(d);
        let liEl = document.createElement("li");
        liEl.innerText = d.text + " (Viktighet: " + d.importance + ")"

        itemsContainerEl.appendChild(liEl);
    });
}
renderList();



addBtnEl.addEventListener("click", addToDatabase);

async function addToDatabase(){
    let newDoc = {
        text: husketekstInputEl.value,
        importance: viktighetInputEl.value,
        category: kategoriInputEl.value,
        createdAt: serverTimestamp()
    }

    await addDoc(collection(db, "jegGidderIkkeLageEnCollection"), newDoc);

    renderList();
}


//#region AUTH
// Signin
const signInEmailInputEl = document.querySelector("#signInEmailInput");
const signInPasswordInputEl = document.querySelector("#signInPasswordInput");
const signInBtnEl = document.querySelector("#signIn");
signInBtnEl.addEventListener("click", signInUser);

// Register
const registerEmailInputEl = document.querySelector("#registerEmailInput");
const registerPasswordInputEl = document.querySelector("#registerPasswordInput");
const registerBtnEl = document.querySelector("#register");
registerBtnEl.addEventListener("click", registerNewUser);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const auth = getAuth();

function registerNewUser(){
    let email = registerEmailInputEl.value;
    let password  = registerPasswordInputEl.value;

    // Makes sure we have both email and password
    if(!email || !password){
        alert("Du må ha både epost og passord!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password);
}

function signInUser(){
    let email = signInEmailInputEl.value;
    let password  = signInPasswordInputEl.value;

    // Makes sure we have both email and password
    if(!email || !password){
        alert("Du må ha både epost og passord!");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        window.location = "http://google.com";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage);
    });
}

//#endregion


















