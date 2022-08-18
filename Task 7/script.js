/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(obj) {
  // 1 variantas su Object klase

  // return Object.keys(obj);

  // 2 variantas

  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log("Object keys array:", showObjectKeys(audi));
