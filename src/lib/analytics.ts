import ReactGA from 'react-ga4';

/**
 * Analytics utility for tracking user behavior and conversions.
 * Primarily designed for GA4 (Google Analytics 4).
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// ==========================================
// 1. GA4 INITIALIZATION & PAGE TRACKING
// ==========================================

export const initAnalytics = () => {
  const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (trackingId) {
    ReactGA.initialize(trackingId);
  } else {
    console.warn('Google Analytics Measurement ID is missing.');
  }
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// ==========================================
// 2. CUSTOM EVENT TRACKING
// ==========================================

export type EventName = 
  | 'consultation_cta_click'
  | 'whatsapp_click'
  | 'form_submit'
  | 'pricing_plan_click'
  | 'case_study_open';

export interface EventParams {
  location?: string;
  service?: string;
  plan?: string;
  case_study_id?: string;
  source?: string;
  [key: string]: any;
}

/**
 * Tracks a custom event to GA4
 */
export const trackEvent = (eventName: EventName, params: EventParams = {}) => {
  const timestamp = new Date().toISOString();
  const enrichedParams = {
    ...params,
    timestamp,
    debug_mode: process.env.NODE_ENV !== 'production'
  };

  // 1. Log to console for debugging
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Event]: ${eventName}`, enrichedParams);
  }

  // 2. Push to GA4 if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, enrichedParams);
  }

  // 3. Push to DataLayer (good for GTM)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedParams
    });
  }
};

// ==========================================
// 3. UTM TRACKING UTILITIES
// ==========================================

/**
 * Utility to get UTM parameters from URL
 */
export const getUTMParams = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
  };
};

/**
 * Hook or utility to persist UTMs in session storage (to survive navigation back to home/form)
 */
export const persistUTMs = () => {
  if (typeof window === 'undefined') return;
  
  const utms = getUTMParams();
  if (utms.utm_source) {
    sessionStorage.setItem('ashrey_utms', JSON.stringify(utms));
  }
};

export const getStoredUTMs = () => {
  if (typeof window === 'undefined') return {};
  
  const stored = sessionStorage.getItem('ashrey_utms');
  return stored ? JSON.parse(stored) : {};
};