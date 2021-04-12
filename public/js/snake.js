function Snake() {
  this.ht = 20;
  this.wd = 20;
  this.body = [];
  this.direction = "";
  this.moveIt = false;
  this.body.push({
    xpos: 0,
    ypos: 0,
  });
  this.drw = function () {
    fill("#cbe2b0");
    this.body.forEach((box) => {
      rect(box.xpos, box.ypos, this.wd, this.ht);
    });
    // console.log(this.body[0]);
  };
  this.moveIt = false;
  this.getDirection = function () {
    if (keyCode == 37 && s.direction != "right") {
      this.direction = "left";
      this.moveIt = true;
    } else if (keyCode == 38 && s.direction != "down") {
      this.direction = "up";
      this.moveIt = true;
    } else if (keyCode == 39 && s.direction != "left") {
      this.direction = "right";
      this.moveIt = true;
    } else if (keyCode == 40 && s.direction != "up") {
      this.direction = "down";
      this.moveIt = true;
    }
  };
  this.moveOrFeed = function (feed) {
    if (feed) {
      this.body.push({});
    }
    let oldXpos = this.body[0].xpos;
    let oldYpos = this.body[0].ypos;
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i] = this.body[i - 1];
    }
    if (this.direction == "left") {
      newXpos = oldXpos - this.wd;
      if (newXpos < 0) {
        newXpos = 600 - 20;
      }
      this.body[0] = {
        xpos: newXpos,
        ypos: oldYpos,
      };
    } else if (this.direction == "right") {
      newXpos = oldXpos + this.wd;
      if (newXpos > 600 - 20) {
        newXpos = 0;
      }
      this.body[0] = {
        xpos: newXpos,
        ypos: oldYpos,
      };
    } else if (this.direction == "up") {
      newYpos = oldYpos - this.ht;
      if (newYpos < 0) {
        newYpos = 600 - 20;
      }
      this.body[0] = {
        xpos: oldXpos,
        ypos: newYpos,
      };
    } else if (this.direction == "down") {
      newYpos = oldYpos + this.ht;
      if (newYpos > 600 - 20) {
        newYpos = 0;
      }
      this.body[0] = {
        xpos: oldXpos,
        ypos: newYpos,
      };
    }
    console.log(this.body[0], s.direction);
  };
  this.die = function () {
    score = 0;
    document.querySelector(".score").innerHTML = score;

    this.body = [];
    this.moveIt = false;
    this.body.push({
      xpos: 0,
      ypos: 0,
    });
    document.querySelector(".loser").classList.remove("show");
    loop();
  };
}
