'use strict';

(function(){
  var roadImage = new Image();
  roadImage.onload = function(){
    var canvas = document.getElementById('game-canvas'),
        scrW = canvas.width,
        scrH = canvas.height,
        scrDepth = scrW,
        centerX = scrW / 2,
        centerY = scrH / 2,
        imgW = roadImage.width,
        imgH = roadImage.height,
        imgPartW = imgW / 2,
        imgPartH = imgH / 4,
        ctx = canvas.getContext('2d');

    canvas.mozImageSmoothingEnabled = false;
    canvas.webkitImageSmoothingEnabled = false;
    canvas.msImageSmoothingEnabled = false;
    canvas.imageSmoothingEnabled = false;

    ctx.fillRect(0, 0, scrW, scrH);

    function drawRoadSlice(scale, number) {
      var destW = imgPartW * scale,
          destH = imgPartH * scale,
          destX = centerX - destW / 2,
          destY = centerY - destH / 2;

      destY = centerY - destH / 4;

      ctx.drawImage(roadImage, 0, imgPartH * number, imgPartW, imgPartH,
                    destX, destY, destW, destH);
    }

    var roadSlices = [];
    for (var z = scrDepth; z >= 1; z -= (scrDepth / 20)) {
      roadSlices.push({
        z: z,
        number: Math.floor(Math.random() * 4)
      });
    }

    var prevTime = new Date().getTime();
    var speedFactor = 128 / 1000;
    function processFrame(){
      var currTime = new Date().getTime();
      var delta = currTime - prevTime;

      ctx.fillRect(0, 0, scrW, scrH);

      // Moves the road slices
      roadSlices.forEach(function(slice){
        slice.z -= speedFactor * delta

        // If it's behind the screen, pushes it back
        while (slice.z <= 0) {
          slice.z += scrDepth;
        }
      });
      roadSlices.sort(function(a, b){ return b.z - a.z });

      // Draws the road slices
      roadSlices.forEach(function(slice){
        var scale = scrDepth / (slice.z * 4);
        drawRoadSlice(scale, slice.number);
      });

      prevTime = currTime;
      requestAnimationFrame(processFrame);
    }

    requestAnimationFrame(processFrame);
  };
  roadImage.src = 'road04_13.png';
})();
