$(document).ready(function () {
  var $body = $('body'),
      sensitivity = 10;

  function tilt (args) {
    var scrollLeft = null;

    if(args[1] > 7)
      {scrollLeft = $body.scrollLeft() - sensitivity;}
    if(args[1] < -7)
      {scrollLeft = $body.scrollLeft() + sensitivity;}

    console.log(scrollLeft);

    if(scrollLeft) {
      $body.scrollLeft(scrollLeft);
    }
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
