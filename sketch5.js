function setup() {
    createCanvas(500, 500, WEBGL);
  }
  
  function draw() {
    background(50);
    rotateX(frameCount * 0.003);
    rotateY(frameCount * 0.003);
  
    let miniCubeSize = 8;
    let spacing = 10;
    let numCubes = 5;
    let anotherDim = 3;
    let tailleAnotherDim = 200;
    let anotherDim2 = 3;
    let tailleAnotherDim2 = 200;
    let anotherDim3 = 3;
    let tailleAnotherDim3 = 200;
  
    for (let n = 0; n < anotherDim3; n++) {
      for (let m = 0; m < anotherDim2; m++) {
        for (let l = 0; l < anotherDim; l++) {
          for (let i = 0; i < numCubes; i++) {
            for (let j = 0; j < numCubes; j++) {
              for (let k = 0; k < numCubes; k++) {
                if (
                  (i == j && (j == 0 || j == numCubes - 1 || j == k)) ||
                  (j == k && (k == 0 || k == numCubes - 1 || k == i)) ||
                  (k == i && (i == 0 || i == numCubes - 1 || i == j))
                ) {
                  let x = i * (miniCubeSize + spacing) - (miniCubeSize + spacing) * (numCubes / 2) + tailleAnotherDim * (l - (anotherDim / 2)) + tailleAnotherDim / 2;
                  let y = j * (miniCubeSize + spacing) - (miniCubeSize + spacing) * (numCubes / 2) + tailleAnotherDim2 * (m - (anotherDim2 / 2)) + tailleAnotherDim2 / 2;
                  let z = k * (miniCubeSize + spacing) - (miniCubeSize + spacing) * (numCubes / 2) + tailleAnotherDim3 * (n - (anotherDim3 / 2)) + tailleAnotherDim3 / 2;
                  
                  // Ajouter des fonctions sinus pour modifier les coordonnées x, y, et z
                  x += sin(frameCount * 0.01 + n) * 50;
                  y += cos(frameCount * 0.01 + m) * 50;
                  z += cos(frameCount * 0.05 + l) * sin(frameCount * 0.01 + k) * 20;
  
                  push();
                  translate(x, y, z);
                  fill(j / numCubes * random(80) + i / numCubes * random(80) + k / numCubes * random(255), random(255), j / numCubes * random(255) + i / numCubes * random(255) + k / numCubes * random(80) + 150, 200);
                  stroke(0);
                  strokeWeight(2);
                  box(miniCubeSize);
                  pop();
                }
              }
            }
          }
        }
      }
    }
  }
  