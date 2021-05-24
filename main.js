alert("This project is made only for educational purposes. *I am not collecting anyone data.")

let SubmitBtn = document.querySelector("#submit");
SubmitBtn.addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  alert(`Hi, ${name} thanks for visiting. *I am not collecting anyone data.`)
})