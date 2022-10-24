function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const changeColorBtnRef = document.querySelector(".change-color");
const colorTextNameRef = document.querySelector(".color");

const onChangeBgClr = () => {
  colorTextNameRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = colorTextNameRef.textContent;
};
changeColorBtnRef.addEventListener("click", onChangeBgClr);
