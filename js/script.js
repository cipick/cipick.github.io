function tilt (args) {
  document.body.scrollLeft += Math.floor(args[1] * 5 + 400);
  document.getElementById('log').innerHTML = Math.floor(args[1]);
  // var tiltElement = document.getElementById('baloon-1');
  // tiltElement.style.transform = "rotateX(" + (-Math.floor(args[0])) + "deg) rotateY(" + (-Math.floor(args[1])) + "deg)";
  document.getElementById('svg-object').style.transform = "translateX(" + (Math.floor(args[0] + 300)) + "deg)";

  // document.getElementById('svg-object').style.transform = 'translateX(' + (Math.floor(x)) + 'px)';
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
