// window.addEventListener("load", function () {
//   const loader = document.getElementById("loader-wrapper");
//   const content = document.getElementById("main-content");

//   // Hide loader and show content
//   loader.style.display = "none";
//   content.style.display = "block";
// });


// $(window).on("load",function() {
// $(".container").fadeOut("slow");|
// });


// window.addEventListener("load", function () {
//   document.getElementById("loader-wrapper").style.display = "none";
//   document.getElementById("main-content").style.display = "block";
// });


//   window.addEventListener("load", function () {
//   const loader = document.getElementById("loader-wrapper");
//   const content = document.getElementById("main-content");

//   // Smooth fade-out effect
//   loader.style.opacity = "0";

//   // Wait for transition to complete
//   setTimeout(() => {
//     loader.style.display = "none";
//     content.style.display = "block";
//   }, 1000); // match CSS transition duration
// });

// window.addEventListener("load", function () {
//   const loader = document.getElementById(".loader-container");
//   const content = document.getElementById(".main-content");

//   // Smooth fade-out effect
//   loader.style.opacity = "3";

//   // Wait for transition to complete
//   setTimeout(() => {
//     loader.style.display = "none";
//     content.style.display = "block";
//   }, 10); // match CSS transition duration
// });


window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-container");
  const content = document.querySelector(".main-content");

  loader.style.display = "none";      // Hide loader
  content.style.display = "block";    // Show main content
});
