import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmib13y4DzDgxv9sQPVmCslM5OgzqlF3w",
  authDomain: "ordername-2e429.firebaseapp.com",
  databaseURL:
    "https://ordername-2e429-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ordername-2e429",
  storageBucket: "ordername-2e429.appspot.com",
  messagingSenderId: "549462882995",
  appId: "1:549462882995:web:63e003de3685786b564ec6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  child,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
const db = getDatabase();

let clNumber = 0;
let tbody = document.getElementById("tbody1");

function addItemToTable(name) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");

  td2.innerHTML = name;

  trow.appendChild(td2);

  tbody.appendChild(trow);
}

function addAllItemTable(client) {
  clNumber = 0;
  tbody.innerHTML = "";
  client.forEach((element) => {
    addItemToTable(element.User);
  });
}

function getAllData() {
  const dbRef = ref(db, "Clients");

  // get(child(dbRef, "Clients")).then((snapshot) => {
  //   let nameOfClientes = [];
  //   snapshot.forEach((snapshotChild) => {
  //     nameOfClientes.push(snapshotChild.val());
  //   });
  //   addAllItemTable(nameOfClientes);
  // });
  onValue(dbRef, (snapshot) => {
    let nameOfClientes = [];
    snapshot.forEach((snapshotChild) => {
      nameOfClientes.push(snapshotChild.val());
    });
    nameOfClientes.reverse();
    addAllItemTable(nameOfClientes);
  });
}

window.onload = getAllData;
