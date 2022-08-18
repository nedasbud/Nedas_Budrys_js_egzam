/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const inputEl = document.getElementById("search");
const outputEl = document.getElementById("output");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isNaN(inputEl.value)) printOutpustList();
  else outputEl.innerHTML = '<p class="output">Please enter a number</p>';
});

function printOutpustList() {
  outputEl.innerHTML = "";
  const ulEl = document.createElement("ul");
  for (let i = 0; i <= 2; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = `Your converted weight amounts to: ${setLiText(i)}`;
    ulEl.append(liEl);
  }
  outputEl.append(ulEl);
  outputEl.className = "output";
}

function setLiText(iteration) {
  if (iteration === 0) return `${(inputEl.value * 2.2046).toFixed(3)} lb.`;
  if (iteration === 1) return `${(inputEl.value / 0.001).toFixed(3)} g.`;
  if (iteration === 2) return `${(inputEl.value * 35.274).toFixed(3)} oz.`;
}
