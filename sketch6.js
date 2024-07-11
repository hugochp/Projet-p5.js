let angle = 0;
let noiseMax = 1;
let bgColor;
let colors = [];
let pulse = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  bgColor = color(10, 10, 20);
  for (let i = 0; i < 8; i++) {
    colors.push(color(150 + random(50), random(80), random(80), 150));
  }
}

function draw() {
  background(bgColor);
  translate(0, 0, -200);
  rotateX(frameCount * 0.003);
  rotateY(frameCount * 0.003);

  // Lumière ambiante pulsante
  ambientLight(100 + sin(pulse) * 200, 100 + cos(pulse) * 200, 100 + sin(pulse) * 20);
  pulse += 0.02;
  
  pointLight(255, 255, 255, 0, 0, 200);


  let prevX = 0;
  let prevY = 0;
  let prevZ = 0;

  for (let a = 0; a < 360; a += 6) {
    let xoff = cos(radians(a)) * 100;
    let yoff = sin(radians(a)) * 100;
    let zoff = frameCount * 0.02;
    let n = 0.1 * noise(xoff, yoff, zoff) * noiseMax;
    let r = map(n, 0, 1, 50, 200);
    let x = 3 * r * cos(radians(a));
    let y = 3 * r * sin(radians(a));
    let z = 1000 * n;

    let col = colors[int(random(colors.length))];

    if (prevX !== 0 || prevY !== 0 || prevZ !== 0) {
      stroke(col);
      strokeWeight(2);

      deformLine(prevX, prevY, prevZ, x, y, z);
      deformLine(prevX, -prevY, -prevZ, x, -y, -z);
      deformLine(prevX, prevZ, prevY, x, z, y);
      deformLine(prevX, -prevZ, -prevY, x, -z, -y);
      deformLine(prevZ, prevY, prevX, z, y, x);
      deformLine(-prevZ, -prevY, prevX, -z, -y, x);
    }

    prevX = x;
    prevY = y;
    prevZ = z;
  }
}

function deformLine(x1, y1, z1, x2, y2, z2) {
  let detail = 5;
  beginShape();
  for (let i = 0; i <= detail; i++) {

    let t = i / detail;
    let x = lerp(x1, x2, t) + noise(t * 5) * 10;
    let y = lerp(y1, y2, t) + noise(t * 5 + 1) * 10;
    let z = lerp(z1, z2, t) + noise(t * 5 + 2) * 10;
    vertex(x, y, z);
    fill(color(150 + random(50), random(80), random(80)));
  }
  endShape();
}
