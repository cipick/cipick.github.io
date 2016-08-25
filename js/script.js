$(document).ready(function () {
  var $body = $('body'),
      sensitivity = 5;

  function tilt (args) {

    if(args[1] > 10)
      {scrollLeft = $body.scrollLeft() + sensitivity;}
    if(args[1] < -10)
      {scrollLeft = $body.scrollLeft() - sensitivity;}

    console.log(scrollLeft);
    document.getElementById('log').innerHTML = scrollLeft;

    $body.scrollLeft(scrollLeft);
    // $body.animate({
    //   scrollLeft: scrollLeft
    // }, 200);
  }

  window.tilt = tilt;

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
