let angleX_cam = 0.79;
let angleY_cam = 0.79;
let angleX_cube = 0;
let angleY_cube = 0;
let w = 20;
let ecart = 15;
let ma;
let maxD;
let textureImg;

function preload() {
    textureImg = loadImage('texture-png-high-quality-cube-2d-hashmap(1).png');
}

function setup() {
  createCanvas(500, 500, WEBGL);
  maxD = dist(0, 0, 400, 400);
}

function draw() {
  background(0);
  ortho(-400, 400, 400, -400, 0, 1000);

  // Appliquer la rotation de la scène en fonction de la souris
  rotateX(angleX_cam);
  rotateY(angleY_cam);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
        texture(textureImg);
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = offset + angleX_cube + angleY_cube; // Ajoutez l'angle de rotation
      let h = map(sin(a)**3 - 1, 0, 2, 100, 300);
      translate((x - width / 2)*1.01, 0, (z - height / 2)*1.01);
      //normalMaterial();
      box(w - ecart, h, w - ecart);
      pop();

      push();
      translate((x - width / 2)*1.02, (z - height / 2)*1.05, 0);
      //normalMaterial();
      box(w - ecart, w - ecart, h);
      pop();

      push();
      translate(0, x - width / 2, z - height / 2);
      //normalMaterial();
      box(h, w - ecart, w - ecart);
      pop();
    }
  }
  angleX_cube += 0.005;
  angleY_cube += 0.005;

  angleX_cam += 0.001;
  angleY_cam += 0.001;
}

function mouseDragged() {
  // Appliquer la rotation en fonction des mouvements de la souris
  angleX_cam += radians(mouseY - pmouseY);
  angleY_cam += radians(mouseX - pmouseX);
}
