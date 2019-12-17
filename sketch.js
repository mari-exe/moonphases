// Color key Moon d8e3e1; Cover 222c33; Text b3ad70; Stars f4f4f4;

var newmoon=350;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background("#222c33");
 //Title
  fill("#b3ad70")
  textSize(30);
  textFont("Times New Roman");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Southern Hemisphere Moon Phases",250,100);

//These are stars
  fill("#f4f4f4");
  stroke("#9284B6");
  strokeWeight(0);
  ellipse(random(width),random(height),1,1);
//This moon stays still
  fill("#d8e3e1");
  stroke("#222c33");
  strokeWeight(5);
  ellipse(250,250,100,100);

//This moon moves
  fill("#222c33");
  stroke("#222c33");
  strokeWeight(0);
  ellipse(newmoon,250,100,100);

}
//This makes the moon move and then reset
function mousePressed(){
  if (newmoon<200) {newmoon=350;}
  else {newmoon=newmoon-25
}
}