/**
 * NexGen C2C Skills - Main Interactive Script (Enhanced Multi-Page & Store Linked)
 * Campus to Corporate | Building Future-Ready Talent
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Executive Brand Theme
  document.documentElement.removeAttribute('data-theme');


  // 2. Sticky Navbar & Back to Top Button
  const navbar = document.querySelector('.header-nav');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (!link.parentElement.classList.contains('nav-dropdown')) {
          navMenu.classList.remove('open');
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        }
      });
    });
  }

  // 4. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 5. Animated Number Counters
  const counterElements = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        const duration = 1800;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = target + (entry.target.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current) + (entry.target.getAttribute('data-suffix') || '');
          }
        }, stepTime);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => counterObserver.observe(el));

  // 6. Dynamic Events Ticker Marquee Render
  const tickerContainer = document.getElementById('dynamic-ticker-track');
  if (tickerContainer && typeof NexGenStore !== 'undefined') {
    const events = NexGenStore.get('events') || [];
    if (events.length > 0) {
      const itemsHtml = events.map(evt => `
        <div class="ticker-item">
          <span class="badge-mini">${evt.category}</span>
          <strong>${evt.title}</strong>
          <span><i class="far fa-calendar-alt"></i> ${evt.date} (${evt.time})</span>
          <a href="${evt.link || 'book-demo.html'}" style="color:var(--accent-gold); font-weight:700; text-decoration:underline; margin-left:0.4rem;">Register Free &rarr;</a>
        </div>
      `).join('');
      // Double the track for seamless continuous loop
      tickerContainer.innerHTML = itemsHtml + itemsHtml;
    }
  }

  // 7. Dynamic Gallery Render & Filter
  const galleryGrid = document.getElementById('dynamic-gallery-grid');
  if (galleryGrid && typeof NexGenStore !== 'undefined') {
    const galleryItems = NexGenStore.get('gallery') || [];
    renderGallery(galleryItems);

    const galleryFilters = document.querySelectorAll('.gallery-filter-btn');
    galleryFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        if (cat === 'all') {
          renderGallery(galleryItems);
        } else {
          const filtered = galleryItems.filter(item => item.category.toLowerCase() === cat.toLowerCase());
          renderGallery(filtered);
        }
      });
    });
  }

  function renderGallery(items) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = items.map(item => `
      <div class="gallery-card interactive-card" onclick="openLightbox('${item.image}', '${item.title.replace(/'/g, "\\'")}', '${item.tag}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="pill-badge" style="font-size:0.75rem; padding:0.2rem 0.6rem; margin-bottom:0.4rem; align-self:flex-start;">${item.tag}</span>
          <h4 style="font-size:1.05rem; color:#ffffff; font-weight:700; line-height:1.3;">${item.title}</h4>
          <small style="color:var(--accent-gold); margin-top:0.2rem;"><i class="fas fa-search-plus"></i> Click to Zoom</small>
        </div>
      </div>
    `).join('');
  }

  // Lightbox Handlers
  window.openLightbox = function(src, title, tag) {
    const modal = document.getElementById('gallery-lightbox');
    if (!modal) return;
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-tag').textContent = tag;
    modal.classList.add('active');
  };

  window.closeLightbox = function() {
    const modal = document.getElementById('gallery-lightbox');
    if (modal) modal.classList.remove('active');
  };

  // 8. Dynamic Testimonials Render
  const testimonialsGrid = document.getElementById('dynamic-testimonials-grid');
  if (testimonialsGrid && typeof NexGenStore !== 'undefined') {
    const testimonials = NexGenStore.get('testimonials') || [];
    testimonialsGrid.innerHTML = testimonials.map(t => `
      <div class="testimonial-card interactive-card reveal">
        <div class="stars-row">
          ${'<i class="fas fa-star"></i>'.repeat(t.rating || 5)}
        </div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
          <div>
            <strong style="color:#ffffff; font-size:1.05rem; display:block;">${t.name}</strong>
            <small style="color:var(--accent-cyan); font-weight:600;">${t.role}</small>
            <small style="color:var(--text-muted); display:block;">${t.org}</small>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 9. AI Tools Grid Filter
  const filterBtns = document.querySelectorAll('.tool-filter-btn');
  const toolItems = document.querySelectorAll('.tool-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      toolItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'flex';
          item.style.animation = 'floatHero 0.4s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 10. Interactive Career Track Quiz
  let quizAnswers = { role: '', goal: '', format: '' };

  window.selectQuizOption = function(step, key, value, element) {
    quizAnswers[key] = value;
    const parent = element.parentElement;
    parent.querySelectorAll('.quiz-option-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');

    // Next Step
    setTimeout(() => {
      document.getElementById(`quiz-step-${step}`).classList.remove('active');
      if (step < 3) {
        document.getElementById(`quiz-step-${step + 1}`).classList.add('active');
        document.querySelector('.quiz-progress-fill').style.width = `${((step + 1) / 3) * 100}%`;
      } else {
        renderQuizResult();
      }
    }, 300);
  };

  function renderQuizResult() {
    const resultBox = document.getElementById('quiz-result');
    resultBox.classList.add('active');
    document.querySelector('.quiz-progress-fill').style.width = '100%';

    let title = 'AI Foundation & Executive Accelerator Track';
    let desc = 'Build practical AI productivity skills, automate workflows, and master strategic decision-making with hands-on toolkits.';
    
    if (quizAnswers.role === 'student') {
      title = 'AI Foundation & Campus to Corporate (C2C) Master Track';
      desc = 'Ideal for building high-impact job-ready skills: Generative AI, Communication, 7 Habits framework, and Industrial readiness.';
    } else if (quizAnswers.role === 'faculty') {
      title = 'AI Train the Trainer (TTT) Certification';
      desc = 'Empower your institution and students. Master pedagogy for AI tools, curriculum integration, and student mentoring.';
    } else if (quizAnswers.goal === 'technical') {
      title = 'Industry-Ready Technical & Automation Program';
      desc = 'Deep dive into PLC, HMI, and industrial sensors with real factory case studies.';
    }

    document.getElementById('quiz-result-title').textContent = title;
    document.getElementById('quiz-result-desc').textContent = desc;
  }

  window.resetQuiz = function() {
    quizAnswers = { role: '', goal: '', format: '' };
    document.querySelectorAll('.quiz-option-card').forEach(card => card.classList.remove('selected'));
    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('quiz-step-1').classList.add('active');
    document.getElementById('quiz-step-2').classList.remove('active');
    document.getElementById('quiz-step-3').classList.remove('active');
    document.querySelector('.quiz-progress-fill').style.width = '33%';
  };

  // 11. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 12. Modal Dialogs (Brochure Download & Course Detail)
  const brochureModal = document.getElementById('brochure-modal');

  window.openBrochureModal = function(courseName = 'NexGen C2C Master Brochure') {
    if (brochureModal) {
      document.getElementById('modal-course-title').textContent = courseName;
      brochureModal.classList.add('active');
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  };

  // Close modals on backdrop click
  document.querySelectorAll('.modal-overlay, .lightbox-modal').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // 13. Contact & Demo Booking Form Submissions
  const contactForm = document.getElementById('main-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const track = document.getElementById('form-track').value;
      const message = document.getElementById('form-message').value.trim();

      if (!name || !phone) {
        alert('Please provide your name and contact phone number.');
        return;
      }

      // Save to Store CRM
      if (typeof NexGenStore !== 'undefined') {
        NexGenStore.addLead({
          name,
          phone,
          email,
          program: track,
          message: message || 'Direct Contact Form Inquiry',
          type: 'Direct Form'
        });
      }

      // Format WhatsApp Message
      const waText = encodeURIComponent(
        `*New Inquiry - NexGen C2C Skills*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `✉️ *Email:* ${email || 'N/A'}\n` +
        `🎯 *Selected Program:* ${track}\n` +
        `💬 *Message:* ${message || 'Interested in course curriculum and batch schedules.'}`
      );

      const waUrl = `https://wa.me/917078437914?text=${waText}`;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Connecting to WhatsApp...';
      submitBtn.style.background = '#25D366';
      submitBtn.style.color = '#fff';

      setTimeout(() => {
        window.open(waUrl, '_blank');
        contactForm.reset();
        submitBtn.innerHTML = '<span>Submit & Chat with Advisor</span> <i class="fas fa-paper-plane"></i>';
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 800);
    });
  }

  // Demo Booking Form
  const demoForm = document.getElementById('demo-booking-form');
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('d-name').value;
      const phone = document.getElementById('d-phone').value;
      const email = document.getElementById('d-email').value;
      const program = document.getElementById('d-program').value;
      const slot = document.getElementById('d-slot').value;
      const notes = document.getElementById('d-notes').value;

      if (typeof NexGenStore !== 'undefined') {
        NexGenStore.addLead({
          name,
          phone,
          email,
          program: `Demo: ${program} (${slot})`,
          message: notes || 'Demo Session Booking',
          type: 'Demo Request'
        });
      }

      const waText = encodeURIComponent(
        `*Free Demo Booking - NexGen C2C Skills*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `✉️ *Email:* ${email}\n` +
        `🎓 *Program:* ${program}\n` +
        `⏰ *Preferred Slot:* ${slot}\n` +
        `📝 *Notes:* ${notes || 'Ready to attend free live demo.'}`
      );

      window.open(`https://wa.me/917078437914?text=${waText}`, '_blank');
      alert(`Thank you ${name}! Your demo slot request for "${program}" has been recorded. Our coordinator will send the meeting link to ${phone}.`);
      demoForm.reset();
    });
  }

  // 6. Moving Landing Pages Slider (Left-to-Right Animated Carousel)
  const sliderTrack = document.getElementById('moving-slider-track');
  const slides = document.querySelectorAll('.moving-slide');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dots = document.querySelectorAll('.dot-btn');
  let currentSlide = 0;
  let autoSlideTimer = null;

  function updateSlider(index) {
    if (!sliderTrack || slides.length === 0) return;
    currentSlide = (index + slides.length) % slides.length;
    sliderTrack.style.transform = `translateX(-${(currentSlide * 100) / slides.length}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    updateSlider(currentSlide + 1);
  }

  function prevSlide() {
    updateSlider(currentSlide - 1);
  }

  if (sliderTrack && slides.length > 0) {
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); resetAutoSlide(); });
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
        updateSlider(slideIdx);
        resetAutoSlide();
      });
    });

    function startAutoSlide() {
      autoSlideTimer = setInterval(nextSlide, 3000);
    }
    function resetAutoSlide() {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      startAutoSlide();
    }
    startAutoSlide();

    const sliderContainer = document.querySelector('.hero-slider-section');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => { if (autoSlideTimer) clearInterval(autoSlideTimer); });
      sliderContainer.addEventListener('mouseleave', () => { resetAutoSlide(); });
    }
  }

  // 7. Career Path Finder Selector
  window.selectCareerGoal = function(goalKey) {
    document.querySelectorAll('.career-path-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-goal') === goalKey);
    });
    document.querySelectorAll('.career-result-panel').forEach(panel => {
      panel.style.display = panel.getAttribute('data-panel') === goalKey ? 'block' : 'none';
    });
  };

  // 8. Homepage Events Horizontal Slider
  const eventsTrack = document.getElementById('home-events-track');
  const eventsPrev = document.getElementById('events-prev-btn');
  const eventsNext = document.getElementById('events-next-btn');

  if (eventsTrack) {
    let eventSlideIndex = 0;
    const cardWidth = 405; // 380px + gap

    function slideEvents(direction) {
      const cards = eventsTrack.querySelectorAll('.events-slide-card');
      const maxIndex = Math.max(0, cards.length - 2);
      if (direction === 'next') {
        eventSlideIndex = (eventSlideIndex + 1) > maxIndex ? 0 : eventSlideIndex + 1;
      } else {
        eventSlideIndex = (eventSlideIndex - 1) < 0 ? maxIndex : eventSlideIndex - 1;
      }
      eventsTrack.style.transform = `translateX(-${eventSlideIndex * cardWidth}px)`;
    }

    if (eventsNext) eventsNext.addEventListener('click', () => slideEvents('next'));
    if (eventsPrev) eventsPrev.addEventListener('click', () => slideEvents('prev'));

    // Auto slide events every 4 seconds
    let eventsTimer = setInterval(() => slideEvents('next'), 4000);
    eventsTrack.addEventListener('mouseenter', () => clearInterval(eventsTimer));
    eventsTrack.addEventListener('mouseleave', () => {
      eventsTimer = setInterval(() => slideEvents('next'), 4000);
    });
  }

  renderCmsContent();
});

function cmsEscape(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cmsLines(text) {
  return String(text || '').split(/\n/).map(s => s.trim()).filter(Boolean);
}

function renderCmsContent() {
  if (typeof NexGenStore === 'undefined') return;
  renderCmsPillars('cms-pillars-home', false);
  renderCmsPillars('cms-pillars-programs', true);
  renderCmsModules('cms-modules-ai', 'ai');
  renderCmsModules('cms-modules-ai-catalog', 'ai');
  renderCmsModules('cms-modules-automation', 'automation');
  renderCmsModules('cms-modules-opex', 'opex');
}

function renderCmsPillars(containerId, detailed) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  const pillars = NexGenStore.get('pillars') || [];
  if (!pillars.length) return;

  const themeMap = {
    ai: { card: 'ai-card', icon: 'ai-icon', list: 'ai-list', pill: 'midnight', btn: 'btn-navy' },
    automation: { card: 'tech-card', icon: 'tech-icon', list: 'tech-list', pill: 'forest-theme', btn: 'btn-forest' },
    opex: { card: 'op-card', icon: 'op-icon', list: 'op-list', pill: '', btn: 'btn-primary' }
  };

  wrap.innerHTML = pillars.map(p => {
    const theme = themeMap[p.theme] || themeMap.ai;
    const bullets = detailed && p.detailBullets && p.detailBullets.length ? p.detailBullets : (p.bullets || []);
    const extraBtn = detailed
      ? `<a href="book-demo.html" class="btn btn-outline" style="width:100%;">${cmsEscape(p.demoCta || 'Book Demo')}</a>`
      : '';
    const capsLabel = detailed
      ? `<strong style="font-size:0.88rem; color:var(--midnight-indigo); display:block; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Key Capabilities:</strong>`
      : '';
    return `
      <div class="vertical-pillar-card ${theme.card}">
        <div>
          <div class="vertical-icon-box ${theme.icon}"><i class="fas ${cmsEscape(p.icon || 'fa-graduation-cap')}"></i></div>
          <span class="pill-badge ${theme.pill}" style="font-size:0.75rem; margin-bottom:0.6rem;">${cmsEscape(p.badge || '')}</span>
          <h3 style="font-size:1.4rem; color:var(--midnight-indigo); margin-bottom:0.4rem;">${cmsEscape(p.title)}</h3>
          <p style="font-size:0.92rem; font-weight:700; color:var(--midnight-indigo); margin-bottom:0.8rem;">${cmsEscape(p.tagline)}</p>
          <p style="font-size:0.88rem; color:var(--text-body-dark); line-height:1.6; margin-bottom:1.2rem;">${cmsEscape(p.description)}</p>
          <div class="course-duration-bar">
            <span><i class="far fa-clock"></i> Course Duration: ${cmsEscape(p.duration)}</span>
          </div>
          ${capsLabel}
          <ul class="capabilities-list ${theme.list}">
            ${bullets.map(b => `<li><i class="fas fa-check-circle"></i> <div>${cmsEscape(b)}</div></li>`).join('')}
          </ul>
        </div>
        <div style="margin-top:1.5rem; display:flex; flex-direction:column; gap:0.6rem;">
          <a href="${cmsEscape(p.link || '#')}" class="btn ${theme.btn}" style="width:100%;">${cmsEscape(p.cta || 'View Programs')}</a>
          ${extraBtn}
        </div>
      </div>`;
  }).join('');
}

function renderCmsModules(containerId, pillar) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  const modules = (NexGenStore.get('modules') || []).filter(m => m.pillar === pillar);
  if (!modules.length) {
    if (wrap.id === 'cms-modules-opex') return;
    wrap.style.display = 'none';
    const section = wrap.closest('section');
    if (section && (wrap.id === 'cms-modules-opex' || wrap.id === 'cms-modules-automation')) {
      const onlyCms = section.querySelectorAll('[id^="cms-modules-"]').length === 1 && !section.querySelector('.industrial-table');
      if (onlyCms) section.style.display = 'none';
    }
    return;
  }
  wrap.style.display = '';
  const parentSection = wrap.closest('section');
  if (parentSection) parentSection.style.display = '';

  if (pillar === 'opex') {
    wrap.innerHTML = modules.map(mod => {
      const items = cmsLines(mod.modulesText);
      const img = mod.image || 'assets/images/operational/tool_oee.jpg';
      return `
      <div class="lean-tool-item-card">
        <div class="lean-tool-img-header">
          <img src="${cmsEscape(img)}" alt="${cmsEscape(mod.title)}">
        </div>
        <div class="lean-tool-body">
          <div>
            <span class="lean-tool-badge">${cmsEscape(mod.badge || 'MODULE')}</span>
            <h3 class="lean-tool-title">${cmsEscape(mod.title)}</h3>
            <div class="course-duration-bar" style="margin-bottom:0.85rem;"><span><i class="far fa-clock"></i> Course Duration: ${cmsEscape(mod.duration)}</span></div>
            <p class="lean-tool-desc">${cmsEscape(mod.subtitle)}</p>
            <ul class="lean-tool-points">
              ${items.map(item => `<li><i class="fas fa-check-circle"></i> <span>${cmsEscape(item)}</span></li>`).join('')}
            </ul>
          </div>
          <div>
            <a href="book-demo.html" class="btn btn-sm btn-primary" style="width:100%;">${cmsEscape(mod.cta || 'Enroll Now')}</a>
          </div>
        </div>
      </div>`;
    }).join('');
    return;
  }

  wrap.innerHTML = modules.map(mod => {
    const items = cmsLines(mod.modulesText);
    const tools = String(mod.tools || '').split(',').map(s => s.trim()).filter(Boolean);
    return `
      <div class="course-item-card interactive-card reveal">
        <div>
          <span class="course-num-badge">${cmsEscape(mod.badge || 'MODULE')}</span>
          <h3 class="course-title">${cmsEscape(mod.title)}</h3>
          <p class="course-subtitle">${cmsEscape(mod.subtitle)}</p>
          <div class="course-duration-bar">
            <span><i class="far fa-clock"></i> Course Duration: ${cmsEscape(mod.duration)}</span>
            <span><i class="fas fa-cubes"></i> ${items.length} Modules</span>
          </div>
          <ul class="course-modules-list">
            ${items.map(item => `<li class="module-box"><div class="module-header-text"><i class="fas fa-check-circle" style="color:var(--warm-coral); margin-right:6px;"></i> ${cmsEscape(item)}</div></li>`).join('')}
          </ul>
        </div>
        <div>
          ${tools.length ? `<div class="course-tools-strip" style="margin-bottom:1.2rem;"><strong>Key Tools:</strong> ${tools.map(t => `<span class="tool-tag">${cmsEscape(t)}</span>`).join('')}</div>` : ''}
          <a href="book-demo.html" class="btn btn-primary btn-block"><span>${cmsEscape(mod.cta || 'Enroll Now')}</span> <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>`;
  }).join('');
}


