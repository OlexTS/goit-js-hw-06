const validatedInputRef = document.querySelector("#validation-input");

const onInputFocusOut = () => {
  if (validatedInputRef.value.length >= validatedInputRef.dataset.length) {
    validatedInputRef.classList.add("valid");
    validatedInputRef.classList.remove("invalid");
  } else {
    validatedInputRef.classList.add("invalid");
    validatedInputRef.classList.remove("valid");
  }
};
validatedInputRef.addEventListener("blur", onInputFocusOut);
