const btn = document.querySelectorAll(".button");
console.log(btn);

const body = document.querySelector("body");

btn.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (chai) {
    console.log(chai.target);
    console.log(chai);
    if (chai.target.id === "red") {
      body.style.backgroundColor = "red";
    }

    if (chai.target.id === "green") {
      body.style.backgroundColor = chai.target.id;
    }

    if (chai.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }

    if (chai.target.id === "yellow") {
      body.style.backgroundColor = chai.target.id;
    }
  });
});
