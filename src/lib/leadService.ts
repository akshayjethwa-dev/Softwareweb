import { LeadFormData } from '../components/LeadCaptureForm';
import { trackEvent, getStoredUTMs } from './analytics';

export interface SubmissionPayload extends LeadFormData {
  utms: any;
  sourcePage: string;
  submittedAt: string;
  userAgent: string;
}

/**
 * Robust submission handler designed to be easily swappable for 
 * Firebase, Webhooks, Google Sheets, or Zapier.
 */
export async function submitLead(data: LeadFormData, sourcePage: string): Promise<{ success: boolean; error?: string }> {
  const utms = getStoredUTMs();
  
  const payload: SubmissionPayload = {
    ...data,
    utms,
    sourcePage,
    submittedAt: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
  };

  // Log for local development
  console.log('🚀 [Lead Submission Payload]:', payload);

  try {
    // 1. Analytics Tracking
    trackEvent('form_submit', {
      service: data.service,
      company: data.company,
      ...utms
    });

    // 2. BACKEND INTEGRATION POINT
    // Replace this with your actual fetch call to a webhook or Firebase
    // Example:
    /*
    const response = await fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    */

    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return { success: true };
  } catch (error) {
    console.error('Submission failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again or message us on WhatsApp.' 
    };
  }
}
