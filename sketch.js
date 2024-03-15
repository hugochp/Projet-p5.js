let angleX = 0;
let angleY = 0;
let distance = 100;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  rotateX(angleX);
  rotateY(angleY);

  let points = [];

  for (let i = 0; i < TWO_PI; i += radians(360/2)) {
    let x = distance * cos(i);
    let y = distance * sin(i);
    points.push([x, y, 0]);
    points.push([0, x, y]);
    points.push([y, 0, x]);

  }

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      line(points[i][0], points[i][1], points[i][2], points[j][0], points[j][1], points[j][2]);
    }
  }

  angleX += radians(1);
  angleY += radians(1);
  distance = 100 * sin(frameCount * 0.01);
}
 