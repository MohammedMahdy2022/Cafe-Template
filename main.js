let eat = document.querySelector(".eat");
let drink = document.querySelector(".drink");
let activeContent = document.querySelector(".active");
let notActiveContent = document.querySelector(".notActive");

// console.log(eat);
// console.log(drink);
// console.log(activeContent);
// console.log(notActiveContent);


window.onload = notActiveContent.style.display = "none";
window.onload = activeContent.style.display = "block";
window.onload = eat.classList.add("active");

eat.onclick = function (e) {

    activeContent.style.display = "block";

    eat.classList.add("active");

    drink.classList.remove("active");

    notActiveContent.style.display = "none";

}

drink.onclick = function (e) {

    notActiveContent.style.display = "block";

    drink.classList.add("active");

    eat.classList.remove("active");

    activeContent.style.display = "none";

}

