import {
  getCurrentRadioShow,
  getEasternTime,
  type EasternTime,
  type LiveShowInfo,
} from "@/lib/radio-content"

export { getEasternTime }
export type { EasternTime, LiveShowInfo }

export function getLiveHindiShow(now = new Date()): LiveShowInfo {
  return getCurrentRadioShow("Hindi", now)
}

export function getLiveTeluguShow(now = new Date()): LiveShowInfo {
  return getCurrentRadioShow("Telugu", now)
}
