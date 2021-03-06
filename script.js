const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// //fillRect()
// //Can use hex or rgba as well
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);

// //strokeRect()
// //Outline of rectangle
// ctx.lineWidth = 5;
// ctx.strokeStyle = "green";
// ctx.strokeRect(100, 200, 150, 100);

// //clearRect()
// //Clear out portion of rectangle on canvas
// ctx.clearRect(25, 25, 140, 90);

// //fillText()
// ctx.font = "30px Arial";
// ctx.fillStyle = "purple";
// ctx.fillText("Canvas is cool!", 400, 50);

// //strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = "orange";
// ctx.strokeText("Hello World!", 400, 100);

// //Paths
// //Drawing lines to coordinates
// //Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// //Has same effect as line above
// //ctx.closePath();
// ctx.fillStyle = "coral";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.fillStyle = "coral";
// ctx.fill();

// //Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = "teal";
// ctx.fill();

// //Arc (circular)
// //Draw a smile!
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// ctx.beginPath();
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2, true);

// //Move to mouth of smile
// ctx.moveTo(centerX + 100, centerY);

// //Draw the mouth smile
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// //Move to left eye
// ctx.moveTo(centerX - 60, centerY - 80);

// //Draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// //Move to right eye
// ctx.moveTo(centerX + 100, centerY - 80);

// //Draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// //Quadratic curve
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);

// ctx.stroke();

//Animations

//Animation 1 - Bouncing circle
//dx, dy are increments of movement on those axes
// const circle1 = {
//   x: 200,
//   y: 200,
//   size: 30,
//   dx: 5,
//   dy: 4
// };

// function drawCircle(circle) {
//   ctx.beginPath();
//   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   ctx.fillStyle = "purple";
//   ctx.fill();
// }

// function updateCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(circle1);

//   //Change position of circle
//   circle1.x += circle1.dx;
//   circle1.y += circle1.dy;

//   //Detect edge of canvas for canvas
//   //edge collision detection

//   //Detect side walls
//   if (circle1.x + circle1.size > canvas.width || circle1.x - circle1.size < 0) {
//     circle1.dx *= -1;
//   }

//   //Detect top and bottom walls
//   if (
//     circle1.y + circle1.size > canvas.height ||
//     circle1.y - circle1.size < 0
//   ) {
//     circle1.dy *= -1;
//   }

//   requestAnimationFrame(updateCanvas);
// }

// updateCanvas();

//Animation 2 - Character
//Make sure to add your own image source into index.html image tag
const image = document.getElementById("source");
const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function setNewPosition() {
  player.x += player.dx;
  player.y += player.dy;
  detectWalls();
}

function detectWalls() {
  //Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  //Right wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  //Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  //Bottom wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}

function keyDown(e) {
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyUp(e) {
  if (
    e.key === "ArrowRight" ||
    e.key === "Right" ||
    e.key === "ArrowLeft" ||
    e.key === "Left" ||
    e.key === "ArrowUp" ||
    e.key === "Up" ||
    e.key === "ArrowDown" ||
    e.key === "Down"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

function updatePlayer() {
  clearCanvas();
  drawPlayer();
  setNewPosition();
  requestAnimationFrame(updatePlayer);
}

updatePlayer();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
