//#region imports and connection to firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, where, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

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
const sendEl = document.querySelector("#add");


let chat;



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
        timeEl.innerHTML = o.time
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


//sendEl.addEventListener("click", addToDatabase);
async function addToDatabase(){
    let newDoc = {
        //  forventes at vi legger til ting f.eks å sjekke om det er noe i eller blabla
        uid: uidEl.value,
        msg: msgEl.value,
        time: timeEl.value,
        stars: stars.value,
        createdAt: serverTimestamp()
    }
    await addDoc(collection(db, "chat"), newDoc);
    
    showChat();
}