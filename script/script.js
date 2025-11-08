<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    // ✅ Ouvre/ferme le menu quand on clique sur le bouton burger
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // ✅ Ferme le menu quand on clique sur un lien du menu
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
});





// === Fond réseau animé + effet "énergie centrale" ===

const canvas = document.getElementById("network-bg");
const ctx = canvas.getContext("2d");

let width, height, points;

// redimensionne le canevas et crée les points du réseau
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  points = [];

  const numPoints = Math.floor((width * height) / 5000); // densité des points
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }
}

// === Classe pour les filaments "énergie" ===
/*
class Tentacle {
  constructor(core, angle) {
    this.core = core;
    this.angle = angle;
    this.points = [];
    this.length = 64; // nombre de segments
    this.segmentLength = 7;   // longueur d’un segment
    this.phase = Math.random() * 100;
  }

  update(t) {
    this.points = [];
    for (let i = 0; i < this.length; i++) {
      const r = i * this.segmentLength;
      const a = this.angle + Math.sin(t / 1000 + i * 0.5 + this.phase) * 0.2;
      this.points.push({
        x: this.core.x + Math.cos(a) * r,
        y: this.core.y + Math.sin(a) * r,
      });
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.core.x, this.core.y);
    for (const p of this.points) ctx.lineTo(p.x, p.y);
    const gradient = ctx.createLinearGradient(
      this.core.x,
      this.core.y,
      this.points[this.points.length - 1].x,
      this.points[this.points.length - 1].y
    );
    gradient.addColorStop(0, "rgba(52,97,235,0.4)");
    gradient.addColorStop(1, "rgba(52,97,235,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

const energyCore = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const tentacles = [];
for (let i = 0; i < 12; i++) {
  tentacles.push(new Tentacle(energyCore, (i * Math.PI * 2) / 12));
}
*/
// === Animation principale ===
function draw() {
  ctx.clearRect(0, 0, width, height);

  // --- Réseau de points ---
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        const opacity = 1 - dist / 130;
        ctx.strokeStyle = `rgba(52,97,235,${opacity * 0.15})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  // points
  for (let p of points) {
    ctx.fillStyle = "rgba(52, 97, 235, 0.35)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }

  // --- Effet d'énergie au centre ---
//   const t = performance.now();
//   for (const tentacle of tentacles) {
//     tentacle.update(t);
//     tentacle.draw(ctx);
//   }

//   // halo central
//   const gradient = ctx.createRadialGradient(
//     energyCore.x,
//     energyCore.y,
//     0,
//     energyCore.x,
//     energyCore.y,
//     80
//   );
//   gradient.addColorStop(0, "rgba(52,97,235,0.25)");
//   gradient.addColorStop(1, "transparent");
//   ctx.fillStyle = gradient;
//   ctx.beginPath();
//   ctx.arc(energyCore.x, energyCore.y, 80, 0, Math.PI * 2);
//   ctx.fill();

  requestAnimationFrame(draw);
}

// initialisation
window.addEventListener("resize", resize);
resize();
draw();
=======
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    // ✅ Ouvre/ferme le menu quand on clique sur le bouton burger
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // ✅ Ferme le menu quand on clique sur un lien du menu
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
});





// === Fond réseau animé + effet "énergie centrale" ===

const canvas = document.getElementById("network-bg");
const ctx = canvas.getContext("2d");

let width, height, points;

// redimensionne le canevas et crée les points du réseau
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  points = [];

  const numPoints = Math.floor((width * height) / 5000); // densité des points
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    });
  }
}

// === Classe pour les filaments "énergie" ===
/*
class Tentacle {
  constructor(core, angle) {
    this.core = core;
    this.angle = angle;
    this.points = [];
    this.length = 64; // nombre de segments
    this.segmentLength = 7;   // longueur d’un segment
    this.phase = Math.random() * 100;
  }

  update(t) {
    this.points = [];
    for (let i = 0; i < this.length; i++) {
      const r = i * this.segmentLength;
      const a = this.angle + Math.sin(t / 1000 + i * 0.5 + this.phase) * 0.2;
      this.points.push({
        x: this.core.x + Math.cos(a) * r,
        y: this.core.y + Math.sin(a) * r,
      });
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.core.x, this.core.y);
    for (const p of this.points) ctx.lineTo(p.x, p.y);
    const gradient = ctx.createLinearGradient(
      this.core.x,
      this.core.y,
      this.points[this.points.length - 1].x,
      this.points[this.points.length - 1].y
    );
    gradient.addColorStop(0, "rgba(52,97,235,0.4)");
    gradient.addColorStop(1, "rgba(52,97,235,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

const energyCore = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const tentacles = [];
for (let i = 0; i < 12; i++) {
  tentacles.push(new Tentacle(energyCore, (i * Math.PI * 2) / 12));
}
*/
// === Animation principale ===
function draw() {
  ctx.clearRect(0, 0, width, height);

  // --- Réseau de points ---
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        const opacity = 1 - dist / 130;
        ctx.strokeStyle = `rgba(52,97,235,${opacity * 0.15})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  // points
  for (let p of points) {
    ctx.fillStyle = "rgba(52, 97, 235, 0.35)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }

  // --- Effet d'énergie au centre ---
//   const t = performance.now();
//   for (const tentacle of tentacles) {
//     tentacle.update(t);
//     tentacle.draw(ctx);
//   }

//   // halo central
//   const gradient = ctx.createRadialGradient(
//     energyCore.x,
//     energyCore.y,
//     0,
//     energyCore.x,
//     energyCore.y,
//     80
//   );
//   gradient.addColorStop(0, "rgba(52,97,235,0.25)");
//   gradient.addColorStop(1, "transparent");
//   ctx.fillStyle = gradient;
//   ctx.beginPath();
//   ctx.arc(energyCore.x, energyCore.y, 80, 0, Math.PI * 2);
//   ctx.fill();

  requestAnimationFrame(draw);
}

// initialisation
window.addEventListener("resize", resize);
resize();
draw();
>>>>>>> d3f1b35e684c85c97e1b51a6ad29c74ff932fb3d
