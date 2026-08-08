/**
 * Unified Analytics & Event Tracking System for Radio Nyra
 * Tracks Clicks, Plays, Watch Time, Downloads, Subscriptions, and Advertiser Leads
 */

export interface AnalyticsEvent {
    category: 'CTA' | 'Audio' | 'Video' | 'YouTube' | 'PWA' | 'Advertiser' | 'Community' | 'Search';
    action: string;
    label?: string;
    value?: number;
    metadata?: Record<string, any>;
}

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        fbq?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

export function trackEvent({ category, action, label, value, metadata }: AnalyticsEvent) {
    if (typeof window === 'undefined') return;

    // Log event in development console
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics Track] [${category}] ${action}`, { label, value, metadata });
    }

    // Google Analytics 4 (GA4)
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
            ...metadata
        });
    }

    // Meta Pixel
    if (window.fbq) {
        window.fbq('trackCustom', action, {
            category,
            label,
            value,
            ...metadata
        });
    }
}

// Convenience Tracking Methods
export const trackListenLive = (stationName: string, language: string) => {
    trackEvent({
        category: 'Audio',
        action: 'listen_live_click',
        label: `${stationName} (${language})`,
        metadata: { timestamp: new Date().toISOString() }
    });
};

export const trackYouTubeSubscribe = (source: string) => {
    trackEvent({
        category: 'YouTube',
        action: 'youtube_subscribe_click',
        label: source,
        metadata: { channelUrl: 'https://youtube.com/c/RadioNyraUSA' }
    });
};

export const trackVideoPlay = (videoId: string, title: string, category: string) => {
    trackEvent({
        category: 'Video',
        action: 'video_play',
        label: title,
        metadata: { videoId, category }
    });
};

export const trackAppDownload = (platform: 'ios' | 'android') => {
    trackEvent({
        category: 'PWA',
        action: 'app_download_click',
        label: platform
    });
};

export const trackLeadSubmit = (formType: string, company?: string) => {
    trackEvent({
        category: 'Advertiser',
        action: 'lead_form_submit',
        label: formType,
        metadata: { company }
    });
};

export const trackAISearch = (query: string, resultCount: number) => {
    trackEvent({
        category: 'Search',
        action: 'ai_search_query',
        label: query,
        value: resultCount
    });
};
