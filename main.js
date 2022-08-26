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


//HAM ICON
let hamIcon = document.querySelector(".hamIcon");
let mob = document.querySelector(".mob");
console.log(hamIcon);
console.log(mob);

hamIcon.addEventListener('click', () =>  {
    console.log("sss");
    mob.classList.toggle("mobShow");
    
});


var list = Array.from(document.querySelectorAll('.mob li'));
console.log(list);
    list.forEach(function(){
        this.addEventListener('click', () => {
            mob.classList.toggle("mobShow");
            console.log("clicked");
        });
    });


// list.forEach(function () {
//     this.addEventListener('click', () =>  {
//         mob.classList.toggle("mobShow");
// });

