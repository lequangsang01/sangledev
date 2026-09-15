/**
 * Interactive CV Controller
 * Handles Language Switching (VI / EN / ZH), Theme Toggling (Light / Dark),
 * Project Filtering, Quick Copy, and Print PDF.
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  let currentLang = localStorage.getItem('user_cv_lang') || 'vi';
  let currentTheme = localStorage.getItem('user_cv_theme') || 'light';
  let currentCategory = 'all';

  // Ensure validity
  if (!cvData[currentLang]) currentLang = 'vi';

  // Apply Initial Theme
  applyTheme(currentTheme);

  // Render Full Content
  renderCV(currentLang, currentCategory);

  // Bind Event Listeners
  setupEventListeners();

  /**
   * Apply Theme
   */
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user_cv_theme', theme);
    
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      const langData = cvData[currentLang];
      themeBtn.setAttribute('title', theme === 'dark' ? langData.meta.themeBtnLight : langData.meta.themeBtnDark);
    }
  }

  /**
   * Main Render Function
   */
  function renderCV(lang, filterCategory = 'all') {
    const data = cvData[lang];
    if (!data) return;

    document.documentElement.lang = lang;

    // 1. Meta & Header Controls
    const brandBadge = document.getElementById('brand-status-badge');
    if (brandBadge) {
      brandBadge.innerHTML = `<span class="pulse-dot"></span> <span>${data.meta.badge}</span>`;
    }

    const printBtn = document.getElementById('btn-print-cv');
    if (printBtn) {
      printBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        <span>${data.meta.printBtn}</span>
      `;
    }

    // Active Language Switcher Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 2. Personal Information
    document.getElementById('candidate-name').textContent = data.personal.name;
    document.getElementById('candidate-subname').textContent = data.personal.subName ? `(${data.personal.subName})` : '';
    document.getElementById('candidate-title').textContent = data.personal.title;
    document.getElementById('candidate-tagline').textContent = data.personal.tagline;

    // Contact List
    const contactContainer = document.getElementById('header-contacts');
    if (contactContainer) {
      contactContainer.innerHTML = `
        <div class="contact-pill" data-copy="${data.personal.phone}" title="Click to copy">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span class="contact-val">${data.personal.phoneDisplay}</span>
          <span class="copy-hint">Copy</span>
        </div>

        <div class="contact-pill" data-copy="${data.personal.email}" title="Click to copy">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span class="contact-val">${data.personal.email}</span>
          <span class="copy-hint">Copy</span>
        </div>

        <a class="contact-pill" href="${data.personal.website}" target="_blank" rel="noopener noreferrer">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span class="contact-val">${data.personal.websiteDisplay}</span>
        </a>

        <div class="contact-pill">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span class="contact-val">${data.personal.location}</span>
        </div>
      `;
    }

    // 3. Highlight Metrics Strip
    const metricsContainer = document.getElementById('metrics-strip');
    if (metricsContainer) {
      metricsContainer.innerHTML = data.metrics.map(m => `
        <div class="metric-card">
          <div class="metric-value"><span class="gradient-accent">${m.value}</span></div>
          <div class="metric-label">${m.label}</div>
          <div class="metric-desc">${m.desc}</div>
        </div>
      `).join('');
    }

    // 4. Professional Summary
    const summaryTitle = document.getElementById('summary-section-title');
    const summaryContent = document.getElementById('summary-text');
    if (summaryTitle) summaryTitle.textContent = data.summary.title;
    if (summaryContent) summaryContent.textContent = data.summary.content;

    // 5. Filter Navigation Tabs
    const filterTabs = document.getElementById('filter-tabs');
    if (filterTabs) {
      filterTabs.innerHTML = `
        <button class="filter-btn ${filterCategory === 'all' ? 'active' : ''}" data-cat="all">${data.navTabs.all}</button>
        <button class="filter-btn ${filterCategory === 'fullstack' ? 'active' : ''}" data-cat="fullstack">${data.navTabs.fullstack}</button>
        <button class="filter-btn ${filterCategory === 'ai' ? 'active' : ''}" data-cat="ai">${data.navTabs.ai}</button>
        <button class="filter-btn ${filterCategory === 'mobile' ? 'active' : ''}" data-cat="mobile">${data.navTabs.mobile}</button>
      `;
    }

    // 6. Experience Timeline & Projects
    const expTitle = document.getElementById('experience-section-title');
    if (expTitle) expTitle.textContent = data.experience.title;

    const timelineContainer = document.getElementById('experience-timeline');
    if (timelineContainer) {
      timelineContainer.innerHTML = data.experience.items.map(companyItem => {
        // Filter projects by category
        const filteredProjects = companyItem.projects.filter(p => {
          if (filterCategory === 'all') return true;
          return p.category === filterCategory;
        });

        if (filteredProjects.length === 0 && filterCategory !== 'all') {
          return ''; // omit company if no projects match
        }

        return `
          <div class="company-block">
            <div class="timeline-dot"></div>
            <div class="company-header">
              <div class="company-name-role">
                <span class="company-name">${companyItem.company}</span>
                <span class="role-badge">${companyItem.role}</span>
              </div>
              <div class="company-meta">
                <span class="company-period">${companyItem.period}</span>
                <span>•</span>
                <span class="company-location">${companyItem.location}</span>
              </div>
            </div>

            <div class="company-overview">${companyItem.overview}</div>

            <div class="projects-grid ${filteredProjects.length === 1 ? 'full-width' : ''}">
              ${filteredProjects.map(proj => `
                <div class="project-card">
                  <div class="project-card-header">
                    <h4 class="project-name">${proj.name}</h4>
                    <span class="project-category-tag">${proj.tag}</span>
                  </div>

                  <p class="project-desc">${proj.desc}</p>

                  <ul class="project-highlights">
                    ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                  </ul>

                  <div class="project-tech-pills">
                    ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).filter(Boolean).join('');
    }

    // 7. Sidebar - Core Skills
    const skillsTitle = document.getElementById('skills-section-title');
    if (skillsTitle) skillsTitle.textContent = data.skills.title;

    const skillsContainer = document.getElementById('skills-group-list');
    if (skillsContainer) {
      skillsContainer.innerHTML = data.skills.groups.map(group => `
        <div class="skill-group-box">
          <div class="skill-group-title">${group.name}</div>
          <div class="skill-tags">
            ${group.items.map(skill => {
              const isHighlight = ['YOLOv11', 'PyTorch', 'Vue.js (Vue 3)', 'Laravel', 'Flutter (Dart)', 'Docker', 'AWS'].some(k => skill.includes(k));
              return `<span class="skill-tag ${isHighlight ? 'highlight' : ''}">${skill}</span>`;
            }).join('')}
          </div>
        </div>
      `).join('');
    }

    // 8. Sidebar - Education & Verified Documents
    const eduTitle = document.getElementById('education-section-title');
    if (eduTitle) eduTitle.textContent = data.education.title;

    const eduContainer = document.getElementById('education-content');
    if (eduContainer) {
      const docsHtml = (data.education.documents && data.education.documents.length > 0) ? `
        <div class="edu-docs-section">
          <div class="edu-docs-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>${data.meta.viewDocBtn || "Minh chứng văn bằng & bảng điểm"}</span>
          </div>
          ${data.education.documents.map((doc, idx) => `
            <div class="doc-card" data-doc-index="${idx}" data-doc-src="${doc.src}" title="Click để xem chi tiết">
              <div class="doc-thumb-wrapper">
                <img src="${doc.src}" alt="${doc.title}" class="doc-thumb-img" loading="lazy">
              </div>
              <div class="doc-info">
                <div class="doc-card-title">${doc.title}</div>
                <div class="doc-card-subtitle">${doc.subtitle}</div>
              </div>
              <div class="doc-card-action" aria-label="Xem">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
          `).join('')}
        </div>
      ` : '';

      eduContainer.innerHTML = `
        <div class="education-card">
          <div class="edu-school">${data.education.school}</div>
          <div class="edu-degree">${data.education.degree}</div>
          <div class="edu-major">${data.education.major}</div>
          <div class="edu-period">${data.education.period}</div>
          <div class="edu-meta-badge">${data.education.grade}</div>
          <div class="edu-notes"><strong>GPA:</strong> ${data.education.gpa.replace('GPA:', '')}</div>
          <div class="edu-notes">${data.education.notes}</div>
          ${docsHtml}
        </div>
      `;
    }

    // 9. Sidebar - Awards
    const awardsTitle = document.getElementById('awards-section-title');
    if (awardsTitle) awardsTitle.textContent = data.awards.title;

    const awardsContainer = document.getElementById('awards-list');
    if (awardsContainer) {
      awardsContainer.innerHTML = data.awards.items.map(award => `
        <div class="award-item">
          <div class="award-icon-box">🏆</div>
          <div class="award-content">
            <div class="award-title">${award.title}</div>
            <div class="award-issuer">${award.issuer} • ${award.year}</div>
            <div class="award-desc">${award.desc}</div>
          </div>
        </div>
      `).join('');
    }

    // 10. Sidebar - Interests
    const interestsTitle = document.getElementById('interests-section-title');
    if (interestsTitle) interestsTitle.textContent = data.interests.title;

    const interestsContainer = document.getElementById('interests-list');
    if (interestsContainer) {
      interestsContainer.innerHTML = data.interests.items.map(interest => `
        <div class="interest-item">
          <span class="interest-icon">${interest.icon}</span>
          <span>${interest.text}</span>
        </div>
      `).join('');
    }

    // 11. Footer
    const footerCopyright = document.getElementById('footer-copyright');
    const footerPrintNote = document.getElementById('footer-print-note');
    if (footerCopyright) footerCopyright.textContent = data.footer.copyright;
    if (footerPrintNote) footerPrintNote.textContent = data.footer.printNote;
  }

  /**
   * Set Up Interactive Event Listeners
   */
  function setupEventListeners() {
    // Language Switcher Click
    document.addEventListener('click', (e) => {
      const langBtn = e.target.closest('.lang-btn');
      if (langBtn) {
        const selectedLang = langBtn.dataset.lang;
        if (selectedLang && cvData[selectedLang]) {
          currentLang = selectedLang;
          localStorage.setItem('user_cv_lang', currentLang);
          renderCV(currentLang, currentCategory);
        }
        return;
      }

      // Theme Toggle Click
      const themeBtn = e.target.closest('#theme-toggle');
      if (themeBtn) {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        return;
      }

      // Print Button Click
      const printBtn = e.target.closest('#btn-print-cv');
      if (printBtn) {
        window.print();
        return;
      }

      // Project Filter Tabs Click
      const filterBtn = e.target.closest('.filter-btn');
      if (filterBtn) {
        const cat = filterBtn.dataset.cat;
        if (cat) {
          currentCategory = cat;
          renderCV(currentLang, currentCategory);
        }
        return;
      }

      // Click to Copy Phone / Email
      const copyElem = e.target.closest('[data-copy]');
      if (copyElem) {
        const textToCopy = copyElem.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(cvData[currentLang].meta.copiedToast || "Copied to clipboard!");
          }).catch(err => {
            console.error("Copy failed", err);
          });
        }
        return;
      }

      // Click to View Credential Document (Diploma / Transcript)
      const docCard = e.target.closest('.doc-card');
      if (docCard) {
        const docIndex = parseInt(docCard.dataset.docIndex, 10) || 0;
        openDocModal(docIndex);
        return;
      }

      // Prev/Next buttons inside modal
      if (e.target.closest('#modal-prev-btn')) {
        prevDocModal();
        return;
      }

      if (e.target.closest('#modal-next-btn')) {
        nextDocModal();
        return;
      }

      // Thumbnail inside modal
      const thumbBtn = e.target.closest('.modal-thumb-btn');
      if (thumbBtn) {
        const thumbIndex = parseInt(thumbBtn.dataset.thumbIndex, 10);
        if (!isNaN(thumbIndex)) {
          currentDocIndex = thumbIndex;
          updateDocModalView();
        }
        return;
      }

      // Close Modal when clicking close button or backdrop
      if (e.target.closest('#modal-close-btn') || e.target.id === 'credential-modal') {
        closeDocModal();
        return;
      }
    });

    // Keyboard navigation in Modal: Escape to close, Left/Right arrow to navigate
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('credential-modal');
      const isModalOpen = modal && modal.classList.contains('active');

      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeDocModal();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextDocModal();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevDocModal();
      }
    });
  }

  /**
   * Credential Gallery & Modal Handlers
   */
  let currentDocIndex = 0;

  function openDocModal(index) {
    const modal = document.getElementById('credential-modal');
    if (!modal) return;

    currentDocIndex = index;
    updateDocModalView();

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateDocModalView() {
    const docs = cvData[currentLang].education.documents;
    if (!docs || docs.length === 0) return;

    if (currentDocIndex < 0) currentDocIndex = 0;
    if (currentDocIndex >= docs.length) currentDocIndex = docs.length - 1;

    const doc = docs[currentDocIndex];
    const currentMeta = cvData[currentLang].meta;

    document.getElementById('modal-doc-img').src = doc.src;
    document.getElementById('modal-doc-title').textContent = doc.title;
    document.getElementById('modal-doc-badge').textContent = doc.badge || currentMeta.verifiedBadge || "Verified";
    document.getElementById('modal-doc-desc').textContent = doc.desc || "";

    const counter = document.getElementById('modal-counter');
    if (counter) {
      counter.textContent = `${currentDocIndex + 1} / ${docs.length}`;
    }

    const openOrigBtn = document.getElementById('modal-open-orig-btn');
    if (openOrigBtn) {
      openOrigBtn.href = doc.src;
      const origText = document.getElementById('modal-open-orig-text');
      if (origText) origText.textContent = currentMeta.openOriginal || "Mở ảnh gốc";
    }

    // Render / Update Thumbnails Bar
    const thumbsBar = document.getElementById('modal-thumbs-bar');
    if (thumbsBar) {
      thumbsBar.innerHTML = docs.map((d, i) => `
        <button type="button" class="modal-thumb-btn ${i === currentDocIndex ? 'active' : ''}" data-thumb-index="${i}">
          <img src="${d.src}" alt="${d.title}" class="modal-thumb-mini">
          <span class="modal-thumb-label">${d.badge || d.title}</span>
        </button>
      `).join('');
    }
  }

  function nextDocModal() {
    const docs = cvData[currentLang].education.documents;
    if (!docs || docs.length <= 1) return;
    currentDocIndex = (currentDocIndex + 1) % docs.length;
    updateDocModalView();
  }

  function prevDocModal() {
    const docs = cvData[currentLang].education.documents;
    if (!docs || docs.length <= 1) return;
    currentDocIndex = (currentDocIndex - 1 + docs.length) % docs.length;
    updateDocModalView();
  }

  function closeDocModal() {
    const modal = document.getElementById('credential-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Toast notification handler
   */
  let toastTimeout = null;
  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#10b981;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }
});
