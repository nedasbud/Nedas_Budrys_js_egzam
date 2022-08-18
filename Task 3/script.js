/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputEl = document.getElementById("output");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  outputEl.innerHTML = "";
  makeUserList();
  outputEl.className = "cards";
});

async function makeUserList() {
  const resp = await fetch(ENDPOINT);
  const jsData = await resp.json();
  console.log("jsData ===", jsData);
  jsData.forEach((user) => {
    outputEl.append(makeOneCard(user.avatar_url, user.login));
  });
}

function makeOneCard(avatar_url, login) {
  const cardEl = document.createElement("div");
  cardEl.innerHTML = `
    <img src="${avatar_url}" alt="User Avatar"></img>
    <p>${login}</p>
    `;
  cardEl.className = "card";
  return cardEl;
}
