let video;
let overlayImage;

function preload() {
  overlayImage = loadImage("overlay.png"); // Your transparent image
}

function setup() {
  let canvas = createCanvas(390, 844);
  canvas.position(0, 0);

  video = createCapture({
    video: { facingMode: { ideal: "environment" } },
    audio: false
  });
  video.size(390, 844);
  video.hide();
}

function draw() {
  image(video, 0, 0, 390, 844);

  // Place overlay in the bottom half, centered
  let overlayW = 390;
  let overlayH = overlayImage.height * (390 / overlayImage.width);
  let yOffset = 422 + (422 - overlayH) / 2;
  image(overlayImage, 0, yOffset, overlayW, overlayH);
}
