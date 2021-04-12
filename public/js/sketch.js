let s = new Snake();
let f = new Food(s.body);
function setup() {
  createCanvas(600, 600);
  frameRate(15);
}
// console.log(arrOfX);
function draw() {
  background(color("#7579e7"));
  s.drw();
  // if (mouseIsPressed) {
  //   s.moveOrFeed(1);
  // }
  if (keyIsPressed) {
    s.getDirection();
  }
  if (s.moveIt) {
    s.moveOrFeed(0);
  }
  f.drw();
  if (dist(s.body[0].xpos, s.body[0].ypos, f.x, f.y) < 20) {
    f.eaten(s.body.slice(0));
    s.moveOrFeed(1);
  }
  for (let i = 1; i < s.body.length; i++) {
    if (
      dist(s.body[0].xpos, s.body[0].ypos, s.body[i].xpos, s.body[i].ypos) < 20
    ) {
      noLoop();
      document.querySelector(".loser").classList.add("show");
      setTimeout(() => {
        s.die();
      }, 2000);
    }
  }
}




