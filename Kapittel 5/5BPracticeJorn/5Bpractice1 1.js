//#region imports and connection to firebase
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, deleteDoc, doc, updateDoc, collection, addDoc, getDocs, query, orderBy, where, serverTimestamp} from 
"https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpDOb6-bOCRdIUX_KS0kYFUTiVaWmHaGo",
    authDomain: "herregud.firebaseapp.com",
    projectId: "herregud",
    storageBucket: "herregud.firebasestorage.app",
    messagingSenderId: "1032091752368",
    appId: "1:1032091752368:web:cc2474622c4e048c926875"
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

    let listQuery = query(collection(db, "huskeliste"));
    let listDocs  = await getDocs(listQuery);

    listDocs.forEach((docInfo)=>{
        let d = docInfo.data();

        console.log(d);
        let cardEl = document.createElement("div");
        cardEl.classList = "card";

        let h2El = document.createElement("h2");
        h2El.innerText = d.text;

        let pEl = document.createElement("p");
        pEl.innerText = d.category;

        // DELETEBUTTON EZ-PZ
        let deleteBtnEl = document.createElement("button");
        deleteBtnEl.innerText = "slett";
        deleteBtnEl.addEventListener("click", async ()=>{
            await deleteDoc(doc(db, "huskeliste", docInfo.id));
            renderList();
        });

        // UPDATEBUTTON NO-SO-EZ-PZ
        let updateBtnEl = document.createElement("button");
        updateBtnEl.innerText = "update";
        updateBtnEl.addEventListener("click", ()=>{
            let updateContainerEl = document.querySelector("#updateContainer");
            // VISER UPDATE SAKEN
            updateContainerEl.style.display = "block";
            
            // HENTER og SETTER INPUTS:
            let updateTextEl = document.querySelector("#husketekstUpdate");
            updateTextEl.value = d.text;

            let updateCategoryEl = document.querySelector("#kategoriUpdate");
            updateCategoryEl.value = d.category;
            

            let updateBtnEl = document.querySelector("#UpdateBtnOld");
            updateBtnEl.addEventListener("click", async ()=>{
                //INCEPTION
                let updatedDoc = {
                    text: updateTextEl.value,
                    category: updateCategoryEl.value
                }

                // HVORDAN FINNER DU ID til DOKUMENTET!?!?!
                await updateDoc(doc(db, "huskeliste", docInfo.id), updatedDoc);
                renderList();
            })
        })

        let updateBtnNewEl = document.createElement("button");
        updateBtnNewEl.innerText = "new update";
        updateBtnNewEl.addEventListener("click", async ()=>{
            h2El.contentEditable = true;
            h2El.classList.toggle("editable");
            pEl.contentEditable = true;
            pEl.classList.toggle("editable");

            updateBtnNewEl.addEventListener("click", async ()=>{
                let updatedDoc = {
                    text: h2El.innerText,
                    category: pEl.innerText
                }

                // HVORDAN FINNER DU ID til DOKUMENTET!?!?!
                await updateDoc(doc(db, "huskeliste", docInfo.id), updatedDoc);
                renderList();
            })
        })

        cardEl.appendChild(h2El);
        cardEl.appendChild(pEl);
        cardEl.appendChild(deleteBtnEl);
        cardEl.appendChild(updateBtnEl);
        cardEl.appendChild(updateBtnNewEl);
        itemsContainerEl.appendChild(cardEl);
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

    await addDoc(collection(db, "huskeliste"), newDoc);

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


















