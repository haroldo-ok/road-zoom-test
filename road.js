'use strict';

(function(){
  var roadImage = new Image();
  roadImage.onload = function(){
    var canvas = document.getElementById('game-canvas'),
        scrW = canvas.width,
        scrH = canvas.height,
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

    ctx.drawImage(roadImage, 0, 0, imgPartW, imgPartH, 0, 0, imgPartW, imgPartH);
  };
  roadImage.src = 'road04_13.png';
})();
