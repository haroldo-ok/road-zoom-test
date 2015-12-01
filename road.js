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

      ctx.drawImage(roadImage, 0, imgPartH * number, imgPartW, imgPartH,
                    destX, destY, destW, destH);
    }

    drawRoadSlice(0.5, 0);
    /*
    for (var z = scrDepth; z >= 1; z -= 4) {
      var scale = 1.0 * scrDepth / (z * scrDepth);
      drawRoadSlice(scale, 0);
    }
    */
  };
  roadImage.src = 'road04_13.png';
})();
