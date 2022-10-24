function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxAmountInputRef = document.querySelector('input[type="number"]');
const buttonCreateBoxRef = document.querySelector("[data-create]");
const buttonDestroyBoxRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const boxesArr = [];
  amount = boxAmountInputRef.value;

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      boxesArr.push(box);
    }

    boxesRef.append(...boxesArr);
  } else {
    alert("limit exceeded");
  };
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

buttonCreateBoxRef.addEventListener("click", createBoxes);
buttonDestroyBoxRef.addEventListener("click", destroyBoxes);
