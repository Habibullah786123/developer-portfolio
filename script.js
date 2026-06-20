/* ═══════════════════════════════════════════════════════
   HABIBULLAH — Portfolio JavaScript
   Particles · Animations · Project Data · Interactivity
   ═══════════════════════════════════════════════════════ */

// ── Project Data ──
const projects = [
  {
    id: 1,
    title: "SabziMandi Hyd",
    category: "ecommerce",
    icon: "🥬",
    gradient: "linear-gradient(135deg, #00b894 0%, #00cec9 100%)",
    description: "A comprehensive online vegetable & fruit marketplace specifically tailored for the Hyderabad market. Features real-time pricing engine, multi-vendor management, and customer ordering with admin-controlled inventory.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
    github: "https://github.com/Habibullah786123/sabzimandihyd",
    features: [
      "Dynamic product catalog with category-based filtering",
      "Multi-vendor storefront management panel",
      "Real-time pricing updates and inventory tracking",
      "Customer order management with status tracking",
      "Admin dashboard with sales analytics"
    ]
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "healthcare",
    icon: "🏥",
    gradient: "linear-gradient(135deg, #6c63ff 0%, #3d5afe 100%)",
    description: "Full-featured hospital administration system managing patients, doctors, staff, appointments, and billing. Includes multi-role authentication and comprehensive reporting modules.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "Chart.js"],
    github: "https://github.com/Habibullah786123/hospital-management-service",
    features: [
      "Multi-role access: Admin, Doctor, Staff, Patient",
      "Patient registration and medical records management",
      "Appointment scheduling with doctor availability",
      "Billing and invoice generation system",
      "Dashboard with analytics and reporting"
    ]
  },
  {
    id: 3,
    title: "Pizza Host",
    category: "food",
    icon: "🍕",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
    description: "An interactive pizza ordering platform featuring a dynamic menu builder, real-time order tracking, and a complete admin panel for restaurant management. Custom-built e-commerce engine.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "CSS3"],
    github: "https://github.com/Habibullah786123/piza-host",
    features: [
      "Interactive pizza menu with image galleries",
      "Shopping cart with size and topping customization",
      "Order management with status workflow",
      "Admin panel for menu and order management",
      "Responsive design for mobile ordering"
    ]
  },
  {
    id: 4,
    title: "CFOMS — Car Fuel & Oil Management",
    category: "management",
    icon: "⛽",
    gradient: "linear-gradient(135deg, #ffa726 0%, #ff7043 100%)",
    description: "A fleet fuel and oil tracking system enabling organizations to monitor vehicle fuel consumption, maintenance schedules, and operating costs with detailed analytics.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Habibullah786123/CFOMS",
    features: [
      "Vehicle fleet registration and tracking",
      "Fuel consumption logging and analytics",
      "Oil change and maintenance scheduling",
      "Cost analysis and budget reporting",
      "Multi-user role management"
    ]
  },
  {
    id: 5,
    title: "Online Shopping Store",
    category: "ecommerce",
    icon: "🛍️",
    gradient: "linear-gradient(135deg, #e040fb 0%, #7c4dff 100%)",
    description: "Full-featured e-commerce platform with product management, shopping cart, customer accounts, and order processing. Built from scratch with core PHP and native SQL queries.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "AJAX"],
    github: "https://github.com/Habibullah786123/Online-Shopping-store",
    features: [
      "Product catalog with search and filtering",
      "Shopping cart and checkout workflow",
      "Customer account management",
      "Admin product and order management",
      "Responsive storefront design"
    ]
  },
  {
    id: 6,
    title: "Online Food Ordering",
    category: "food",
    icon: "🍔",
    gradient: "linear-gradient(135deg, #ff5252 0%, #ff1744 100%)",
    description: "A streamlined food ordering web app connecting restaurants with customers. Features menu browsing, cart system, and order management for both users and administrators.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Habibullah786123/Online-food-Ordering",
    features: [
      "Restaurant menu browsing interface",
      "Cart system with quantity management",
      "Order placement and confirmation flow",
      "Admin panel for menu and orders",
      "Customer order history"
    ]
  },
  {
    id: 7,
    title: "School Management System",
    category: "education",
    icon: "🏫",
    gradient: "linear-gradient(135deg, #00b0ff 0%, #0091ea 100%)",
    description: "Comprehensive school administration system handling student enrollment, class scheduling, attendance tracking, grade management, and administrative reporting.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    github: "https://github.com/Habibullah786123/school-management-system",
    features: [
      "Student enrollment and profile management",
      "Class and section management",
      "Attendance tracking system",
      "Grade and examination management",
      "Parent-teacher communication portal"
    ]
  },
  {
    id: 8,
    title: "LMS — Learning Management System",
    category: "education",
    icon: "📚",
    gradient: "linear-gradient(135deg, #26c6da 0%, #00acc1 100%)",
    description: "An e-learning platform featuring course creation, student enrollment, lesson delivery, progress tracking, and assessment tools for educational institutions.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
    github: "https://github.com/Habibullah786123/LMS",
    features: [
      "Course creation and curriculum management",
      "Student enrollment and progress tracking",
      "Lesson and resource delivery",
      "Quiz and assessment engine",
      "Instructor dashboard with analytics"
    ]
  },
  {
    id: 9,
    title: "Student Management System",
    category: "education",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #7e57c2 0%, #651fff 100%)",
    description: "A focused student records management application for tracking student data, academic performance, and administrative tasks within educational institutions.",
    tech: ["PHP", "MySQL", "Bootstrap", "CSS3"],
    github: "https://github.com/Habibullah786123/student-management-system",
    features: [
      "Student registration and profile CRUD",
      "Academic records management",
      "Grade and performance tracking",
      "Search and filter functionality",
      "Report generation"
    ]
  },
  {
    id: 10,
    title: "Grocery Store",
    category: "ecommerce",
    icon: "🛒",
    gradient: "linear-gradient(135deg, #66bb6a 0%, #43a047 100%)",
    description: "An online grocery store with product catalogs, cart management, customer accounts, and admin inventory control. Full e-commerce workflow from browsing to checkout.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Habibullah786123/grocery-store",
    features: [
      "Product catalog with category navigation",
      "Shopping cart with real-time updates",
      "Customer registration and authentication",
      "Admin inventory management panel",
      "Order processing workflow"
    ]
  },
  {
    id: 11,
    title: "University Website",
    category: "education",
    icon: "🏛️",
    gradient: "linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",
    description: "A professional university website featuring departments, faculty information, news & events, admissions portal, and institutional information pages.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    github: "https://github.com/Habibullah786123/university-website",
    features: [
      "Responsive multi-page institutional website",
      "Department and faculty directory",
      "News and events management",
      "Admissions information portal",
      "Contact and inquiry forms"
    ]
  },
  {
    id: 12,
    title: "Barzende — AI Chatbot (FYP)",
    category: "management",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #6c63ff 0%, #e040fb 100%)",
    description: "Final Year Project: An intelligent chatbot platform combining Rasa NLP backend with Flutter mobile frontend. Features natural language understanding, intent classification, and context-aware responses via Firebase cloud sync.",
    tech: ["Flutter", "Dart", "Firebase", "Rasa", "Python", "GPT-3.5"],
    github: "https://github.com/Habibullah786123/barzende-chatbot",
    features: [
      "Multi-platform chatbot (mobile + web)",
      "Rasa NLP pipeline for intent classification",
      "GPT-3.5 API integration for rich responses",
      "Firebase real-time message synchronization",
      "Context-aware conversation management"
    ]
  },
  {
    id: 13,
    title: "Restaurant Website",
    category: "food",
    icon: "🍽️",
    gradient: "linear-gradient(135deg, #ef5350 0%, #e53935 100%)",
    description: "A modern restaurant website with menu display, table reservation, online ordering, and a comprehensive admin panel. Designed for a real restaurant use-case.",
    tech: ["PHP", "MySQL", "Bootstrap", "CSS3", "JavaScript"],
    github: "https://github.com/Habibullah786123/Restaurant-website",
    features: [
      "Beautiful restaurant landing page",
      "Interactive menu with categories",
      "Table reservation system",
      "Online food ordering",
      "Admin panel for content management"
    ]
  },
  {
    id: 14,
    title: "BreathLink — Emergency Ventilator Finder",
    category: "healthcare",
    icon: "🫁",
    gradient: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
    description: "An emergency ventilator tracking and hospital registration system. Features ventilator usage tracking, login workflows, hospital profiles, and live requests.",
    tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "HTML5"],
    github: "https://github.com/Habibullah786123/breath-link",
    features: [
      "Real-time ventilator status and tracking dashboard",
      "Hospital self-registration and administrative portal",
      "Search-by-location engine to find available ventilators",
      "Secure request workflows for emergency dispatchers",
      "Responsive, Tailwind-designed interface"
    ]
  },
  {
    id: 15,
    title: "We Feast — Restaurant Frontend",
    category: "food",
    icon: "🍽️",
    gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    description: "A beautifully designed, highly interactive restaurant landing page. Includes micro-animations, full food cart system frontend, reservation modal, and responsive navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "AOS Animations"],
    github: "https://github.com/Habibullah786123/wefeast-restaurant",
    features: [
      "Stunning entrance animations and hover transitions",
      "Interactive food selector and frontend cart counter",
      "Custom reservation and feedback modals",
      "Smooth scroll navigation and off-canvas mobile menu",
      "Optimized asset loading and high-fidelity typography"
    ]
  },
  {
    id: 16,
    title: "Yummy Restaurant Showcase",
    category: "food",
    icon: "🍔",
    gradient: "linear-gradient(135deg, #f39c12 0%, #d35400 100%)",
    description: "A comprehensive multi-page restaurant site. Features full menus, recipe showcases, reviews, and a customer reservation system frontend.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/Habibullah786123/yummy-restaurant-showcase",
    features: [
      "Interactive food menu categories filter",
      "Customer testimonial slider section",
      "Responsive gallery and chef bios layout",
      "Online booking form with field validations",
      "Multi-page structure with consistent navigation"
    ]
  },
  {
    id: 17,
    title: "Dictionary CRUD Portal",
    category: "management",
    icon: "📖",
    gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    description: "A lightweight web portal for adding, searching, modifying, and deleting words with definitions and descriptions. Fully database-driven word book.",
    tech: ["PHP", "MySQL", "CSS3", "HTML5"],
    github: "https://github.com/Habibullah786123/dictionary-crud-app",
    features: [
      "Complete database CRUD operations on words",
      "Live search capability to retrieve definitions instantly",
      "Responsive, grid-aligned table layout for viewing entries",
      "Safe query inputs and redirection controllers",
      "Word modification dashboard"
    ]
  },
  {
    id: 18,
    title: "Leave Management System",
    category: "management",
    icon: "📋",
    gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
    description: "An internal corporate workflow application for staff to submit leave requests, and for administrative officers to approve, deny, and track logs.",
    tech: ["PHP", "MySQL", "CSS3", "JavaScript"],
    github: "https://github.com/Habibullah786123/leave-management-system",
    features: [
      "Staff authentication and self-service panel",
      "Leave request application submission forms",
      "Admin dashboard to approve, reject, or comment on requests",
      "Status tracking and user profile database",
      "Secure session verification checks"
    ]
  },
  {
    id: 19,
    title: "Hotel Booking Showcase",
    category: "management",
    icon: "🏨",
    gradient: "linear-gradient(135deg, #34495e 0%, #2c3e50 100%)",
    description: "A luxurious frontend landing experience for hotel room reservations, amenities listing, tour packages, and pricing grids.",
    tech: ["HTML5", "CSS3", "JavaScript", "FontAwesome"],
    github: "https://github.com/Habibullah786123/hotel-booking-showcase",
    features: [
      "Rich UI gallery showing premium suites and details",
      "Custom price-range filters and calendar selectors",
      "Interactive amenities checklist and testimonial carousel",
      "Fully responsive layout supporting mobile and desktop screens",
      "Modern aesthetic design with smooth scroll triggers"
    ]
  },
  {
    id: 20,
    title: "JazzCash API Integration",
    category: "ecommerce",
    icon: "💳",
    gradient: "linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",
    description: "A secure integration bridge for processing mobile wallet payments via JazzCash. Includes credentials signing, redirection handler, and response verifier.",
    tech: ["PHP", "JazzCash API", "Bootstrap", "cURL", "JSON"],
    github: "https://github.com/Habibullah786123/jazzcash-payment-gateway",
    features: [
      "Dynamic payload hash generator with merchant credentials",
      "Redirection pipeline sending users to JazzCash gateway",
      "Response listener to process confirmation and transaction logs",
      "Secure checkout forms with client-side verification",
      "Configurable settings for sandbox and production modes"
    ]
  },
  {
    id: 21,
    title: "Personal Resume Showcase",
    category: "education",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
    description: "A multi-page portfolio layout for student academic records, biography, skills tracking, and personal project showcase.",
    tech: ["HTML5", "CSS3", "JavaScript", "FontAwesome"],
    github: "https://github.com/Habibullah786123/personal-portfolio-template",
    features: [
      "Multi-page architecture displaying professional background",
      "Education timeline and skill rating display grids",
      "Working email/message contact page layouts",
      "Downloadable resume integration anchors",
      "Sleek and clean typography using Google Fonts"
    ]
  },
  {
    id: 22,
    title: "Baezende E-Commerce",
    category: "ecommerce",
    icon: "🛍️",
    gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
    description: "A robust, fully-featured online store system. Features categorized catalog searches, admin product entry, active shopping carts, and city-based shipping price configurations.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
    github: "https://github.com/Habibullah786123/baezende-ecommerce",
    features: [
      "Complete shopping cart, checkout, and inventory updating modules",
      "Admin control panel for product uploads and sales tracking",
      "Dynamic shipping rate selector based on city options",
      "Product search engine and customer accounts database",
      "Responsive, multi-column listing grids"
    ]
  },
  {
    id: 23,
    title: "Kingster University Portal",
    category: "education",
    icon: "🏛️",
    gradient: "linear-gradient(135deg, #3498db 0%, #1abc9c 100%)",
    description: "A major university website system containing class enrollment portals, course catalogs, campus event calendars, admin dashboard, and multi-role student applications.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "AOS Animations"],
    github: "https://github.com/Habibullah786123/kingster-university",
    features: [
      "Student admissions enrollment application tracking",
      "Course catalog listings organized by faculty",
      "Campus events calendar database dynamically loaded",
      "Powerful admin backend dashboard for admissions management",
      "High-performance design with beautiful institutional typography"
    ]
  }
];

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavigation();
  initScrollAnimations();
  renderProjects('all');
  initProjectFilter();
  initStatsCounter();
  initSkillBars();
  initBackToTop();
  initContactForm();
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

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Close on link click
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
// PROJECTS
// ══════════════════════════════════════
function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  
  grid.innerHTML = '';
  
  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal visible';
    card.style.animationDelay = `${index * 0.08}s`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    card.innerHTML = `
      <div class="project-card-header" style="background: ${project.gradient};">
        <div class="project-card-gradient">${project.icon}</div>
        <div class="project-card-overlay">
          <a href="${project.github}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation();">
            GitHub <span class="btn-icon">→</span>
          </a>
          <button class="btn btn-secondary" onclick="event.stopPropagation(); openProjectModal(${project.id});">
            Details <span class="btn-icon">🔍</span>
          </button>
        </div>
      </div>
      <div class="project-card-body">
        <div class="project-card-category">${project.category}</div>
        <div class="project-card-title">${project.title}</div>
        <div class="project-card-desc">${project.description}</div>
        <div class="project-card-tech">
          ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => openProjectModal(project.id));
    grid.appendChild(card);

    // Staggered animation
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 80 + 50);
  });
}

function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ── Project Modal ──
function openProjectModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const header = document.getElementById('modalHeader');
  const body = document.getElementById('modalBody');

  header.style.background = project.gradient;
  header.innerHTML = `
    <button class="modal-close" onclick="closeProjectModal()">✕</button>
    <span style="font-size: 4rem;">${project.icon}</span>
  `;

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
// STATS COUNTER
// ══════════════════════════════════════
function initStatsCounter() {
  const stats = [
    { el: document.getElementById('statProjects'), target: 23, suffix: '+' },
    { el: document.getElementById('statLOC'), target: 80, suffix: 'K+' },
    { el: document.getElementById('statTech'), target: 24, suffix: '+' }
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
function initContactForm() {
  // Pre-wire; actual handler is inline
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = 'Sending... ⏳';
  btn.disabled = true;
  
  // Simulate send
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
// TYPED EFFECT (Hero subtitle enhancement)
// ══════════════════════════════════════
(function typeEffect() {
  const roles = [
    'Full-Stack Software Engineer',
    'AI Mobile Developer',
    'Data Operations Specialist',
    'PHP Architect'
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  
  // Create typed element
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;
  
  const typedSpan = document.createElement('span');
  typedSpan.id = 'typed-role';
  typedSpan.style.cssText = 'color: var(--accent-secondary); font-weight: 600;';
  
  // Replace badge text with typed
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
})();
