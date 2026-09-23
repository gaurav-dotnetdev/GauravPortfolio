/**
 * =========================================================================
 * GAURAV YADAV - SENIOR .NET CORE DEVELOPER PORTFOLIO JAVASCRIPT
 * Features: Centralized Config Binding, Project Modal, Filter Tabs,
 * Mobile Menu, Architecture Inspector, Copy-to-Clipboard, Form Handling
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioConfig();
  initNavigation();
  initThemeToggle();
  initProjectModals();
  initProjectFilters();
  initArchitectureInspector();
  initContactActions();
  initScrollSpy();
});

/* =========================================================================
   1. PORTFOLIO CONFIGURATION BINDING
   ========================================================================= */
function initPortfolioConfig() {
  if (typeof PORTFOLIO_CONFIG === 'undefined') return;

  const cfg = PORTFOLIO_CONFIG;

  // Bind Personal Data
  document.querySelectorAll('[data-cfg="name"]').forEach(el => el.textContent = cfg.personal.name);
  document.querySelectorAll('[data-cfg="roleTitle"]').forEach(el => el.textContent = cfg.personal.roleTitle);
  document.querySelectorAll('[data-cfg="subtitle"]').forEach(el => el.textContent = cfg.personal.subtitle);
  document.querySelectorAll('[data-cfg="experienceYears"]').forEach(el => el.textContent = cfg.personal.experienceYears);
  document.querySelectorAll('[data-cfg="exactExperience"]').forEach(el => el.textContent = cfg.personal.exactExperience);
  document.querySelectorAll('[data-cfg="location"]').forEach(el => el.textContent = cfg.personal.location);
  document.querySelectorAll('[data-cfg="tagline"]').forEach(el => el.textContent = cfg.personal.tagline);
  document.querySelectorAll('[data-cfg="email"]').forEach(el => {
    el.textContent = cfg.personal.email;
    if (el.tagName === 'A') el.href = cfg.social.emailMailto;
  });
  document.querySelectorAll('[data-cfg="phone"]').forEach(el => {
    el.textContent = cfg.personal.phoneFormatted;
    if (el.tagName === 'A') el.href = cfg.social.phoneTel;
  });

  // Bind Social Links
  document.querySelectorAll('[data-cfg="linkedin-link"]').forEach(el => {
    el.href = cfg.social.linkedin;
  });
  document.querySelectorAll('[data-cfg="github-link"]').forEach(el => {
    el.href = cfg.social.github;
  });

  // Bind Resume URLs
  document.querySelectorAll('[data-cfg="resume-view"]').forEach(el => {
    el.href = cfg.resume.viewUrl;
  });

  // Set Dynamic Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* =========================================================================
   2. NAVIGATION & MOBILE MENU
   ========================================================================= */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-link, .mobile-nav-actions .nav-link');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function openMobileMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

/* =========================================================================
   3. THEME TOGGLE (DARK / HYBRID LIGHT)
   ========================================================================= */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const currentTheme = localStorage.getItem('pk_portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('pk_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} theme`);
    });
  });
}

/* =========================================================================
   4. DETAILED PROJECT DATA & MODALS
   ========================================================================= */
const PROJECT_DATABASE = {
  carvaidya: {
    title: "CarVaidya",
    category: "Automotive",
    duration: "Mar 2023 – Present",
    tagline: "Backend and web application development for service booking and payment functionality.",
    technologies: ["C#", ".NET 6", "ASP.NET Core", "Web API", "EF Core", "LINQ", "SQL Server", "Stored Procedures", "JWT", "Dependency Injection", "JavaScript", "jQuery", "Ajax", "HTML", "CSS", "IIS"],
    overview: "Backend and web application development for a vehicle service-related platform focusing on service booking, payment functionality, and database query optimization.",
    keyFeatures: [
      "REST APIs for service booking and payment modules",
      "JWT authentication and authorization implementation",
      "Dependency Injection and clean application architecture maintenance",
      "SQL Server stored procedures, Entity Framework Core, and LINQ database operations",
      "Application and query performance optimization",
      "IIS production deployment support"
    ],
    technicalImplementation: [
      "Developed REST APIs for service booking and payment modules using C#, .NET 6, ASP.NET Core, and Web API.",
      "Worked with SQL Server, Stored Procedures, Entity Framework Core, and LINQ for database access.",
      "Implemented JWT authentication and authorization along with Dependency Injection.",
      "Built interactive UI components using JavaScript, jQuery, Ajax, HTML, and CSS.",
      "Supported production deployments on IIS."
    ],
    myResponsibilities: [
      "Engineered backend REST APIs for service booking and payment modules.",
      "Authored and optimized SQL Server stored procedures and database queries.",
      "Implemented JWT authentication, authorization, and Dependency Injection.",
      "Conducted application and query performance tuning.",
      "Managed IIS production deployment and support."
    ]
  },

  steapl: {
    title: "Steapl",
    category: "Education",
    duration: "Nov 2022 – Feb 2023",
    tagline: "Online teaching and training platform.",
    technologies: ["C#", ".NET 6", "ASP.NET Core", "Web API", "SQL Server", "JavaScript", "HTML", "CSS"],
    overview: "Online teaching and training platform engineered to support educational features, REST API services, and database operations.",
    keyFeatures: [
      "Application functionality built using .NET 6, C#, ASP.NET Core, and Web API",
      "REST API development for platform modules",
      "SQL Server database operations and transaction management",
      "Application performance optimization",
      "Client requirement handling and technical issue resolution"
    ],
    technicalImplementation: [
      "Developed application functionality using .NET 6, C#, ASP.NET Core, and Web API.",
      "Developed REST APIs and handled database operations with SQL Server.",
      "Worked on application performance optimization.",
      "Collaborated with clients to understand requirements and resolve issues."
    ],
    myResponsibilities: [
      "Developed application functionality using .NET 6, C#, ASP.NET Core, and Web API.",
      "Built REST APIs and managed SQL Server database operations.",
      "Worked on application performance optimization.",
      "Collaborated with clients to understand requirements and resolve issues."
    ]
  },

  seleniumkitchen: {
    title: "Selenium Kitchen",
    category: "E-Commerce",
    duration: "seleniumkitchen.com",
    tagline: "E-commerce food ordering website for healthy and homemade food products.",
    technologies: ["ASP.NET Core", "C#", "JavaScript", "SQL Server", "HTML5", "CSS3"],
    overview: "Developed and maintained Selenium Kitchen, an e-commerce website for selling healthy and homemade food products such as cookies, cupcakes, and other bakery items. The application provides customers with an easy-to-use interface to browse products, view detailed product information, select available quantities/variants, check pricing and discounts, and place orders online.",
    keyFeatures: [
      "Product listing and product-detail modules with pricing, discounts, product variants, ingredients, and availability",
      "Shopping/e-commerce functionality for online product ordering",
      "Database-driven content management using Microsoft SQL Server",
      "Product management, categories, pricing, stock/availability, and customer information",
      "Responsive and user-friendly web pages created using HTML5, CSS3, and JavaScript"
    ],
    technicalImplementation: [
      "Developed web application architecture using ASP.NET Core and C#.",
      "Implemented dynamic interactive frontend functionality using JavaScript.",
      "Designed and managed application data using Microsoft SQL Server.",
      "Implemented server-side business logic and database operations using C# and SQL Server.",
      "Ensured application maintainability, validation, error handling, and performance."
    ],
    myResponsibilities: [
      "Developed web application modules using ASP.NET Core and C#.",
      "Implemented product listing, variants, pricing, discounts, and online ordering features.",
      "Designed and managed database operations in Microsoft SQL Server.",
      "Worked on website performance, input validation, error handling, and user experience."
    ]
  },

  playzone: {
    title: "PlayZone",
    category: "Enterprise & Web Applications",
    duration: "BSD InfoTech Pvt. Ltd.",
    tagline: "Web application developed at BSD InfoTech Pvt. Ltd.",
    technologies: ["C#", "ASP.NET", ".NET", "SQL Server", "Stored Procedures", "Triggers", "JavaScript", "jQuery", "HTML", "CSS"],
    overview: "Web application developed during tenure at BSD InfoTech Pvt. Ltd. focusing on application features, SQL database procedures, and client communication.",
    keyFeatures: [
      "Web application functionality built using C# and ASP.NET",
      "Database development and maintenance using SQL Server, Stored Procedures, and Triggers",
      "Frontend user interface implemented using JavaScript, jQuery, HTML, and CSS",
      "Application enhancements, issue resolution, and client communication"
    ],
    technicalImplementation: [
      "Built application components using C#, ASP.NET, and SQL Server.",
      "Developed and maintained database stored procedures and triggers.",
      "Communicated with clients regarding application requirements and provided production support."
    ],
    myResponsibilities: [
      "Developed web application components using C#, ASP.NET, and SQL Server.",
      "Authored and maintained SQL Server stored procedures and triggers.",
      "Resolved application issues and provided client production support across the full SDLC."
    ]
  },

  itgoachq: {
    title: "ITGOA CHQ",
    category: "Enterprise & Web Applications",
    duration: "BSD InfoTech Pvt. Ltd.",
    tagline: "Web application developed at BSD InfoTech Pvt. Ltd.",
    technologies: ["C#", "ASP.NET", ".NET", "SQL Server", "Stored Procedures", "Triggers", "JavaScript", "jQuery", "HTML", "CSS"],
    overview: "Web application project developed at BSD InfoTech Pvt. Ltd. utilizing C#, ASP.NET, and SQL Server.",
    keyFeatures: [
      "Web application development using C# and ASP.NET",
      "Database operations with SQL Server, Stored Procedures, and Triggers",
      "Client requirement handling and application enhancements"
    ],
    technicalImplementation: [
      "Engineered backend functionality in C# and ASP.NET with SQL Server database access.",
      "Maintained database scripts, procedures, and frontend interactions."
    ],
    myResponsibilities: [
      "Developed application modules using C#, ASP.NET, and SQL Server.",
      "Maintained database stored procedures, triggers, and client support."
    ]
  },

  globallaw: {
    title: "Global Law Directories",
    category: "Enterprise & Web Applications",
    duration: "BSD InfoTech Pvt. Ltd.",
    tagline: "Web directory application developed at BSD InfoTech Pvt. Ltd.",
    technologies: ["C#", "ASP.NET", ".NET", "SQL Server", "Stored Procedures", "Triggers", "JavaScript", "jQuery", "HTML", "CSS"],
    overview: "Web directory project developed at BSD InfoTech Pvt. Ltd. leveraging C#, ASP.NET, and SQL Server.",
    keyFeatures: [
      "Directory web application development using C# and ASP.NET",
      "Relational database queries, Stored Procedures, and Triggers in SQL Server",
      "Frontend interface built using JavaScript, jQuery, HTML, and CSS"
    ],
    technicalImplementation: [
      "Developed application logic and database interactions in C# and SQL Server.",
      "Supported full SDLC tasks and production issue resolution."
    ],
    myResponsibilities: [
      "Developed application features using C#, ASP.NET, and SQL Server.",
      "Maintained database procedures and supported client requirements."
    ]
  },

  kiwi: {
    title: "KIWI",
    category: "Enterprise & Web Applications",
    duration: "BSD InfoTech Pvt. Ltd.",
    tagline: "Application developed at BSD InfoTech Pvt. Ltd.",
    technologies: ["C#", "ASP.NET", ".NET", "SQL Server", "Stored Procedures", "Triggers", "JavaScript", "jQuery", "HTML", "CSS"],
    overview: "Software project developed at BSD InfoTech Pvt. Ltd. utilizing C#, ASP.NET, and SQL Server.",
    keyFeatures: [
      "Application development using C#, ASP.NET, and SQL Server",
      "UI functionality built with JavaScript, jQuery, HTML, and CSS",
      "Production support and application enhancement handling"
    ],
    technicalImplementation: [
      "Developed application components and managed SQL Server operations.",
      "Handled client communications and production bug fixes."
    ],
    myResponsibilities: [
      "Developed web/desktop components using C#, ASP.NET, and SQL Server.",
      "Maintained database procedures and provided full SDLC production support."
    ]
  }
};

function initProjectModals() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDuration = document.getElementById('modal-duration');
  const modalOverview = document.getElementById('modal-overview');
  const modalTechList = document.getElementById('modal-tech-list');
  const modalFeaturesList = document.getElementById('modal-features-list');
  const modalTechImplList = document.getElementById('modal-tech-impl-list');
  const modalRespList = document.getElementById('modal-resp-list');
  const closeBtn = document.querySelector('.modal-close-btn');

  function openProjectModal(projectId) {
    const project = PROJECT_DATABASE[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDuration.textContent = `Duration: ${project.duration}`;
    modalOverview.textContent = project.overview;

    // Tech badges
    modalTechList.innerHTML = project.technologies
      .map(t => `<span class="skill-badge primary-skill">${t}</span>`)
      .join('');

    // Key features
    modalFeaturesList.innerHTML = project.keyFeatures
      .map(f => `<li>${f}</li>`)
      .join('');

    // Tech implementation
    modalTechImplList.innerHTML = project.technicalImplementation
      .map(i => `<li>${i}</li>`)
      .join('');

    // Responsibilities
    modalRespList.innerHTML = project.myResponsibilities
      .map(r => `<li>${r}</li>`)
      .join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-open-project');
      openProjectModal(projId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

/* =========================================================================
   5. PROJECT CATEGORY FILTERING
   ========================================================================= */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* =========================================================================
   6. ARCHITECTURE INSPECTOR
   ========================================================================= */
function initArchitectureInspector() {
  const archCards = document.querySelectorAll('.arch-layer-card');

  archCards.forEach(card => {
    card.addEventListener('click', () => {
      archCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const layerName = card.querySelector('.arch-layer-name').textContent;
      showToast(`Inspecting Architecture Layer: ${layerName}`);
    });
  });
}

/* =========================================================================
   7. CONTACT ACTIONS & CLIPBOARD
   ========================================================================= */
function initContactActions() {
  // Copy Email Button
  const copyEmailBtn = document.getElementById('btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_CONFIG.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  // Copy Phone Button
  const copyPhoneBtn = document.getElementById('btn-copy-phone');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      const phone = PORTFOLIO_CONFIG.personal.phone;
      navigator.clipboard.writeText(phone).then(() => {
        showToast('Phone number copied to clipboard!');
      }).catch(() => {
        showToast(`Phone: ${phone}`);
      });
    });
  }

  // Contact Form Submission (Client UI Only)
  const contactForm = document.getElementById('portfolio-contact-form');
  const formMsg = document.getElementById('form-status-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('form-name').value.trim();
      const emailInput = document.getElementById('form-email').value.trim();
      const subjectInput = document.getElementById('form-subject').value.trim();
      const msgInput = document.getElementById('form-message').value.trim();

      if (!nameInput || !emailInput || !msgInput) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Generate mailto link as direct action
      const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.personal.email}?subject=${encodeURIComponent(subjectInput || 'Portfolio Inquiry from ' + nameInput)}&body=${encodeURIComponent('From: ' + nameInput + ' (' + emailInput + ')\n\n' + msgInput)}`;

      if (formMsg) {
        formMsg.innerHTML = `Thank you, <strong>${nameInput}</strong>! Your email client will now open to send this message to <strong>${PORTFOLIO_CONFIG.personal.email}</strong>.`;
        formMsg.className = 'form-status-msg success';
      }

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);

      contactForm.reset();
    });
  }
}

/* =========================================================================
   8. SCROLLSPY ACTIVE NAV LINK HIGHLIGHTER
   ========================================================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .mobile-nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* =========================================================================
   9. TOAST NOTIFICATION HELPER
   ========================================================================= */
let toastTimeout;
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
