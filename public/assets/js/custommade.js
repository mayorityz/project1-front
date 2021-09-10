let toggle = document.querySelectorAll(".d_type");

for (let i = 0; i < toggle.length; i++) {
  const element = toggle[i];
  element.addEventListener("click", () => {
    // remove all the class name =checked
    for (let j = 0; j < toggle.length; j++) {
      const element = toggle[j];
      element.classList.remove("checked");
    }
    element.classList.add("checked");
  });
}

// ---->>>>

let initialBtn = document.querySelectorAll("#initial");
let secondBtn = document.querySelectorAll("#second_btn");
let thirdBtn = document.querySelectorAll("#third_btn");

let initialForm = document.querySelector(".donation_selection");
let secondForm = document.querySelector(".how_to_donate");
let thirdForm = document.querySelector(".user_info_payment_field");
let fourthForm = document.querySelector(".payment_details_option");

initialBtn[0].addEventListener("click", () => {
  initialForm.style.display = "none";
  secondForm.style.display = "block";
});

secondBtn[0].addEventListener("click", () => {
  secondForm.style.display = "none";
  console.log(thirdForm);
  thirdForm.style.display = "block";
});

thirdBtn[0].addEventListener("click", () => {
  thirdForm.style.display = "none";
  fourthForm.style.display = "block";
});
