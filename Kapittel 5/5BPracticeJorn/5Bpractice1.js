//#region imports and connection to firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

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
    // sletter alt i listen
    itemsContainerEl.innerHTML = "";

    //  spør databasen om dette
    let listQuery = query(collection(db, "huskeliste"));
    let listDocs = await getDocs(listQuery);

    // finne collection id. den som blir autoGenerert
    listDocs.forEach((docInfo)=>{
        console.log(docInfo.id);
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
        //  forventes at vi legger til ting f.eks å sjekke om det er noe i eller blabla
        text: husketekstInputEl.value,
        importance: viktighetInputEl.value,
        category: kategoriInputEl.value,
        createdAt: serverTimestamp()
    }
    await addDoc(collection(db, "huskeliste"), newDoc);
    
    renderList();
}