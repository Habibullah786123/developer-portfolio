/* ═══════════════════════════════════════════════════════
   PROJECTS PAGE — JavaScript
   ═══════════════════════════════════════════════════════ */

// IDs of top 10 pick projects
const TOP_PICKS = new Set([27, 23, 25, 26, 2, 10, 9, 6, 1, 20]);

// Category display labels
const CATEGORY_LABELS = {
  ecommerce: 'E-Commerce',
  healthcare: 'Healthcare',
  education: 'Education',
  food: 'Food & Restaurant',
  management: 'Management'
};

let currentFilter = 'all';

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavigation();
  initBackToTop();
  renderAllProjects('all');
  initFilter();
});

// ══════════════════════════════════════
// RENDER PROJECTS
// ══════════════════════════════════════
function renderAllProjects(filter) {
  const grid = document.getElementById('allProjectsGrid');
  const results = document.getElementById('filterResults');

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  // Sort: top picks first, then rest
  const topPicks = filtered.filter(p => TOP_PICKS.has(p.id));
  const others = filtered.filter(p => !TOP_PICKS.has(p.id));
  const sorted = [...topPicks, ...others];

  // Update results text
  const label = filter === 'all' ? 'all 27 projects' : `${filtered.length} ${CATEGORY_LABELS[filter] || filter} project${filtered.length !== 1 ? 's' : ''}`;
  results.textContent = `Showing ${label}`;

  grid.innerHTML = '';

  sorted.forEach((project, index) => {
    const isTopPick = TOP_PICKS.has(project.id);
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';

    const techPills = project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');
    const topBadge = isTopPick ? `<div class="top-pick-badge">⭐ Top Pick</div>` : '';

    const previewBtn = project.is_frontend && project.preview_url
      ? `<a href="${project.preview_url}" target="_blank" class="btn btn-preview" onclick="event.stopPropagation();">
           👁️ Preview
         </a>`
      : '';

    card.innerHTML = `
      ${topBadge}
      <div class="proj-card-header" style="background: ${project.gradient};">
        <div class="proj-card-icon">${project.icon}</div>
        <div class="proj-card-overlay">
          <a href="${project.github}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation();">
            GitHub <span class="btn-icon">→</span>
          </a>
          ${previewBtn}
        </div>
      </div>
      <div class="proj-card-body">
        <div class="proj-card-category">${CATEGORY_LABELS[project.category] || project.category}</div>
        <div class="proj-card-title">${project.title}</div>
        <div class="proj-card-desc">${project.description}</div>
        <div class="proj-card-tech">${techPills}</div>
      </div>
      <div class="proj-card-actions">
        <a href="${project.github}" target="_blank" class="btn btn-secondary" onclick="event.stopPropagation();">
          GitHub <span class="btn-icon">→</span>
        </a>
        ${previewBtn ? `<a href="${project.preview_url}" target="_blank" class="btn btn-preview" onclick="event.stopPropagation();">👁️ Preview</a>` : `<button class="btn btn-secondary" onclick="event.stopPropagation(); openModal(${project.id});">Details 🔍</button>`}
      </div>
    `;

    card.addEventListener('click', () => openModal(project.id));
    grid.appendChild(card);

    // Staggered animation
    setTimeout(() => {
      card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 55 + 30);
  });
}

// ── Filter ──
function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderAllProjects(currentFilter);
    });
  });
}

// ══════════════════════════════════════
// MODAL
// ══════════════════════════════════════
function openModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const header = document.getElementById('modalHeader');
  const body = document.getElementById('modalBody');

  header.style.background = project.gradient;
  header.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span style="font-size: 3.5rem;">${project.icon}</span>
  `;

  const previewAction = project.is_frontend && project.preview_url
    ? `<a href="${project.preview_url}" target="_blank" class="btn btn-preview">👁️ Live Preview</a>`
    : '';

  body.innerHTML = `
    <div class="modal-category">${CATEGORY_LABELS[project.category] || project.category}</div>
    <div class="modal-title">${project.title}</div>
    <div class="modal-desc">${project.description}</div>
    <div class="modal-features">
      <h4>✦ Key Features</h4>
      <ul>
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
    <div class="project-card-tech" style="margin-bottom: 24px;">
      ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
    </div>
    <div class="modal-actions">
      <a href="${project.github}" target="_blank" class="btn btn-primary">
        View on GitHub <span class="btn-icon">→</span>
      </a>
      ${previewAction}
      <button class="btn btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('projectModal').addEventListener('click', e => {
  if (e.target.id === 'projectModal') closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ══════════════════════════════════════
// PARTICLES (shared)
// ══════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    draw() {
      ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const count = Math.min(60, Math.floor(window.innerWidth / 18));
  for (let i = 0; i < count; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ══════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navAnchors = links.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
