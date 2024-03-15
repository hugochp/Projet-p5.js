// Déclaration des constantes
const canvasSize = 500;
const backgroundColor = 10;
const angleMultiplier = 360;
const rotationSpeed = 0.002;
const boxSize = 100;
const boxSize2 = 30;
let gap2 = 30;
const numBoxesX = 8;
const numBoxesY = 8;

let min_green = 128;
let max_green = 255;

function setup() {
    createCanvas(canvasSize, canvasSize, WEBGL);
}

function draw() {
    background(backgroundColor);
    let angleX = radians(angleMultiplier * cos(frameCount * rotationSpeed)**8); // Ajuste l'angle X en fonction du sinus
    let angleY = radians(angleMultiplier * sin(frameCount * rotationSpeed)**8); // Ajuste l'angle Y en fonction du sinus
    rotateX(angleX);
    rotateY(angleY);
    let gap = gap2 * sin(angleX);

    rotateX(PI/4);
    rotateY(PI/4);
    for (let j = floor(-numBoxesY/2); j < floor(numBoxesY/2)+1; j++) {
        for (let i = floor(-numBoxesX/2); i < floor(numBoxesX/2)+1; i++) {
            push();
            translate(i + j * gap, j * gap);
            box(boxSize2, boxSize, boxSize);
            pop();
            
        }
    }
    for (let j = floor(-numBoxesY/2); j < floor(numBoxesY/2)+1; j++) {
        for (let i = floor(-numBoxesX/2); i < floor(numBoxesX/2)+1; i++) {
            push();
            translate(-i + j * gap, -j * gap);
            box(boxSize2, boxSize, boxSize);
            pop();
        }
    }

    for (let j = floor(-numBoxesY/2); j < floor(numBoxesY/2)+1; j++) {
        for (let i = floor(-numBoxesX/2); i < floor(numBoxesX/2)+1; i++) {
            push();
            translate(i + j * gap, j * gap);
            box(boxSize, boxSize2, boxSize);
            pop();
        }
    }
    for (let j = floor(-numBoxesY/2); j < floor(numBoxesY/2)+1; j++) {
        for (let i = floor(-numBoxesX/2); i < floor(numBoxesX/2)+1; i++) {
            push();
            translate(-i + j * gap, -j * gap);
            box(boxSize, boxSize2, boxSize);
            pop();
        }
    }

    for (let j = floor(-numBoxesY/2); j < floor(numBoxesY/2)+1; j++) {
        for (let i = floor(-numBoxesX/2); i < floor(numBoxesX/2)+1; i++) {
            push();
            translate(i + j * gap, j * gap);
            box(boxSize, boxSize, boxSize2);
            pop();
        }
    }
    for (let j = floor(-numBoxesY/2); j < floor(numBoxesY/2)+1; j++) {
        for (let i = floor(-numBoxesX/2); i < floor(numBoxesX/2)+1; i++) {
            push();
            translate(-i + j * gap,- j * gap);
            box(boxSize, boxSize, boxSize2);
            pop();
        }
    }

}

function mouseDragged() {
    // Appliquer la rotation en fonction des mouvements de la souris
    angleX += radians(mouseY - pmouseY);
    angleY += radians(mouseX - pmouseX);
  }
  
