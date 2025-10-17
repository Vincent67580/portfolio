// === Fond réseau animé pour portfolio BTS SIO ===

const canvas = document.getElementById("network-bg");
const ctx = canvas.getContext("2d");

let width, height, points;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  points = [];

  // Nombre de points ajusté pour un rendu fluide
  const numPoints = Math.floor((width * height) / 10000);
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  // Relier les points proches
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        const opacity = 1 - dist / 130;
        ctx.strokeStyle = `rgba(52, 97, 235, ${opacity * 0.15})`; // bleu doux
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  // Dessiner les points
  for (let p of points) {
    ctx.fillStyle = "rgba(0, 255, 4, 0.5)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();

    // Déplacement
    p.x += p.vx;
    p.y += p.vy;

    // Rebond sur les bords
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
resize();
draw();
