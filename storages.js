
localStorage.setItem("name", "Bharath");
console.log(localStorage.getItem("name")); 
//localStorage.removeItem("name");

sessionStorage.setItem("topic","js");
console.log(sessionStorage.getItem("topic"));

document.cookie = "username=Bharath; expires=Tue, 31 Dec 2026 12:00:00 UTC; path=/";
console.log("All cookies:", document.cookie);

// const showBtn = document.getElementById("show");
// const clearBtn = document.getElementById("clear");
// const output = document.getElementById("cookie-value");

// document.cookie = "name=Bharath; SameSite=None;";
// document.cookie = "favorite_food=Biryani; SameSite=None;";

// showBtn.addEventListener("click", () => {
//   output.textContent = `> ${document.cookie}`;
// });
// clearBtn.addEventListener("click", () => {
//   output.textContent = "";
// });
