//  The remaining javascript is for the script tag

 const head = document.querySelector(".header");
 const headmq = document.querySelector(".headericon");

 
 const fixedhead = document.querySelector(".fixednav");


window.addEventListener ("scroll", function () {
const headheight = head.getBoundingClientRect().height;
const headheightmq = headmq.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;


if (scrollHeight > headheight){
   head.classList.add("fixed-nav");
   headmq.classList.add("fixed-nav");
}
else{
 head.classList.remove("fixed-nav"); 
 headmq.classList.remove("fixed-nav"); 
}
})

// menu toggle

function menutoggle(){
	const display = document.querySelector("#menuItemm")
	display.style.visibility = "visible"
	display.style.animation = "slideInFromLeft 0.7s ease-in-out";
	

}


var iconn = document.getElementById("tryicon");
iconn.addEventListener("click", function() {
	const display = document.querySelector("#menuItemm")
	display.style.animation = "slideOutFromRight 3s ease-in-out";
	display.style.visibility = "hidden"
});
