let score = 0;
let arrOfX = [],
  arrOfY = [],
  dummyArray = [];

for (let i = 0; i <= 580; i += 20) {
  arrOfX.push(i);
  arrOfY.push(i);
  dummyArray.push(i);
}

function Food() {
  // console.log(a);
  this.foodH = 20;
  this.foodW = 20;
  this.x =
    Math.floor(Math.floor(Math.random() * 600) / this.foodW) * this.foodW;
  this.y =
    Math.floor(Math.floor(Math.random() * 600) / this.foodH) * this.foodH;
  this.drw = function () {
    fill("#ffd31d");
    rect(this.x, this.y, 20, 20);
    console.log(this.x, this.y);
  };
  this.eaten = function (arrOfSnakeBody) {
    console.log(arrOfSnakeBody);
    arrOfSnakeBody.forEach((box) => {
      if (arrOfX.includes(box.xpos)) {
        arrOfX.splice(binarySearch(arrOfX,box.xpos,0,arrOfX.length), 1);
      }
      if (arrOfY.includes(box.ypos)) {
        arrOfY.splice(binarySearch(arrOfY,box.ypos,0,arrOfY.length), 1);
      }
    });
    score += 10;
    document.querySelector(".score").innerHTML = score;

    //  Here i used p5.js random function: syntax----> random([min],[max]) or random(arrOfChoices)
    //  here i used the second syntax.
    this.x = random(arrOfX);
    this.y = random(arrOfY);
    fill("#ffd31d");
    rect(this.x, this.y, 20, 20);
    console.log(this.x, this.y);

    arrOfX = dummyArray.slice(0);
    arrOfY = dummyArray.slice(0);
  };
}
