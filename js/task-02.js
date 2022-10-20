const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsRef = document.querySelector("#ingredients");
const arr = [];
for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  console.log(itemEl);
  arr.push(itemEl);
}
listIngredientsRef.append(...arr)