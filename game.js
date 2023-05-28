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
