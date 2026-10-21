import { FILLOUT_PILOT_URL, CALENDLY_URL } from '../data/pilotConfig';

/**
 * Lightweight event tracker (no keys, safe console fallback & dataLayer integration)
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // If Google Tag Manager / GA4 dataLayer is available
    if ((window as any).dataLayer && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    }

    // Custom browser event for any listener
    try {
      const customEvent = new CustomEvent('elvtera_track_event', {
        detail: { event: eventName, params },
      });
      window.dispatchEvent(customEvent);
    } catch {
      // ignore
    }

    // Always log in development
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics Event] ${eventName}:`, params || {});
    }
  }
};

/**
 * Build Fillout Pilot URL with UTMs and current page path
 */
export const getPilotApplyUrl = (currentPath?: string): string => {
  const path = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '/');

  // If using placeholder anchor, return #apply for modal trigger
  if (FILLOUT_PILOT_URL.startsWith('#')) {
    return '#apply';
  }

  try {
    const url = new URL(FILLOUT_PILOT_URL, typeof window !== 'undefined' ? window.location.origin : 'https://elvtera.com');
    url.searchParams.set('utm_source', 'elvtera_website');
    url.searchParams.set('utm_medium', 'pilot_cta');
    url.searchParams.set('utm_campaign', 'pilot');
    url.searchParams.set('page_path', path);
    return url.toString();
  } catch {
    return FILLOUT_PILOT_URL;
  }
};

/**
 * Trigger Pilot CTA action: fires pilot_cta_click and opens in new tab or opens modal
 */
export const openPilotApply = (currentPath?: string) => {
  trackEvent('pilot_cta_click', {
    page_path: currentPath || (typeof window !== 'undefined' ? window.location.pathname : '/'),
  });

  const targetUrl = getPilotApplyUrl(currentPath);

  if (targetUrl.startsWith('#')) {
    // Open the built-in Pilot Application Modal directly
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-pilot-modal'));
    }
    return;
  }

  // Redirect directly to pilot application URL
  if (typeof window !== 'undefined') {
    window.location.href = targetUrl;
  }
};

/**
 * Trigger Book a Call action: fires book_call_click and opens CALENDLY_URL in new tab
 */
export const openBookCall = () => {
  trackEvent('book_call_click', {
    page_path: typeof window !== 'undefined' ? window.location.pathname : '/',
  });

  if (CALENDLY_URL.startsWith('#')) {
    // If placeholder, navigate to /contact
    window.location.href = '/contact';
    return;
  }

  if (typeof window !== 'undefined') {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  }
};
