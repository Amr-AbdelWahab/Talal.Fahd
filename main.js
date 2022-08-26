// go Up Button

let up = document.querySelector(".goUp");

window.onscroll = function () {
  console.log(this.scrollY);

  this.scrollY >= 300
    ? up.classList.add("UpShow")
    : up.classList.remove("UpShow");
};

// up.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
