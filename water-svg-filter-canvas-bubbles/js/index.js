let c = document.getElementById("bubbles"),
  ctx = c.getContext("2d"),
  width = window.innerWidth,
  height = window.innerHeight,
  particles = 20,
  minRadius = 2,
  maxRadius = 20,
  speed = 0.09,
  x = width / particles;

let Bubbles = [];

for (var i = 0; i < particles; i++) {
  Bubbles.push({
    x: i * x,
    y: height * Math.random(),
    r: minRadius + Math.random() * (maxRadius - minRadius),
    speed: speed * Math.random()
  });
}

function bubble() {
  c.width = width;
  c.height = height;
  for (i = 0; i < Bubbles.length; i++) {
    let b = Bubbles[i];    
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
    b.alpha = 0.3 * (b.y / height);
    b.speed += speed / 2;

    ctx.strokeStyle = "rgba(255, 255, 255, .2)";
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255," + b.alpha + ")";
    ctx.fill();
    
    b.y -= b.speed;
    if (b.y < 0) {
      b.y = height;
      b.speed = Math.random() * 3;
    }
  }
}

bubble.prototype.setPos = function () {
    var target = this.getSide();
    this.bubble.style.transform = 'translate3d(' + target.coords.x +'px, ' + target.coords.y + 'px, 0)';
}

function draw() {
  bubble();
  window.requestAnimationFrame(draw);
}

function resizeCanvas() {
  (width = window.innerWidth), 
  (height = window.innerHeight);
  c.width = width;
  c.height = height;
  draw();
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas, false);

const bd = document.body,
  cur = document.getElementById("cursor");
bd.addEventListener("mousemove", function(n) {
  (cur.style.left = n.clientX + "px"), (cur.style.top = n.clientY + "px");
});

$("#navbar").click(function() {
  $("#bubbles").toggleClass("none");
});