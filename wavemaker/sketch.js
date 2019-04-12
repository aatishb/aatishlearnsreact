let frameCount = 0;
let mouseX = 0;
let mouseY = 0;
const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
const width = 600;
const height = 600;

function draw() {

  let t = frameCount / 100;

  function makeCircles() {

    let circlesArray = [];

    for (let x = 0; x <= width; x = x + 30) {
      for (let y = 0; y <= height; y = y + 30) {
        // starting point of each circle depends on mouse position
        let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        let angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        let myX = x + 20 * cos(2 * PI * t + angle);
        let myY = y + 20 * sin(2 * PI * t + angle);

        circlesArray.push(<circle fill='dodgerblue' cx={myX} cy={myY} r="10"/>);
      }
    }

    return circlesArray;
  }

  const element = (
    <svg width = {width} height = {height}>
      {makeCircles()}
    </svg>
  );

  frameCount++;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

window.onmousemove = function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

function color(r,g,b) {
  return 'rgb('+r+','+g+','+b+')';
}

const random = (min, max) => map(Math.random(), 0, 1, min, max);
const map = (x, xmin, xmax, ymin, ymax) => ymin + (x - xmin) * (ymax - ymin) / (xmax - xmin);
const min = (a,b) => a < b ? a : b;
const max = (a,b) => a > b ? a : b;

setInterval(draw, 1000/60);