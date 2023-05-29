// it retrieves a reference to an HTML <canvas> element with the id attribute set to "canvas" and assigns it to the variable canvas.

const canvas = document.getElementById("canvas");
console.log(canvas);

// it creates a drawing context for the canvas using the getContext() method. The argument "2d" passed to getContext() indicates that we want to create a 2D drawing context. This context is assigned to the variable ctx. ctx is a shorthand of contex.

let ctx = canvas.getContext("2d");

// Once you have the ctx object, you can use its various methods and properties to draw shapes, paths, images, and text on the canvas. For example, you can use ctx.fillRect() to draw a filled rectangle, ctx.drawImage() to draw an image, or ctx.fillText() to write text on the canvas.

console.log(ctx);

// scaling up the canvas allows for larger game elements such as bricks, paddle, and ball.

let scale = 5;

//By increasing the canvas width, you're effectively enlarging the game area horizontally. This can provide more space for the bricks to be positioned and the paddle to move.

canvas.width = canvas.width * scale;
console.log(canvas.width);

// By increasing the canvas height, you're effectively enlarging the game area vertically. This can provide more space for the bricks to be positioned and allow for a longer gameplay area.

canvas.height = canvas.height * scale;
console.log(canvas.height);

// This variable represents the number of lives the player has

let LIFES = 5;

//This variable indicates the current level the player is on.  The current level helps keep track of the player's progress and determines the arrangement and difficulty of the bricks.

let CURRENT_LEVEL = 1;

// This variable represents the maximum level available in the game. It defines the highest level that the player can reach. Once the player reaches this level, they may have completed the game

let MAX_LEVEL = 6;

//This creates a new Audio object called GAME_SONG. In the context of a brick breaker game

const GAME_SONG = new Audio();

//This line sets the source of the audio file for the GAME_SONG object.

GAME_SONG.src = "./assets/audio/background_music.mp3";

// These variables represent the state of the left and right arrow keys on the keyboard, respectively. In a brick breaker game, these variables are commonly used to track whether the player is pressing the corresponding arrow keys to control the movement of the paddle.

let leftArrow = false;
let rightArrow = false;

//This constant defines the height of the paddle in pixels. The paddle is a rectangular object that the player controls to bounce the ball and prevent it from hitting the bottom of the screen.

const PADDLE_HEIGHT = 20;

// This constant specifies the width of the paddle in pixels. It determines the horizontal size of the paddle, indicating how much area it covers on the game screen.

const PADDLE_WIDTH = 120;

// This constant represents the margin or empty space between the bottom of the game screen and the paddle. It helps create a visual separation between the paddle and the boundary of the gameplay area.

const PADDLE_MARGIN_BOTTOM = 12;

//This constant defines the fill color of the paddle. In this case, #fff represents white. The fill color determines the color used to paint the interior of the paddle.
const PADDLE_FILL = "#fff";

// This constant specifies the width of the stroke or outline of the paddle in pixels. It determines the thickness of the border around the paddle.

const PADDLE_STROKE_WIDTH = 2.0;

//This constant represents the color of the stroke or outline of the paddle. In this case, #807d7a is a hexadecimal color code. The stroke color defines the color used to draw the border of the paddle.

const PADDLE_STROKE = "#807d7a";
console.log(PADDLE_STROKE);

//This constant determines the speed at which the paddle moves horizontally. It represents the number of pixels the paddle will shift when the player controls its movement using the arrow keys or any other input method.

const PADDLE_SPEED = 8;

// paddle configs

// here , we use object literal notation to define the properties of the paddle.It allows for easy access and manipulation of the paddle's properties throughout the game logic.

let paddle = {
  //This line determines the initial x-coordinate of the paddle. It positions the paddle horizontally at the center of the canvas by subtracting half of the paddle's width (PADDLE_WIDTH) from half of the canvas's width (canvas.width / 2).

  x: canvas.width / 2 - PADDLE_WIDTH / 2,

  //This line determines the initial y-coordinate of the paddle. It positions the paddle vertically at the bottom of the canvas by subtracting the paddle's height (PADDLE_HEIGHT) and the margin between the paddle and the bottom of the screen (PADDLE_MARGIN_BOTTOM) from the canvas's height (canvas.height).

  y: canvas.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,

  // here, we assign property value

  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  speed: PADDLE_SPEED,
};

// Ball configs

//this code represents the ball object. The ball is the object that moves around the game screen, bouncing off the walls, bricks, and the paddle. The code uses an object literal notation to define the properties of the ball.

//This constant determines the radius of the ball. It specifies the size of the ball as a circular object.

const BALL_RADIUS = 10;

//This constant determines the initial speed of the ball. It specifies how fast the ball moves in pixels per frame or time unit.

const BALL_SPEED = 3;
const BALL_COLOR = "#00F19D";
const BALL_STROKE = "#fff ";
const BALL_STROKE_WIDTH = 5;

let ball = {
  //This line determines the initial x-coordinate of the ball. It positions the ball horizontally at the center of the canvas by assigning half of the canvas's width (canvas.width / 2) to the x property of the ball object.

  x: canvas.width / 2,

  //his line determines the initial y-coordinate of the ball. It positions the ball vertically just above the paddle by subtracting the ball's radius (BALL_RADIUS) and an additional pixel (-1) from the y-coordinate of the paddle (paddle.y).

  y: paddle.y - BALL_RADIUS - 1,
  radius: BALL_RADIUS,

  //This line indicates whether the ball is currently moving or not. It sets the initial value of the moving property to false, indicating that the ball is initially stationary.

  moving: false,

  //This line sets the initial speed of the ball in the horizontal (x) direction. It assigns the value of 0 to the speedX property of the ball object. This indicates that the ball initially has no horizontal movement.

  speedX: 0,

  //The negative value indicates that the ball moves upward (opposite to the positive y-axis direction) at a speed determined by BALL_SPEED.

  speedY: -BALL_SPEED,
};

//Brick configs

//This line sets the height of each brick to 20 pixels by assigning the value 20 to the constant BRICK_HEIGHT.

const BRICK_HEIGHT = 20;

//This line sets the width of each brick to 75 pixels by assigning the value 75 to the constant BRICK_WIDTH.

const BRICK_WIDTH = 75;

//This line sets the vertical offset between rows of bricks. It determines the distance between each row of bricks by assigning the value 30 to the constant BRICK_OFFSET_Y.

const BRICK_OFFSET_Y = 30;

//This line sets the horizontal distance between each brick in a row. It assigns the value 5 to the constant BRICK_DISTANCE_X, which determines the spacing between bricks in the x-axis.

const BRICK_DISTANCE_X = 5;

// This line sets the vertical distance between each brick in a column. It assigns the value 20 to the constant BRICK_DISTANCE_Y, which determines the spacing between bricks in the y-axis.

const BRICK_DISTANCE_Y = 20;

//These lines define various colors used to fill and stroke the different types of bricks. Each constant represents a specific color code.

const NORMAL_BRICK_FILL = "#D2E809";
const NORMAL_BRICK_STROKE = "#847101";
const MID_STRONG_BRICK_FILL = "#80097e";
const MID_STRONG_BRICK_STROKE = "#3c003b";
const STRONG_BRICK_FILL = "#00439f";
const STRONG_BRICK_STROKE = "#001351";
const SUPER_STRONG_BRICK_FILL = "#f78501";
const SUPER_STRONG_BRICK_STROKE = "#a75501";

//This line sets the stroke width for the bricks to 2.5 pixels. It assigns the value 10 to the constant BRICK_STROKE_WIDTH.

const BRICK_STROKE_WIDTH = 10;

//it  defines the brick object, which represents an individual brick. It has properties such as x, y, height, width, and lifes

let brick = {
  //set the initial position of the brick to the top-left corner of the canvas.

  x: 0,
  y: 0,
  height: BRICK_HEIGHT,
  width: BRICK_WIDTH,

  //epresents the number of lives or hits required to break the brick. The initial value is set to 0, and it will change dynamically to indicate the strength of the brick.

  lifes: 0,
};

//This line initializes an empty array called bricks. This array will store multiple brick objects, representing the collection of bricks present in the game.

let bricks = [];

//==================== LEVELS =====================

//This code defines six levels for the game, each represented by a 2-dimensional array.

//level 1 represents the first level. It has two rows, and each row contains eight bricks. The value 1 in the array represents a normal brick with one life or hit required to break it.

const level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

// level2 represents the second level. It also has two rows and eight bricks in each row. The value 2 in the array represents a slightly stronger brick that requires two hits to break, while the value 1 represents a normal brick.

const level2 = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

//level3 has three rows with eight bricks in each row. The values 3, 2, and 1 represent bricks with increasing strength, where 3 requires three hits to break, 2 requires two hits, and 1 represents a normal brick.

const level3 = [
  [3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

//level4 is similar to level3 but with an additional row of 2-strength bricks.

const level4 = [
  [3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];

//level5 introduces a pattern with different brick types. The values 3 and 2 form a pattern of alternating bricks, creating a design with different strengths.

const level5 = [
  [3, 1, 1, 3, 3, 1, 1, 3],
  [2, 3, 3, 2, 2, 3, 3, 2],
  [2, 3, 3, 2, 2, 3, 3, 2],
  [3, 1, 1, 3, 3, 1, 1, 3],
];

//level6 has a more complex pattern with multiple types of bricks. The value 4 represents a stronger brick that requires four hits to break, while the other values (3, 2, and 1) represent bricks of decreasing strength.

const level6 = [
  [3, 3, 3, 3, 3, 3, 3, 3],
  [1, 1, 4, 4, 4, 4, 1, 1],
  [2, 2, 4, 4, 4, 4, 2, 2],
  [1, 1, 4, 4, 4, 4, 1, 1],
  [3, 3, 3, 3, 3, 3, 3, 3],
];

//=================== FUNCTIONS ====================

//This line of code calls the setBricksByLevel function and passes the CURRENT_LEVEL variable as an argument. The purpose of this function is to set up the bricks for the current level of the game. It determines the arrangement and configuration of the bricks based on the specified level. The CURRENT_LEVEL variable represents the current level of the game, and by passing it as an argument to the setBricksByLevel function, the bricks for that level are set up accordingly.

setBricksByLevel(CURRENT_LEVEL);

//This line of code sets up an interval using the setInterval function. The draw function is specified as the first argument, and 10 is the delay in milliseconds between each execution of the draw function.
// The purpose of this line is to repeatedly call the draw function at regular intervals. In the context of the brick breaker game, the draw function is responsible for updating and rendering the game's elements, such as the paddle, ball, and bricks. By calling draw repeatedly with a small delay, it creates an animation effect, giving the illusion of movement and interaction within the game.

setInterval(draw, 10);

// Function to draw the game over screen
////The given code represents the draw function, which is responsible for rendering and updating various elements of the game

function draw() {
  // // This line calls the update function, which is responsible for updating the game state, including the position of the paddle, ball, and bricks.

  update();
  // This line clears the entire canvas by using the clearRect method on the 2D context (ctx). It specifies the rectangular region to clear, starting from the top-left corner (0, 0) and spanning the entire canvas width and height.

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // // These lines call separate functions (drawPaddle, drawBall, and drawBricks) to render each element of the game onto the canvas. These functions are responsible for setting the appropriate styles, positions, and dimensions of the elements and then using the 2D context methods to draw them on the canvas.

  drawPaddle();
  drawBall();
  drawBricks();

  //This line calls the showLifesLevel function, which is responsible for displaying the current number of lives and the current level on the screen. It may involve updating text elements or graphics to indicate the relevant information to the player.

  showLifesLevel();

  //These lines call the winLevel and gameOver functions to check if the player has won the current level or if the game is over, respectively. These functions may involve checking game conditions, updating the game state, and displaying appropriate messages or triggering actions accordingly.

  winLevel();
  gameOver();
}

//This  function named update that will handle the updating of the game states.

function update() {
  //hese lines call separate functions (ballWallCollision, ballPaddleCollision, and ballBrickCollision) to check for collisions between different game elements.

  ballWallCollision();
  ballPaddleCollision();
  ballBrickCollision();

  // These lines call separate functions (movePaddle and moveBall) to update the positions of the paddle and the ball, respectively.

  movePaddle();
  moveBall();

  //This line plays the game's background music stored in the GAME_SONG audio object. It triggers the play method, which starts playing the audio.

  GAME_SONG.play();
}

// Function to draw the paddle

function drawPaddle() {
  //This line begins a new path for drawing on the canvas. It prepares the canvas context (ctx) to draw a new shape.

  ctx.beginPath();

  //This line draws a rectangle on the canvas. The parameters paddle.x and paddle.y specify the top-left corner of the rectangle, paddle.width determines the width of the rectangle, and paddle.height determines the height of the rectangle. This represents the position and dimensions of the paddle.

  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);

  //These lines set the fill style for the paddle and fill the drawn rectangle with the specified fill color (PADDLE_FILL). The fill style determines the color or pattern used to fill the shape.

  ctx.fillStyle = PADDLE_FILL;
  ctx.fill();

  //   These lines set the stroke width and stroke color for the paddle and apply the stroke to the rectangle. The stroke width (PADDLE_STROKE_WIDTH) determines the thickness of the stroke, and the stroke color (PADDLE_STROKE) determines the color of the stroke.

  ctx.lineWidth = PADDLE_STROKE_WIDTH;
  ctx.strokeStyle = PADDLE_STROKE;
  ctx.stroke();

  //This line closes the current path. It connects the end point of the last drawing command to the starting point, creating a closed shape.

  ctx.closePath();
}

// Function to draw the ball
function drawBall() {
  // This line begins a new path for drawing on the canvas. It prepares the canvas context (ctx) to draw a new shape.

  ctx.beginPath();

  //This line draws a circular arc on the canvas, representing the ball. The parameters ball.x and ball.y specify the center coordinates of the arc, ball.radius determines the radius of the arc, and the angles 0 and Math.PI * 2 specify the starting and ending angles of the arc, creating a complete circle.
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);

  ctx.fillStyle = BALL_COLOR;

  ctx.strokeStyle = BALL_STROKE;
  ctx.lineWidth = BALL_STROKE_WIDTH;

  //   These lines fill the circle with the specified fill color and stroke the circle with the specified stroke color and width. The fill() method fills the shape with the fill color, and the stroke() method outlines the shape with the stroke color and width

  ctx.fill();
  ctx.stroke();

  //This line closes the current path. It connects the end point of the last drawing command to the starting point, creating a closed shape.

  ctx.closePath();
}

// Function that treats when the ball hits the wall
function ballWallCollision() {
  //This if statement checks if the ball's position plus its radius exceeds or equals the width of the canvas. If it does, it means the ball has collided with the right wall. In this case, the ball.speedX is multiplied by -1 to reverse the horizontal direction of the ball's movement. Taking the absolute value of ball.speedX ensures that the ball continues to move in the same speed regardless of its previous direction.

  if (ball.x + ball.radius >= canvas.width) {
    ball.speedX = -Math.abs(ball.speedX);
  }
  //This if statement checks if the ball's position minus its radius is less than or equal to zero. If it is, it means the ball has collided with the left wall. In this case, the ball.speedX is multiplied by 1 (or Math.abs(ball.speedX) can be used as well) to keep the same magnitude of the speed but reverse its direction.

  if (ball.x - ball.radius <= 0) {
    ball.speedX = Math.abs(ball.speedX);
  }

  //This if statement checks if the ball's position minus its radius is less than zero, indicating a collision with the ceiling. In this case, the ball.speedY is multiplied by -1 to reverse the vertical direction of the ball's movement.

  if (ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
  }

  // This if statement checks if the ball's position plus its radius exceeds or equals the height of the canvas. If it does, it means the ball has collided with the floor. In this case, the loseLife() function is called, which typically reduces the player's remaining lives or performs some game-related actions when the ball touches the bottom.

  if (ball.y + ball.radius >= canvas.height) {
    loseLife();
  }
}

// Function that treats when the player loses a life
function loseLife() {
  LIFES--; // Lose Life
  resetBall();
}

// Function that resets the ball when the player loses a life
function resetBall() {
  //This line sets the x coordinate of the ball to the horizontal center of the canvas. It calculates the position by taking the canvas width and subtracting half of the ball's radius.

  ball.x = canvas.width / 2 - BALL_RADIUS / 2;

  //This line sets the y coordinate of the ball just above the paddle. It positions the ball vertically above the paddle by subtracting the ball's radius and a small additional distance from the y coordinate of the paddle.

  ball.y = paddle.y - BALL_RADIUS - 1;

  //This line sets the moving property of the ball to false. It indicates that the ball is not currently in motion and needs to be launched by the player.

  ball.moving = false;

  //These lines reset the horizontal and vertical speeds of the ball. In this case, the horizontal speed (speedX) is set to 0, meaning the ball will not move horizontally. The vertical speed (speedY) is set to a negative value of BALL_SPEED, which determines the direction and magnitude of the ball's upward movement.

  ball.speedX = 0;
  ball.speedY = -BALL_SPEED;
}

// Function that treats when the ball hits the paddle

function ballPaddleCollision() {
  if (
    //This condition checks if the ball's boundaries overlap with the paddle's boundaries, indicating a collision between the two.

    //////////////////  Example 1   //////////////////

    // Assume ball has a radius of 10.

    // Assume paddle has a width of 100 and a height of 15.

    // Let's consider the following positions:

    // ball.x = 400
    // ball.y = 300
    // paddle.x = 350
    // paddle.y = 320

    // Plugging these values into the conditions:

    // ball.x + ball.radius = 400 + 10 = 410 >= paddle.x = 350 (True)
    // ball.x - ball.radius = 400 - 10 = 390 <= paddle.x + paddle.width = 350 + 100 = 450 (True)
    // ball.y + ball.radius = 300 + 10 = 310 >= paddle.y = 320 (False)
    // ball.y - ball.radius = 300 - 10 = 290 <= paddle.y + paddle.height = 320 + 15 = 335 (True)

    // In this example, the conditions are not entirely met because the ball's vertical position (ball.y) does not fall within the paddle's vertical range.

    ///////////////// Example 2:  ////////////////

    // Assume the same values for ball and paddle as in Example 1.

    // Let's consider the following positions:

    // ball.x = 400
    // ball.y = 330
    // paddle.x = 350
    // paddle.y = 320

    // Plugging these values into the conditions:

    // ball.x + ball.radius = 400 + 10 = 410 >= paddle.x = 350 (True)
    // ball.x - ball.radius = 400 - 10 = 390 <= paddle.x + paddle.width = 350 + 100 = 450 (True)
    // ball.y + ball.radius = 330 + 10 = 340 >= paddle.y = 320 (True)
    // ball.y - ball.radius = 330 - 10 = 320 <= paddle.y + paddle.height = 320 + 15 = 335 (True)

    // In this example, all the conditions are met, as the ball's position falls within the range of the paddle both horizontally and vertically.

    ball.x + ball.radius >= paddle.x &&
    ball.x - ball.radius <= paddle.x + paddle.width &&
    ball.y + ball.radius >= paddle.y &&
    ball.y - ball.radius <= paddle.y + paddle.height
  ) {
    //This line calculates the angle of reflection for the ball based on its collision position with the paddle. It subtracts a value from 150 degrees based on the horizontal distance between the ball's center (ball.x) and the paddle's left side (paddle.x), scaled down by the paddle's width (PADDLE_WIDTH). This calculation determines the angle at which the ball will be redirected upon collision.

    /////////////Example 1:  //////////////////

    // suppose , angle = 150 - ((ball.x - paddle.x) * 120) / PADDLE_WIDTH;

    //     = 150 - ((300 - 200) * 120) / 100;
    //     = 150 - (100 * 120) / 100;
    //     = 150 - 120;
    //     = 30;

    let angle = 150 - ((ball.x - paddle.x) * 120) / PADDLE_WIDTH;

    console.log(ball.x);
    console.log(paddle.x);
    console.log(angle);

    // ball.speedX = BALL_SPEED * cos(angle)

    // The Math.cos() function is used to calculate the cosine of an angle. The angle is provided in radians, so (angle * Math.PI) / 180 is used to convert the angle from degrees to radians.

    // Therefore, the speedX component of the vector represents the horizontal component of the ball object's speed. It determines how fast the ball is moving horizontally based on the given angle.

    /////////////////   Example 1:  ///////////////

    // Assume BALL_SPEED is 5 (arbitrary value).
    // Assume angle is 45 degrees.
    // Plugging these values into the formula:
    // ball.speedX = 5 * Math.cos((45 * Math.PI) / 180)
    // To calculate ball.speedX:

    // Convert the angle from degrees to radians: 45 * Math.PI / 180 = 0.7854 radians.
    // Use the Math.cos() function to find the cosine of the angle: Math.cos(0.7854) = 0.7071.
    // Multiply the result by BALL_SPEED: 0.7071 * 5 = 3.5355.
    // Therefore, in this example, ball.speedX would be approximately 3.5355.

    ////////////////// Example 2:////////////////////

    // Assume BALL_SPEED is 2 (arbitrary value).
    // Assume angle is 60 degrees.
    // Plugging these values into the formula:
    // ball.speedX = 2 * Math.cos((60 * Math.PI) / 180)
    // To calculate ball.speedX:

    // Convert the angle from degrees to radians: 60 * Math.PI / 180 = 1.0472 radians.
    // Use the Math.cos() function to find the cosine of the angle: Math.cos(1.0472) = 0.5.
    // Multiply the result by BALL_SPEED: 0.5 * 2 = 1.
    // Therefore, in this example, ball.speedX would be 1.

    // These examples demonstrate how the Math.cos() function is used to calculate the horizontal speed (ball.speedX) based on the given angle. The angle is converted from degrees to radians before passing it to the Math.cos() function. The resulting value is then multiplied by BALL_SPEED to determine the final horizontal speed.

    ball.speedX = BALL_SPEED * Math.cos((angle * Math.PI) / 180);

    // ball.speedY = -BALL_SPEED * sin(angle)

    // The Math.sin() function is used to calculate the sine of an angle. Again, the angle is provided in radians.

    // The negative sign in front of BALL_SPEED indicates that the speedY component is negated. This is often done to align the coordinate system where positive values of speedY represent upward movement.

    // Therefore, the speedY component of the vector represents the vertical component of the ball object's speed. It determines how fast the ball is moving vertically based on the given angle.

    ////////////////    Example 1:  ///////////////////

    // Assume BALL_SPEED is 5 (arbitrary value).
    // Assume angle is 30 degrees.
    // Plugging these values into the formula:
    // ball.speedY = -5 * Math.sin((30 * Math.PI) / 180)
    // To calculate ball.speedY:

    // Convert the angle from degrees to radians: 30 * Math.PI / 180 = 0.5236 radians.
    // Use the Math.sin() function to find the sine of the angle: Math.sin(0.5236) = 0.5.
    // Multiply the result by -BALL_SPEED: 0.5 * -5 = -2.5.
    // Therefore, in this example, ball.speedY would be approximately -2.5.

    // ///////////  Example 2:////////////////////

    // Assume BALL_SPEED is 3 (arbitrary value).
    // Assume angle is 90 degrees.
    // Plugging these values into the formula:
    // ball.speedY = -3 * Math.sin((90 * Math.PI) / 180)
    // To calculate ball.speedY:

    // Convert the angle from degrees to radians: 90 * Math.PI / 180 = 1.5708 radians.
    // Use the Math.sin() function to find the sine of the angle: Math.sin(1.5708) = 1.
    // Multiply the result by -BALL_SPEED: 1 * -3 = -3.
    // Therefore, in this example, ball.speedY would be -3.

    // These examples demonstrate how the Math.sin() function is used to calculate the vertical speed (ball.speedY) based on the given angle. The angle is converted from degrees to radians before passing it to the Math.sin() function. The resulting value is then multiplied by -BALL_SPEED to determine the final vertical speed.

    ball.speedY = -BALL_SPEED * Math.sin((angle * Math.PI) / 180);
  }
}
