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

//Arc (circular)
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2, true);
ctx.fill();
