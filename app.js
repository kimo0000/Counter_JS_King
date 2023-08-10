const count = document.querySelector(".count");
const btns = document.querySelectorAll("button");

let counter = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.id === "minus") {
      counter--;
    } else if (e.currentTarget.id === "plus") {
      counter++;
    } else {
      counter = 0;
    }

    count.textContent = counter;

    if (counter < 0) {
      count.style.color = "red";
    }

    if (counter > 0) {
      count.style.color = "green";
    }

    if (counter === 0) {
      count.style.color = "black";
    }
  });
});
