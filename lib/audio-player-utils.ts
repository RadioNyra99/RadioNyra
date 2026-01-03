export function showAudioPlayer() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("showAudioPlayer"))
  }
}
