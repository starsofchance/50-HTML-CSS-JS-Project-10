const textareaEl = document.getElementById("textarea");
const actualAgeEl = document.getElementById("actualAge");
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  var age = textareaEl.value;
  console.log(age);
  if (age < 30) {
    realAge = age - 30;
    age = 30 - age;
    actualAgeEl.innerText =
      "You are " +
      realAge +
      " Years old. Your Life Will Start " +
      age +
      " Year From Now!";
  } else if (age == 30) {
    actualAgeEl.innerText = "Your life has just begun. Don't fuck it up!";
  } else {
    age = age - 30;
    actualAgeEl.innerText = "You are " + age + " years old.";
  }
}
