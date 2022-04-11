function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}
let rot=0;
function draw () {
  background (0);
  translate(width/2, height/2);
  rectMode(CENTER);
  for (let i=0; i<30; i++) {
    rotate(radians((mouseX-width/2)*0.02+rot));
    fill(i*9, 140-i*2, i*50, 30);
    stroke(255,30);
    strokeWeight(1.5);
    let d = 300 - i*10;
    beginShape();
    for (let j=0; j<=300; j++) {
      let d2 = d + (10-i)*sin(radians(j*12));
      let x = d2*cos(radians(j*1));
      let y = d2*sin(radians(j*1));
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  rot=rot+0.05;
  
}