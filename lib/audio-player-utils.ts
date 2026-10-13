export interface ShowPlayerOptions {
    /**
     * true  -> reveal the player and toggle playback (play/pause control)
     * false -> reveal the player and make sure it is playing (a "Listen Live" CTA)
     */
    toggle?: boolean
}

/**
 * Reveals the persistent player. Playback intent is carried on the event so
 * only one place decides whether to start or pause, which avoids the
 * start-then-immediately-stop race a caller-side toggle used to cause.
 */
export function showAudioPlayer(options: ShowPlayerOptions = {}) {
    if (typeof window !== "undefined") {
        window.dispatchEvent(
            new CustomEvent("showAudioPlayer", {
                detail: { toggle: options.toggle === true },
            }),
        )
    }
}
