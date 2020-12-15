let img;
let bg;
let snowflakes = [];

function setup() {
  createCanvas(591, 477);
  bg = loadImage("https://ajoyksarkar2013.github.io/ajoyksarkareportfolio/images/BeautifulTree.gif");
}


function draw() {
  background(220)
  image(bg,0,0);  
  
  //snow flake starts
   fill(255);
   noStroke();
  let t = frameCount / 60; // frame time

  //a random number of snowflakes
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // snowflake object
  }

  // snowflakes loop
  for (let flake of snowflakes) {
    flake.update(t); //snowflake position
    flake.display(); 
  }
}
// class snowflake
function snowflake() {
  // initial feilds
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // snowflake radius
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // y position snowflakes falls
    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
 text ("It's snowing",400,300);
  
}