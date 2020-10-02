const nbOfParticles = 50;

window.requestAnimFrame= (function() {
  return window.requestAnimFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
});

const c = document.getElementById(`canvas`);
const ctx = c.getContext(`2d`);

const w = window.innerWidth;
const h = window.innerHeight;

c.width = w;
c.height = h;

const paramX=0;
const paramY=0;
const rad = (Math.PI/180);

const mouseX=0;
const mouseY=0;

const particles = [];

document.addEventListener(`click`. function(e) {
  let mouseX = e.clientX || e.pageX;
  let mouseY = e.clientY || e.pageY
  console.log(paramX);

  particles.push(new createParticle);
}, false);

for(i = 0; i < nbOfParticles; i++) {
  setTimeout(function() {
    let mouseX = Math.random() * c.width; //first creation random x
    let mouseY = Math.random() * c.height; //first creation random y

    particles.push(new createParticle);
  }, i * 15);
}

function createParticle() {
  this.x = mouseX;
  this.y = mouseY;
  this.r = Math.floor(Math.random() * 30) + 5; //size - rad
  this.vy = Math.floor(Math.random() * 5) + 2; //velocity y
  const color1 = `#e6e8fa`;
  const color2 = `#f1c5cf`;
  const color3 = `#13e3cf`;
  const array = [color1,color2,color3];
  this.color = array[Math.floor(Math.random() * 3)]; //one of the three colors
  this.life = Math.random() * 30;
}