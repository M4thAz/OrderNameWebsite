//importe da bd firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// Your web app's Firebase configuration, you can get it in "project config" at Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL:
    "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
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

  onValue(dbRef, (snapshot) => {
    let nameOfClientes = [];
    snapshot.forEach((snapshotChild) => {
      nameOfClientes.push(snapshotChild.val());
    });
    addAllItemTable(nameOfClientes);
  });
}

window.onload = getAllData;
