// ==========================================================================
// GDPR Cookie Consent Manager
// ==========================================================================

(function() {
  'use strict';

  const COOKIE_NAME = 'cookies_accepted';
  const COOKIE_EXPIRY_DAYS = 365;

  /**
   * Cookie Consent Manager
   */
  const CookieConsent = {
    /**
     * Initialize the cookie consent system
     */
    init() {
      // Check if consent has already been given
      const consent = this.getConsent();
      
      if (consent === null) {
        // No consent stored - show the banner
        this.showBanner();
      } else if (consent === true) {
        // User accepted - load tracking scripts
        this.loadTrackingScripts();
      }
      // If consent === false, do nothing (user rejected)
      
      this.bindEvents();
    },

    /**
     * Get the current consent status
     * @returns {boolean|null} true if accepted, false if rejected, null if not set
     */
    getConsent() {
      const cookie = this.getCookie(COOKIE_NAME);
      if (cookie === 'true') return true;
      if (cookie === 'false') return false;
      return null;
    },

    /**
     * Set consent cookie
     * @param {boolean} accepted - Whether cookies were accepted
     */
    setConsent(accepted) {
      const value = accepted ? 'true' : 'false';
      const expires = new Date();
      expires.setDate(expires.getDate() + COOKIE_EXPIRY_DAYS);
      
      document.cookie = `${COOKIE_NAME}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
      
      // Dispatch custom event for other scripts to listen to
      window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
        detail: { accepted }
      }));
    },

    /**
     * Get a cookie by name
     * @param {string} name - Cookie name
     * @returns {string|null} Cookie value or null
     */
    getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    },

    /**
     * Show the consent banner
     */
    showBanner() {
      const banner = document.getElementById('cookie-consent');
      if (banner) {
        // Small delay for animation
        requestAnimationFrame(() => {
          banner.classList.add('cookie-consent--visible');
        });
      }
    },

    /**
     * Hide the consent banner
     */
    hideBanner() {
      const banner = document.getElementById('cookie-consent');
      if (banner) {
        banner.classList.remove('cookie-consent--visible');
      }
    },

    /**
     * Handle accept action
     */
    handleAccept() {
      this.setConsent(true);
      this.hideBanner();
      this.loadTrackingScripts();
    },

    /**
     * Handle reject action
     */
    handleReject() {
      this.setConsent(false);
      this.hideBanner();
      // Don't load any tracking scripts
    },

    /**
     * Load tracking/analytics scripts after consent
     * Add your Google Analytics, ad scripts, etc. here
     */
    loadTrackingScripts() {
      // Example: Google Analytics
      // Uncomment and add your tracking ID when ready
      /*
      if (typeof gtag === 'undefined') {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID';
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GA_ID');
      }
      */
      
      // Example: Facebook Pixel
      /*
      if (typeof fbq === 'undefined') {
        // Load Facebook Pixel script
      }
      */
      
      // Dispatch event so other scripts know consent was given
      window.dispatchEvent(new CustomEvent('trackingEnabled'));
      
      console.log('Tracking scripts loaded (consent given)');
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
      // Accept button
      const acceptBtn = document.getElementById('cookie-accept');
      if (acceptBtn) {
        acceptBtn.addEventListener('click', () => this.handleAccept());
      }
      
      // Reject button
      const rejectBtn = document.getElementById('cookie-reject');
      if (rejectBtn) {
        rejectBtn.addEventListener('click', () => this.handleReject());
      }
    },

    /**
     * Check if cookies are accepted (utility for other scripts)
     * @returns {boolean}
     */
    isAccepted() {
      return this.getConsent() === true;
    },

    /**
     * Reset consent (for testing or settings page)
     */
    resetConsent() {
      document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      this.showBanner();
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CookieConsent.init());
  } else {
    CookieConsent.init();
  }

  // Expose to global scope for external access
  window.CookieConsent = CookieConsent;
})();
