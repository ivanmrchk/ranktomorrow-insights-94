/**
 * RankTomorrow - Main JavaScript
 * Vanilla JS for static site functionality
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Ready
  // ==========================================================================
  
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdowns();
    initSearchModal();
    initNewsletterModal();
    initAccordions();
    initLazyLoading();
    initSmoothScroll();
  });

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================
  
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const topicsBtn = document.getElementById('mobileTopicsBtn');
    const topicsSubmenu = document.getElementById('mobileTopicsSubmenu');
    
    if (!menuBtn || !menu) return;
    
    menuBtn.addEventListener('click', function() {
      const isOpen = menu.classList.contains('mobile-menu--open');
      
      menu.classList.toggle('mobile-menu--open');
      menuBtn.setAttribute('aria-expanded', !isOpen);
      
      // Toggle icons
      const menuIcon = menuBtn.querySelector('.menu-icon');
      const closeIcon = menuBtn.querySelector('.close-icon');
      
      if (menuIcon && closeIcon) {
        menuIcon.style.display = isOpen ? 'block' : 'none';
        closeIcon.style.display = isOpen ? 'none' : 'block';
      }
    });
    
    // Topics submenu toggle
    if (topicsBtn && topicsSubmenu) {
      topicsBtn.addEventListener('click', function() {
        topicsSubmenu.classList.toggle('mobile-menu__submenu--open');
        const chevron = topicsBtn.querySelector('svg');
        if (chevron) {
          chevron.style.transform = topicsSubmenu.classList.contains('mobile-menu__submenu--open') 
            ? 'rotate(180deg)' 
            : 'rotate(0)';
        }
      });
    }
    
    // Close menu on link click
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('mobile-menu--open');
        menuBtn.setAttribute('aria-expanded', 'false');
        
        const menuIcon = menuBtn.querySelector('.menu-icon');
        const closeIcon = menuBtn.querySelector('.close-icon');
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }

  // ==========================================================================
  // Dropdowns
  // ==========================================================================
  
  function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
      const trigger = dropdown.querySelector('.dropdown__trigger');
      
      if (!trigger) return;
      
      // Mouse enter
      dropdown.addEventListener('mouseenter', function() {
        dropdown.classList.add('dropdown--open');
        trigger.setAttribute('aria-expanded', 'true');
      });
      
      // Mouse leave
      dropdown.addEventListener('mouseleave', function() {
        dropdown.classList.remove('dropdown--open');
        trigger.setAttribute('aria-expanded', 'false');
      });
      
      // Keyboard support
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isOpen = dropdown.classList.contains('dropdown--open');
          dropdown.classList.toggle('dropdown--open');
          trigger.setAttribute('aria-expanded', !isOpen);
        }
        
        if (e.key === 'Escape') {
          dropdown.classList.remove('dropdown--open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('dropdown--open');
          const trigger = dropdown.querySelector('.dropdown__trigger');
          if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  }

  // ==========================================================================
  // Search Modal
  // ==========================================================================
  
  function initSearchModal() {
    const searchBtn = document.getElementById('searchBtn');
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchModal) return;
    
    function openSearch() {
      searchModal.classList.add('modal--open');
      searchOverlay.classList.add('modal-overlay--open');
      document.body.style.overflow = 'hidden';
      
      setTimeout(function() {
        if (searchInput) searchInput.focus();
      }, 100);
    }
    
    function closeSearch() {
      searchModal.classList.remove('modal--open');
      searchOverlay.classList.remove('modal-overlay--open');
      document.body.style.overflow = '';
      
      if (searchInput) searchInput.value = '';
      if (searchResults) {
        searchResults.innerHTML = '<p class="search-modal__empty">Start typing to search...</p>';
      }
    }
    
    // Event listeners
    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', openSearch);
    if (searchClose) searchClose.addEventListener('click', closeSearch);
    if (searchOverlay) searchOverlay.addEventListener('click', closeSearch);
    
    // Keyboard shortcut (Cmd/Ctrl + K)
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      
      if (e.key === 'Escape' && searchModal.classList.contains('modal--open')) {
        closeSearch();
      }
    });
    
    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
          searchResults.innerHTML = '<p class="search-modal__empty">Start typing to search...</p>';
          return;
        }
        
        // Demo search results (replace with real search in production)
        const demoResults = getSearchResults(query);
        
        if (demoResults.length === 0) {
          searchResults.innerHTML = '<p class="search-modal__empty">No results found for "' + escapeHtml(query) + '"</p>';
          return;
        }
        
        let html = '';
        demoResults.forEach(function(result) {
          html += '<a href="' + result.url + '" class="search-modal__result">';
          html += '<div class="search-modal__result-title">' + escapeHtml(result.title) + '</div>';
          html += '<div class="search-modal__result-excerpt">' + escapeHtml(result.excerpt) + '</div>';
          html += '</a>';
        });
        
        searchResults.innerHTML = html;
      }, 300));
    }
  }
  
  // Demo search data
  function getSearchResults(query) {
    const data = [
      { title: 'AI Content Optimization Strategies', excerpt: 'How AI is revolutionizing content optimization...', url: '/articles/ai-content-optimization.html' },
      { title: 'Keyword Clustering Guide', excerpt: 'Advanced keyword clustering strategies...', url: '/articles/keyword-clustering.html' },
      { title: 'Technical SEO Audit Checklist', excerpt: 'Complete guide to technical SEO audits...', url: '/articles/technical-seo-audit.html' },
      { title: 'SEO Title Generator', excerpt: 'Create optimized titles for your content...', url: '/tools/seo-title-generator.html' },
      { title: 'Meta Description Generator', excerpt: 'Generate compelling meta descriptions...', url: '/tools/meta-description-generator.html' },
      { title: 'Content Outline Generator', excerpt: 'Build comprehensive content outlines...', url: '/tools/content-outline-generator.html' },
      { title: 'SEO Strategy Overview', excerpt: 'Comprehensive SEO strategy frameworks...', url: '/topics/seo-strategy.html' },
      { title: 'AI & Automation', excerpt: 'Leverage AI for content and SEO...', url: '/topics/ai-automation.html' }
    ];
    
    return data.filter(function(item) {
      return item.title.toLowerCase().includes(query) || 
             item.excerpt.toLowerCase().includes(query);
    }).slice(0, 5);
  }

  // ==========================================================================
  // Newsletter Modal
  // ==========================================================================
  
  function initNewsletterModal() {
    const newsletterBtn = document.getElementById('newsletterBtn');
    const mobileNewsletterBtn = document.getElementById('mobileNewsletterBtn');
    const newsletterModal = document.getElementById('newsletterModal');
    const newsletterOverlay = document.getElementById('newsletterOverlay');
    const newsletterClose = document.getElementById('newsletterClose');
    const newsletterForm = document.getElementById('newsletterForm');
    const footerNewsletterForm = document.getElementById('footerNewsletterForm');
    
    if (!newsletterModal) return;
    
    function openNewsletter() {
      newsletterModal.classList.add('modal--open');
      newsletterOverlay.classList.add('modal-overlay--open');
      document.body.style.overflow = 'hidden';
    }
    
    function closeNewsletter() {
      newsletterModal.classList.remove('modal--open');
      newsletterOverlay.classList.remove('modal-overlay--open');
      document.body.style.overflow = '';
    }
    
    // Event listeners
    if (newsletterBtn) newsletterBtn.addEventListener('click', openNewsletter);
    if (mobileNewsletterBtn) mobileNewsletterBtn.addEventListener('click', openNewsletter);
    if (newsletterClose) newsletterClose.addEventListener('click', closeNewsletter);
    if (newsletterOverlay) newsletterOverlay.addEventListener('click', closeNewsletter);
    
    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && newsletterModal.classList.contains('modal--open')) {
        closeNewsletter();
      }
    });
    
    // Form submission
    function handleNewsletterSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const email = form.querySelector('input[type="email"]').value;
      
      // Demo: In production, submit to your email service
      console.log('Newsletter signup:', email);
      
      // Show success message
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      
      setTimeout(function() {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
        closeNewsletter();
      }, 2000);
    }
    
    if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    if (footerNewsletterForm) footerNewsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }

  // ==========================================================================
  // Accordions
  // ==========================================================================
  
  function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(function(accordion) {
      const triggers = accordion.querySelectorAll('.accordion__trigger');
      
      triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
          const item = trigger.closest('.accordion__item');
          const content = item.querySelector('.accordion__content');
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          
          // Close all other items (single open mode)
          const allTriggers = accordion.querySelectorAll('.accordion__trigger');
          const allContents = accordion.querySelectorAll('.accordion__content');
          
          allTriggers.forEach(function(t) {
            t.setAttribute('aria-expanded', 'false');
          });
          
          allContents.forEach(function(c) {
            c.classList.remove('accordion__content--open');
          });
          
          // Toggle current item
          if (!isOpen) {
            trigger.setAttribute('aria-expanded', 'true');
            content.classList.add('accordion__content--open');
          }
        });
      });
    });
  }

  // ==========================================================================
  // Lazy Loading
  // ==========================================================================
  
  function initLazyLoading() {
    // Native lazy loading is used via loading="lazy" attribute
    // This is a fallback for older browsers
    
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px'
      });
      
      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // ==========================================================================
  // Smooth Scroll
  // ==========================================================================
  
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, null, href);
        }
      });
    });
  }

  // ==========================================================================
  // Utility Functions
  // ==========================================================================
  
  function debounce(func, wait) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }
  
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ==========================================================================
  // Tool Interactions (for tool pages)
  // ==========================================================================
  
  window.RankTomorrow = {
    // Copy to clipboard
    copyToClipboard: function(text, button) {
      navigator.clipboard.writeText(text).then(function() {
        var originalText = button.textContent;
        button.textContent = 'Copied!';
        
        setTimeout(function() {
          button.textContent = originalText;
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy:', err);
      });
    },
    
    // Show toast notification
    showToast: function(message, type) {
      type = type || 'info';
      
      var toast = document.createElement('div');
      toast.className = 'toast toast--' + type;
      toast.textContent = message;
      toast.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 12px 24px; background: #1a1a2e; color: white; border-radius: 8px; z-index: 9999; animation: fadeIn 0.3s ease;';
      
      document.body.appendChild(toast);
      
      setTimeout(function() {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(function() {
          toast.remove();
        }, 300);
      }, 3000);
    }
  };

})();