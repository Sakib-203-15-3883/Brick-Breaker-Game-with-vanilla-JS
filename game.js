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
