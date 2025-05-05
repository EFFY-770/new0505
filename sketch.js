function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Color-code based on left or right hand
  if (hand.handedness == "Left") {
    fill(255, 0, 255);
  } else {
    fill(255, 255, 0);
  }

  noStroke();
  circle(keypoint.x, keypoint.y, 16);
}

// Check if the index finger (keypoint 8) is touching the circle
let indexFinger = hand.keypoints[8];
if (dist(indexFinger.x, indexFinger.y, circle.x, circle.y) <= circle.radius) {
  // Update circle position to follow the index finger
  circle.x = indexFinger.x;
  circle.y = indexFinger.y;
  circle.isMoving = true;

  // Add the current position to the trail
  trail.push({ x: circle.x, y: circle.y });
} else {
  circle.isMoving = false;
}
