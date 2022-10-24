const formRef = document.querySelector(".login-form");

const onHandleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("Please fill in all the fields!");
  } else {
    const objInfo = {
      email: email.value,
      password: password.value,
    };
    console.table(objInfo);
    event.currentTarget.reset();
  }
};
formRef.addEventListener("submit", onHandleSubmit);
