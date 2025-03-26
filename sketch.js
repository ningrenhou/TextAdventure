let nameInput;
let button;
let greeting;
let user = "";

function preload() {
  font = loadFont('Inconsolata_Condensed-Bold.ttf');
}

function setup() {
  createCanvas(710, 400, WEBGL);
  textFont(font);
  textSize(60);
  textAlign(CENTER, CENTER);

  greeting = createElement('h2', 'Animate Your Name');
  greeting.position(25, 5);

  nameInput = createInput();
  nameInput.position(20, 65);

  button = createButton('Refresh');
  button.position(nameInput.x + nameInput.width, 90);
  button.mousePressed(() => location.reload()); 

  button = createButton('Enter your name');
  button.position(nameInput.x + nameInput.width, 65);
  button.mousePressed(greet);
}

function greet() {
  let name = nameInput.value(); 
  user = nameInput.value();
  greeting.html(`Hello, ${name}!`);
  nameInput.value(''); 
}

function draw() {
  background(255);
  let angle = frameCount * 0.02;
  rotateY(angle);
  fill(0);
  text(user, 0, 0); 
}

// Reference: 
// https://p5js.org/reference/p5/createButton/
// https://p5js.org/reference/p5/input/
// https://p5js.org/reference/p5/text/
// https://p5js.org/examples/input-elements-input-button/
// https://p5js.org/reference/p5/rotateY/
