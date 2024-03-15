let angleX_cam = 0.79;
let angleY_cam = 0.79;

function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
  function draw() {
    background(220);

    rotateX(angleX_cam);
    rotateY(angleY_cam);
    
    push(); // Sauvegarde la transformation courante
    rotateY(millis() / 10000); // Rotation du premier tore
    rotateX(millis() / 10000);
    drawTorus(60, 20, 30, 10);
    pop(); // Restaure la transformation précédente
  
    push(); // Sauvegarde la transformation courante
    rotateY(PI/2); // Rotation de 90 degrés pour le deuxième tore
    drawTorus(100, 20, 30, 10);
    pop(); // Restaure la transformation précédente

    push(); // Sauvegarde la transformation courante
    rotateX(PI/2); // Rotation de 90 degrés pour le deuxième tore
    drawTorus(140, 20, 30, 10);
    pop(); // Restaure la transformation précédente
  }
  
  function drawTorus(R, r, total, sides) {
    for (let i = 0; i < total; i++) {
      let lat0 = map(i, 0, total, 0, TWO_PI);
      let lat1 = map(i + 1, 0, total, 0, TWO_PI);
  
      beginShape(TRIANGLE_STRIP);
      for (let j = 0; j <= sides; j++) {
        let lon = map(j, 0, sides, 0, TWO_PI);
  
        let x0 = (R + r * cos(lon)) * cos(lat0);
        let y0 = r * sin(lon);
        let z0 = (R + r * cos(lon)) * sin(lat0);
  
        let x1 = (R + r * cos(lon)) * cos(lat1);
        let y1 = r * sin(lon);
        let z1 = (R + r * cos(lon)) * sin(lat1);
  
        vertex(x0, y0, z0);
        vertex(x1, y1, z1);
      }
      endShape(CLOSE);
    }

    angleX_cam += 0.001;
    angleY_cam += 0.001;
  }
  
  function mouseDragged() {
    // Appliquer la rotation en fonction des mouvements de la souris
    angleX_cam += radians(mouseY - pmouseY);
    angleY_cam += radians(mouseX - pmouseX);
  }
  