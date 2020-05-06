window.addEventListener("DOMContentLoaded", function () {
  var delay = 300;
  document.querySelectorAll(".level-bar-inner").forEach(function (bar) {
    animateFill(bar, bar.dataset.level, 7, delay);
    delay += 100;
  });
});

function animateFill(element, level, speed, delay) {
  setTimeout(function () {
    var progress = 0;
    function frame() {
      progress++;
      element.style.width = progress + "%";
      if (progress == level) {
        clearInterval(fill);
      }
    }
    var fill = setInterval(frame, speed);
  }, delay);
}
