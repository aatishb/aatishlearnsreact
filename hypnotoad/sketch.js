let frameCount = 0;
let mouseX = 0;
let mouseY = 0;
let c;

function draw() {

  if (frameCount % 5 == 0) {
    c = color(random(0,255),random(0,255),random(0,255));
  }

  let pupilSize = frameCount % 60;

  let mouthWidth = max(mouseX/5, 50);
  let mouthHeight = max(mouseY/10, 50/3);

  const element = (
    <svg width = "600" height = "400">
      <circle fill='green' cx="300" cy="200" r="200"/>
      <circle fill='white' cx="150" cy="100" r="50"/>
      <circle fill='white' cx="450" cy="100" r="50"/>
      <circle fill={c} cx="150" cy="100" r={pupilSize}/>
      <circle fill={c} cx="450" cy="100" r={pupilSize}/>
      <ellipse fill='white' cx="300" cy="300" rx={mouthWidth} ry={mouthHeight}/>
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