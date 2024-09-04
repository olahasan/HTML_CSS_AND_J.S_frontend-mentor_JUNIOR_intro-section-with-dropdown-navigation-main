// let Features = document.getElementById("Features");
// let Company = document.getElementById("Company");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let list = document.getElementById("list");
// let icon = document.getElementById("icon");
// let buttons = document.getElementById("buttons");
// console.log(Features);
// console.log(Company);
// console.log(box3);
// console.log(box4);
// console.log(list);
// console.log(icon);
// console.log(buttons);

// Company.onclick = function () {
//   console.log(box3);
//   box3.classList.toggle("hidden");
// };
// Features.onclick = function () {
//   console.log(box4);
//   box4.classList.toggle("hidden");
// };

// icon.onclick = function () {
//   list.style.display = "block";
//   buttons.style.display = "block";
// };

// Get elements by their IDs
const Features = document.getElementById("Features");
const Company = document.getElementById("Company");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const list = document.getElementById("list");
const icon = document.getElementById("icon");
const buttons = document.getElementById("buttons");

// Get arrow images inside list items
const featureArrow = Features.querySelector("img");
const companyArrow = Company.querySelector("img");

// Debugging: Log elements to the console
console.log(Features);
console.log(Company);
console.log(box3);
console.log(box4);
console.log(list);
console.log(icon);
console.log(buttons);
console.log(featureArrow);
console.log(companyArrow);

// Event delegation to handle click events
document.addEventListener("click", function (event) {
  if (event.target.matches("#Company") || event.target === companyArrow) {
    // Toggle visibility of the Company dropdown
    box3.classList.toggle("hidden");
    // Rotate the arrow
    companyArrow.classList.toggle("rotate");
  } else if (
    event.target.matches("#Features") ||
    event.target === featureArrow
  ) {
    // Toggle visibility of the Features dropdown
    box4.classList.toggle("hidden");
    // Rotate the arrow
    featureArrow.classList.toggle("rotate");
  } else if (event.target.matches("#icon")) {
    // Toggle visibility of the navigation list and buttons
    if (list.style.display === "block" && buttons.style.display === "block") {
      list.style.display = "none";
      buttons.style.display = "none";
    } else {
      list.style.display = "block";
      buttons.style.display = "block";
    }
  }
});
