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
    // no_resume.style.visibility = "hidden";
  }
}





(function() {
  const el = document.querySelector('.typewriter h1');
  if (!el) return;

  // 1) Get trimmed text content for basic char count
  const text = el.textContent || el.innerText || '';
  const chars = Math.max(1, text.length);

  // 2) Temporarily make the element auto-width to measure it
  const originalWidth = el.style.width;
  const originalDisplay = el.style.display;

  el.style.width = 'auto';
  el.style.display = 'inline-block'; // ensure measurable
  // Use getBoundingClientRect for accurate rendered width (includes letter-spacing, emoji etc.)
  const rect = el.getBoundingClientRect();
  const measuredWidth = Math.ceil(rect.width); // integer pixels for nice animation

  // 3) Restore starting width and set CSS vars used by CSS animations
  el.style.width = originalWidth || '0px';
  el.style.display = originalDisplay || 'inline-block';
  el.style.setProperty('--textWidth', measuredWidth + 'px');
  el.style.setProperty('--chars', chars);

  // 4) Add blinking during typing
  el.classList.add('blink');

  // 5) When the typing animation finishes, stop the blinking and fix final width
  // Use animationend and check the animationName === 'typing'
  el.addEventListener('animationend', function(e) {
    if (e.animationName === 'typing') {
      // stop blink and keep final width
      el.classList.remove('blink');
      el.classList.add('done');
      el.style.width = measuredWidth + 'px';
    }
  }, { once: true });

  // Optional: fallback in case animationend is missed (safety)
  const typeduration = 2500; // match CSS typing duration (ms)
  setTimeout(() => {
    if (!el.classList.contains('done')) {
      el.classList.remove('blink');
      el.classList.add('done');
      el.style.width = measuredWidth + 'px';
    }
  }, typeduration + 150);
})();