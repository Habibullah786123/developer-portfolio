/* ═══════════════════════════════════════════════════════
   HABIBULLAH — Portfolio JavaScript (Main Page)
   Particles · Animations · Featured Projects · Interactivity
   ═══════════════════════════════════════════════════════ */

// IDs of the 3 featured projects to show on the homepage
const FEATURED_IDS = [23, 6, 9]; // PVS-Youth, HNS School, FYP Connect

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavigation();
  initScrollAnimations();
  renderFeaturedProjects();
  initStatsCounter();
  initSkillBars();
  initBackToTop();
  initTypedEffect();
});

// ══════════════════════════════════════
// FEATURED PROJECTS (3 on homepage)
// ══════════════════════════════════════
function renderFeaturedProjects() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featured = FEATURED_IDS.map(id => projectsData.find(p => p.id === id)).filter(Boolean);

  featured.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'featured-card reveal';
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';

    const techPills = project.tech.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join('');

    const previewBtn = project.is_frontend && project.preview_url
      ? `<a href="${project.preview_url}" target="_blank" class="btn btn-preview-sm" onclick="event.stopPropagation();">👁️ Preview</a>`
      : '';

    card.innerHTML = `
      <div class="featured-card-header" style="background: ${project.gradient};">
        <div class="featured-card-icon">${project.icon}</div>
        <div class="featured-card-overlay">
          <a href="${project.github}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation();">
            GitHub <span class="btn-icon">→</span>
          </a>
          ${previewBtn}
        </div>
      </div>
      <div class="featured-card-body">
        <div class="featured-card-category">${project.category}</div>
        <div class="featured-card-title">${project.title}</div>
        <div class="featured-card-desc">${project.description}</div>
        <div class="project-card-tech">${techPills}</div>
      </div>
    `;

    card.addEventListener('click', () => openProjectModal(project.id));
    grid.appendChild(card);

    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 120 + 100);
  });
}

// ── Project Modal ──
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const header = document.getElementById('modalHeader');
  const body = document.getElementById('modalBody');

  header.style.background = project.gradient;
  header.innerHTML = `
    <button class="modal-close" onclick="closeProjectModal()">✕</button>
    <span style="font-size: 4rem;">${project.icon}</span>
  `;

  const previewAction = project.is_frontend && project.preview_url
    ? `<a href="${project.preview_url}" target="_blank" class="btn btn-preview-sm">👁️ Live Preview</a>`
    : '';

  body.innerHTML = `
    <div class="modal-category">${project.category}</div>
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
      <button class="btn btn-secondary" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') closeProjectModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// ══════════════════════════════════════
// PARTICLE SYSTEM
// ══════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;

      if (mouse.x != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
        }
      }
    }
    draw() {
      ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const count = Math.min(80, Math.floor(window.innerWidth / 15));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
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

  // Active section highlighting
  const sections = document.querySelectorAll('.section, .hero');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 200;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  });
}

// ══════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ══════════════════════════════════════
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ══════════════════════════════════════
// STATS COUNTER
// ══════════════════════════════════════
function initStatsCounter() {
  const stats = [
    { el: document.getElementById('statProjects'), target: 27, suffix: '+' },
    { el: document.getElementById('statLOC'), target: 80, suffix: 'K+' },
    { el: document.getElementById('statTech'), target: 27, suffix: '+' }
  ];

  function animateCounter(stat) {
    let current = 0;
    const increment = stat.target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.target) {
        current = stat.target;
        clearInterval(timer);
      }
      stat.el.textContent = Math.floor(current) + stat.suffix;
    }, 25);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(s => animateCounter(s));
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  if (stats[0].el) observer.observe(stats[0].el);
}

// ══════════════════════════════════════
// SKILL BARS
// ══════════════════════════════════════
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const langBars = document.querySelectorAll('.lang-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.dataset.width;
        setTimeout(() => {
          fill.style.width = width;
        }, 200);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
  langBars.forEach(bar => observer.observe(bar));
}

// ══════════════════════════════════════
// BACK TO TOP
// ══════════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ══════════════════════════════════════
// CONTACT FORM
// ══════════════════════════════════════
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  btn.innerHTML = 'Sending... ⏳';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = 'Message Sent! ✅';
    btn.style.background = 'linear-gradient(135deg, #00d4aa, #00b894)';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 2500);
  }, 1500);
}

// ══════════════════════════════════════
// TYPED EFFECT (Hero subtitle)
// ══════════════════════════════════════
function initTypedEffect() {
  const roles = [
    'Full-Stack Software Engineer',
    'AI Mobile Developer',
    'PHP & Flutter Architect',
    'Academic Research Consultant'
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  const badge = document.querySelector('.hero-badge');
  if (!badge) return;

  const typedSpan = document.createElement('span');
  typedSpan.id = 'typed-role';
  typedSpan.style.cssText = 'color: var(--accent-secondary); font-weight: 600;';

  badge.innerHTML = '';
  const pulseSpan = document.createElement('span');
  pulseSpan.className = 'pulse';
  badge.appendChild(pulseSpan);
  badge.appendChild(typedSpan);

  function tick() {
    const currentRole = roles[roleIdx];

    if (deleting) {
      typedSpan.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedSpan.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = deleting ? 40 : 80;

    if (!deleting && charIdx === currentRole.length) {
      speed = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(tick, speed);
  }

  tick();
}
