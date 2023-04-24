const cover0 = ( c ) => {

  let num_cols = 12;
  let num_rows;
  let square_width;


  c.setup = function(){

    let can = c.createCanvas(c.windowWidth,c.windowHeight);
    square_width = c.width / num_cols;
    num_rows = c.height / square_width;

  };

  c.draw = function(){

    let curr_color = c.color('#FFC43D');
    c.background(curr_color);
    // c.clear();

    c.fill('white');
    c.textSize(c.width/6);
    c.textAlign(c.CENTER, c.CENTER);
    c.text('auxavian', 0,0, c.width, c.height);

    c.noFill();
    c.stroke(curr_color);
    c.strokeWeight(2);

    c.push();
    c.translate(square_width/2, square_width/2);

    for (let gridY = 0; gridY < num_rows; gridY++){
      for (let gridX = 0; gridX < num_cols; gridX++){

        let mousePos = c.createVector(c.mouseX, c.mouseY);
        let currPos = c.createVector(gridX*square_width, gridY*square_width);
        let dir = mousePos.sub(currPos);

        for (let factor = 0.25; factor <= 1; factor+=0.25){
          let shift = (square_width / 2) - ((square_width*factor)/2);
          dir.setMag(shift);
          c.ellipse(currPos.x + dir.x, currPos.y + dir.y, square_width * factor);
        }

      }
    }
    c.pop();


  };

  c.windowResized = function() {
    c.resizeCanvas(c.windowWidth, c.windowHeight, false);
  }

};

let coverP5_0 = new p5(cover0, 'title');
