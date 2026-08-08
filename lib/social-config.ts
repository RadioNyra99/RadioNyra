/**
 * Radio Nyra Official Social Media Configuration & Settings Manager
 * All accounts point strictly to official Radio Nyra platforms.
 * ZERO fake numbers or generated placeholder metrics allowed.
 */

export interface SocialPlatformConfig {
    id: string;
    name: string;
    enabled: boolean;
    handle: string;
    url: string;
    channelId?: string;
    apiKeyEnv?: string;
}

export interface SocialMediaSettings {
    youtube: SocialPlatformConfig & { channelId: string };
    instagram: SocialPlatformConfig;
    facebook: SocialPlatformConfig;
    linkedin: SocialPlatformConfig;
    whatsapp: SocialPlatformConfig;
    telegram: SocialPlatformConfig;
    autoSyncIntervalMinutes: number;
    cacheDurationMinutes: number;
}

export const DEFAULT_SOCIAL_SETTINGS: SocialMediaSettings = {
    youtube: {
        id: "youtube",
        name: "YouTube",
        enabled: true,
        handle: "@RadioNyraUSA",
        channelId: "UC9VgB6gNRgANFfv6LGZuAlw",
        url: "https://www.youtube.com/channel/UC9VgB6gNRgANFfv6LGZuAlw",
        apiKeyEnv: "NEXT_PUBLIC_YOUTUBE_API_KEY",
    },
    instagram: {
        id: "instagram",
        name: "Instagram",
        enabled: true,
        handle: "@radionyrausa",
        url: "https://www.instagram.com/radionyrausa",
        apiKeyEnv: "NEXT_PUBLIC_INSTAGRAM_TOKEN",
    },
    facebook: {
        id: "facebook",
        name: "Facebook",
        enabled: true,
        handle: "Radio Nyra USA",
        url: "https://www.facebook.com/radionyrausa",
        apiKeyEnv: "NEXT_PUBLIC_FACEBOOK_PAGE_ACCESS_TOKEN",
    },
    linkedin: {
        id: "linkedin",
        name: "LinkedIn",
        enabled: true,
        handle: "radionyrausa",
        url: "https://www.linkedin.com/company/radionyrausa",
        apiKeyEnv: "NEXT_PUBLIC_LINKEDIN_ACCESS_TOKEN",
    },
    whatsapp: {
        id: "whatsapp",
        name: "WhatsApp Community",
        enabled: true,
        handle: "+1 (919) 294-4800",
        url: "https://wa.me/19192944800",
    },
    telegram: {
        id: "telegram",
        name: "Telegram Channel",
        enabled: true,
        handle: "@radionyra",
        url: "https://t.me/radionyra",
    },
    autoSyncIntervalMinutes: 15,
    cacheDurationMinutes: 30,
};

const SETTINGS_STORAGE_KEY = "radionyra_social_settings";

export function getSocialSettings(): SocialMediaSettings {
    if (typeof window === "undefined") return DEFAULT_SOCIAL_SETTINGS;
    try {
        const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
        if (stored) {
            return { ...DEFAULT_SOCIAL_SETTINGS, ...JSON.parse(stored) };
        }
    } catch {
        // Fallback to defaults
    }
    return DEFAULT_SOCIAL_SETTINGS;
}

export function saveSocialSettings(settings: SocialMediaSettings): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch {
        console.error("Failed to save social media settings to storage.");
    }
}
