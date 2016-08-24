$(document).ready(function () {
  function tilt (args) {
    document.getElementById('log').innerHTML = args[1];
    
    $('html, body').animate({
      scrollLeft: $('html, body').offset().left - ( $(window).width() - $('html, body').outerWidth(true) ) / 2 + args[1]
    }, 200);

  }

  if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", function () {
          tilt([event.beta, event.gamma]);
      }, true);
  } else if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function () {
          tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
      }, true);
  } else {
      window.addEventListener("MozOrientation", function () {
          tilt([orientation.x * 50, orientation.y * 50]);
      }, true);
  }
});
