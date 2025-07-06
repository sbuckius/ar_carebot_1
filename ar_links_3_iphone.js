let video;
let overlayImage;

function preload() {
  overlayImage = loadImage("overlay.png"); // Your transparent image
}

function setup() {
  let canvas = createCanvas(375, 812);
  canvas.position(0, 0);

  video = createCapture({
    video: { facingMode: { ideal: "environment" } },
    audio: false
  });
  video.size(375, 812);
  video.hide();
}

function draw() {
  image(video, 0, 0, 375, 812);

  // Place overlay in the bottom half, centered
  let overlayW = 375;
  let overlayH = overlayImage.height * (375 / overlayImage.width);
  let yOffset = 406 + (406 - overlayH) / 2;
  image(overlayImage, 0, yOffset, overlayW, overlayH);
}
