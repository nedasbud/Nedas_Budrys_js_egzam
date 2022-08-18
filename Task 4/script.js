/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

function init() {
  makeCarsList();
  outputEl.className = "cards";
}
init();

async function makeCarsList() {
  outputEl.innerHTML = "";
  const resp = await fetch(ENDPOINT);
  const jsData = await resp.json();
  console.log("jsData ===", jsData);
  jsData.forEach((car) => {
    outputEl.append(makeOneCard(car.brand, car.models));
  });
}

function makeOneCard(brand, models) {
  const cardEl = document.createElement("div");
  cardEl.innerHTML = `<h3>${brand}</h3>`;
  const ulEl = document.createElement("ul");
  models.forEach((model) => {
    const liEl = document.createElement("li");
    liEl.textContent = model;
    ulEl.append(liEl);
  });
  cardEl.append(ulEl);
  cardEl.className = "card";
  return cardEl;
}
