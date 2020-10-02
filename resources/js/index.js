const nbOfParticles = 50;

window.requestAnimFrame= (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

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

document.addEventListener(`click`, function(e) {
  mouseX = e.clientX || e.pageX;
  mouseY = e.clientY || e.pageY;
  console.log(paramX);

  particles.push(new createParticle);
}, false);

for(let i = 0; i < nbOfParticles; i++) {
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
  const array = [ color1,color2,color3 ];
  this.color = array[Math.floor(Math.random() * 3)]; //one of the three colors
  this.life = Math.random() * 30;
}

function drawParticles() {
  requestAnimFrame(drawParticles);
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = `#e3f2f1`;
  ctx.fillRect(0,0,w,h);

  for(let t = 0; t < particles.length; t++) {
    const p = particles[t];
    ctx.beginPath();
    ctx.fillStyle = p.color;
    const x1 = p.x + p.r * Math.cos(p.a * rad);
    const y1 = p.y + p.r * Math.sin(p.a * rad);
    const cx1 = p.x + p.r * Math.cos((p.a + 22.5) * rad);
    const cy1 = p.y + p.r * Math.sin((p.a + 22.5) * rad);
    const cx2 = p.x + p.r * Math.cos((p.a - 22.5) * rad);
    const cy2 = p.y + p.r * Math.sin((p.a - 22.5) * rad);
    const chord = 2 * p.r * Math.sin(22.5 * rad / 2);

    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.arc(cx1,cy1,chord,(270 + p.a) * rad, (270 + p.a + 225) * rad);
    ctx.lineTo(p.x, p.y);
    ctx.moveTo(x1,y1);
    ctx.arc(cx2,cy2,chord,(90 + p.a) * rad, (270 + p.a + 225) * rad, true);
    ctx.lineTo(p.x,p.y);
    ctx.fill();

    p.y-=p.vy;
    p.life*=0.8;

  }
}

drawParticles();