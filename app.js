// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else{
//             entry.target.classList.remove('show');
//         }
//     })
// });


// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

AOS.init();

var no_resume = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == no_resume) {
    no_resume.style.display = "none";
  }
}